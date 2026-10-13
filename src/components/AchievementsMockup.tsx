import React from 'react';
import { ArrowRight, Trophy } from 'lucide-react';

interface AchievementsMockupProps {
  onViewAll: () => void;
}

export const AchievementsMockup: React.FC<AchievementsMockupProps> = ({ onViewAll }) => {
  const metrics = [
    { value: '120+', label: 'Anggota Program' },
    { value: '20+', label: 'Mitra Kolaborasi' },
    { value: '10+', label: 'Event Program' },
    { value: '5+', label: 'Proyek Sosial' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0284c7] tracking-tight">
            Achievements
          </h2>

          <button
            type="button"
            onClick={onViewAll}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0284c7] hover:text-sky-700 transition-colors cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: 4 Big Numbers */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6 sm:gap-8">
            {metrics.map((m, idx) => (
              <div key={idx} className="border-l-4 border-sky-400 pl-4 py-1">
                <div className="text-3xl sm:text-5xl font-black text-[#0284c7] font-mono tracking-tight tabular-nums">
                  {m.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Photo Collage of Event Crowds */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-slate-100 transform -rotate-1 hover:rotate-0 transition-transform">
                <img
                  src="/pp-1.jpeg"
                  alt="Dokumentasi BYE - pp 1"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] bg-slate-100 transform rotate-1 hover:rotate-0 transition-transform mt-4">
                <img
                  src="/pp-2.jpeg"
                  alt="Dokumentasi BYE - pp 2"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
