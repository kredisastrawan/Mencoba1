import React from 'react';
import { PARTNER_LOGOS } from '../../data/partnerLogos';
import { PortfolioItems } from '../PortfolioItems';
import { AutoPartnerLogo } from '../AutoPartnerLogo';

export const PortfolioView: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-[#0284c7] text-white py-14 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Portfolio & Achievements
          </h1>
          <p className="text-base sm:text-lg text-sky-100 font-medium">
            Kisah, kolaborasi, dan dampak nyata.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12">
        {/* Dynamic Portfolio Items */}
        <PortfolioItems />

        {/* Our Partnership: Logo Berjalan Seperti di Home Depan */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 overflow-hidden">
          <style>{`
            @keyframes bye-portfolio-marquee {
              from { transform: translateX(-50%); }
              to   { transform: translateX(0); }
            }
            .bye-portfolio-track {
              display: flex;
              width: max-content;
              animation: bye-portfolio-marquee 60s linear infinite;
            }
            .bye-portfolio-marquee-wrap:hover .bye-portfolio-track {
              animation-play-state: paused;
            }
            @media (prefers-reduced-motion: reduce) {
              .bye-portfolio-track { animation: none; }
            }
          `}</style>

          <h3 className="text-xl sm:text-2xl font-bold text-[#0284c7] mb-6">
            Telah Berkolaborasi Dengan
          </h3>

          <div
            className="bye-portfolio-marquee-wrap overflow-hidden py-4 sm:py-6"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            }}
          >
            <div className="bye-portfolio-track items-center py-3 sm:py-4">
              {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((p, idx) => (
                <div
                  key={idx}
                  className="shrink-0 mx-5 sm:mx-10 md:mx-14 flex items-center justify-center select-none group h-16 sm:h-22 md:h-28"
                >
                  <AutoPartnerLogo partner={p} variant="marquee" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
