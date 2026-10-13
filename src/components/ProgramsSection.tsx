import React, { useState } from 'react';
import { CORE_PROGRAMS } from '../data/companyData';
import { ProgramItem } from '../types';
import { ArrowRight, CheckCircle2, Users, Layers, Sparkles } from 'lucide-react';
import { BaliCloudMotif } from './BaliCloudMotif';

interface ProgramsSectionProps {
  onSelectProgram: (program: ProgramItem) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  const [selectedProgramId, setSelectedProgramId] = useState<string>(CORE_PROGRAMS[0].id);

  const activeProgram = CORE_PROGRAMS.find((p) => p.id === selectedProgramId) || CORE_PROGRAMS[0];

  return (
    <section id="program" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      {/* Decorative Balinese Cloud Accent */}
      <div className="absolute top-16 left-8 opacity-20 pointer-events-none hidden lg:block">
        <BaliCloudMotif className="w-36 h-22 text-blue-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold tracking-wider text-blue-700 uppercase font-mono mb-2">
            Pilar Operasional & Pergerakan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Empat Pilar Program Strategis Berkelanjutan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Digerakkan melalui empat pilar terintegrasi yang saling berkesinambungan untuk melatih kapasitas, mendampingi UMKM riil di lapangan, serta membangun sinergi multipihak berdaya jangkau luas.
          </p>
        </div>

        {/* 4 Pilar Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CORE_PROGRAMS.map((program) => {
            const isSelected = program.id === selectedProgramId;
            return (
              <div
                key={program.id}
                onClick={() => setSelectedProgramId(program.id)}
                className={`group cursor-pointer rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-white border-blue-600 shadow-md ring-2 ring-blue-600/10'
                    : 'bg-white/70 hover:bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-2xl font-black font-mono tabular-nums ${
                        isSelected ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                    >
                      {program.number}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                      {program.metrics}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                    {program.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">
                    {isSelected ? 'Sedang Ditampilkan' : 'Klik untuk Detail'}
                  </span>
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 rounded-full transition-colors ${
                      isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600'
                    }`}
                  >
                    &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Program Spotlight Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider font-mono">
                <span>Pilar {activeProgram.number}</span>
                <span>·</span>
                <span>Fokus Kurikulum & Output Nyata</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                {activeProgram.title}
              </h3>

              <p className="text-base text-slate-600 leading-relaxed">
                {activeProgram.description}
              </p>

              {/* Target Audience */}
              <div className="p-3.5 bg-blue-50/60 rounded-xl border border-blue-100 flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-wide block">
                    Sasaran Peserta / Penerima Manfaat:
                  </span>
                  <span className="text-xs sm:text-sm text-blue-950 font-medium">
                    {activeProgram.targetAudience}
                  </span>
                </div>
              </div>

              {/* Tangible Key Outputs */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono block">
                  Output & Indikator Keberhasilan:
                </span>
                {activeProgram.keyOutputs.map((output, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{output}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onSelectProgram(activeProgram)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors cursor-pointer"
                >
                  <span>Daftar / Konsultasi Program Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Visual Showcase of Program in Action */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs">
                {activeProgram.image ? (
                  <div className="aspect-[4/3] relative">
                    <img
                      src={activeProgram.image}
                      alt={`Dokumentasi ${activeProgram.title}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-xs font-semibold text-blue-300 font-mono">
                        Aksi Lapangan BYE
                      </div>
                      <div className="text-sm font-bold text-white drop-shadow-xs">
                        Pendampingan Langsung Pelaku UMKM Lokal Bali
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white p-8 flex flex-col justify-between">
                    <div>
                      <Layers className="w-8 h-8 text-blue-300 mb-2" />
                      <span className="text-xs font-mono text-blue-200">Pilar {activeProgram.number}</span>
                      <h4 className="text-xl font-bold mt-1 text-white">{activeProgram.title}</h4>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                      <div className="text-2xl font-extrabold font-mono tabular-nums text-white">
                        {activeProgram.metrics}
                      </div>
                      <p className="text-xs text-blue-200 mt-1">Dampak Terukur & Terverifikasi di Lapangan</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
