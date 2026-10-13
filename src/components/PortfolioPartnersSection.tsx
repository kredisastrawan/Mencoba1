import React, { useState } from 'react';
import { OFFICIAL_PARTNERS, COLLABORATION_INSTITUTIONS, TIMELINE_ACHIEVEMENTS } from '../data/companyData';
import { Award, Building2, MapPin, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { BaliCloudMotif } from './BaliCloudMotif';

export const PortfolioPartnersSection: React.FC = () => {
  const [partnerFilter, setPartnerFilter] = useState<'all' | 'official' | 'institutions'>('all');

  return (
    <section id="portofolio" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      {/* Decorative Cloud */}
      <div className="absolute top-12 left-10 opacity-25 pointer-events-none hidden md:block">
        <BaliCloudMotif className="w-32 h-20 text-blue-400" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider text-blue-700 uppercase font-mono mb-2">
            Portofolio, Rekam Jejak & Mitra
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Bukti Eksekusi & Kemitraan Strategis Terpercaya
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Menyatukan kekuatan ekosistem wirausaha dan pemuda di Bali melalui kemitraan solid bersama agensi kreatif, pelopor AI, brand lokal, institusi kampus, dan pemerintah daerah.
          </p>
        </div>

        {/* Highlight 1: The August 2026 Mega Event Feature Banner */}
        <div className="mb-16 bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto bg-slate-900">
              <img
                src="/src/assets/images/hero_bali_youth_summit_1791445461875.jpg"
                alt="Eksekusi BYE Mega-Event Agustus 2026 di Lippo Mall Kuta"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-300 font-mono mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>AGUSTUS 2026 · LIPPO MALL KUTA</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display">
                  Panggung Mega-Event Pemuda & UMKM Bali
                </h3>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider font-mono mb-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>Capaian Bersejarah</span>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                  Eksekusi BYE Mega-Event (Agustus 2026)
                </h3>

                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Sukses menyelenggarakan acara puncak yang berhasil mengedukasi puluhan anak muda serta pelaku UMKM lokal Bali. Mengonsolidasi pameran produk lokal, talkshow bersama founder terkemuka, serta deklarasi kolaborasi pemuda Bali.
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Puluhan UMKM kerajinan, fashion, & kuliner difasilitasi pameran gratis</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Dihadiri perwakilan asosiasi pengusaha, instansi pemerintah & akademisi</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Dukungan venue prestisius Lippo Mall Kuta & publikasi media partner</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono">Status: Terlaksana Sukses</span>
                <span className="font-semibold text-blue-600">Agenda Tahunan Berkelanjutan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Official Partnership (From Slide 4) */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-xs font-semibold text-blue-700 uppercase font-mono">
                Kolaborasi Inti
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                Officially Partnership
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {OFFICIAL_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-400 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono">
                    <span className="font-bold text-blue-700">{partner.name}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-500">{partner.category}</span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-2 font-display">
                    {partner.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {partner.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 text-xs font-medium text-blue-800 bg-blue-50/50 p-2.5 rounded-lg">
                  {partner.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Extended Institutional Collaboration Ecosystem (From Slide 7) */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider font-mono mb-2">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span>Our Collaboration Network</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display mb-3">
            Jaringan Kolaborasi Institusi & Mitra Strategis
          </h3>
          <p className="text-sm text-slate-600 mb-8 max-w-2xl">
            Berhasil menggandeng kemitraan kuat dengan asosiasi pengusaha, dinas pemerintah, universitas terkemuka, dan ekosistem kreatif.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {COLLABORATION_INSTITUTIONS.map((inst, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-blue-50/50 hover:border-blue-200 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-blue-600 block mb-1">
                    {inst.tag}
                  </span>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">
                    {inst.name}
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 mt-2">
                  {inst.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
