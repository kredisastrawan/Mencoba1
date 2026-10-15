import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HOME_MARQUEE_LOGOS, getPartnerLogosByRow } from '../data/partnerLogos';
import { AutoPartnerLogo } from './AutoPartnerLogo';

interface PartnersMockupProps {
  onViewAll: () => void;
}

export const PartnersMockup: React.FC<PartnersMockupProps> = ({ onViewAll }) => {
  // Pisahkan logo atas dan logo bawah khusus untuk Marquee Home Depan
  const { topLogos, bottomLogos } = getPartnerLogosByRow(HOME_MARQUEE_LOGOS);

  // Duplikasi list untuk continuous 100% endless loop scrolling ke kiri tanpa jump/glitch
  const row1 = [...topLogos, ...topLogos];
  const row2 = [...bottomLogos, ...bottomLogos];

  return (
    <section id="partnership" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80 overflow-hidden">
      {/* Keyframes continuous smooth infinite marquee scroll ke kiri & pause on hover */}
      <style>{`
        @keyframes bye-marquee-infinite-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track-top {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: bye-marquee-infinite-left 38s linear infinite;
        }

        .marquee-track-bottom {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: bye-marquee-infinite-left 44s linear infinite;
        }

        .bye-marquee-container:hover .marquee-track-top,
        .bye-marquee-container:hover .marquee-track-bottom {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track-top,
          .marquee-track-bottom {
            animation: none;
          }
        }
      `}</style>

      {/* Header section: Tetap gunakan teks 'Telah Berkolaborasi Dengan' & tombol 'View All' */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0284c7] tracking-tight">
            Telah Berkolaborasi Dengan
          </h2>

          <button
            type="button"
            onClick={onViewAll}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0284c7] hover:text-sky-700 transition-colors cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2-Row Stacked Infinite Marquee TANPA shape kotak di setiap logo & dengan linear gradient fade mask */}
      <div
        className="bye-marquee-container space-y-6 sm:space-y-8 py-2"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
        }}
      >
        {/* Baris 1 (Display Atas): scrolling infinitely ke kiri */}
        <div className="overflow-hidden py-1">
          <div className="marquee-track-top items-center">
            {row1.map((p, idx) => (
              <div
                key={`top-${idx}`}
                className="shrink-0 mx-6 sm:mx-10 md:mx-14 flex items-center justify-center select-none group h-16 sm:h-22 md:h-28"
              >
                <AutoPartnerLogo partner={p} variant="marquee" />
              </div>
            ))}
          </div>
        </div>

        {/* Baris 2 (Display Bawah): scrolling infinitely ke kiri */}
        <div className="overflow-hidden py-1">
          <div className="marquee-track-bottom items-center">
            {row2.map((p, idx) => (
              <div
                key={`bottom-${idx}`}
                className="shrink-0 mx-6 sm:mx-10 md:mx-14 flex items-center justify-center select-none group h-16 sm:h-22 md:h-28"
              >
                <AutoPartnerLogo partner={p} variant="marquee" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};