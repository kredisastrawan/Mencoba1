/**
 * Konfigurasi Sistem Pendaftaran Bali Youth Evolution (BYE)
 * Integrasi Google Sheets & WhatsApp Admin
 */

export const REGISTRATION_CONFIG = {
  // Nomor Admin Resmi BYE (Format Internasional untuk link wa.me)
  adminWhatsApp: '6281997841103',
  adminPhoneDisplay: '0819-9784-1103',

  // Google Sheets Database ID
  spreadsheetId: '13rAI3aYfLfsfPYY0FoJe9AGqJlJv8HT3lWP1fK8JfNo',

  // URL Google Apps Script Web App
  // Dikonfigurasi melalui environment variable VITE_BYE_REGISTRATION_API_URL
  apiEndpoint: import.meta.env.VITE_BYE_REGISTRATION_API_URL || '',
};

/**
 * Membuat link WhatsApp untuk tombol "Join via WA" (Task C)
 */
export const getDirectJoinWhatsAppUrl = (): string => {
  const message =
    'Halo Admin BYE! Saya tertarik untuk bergabung dengan Bali Youth Evolution. Mohon informasi lebih lanjut mengenai proses pendaftaran dan program yang tersedia. Terima kasih.';
  return `https://wa.me/${REGISTRATION_CONFIG.adminWhatsApp}?text=${encodeURIComponent(message)}`;
};

/**
 * Membuat link WhatsApp setelah formulir berhasil terkirim ke Google Sheets (Task D)
 */
export const getPostRegistrationWhatsAppUrl = (data: {
  name: string;
  role: string;
  interest: string;
}): string => {
  const message = `Halo Admin BYE! Saya sudah mengisi formulir pendaftaran Bali Youth Evolution.

Nama: ${data.name.trim()}
Kategori: ${data.role.trim()}
Minat: ${data.interest.trim() || '-'}

Mohon informasi mengenai tahapan selanjutnya. Terima kasih.`;

  return `https://wa.me/${REGISTRATION_CONFIG.adminWhatsApp}?text=${encodeURIComponent(message)}`;
};
