import React from 'react';
import { ArrowRight } from 'lucide-react';

interface EcosystemMockupProps {
  onViewAll: () => void;
  onSelectService: (serviceName: string) => void;
}

export const EcosystemMockup: React.FC<EcosystemMockupProps> = ({
  onViewAll,
  onSelectService,
}) => {
  const services = [
    {
      id: 'academy',
      title: 'Academy & Masterclass',
      description: 'Kelas, workshop, dan masterclass bersama praktisi berpengalaman.',
      image: '/src/assets/images/academy_masterclass_workshop_1791445493252.jpg',
    },
    {
      id: 'branding',
      title: 'Personal Branding Management',
      description: 'Bangun citra diri dan personal brand untuk peluang yang lebih luas.',
      image: '/src/assets/images/personal_branding_portrait_1791445526850.jpg',
    },
    {
      id: 'media',
      title: 'Presta Media',
      description: 'Media kreatif untuk mengangkat cerita, karya, dan dampak anak muda.',
      image: '/src/assets/images/creative_media_production_1791447078548.jpg',
    },
  ];

  return (
    <section id="ecosystem" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Creative & Business Ecosystem
            </h2>
            <p className="mt-1.5 text-base sm:text-lg text-slate-600">
              Ruang tumbuh untuk ide, karya, dan bisnis kreatifmu.
            </p>
          </div>

          <button
            type="button"
            onClick={onViewAll}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0284c7] hover:text-sky-700 transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc) => (
            <div
              key={svc.id}
              onClick={() => onSelectService(svc.title)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                <img
                  src={svc.image}
                  alt={svc.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-4 mt-2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0284c7] group-hover:translate-x-1 transition-transform">
                    <span>Pelajari Layanan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
