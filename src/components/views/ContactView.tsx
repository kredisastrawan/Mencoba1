import React, { useState } from 'react';
import { Mail, Instagram, Youtube, Linkedin, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { PaperPlaneVector } from '../PaperPlaneVector';
import { BYE_LOGO_DATA_URI } from '../ByeLogo';

export const ContactView: React.FC = () => {
  const [partnerForm, setPartnerForm] = useState({ name: '', email: '', institution: '', message: '' });
  const [collabForm, setCollabForm] = useState({ name: '', email: '', collabType: 'Program Bersama', message: '' });
  const [partnerSent, setPartnerSent] = useState(false);
  const [collabSent, setCollabSent] = useState(false);

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerForm.name || !partnerForm.email) return;
    setPartnerSent(true);
  };

  const handleCollabSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!collabForm.name || !collabForm.email) return;
    setCollabSent(true);
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
          {/* Left Column: Direct Info & Social Channels matching mockup */}
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

            <div className="pt-2 border-t border-slate-100">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-3">
                Follow Us
              </span>
              <div className="flex items-center gap-3 text-slate-700">
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] hover:bg-[#0284c7] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] hover:bg-[#0284c7] hover:text-white flex items-center justify-center transition-colors font-bold text-xs"
                  aria-label="TikTok"
                >
                  TK
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] hover:bg-[#0284c7] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284c7] hover:bg-[#0284c7] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
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

          {/* Right Column: Dual Inquiry Forms matching mockup */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Form 1: Partnership Inquiry */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Partnership Inquiry
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Untuk perusahaan, sponsor, dan entitas bisnis.
                </p>

                {partnerSent ? (
                  <div className="py-8 text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-slate-900 text-sm">Inquiry Terkirim!</h4>
                    <p className="text-xs text-slate-500">Kami akan merespon dalam 1x24 jam.</p>
                  </div>
                ) : (
                  <form onSubmit={handlePartnerSubmit} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Nama"
                        value={partnerForm.name}
                        onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0284c7]"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        value={partnerForm.email}
                        onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0284c7]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Instansi / Perusahaan"
                        value={partnerForm.institution}
                        onChange={(e) => setPartnerForm({ ...partnerForm, institution: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0284c7]"
                      />
                    </div>
                    <div>
                      <textarea
                        rows={3}
                        placeholder="Pesan"
                        value={partnerForm.message}
                        onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0284c7] resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-[#0284c7] hover:bg-sky-700 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      Kirim
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Form 2: Collaboration Inquiry */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Collaboration Inquiry
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Untuk komunitas, kampus, dan inisiatif pemuda.
                </p>

                {collabSent ? (
                  <div className="py-8 text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-slate-900 text-sm">Kolaborasi Diterima!</h4>
                    <p className="text-xs text-slate-500">Tim kami akan segera menghubungi Anda.</p>
                  </div>
                ) : (
                  <form onSubmit={handleCollabSubmit} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Nama"
                        value={collabForm.name}
                        onChange={(e) => setCollabForm({ ...collabForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0284c7]"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email"
                        value={collabForm.email}
                        onChange={(e) => setCollabForm({ ...collabForm, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0284c7]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Jenis Kolaborasi (Event / Workshop / UMKM)"
                        value={collabForm.collabType}
                        onChange={(e) => setCollabForm({ ...collabForm, collabType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0284c7]"
                      />
                    </div>
                    <div>
                      <textarea
                        rows={3}
                        placeholder="Pesan"
                        value={collabForm.message}
                        onChange={(e) => setCollabForm({ ...collabForm, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#0284c7] resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl bg-[#0284c7] hover:bg-sky-700 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                    >
                      Kirim
                    </button>
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
