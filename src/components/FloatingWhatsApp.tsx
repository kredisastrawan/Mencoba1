import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  const cleanNumber = COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '');
  const message = encodeURIComponent('Halo Bali Youth Evolution! Saya ingin konsultasi mengenai program dan layanan.');
  const waUrl = `https://wa.me/${cleanNumber}?text=${message}`;

  return (
    <aside
      aria-label="Kontak Cepat WhatsApp"
      className="fixed bottom-5 right-5 z-30 group flex items-center"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white pl-3.5 pr-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 active:scale-95"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span className="text-xs font-semibold whitespace-nowrap hidden sm:inline-block">
          Chat WhatsApp
        </span>
      </a>
    </aside>
  );
};
