export interface AiProgram {
  no: number;
  segment: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  track: 'belajar' | 'institusi';
}

export const AI_PROGRAMS: AiProgram[] = [
  {
    no: 1,
    segment: `SMP swasta`,
    name: `AI Starter Lab`,
    tagline: `Kenalan dulu, pakai dengan bijak`,
    description: `Program pengenalan AI untuk siswa SMP. Siswa mengenal apa itu AI dan apa saja yang bisa dibantunya, sekaligus belajar memakainya dengan bijak dan bertanggung jawab.`,
    highlights: [
      `Mengenal AI dari dasar`,
      `Memakai AI dengan bijak dan bertanggung jawab`,
      `Dirancang untuk siswa SMP swasta`,
    ],
    track: 'belajar',
  },
  {
    no: 2,
    segment: `SMA/SMK`,
    name: `AI Creator & Innovation Lab`,
    tagline: `Kreatif berkarya dan problem solving dengan AI`,
    description: `Pelatihan intensif bagi siswa SMA dan SMK untuk mengeksplorasi generative AI dalam kreasi konten digital, pemecahan masalah praktis, otomasi tugas, dan persiapan portofolio masa depan.`,
    highlights: [
      `Eksplorasi Generative AI & Prompt Engineering`,
      `Penyusunan proyek kreatif & portofolio digital`,
      `Persiapan keterampilan abad ke-21 siap kerja & kuliah`,
    ],
    track: 'belajar',
  },
  {
    no: 3,
    segment: `Mahasiswa & Perguruan Tinggi`,
    name: `AI Career & Research Accelerator`,
    tagline: `Kuasai AI tools untuk riset, magang, dan karier`,
    description: `Akselerasi kesiapan karier profesional mahasiswa melalui penguasaan implementasi AI, otomatisasi alur kerja analisis data, perancangan proposal riset, dan efisiensi studi.`,
    highlights: [
      `Penerapan AI untuk riset akademis & skripsi`,
      `Workflow otomatisasi profesional & produktivitas`,
      `Sertifikasi kompetensi AI terapan siap industri`,
    ],
    track: 'belajar',
  },
  {
    no: 4,
    segment: `Guru & Tenaga Pendidik`,
    name: `AI Educator Mastery`,
    tagline: `Mengajar lebih cerdas, efisien, dan inspiratif`,
    description: `Pelatihan terarah bagi para pendidik untuk merancang bahan ajar adaptif, asesmen interaktif, serta panduan praktis menjaga integritas akademik di era kecerdasan buatan.`,
    highlights: [
      `Pembuatan modul & materi pembelajaran kilat berbasis AI`,
      `Penyusunan asesmen kreatif & evaluasi siswa`,
      `Panduan etika akademik & regulasi pemanfaatan AI di sekolah`,
    ],
    track: 'institusi',
  },
  {
    no: 5,
    segment: `Sekolah & Yayasan Pendidikan`,
    name: `AI Campus & School Transformation`,
    tagline: `Transformasi institusi pendidikan menuju era AI-First`,
    description: `Pendampingan strategis menyeluruh bagi pimpinan sekolah, yayasan, dan institusi pendidikan untuk merancang kurikulum, SOP adopsi teknologi, serta budaya AI yang aman dan produktif.`,
    highlights: [
      `Perumusan blueprint & kebijakan AI sekolah`,
      `Penyusunan kurikulum muatan lokal AI adaptif`,
      `Pelatihan kepemimpinan dan manajemen institusi`,
    ],
    track: 'institusi',
  },
  {
    no: 6,
    segment: `UMKM & Pelaku Usaha Lokal`,
    name: `AI Business Transformation`,
    tagline: `Otomasi operasional, efisiensi biaya, lonjakan penjualan`,
    description: `Program pendampingan praktis bagi pemilik bisnis dan UMKM untuk memanfaatkan teknologi AI dalam pembuatan materi promosi, customer support cerdas, dan efisiensi operasional harian.`,
    highlights: [
      `Produksi konten visual & copywriting promosi otomatis`,
      `Optimasi alur kerja layanan pelanggan & CRM`,
      `Efisiensi waktu kerja dan pemangkasan biaya operasional`,
    ],
    track: 'institusi',
  },
];
