import React, { useState } from 'react';
import { CLIENT_TESTIMONIALS } from '../data/companyData';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { BaliCloudMotif } from './BaliCloudMotif';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? CLIENT_TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === CLIENT_TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = CLIENT_TESTIMONIALS[activeIndex];

  return (
    <section id="testimoni" className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Decorative Cloud */}
      <div className="absolute top-10 right-8 opacity-25 pointer-events-none hidden md:block">
        <BaliCloudMotif className="w-36 h-22 text-blue-400" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider text-blue-700 uppercase font-mono mb-2">
            Testimoni & Suara Kemitraan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Dipercaya Pelaku UMKM, Tokoh Muda, & Pemimpin Industri
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Dampak nyata diukur dari bagaimana pelaku usaha lokal bertumbuh, figur eksekutif membangun reputasi terpercaya, dan ekosistem pemuda terkoneksi.
          </p>
        </div>

        {/* Featured Testimonial Hero Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-12 mb-12 relative overflow-hidden shadow-xs">
          <Quote className="absolute top-6 right-6 w-20 h-20 text-slate-200/70 pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            {/* Metric pill replacement: Clean unboxed metadata */}
            <div className="flex items-center gap-2 text-xs text-blue-700 font-semibold mb-6 font-mono">
              <span className="flex items-center gap-1 text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Dampak Terverifikasi
              </span>
              <span>·</span>
              <span className="text-slate-800">{current.metricHighlight}</span>
            </div>

            {/* Stars Rating */}
            <div className="flex items-center gap-1 mb-4 text-amber-500">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>

            {/* Quote Body */}
            <blockquote className="text-lg sm:text-2xl font-medium text-slate-800 leading-relaxed mb-8">
              "{current.quote}"
            </blockquote>

            {/* Person Attribution */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-200/70">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center font-display text-base shadow-xs">
                  {current.avatarText}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">{current.name}</h4>
                  <p className="text-xs sm:text-sm text-slate-500">
                    {current.role} <span className="text-slate-300">/</span> {current.organization}
                  </p>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  className="p-2.5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-colors cursor-pointer"
                  aria-label="Testimoni Sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-slate-500 px-2 tabular-nums">
                  0{activeIndex + 1} / 0{CLIENT_TESTIMONIALS.length}
                </span>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  className="p-2.5 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-colors cursor-pointer"
                  aria-label="Testimoni Selanjutnya"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Testimonials Quick-Select Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CLIENT_TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                idx === activeIndex
                  ? 'bg-blue-50/60 border-blue-400 shadow-xs ring-1 ring-blue-300'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-mono text-blue-700 font-semibold">{t.metricHighlight}</span>
                <span className="text-slate-400 text-[11px]">0{idx + 1}</span>
              </div>
              <div className="font-bold text-slate-900 text-sm truncate">{t.name}</div>
              <div className="text-xs text-slate-500 truncate">{t.organization}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
