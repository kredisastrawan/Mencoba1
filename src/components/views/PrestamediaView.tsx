import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Newspaper, Award, ExternalLink } from 'lucide-react';
import { PRESTAMEDIA_NEWS, NewsItem, newsImg, findNewsBySlug, getFriendlySlug } from '../../data/prestamediaNews';

const formatDate = (iso: string) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

const NewsCard: React.FC<{
  item: NewsItem;
  isLatest?: boolean;
  onOpen: (slug: string) => void;
}> = ({ item, isLatest, onOpen }) => {
  const friendlySlug = getFriendlySlug(item);
  const articleUrl = `/prestamedia/${friendlySlug}/`;

  return (
    <a
      href={articleUrl}
      onClick={(e) => {
        e.preventDefault();
        onOpen(friendlySlug);
      }}
      className={`group text-left bg-white rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col h-full overflow-hidden hover:shadow-xl hover:-translate-y-1 block ${
        isLatest
          ? 'border-sky-300 ring-2 ring-sky-100 shadow-md'
          : 'border-slate-200/90 hover:border-sky-300'
      }`}
    >
      <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
        <img
          src={newsImg(item.cover)}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {isLatest && (
          <span className="absolute top-3 left-3 bg-[#0284c7] text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
            Terbaru
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col justify-between flex-1 gap-4">
        <div className="space-y-2.5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#0284c7]">
            {item.category} · {formatDate(item.date)}
          </div>
          <h3 className="text-base font-extrabold text-slate-900 leading-snug group-hover:text-[#0284c7] transition-colors line-clamp-3">
            {item.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
            {item.excerpt}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-[#0284c7] group-hover:text-sky-700">
          <span>Baca Selengkapnya</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
};

const ArticleDetail: React.FC<{
  item: NewsItem;
  onBack: () => void;
  onOpen: (slug: string) => void;
}> = ({ item, onBack, onOpen }) => {
  const others = PRESTAMEDIA_NEWS.filter((n) => n.slug !== item.slug).slice(0, 4);

  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <a
          href="/prestamedia"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#0284c7] hover:text-sky-700 mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Prestamedia</span>
        </a>

        <div className="text-xs font-bold uppercase tracking-wider text-[#0284c7] mb-3">
          {item.category}
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
          {item.title}
        </h1>
        <div className="mt-4 text-sm text-slate-500">
          {item.author} · {formatDate(item.date)}
        </div>

        <figure className="mt-8">
          <img
            src={newsImg(item.cover)}
            alt={item.coverCaption}
            className="w-full max-h-[520px] object-cover rounded-2xl"
          />
          <figcaption className="mt-2 text-xs text-slate-500 italic">{item.coverCaption}</figcaption>
        </figure>

        <div className="mt-8 space-y-5 text-slate-700 leading-8 text-[15px] sm:text-base">
          {item.body.map((para, i) => (
            <React.Fragment key={i}>
              <p>
                {i === 0 && <strong className="text-slate-900">{item.dateline} — </strong>}
                {para}
              </p>
              {item.photos
                .filter((ph) => ph.after === i)
                .map((ph) => (
                  <figure key={ph.file} className="my-6">
                    <img
                      src={newsImg(ph.file)}
                      alt={ph.caption}
                      className="w-full max-h-[560px] object-contain bg-slate-100 rounded-2xl"
                    />
                    <figcaption className="mt-2 text-xs text-slate-500 italic">
                      {ph.caption}
                    </figcaption>
                  </figure>
                ))}
            </React.Fragment>
          ))}
        </div>

        {/* Box Submit Prestasi di akhir artikel */}
        <div className="mt-12 p-6 rounded-2xl bg-sky-50 border border-sky-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0284c7] uppercase">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Punya Prestasi Serupa?</span>
            </div>
            <p className="text-sm font-semibold text-slate-800">
              Submit prestasi dan kisah inspiratifmu agar diliput di Prestamedia!
            </p>
          </div>
          <a
            href="https://forms.gle/Bw9pTkoNiHrwtuW29"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 bg-[#0284c7] hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
          >
            <span>Submit Prestasi</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {others.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-10 border-t border-slate-200">
          <h2 className="text-xl font-extrabold text-[#0284c7] mb-6">Berita lainnya</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {others.map((n) => (
              <NewsCard key={n.slug} item={n} onOpen={onOpen} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export interface PrestamediaViewProps {
  selectedSlug?: string | null;
  onSelectArticle?: (slug: string | null) => void;
}

export const PrestamediaView: React.FC<PrestamediaViewProps> = ({
  selectedSlug,
  onSelectArticle,
}) => {
  const [internalSlug, setInternalSlug] = useState<string | null>(null);

  const currentSlug = selectedSlug !== undefined ? selectedSlug : internalSlug;

  const openArticle = (slug: string) => {
    if (onSelectArticle) {
      onSelectArticle(slug);
    } else {
      setInternalSlug(slug);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (onSelectArticle) {
      onSelectArticle(null);
    } else {
      setInternalSlug(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const active = currentSlug ? findNewsBySlug(currentSlug) : undefined;
  if (active) {
    return (
      <ArticleDetail item={active} onBack={handleBack} onOpen={openArticle} />
    );
  }

  return (
    <section className="py-12 sm:py-16 bg-slate-50 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0284c7] mb-3">
              <Newspaper className="w-4 h-4" />
              <span>Publikasi Media Prestasi</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0284c7] tracking-tight">
              Prestamedia
            </h1>
            <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
              Kabar prestasi dan aksi inspiratif generasi muda, dari panggung daerah, nasional hingga forum internasional.
            </p>
          </div>

          {/* Kolom / Tombol Submit Prestasi mengarah ke Google Form */}
          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="https://forms.gle/Bw9pTkoNiHrwtuW29"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#0284c7] hover:bg-sky-700 text-white font-bold text-sm rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 group"
            >
              <Award className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
              <span>Submit Prestasi</span>
              <ExternalLink className="w-4 h-4 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </a>
          </div>
        </div>


        {PRESTAMEDIA_NEWS.length === 0 ? (
          <p className="text-slate-500">Belum ada berita.</p>
        ) : (
          /* 4 Kolom ke samping: Yang terbaru di kiri, sisanya ke kanan sampai 4 kolom, lalu ke bawah */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {PRESTAMEDIA_NEWS.map((item, index) => (
              <NewsCard
                key={item.slug}
                item={item}
                isLatest={index === 0}
                onOpen={openArticle}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};