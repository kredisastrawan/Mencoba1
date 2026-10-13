import React from 'react';
import { ArrowRight, CheckCircle2, Award, Calendar } from 'lucide-react';

interface EcosystemViewProps {
  onSelectService: (serviceName: string) => void;
}

export const EcosystemView: React.FC<EcosystemViewProps> = ({ onSelectService }) => {

  const services = [
    {
      title: 'Academy & Masterclass',
      desc: 'Kelas, workshop, dan masterclass bersama praktisi berpengalaman. Kurikulum terapan adopsi AI, otomatisasi alur kerja, dan peningkatan daya saing bisnis.',
      image: '/src/assets/images/academy_masterclass_workshop_1791445493252.jpg',
    },
    {
      title: 'Personal Branding Management',
      desc: 'Bangun citra diri dan personal brand untuk peluang yang lebih luas. Konsultasi narrative positioning, produksi konten profil eksekutif, dan media placement.',
      image: '/src/assets/images/personal_branding_portrait_1791445526850.jpg',
    },
    {
      title: 'Presta Media',
      desc: 'Media kreatif untuk mengangkat cerita, karya, dan dampak anak muda. Platform publikasi portofolio terverifikasi berbasis langganan VIP.',
      image: '/src/assets/images/creative_media_production_1791447078548.jpg',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-[#0284c7] text-white py-14 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Creative & Business Ecosystem
          </h1>
          <p className="text-base sm:text-lg text-sky-100 font-medium">
            Bukan hanya belajar, tapi juga tumbuh bersama.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-10">
        {/* Featured Showcase + Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 rounded-3xl overflow-hidden shadow-md bg-slate-900 relative aspect-[16/10]">
            <img
              src="/src/assets/images/hero_bali_youth_summit_1791445461875.jpg"
              alt="Mega Event BYE"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="text-xs font-mono font-bold text-sky-300">Mega-Event Puncak 2026</span>
              <h3 className="text-xl sm:text-2xl font-bold">
                Panggung Kolaborasi Ekosistem Wirausaha Pemuda di Bali
              </h3>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-around">
            <div>
              <div className="text-3xl font-black text-[#0284c7] font-mono">120+</div>
              <div className="text-xs text-slate-500">Anggota Program</div>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <div className="text-3xl font-black text-[#0284c7] font-mono">20+</div>
              <div className="text-xs text-slate-500">Mitra Kolaborasi</div>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <div className="text-3xl font-black text-[#0284c7] font-mono">10+</div>
              <div className="text-xs text-slate-500">Event Program</div>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <div className="text-3xl font-black text-[#0284c7] font-mono">5+</div>
              <div className="text-xs text-slate-500">Proyek Sosial</div>
            </div>
          </div>
        </div>

        {/* 3 Detailed Ecosystem Cards */}
        <div className="space-y-6">
          <h2 className="text-2xl font-extrabold text-[#0284c7]">Layanan Unit Ekosistem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{svc.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{svc.desc}</p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => onSelectService(svc.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-sky-50 hover:bg-[#0284c7] text-[#0284c7] hover:text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Konsultasi Layanan Ini</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
