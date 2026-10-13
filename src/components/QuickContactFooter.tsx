import React, { useState } from 'react';
import { COMPANY_INFO, FEATURED_SERVICES } from '../data/companyData';
import { 
  Send, 
  MessageCircle, 
  Mail, 
  Instagram, 
  MapPin, 
  Copy, 
  Check, 
  ArrowUp, 
  ShieldCheck, 
  Clock, 
  PhoneCall
} from 'lucide-react';
import { BaliCloudMotif } from './BaliCloudMotif';

export const QuickContactFooter: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    serviceInterest: 'Academy & AI Workshop',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(COMPANY_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleQuickWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim()) {
      setErrorMsg('Mohon isi nama dan nomor WhatsApp/Email Anda terlebih dahulu.');
      return;
    }
    setErrorMsg('');

    const text = `Halo Bali Youth Evolution!\n\nNama: ${formData.name}\nKontak: ${formData.contact}\nMinat Layanan/Program: ${formData.serviceInterest}\nKebutuhan: ${formData.message || 'Ingin konsultasi lebih lanjut.'}\n\nMohon info jadwal dan langkah selanjutnya. Terima kasih.`;
    const encoded = encodeURIComponent(text);
    const cleanNumber = COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encoded}`, '_blank');
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim()) {
      setErrorMsg('Mohon isi nama dan kontak Anda.');
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="kontak" className="bg-slate-900 text-slate-200 relative pt-20 pb-12 overflow-hidden">
      {/* Decorative Balinese Cloud Accent */}
      <div className="absolute top-8 right-10 opacity-15 pointer-events-none hidden md:block">
        <BaliCloudMotif className="w-48 h-28 text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Fast Contact Card / Form Grid */}
        <div className="bg-slate-800/90 rounded-2xl border border-slate-700/80 p-6 sm:p-10 mb-16 shadow-xl backdrop-blur-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Direct Info & Quick Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Fitur Kontak Cepat Terpadu</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                Mulai Kolaborasi & Konsultasi Hari Ini
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Apakah Anda pelaku UMKM yang butuh pendampingan digital, profesional yang ingin menguatkan personal branding, atau institusi yang ingin bersinergi? Tim kami siap berdiskusi langsung.
              </p>

              {/* Fast Direct Action Links */}
              <div className="space-y-3 pt-2">
                {/* Email Direct & Copy */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] text-slate-400 uppercase font-mono">Email Resmi</div>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-blue-400 truncate block transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Salin alamat email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Instagram Direct */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-pink-600/20 text-pink-400 flex items-center justify-center shrink-0">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 uppercase font-mono">Instagram Resmi</div>
                      <a
                        href={COMPANY_INFO.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold text-white hover:text-pink-300 transition-colors"
                      >
                        {COMPANY_INFO.instagram}
                      </a>
                    </div>
                  </div>
                  <a
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-blue-400 hover:underline px-2 py-1"
                  >
                    Kunjungi &rarr;
                  </a>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-mono">Wilayah Operasional</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {COMPANY_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Respon cepat dalam 1x24 jam kerja</span>
              </div>
            </div>

            {/* Right Column: Interactive Quick Form */}
            <div className="lg:col-span-7 bg-slate-900/90 rounded-xl p-6 sm:p-8 border border-slate-700">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-display">
                    Pesan Anda Berhasil Terkirim!
                  </h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Terima kasih telah menghubungi Bali Youth Evolution. Tim kami akan segera meninjau kebutuhan Anda dan menghubungi Anda via WhatsApp atau email.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        contact: '',
                        serviceInterest: 'Academy & AI Workshop',
                        message: ''
                      });
                    }}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors cursor-pointer"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <form className="space-y-4">
                  <div className="text-sm font-bold text-white mb-2">
                    Kirim Pertanyaan / Reservasi Konsultasi
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-rose-900/40 border border-rose-700 text-rose-200 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase font-mono mb-1.5">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Contoh: I Made Raditya"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase font-mono mb-1.5">
                        WhatsApp / Email *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="Contoh: 0812-xxxx-xxxx"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase font-mono mb-1.5">
                      Pilihan Layanan / Program
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors cursor-pointer"
                    >
                      <option value="Academy & AI Workshop">Academy & Masterclass (Edukasi AI & Bisnis)</option>
                      <option value="Personal Branding Management">Personal Branding Management (Eksekutif/Tokoh)</option>
                      <option value="Presta Media VIP">Presta Media (Media Publikasi Prestasi VIP)</option>
                      <option value="Pendampingan UMKM Lapangan">Pendampingan Operasional UMKM (Pilar 02)</option>
                      <option value="Kolaborasi Institusi / Kampus">Kemitraan Multipihak / Institusi Kampus / Pemda</option>
                      <option value="Sponsorship Mega Event">Sponsorship & Event Activation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase font-mono mb-1.5">
                      Catatan / Kebutuhan Singkat
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Jelaskan kebutuhan bisnis, brand, atau program Anda..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Dual Action Submit: WhatsApp Direct OR Form Email */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={handleQuickWhatsApp}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Kirim via WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSubmitForm}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-xs"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirim Pesan Cepat</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-1">
                    Informasi Anda aman dan hanya digunakan untuk keperluan koordinasi resmi BYE.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Navigation & Brand Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800 text-sm">
          {/* Brand description */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center font-display">
                bye
              </span>
              <span className="font-bold text-white text-lg font-display">Bali Youth Evolution</span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm leading-relaxed">
              #EMPOWERINGYOUTH — Gerakan wirausaha muda dan akselerasi UMKM di Bali. Mencetak eksekutor lapangan berdaya saing global dengan integritas dan empati.
            </p>
            <div className="text-xs text-blue-400 font-mono">
              Denpasar · Kuta · Bali · Indonesia
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="font-semibold text-white text-xs uppercase tracking-wider font-mono mb-3">
              Navigasi Halaman
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#profil" className="hover:text-white transition-colors">Profil & Sejarah</a></li>
              <li><a href="#program" className="hover:text-white transition-colors">4 Pilar Program</a></li>
              <li><a href="#layanan" className="hover:text-white transition-colors">Layanan Unggulan</a></li>
              <li><a href="#portofolio" className="hover:text-white transition-colors">Portofolio & Mitra</a></li>
              <li><a href="#testimoni" className="hover:text-white transition-colors">Testimoni Klien</a></li>
            </ul>
          </div>

          {/* Ecosystem Units */}
          <div>
            <h5 className="font-semibold text-white text-xs uppercase tracking-wider font-mono mb-3">
              Unit Ekosistem
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><span className="text-slate-300 font-medium">Academy & Masterclass</span></li>
              <li><span className="text-slate-300 font-medium">Personal Branding Management</span></li>
              <li><span className="text-slate-300 font-medium">Presta Media (VIP Sub)</span></li>
              <li><span className="text-slate-300 font-medium">Mega-Event Activation</span></li>
            </ul>
          </div>
        </div>

        {/* Quiet Legal & Copyright Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Bali Youth Evolution (BYE). Seluruh Hak Cipta Dilindungi.
          </div>

          <div className="flex items-center gap-6">
            <span>#EMPOWERINGYOUTH</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
