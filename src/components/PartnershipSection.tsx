import React from 'react';
import { PARTNER_LOGOS, PartnerLogo, getPartnerLogosByRow } from '../data/partnerLogos';
import { AutoPartnerLogo } from './AutoPartnerLogo';

export interface PartnershipSectionProps {
  className?: string;
  headerTitle?: string;
  headerSubtitle?: string;
  partners?: PartnerLogo[];
}

export const PartnershipSection: React.FC<PartnershipSectionProps> = ({
  className = '',
  headerTitle = 'Telah Berkolaborasi Dengan',
  headerSubtitle,
  partners = PARTNER_LOGOS,
}) => {
  // Pisahkan logo atas dan bawah menggunakan sistem row: 'atas' | 'bawah'
  const { topLogos, bottomLogos } = getPartnerLogosByRow(partners);

  // Duplikasi list untuk continuous 100% endless loop scrolling ke kiri tanpa jump/glitch
  const row1 = [...topLogos, ...topLogos];
  const row2 = [...bottomLogos, ...bottomLogos];

  return (
    <section className={`py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80 overflow-hidden ${className}`}>
      {/* Scoped Keyframes for smooth infinite left marquee and pause-on-hover */}
      <style>{`
        @keyframes marquee-infinite-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track-row1 {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-infinite-left 38s linear infinite;
        }

        .marquee-track-row2 {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-infinite-left 44s linear infinite;
        }

        .marquee-container:hover .marquee-track-row1,
        .marquee-container:hover .marquee-track-row2 {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track-row1,
          .marquee-track-row2 {
            animation: none;
          }
        }
      `}</style>

      {/* Section Header */}
      {headerTitle && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0284c7] tracking-tight leading-tight max-w-4xl mx-auto">
            {headerTitle}
          </h2>
          {headerSubtitle && (
            <p className="mt-3.5 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {headerSubtitle}
            </p>
          )}
        </div>
      )}

      {/* 2-Row Stacked Infinite Marquee TANPA shape kotak di setiap logo & dengan Linear-Gradient Fade Masks */}
      <div
        className="marquee-container space-y-5 sm:space-y-8 py-2"
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
        }}
      >
        {/* Row 1: Scrolling infinitely to the left */}
        <div className="overflow-hidden py-1">
          <div className="marquee-track-row1 items-center">
            {row1.map((p, idx) => (
              <div
                key={`r1-${idx}`}
                className="shrink-0 mx-6 sm:mx-10 md:mx-14 flex items-center justify-center select-none group h-16 sm:h-22 md:h-28"
              >
                <AutoPartnerLogo partner={p} variant="marquee" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling infinitely to the left */}
        <div className="overflow-hidden py-1">
          <div className="marquee-track-row2 items-center">
            {row2.map((p, idx) => (
              <div
                key={`r2-${idx}`}
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

export const TwoRowLogoMarquee = PartnershipSection;
export default PartnershipSection;
