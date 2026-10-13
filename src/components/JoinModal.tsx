import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

import { BYE_LOGO_DATA_URI } from './ByeLogo';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: string;
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  defaultRole = 'Pelajar / Mahasiswa',
}) => {
  const [role, setRole] = useState(defaultRole);
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [interest, setInterest] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppJoin = () => {
    const clean = COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Halo Tim Bali Youth Evolution!\nSaya ingin bergabung dengan BYE (#EMPOWERINGYOUTH).\nNama: ${name || '-'}\nRole: ${role}\nNomor WA: ${whatsapp || '-'}\nMinat: ${interest || 'Ingin bergabung dengan kegiatan dan ekosistem BYE.'}`
    );
    window.open(`https://wa.me/${clean}?text=${text}`, '_blank');
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !whatsapp) return;
    setSuccess(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden relative border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0284c7] text-white p-6 relative">
          <button
            type="button"
            onClick={onClose}
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
            <div className="text-center py-6 space-y-3">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-xl font-bold text-slate-900">Selamat Bergabung!</h4>
              <p className="text-xs text-slate-600">
                Data Anda telah diterima. Koordinator keanggotaan BYE akan menghubungi WhatsApp Anda untuk onboarding komunitas.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#0284c7] text-white font-bold text-xs cursor-pointer"
              >
                Selesai
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Kategori Profil Anda
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 bg-white"
                >
                  <option value="Pelajar / Siswa">Pelajar / Siswa</option>
                  <option value="Mahasiswa Perguruan Tinggi">Mahasiswa Perguruan Tinggi</option>
                  <option value="Young Entrepreneur">Young Entrepreneur / Wirausaha Muda</option>
                  <option value="Pelaku UMKM Lokal">Pelaku UMKM Lokal Bali</option>
                  <option value="Komunitas / Relawan">Komunitas / Relawan Pemuda</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama Lengkap"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nomor WhatsApp *
                </label>
                <input
                  type="text"
                  required
                  placeholder="0812-xxxx-xxxx"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Minat / Harapan Bergabung
                </label>
                <textarea
                  rows={2}
                  placeholder="Contoh: Ingin ikut pelatihan AI UMKM atau menjadi relawan event..."
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-800 resize-none"
                />
              </div>

              <div className="pt-2 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppJoin}
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Join via WA</span>
                </button>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#0284c7] hover:bg-sky-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Daftar Sekarang</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
