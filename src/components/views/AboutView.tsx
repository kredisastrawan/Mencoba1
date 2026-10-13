import React from 'react';
import { Eye, Target, Sparkles, Users, Lightbulb, HeartHandshake } from 'lucide-react';
import { PaperPlaneVector } from '../PaperPlaneVector';

interface AboutViewProps {
  onBackToHome: () => void;
  onJoinBye: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onBackToHome, onJoinBye }) => {
  const values = [
    {
      title: 'Empower',
      desc: 'Memberdayakan potensi anak muda.',
      icon: Sparkles,
    },
    {
      title: 'Collaborate',
      desc: 'Membangun kolaborasi lintas sektor.',
      icon: Users,
    },
    {
      title: 'Innovate',
      desc: 'Mendorong inovasi dan kreativitas.',
      icon: Lightbulb,
    },
    {
      title: 'Create Impact',
      desc: 'Menghasilkan perubahan berkelanjutan.',
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Subpage Header Banner matching Mockup Column 2 */}
      <div className="bg-[#0284c7] text-white py-14 sm:py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About BYE
          </h1>
          <p className="text-base sm:text-lg text-sky-100 font-medium">
            Dari anak muda, untuk masa depan yang lebih baik.
          </p>
        </div>
        <div className="absolute top-4 right-1/4 opacity-40 pointer-events-none">
          <PaperPlaneVector className="w-14 h-14 text-white" withTrajectory={false} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        {/* Our Journey Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/90 shadow-xs">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0284c7]">
              Our Journey
            </h2>
            <p className="text-sm text-slate-500 mt-1">Langkah nyata perjalanan gerakan kami</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Timeline Steps */}
            <div className="lg:col-span-7 space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-sky-200">
              {/* Juni 2026 */}
              <div className="relative pl-10">
                <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#0284c7] ring-4 ring-sky-100" />
                <span className="text-xs font-mono font-bold text-[#0284c7] block">Juni 2026</span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">Awal Berdiri</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  BYE lahir dari semangat sekelompok pemuda Bali yang percaya bahwa anak muda punya kekuatan untuk menciptakan perubahan.
                </p>
              </div>

              {/* Juli 2026 */}
              <div className="relative pl-10">
                <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#0284c7] ring-4 ring-sky-100" />
                <span className="text-xs font-mono font-bold text-[#0284c7] block">Juli 2026</span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">Berkembang</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Mulai menjalankan program, membangun jejaring, dan menjangkau lebih banyak pemuda di Bali dan Indonesia.
                </p>
              </div>

              {/* Agustus 2026 - Saat Ini */}
              <div className="relative pl-10">
                <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#0284c7] ring-4 ring-sky-100" />
                <span className="text-xs font-mono font-bold text-[#0284c7] block">Agustus 2026 - Saat Ini</span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">Ekspansi Dampak</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Memperluas ekosistem, memperluas kolaborasi, dan menghadirkan lebih banyak peluang bagi UMKM dan wirausaha muda.
                </p>
              </div>
            </div>

            {/* Right Photo with Script Accent */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-sky-900 relative">
                <img
                  src="https://i.ibb.co.com/YFTcm8vp/bye12.jpg"
                  alt="Perjalanan BYE"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 text-right">
                  <span className="font-script text-2xl sm:text-3xl text-white font-bold drop-shadow-md">
                    Small steps, <br />Big impact.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Vision & Mission Section */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0284c7]">
              Our Vision & Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-[#0284c7] flex items-center justify-center shrink-0">
                <Eye className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">Vision</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Menjadi ekosistem terdepan dalam pengembangan pemuda dan bisnis kreatif yang berdampak di tingkat lokal dan global.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-[#0284c7] flex items-center justify-center shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Mendorong pengembangan keterampilan, kolaborasi, dan inovasi anak muda untuk menciptakan dampak positif yang nyata.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Purpose & Values Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0284c7] text-center mb-8">
            Our Purpose & Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-sky-50/60 border border-sky-100 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-white text-[#0284c7] shadow-xs flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">{val.title}</h4>
                  <p className="text-xs text-slate-600">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Impact Strip */}
        <div className="bg-gradient-to-r from-[#0284c7] to-sky-600 text-white rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl sm:text-5xl font-black font-mono">120+</div>
              <div className="text-xs sm:text-sm text-sky-100 mt-1">Anggota Program</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-black font-mono">20+</div>
              <div className="text-xs sm:text-sm text-sky-100 mt-1">Mitra Kolaborasi</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-black font-mono">10+</div>
              <div className="text-xs sm:text-sm text-sky-100 mt-1">Event Program</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-black font-mono">5+</div>
              <div className="text-xs sm:text-sm text-sky-100 mt-1">Proyek Sosial</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
