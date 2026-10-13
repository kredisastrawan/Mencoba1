import React from 'react';
import { Instagram, Youtube, Linkedin, ArrowUp } from 'lucide-react';
import { ActivePage } from './HeaderNav';
import { BYE_LOGO_DATA_URI } from './ByeLogo';

interface FooterMockupProps {
  onNavigate: (page: ActivePage) => void;
}

export const FooterMockup: React.FC<FooterMockupProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#082f49] text-sky-100 pt-16 pb-12 border-t border-sky-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-sky-800/80">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-xl px-2.5 py-1.5 shadow-sm inline-flex items-center justify-center">
                <img src={BYE_LOGO_DATA_URI} alt="Bali Youth Evolution" className="h-10 w-auto" />
              </div>
              <div className="border-l border-sky-600 pl-2.5">
                <div className="text-sm font-bold text-white leading-none">Bali Youth</div>
                <div className="text-xs text-sky-300 leading-none mt-0.5">Evolution</div>
              </div>
            </div>
            <p className="text-xs text-sky-300/80 max-w-sm">
              Platform pengembangan generasi muda dan ekosistem bisnis terintegrasi di Bali.
            </p>
          </div>

          {/* Nav Links matching mockup */}
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium">
            <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="hover:text-white transition-colors cursor-pointer">Home</a>
            <a href="/about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="hover:text-white transition-colors cursor-pointer">About</a>
            <a href="/programs" onClick={(e) => { e.preventDefault(); onNavigate('programs'); }} className="hover:text-white transition-colors cursor-pointer">Programs</a>
            <a href="/ecosystem" onClick={(e) => { e.preventDefault(); onNavigate('ecosystem'); }} className="hover:text-white transition-colors cursor-pointer">Ecosystem</a>
            <a href="/portfolio" onClick={(e) => { e.preventDefault(); onNavigate('portfolio'); }} className="hover:text-white transition-colors cursor-pointer">Portfolio</a>
            <a href="/partnership" onClick={(e) => { e.preventDefault(); onNavigate('partnership'); }} className="hover:text-white transition-colors cursor-pointer">Telah Berkolaborasi Dengan</a>
            <a href="/bec" onClick={(e) => { e.preventDefault(); onNavigate('bec'); }} className="hover:text-white transition-colors cursor-pointer">BEC</a>
            <a href="/prestamedia" onClick={(e) => { e.preventDefault(); onNavigate('prestamedia'); }} className="hover:text-white transition-colors cursor-pointer">Prestamedia</a>
            <a href="/contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="hover:text-white transition-colors cursor-pointer">Contact</a>
          </div>

          {/* Social Icons: Hanya Instagram yang bisa diklik */}
          <div className="flex items-center gap-4 text-sky-200">
            <a
              href="https://instagram.com/baliyouthevolution"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-sky-900/80 hover:bg-[#0284c7] hover:text-white flex items-center justify-center transition-all shadow-xs hover:scale-105"
              aria-label="Instagram Bali Youth Evolution"
              title="Kunjungi Instagram @baliyouthevolution"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* TikTok: Belum bisa diklik */}
            <div
              className="w-9 h-9 rounded-full bg-sky-950/80 text-sky-500/40 flex items-center justify-center font-bold text-xs cursor-not-allowed select-none opacity-50 relative group"
              aria-label="TikTok (Belum tersedia)"
              title="TikTok (Belum tersedia)"
            >
              TK
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-sky-950 text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-xs border border-sky-800">
                Belum tersedia
              </span>
            </div>

            {/* YouTube: Belum bisa diklik */}
            <div
              className="w-9 h-9 rounded-full bg-sky-950/80 text-sky-500/40 flex items-center justify-center cursor-not-allowed select-none opacity-50 relative group"
              aria-label="YouTube (Belum tersedia)"
              title="YouTube (Belum tersedia)"
            >
              <Youtube className="w-4 h-4" />
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-sky-950 text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-xs border border-sky-800">
                Belum tersedia
              </span>
            </div>

            {/* LinkedIn: Belum bisa diklik */}
            <div
              className="w-9 h-9 rounded-full bg-sky-950/80 text-sky-500/40 flex items-center justify-center cursor-not-allowed select-none opacity-50 relative group"
              aria-label="LinkedIn (Belum tersedia)"
              title="LinkedIn (Belum tersedia)"
            >
              <Linkedin className="w-4 h-4" />
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-sky-950 text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-xs border border-sky-800">
                Belum tersedia
              </span>
            </div>
          </div>
        </div>

        {/* Lower Row with copyright & script hashtag */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-300">
          <div>
            &copy; 2025 Bali Youth Evolution. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="font-script text-2xl font-bold text-sky-200">
              #EMPOWERINGYOUTH
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-sky-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
