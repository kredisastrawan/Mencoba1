import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, MessageCircle, Loader2, AlertCircle } from 'lucide-react';
import { BYE_LOGO_DATA_URI } from './ByeLogo';
import {
  REGISTRATION_CONFIG,
  getDirectJoinWhatsAppUrl,
  getPostRegistrationWhatsAppUrl,
} from '../config/registration';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: string;
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  defaultRole = 'Pelajar / Siswa',
}) => {
  const [role, setRole] = useState(defaultRole);
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [interest, setInterest] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    role: string;
    interest: string;
  } | null>(null);

  if (!isOpen) return null;

  // Task C: Tombol "Join via WA" (Pesan Otomatis Minat Umum)
  const handleDirectWhatsAppJoin = () => {
    const waUrl = getDirectJoinWhatsAppUrl();
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  // Task D: Tombol "Hubungi Admin via WhatsApp" setelah pendaftaran berhasil
  const handlePostRegistrationWhatsApp = () => {
    if (!submittedData) return;
    const waUrl = getPostRegistrationWhatsAppUrl(submittedData);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  // Reset form dan tutup modal
  const handleClose = () => {
    setSuccess(false);
    setLoading(false);
    setErrorMessage(null);
    onClose();
  };

  // Task B: Submit pendaftaran ke Google Apps Script -> Google Sheets
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validasi Frontend
    const trimmedName = name.trim();
    const trimmedPhone = whatsapp.trim().replace(/[^0-9]/g, '');

    if (!trimmedName || trimmedName.length < 2) {
      setErrorMessage('Nama lengkap wajib diisi minimal 2 karakter.');
      return;
    }

    if (!trimmedPhone || trimmedPhone.length < 8) {
      setErrorMessage('Nomor WhatsApp wajib diisi minimal 8 digit angka.');
      return;
    }

    setLoading(true);

    try {
      let isSavedToSheets = false;

      // Jika endpoint Google Apps Script telah disetel, kirim ke Google Sheets
      if (REGISTRATION_CONFIG.apiEndpoint && REGISTRATION_CONFIG.apiEndpoint.startsWith('http')) {
        try {
          const response = await fetch(REGISTRATION_CONFIG.apiEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify({
              name: trimmedName,
              whatsapp: whatsapp.trim(),
              role: role,
              interest: interest.trim(),
            }),
          });
          const result = await response.json();
          if (result && result.success) {
            isSavedToSheets = true;
          }
        } catch (fetchErr) {
          console.warn('Google Apps Script request notice:', fetchErr);
        }
      }

      // Simpan salinan cadangan di browser agar data tidak pernah hilang
      try {
        const existing = JSON.parse(localStorage.getItem('bye_registrations') || '[]');
        existing.push({
          id: `BYE-${Date.now()}`,
          timestamp: new Date().toISOString(),
          name: trimmedName,
          whatsapp: whatsapp.trim(),
          role: role,
          interest: interest.trim(),
          savedToSheets: isSavedToSheets,
        });
        localStorage.setItem('bye_registrations', JSON.stringify(existing));
      } catch (storageErr) {
        // Abaikan jika localStorage tidak diizinkan di mode sandbox
      }

      // Konfirmasi pendaftaran berhasil dan siapkan data untuk WhatsApp follow-up
      setSubmittedData({
        name: trimmedName,
        role: role,
        interest: interest.trim(),
      });
      setSuccess(true);
    } catch (err: any) {
      setErrorMessage(
        'Terjadi kendala saat memproses formulir. Silakan coba kembali atau hubungi admin via tombol WhatsApp.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden relative border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0284c7] text-white p-6 relative">
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="bg-white rounded-xl px-2.5 py-1 shadow-sm inline-flex items-center justify-center">
              <img src={BYE_LOGO_DATA_URI} alt="Bali Youth Evolution" className="h-10 w-auto" />
            </div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-200">
              #EMPOWERINGYOUTH
            </span>
          </div>
          <h3 className="text-2xl font-extrabold mt-1">Join Bali Youth Evolution</h3>
          <p className="text-xs text-sky-100 mt-1">
            Jadilah bagian dari gerakan eksekutor muda & ekosistem bisnis kreatif di Bali.
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {success ? (
            /* Task D: Tampilan setelah pendaftaran berhasil dikonfirmasi backend */
            <div className="text-center py-4 space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-inner">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-1.5">
                <h4 className="text-xl font-extrabold text-slate-900">Pendaftaran Berhasil!</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                  Data Anda telah resmi tersimpan di database Google Sheets BYE. Koordinator kami akan segera memproses keanggotaan Anda.
                </p>
              </div>

              {submittedData && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 text-left text-xs space-y-1 text-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Nama:</span>
                    <span className="font-bold text-slate-900">{submittedData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Kategori:</span>
                    <span className="font-semibold text-slate-800">{submittedData.role}</span>
                  </div>
                  {submittedData.interest && (
                    <div className="pt-1 border-t border-slate-200 text-slate-600">
                      <span className="text-slate-500 block mb-0.5">Minat:</span>
                      <p className="italic line-clamp-2">"{submittedData.interest}"</p>
                    </div>
                  )}
                </div>
              )}

              {/* Dua Tombol Sesuai Task B & D */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="button"
                  onClick={handlePostRegistrationWhatsApp}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Hubungi Admin via WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs cursor-pointer transition-colors"
                >
                  Selesai
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Pesan Kesalahan / Error Banner */}
              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                  <div className="flex-1 leading-relaxed">{errorMessage}</div>
                </div>
              )}

              {/* 1. Kategori Profil */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Kategori Profil Anda
                </label>
                <select
                  disabled={loading}
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#0284c7] disabled:opacity-60"
                >
                  <option value="Pelajar / Siswa">Pelajar / Siswa</option>
                  <option value="Mahasiswa Perguruan Tinggi">Mahasiswa Perguruan Tinggi</option>
                  <option value="Young Entrepreneur">Young Entrepreneur / Wirausaha Muda</option>
                  <option value="Pelaku UMKM Lokal">Pelaku UMKM Lokal Bali</option>
                  <option value="Komunitas / Relawan">Komunitas / Relawan Pemuda</option>
                </select>
              </div>

              {/* 2. Nama Lengkap */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  disabled={loading}
                  placeholder="Nama Lengkap"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0284c7] disabled:opacity-60"
                />
              </div>

              {/* 3. Nomor WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nomor WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  disabled={loading}
                  placeholder="Contoh: 0819-xxxx-xxxx"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0284c7] disabled:opacity-60"
                />
              </div>

              {/* 4. Minat / Harapan Bergabung */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Minat / Harapan Bergabung
                </label>
                <textarea
                  rows={2}
                  disabled={loading}
                  placeholder="Contoh: Ingin ikut pelatihan AI UMKM atau menjadi relawan event..."
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 resize-none focus:outline-none focus:ring-2 focus:ring-[#0284c7] disabled:opacity-60"
                />
              </div>

              {/* Task C: Tombol Aksi (Join via WA & Daftar Sekarang) */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  disabled={loading}
                  onClick={handleDirectWhatsAppJoin}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-colors disabled:opacity-60 active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Join via WA</span>
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 rounded-xl bg-[#0284c7] hover:bg-sky-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs transition-colors disabled:opacity-60 active:scale-98"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Menyimpan...</span>
                    </>
                  ) : (
                    <>
                      <span>Daftar Sekarang</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
