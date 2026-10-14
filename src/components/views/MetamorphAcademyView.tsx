import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, Users, Award, BookOpen, ShieldCheck } from 'lucide-react';
import { AiProgramCards } from '../AiProgramCards';

const METAMORPH_LOGO_URL = 'https://i.ibb.co.com/4ww5ndK1/mmtp-lof.png';
const METAMORPH_WHATSAPP = '628995299086';
const AI_COMMUNITY_URL = 'https://chat.whatsapp.com/K8morh9Ylfo4UU4m3YXmtr';

export interface MetamorphAcademyViewProps {
  onContact: () => void;
}

export const MetamorphAcademyView: React.FC<MetamorphAcademyViewProps> = ({ onContact }) => {
  const openWhatsApp = () => {
    const text = 'Halo Metamorph Academy, saya ingin berkonsultasi mengenai program edukasi AI dan kolaborasi.';
    window.open(`https://wa.me/${METAMORPH_WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Branding Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200 shadow-sm text-center relative overflow-hidden mb-12">
          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Metamorph Academy Logo */}
            <div className="flex justify-center mb-6">
              <img
                src={METAMORPH_LOGO_URL}
                alt="Metamorph Academy Logo"
                className="w-32 md:w-40 h-auto object-contain transition-transform hover:scale-105 duration-300"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0284c7] text-white font-bold text-xs uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>AI Academy & Digital Acceleration</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Metamorph Academy
            </h1>

            <p className="mt-5 text-slate-600 leading-relaxed text-base sm:text-lg">
              Lembaga akselerasi dan edukasi Artificial Intelligence terdepan dalam ekosistem Bali Youth Evolution. Kami membimbing siswa, pendidik, institusi, dan wirausaha muda untuk menguasai teknologi AI masa depan secara aplikatif, etis, dan berdampak nyata.
            </p>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <button
                type="button"
                onClick={openWhatsApp}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0284c7] text-white hover:bg-[#0369a1] font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-sky-200" />
                <span>Hubungi Kami</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={AI_COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
              >
                <Users className="w-4 h-4" />
                <span>Gabung Komunitas AI</span>
              </a>
            </div>

            {/* Feature Pills */}
            <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50/80">
                <BookOpen className="w-5 h-5 text-[#0284c7] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Kurikulum Praktis</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Berbasis studi kasus riil dan langsung bisa diterapkan.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50/80">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Etika & Tanggung Jawab</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Pemanfaatan AI yang aman, bijak, dan berintegritas.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50/80">
                <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Sertifikasi & Portofolio</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Hasil karya nyata sebagai bukti penguasaan kompetensi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Swipeable AI Programs Section */}
        <AiProgramCards />
      </div>
    </div>
  );
};

export const BecView = MetamorphAcademyView;
