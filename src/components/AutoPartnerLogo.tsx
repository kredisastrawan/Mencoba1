import React, { useState, useEffect } from 'react';
import { PartnerLogo, logoSrc } from '../data/partnerLogos';

// Global cache in memory so trimming only computes once per URL/file
const trimmedCache = new Map<string, { src: string; aspect: number; wasTrimmed: boolean }>();

interface AutoPartnerLogoProps {
  partner: PartnerLogo;
  variant?: 'marquee' | 'grid';
  className?: string;
}

export const AutoPartnerLogo: React.FC<AutoPartnerLogoProps> = ({
  partner,
  variant = 'marquee',
  className = '',
}) => {
  const rawSrc = logoSrc(partner.file);
  const isExternalLink = /^https?:\/\//i.test(partner.file);

  const [data, setData] = useState<{ src: string; aspect: number; wasTrimmed: boolean }>(() => {
    return trimmedCache.get(rawSrc) || { src: rawSrc, aspect: 2, wasTrimmed: false };
  });

  useEffect(() => {
    if (trimmedCache.has(rawSrc)) {
      setData(trimmedCache.get(rawSrc)!);
      return;
    }

    let isMounted = true;

    // Helper to process an Image element into cropped canvas
    const processImageElement = (img: HTMLImageElement) => {
      try {
        const naturalW = img.naturalWidth || img.width || 300;
        const naturalH = img.naturalHeight || img.height || 100;

        // Downscale for instant pixel scanning (max 800px)
        const scaleFactor = Math.min(1, 800 / Math.max(naturalW, naturalH));
        const scanW = Math.max(10, Math.round(naturalW * scaleFactor));
        const scanH = Math.max(10, Math.round(naturalH * scaleFactor));

        const canvas = document.createElement('canvas');
        canvas.width = scanW;
        canvas.height = scanH;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });

        if (!ctx) throw new Error('No 2d context');

        ctx.drawImage(img, 0, 0, scanW, scanH);
        const imgData = ctx.getImageData(0, 0, scanW, scanH);
        const pixels = imgData.data;

        let minX = scanW;
        let maxX = 0;
        let minY = scanH;
        let maxY = 0;
        let hasContent = false;

        // Scan pixels for non-transparent content (alpha > 15)
        for (let y = 0; y < scanH; y++) {
          const rowOffset = y * scanW * 4;
          for (let x = 0; x < scanW; x++) {
            const alpha = pixels[rowOffset + x * 4 + 3];
            if (alpha > 15) {
              hasContent = true;
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }

        // Check if there is significant transparent padding (> 4% on any side)
        const hasExcessPadding =
          minX / scanW > 0.04 ||
          (scanW - 1 - maxX) / scanW > 0.04 ||
          minY / scanH > 0.04 ||
          (scanH - 1 - maxY) / scanH > 0.04;

        if (hasContent && hasExcessPadding && maxX > minX && maxY > minY) {
          // Crop tight with 1% margin
          const padX = Math.round((maxX - minX) * 0.01);
          const padY = Math.round((maxY - minY) * 0.01);

          const cropX = Math.max(0, minX - padX);
          const cropY = Math.max(0, minY - padY);
          const cropW = Math.min(scanW - cropX, maxX - minX + 1 + padX * 2);
          const cropH = Math.min(scanH - cropY, maxY - minY + 1 + padY * 2);

          const cropCanvas = document.createElement('canvas');
          cropCanvas.width = cropW;
          cropCanvas.height = cropH;
          const cropCtx = cropCanvas.getContext('2d');

          if (cropCtx) {
            cropCtx.drawImage(canvas, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);
            const trimmedSrc = cropCanvas.toDataURL('image/png');
            const aspect = cropW / cropH;
            const res = { src: trimmedSrc, aspect, wasTrimmed: true };
            trimmedCache.set(rawSrc, res);
            if (isMounted) setData(res);
            return;
          }
        }

        // Content already tight or no crop needed
        const aspect = naturalW / naturalH;
        const res = { src: rawSrc, aspect, wasTrimmed: false };
        trimmedCache.set(rawSrc, res);
        if (isMounted) setData(res);
      } catch {
        const aspect = img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : 2;
        const res = { src: rawSrc, aspect, wasTrimmed: false };
        trimmedCache.set(rawSrc, res);
        if (isMounted) setData(res);
      }
    };

    // Strategy 1 for external links: fetch blob with CORS to guarantee untainted canvas
    if (isExternalLink) {
      // Use cache-busting to bypass browser's opaque image cache
      const corsUrl = rawSrc.includes('?') ? `${rawSrc}&c=1` : `${rawSrc}?c=1`;
      fetch(corsUrl, { mode: 'cors' })
        .then((r) => {
          if (!r.ok) throw new Error('Fetch failed');
          return r.blob();
        })
        .then((blob) => {
          const blobUrl = URL.createObjectURL(blob);
          const img = new Image();
          img.onload = () => {
            processImageElement(img);
            URL.revokeObjectURL(blobUrl);
          };
          img.onerror = () => {
            URL.revokeObjectURL(blobUrl);
            fallbackDirectLoad();
          };
          img.src = blobUrl;
        })
        .catch(() => {
          fallbackDirectLoad();
        });
    } else {
      fallbackDirectLoad();
    }

    function fallbackDirectLoad() {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => processImageElement(img);
      img.onerror = () => {
        const res = { src: rawSrc, aspect: 2, wasTrimmed: false };
        trimmedCache.set(rawSrc, res);
        if (isMounted) setData(res);
      };
      img.src = rawSrc;
    }

    return () => {
      isMounted = false;
    };
  }, [rawSrc, isExternalLink]);

  // Optical Size Balance Engine
  const aspect = data.aspect || 2;

  // SIZING SYSTEM FOR LINK-BASED AND LOCAL LOGOS:
  // If user provided a specific scale in partnerLogos.tsx, use it.
  // If it's an external link and hasn't been trimmed yet, apply auto-compensation (2.2x)
  // so that uncropped Canva square artboards never look tiny!
  let effectiveScale = partner.scale ?? 1;
  if (!partner.scale && isExternalLink && !data.wasTrimmed) {
    // Automatic Link Safety Scaling:
    // If it's a square/nearly square artboard (typical Canva export), boost by 2.2x
    effectiveScale = aspect < 1.4 ? 2.2 : 1.8;
  }

  // LARGER BASE SIZES (as requested: "besarkan lagi logonya")
  let sizeClasses = '';
  if (variant === 'marquee') {
    if (aspect >= 3.0) {
      // Wide wordmark (e.g. Metamorph, HIMA, Bim University)
      sizeClasses = 'h-14 sm:h-18 md:h-22 w-auto max-w-[280px] sm:max-w-[340px] md:max-w-[420px]';
    } else if (aspect >= 1.5) {
      // Standard rectangular logo
      sizeClasses = 'h-16 sm:h-20 md:h-24 w-auto max-w-[220px] sm:max-w-[280px] md:max-w-[340px]';
    } else if (aspect >= 0.85) {
      // Square / round emblem / crest (e.g. Disdikpora, Tenang Jiwa, AE Group)
      sizeClasses = 'h-18 sm:h-22 md:h-26 w-auto max-w-[180px] sm:max-w-[220px]';
    } else {
      // Tall vertical logo
      sizeClasses = 'h-20 sm:h-24 md:h-28 w-auto max-w-[150px] sm:max-w-[180px]';
    }
  } else {
    // Grid variant (PartnershipView)
    if (aspect >= 3.0) {
      sizeClasses = 'h-14 sm:h-16 md:h-18 w-auto max-w-[96%]';
    } else if (aspect >= 1.5) {
      sizeClasses = 'h-16 sm:h-18 md:h-22 w-auto max-w-[92%]';
    } else if (aspect >= 0.85) {
      sizeClasses = 'h-18 sm:h-22 md:h-24 w-auto max-w-[85%]';
    } else {
      sizeClasses = 'h-20 sm:h-24 md:h-26 w-auto max-w-[75%]';
    }
  }

  return (
    <div
      className={`inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${className}`}
      style={effectiveScale !== 1 ? { transform: `scale(${effectiveScale})` } : undefined}
    >
      <img
        src={data.src}
        alt={partner.name}
        draggable={false}
        className={`${sizeClasses} object-contain transition-all duration-300`}
      />
    </div>
  );
};
