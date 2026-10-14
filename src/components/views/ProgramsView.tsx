import React, { useState } from 'react';
import { ArrowRight, Check, Users, Award, Calendar } from 'lucide-react';
import { CORE_PROGRAMS } from '../../data/companyData';
import { AiProgramCards } from '../AiProgramCards';

interface ProgramsViewProps {
  onJoinProgram: (programTitle: string) => void;
}

export const ProgramsView: React.FC<ProgramsViewProps> = ({ onJoinProgram }) => {
  const [selectedDetail, setSelectedDetail] = useState<string | null>(null);

  const programsDetailed = [
    {
      id: 'p1',
      title: 'Pelatihan & Event Kapasitas Pemuda',
      desc: 'Meningkatkan keterampilan, pengetahuan, dan kepemimpinan anak muda melalui pelatihan dan event inspiratif.',
      target: 'Pelajar, mahasiswa, pemuda umum',
      benefit: 'Sertifikat resmi, jejaring koneksi, keterampilan terapan baru',
      aktivitas: 'Workshop berkala, seminar wirausaha, bootcamp intensif',
      image: 'https://i.ibb.co.com/0ytnWzd7/3.jpg',
    },
    {
      id: 'p2',
      title: 'Pengabdian Masyarakat Berbasis Kewirausahaan',
      desc: 'Menghadirkan solusi nyata untuk masyarakat melalui program kewirausahaan dan pemberdayaan lokal UMKM.',
      target: 'Pemuda, komunitas binaan, pelaku usaha lokal',
      benefit: 'Dampak sosial terukur, pengalaman lapangan langsung, sertifikasi aksi',
      aktivitas: 'Pendampingan langsung UMKM, pelatihan kasir & AI, bedah bisnis',
      image: 'https://i.ibb.co.com/tMn7hLhZ/6.jpg',
    },
    {
      id: 'p3',
      title: 'Kolaborasi & Kemitraan Multipihak',
      desc: 'Membangun jejaring dan sinergi dengan berbagai pihak pemerintah, swasta, dan kampus untuk memperluas dampak.',
      target: 'Institusi pendidikan, perusahaan sponsor, dinas pemerintah',
      benefit: 'Akses jejaring ekosistem Bali, peluang kolaborasi CSR/bisnis',
      aktivitas: 'Forum sinergi pentahelix, penandatanganan MoU, program bersama',
      image: 'https://i.ibb.co.com/VcjpqqTJ/7.jpg',
    },
    {
      id: 'p4',
      title: 'Inkubasi Ide & Aksi Sosial',
      desc: 'Mendukung ide kreatif dan inovasi pemuda menjadi aksi nyata berdaya dampak sosial berkelanjutan.',
      target: 'Inovator muda, pendiri startup, tim inisiatif kampus',
      benefit: 'Pendanaan mikro rintisan, bimbingan mentor ahli, eksposur panggung',
      aktivitas: 'Pitching day, mentoring 1-on-1, implementasi proyek lapangan',
      image: 'https://i.ibb.co.com/zhK7kMg0/8.jpg',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-[#0284c7] text-white py-14 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Programs
          </h1>
          <p className="text-base sm:text-lg text-sky-100 font-medium">
            Empat pilar program untuk pengembangan pemuda dan dampak nyata.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">
        {programsDetailed.map((prog) => (
          <div
            key={prog.id}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Photo Thumbnail */}
              <div className="md:col-span-4 rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                <img
                  src={prog.image}
                  alt={prog.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Main Content */}
              <div className="md:col-span-5 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {prog.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {prog.desc}
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onJoinProgram(prog.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0284c7] hover:bg-sky-700 text-white font-bold text-xs cursor-pointer transition-colors shadow-xs"
                  >
                    <span>Daftar / Konsultasi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Scope & Details */}
              <div className="md:col-span-3 bg-sky-50/60 p-4 rounded-2xl border border-sky-100 space-y-3 text-xs">
                <div>
                  <span className="font-bold text-slate-500 uppercase tracking-wider block text-[10px]">
                    Target Peserta
                  </span>
                  <span className="font-semibold text-slate-800">{prog.target}</span>
                </div>

                <div>
                  <span className="font-bold text-slate-500 uppercase tracking-wider block text-[10px]">
                    Benefit
                  </span>
                  <span className="text-slate-700">{prog.benefit}</span>
                </div>

                <div>
                  <span className="font-bold text-slate-500 uppercase tracking-wider block text-[10px]">
                    Aktivitas
                  </span>
                  <span className="text-slate-700">{prog.aktivitas}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Swipeable AI Programs Section from Metamorph Academy */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-10 border-t border-slate-200">
        <AiProgramCards />
      </div>
    </div>
  );
};
