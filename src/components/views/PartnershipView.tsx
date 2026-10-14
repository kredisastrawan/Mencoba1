import React from 'react';
import { PARTNER_LOGOS } from '../../data/partnerLogos';
import { AutoPartnerLogo } from '../AutoPartnerLogo';

export const PartnershipView: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-slate-50 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0284c7] tracking-tight">
            Telah Berkolaborasi Dengan
          </h1>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Sekolah, kampus, komunitas, dan pelaku usaha yang berkolaborasi bersama Bali Youth Evolution.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-10 items-center">
          {PARTNER_LOGOS.map((p, idx) => (
            <div
              key={idx}
              className="w-full h-32 sm:h-36 md:h-44 flex items-center justify-center p-3 group transition-transform duration-300 hover:scale-105"
            >
              <AutoPartnerLogo partner={p} variant="grid" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};