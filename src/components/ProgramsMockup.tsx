import React from 'react';
import { ArrowRight, GraduationCap, Users2, Network, Lightbulb } from 'lucide-react';

interface ProgramsMockupProps {
  onLearnMore: (programId: string) => void;
}

export const ProgramsMockup: React.FC<ProgramsMockupProps> = ({ onLearnMore }) => {
  const programs = [
    {
      id: 'program-1',
      title: 'Pelatihan & Event Kapasitas Pemuda',
      description: 'Meningkatkan keterampilan, pengetahuan, dan kepemimpinan anak muda melalui pelatihan dan event inspiratif.',
      targetPeserta: 'Pelajar, mahasiswa, pemuda umum',
      icon: GraduationCap,
    },
    {
      id: 'program-2',
      title: 'Pengabdian Masyarakat Berbasis Kewirausahaan',
      description: 'Menghadirkan solusi nyata untuk masyarakat melalui program kewirausahaan dan pemberdayaan lokal.',
      targetPeserta: 'Pemuda, komunitas, masyarakat',
      icon: Users2,
    },
    {
      id: 'program-3',
      title: 'Kolaborasi & Kemitraan Multipihak',
      description: 'Membangun jejaring dan sinergi dengan berbagai pihak untuk memperluas dampak.',
      targetPeserta: 'Institusi, perusahaan, komunitas',
      icon: Network,
    },
    {
      id: 'program-4',
      title: 'Inkubasi Ide & Aksi Sosial',
      description: 'Mendukung ide kreatif dan inovasi pemuda menjadi aksi nyata yang berdampak sosial.',
      targetPeserta: 'Pemuda, startup, komunitas',
      icon: Lightbulb,
    },
  ];

  return (
    <section id="programs" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0284c7] tracking-tight">
            Our Programs
          </h2>
          <p className="mt-1.5 text-base sm:text-lg text-slate-700 font-medium">
            4 Pilar Program untuk Pengembangan Pemuda dan Dampak Nyata
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog) => {
            const Icon = prog.icon;
            return (
              <div
                key={prog.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-sky-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Emblem matching mockup */}
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0284c7] border border-sky-100 flex items-center justify-center mb-5 group-hover:bg-[#0284c7] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug mb-3">
                    {prog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {prog.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Target Peserta
                    </span>
                    <span className="text-xs text-slate-700 font-medium">
                      {prog.targetPeserta}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onLearnMore(prog.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7] hover:text-sky-700 transition-colors cursor-pointer group-hover:translate-x-0.5"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
