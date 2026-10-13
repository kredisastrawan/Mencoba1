import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutBannerMockupProps {
  onLearnMore: () => void;
}

export const AboutBannerMockup: React.FC<AboutBannerMockupProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[360px] sm:min-h-[440px] flex items-center">
          {/* Background image of Ulun Danu Beratan Lake Temple */}
          <img
            src="https://i.ibb.co.com/Ng2PZ4mV/1.jpg"
            alt="Pura Ulun Danu Beratan Bali - About Bali Youth Evolution"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-950/80 via-sky-900/40 to-transparent pointer-events-none" />

          {/* Left Floating Card matching mockup */}
          <div className="relative z-10 p-6 sm:p-12 max-w-xl">
            <div className="bg-[#0284c7]/90 backdrop-blur-md text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-sky-400/40 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                About BYE
              </h3>

              <p className="text-sm sm:text-base text-sky-50 leading-relaxed font-normal">
                <strong className="font-semibold text-white">Bali Youth Evolution</strong> hadir sebagai ekosistem yang menghubungkan pemuda, komunitas, bisnis, dan berbagai pihak untuk menciptakan peluang, keterampilan, dan dampak nyata bagi masa depan Bali dan Indonesia.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0284c7] hover:bg-sky-50 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer whitespace-nowrap active:scale-95"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
