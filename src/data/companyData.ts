import { ProgramItem, ServiceItem, PartnerItem, TestimonialItem, AchievementItem } from '../types';

export const COMPANY_INFO = {
  name: "Bali Youth Evolution",
  shortName: "BYE",
  tagline: "#EMPOWERINGYOUTH",
  subTagline: "Platform Penggerak Eksekutor Muda & Ekosistem Bisnis Bali",
  email: "baliyouthevolution@gmail.com",
  instagram: "@baliyouthevolution",
  instagramUrl: "https://instagram.com/baliyouthevolution",
  whatsappNumber: "+6281997841103", // Bali Youth Evolution Official
  whatsappDisplay: "+62 819-9784-1103",
  metamorphWhatsappNumber: "08995299086", // Admin Metamorph Academy
  metamorphWhatsappDisplay: "08995299086",
  aiCommunityUrl: "https://chat.whatsapp.com/K8morh9Ylfo4UU4m3YXmtr",
  location: "Denpasar & Kuta, Bali, Indonesia",
  eventHighlight: "Mega-Event Agustus 2026",
  vision: "Bali Youth Evolution (BYE) merupakan sebuah platform pengembangan generasi muda yang hadir untuk mendorong anak muda agar terus belajar, berkembang, berkolaborasi, dan menciptakan dampak positif. BYE menjadi ruang bagi pelajar, mahasiswa, komunitas, dan masyarakat muda untuk mendapatkan wawasan, mengembangkan keterampilan, memperluas relasi, serta mengeksplorasi berbagai peluang di era digital.",
  missions: [
    {
      title: "Pemberantasan Inefisiensi UMKM",
      description: "Menyelesaikan masalah inefisiensi bisnis UMKM dari akarnya melalui pemerataan literasi digital dan adopsi otomatisasi teknologi modern."
    },
    {
      title: "Mencetak Eksekutor Lapangan",
      description: "Mencetak eksekutor muda yang gigih, berempati, dan memiliki mentalitas problem solver, memastikan bonus demografi bangsa menjadi akselerator bukan beban."
    }
  ],
  historySummary: "Bali Youth Evolution (BYE) lahir dari keresahan melihat potensi bonus demografi yang terancam jika anak mudanya hanya bertindak sebagai konseptor pasif di belakang meja. Pergerakan ini diinisiasi oleh pemuda Bali yang menolak sekadar berteori, dan memilih turun langsung bernegosiasi untuk mengorganisasi sumber daya di lapangan. Momentum puncak bersejarah terjadi pada bulan Agustus 2026 di Lippo Mall Kuta, di mana BYE resmi menjadi mega-event pergerakan lokal berskala besar yang menjadi fondasi strategis bagi kebangkitan ekosistem wirausaha dan pemuda di Denpasar."
};

export const CORE_PROGRAMS: ProgramItem[] = [
  {
    id: "program-1",
    number: "01",
    title: "Pelatihan & Event Kapasitas Pemuda",
    description: "Penyelenggaraan seminar intensif, lokakarya terarah, dan pelatihan keterampilan praktis secara berkala untuk meningkatkan kesiapan generasi muda menghadapi kebutuhan industri modern dan ekonomi digital.",
    targetAudience: "Pelajar SMA/SMK, Mahasiswa, Fresh Graduate, & Komunitas Kreatif",
    keyOutputs: [
      "Kurikulum keterampilan digital terapan (AI, Automation, Creative Media)",
      "Sertifikasi kompetensi berbasis proyek nyata",
      "Mentoring intensif dari praktisi industri"
    ],
    metrics: "1.200+ Pemuda Terlatih"
  },
  {
    id: "program-2",
    number: "02",
    title: "Pengabdian Masyarakat Berbasis Kewirausahaan",
    description: "Program pendampingan langsung ke lapangan untuk membantu pelaku UMKM lokal Bali mengoptimalkan model bisnis, manajemen operasional harian, tata kelola keuangan, dan literasi pemasaran digital.",
    targetAudience: "Pelaku UMKM Kuliner, Kerajinan Seni (Crafts), Fashion & Retail Lokal Bali",
    keyOutputs: [
      "Audit alur kerja dan restrukturisasi digital UMKM",
      "Pemasangan katalog digital & sistem otomasi kasir/pembukuan",
      "Peningkatan jangkauan pasar via konten media sosial"
    ],
    metrics: "50+ UMKM Terbina",
    image: "/src/assets/images/program_umkm_mentoring_1791445480011.jpg"
  },
  {
    id: "program-3",
    number: "03",
    title: "Kolaborasi & Kemitraan Multipihak",
    description: "Wadah sinergi strategis pentahelix yang menghubungkan inisiatif pemuda dengan asosiasi wirausaha, instansi pemerintah daerah, perbankan, dan pelaku industri kreatif secara berkelanjutan.",
    targetAudience: "Pemerintah Kota/Provinsi, Asosiasi Pengusaha Muda, Komunitas Bisnis",
    keyOutputs: [
      "MoU strategis lintas sektor dan kebijakan ramah pemuda",
      "Penyelarasan agenda pembangunan ekonomi daerah",
      "Akses pendanaan dan fasilitasi pameran komersial"
    ],
    metrics: "15+ Mitra Institusi Aktif"
  },
  {
    id: "program-4",
    number: "04",
    title: "Inkubasi Ide & Aksi Sosial",
    description: "Pemberdayaan kepemimpinan berbasis proyek nyata untuk memfasilitasi gagasan solutif pemuda agar dapat dieksekusi menjadi program sosial atau rintisan bisnis berdaya dampak bagi masyarakat luas.",
    targetAudience: "Inovator Muda, Social Entrepreneurs, & Tim Inisiatif Mahasiswa",
    keyOutputs: [
      "Validasi model prototipe dan uji pasar cepat",
      "Pitching ke angel investors & mitra ventura",
      "Pengukuran dampak sosial (Social Return on Impact)"
    ],
    metrics: "20+ Proyek Terinkubasi"
  }
];

export const FEATURED_SERVICES: ServiceItem[] = [
  {
    id: "service-academy",
    title: "Academy & Masterclass",
    subtitle: "Akselerasi Skill Praktis & Adopsi AI untuk Bisnis",
    description: "Penyelenggaraan kelas intensif, workshop interaktif, dan program edukasi bisnis yang dirancang khusus membekali pemuda dan pemilik UMKM dengan keterampilan berorientasi hasil (actionable) guna mendongkrak daya saing langsung di pasar.",
    features: [
      "Kurikulum Terapan: Praktik langsung implementasi tools AI & automasi bisnis",
      "Trainer Praktisi Lapangan: Dibimbing langsung oleh pelaku industri aktif",
      "Studi Kasus Nyata: Pemecahan masalah spesifik operasional & penjualan",
      "Akses Komunitas Eksklusif: Jejaring alumni pengusaha & talenta digital"
    ],
    idealFor: "Pemilik Bisnis UMKM, Manajer Operasional, & Pemuda Ambisius",
    pricingTag: "Workshop & Corporate Training",
    badge: "Paling Populer",
    image: "https://i.ibb.co.com/0ytnWzd7/3.jpg"
  },
  {
    id: "service-branding",
    title: "Personal Branding Management",
    subtitle: "Konsultasi & Eksekusi Reputasi Tokoh Muda & Eksekutif",
    description: "Konsultasi dan eksekusi branding eksklusif yang dirancang khusus bagi eksekutif, pengusaha, dan tokoh muda. Membangun otoritas digital dan positioning yang tajam melalui distribusi konten terstruktur agar figur Anda menonjol sebagai pemimpin dan eksekutor di industrinya.",
    features: [
      "Brand Narrative & Positioning Strategy yang autentik dan berwibawa",
      "Produksi Konten Profil Profesional (Fotografi, Video, LinkedIn & Media Sosial)",
      "Peluang Pembicara & Representasi di Event Regional/Nasional",
      "Media Placement & Strategic Press Release di kanal berita terpercaya"
    ],
    idealFor: "Founder Startup, Direktur Bisnis, Tokoh Komunitas, & Profesional",
    pricingTag: "Executive Retainer",
    badge: "Layanan Eksklusif",
    image: "https://i.ibb.co.com/fGMS8v2w/4.jpg"
  },
  {
    id: "service-presta",
    title: "Presta Media (Media Publikasi Prestasi)",
    subtitle: "Platform Publikasi Berbasis Subscription VIP",
    description: "Platform publikasi kebanggaan berbasis Subscription (Langganan VIP) yang bertindak sebagai agensi kehumasan digital pribadi bagi talenta berprestasi, inovator, dan institusi pendidikan untuk membangun etalase portofolio tervalidasi dan menaikkan prestise daerah.",
    features: [
      "Publikasi Artikel Profil Portofolio yang terindeks secara organik di Google",
      "Verifikasi & Validasi Rekam Jejak Pencapaian Pemuda Berprestasi",
      "Distribusi Media Partner terintegrasi lintas ekosistem Bali & nasional",
      "Paket Institusi untuk Branding Kampus/Sekolah/Organisasi Berprestasi"
    ],
    idealFor: "Pelajar Berprestasi, Atlet/Kreator Muda, Dosen, & Institusi Pendidikan",
    pricingTag: "Langganan VIP / Paket Institusi",
    badge: "Media Partner Resmi",
    image: "https://i.ibb.co.com/27crY6gK/5.jpg"
  },
  {
    id: "service-activation",
    title: "Strategic Event & Brand Activation",
    subtitle: "Manajemen Mega-Event & Kolaborasi Ekosistem",
    description: "Layanan konseptualisasi hingga eksekusi panggung acara berskala besar untuk kampanye brand, pameran UMKM, gathering pemuda, dan kolaborasi korporat dengan standar penyelenggaraan lapangan yang presisi.",
    features: [
      "End-to-End Event Production & Stage Management",
      "Mobilisasi Massa & Komunitas Pemuda Aktif di Bali",
      "Kemitraan Sponsor & Kurasi Tenant UMKM",
      "Dokumentasi Sinematik & Kampanye Virality Digital"
    ],
    idealFor: "Brand Nasional, Instansi Pemerintah, & Asosiasi Industri",
    pricingTag: "Custom Project Based",
    badge: "Mega-Event Proven",
    image: "/src/assets/images/hero_bali_youth_summit_1791445461875.jpg"
  }
];

export const OFFICIAL_PARTNERS: PartnerItem[] = [
  {
    name: "AE Group",
    category: "Entertainment & Talent",
    role: "Official Partner",
    description: "Archipelagos Entertainment Group adalah agensi event, manajemen bakat (talent management), dan pengembang industri kreatif terkemuka di Bali.",
    highlight: "Sinergi Talenta & Produksi Panggung Kreatif"
  },
  {
    name: "Metamorph",
    category: "AI & Tech Education",
    role: "Official Partner",
    description: "Lembaga pelopor edukasi penggunaan kecerdasan buatan (AI) terapan untuk Usaha Mikro, Kecil, dan Menengah (UMKM) serta Pelajar/Mahasiswa.",
    highlight: "Kurikulum AI & Otomasi Digital Bisnis"
  },
  {
    name: "Chemi",
    category: "Lifestyle & Local Fashion",
    role: "Official Partner",
    description: "Merek perhiasan manik-manik (beads jewelry) lokal yang menawarkan kustomisasi aksesoris eksklusif penunjang gaya hidup dan estetika generasi muda.",
    highlight: "Model Bisnis UMKM Kreatif Mandiri"
  },
  {
    name: "KuCetakIn",
    category: "Creative Production & Merchandise",
    role: "Official Partner",
    description: "Penyedia layanan percetakan dan produksi merchandise kreatif yang memberikan solusi visual cepat dan berkualitas tinggi bagi operasional bisnis dan komunitas.",
    highlight: "Solusi Visual & Merchandise Resmi BYE"
  }
];

export const COLLABORATION_INSTITUTIONS = [
  { name: "Pemerintah Kota Denpasar", role: "Instansi Pemerintah", tag: "Regulator & Mitra Kota" },
  { name: "Wirausaha Muda Denpasar (WMD)", role: "Asosiasi Wirausaha", tag: "Ekosistem Wirausaha" },
  { name: "BIM / Primakara University", role: "Pendidikan Tinggi", tag: "Akademia & Riset" },
  { name: "Lippo Mall Kuta", role: "Venue Partner", tag: "Mega-Event Host 2026" },
  { name: "Level 21 Mall Denpasar", role: "Lifestyle Partner", tag: "Pusat Aktivasi Pemuda" },
  { name: "Sangguru Academy", role: "Pendidikan Digital", tag: "Partner Edukasi" },
  { name: "SkillBash", role: "Komunitas Kreatif", tag: "Youth Creative Lab" },
  { name: "Digital Business Students Assoc.", role: "Organisasi Mahasiswa", tag: "Jaringan Kampus" },
  { name: "ScholarIo.id", role: "Platform Beasiswa", tag: "Talenta Muda" },
  { name: "Metamorph Academy", role: "Edukasi & Akselerasi AI", tag: "AI Academy & Inovasi" }
];

export const CLIENT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testi-1",
    name: "Ni Luh Made Sukmawati",
    role: "Founder & Creative Director",
    organization: "Suksma Bali Crafts (UMKM Binaan)",
    quote: "Sebelum didampingi tim Bali Youth Evolution, pencatatan stok dan penjualan online toko kami berantakan dan manual. Melalui program pendampingan lapangan BYE, kami dibimbing menerapkan otomatisasi kasir dan promosi digital terukur. Dalam 4 bulan, pesanan kami naik 180% dan operasional jadi sangat rapi!",
    metricHighlight: "+180% Pertumbuhan Penjualan",
    avatarText: "NS",
    rating: 5
  },
  {
    id: "testi-2",
    name: "I Gede Arya Pratama, S.Kom.",
    role: "Managing Director",
    organization: "Nusantara Digital Agency",
    quote: "Program Personal Branding Management dari BYE benar-benar mengubah cara publik melihat profil eksekutif saya. Tim BYE tidak hanya membuat konten estetik, tetapi memformulasikan narasi kepemimpinan yang kredibel. Kami berhasil menutup dua kontrak kemitraan korporat bernilai strategis berkat otoritas digital ini.",
    metricHighlight: "2x Inbound Corporate Deals",
    avatarText: "GA",
    rating: 5
  },
  {
    id: "testi-3",
    name: "Dr. I Putu Hendra, M.M.",
    role: "Pembina Ekosistem & Akademisi",
    organization: "Inisiatif Wirausaha Mahasiswa Denpasar",
    quote: "Yang paling saya kagumi dari BYE adalah mereka bukan pemuda yang cuma pintar bicara di seminar. Mereka turun langsung ke lapangan mengorganisasi sumber daya. Mega-Event Agustus 2026 membuktikan kapasitas eksekusi mereka yang luar biasa dalam menyatukan birokrasi, swasta, dan ribuan pemuda.",
    metricHighlight: "1.000+ Peserta Terkoneksi",
    avatarText: "PH",
    rating: 5
  },
  {
    id: "testi-4",
    name: "Kadek Bagus Wibawa",
    role: "Alumni Masterclass & Founder",
    organization: "Kopi Kawan Denpasar",
    quote: "Academy & Masterclass dari BYE sangat padat ilmu daging. Khususnya sesi adopsi AI untuk efisiensi bisnis UMKM bareng Metamorph. Tim barista dan admin kami langsung bisa memangkas waktu kerja administrasi hingga separuhnya. Investasi belajar yang sangat berharga!",
    metricHighlight: "50% Efisiensi Waktu Kerja",
    avatarText: "KB",
    rating: 5
  }
];

export const TIMELINE_ACHIEVEMENTS: AchievementItem[] = [
  {
    year: "Agustus 2026",
    title: "Eksekusi BYE Mega-Event Bersejarah",
    subtitle: "Panggung Kebangkitan Ekosistem Wirausaha Denpasar & Kuta",
    description: "Sukses menyelenggarakan acara puncak skala besar di Lippo Mall Kuta yang menghadirkan puluhan pelaku UMKM lokal, kompetisi inovasi pemuda, serta forum kolaborasi multipihak yang memecahkan rekor kehadiran.",
    stats: "Puluhan UMKM Pameran · Ribuan Pengunjung",
    tag: "Mega Event"
  },
  {
    year: "2026",
    title: "Sinergi Kemitraan Multipihak Pentahelix",
    subtitle: "Konsolidasi Pemerintah, Kampus, dan Industri Swasta",
    description: "Mengukuhkan kemitraan strategis dengan Pemkot Denpasar, Wirausaha Muda Denpasar, Primakara/BIM University, AE Group, Metamorph, Chemi, dan KuCetakIn demi keberlanjutan regenerasi ekonomi lokal.",
    stats: "15+ Mitra Kolaborasi Resmi",
    tag: "Partnership"
  },
  {
    year: "2026",
    title: "Peluncuran Presta Media & Academy Ekosistem",
    subtitle: "Unit Bisnis Berbasis Solusi Nyata untuk Reputasi & Edukasi",
    description: "Memformalkan unit bisnis terintegrasi yang menghadirkan program pelatihan terapan (Academy), manajemen reputasi tokoh (Personal Branding), dan portal publikasi prestasi pemuda terverifikasi (Presta Media).",
    stats: "3 Unit Solusi Berkelanjutan",
    tag: "Ecosystem"
  }
];

export const FAQS = [
  {
    question: "Apa itu Bali Youth Evolution (BYE)?",
    answer: "Bali Youth Evolution (BYE) adalah platform pengembangan generasi muda dan ekosistem bisnis terintegrasi di Bali. Kami bergerak menjembatani potensi anak muda dengan kebutuhan riil industri melalui pelatihan kapasitas praktis, pendampingan UMKM di lapangan, manajemen reputasi, dan penyelenggaraan acara strategis."
  },
  {
    question: "Bagaimana cara UMKM lokal mendapatkan pendampingan dari BYE?",
    answer: "Pelaku UMKM dapat mendaftar melalui formulir kontak cepat di website ini atau menghubungi WhatsApp resmi kami. Tim kami akan melakukan asesmen awal kebutuhan bisnis (operasional, digital marketing, atau adopsi AI) lalu menjadwalkan program pendampingan lapangan yang tepat sasaran."
  },
  {
    question: "Apa perbedaan Academy & Masterclass BYE dengan kursus umum lainnya?",
    answer: "Kurikulum kami 100% berorientasi actionable hasil nyata. Tidak ada teori bertele-tele; peserta langsung diajak mempraktikkan otomatisasi alur kerja, penggunaan generative AI untuk bisnis, dan strategi pemasaran yang terbukti menghasilkan penjualan di pasar lokal dan nasional."
  },
  {
    question: "Bagaimana mekanisme layanan Personal Branding Management?",
    answer: "Kami menyusun peta positioning personal, memproduksi materi konten berstandar eksekutif (foto profil, video editorial, artikel pemikiran), dan mengelola distribusi media terstruktur agar profil Anda diakui sebagai pemimpin dan eksekutor terpercaya di bidang Anda."
  },
  {
    question: "Apakah instansi atau institusi pendidikan bisa berkolaborasi dengan BYE?",
    answer: "Sangat bisa! Kami rutin berkolaborasi dengan universitas, dinas pemerintah daerah, dan asosiasi bisnis untuk merancang pelatihan bersama, pameran inovasi mahasiswa, serta penyelenggaraan mega-event pemuda."
  }
];
