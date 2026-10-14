import React, { useState, useEffect } from 'react';
import { PartnerLogo, logoSrc } from '../data/partnerLogos';

// Global memory cache so trimming and aspect ratio calculations only compute once per session
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

        // Downscale for fast pixel scanning (max 600px)
        const scaleFactor = Math.min(1, 600 / Math.max(naturalW, naturalH));
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

        // Check if there is significant transparent padding (> 3% on any side)
        const hasExcessPadding =
          minX / scanW > 0.03 ||
          (scanW - 1 - maxX) / scanW > 0.03 ||
          minY / scanH > 0.03 ||
          (scanH - 1 - maxY) / scanH > 0.03;

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
      // First try fetching the URL as blob with CORS
      fetch(rawSrc, { mode: 'cors' })
        .then((r) => {
          if (!r.ok) throw new Error('Fetch failed');
          return r.blob();
        })
        .then((blob) => {
          const blobUrl = URL.createObjectURL(blob);
          const img = new Image();
          img.onload = () => {
            processImageElement(img);
            setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
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
  // Aspect ratio of the trimmed logo (or fallback)
  const aspect = data.aspect || 2;

  // SIZING SYSTEM DESIGNED FOR ROCK-SOLID MOBILE & DESKTOP STABILITY:
  // We NEVER apply raw CSS `transform: scale(...)` without layout constraints,
  // because on mobile CSS transform breaks flexbox and grid boxes, causing
  // link logos to bleed and overlap adjacent logos.
  // Instead, sizes are controlled via explicit, responsive CSS dimensions!
  let sizeClasses = '';

  if (variant === 'marquee') {
    if (aspect >= 2.4) {
      // Wide wordmark (e.g. Metamorph Academy ~3.2, HIMA ~3.5, Bim University ~3.0)
      // Mobile: 36px height (h-9) -> ~115px width (comfortably within max-w-[145px])
      // Tablet/Desktop: 48px - 56px height -> ~160px - 180px width
      sizeClasses = 'h-9 sm:h-12 md:h-14 w-auto max-w-[145px] sm:max-w-[210px] md:max-w-[260px]';
    } else if (aspect >= 1.4) {
      // Standard rectangular logo (e.g. Lippo Mall, Level 21, Chemi, Sangguru)
      // Mobile: 40px height (h-10) -> ~75px width
      // Desktop: 52px - 60px height
      sizeClasses = 'h-10 sm:h-13 md:h-15 w-auto max-w-[120px] sm:max-w-[175px] md:max-w-[210px]';
    } else if (aspect >= 0.85) {
      // Square / round emblem / crest (e.g. Disdikpora ~1.0, GSA ~1.0, BDI ~1.0, BKRAF)
      // Mobile: 48px height (h-12) & 48px width -> perfectly balances optical mass with wide wordmarks!
      // Desktop: 60px - 72px height
      sizeClasses = 'h-12 sm:h-15 md:h-18 w-auto max-w-[52px] sm:max-w-[72px] md:max-w-[88px]';
    } else {
      // Tall vertical logo (e.g. Tenang Jiwa / BJ ~0.7)
      sizeClasses = 'h-13 sm:h-17 md:h-20 w-auto max-w-[44px] sm:max-w-[60px] md:max-w-[75px]';
    }
  } else {
    // Grid variant (PartnershipView) - perfectly contained within mobile 2-col cells
    if (aspect >= 2.4) {
      sizeClasses = 'h-8 sm:h-11 md:h-13 w-auto max-w-[88%]';
    } else if (aspect >= 1.4) {
      sizeClasses = 'h-9 sm:h-12 md:h-14 w-auto max-w-[82%]';
    } else if (aspect >= 0.85) {
      sizeClasses = 'h-11 sm:h-14 md:h-17 w-auto max-w-[70%]';
    } else {
      sizeClasses = 'h-12 sm:h-16 md:h-19 w-auto max-w-[60%]';
    }
  }

  // Handle optional fine-tuning scale if provided in partnerLogos.tsx (clamped to prevent mobile blowup)
  const safeScale = partner.scale ? Math.min(1.3, Math.max(0.7, partner.scale)) : 1;

  return (
    <div
      className={`inline-flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0 ${className}`}
      style={safeScale !== 1 ? { transform: `scale(${safeScale})` } : undefined}
    >
      <img
        src={data.src}
        alt={partner.name}
        loading="lazy"
        draggable={false}
        className={`${sizeClasses} object-contain transition-all duration-300 block select-none`}
      />
    </div>
  );
};
