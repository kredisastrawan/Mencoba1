export interface PartnerLogo {
  name: string;
  file: string; // nama file persis seperti di AI Studio
  onDark?: boolean; // true untuk logo putih, kartunya dikasih latar biru
}

export const PARTNER_LOGOS: PartnerLogo[] = [
  { name: 'Bim University', file: 'Bim.png' },
  { name: 'HIMA Bisnis Digital', file: 'Hima.png' },
  { name: 'Metamorph', file: 'MTP.png' },
  { name: 'AE Group', file: 'Logo AE group.png' },
  { name: 'Noxaz Media', file: 'NM.png' },
  { name: 'Lippo Mall Kuta', file: 'Logo lippomall.png', onDark: true },
  { name: 'Level 21 Mall', file: 'Logo level twenty one mall.png' },
  { name: 'Planet Gadget', file: 'Logo planet gadget.png' },
  { name: 'Chemi', file: 'Chemi.png' },
  { name: 'KuCetakIn', file: 'Kucetakin.png' },
  { name: 'Bali Entrepreneur Circle', file: 'BEC.png' },
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
  { name: 'BJ', file: 'BJ.png', onDark: true },
];

// Spasi di nama file otomatis di-encode supaya bisa dibuka browser
export const logoSrc = (file: string) => encodeURI('/' + file);