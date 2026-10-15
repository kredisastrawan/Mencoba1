import React, { useState, useMemo } from 'react';

export interface PrestamediaShareStatsProps {
  articleId?: string;
  slug: string;
  title: string;
  cover?: string;
  className?: string;
}

// Fungsi hash deterministik untuk menghasilkan angka random unik yang stabil per artikel
function hashSeed(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// Menghitung angka random:
// - Shares: antara 500 sampai 900
// - Views: antara 1500 sampai 2500
export function getArticleRandomStats(slugOrId: string) {
  const hash = hashSeed(slugOrId || 'prestamedia-default');
  const defaultShares = 500 + (hash % 401); // 500 - 900
  const defaultViews = 1500 + (Math.floor(hash / 401) % 1001); // 1500 - 2500
  return { defaultShares, defaultViews };
}

export const PrestamediaShareStats: React.FC<PrestamediaShareStatsProps> = ({
  articleId,
  slug,
  title,
  cover,
  className = '',
}) => {
  const seedKey = slug || articleId || title;
  const { defaultShares, defaultViews } = useMemo(
    () => getArticleRandomStats(seedKey),
    [seedKey]
  );

  const storageKey = `prestamedia_stats_${seedKey}`;

  const [shares, setShares] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (typeof parsed.shares === 'number') return parsed.shares;
        }
      } catch {}
    }
    return defaultShares;
  });

  const [views] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (typeof parsed.views === 'number') return parsed.views;
        }
      } catch {}
    }
    return defaultViews;
  });

  // Format Views: e.g. 1850 -> 1.9k, 1200 -> 1.2k
  const formattedViews = useMemo(() => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toLocaleString('id-ID');
  }, [views]);

  // Handle Share ke Media Sosial & Tambah Angka Shares
  const handleShare = (platform: 'facebook' | 'x' | 'linkedin' | 'pinterest' | 'whatsapp' | 'telegram') => {
    // 1. Tambah counter share
    const nextShares = shares + 1;
    setShares(nextShares);

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(storageKey, JSON.stringify({ shares: nextShares, views }));
      } catch {}
    }

    // 2. URL dan parameter share
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const encUrl = encodeURIComponent(currentUrl);
    const encTitle = encodeURIComponent(title);
    const encCover = encodeURIComponent(cover || '');

    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encUrl}`;
        break;
      case 'x':
        shareUrl = `https://twitter.com/intent/tweet?url=${encUrl}&text=${encTitle}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encUrl}`;
        break;
      case 'pinterest':
        shareUrl = `https://pinterest.com/pin/create/button/?url=${encUrl}&media=${encCover}&description=${encTitle}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encTitle}%0A%0A${encUrl}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encUrl}&text=${encTitle}`;
        break;
    }

    if (shareUrl && typeof window !== 'undefined') {
      const w = 620;
      const h = 580;
      const left = window.screen.width / 2 - w / 2;
      const top = window.screen.height / 2 - h / 2;
      window.open(
        shareUrl,
        '_blank',
        `noopener,noreferrer,toolbar=0,status=0,width=${w},height=${h},top=${top},left=${left}`
      );
    }
  };

  return (
    <div
      className={`flex flex-wrap items-center gap-x-6 gap-y-4 my-6 py-2 select-none ${className}`}
      aria-label="Statistik & Bagikan Berita"
    >
      {/* Bagian Statistik Kiri: SHARES & VIEWS dengan slash miring */}
      <div className="flex items-center gap-5 sm:gap-6 shrink-0">
        {/* Angka Random SHARES (500 - 900) */}
        <div className="flex flex-col">
          <span className="text-3xl sm:text-[38px] font-black text-[#e11d48] tracking-tight leading-none">
            {shares.toLocaleString('id-ID')}
          </span>
          <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase mt-1">
            SHARES
          </span>
        </div>

        {/* Angka Random VIEWS (1500 - 2500) */}
        <div className="flex flex-col">
          <span className="text-3xl sm:text-[38px] font-black text-slate-900 tracking-tight leading-none">
            {formattedViews}
          </span>
          <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase mt-1">
            VIEWS
          </span>
        </div>

        {/* Pemisah Garis Miring Diagonal */}
        <span className="text-3xl sm:text-4xl font-light text-slate-300 -translate-y-0.5 select-none pl-1">
          /
        </span>
      </div>

      {/* Bagian Tombol Media Sosial Kanan: Facebook, X, LinkedIn, Pinterest, WhatsApp, Telegram */}
      <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
        {/* 1. Facebook (#4267b2) */}
        <button
          type="button"
          onClick={() => handleShare('facebook')}
          title="Bagikan ke Facebook"
          aria-label="Bagikan ke Facebook"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-[8px] bg-[#4267b2] hover:bg-[#365492] text-white flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
            <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.52-.14-2.85-.14C11.79 2 10 3.73 10 7.09v2.41H7v4h3V22h4v-8.5z" />
          </svg>
        </button>

        {/* 2. X / Twitter (#000000) */}
        <button
          type="button"
          onClick={() => handleShare('x')}
          title="Bagikan ke X"
          aria-label="Bagikan ke X"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-[8px] bg-black hover:bg-neutral-800 text-white flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </button>

        {/* 3. LinkedIn (#0077b5) */}
        <button
          type="button"
          onClick={() => handleShare('linkedin')}
          title="Bagikan ke LinkedIn"
          aria-label="Bagikan ke LinkedIn"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-[8px] bg-[#0077b5] hover:bg-[#006097] text-white flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true">
            <path d="M19 20h-3.5v-5.6c0-1.3-.03-3-1.85-3-1.85 0-2.14 1.45-2.14 2.94V20H8V9.5h3.35v1.44h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.34V20zM4.6 6.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm1.7 13.2H2.8V9.5h3.5V20z" />
          </svg>
        </button>

        {/* 4. Pinterest (#cb2027) */}
        <button
          type="button"
          onClick={() => handleShare('pinterest')}
          title="Simpan ke Pinterest"
          aria-label="Simpan ke Pinterest"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-[8px] bg-[#cb2027] hover:bg-[#b01b21] text-white flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.17-.1-.95-.2-2.4.04-3.44.22-.94 1.4-5.97 1.4-5.97s-.36-.72-.36-1.78c0-1.67.97-2.91 2.17-2.91 1.02 0 1.52.77 1.52 1.69 0 1.03-.66 2.57-1 4-.28 1.19.6 2.17 1.78 2.17 2.13 0 3.77-2.25 3.77-5.5 0-2.87-2.06-4.88-5.01-4.88-3.41 0-5.42 2.56-5.42 5.2 0 1.03.4 2.14.9 2.74.1.12.11.22.08.35-.1.37-.3 1.2-.34 1.36-.05.22-.17.27-.4.16-1.5-.69-2.43-2.88-2.43-4.65 0-3.77 2.75-7.25 7.92-7.25 4.16 0 7.4 2.97 7.4 6.92 0 4.14-2.6 7.46-6.23 7.46-1.22 0-2.36-.63-2.76-1.38l-.75 2.85c-.27 1.05-1 2.35-1.5 3.15C9.7 23.8 10.82 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
          </svg>
        </button>

        {/* 5. WhatsApp (#075e54 / #0b6656) */}
        <button
          type="button"
          onClick={() => handleShare('whatsapp')}
          title="Bagikan ke WhatsApp"
          aria-label="Bagikan ke WhatsApp"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-[8px] bg-[#075e54] hover:bg-[#054c43] text-white flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.35.06-.53.27-.19.2-.72.7-.72 1.72s.74 2 1.02 2.37c.28.38 2.05 3.13 5 4.39 2.45 1.04 2.95.84 3.48.79.53-.06 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.57-.34-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.5-.89-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57Z" />
          </svg>
        </button>

        {/* 6. Telegram (#0088cc) */}
        <button
          type="button"
          onClick={() => handleShare('telegram')}
          title="Bagikan ke Telegram"
          aria-label="Bagikan ke Telegram"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-[8px] bg-[#0088cc] hover:bg-[#0077b3] text-white flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PrestamediaShareStats;
