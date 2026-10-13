import React, { useState } from 'react';
import { Mail, Instagram, Youtube, Linkedin, Send, CheckCircle2, MessageCircle, RefreshCw, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { PaperPlaneVector } from '../PaperPlaneVector';
import { BYE_LOGO_DATA_URI } from '../ByeLogo';
import { REGISTRATION_CONFIG } from '../../config/registration';

interface SubmittedInquiry {
  type: 'partnership' | 'collaboration';
  name: string;
  email: string;
  detail: string;
  message: string;
  sentAt: string;
}

export const ContactView: React.FC = () => {
  // Form State
  const [partnerForm, setPartnerForm] = useState({ name: '', email: '', institution: '', message: '' });
  const [collabForm, setCollabForm] = useState({ name: '', email: '', collabType: 'Program Bersama', message: '' });

  // Loading & Submission State
  const [partnerLoading, setPartnerLoading] = useState(false);
  const [collabLoading, setCollabLoading] = useState(false);
  const [partnerSubmitted, setPartnerSubmitted] = useState<SubmittedInquiry | null>(null);
  const [collabSubmitted, setCollabSubmitted] = useState<SubmittedInquiry | null>(null);

  // Helper to send inquiry payload to baliyouthevolution@gmail.com
  const sendInquiryEmail = async (
    type: 'Partnership' | 'Collaboration',
    name: string,
    email: string,
    detailLabel: string,
    detailValue: string,
    message: string
  ) => {
    // 1. Kirim via FormSubmit endpoint ke baliyouthevolution@gmail.com
    try {
      await fetch('https://formsubmit.co/ajax/baliyouthevolution@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `[BYE ${type} Inquiry] Pesan dari ${name} (${email})`,
          _replyto: email,
          'Kategori Inquiry': `${type} Inquiry`,
          'Nama Pengirim': name,
          'Email Pengirim': email,
          [detailLabel]: detailValue || '-',
          'Pesan': message || '-',
          'Tujuan': 'baliyouthevolution@gmail.com',
        }),
      });
    } catch (err) {
      console.warn('FormSubmit notice:', err);
    }

    // 2. Jika Google Apps Script API tersedia, kirim juga ke endpoint backend
    if (REGISTRATION_CONFIG.apiEndpoint && REGISTRATION_CONFIG.apiEndpoint.startsWith('http')) {
      try {
        await fetch(REGISTRATION_CONFIG.apiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({
            action: 'inquiry',
            inquiryType: `${type} Inquiry`,
            name,
            email,
            detail: detailValue,
            message,
          }),
        });
      } catch (scriptErr) {
        console.warn('Google Apps Script inquiry notice:', scriptErr);
      }
    }

    // 3. Simpan salinan lokal di browser
    try {
      const stored = JSON.parse(localStorage.getItem('bye_inquiries') || '[]');
      stored.push({
        id: `INQ-${Date.now()}`,
        type,
        name,
        email,
        detailValue,
        message,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('bye_inquiries', JSON.stringify(stored));
    } catch (e) {
      // Ignore localStorage sandbox errors
    }
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerForm.name.trim() || !partnerForm.email.trim()) return;

    setPartnerLoading(true);
    try {
      await sendInquiryEmail(
        'Partnership',
        partnerForm.name.trim(),
        partnerForm.email.trim(),
        'Instansi / Perusahaan',
        partnerForm.institution.trim(),
        partnerForm.message.trim()
      );

      const submitted: SubmittedInquiry = {
        type: 'partnership',
        name: partnerForm.name.trim(),
        email: partnerForm.email.trim(),
        detail: partnerForm.institution.trim() || 'Perorangan / Independen',
        message: partnerForm.message.trim(),
        sentAt: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      };

      setPartnerSubmitted(submitted);
      setPartnerForm({ name: '', email: '', institution: '', message: '' });
    } finally {
      setPartnerLoading(false);
    }
  };

  const handleCollabSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!collabForm.name.trim() || !collabForm.email.trim()) return;

    setCollabLoading(true);
    try {
      await sendInquiryEmail(
        'Collaboration',
        collabForm.name.trim(),
        collabForm.email.trim(),
        'Jenis Kolaborasi',
        collabForm.collabType.trim(),
        collabForm.message.trim()
      );

      const submitted: SubmittedInquiry = {
        type: 'collaboration',
        name: collabForm.name.trim(),
        email: collabForm.email.trim(),
        detail: collabForm.collabType.trim() || 'Program Bersama',
        message: collabForm.message.trim(),
        sentAt: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      };

      setCollabSubmitted(submitted);
      setCollabForm({ name: '', email: '', collabType: 'Program Bersama', message: '' });
    } finally {
      setCollabLoading(false);
    }
  };

  const openWhatsApp = () => {
    const cleanNum = COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '');
    const text = encodeURIComponent('Halo Bali Youth Evolution! Saya ingin mendiskusikan peluang kemitraan/kolaborasi.');
    window.open(`https://wa.me/${cleanNum}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-[#0284c7] text-white py-14 sm:py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-3 relative z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact
          </h1>
          <p className="text-base sm:text-lg text-sky-100 font-medium">
            Kami siap terhubung denganmu.
          </p>
        </div>
        <div className="absolute top-4 right-1/4 opacity-30 pointer-events-none">
          <PaperPlaneVector className="w-14 h-14 text-white" withTrajectory={false} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <img src={BYE_LOGO_DATA_URI} alt="Bali Youth Evolution" className="h-10 w-auto" />
              <div className="border-l border-slate-200 pl-2.5">
                <span className="text-xs font-bold text-slate-900 block leading-none">Bali Youth</span>
                <span className="text-[10px] text-slate-500 block leading-none mt-0.5">Evolution</span>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Email Resmi
              </span>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-sm sm:text-base font-bold text-[#0284c7] hover:underline break-all"
              >
                {COMPANY_INFO.email}
              </a>
            </div>

            {/* Kolom Follow Us: HANYA Instagram yang bisa diklik */}
            <div className="pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Follow Us
                </span>
                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  Instagram Aktif
                </span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                {/* 1. Instagram: BISA DIKLIK */}
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] hover:bg-[#0284c7] hover:text-white flex items-center justify-center transition-all shadow-xs hover:scale-105"
                  aria-label="Instagram Bali Youth Evolution"
                  title="Kunjungi Instagram @baliyouthevolution"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                {/* 2. TikTok: BELUM BISA DIKLIK */}
                <div
                  className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center font-bold text-xs cursor-not-allowed select-none opacity-60 relative group"
                  aria-label="TikTok (Segera Hadir)"
                  title="TikTok (Belum tersedia)"
                >
                  TK
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-xs">
                    Belum tersedia
                  </span>
                </div>

                {/* 3. YouTube: BELUM BISA DIKLIK */}
                <div
                  className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center cursor-not-allowed select-none opacity-60 relative group"
                  aria-label="YouTube (Segera Hadir)"
                  title="YouTube (Belum tersedia)"
                >
                  <Youtube className="w-5 h-5" />
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-xs">
                    Belum tersedia
                  </span>
                </div>

                {/* 4. LinkedIn: BELUM BISA DIKLIK */}
                <div
                  className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center cursor-not-allowed select-none opacity-60 relative group"
                  aria-label="LinkedIn (Segera Hadir)"
                  title="LinkedIn (Belum tersedia)"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-xs">
                    Belum tersedia
                  </span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 mt-2.5">
                Kanal sosial aktif saat ini adalah <strong>Instagram</strong>. TikTok, YouTube, & LinkedIn sedang dalam tahap persiapan.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={openWhatsApp}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Langsung via WhatsApp</span>
              </button>
            </div>

            <div className="pt-2 text-center">
              <span className="font-script text-3xl font-bold text-[#0284c7]">
                #EMPOWERINGYOUTH
              </span>
            </div>
          </div>

          {/* Right Column: Dual Inquiry Forms */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Form 1: Partnership Inquiry */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xl font-bold text-slate-900">
                    Partnership Inquiry
                  </h3>
                  <span className="text-[10px] font-mono font-semibold bg-sky-50 text-[#0284c7] px-2 py-0.5 rounded-full">
                    Kemitraan
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  Untuk perusahaan, sponsor, dan entitas bisnis.
                </p>

                {partnerSubmitted ? (
                  <div className="py-6 px-4 rounded-2xl bg-sky-50/60 border border-sky-100 text-center space-y-3 animate-fadeIn">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">Inquiry Terkirim!</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Email dari <span className="font-semibold text-slate-800">{partnerSubmitted.email}</span> telah diteruskan ke{' '}
                        <strong className="text-[#0284c7]">baliyouthevolution@gmail.com</strong>.
                      </p>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200 text-left text-xs space-y-1.5 shadow-2xs">
                      <div className="text-[11px] text-slate-400 font-mono uppercase">Detail Terkirim:</div>
                      <div><strong>Nama:</strong> {partnerSubmitted.name}</div>
                      <div><strong>Instansi:</strong> {partnerSubmitted.detail}</div>
                      {partnerSubmitted.message && (
                        <div><strong>Pesan:</strong> &ldquo;{partnerSubmitted.message}&rdquo;</div>
                      )}
                    </div>

                    <div className="pt-2 space-y-2">
                      <a
                        href={`mailto:baliyouthevolution@gmail.com?subject=${encodeURIComponent(
                          `[Partnership Inquiry] dari ${partnerSubmitted.name}`
                        )}&body=${encodeURIComponent(
                          `Halo Bali Youth Evolution,\n\nSaya ingin menindaklanjuti Partnership Inquiry saya:\n\nNama: ${partnerSubmitted.name}\nEmail: ${partnerSubmitted.email}\nInstansi: ${partnerSubmitted.detail}\n\nPesan:\n${partnerSubmitted.message || '-'}\n\nTerima kasih.`
                        )}`}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-sky-100 hover:bg-sky-200 text-[#0284c7] font-semibold text-xs transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Buka di Aplikasi Email</span>
                        <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                      </a>

                      <button
                        type="button"
                        onClick={() => setPartnerSubmitted(null)}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Kirim Inquiry Baru</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handlePartnerSubmit} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nama Lengkap"
                        value={partnerForm.name}
                        onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Email Anda <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="contoh: nama@perusahaan.com"
                        value={partnerForm.email}
                        onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Instansi / Perusahaan
                      </label>
                      <input
                        type="text"
                        placeholder="Nama PT / CV / Organisasi"
                        value={partnerForm.institution}
                        onChange={(e) => setPartnerForm({ ...partnerForm, institution: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Pesan atau Bentuk Kemitraan
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tuliskan tawaran kerjasama atau kebutuhan kemitraan Anda..."
                        value={partnerForm.message}
                        onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={partnerLoading}
                      className="w-full py-2.5 rounded-xl bg-[#0284c7] hover:bg-sky-700 disabled:bg-sky-400 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                    >
                      {partnerLoading ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Mengirim ke baliyouthevolution@gmail.com...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Kirim</span>
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-slate-400 text-center">
                      Data otomatis terkirim langsung ke email resmi BYE.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Form 2: Collaboration Inquiry */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xl font-bold text-slate-900">
                    Collaboration Inquiry
                  </h3>
                  <span className="text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">
                    Kolaborasi
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-4">
                  Untuk komunitas, kampus, dan inisiatif pemuda.
                </p>

                {collabSubmitted ? (
                  <div className="py-6 px-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-center space-y-3 animate-fadeIn">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">Inquiry Terkirim!</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        Email dari <span className="font-semibold text-slate-800">{collabSubmitted.email}</span> telah diteruskan ke{' '}
                        <strong className="text-emerald-700">baliyouthevolution@gmail.com</strong>.
                      </p>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-slate-200 text-left text-xs space-y-1.5 shadow-2xs">
                      <div className="text-[11px] text-slate-400 font-mono uppercase">Detail Terkirim:</div>
                      <div><strong>Nama:</strong> {collabSubmitted.name}</div>
                      <div><strong>Jenis Kolaborasi:</strong> {collabSubmitted.detail}</div>
                      {collabSubmitted.message && (
                        <div><strong>Pesan:</strong> &ldquo;{collabSubmitted.message}&rdquo;</div>
                      )}
                    </div>

                    <div className="pt-2 space-y-2">
                      <a
                        href={`mailto:baliyouthevolution@gmail.com?subject=${encodeURIComponent(
                          `[Collaboration Inquiry] dari ${collabSubmitted.name}`
                        )}&body=${encodeURIComponent(
                          `Halo Bali Youth Evolution,\n\nSaya ingin menindaklanjuti Collaboration Inquiry saya:\n\nNama: ${collabSubmitted.name}\nEmail: ${collabSubmitted.email}\nJenis Kolaborasi: ${collabSubmitted.detail}\n\nPesan:\n${collabSubmitted.message || '-'}\n\nTerima kasih.`
                        )}`}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-semibold text-xs transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Buka di Aplikasi Email</span>
                        <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                      </a>

                      <button
                        type="button"
                        onClick={() => setCollabSubmitted(null)}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Kirim Inquiry Baru</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleCollabSubmit} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nama Lengkap"
                        value={collabForm.name}
                        onChange={(e) => setCollabForm({ ...collabForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Email Anda <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="contoh: nama@email.com"
                        value={collabForm.email}
                        onChange={(e) => setCollabForm({ ...collabForm, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Jenis Kolaborasi
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Event Bersama / Workshop / UMKM"
                        value={collabForm.collabType}
                        onChange={(e) => setCollabForm({ ...collabForm, collabType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                        Pesan Kolaborasi
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Jelaskan gagasan kolaborasi atau program yang ingin dijalankan..."
                        value={collabForm.message}
                        onChange={(e) => setCollabForm({ ...collabForm, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0284c7] focus:ring-1 focus:ring-[#0284c7] resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={collabLoading}
                      className="w-full py-2.5 rounded-xl bg-[#0284c7] hover:bg-sky-700 disabled:bg-sky-400 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                    >
                      {collabLoading ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Mengirim ke baliyouthevolution@gmail.com...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Kirim</span>
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-slate-400 text-center">
                      Data otomatis terkirim langsung ke email resmi BYE.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

