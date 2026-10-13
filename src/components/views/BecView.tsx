import React from 'react';
import { ArrowRight } from 'lucide-react';
import { logoSrc } from '../../data/partnerLogos';

// GANTI dengan deskripsi asli BEC
const BEC_DESCRIPTION =
  'Bali Entrepreneur Circle (BEC) adalah bagian dari ekosistem Bali Youth Evolution yang mendukung pertumbuhan wirausaha muda di Bali.';

interface BecViewProps {
  onContact: () => void;
}

export const BecView: React.FC<BecViewProps> = ({ onContact }) => {
  return (
    <section className="py-14 sm:py-20 bg-slate-50 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <img
          src={logoSrc('BEC.png')}
          alt="Bali Entrepreneur Circle"
          className="h-32 sm:h-40 w-auto mx-auto object-contain"
        />
        <h1 className="mt-8 text-3xl sm:text-5xl font-extrabold text-[#0284c7] tracking-tight">
          Bali Entrepreneur Circle
        </h1>
        <p className="mt-5 text-slate-600 leading-relaxed text-base sm:text-lg">
          {BEC_DESCRIPTION}
        </p>
        <button
          type="button"
          onClick={onContact}
          className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0284c7] text-white hover:bg-[#0369a1] font-bold text-sm shadow-md transition-all cursor-pointer active:scale-95"
        >
          <span>Hubungi Kami</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
