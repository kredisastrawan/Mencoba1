# Bali Youth Evolution (BYE) 🚀
> **#EMPOWERINGYOUTH** — Platform Pemberdayaan Generasi Muda & Ekosistem Bisnis Kreatif Bali

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel Ready](https://img.shields.io/badge/Deployment-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com/)

---

## 📌 Tentang Bali Youth Evolution

**Bali Youth Evolution (BYE)** adalah wadah inkubasi, akselerasi, dan kolaborasi bagi generasi muda, pelajar, mahasiswa, dan wirausaha muda di Bali untuk belajar, berkembang, berkolaborasi, dan menciptakan dampak nyata bagi ekosistem ekonomi kreatif.

### Pilar Utama:
1. **Pemberdayaan Pemuda**: Pelatihan kepemimpinan, digital skills, dan public speaking.
2. **Bali Entrepreneur Circle (BEC)**: Komunitas akselerasi bisnis bagi founder muda dan pelaku UMKM lokal.
3. **Prestamedia**: Media publikasi resmi untuk mengapresiasi pencapaian dan prestasi anak muda Bali & nasional.
4. **Kemitraan Strategis**: Kolaborasi bersama pemerintah (Disdikpora, BDI, BKRAF), asosiasi pengusaha (HIPMI, PPMI, WMD), dan pusat perbelanjaan ternama (Level 21 Mall, Lippo Mall Kuta, Planet Gadget).

---

## 📁 Struktur Direktori

```text
├── public/                 # Static assets (logo mitra, media liputan Prestamedia, foto kegiatan)
├── src/
│   ├── assets/             # Gambar & ikon pendukung
│   ├── components/         # Komponen UI modular (Hero, Navbar, Modal, Partner Carousel, dll.)
│   │   └── views/          # Halaman/Tab navigasi (About, Programs, Ecosystem, BEC, Prestamedia, Portfolio, Contact)
│   ├── data/               # Data master dinamis (mitra, program, berita Prestamedia)
│   ├── types/              # Definisi tipe TypeScript
│   ├── App.tsx             # Root component & page router
│   ├── main.tsx            # Entry point React DOM
│   └── index.css           # Konfigurasi Tailwind CSS v4
├── index.html              # Entry point HTML dengan metadata OpenGraph & SEO
├── vercel.json             # Konfigurasi deployment Single Page Application (SPA) Vercel
├── vite.config.ts          # Konfigurasi build Vite & Tailwind
├── tsconfig.json           # Konfigurasi TypeScript
└── package.json            # Daftar dependencies & scripts
```

---

## 🛠️ Panduan Memulai (Development)

### Prasyarat
- **Node.js** (versi 18 ke atas)
- **npm** atau **bun**

### Instalasi & Menjalankan Lokal

```bash
# 1. Clone repository
git clone https://github.com/kredisastrawan/bali-youth-evolution1.git

# 2. Masuk ke direktori proyek
cd bali-youth-evolution1

# 3. Install dependencies
npm install

# 4. Jalankan server development
npm run dev
```

Buka browser Anda di `http://localhost:3000` (atau port yang tertera di terminal).

### Build untuk Produksi

```bash
npm run build
```

Hasil build siap saji akan dibuat di folder `dist/`.

---

## 🚀 Deployment ke Vercel

Repository ini sudah dilengkapi dengan file `vercel.json` untuk dukungan single page routing tanpa error 404:

1. Buka [Vercel Dashboard](https://vercel.com/dashboard).
2. Klik **Add New...** > **Project**.
3. Import repository GitHub `bali-youth-evolution1`.
4. Framework Preset akan otomatis terdeteksi sebagai **Vite**.
5. Klik **Deploy**!

---

## 🤝 Kemitraan & Kontak

- **Instagram**: [@baliyouthevolution](https://instagram.com/baliyouthevolution)
- **WhatsApp**: Konsultasi & Kemitraan langsung melalui tautan di website
- **Lokasi**: Denpasar, Bali, Indonesia
