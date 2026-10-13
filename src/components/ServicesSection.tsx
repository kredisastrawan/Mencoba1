import React, { useState } from 'react';
import { FEATURED_SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';
import { Check, ArrowRight, Sparkles, Star, ShieldCheck } from 'lucide-react';
import { BaliCloudMotif } from './BaliCloudMotif';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'education' | 'branding' | 'media'>('all');

  const filteredServices = FEATURED_SERVICES.filter((svc) => {
    if (filterCategory === 'education') return svc.id === 'service-academy';
    if (filterCategory === 'branding') return svc.id === 'service-branding';
    if (filterCategory === 'media') return svc.id === 'service-presta' || svc.id === 'service-activation';
    return true;
  });

  return (
    <section id="layanan" className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-4 opacity-25 pointer-events-none hidden lg:block">
        <BaliCloudMotif className="w-40 h-24 text-blue-400" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider text-blue-700 uppercase font-mono mb-2">
              Layanan Unggulan & Ekosistem Bisnis
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Creative & Business Ecosystem Terintegrasi
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Ekosistem bisnis di bawah naungan Bali Youth Evolution yang berfokus pada akselerasi nilai merek, manajemen reputasi, dan validasi portofolio digital secara profesional.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start md:self-auto border border-slate-200/60 shrink-0">
            <button
              type="button"
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filterCategory === 'all'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua Layanan
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('education')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filterCategory === 'education'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Academy & AI
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('branding')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filterCategory === 'branding'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Personal Branding
            </button>
            <button
              type="button"
              onClick={() => setFilterCategory('media')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                filterCategory === 'media'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Media & Event
            </button>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-slate-50/70 hover:bg-slate-50 border border-slate-200/80 hover:border-blue-400 rounded-2xl p-6 sm:p-8 transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                {/* Header row with unboxed metadata */}
                <div className="flex items-center justify-between text-xs text-blue-700 font-semibold mb-3 font-mono">
                  <span>{service.badge}</span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-600 font-normal">{service.pricingTag}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors font-display">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-blue-600 mt-1 mb-3">
                  {service.subtitle}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Service Visual Thumbnail (if available) */}
                {service.image && (
                  <div className="aspect-[16/9] rounded-xl overflow-hidden mb-6 border border-slate-200 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 text-xs text-white font-medium drop-shadow-xs">
                      Standar Implementasi Lapangan BYE
                    </div>
                  </div>
                )}

                {/* Features Checklist */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider font-mono">
                    Komponen & Deliverables:
                  </div>
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-700 block">Sasaran Klien:</span>
                  <span>{service.idealFor}</span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService(service)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98]"
                >
                  <span>Pilih & Konsultasi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate / Community Trust Callout */}
        <div className="mt-12 bg-blue-50/70 border border-blue-200/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                Membutuhkan Paket Kolaborasi Khusus atau Proposal Kemitraan?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Kami siap merancang silabus in-house, pameran aktivasi merek, atau program akselerasi CSR terukur untuk institusi Anda.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelectService(FEATURED_SERVICES[0])}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-blue-700 bg-white hover:bg-blue-50 border border-blue-300 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Minta Proposal Kemitraan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
