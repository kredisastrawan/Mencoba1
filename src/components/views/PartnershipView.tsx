import React from 'react';
import { PARTNERSHIP_PAGE_LOGOS } from '../../data/partnerLogos';
import { AutoPartnerLogo } from '../AutoPartnerLogo';

export const PartnershipView: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-slate-50 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0284c7] tracking-tight">
            Telah Berkolaborasi Dengan
          </h1>
          <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
            Sekolah, kampus, komunitas, dan pelaku usaha yang berkolaborasi bersama Bali Youth Evolution.
          </p>
        </div>

        {/* Grid Partner Kolom Terpisah: Jarak lega & ukuran seragam tanpa logo yang mepet */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 sm:gap-x-12 md:gap-x-14 gap-y-12 sm:gap-y-16 items-center justify-items-center">
          {PARTNERSHIP_PAGE_LOGOS.map((p, idx) => (
            <div
              key={idx}
              className="w-full h-20 sm:h-24 md:h-28 flex items-center justify-center p-2 group transition-transform duration-300 hover:scale-105"
            >
              <AutoPartnerLogo partner={p} variant="grid" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};