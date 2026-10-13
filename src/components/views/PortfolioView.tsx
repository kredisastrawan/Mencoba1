import React from 'react';
import { Calendar, Award, MapPin, Users, CheckCircle2 } from 'lucide-react';
import { PARTNER_LOGOS, logoSrc } from '../../data/partnerLogos';

export const PortfolioView: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-[#0284c7] text-white py-14 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Portfolio & Achievements
          </h1>
          <p className="text-base sm:text-lg text-sky-100 font-medium">
            Kisah, kolaborasi, dan dampak nyata.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12">
        {/* Featured Mega Event Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 relative aspect-[16/10] bg-slate-900">
              <img
                src="https://i.ibb.co.com/bgLXT4ht/1.jpg"
                alt="Mega Event BYE Agustus 2026 Level 21 Mall"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/src/assets/images/hero_bali_youth_summit_1791445461875.jpg';
                }}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-mono font-bold text-sky-300">Agustus 2026 · Level 21 Mall</span>
                <h3 className="text-2xl font-bold mt-1">Mega-event BYE</h3>
                <p className="text-xs sm:text-sm text-sky-100 mt-1">
                  Panggung puncak yang mengedukasi puluhan pelaku UMKM lokal Bali dan mengonsolidasikan puluhan pemuda.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-around bg-sky-50/50">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0284c7] uppercase font-mono">
                  <Award className="w-4 h-4" />
                  <span>Impact</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Berkolaborasi dengan HIPMI Denpasar, Scholario.ID dan Sangguru Academy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Kolaborasi 5+ Mitra Sekolah</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Dukungan Penuh Pemerintah Daerah</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-sky-200/80 pt-6">
                <div className="text-3xl font-black text-[#0284c7] font-mono">30+</div>
                <div className="text-xs text-slate-500">Total Anggota & Pengunjung Terdaftar</div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Partnership: Logo Berjalan Seperti di Home Depan */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 overflow-hidden">
          <style>{`
            @keyframes bye-portfolio-marquee {
              from { transform: translateX(-50%); }
              to   { transform: translateX(0); }
            }
            .bye-portfolio-track {
              display: flex;
              width: max-content;
              animation: bye-portfolio-marquee 60s linear infinite;
            }
            .bye-portfolio-marquee-wrap:hover .bye-portfolio-track {
              animation-play-state: paused;
            }
            @media (prefers-reduced-motion: reduce) {
              .bye-portfolio-track { animation: none; }
            }
          `}</style>

          <h3 className="text-xl sm:text-2xl font-bold text-[#0284c7] mb-6">
            Telah Berkolaborasi Dengan
          </h3>

          <div
            className="bye-portfolio-marquee-wrap overflow-hidden py-4 sm:py-6"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            }}
          >
            <div className="bye-portfolio-track items-center py-2">
              {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((p, idx) => (
                <div
                  key={idx}
                  className="shrink-0 mx-8 sm:mx-12 md:mx-14 flex items-center justify-center select-none group"
                >
                  <img
                    src={logoSrc(p.file)}
                    alt={p.name}
                    draggable={false}
                    className="h-24 sm:h-32 md:h-36 w-auto max-w-[220px] sm:max-w-[280px] md:max-w-[340px] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
