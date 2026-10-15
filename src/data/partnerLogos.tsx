export type LogoRowPosition = 'atas' | 'bawah';

export interface PartnerLogo {
  name: string;
  file: string; // nama file di public atau URL gambar (https://...)
  row?: LogoRowPosition; // Cukup isi 'atas' untuk baris atas, atau 'bawah' untuk baris bawah (khusus Marquee Home)
  display?: 'atas' | 'bawah'; // alias alternatif: 'atas' | 'bawah'
  onDark?: boolean; // true untuk logo putih, kartunya dikasih latar gelap
  scale?: number; // pengali ukuran individual (contoh: 1.25 untuk +25%, 0.95 untuk -5%)
}

// Otomatis support link URL https:// atau file lokal di folder public
export const logoSrc = (file: string) =>
  /^https?:\/\//i.test(file) ? file : encodeURI('/' + file);

/* ==========================================================================================
 * KOLOM 1: DAFTAR PARTNER UNTUK MARQUEE HOME DEPAN (2-ROW CONTINUOUS MARQUEE)
 * ------------------------------------------------------------------------------------------
 * Update di sini saat Anda ingin mengubah logo yang muncul di Marquee Home Depan.
 * Cukup masukkan note `row: 'atas'` atau `row: 'bawah'` untuk menentukan baris atas/bawah.
 * ========================================================================================== */
export const HOME_MARQUEE_LOGOS: PartnerLogo[] = [
  // --- BARIS ATAS (DISPLAY ATAS) ---
  { name: 'Metamorph Academy', file: 'https://i.ibb.co.com/Hp4vL2S9/mtp-log.png', row: 'atas' },
  { name: 'Bim University', file: 'Bim.png', row: 'atas' },
  { name: 'HIMA Bisnis Digital', file: 'Hima.png', row: 'atas' },
  { name: 'AE Group', file: 'Logo AE group.png', row: 'atas' },
  { name: 'Noxaz Media', file: 'NM.png', row: 'atas' },
  { name: 'Lippo Mall Kuta', file: 'Logo lippomall.png', row: 'atas' },
  { name: 'Level 21 Mall', file: 'Logo level twenty one mall.png', row: 'atas' },
  { name: 'Planet Gadget', file: 'Logo planet gadget.png', row: 'atas' },
  { name: 'Chemi', file: 'Chemi.png', row: 'atas' },
  { name: 'KuCetakIn', file: 'Kucetakin.png', row: 'atas' },
  { name: 'Balai Diklat Industri Denpasar', file: 'BDI.png', row: 'atas' },
  { name: 'Disdikpora Kota Denpasar', file: 'Disdikpora DPS.png', row: 'atas' },
  { name: 'GSA', file: 'https://i.ibb.co.com/Q7LPkCSk/gsa.png', row: 'bawah' },

  // --- BARIS BAWAH (DISPLAY BAWAH) ---
  { name: 'HIPMI Kota Denpasar', file: 'HIPMI.png', row: 'bawah' },
  { name: 'PPMI Kota Denpasar', file: 'PPMI.png', row: 'bawah' },
  { name: 'Wirausaha Muda Denpasar', file: 'WMD.png', row: 'bawah' },
  { name: 'Sangguru Academy', file: 'SA.png', row: 'bawah' },
  { name: 'Skill Bash', file: 'SB.png', row: 'bawah' },
  { name: 'Scholario.id', file: 'SC.png', row: 'bawah' },
  { name: 'PM', file: 'Pm.png', row: 'bawah' },
  { name: 'BKRAF', file: 'BKRAF.png', row: 'bawah' },
  { name: 'BJ', file: 'BJ.png', row: 'bawah' },
  { name: 'DISDIKPORA PROV BALI', file: 'https://i.ibb.co.com/67Dx9Lzn/Disdikpora.png', row: 'bawah' },
  { name: 'PJ', file: 'https://i.ibb.co.com/67thCpbN/pj.png', row: 'bawah' },
];

/* ==========================================================================================
 * KOLOM 2: DAFTAR PARTNER UNTUK HALAMAN "TELAH BERKOLABORASI DENGAN" (SLIDE / VIEW PAGE)
 * ------------------------------------------------------------------------------------------
 * Update di sini saat Anda ingin mengubah logo pada Halaman / Slide Telah Berkolaborasi Dengan.
 * Anda dapat leluasa mengatur urutan dan nilai `scale` untuk membesarkan/mengecilkan setiap logo
 * secara independen tanpa mempengaruhi tampilan marquee di Home Depan!
 * ========================================================================================== */
export const PARTNERSHIP_PAGE_LOGOS: PartnerLogo[] = [
  // Baris 1: Kombinasi seimbang agar logo teks tidak mepet dan logo bulat/ikon tampak tegas
  { name: 'Metamorph Academy', file: 'https://i.ibb.co.com/Hp4vL2S9/mtp-log.png' },
  { name: 'Bim University', file: 'Bim.png', scale: 0.95 },
  { name: 'HIMA Bisnis Digital', file: 'Hima.png', scale: 0.92 },
  { name: 'AE Group', file: 'Logo AE group.png', scale: 1.35 },
  { name: 'Noxaz Media', file: 'NM.png', scale: 1.35 },

  // Baris 2
  { name: 'Lippo Mall Kuta', file: 'Logo lippomall.png' },
  { name: 'Level 21 Mall', file: 'Logo level twenty one mall.png' },
  { name: 'Planet Gadget', file: 'Logo planet gadget.png', scale: 1.3 },
  { name: 'Chemi', file: 'Chemi.png' },
  { name: 'KuCetakIn', file: 'Kucetakin.png' },

  // Baris 3: Lencana & institusi
  { name: 'Balai Diklat Industri Denpasar', file: 'BDI.png', scale: 1.15 },
  { name: 'Disdikpora Kota Denpasar', file: 'Disdikpora DPS.png', scale: 1.15 },
  { name: 'PPMI Kota Denpasar', file: 'PPMI.png', scale: 1.15 },
  { name: 'HIPMI Kota Denpasar', file: 'HIPMI.png', scale: 1.15 },
  { name: 'Wirausaha Muda Denpasar', file: 'WMD.png', scale: 1.1 },

  // Baris 4: Komunitas & partner edukasi
  { name: 'Sangguru Academy', file: 'SA.png' },
  { name: 'Skill Bash', file: 'SB.png' },
  { name: 'Scholario.id', file: 'SC.png' },
  { name: 'PM', file: 'Pm.png', scale: 1.2 },
  { name: 'BKRAF', file: 'BKRAF.png', scale: 1.2 },

  // Baris 5
  { name: 'BJ', file: 'BJ.png', scale: 1.2 },
  { name: 'DISDIKPORA PROV BALI', file: 'https://i.ibb.co.com/67Dx9Lzn/Disdikpora.png', scale: 1.15 },
  { name: 'GSA', file: 'https://i.ibb.co.com/Q7LPkCSk/gsa.png', scale: 1.15 },
  { name: 'PJ', file: 'https://i.ibb.co.com/67thCpbN/pj.png', scale: 1.35 },
];

// Alias default untuk kompatibilitas ke belakang
export const PARTNER_LOGOS: PartnerLogo[] = PARTNERSHIP_PAGE_LOGOS;

// Sistem helper untuk memisahkan baris atas dan baris bawah pada Marquee Home
export const getPartnerLogosByRow = (logos: PartnerLogo[] = HOME_MARQUEE_LOGOS) => {
  const atas = logos.filter((p) => p.row === 'atas' || p.display === 'atas');
  const bawah = logos.filter((p) => p.row === 'bawah' || p.display === 'bawah');

  // Jika ada logo baru yang belum diisi note 'atas' atau 'bawah', masukkan bergantian
  const unassigned = logos.filter(
    (p) => p.row !== 'atas' && p.row !== 'bawah' && p.display !== 'atas' && p.display !== 'bawah'
  );

  if (unassigned.length > 0) {
    unassigned.forEach((p, idx) => {
      if (idx % 2 === 0) {
        atas.push(p);
      } else {
        bawah.push(p);
      }
    });
  }

  // Fallback pengaman jika salah satu baris kosong sama sekali
  if (atas.length === 0 && bawah.length === 0) {
    const mid = Math.ceil(logos.length / 2);
    return {
      topLogos: logos.slice(0, mid),
      bottomLogos: logos.slice(mid),
    };
  }

  return {
    topLogos: atas.length > 0 ? atas : logos,
    bottomLogos: bawah.length > 0 ? bawah : logos,
  };
};