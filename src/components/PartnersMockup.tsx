import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PARTNER_LOGOS } from '../data/partnerLogos';
import { AutoPartnerLogo } from './AutoPartnerLogo';

interface PartnersMockupProps {
  onViewAll: () => void;
}

export const PartnersMockup: React.FC<PartnersMockupProps> = ({ onViewAll }) => {
  // Daftar digandakan supaya putarannya mulus tanpa jeda
  const loop = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section id="partnership" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <style>{`
        @keyframes bye-marquee-ltr {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .bye-marquee-track {
          display: flex;
          width: max-content;
          animation: bye-marquee-ltr 60s linear infinite;
        }
        .bye-marquee:hover .bye-marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .bye-marquee-track { animation: none; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 sm:mb-10">
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

      {/* Logo berjalan kiri ke kanan tanpa shape kotak & tanpa shadow */}
      <div
        className="bye-marquee overflow-hidden py-6 sm:py-8"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        }}
      >
        <div className="bye-marquee-track items-center py-3 sm:py-6">
          {loop.map((p, idx) => (
            <div
              key={idx}
              className="shrink-0 mx-5 sm:mx-10 md:mx-14 flex items-center justify-center select-none group h-16 sm:h-22 md:h-28"
            >
              <AutoPartnerLogo partner={p} variant="marquee" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};