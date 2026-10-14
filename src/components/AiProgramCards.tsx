import React, { useRef, useState, useEffect } from 'react';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MessageCircle,
  GraduationCap,
  Building2,
  ArrowRight,
  Layers,
  Users2,
} from 'lucide-react';
import { AI_PROGRAMS, AiProgram } from '../data/aiProgramData';

const WHATSAPP_CONTACT = '628995299086';
const AI_COMMUNITY_URL = 'https://chat.whatsapp.com/K8morh9Ylfo4UU4m3YXmtr';

export const AiProgramCards: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<'all' | 'belajar' | 'institusi'>('all');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mouse drag support for smooth swiping on desktop
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const filteredPrograms = AI_PROGRAMS.filter((p) => {
    if (activeTrack === 'all') return true;
    return p.track === activeTrack;
  });

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate active card index approximately
    const cardWidth = 340; // approx card width + gap
    const idx = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(Math.min(Math.max(idx, 0), filteredPrograms.length - 1));
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    return () => el.removeEventListener('scroll', checkScroll);
  }, [filteredPrograms]);

  const scrollByAmount = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeftStart.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const openProgramConsultation = (program: AiProgram) => {
    const text = `Halo Metamorph Academy, saya tertarik berkonsultasi mengenai program ${program.name} (${program.segment}).`;
    window.open(`https://wa.me/${WHATSAPP_CONTACT}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="w-full py-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-[#0284c7] font-semibold text-xs tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
            Program Unggulan AI Metamorph Academy
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Katalog Program Kecerdasan Buatan (AI)
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            Geser kartu ke samping untuk melihat seluruh kurikulum pembelajaran AI adaptif bagi siswa, mahasiswa, guru, dan pelaku bisnis.
          </p>
        </div>

        {/* Desktop Navigation Arrows */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByAmount(-360)}
            disabled={!canScrollLeft}
            aria-label="Geser ke kiri"
            className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all cursor-pointer ${
              canScrollLeft
                ? 'bg-white text-slate-800 shadow-xs hover:bg-slate-50 hover:border-[#0284c7] hover:text-[#0284c7]'
                : 'bg-slate-100 text-slate-300 cursor-not-allowed border-transparent'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(360)}
            disabled={!canScrollRight}
            aria-label="Geser ke kanan"
            className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all cursor-pointer ${
              canScrollRight
                ? 'bg-[#0284c7] text-white shadow-xs hover:bg-[#0369a1]'
                : 'bg-slate-100 text-slate-300 cursor-not-allowed border-transparent'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <button
          type="button"
          onClick={() => setActiveTrack('all')}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeTrack === 'all'
              ? 'bg-slate-900 text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>Semua Program ({AI_PROGRAMS.length})</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTrack('belajar')}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeTrack === 'belajar'
              ? 'bg-[#0284c7] text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Track Belajar (Siswa & Mahasiswa)</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTrack('institusi')}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
            activeTrack === 'institusi'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          <Building2 className="w-3.5 h-3.5" />
          <span>Track Institusi & Bisnis</span>
        </button>
      </div>

      {/* Swipeable Scroll Container */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing no-scrollbar"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {filteredPrograms.map((p) => {
          const isBelajar = p.track === 'belajar';

          return (
            <div
              key={p.no}
              className="flex-none w-[86vw] sm:w-[360px] md:w-[380px] snap-start bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group select-none"
            >
              {/* Card Header Top Accent */}
              <div
                className={`h-2.5 w-full ${
                  isBelajar
                    ? 'bg-gradient-to-r from-sky-400 via-[#0284c7] to-cyan-500'
                    : 'bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500'
                }`}
              />

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Badge Row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-mono text-xs font-bold">
                      #{p.no < 10 ? `0${p.no}` : p.no}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                        isBelajar
                          ? 'bg-sky-50 text-[#0284c7] border border-sky-200/60'
                          : 'bg-indigo-50 text-indigo-700 border border-indigo-200/60'
                      }`}
                    >
                      {isBelajar ? (
                        <GraduationCap className="w-3.5 h-3.5" />
                      ) : (
                        <Building2 className="w-3.5 h-3.5" />
                      )}
                      <span>{p.segment}</span>
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors leading-snug">
                    {p.name}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm font-medium text-slate-500 italic">
                    &ldquo;{p.tagline}&rdquo;
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {p.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                      Poin Pembelajaran:
                    </p>
                    <ul className="space-y-2">
                      {p.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isBelajar ? 'text-[#0284c7]' : 'text-indigo-600'
                            }`}
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={() => openProgramConsultation(p)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-slate-900 text-white hover:bg-[#0284c7] text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all cursor-pointer active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Konsultasi Program</span>
                    <ArrowRight className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Swipe Indicators / Pagination Dots */}
      <div className="flex sm:hidden items-center justify-center gap-1.5 mt-4">
        {filteredPrograms.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => scrollToIndex(idx)}
            aria-label={`Geser ke kartu nomor ${idx + 1}`}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              currentIndex === idx ? 'w-6 bg-[#0284c7]' : 'w-2 bg-slate-300'
            }`}
          />
        ))}
      </div>

      {/* Community Call-out Box */}
      <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-3 border border-emerald-500/30">
              <Users2 className="w-3.5 h-3.5" />
              Komunitas AI Terbuka
            </div>
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Bergabung Bersama Komunitas AI Metamorph Academy
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-sky-200/90 leading-relaxed">
              Dapatkan update tools AI terbaru, diskusi implementasi praktis, undangan workshop eksklusif, dan jejaring penggiat kecerdasan buatan di Bali.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href={AI_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Gabung Komunitas AI</span>
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_CONTACT}?text=${encodeURIComponent('Halo Metamorph Academy, saya ingin bertanya lebih lanjut mengenai program AI.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm transition-all active:scale-95 text-center"
            >
              <span>Hubungi Admin</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
