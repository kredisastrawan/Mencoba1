import React from 'react';
import { PARTNER_LOGOS, logoSrc } from '../../data/partnerLogos';

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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-14 items-center">
          {PARTNER_LOGOS.map((p, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center p-3 transition-transform duration-300 hover:scale-105"
            >
              <div className="w-full h-32 sm:h-40 md:h-44 flex items-center justify-center">
                <img
                  src={logoSrc(p.file)}
                  alt={p.name}
                  draggable={false}
                  className="max-h-28 sm:max-h-36 md:max-h-40 max-w-full object-contain transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};