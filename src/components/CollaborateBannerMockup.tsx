import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PaperPlaneVector } from './PaperPlaneVector';

interface CollaborateBannerMockupProps {
  onGetInTouch: () => void;
}

export const CollaborateBannerMockup: React.FC<CollaborateBannerMockupProps> = ({
  onGetInTouch,
}) => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-xl min-h-[280px] sm:min-h-[340px] flex items-center">
          {/* Panoramic Coastline Background */}
          <img
            src="/src/assets/images/bali_coastal_landscape_1791447090899.jpg"
            alt="Pesona Alam Bali - Kolaborasi Bersama BYE"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Blue Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0284c7]/95 via-[#0284c7]/85 to-sky-600/70 pointer-events-none" />

          {/* Paper Plane Flying */}
          <div className="absolute top-8 right-1/4 pointer-events-none hidden md:block">
            <PaperPlaneVector className="w-14 h-14 text-white" withTrajectory={true} />
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-12 w-full flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl text-white space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Let's Collaborate
              </h2>
              <p className="text-sm sm:text-base text-sky-100 leading-relaxed">
                Bersama, kita bisa menciptakan lebih banyak peluang, memberikan dampak nyata, dan membangun masa depan yang lebih baik.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onGetInTouch}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0284c7] hover:bg-sky-50 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer whitespace-nowrap active:scale-95"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Handwritten Tag */}
            <div className="text-right self-end md:self-center">
              <span className="font-script text-3xl sm:text-5xl font-bold text-white drop-shadow-md">
                #EMPOWERINGYOUTH
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
