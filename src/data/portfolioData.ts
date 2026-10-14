export interface PortfolioEntry {
  title: string;
  cover: string;          // link foto (https://...) atau nama file di folder public
  tag?: string;           // tulisan kecil di atas judul, contoh: Oktober 2026 · Denpasar
  description?: string;   // deskripsi singkat di atas foto
  impact?: string[];      // poin-poin Impact (panel kanan)
  stat?: string;          // angka besar, contoh: 35+
  statLabel?: string;     // keterangan angka
}

/*
  ============================================================
  CARA MENAMBAH PORTOFOLIO
  ============================================================
  1. Salin template di bawah (dari tanda { sampai }, ).
  2. Tempel di PALING ATAS daftar PORTFOLIO, lalu isi.
  3. Simpan. Kartu baru otomatis muncul di halaman Portfolio,
     urutannya sama dengan urutan di daftar ini.

  Hanya `title` dan `cover` yang wajib. Baris lain boleh dihapus.
  Jangan menulis tanda ` (backtick) di dalam teks.

  TEMPLATE:

  {
    title: `Nama Kegiatan`,
    cover: `https://i.ibb.co/XXXXXXX/foto.jpg`,
    tag: `Oktober 2026 · Lokasi`,
    description: `Deskripsi singkat kegiatan.`,
    impact: [
      `Poin dampak pertama`,
      `Poin dampak kedua`,
      `Poin dampak ketiga`,
    ],
    stat: `50+`,
    statLabel: `Peserta Terdaftar`,
  },
*/
export const PORTFOLIO: PortfolioEntry[] = [
  {
    title: `Kolaborasi Bali Youth Evolution`,
    cover: `https://i.ibb.co.com/B5LKBDMq/image.png`,
    tag: `29 Agustus 2026 · Level 21 Mall`,
    description: `Mengedukasi puluhan pelaku Pemuda Bali, dalam pemanfaat Artificial Intelligence.`,
    impact: [
      `Berkolaborasi dengan Metamorph Academy dan Hima Bisnis Digital BIM University`,
      `Kolaborasi 4+ Mitra Sekolah`,
      `Dukungan Penuh Pemerintah Daerah`,
    ],
    stat: `35+`,
    statLabel: `Total Anggota & Pengunjung Terdaftar`,
  },
  {
    title: `Mega-event BYE`,
    cover: `https://i.ibb.co.com/bgLXT4ht/1.jpg`,
    tag: `16 Agustus 2026 · Level 21 Mall`,
    description: `Panggung puncak yang mengedukasi puluhan pelaku UMKM lokal Bali dan mengonsolidasikan puluhan pemuda.`,
    impact: [
      `Berkolaborasi dengan HIPMI Denpasar, Scholario.ID dan Sangguru Academy`,
      `Kolaborasi 5+ Mitra Sekolah`,
      `Dukungan Penuh Pemerintah Daerah`,
    ],
    stat: `30+`,
    statLabel: `Total Anggota & Pengunjung Terdaftar`,
  },
];
