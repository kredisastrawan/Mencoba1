import React, { useState } from 'react';
import { Target, Compass, Sparkles, MapPin, Calendar, Check, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { BaliCloudMotif } from './BaliCloudMotif';

export const HistoryVision: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'manifesto' | 'vision_mission'>('manifesto');

  return (
    <section id="profil" className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Decorative Cloud */}
      <div className="absolute top-10 right-10 opacity-30 pointer-events-none hidden md:block">
        <BaliCloudMotif className="w-32 h-20 text-blue-400" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider text-blue-700 uppercase font-mono mb-2">
            Profil & Landasan Gerakan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Menolak Berteori di Belakang Meja,{' '}
            <span className="text-blue-700">Turun Langsung Sebagai Eksekutor</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Menghadapi era bonus demografi, pemuda Bali dituntut bukan hanya menjadi konseptor abstrak, melainkan praktisi tangguh yang mengurai inefisiensi nyata dan membangun ekonomi daerah.
          </p>
        </div>

        {/* Interactive Segmented Switcher (Buttons with click handlers) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl max-w-sm mb-10 border border-slate-200/60">
          <button
            type="button"
            onClick={() => setActiveTab('manifesto')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap text-center ${
              activeTab === 'manifesto'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Sejarah & Manifesto
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('vision_mission')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap text-center ${
              activeTab === 'vision_mission'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Visi & Misi Strategis
          </button>
        </div>

        {/* Tab 1: Sejarah & Manifesto */}
        {activeTab === 'manifesto' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: The Narrative */}
            <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200/80 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs text-blue-700 font-semibold uppercase tracking-wider font-mono">
                  <span>Genesis & Latar Belakang</span>
                  <span>·</span>
                  <span>Keresahan Lapangan</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                  Dari Keresahan Menjadi Gerakan Nyata
                </h3>

                <p className="text-slate-700 leading-relaxed text-base">
                  Bali Youth Evolution (BYE) lahir dari keresahan melihat potensi bonus demografi yang terancam jika generasi mudanya hanya bertindak sebagai konseptor pasif di belakang meja.
                </p>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Pergerakan ini diinisiasi oleh pemuda Bali yang menolak sekadar berteori. Kami memilih turun langsung bernegosiasi untuk mengorganisasi sumber daya di lapangan, mempertemukan talenta muda dengan permasalahan konkret UMKM, serta merajut simpul kolaborasi antar-institusi.
                </p>

                <div className="pt-4 border-t border-slate-200/70 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0">
                      01
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">Praktik Nyata di Lapangan</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Bukan sebatas diskusi ruang seminar, namun aksi eksekusi terukur.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0">
                      02
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">Berdampak Langsung pada UMKM</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Memecahkan friksi digitalisasi dan efisiensi rantai pasok lokal.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 flex items-center justify-between text-xs text-slate-500 border-t border-slate-200/50">
                <span>Inisiatif Mandiri Pemuda Bali</span>
                <span className="font-mono text-blue-600 font-medium">Denpasar & Kuta</span>
              </div>
            </div>

            {/* Right: Mega-Event Milestone Feature */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 text-white rounded-2xl p-6 sm:p-10 flex flex-col justify-between shadow-lg relative overflow-hidden">
              {/* Background Cloud */}
              <div className="absolute top-2 right-2 opacity-20 pointer-events-none">
                <BaliCloudMotif className="w-40 h-24 text-white" />
              </div>

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-200 uppercase tracking-widest font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Momentum Puncak · Agustus 2026</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                  Penyelenggaraan BYE Mega-Event
                </h3>

                <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed">
                  Momentum puncak bersejarah terjadi pada bulan Agustus 2026 di Lippo Mall Kuta, di mana BYE resmi menjadi mega-event pergerakan lokal berskala besar yang menjadi fondasi strategis bagi kebangkitan ekosistem wirausaha dan pemuda di Denpasar dan Bali.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-blue-100">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Kolaborasi lintas komunitas, kampus & UMKM lokal</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-blue-100">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Dukungan resmi pemerintah kota dan mitra strategis</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-blue-100">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Panggung unjuk karya dan validasi portofolio pemuda</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-8 mt-6 border-t border-blue-700/60 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-blue-200">
                  <MapPin className="w-3.5 h-3.5 text-blue-300" />
                  <span>Lippo Mall Kuta, Bali</span>
                </div>
                <a
                  href="#portofolio"
                  className="text-xs font-semibold text-white hover:text-blue-200 flex items-center gap-1 transition-colors"
                >
                  Lihat Dokumentasi &rarr;
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Visi & Misi Strategis */}
        {activeTab === 'vision_mission' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Vision Statement (Prominent Card) */}
            <div className="lg:col-span-5 bg-blue-50/70 border border-blue-200/80 rounded-2xl p-6 sm:p-10 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-2.5 text-xs text-blue-700 font-semibold tracking-wider uppercase font-mono">
                  <Compass className="w-4 h-4 text-blue-600" />
                  <span>Visi Jangka Panjang</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  Platform Inkubasi & Penggerak Generasi Muda
                </h3>

                <blockquote className="text-slate-700 text-base leading-relaxed border-l-2 border-blue-600 pl-4 italic">
                  "{COMPANY_INFO.vision}"
                </blockquote>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  BYE hadir menjadi ruang bagi pelajar, mahasiswa, komunitas, dan masyarakat muda untuk mendapatkan wawasan, mengembangkan keterampilan, memperluas relasi, serta mengeksplorasi peluang di era digital.
                </p>
              </div>

              <div className="pt-6 border-t border-blue-200/60 text-xs text-blue-800 font-medium">
                Berorientasi pada Aksi & Dampak Nyata Berkelanjutan
              </div>
            </div>

            {/* Mission Statements (Structured Cards) */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold tracking-wider uppercase font-mono">
                  <Target className="w-4 h-4 text-blue-600" />
                  <span>2 Misi Operasional Inti</span>
                </div>

                {/* Mission 1 */}
                <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-colors shadow-xs">
                  <div className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-lg bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                      01
                    </span>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-slate-900">
                        Menyelesaikan Inefisiensi Bisnis UMKM
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Menyelesaikan masalah inefisiensi bisnis UMKM dari akarnya melalui pemerataan literasi digital dan adopsi otomatisasi teknologi agar pelaku usaha lokal memiliki daya saing kuat menghadapi pasar global.
                      </p>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-blue-700 pt-1 font-medium">
                        <span>Otomasi Kasir</span>
                        <span>·</span>
                        <span>Literasi AI Terapan</span>
                        <span>·</span>
                        <span>Pemasaran Digital Terstruktur</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mission 2 */}
                <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 transition-colors shadow-xs">
                  <div className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-lg bg-blue-600 text-white font-bold text-sm flex items-center justify-center shrink-0">
                      02
                    </span>
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-slate-900">
                        Mencetak Eksekutor Muda Problem Solver
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Mencetak eksekutor muda yang gigih, berempati, dan memiliki mentalitas pemecah masalah (problem solver), memastikan bonus demografi bangsa Indonesia tidak menjadi beban melainkan tenaga pendorong ekonomi.
                      </p>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-blue-700 pt-1 font-medium">
                        <span>Mentalitas Eksekutor</span>
                        <span>·</span>
                        <span>Kepemimpinan Lapangan</span>
                        <span>·</span>
                        <span>Koneksi Dunia Kerja & Industri</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between text-xs text-slate-600">
                <span>Ekosistem Terintegrasi #EMPOWERINGYOUTH</span>
                <span className="font-medium text-blue-600">Terbuka untuk Kolaborasi</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
