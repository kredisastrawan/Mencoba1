import React, { useState } from 'react';
import { X, Send, MessageCircle, CheckCircle, Sparkles, Phone, Mail, User, Building } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Academy & AI Workshop'
}) => {
  const [selectedService, setSelectedService] = useState(initialService);
  const [fullName, setFullName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [organization, setOrganization] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleWhatsAppDirect = () => {
    if (!fullName.trim() || !contactInfo.trim()) {
      setError('Mohon lengkapi nama dan kontak WhatsApp/Email Anda.');
      return;
    }
    setError('');

    const text = `Halo Admin Bali Youth Evolution,\n\nSaya ingin konsultasi langsung:\nNama: ${fullName}\nInstansi/Bisnis: ${organization || '-'}\nKontak: ${contactInfo}\nLayanan/Program: ${selectedService}\nCatatan: ${notes || 'Mohon jadwalkan sesi diskusi singkat.'}\n\nTerima kasih!`;
    const encoded = encodeURIComponent(text);
    const cleanNum = COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNum}?text=${encoded}`, '_blank');
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !contactInfo.trim()) {
      setError('Mohon isi nama dan kontak Anda.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-blue-200 font-mono uppercase tracking-wider">
              <span>Konsultasi & Sinergi</span>
            </div>
            <h3 className="text-xl font-bold font-display mt-0.5">
              Jadwalkan Konsultasi Cepat BYE
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 font-display">
                Permintaan Diterima!
              </h4>
              <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                Terima kasih, <strong className="text-slate-900">{fullName}</strong>. Koordinator kemitraan Bali Youth Evolution akan menghubungi Anda melalui kontak <span className="font-semibold text-blue-600">{contactInfo}</span> dalam waktu maksimal 24 jam.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Tutup Jendela
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase font-mono mb-1.5">
                  Layanan / Program yang Diminati
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
                >
                  <option value="Academy & AI Workshop">Academy & Masterclass (Adopsi AI & Skill Bisnis)</option>
                  <option value="Personal Branding Management">Personal Branding Management (Eksekutif/Founder)</option>
                  <option value="Presta Media VIP">Presta Media (Media Publikasi Prestasi VIP)</option>
                  <option value="Pendampingan UMKM Lapangan">Pendampingan UMKM Lapangan (Pilar 02)</option>
                  <option value="Kolaborasi Institusi / Kampus">Kolaborasi Kampus / Dinas Pemerintah</option>
                  <option value="Sponsorship & Event Activation">Sponsorship & Mega-Event Activation</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase font-mono mb-1.5">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nama Anda"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 placeholder-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase font-mono mb-1.5">
                    WhatsApp / Email *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="0812-xxxx-xxxx"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 placeholder-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase font-mono mb-1.5">
                  Institusi / Usaha / Komunitas (Opsional)
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Contoh: Sanggar Kerajinan / Kampus / PT"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 placeholder-slate-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase font-mono mb-1.5">
                  Hal yang Ingin Didiskusikan
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ceritakan gambaran singkat kebutuhan atau pertanyaan Anda..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 placeholder-slate-400 resize-none"
                />
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Kirim via WhatsApp</span>
                </button>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Permintaan</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center pt-1">
                Jaminan privasi data & respon resmi dari tim Bali Youth Evolution.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
