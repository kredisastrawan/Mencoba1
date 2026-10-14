export interface PartnerLogo {
  name: string;
  file: string; // nama file di public atau URL gambar (https://...)
  onDark?: boolean; // true untuk logo putih, kartunya dikasih latar gelap
  scale?: number; // pengali ukuran opsional (contoh: 1.15 untuk +15%, default: 1)
}

export const PARTNER_LOGOS: PartnerLogo[] = [
  { name: 'Metamorph Academy', file: 'https://i.ibb.co.com/Hp4vL2S9/mtp-log.png' },
  { name: 'Bim University', file: 'Bim.png' },
  { name: 'HIMA Bisnis Digital', file: 'Hima.png' },
  { name: 'AE Group', file: 'Logo AE group.png' },
  { name: 'Noxaz Media', file: 'NM.png' },
  { name: 'Lippo Mall Kuta', file: 'Logo lippomall.png' },
  { name: 'Level 21 Mall', file: 'Logo level twenty one mall.png' },
  { name: 'Planet Gadget', file: 'Logo planet gadget.png' },
  { name: 'Chemi', file: 'Chemi.png' },
  { name: 'KuCetakIn', file: 'Kucetakin.png' },
  { name: 'Balai Diklat Industri Denpasar', file: 'BDI.png' },
  { name: 'Disdikpora Kota Denpasar', file: 'Disdikpora DPS.png' },
  { name: 'HIPMI Kota Denpasar', file: 'HIPMI.png' },
  { name: 'PPMI Kota Denpasar', file: 'PPMI.png' },
  { name: 'Wirausaha Muda Denpasar', file: 'WMD.png' },
  { name: 'Sangguru Academy', file: 'SA.png' },
  { name: 'Skill Bash', file: 'SB.png' },
  { name: 'Scholario.id', file: 'SC.png' },
  { name: 'PM', file: 'Pm.png' },
  { name: 'BKRAF', file: 'BKRAF.png' },
  { name: 'BJ', file: 'BJ.png' },
  { name: 'DISDIKPORA PROV BALI', file: 'https://i.ibb.co.com/67Dx9Lzn/Disdikpora.png' },
  { name: 'GSA', file: 'https://i.ibb.co.com/Q7LPkCSk/gsa.png' },
];

// Otomatis support link URL https:// atau file lokal di folder public
export const logoSrc = (file: string) =>
  /^https?:\/\//i.test(file) ? file : encodeURI('/' + file);