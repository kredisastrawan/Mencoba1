import React, { useRef } from 'react';
import { ArrowRight, GraduationCap, BookOpen, Users, TrendingUp } from 'lucide-react';
import { AnimatedPaperPlaneHero } from './AnimatedPaperPlaneHero';

interface HeroMockupProps {
  onExplorePrograms: () => void;
  onJoinBye: () => void;
  onSelectAudience?: (audience: string) => void;
}

export const HeroMockup: React.FC<HeroMockupProps> = ({
  onExplorePrograms,
  onJoinBye,
  onSelectAudience,
}) => {
  const heroContainerRef = useRef<HTMLElement | null>(null);
  const heroTitleRef = useRef<HTMLHeadingElement | null>(null);
  const heroCardRef = useRef<HTMLDivElement | null>(null);

  const audienceSegments = [
    {
      title: 'Pelajar',
      subtitle: 'Siswa & Siswi',
      icon: GraduationCap,
    },
    {
      title: 'Mahasiswa',
      subtitle: 'Perguruan Tinggi',
      icon: BookOpen,
    },
    {
      title: 'Komunitas',
      subtitle: 'Komunitas Muda',
      icon: Users,
    },
    {
      title: 'Young Entrepreneur',
      subtitle: 'Wirausaha Muda',
      icon: TrendingUp,
    },
  ];

  return (
    <section
      ref={heroContainerRef}
      className="relative bg-gradient-to-b from-[#0284c7] via-[#0284c7] to-[#38bdf8] text-white overflow-hidden pt-10 sm:pt-14 pb-12 sm:pb-16"
    >
      {/* Animated Paper Plane across Hero */}
      <AnimatedPaperPlaneHero
        heroRef={heroContainerRef}
        titleRef={heroTitleRef}
        cardRef={heroCardRef}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Small Kicker */}
            <div className="text-xs sm:text-sm font-black tracking-widest uppercase text-sky-200">
              MORE YOUTH. BIGGER IMPACT.
            </div>

            {/* Giant Title */}
            <h1
              ref={heroTitleRef}
              className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-white"
            >
              Bali Youth <br />
              Evolution
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-sky-100 max-w-xl leading-relaxed">
              Platform pengembangan generasi muda yang mendorong anak muda untuk belajar, berkembang, berkolaborasi, dan menciptakan dampak positif.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onExplorePrograms}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#0284c7] hover:bg-sky-50 font-bold text-sm shadow-md transition-all cursor-pointer whitespace-nowrap active:scale-95"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onJoinBye}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-white/80 text-white hover:bg-white/10 font-bold text-sm transition-all cursor-pointer whitespace-nowrap active:scale-95"
              >
                <span>Join BYE</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Photo & Handwriting Tag */}
          <div className="lg:col-span-5 relative" ref={heroCardRef}>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3] sm:aspect-[16/11] bg-sky-900">
              <img
                src="/hero-bye.webp"
                alt="Bali Youth Evolution di Lippo Mall Kuta"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[center_70%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Tagline handwriting script matching mockup */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 text-white text-right">
                <span className="font-script text-3xl sm:text-4xl font-bold tracking-wide drop-shadow-lg text-white">
                  #EMPOWERINGYOUTH
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Audience Target Strip (Matching Mockup exactly) */}
        <div className="mt-12 sm:mt-16 pt-2">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
            {audienceSegments.map((seg, idx) => {
              const Icon = seg.icon;
              return (
                <div
                  key={idx}
                  onClick={() => onSelectAudience?.(seg.title)}
                  className="bg-white/95 hover:bg-white text-slate-800 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 text-center shadow-md transition-all hover:-translate-y-1 cursor-pointer flex flex-col items-center justify-center border border-white"
                >
                  <div className="w-8 h-8 rounded-full bg-sky-100 text-[#0284c7] flex items-center justify-center mb-2">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {seg.title}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">
                    {seg.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};