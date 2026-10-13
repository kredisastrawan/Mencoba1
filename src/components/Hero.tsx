import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { BaliCloudMotif } from './BaliCloudMotif';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 overflow-hidden">
      {/* Subtle Balinese Cloud Background Accents */}
      <div className="absolute top-12 left-6 opacity-35 pointer-events-none hidden lg:block">
        <BaliCloudMotif className="w-28 h-18 text-blue-400" />
      </div>
      <div className="absolute top-28 right-8 opacity-40 pointer-events-none hidden lg:block">
        <BaliCloudMotif className="w-36 h-22 text-blue-400" variant="corner" />
      </div>
      <div className="absolute -bottom-6 left-1/3 opacity-25 pointer-events-none">
        <BaliCloudMotif className="w-40 h-24 text-blue-300" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition & Call to Action */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Tagline & Movement Indicator (No static pill clutter, clean unboxed metadata) */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wide text-blue-700">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="font-mono uppercase">{COMPANY_INFO.tagline}</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-600 font-normal">Gerakan Wirausaha & Pemuda Bali</span>
            </div>

            {/* Headline with balanced wrap */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] font-display max-w-2xl">
              Mencetak Eksekutor Muda,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">
                Akselerasi UMKM Lokal
              </span>{' '}
              di Bali.
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Bali Youth Evolution (BYE) adalah platform pengembangan generasi muda dan ekosistem bisnis terintegrasi. Kami menolak sekadar berteori di balik meja: kami turun langsung membina UMKM, memfasilitasi otomatisasi digital, dan menghubungkan talenta muda dengan panggung industri nyata.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Pemerataan literasi digital & adopsi otomatisasi teknologi UMKM</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>Eksekutor lapangan berdaya saing dengan mentalitas problem solver</span>
              </div>
            </div>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <span>Jadwalkan Konsultasi</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#program"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Lihat 4 Pilar Program</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Tabular Evidence Strip */}
            <div className="pt-6 sm:pt-8 border-t border-slate-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
                    1.200+
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Pemuda Terlatih</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
                    50+
                  </div>
                  <div className="text-xs text-slate-500 mt-1">UMKM Didampingi</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
                    15+
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Mitra Institusi</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 font-mono tabular-nums">
                    Mega 2026
                  </div>
                  <div className="text-xs text-slate-500 mt-1">Puncak Acara Kuta</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset Carrier */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/90 bg-white">
              {/* Image Frame with graceful fallback */}
              <div className="aspect-[4/3] sm:aspect-[16/11] relative bg-slate-100 overflow-hidden">
                {!imageLoaded && !imageError && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 via-blue-100 to-slate-100 animate-pulse flex items-center justify-center">
                    <span className="text-xs text-slate-400 font-medium">Memuat dokumentasi BYE...</span>
                  </div>
                )}
                {imageError ? (
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-indigo-900 text-white p-8 flex flex-col justify-end">
                    <Award className="w-10 h-10 text-blue-300 mb-3" />
                    <h3 className="font-bold text-lg">Bali Youth Evolution Summit</h3>
                    <p className="text-xs text-blue-200">Mega-Event Pemberdayaan Pemuda & Ekosistem UMKM Bali</p>
                  </div>
                ) : (
                  <img
                    src="/src/assets/images/hero_bali_youth_summit_1791445461875.jpg"
                    alt="Penyelenggaraan Bali Youth Evolution Summit dan panggung pergerakan wirausaha muda di Bali"
                    referrerPolicy="no-referrer"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                )}

                {/* Subtle scrim overlay on bottom */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent pointer-events-none" />

                {/* Bottom caption on image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between text-xs text-blue-200 font-medium">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      Mega-Event Bersejarah
                    </span>
                    <span className="font-mono text-slate-300">Lippo Mall Kuta</span>
                  </div>
                  <p className="text-sm font-semibold text-white mt-1 drop-shadow-xs">
                    Konsolidasi Ekosistem Wirausaha & Pemuda Denpasar
                  </p>
                </div>
              </div>

              {/* Informational Lower Card Strip */}
              <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 font-display font-bold text-sm">
                    BYE
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                      Inisiatif Nyata di Lapangan
                    </h4>
                    <p className="text-xs text-slate-500">
                      Bukan sekadar konseptor, melainkan eksekutor solusi.
                    </p>
                  </div>
                </div>

                <a
                  href="#profil"
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 whitespace-nowrap pl-2"
                >
                  Pelajari &rarr;
                </a>
              </div>
            </div>

            {/* Floating Trust Accent Tag */}
            <div className="absolute -bottom-5 -left-4 sm:left-4 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-slate-200/80 shadow-lg hidden sm:flex items-center gap-3 max-w-xs">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-slate-800 block">Sinergi Multi-Stakeholder</span>
                <span className="text-slate-500">Pemerintah, Kampus & Industri Kreatif</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
