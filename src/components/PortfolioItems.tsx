import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO } from '../data/portfolioData';

const imgSrc = (file: string) =>
  /^https?:\/\//i.test(file) ? file : encodeURI('/' + file);

export const PortfolioItems: React.FC = () => {
  if (PORTFOLIO.length === 0) return null;

  return (
    <div className="space-y-12">
      {PORTFOLIO.map((it, idx) => {
        const impact = it.impact ?? [];
        const hasPanel = impact.length > 0 || !!it.stat;
        return (
          <div
            key={idx}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div
                className={`${
                  hasPanel ? 'lg:col-span-8' : 'lg:col-span-12'
                } relative aspect-[16/10] bg-slate-900`}
              >
                <img
                  src={imgSrc(it.cover)}
                  alt={it.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  {it.tag && (
                    <span className="text-xs font-mono font-bold text-sky-300">
                      {it.tag}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mt-1">{it.title}</h3>
                  {it.description && (
                    <p className="text-xs sm:text-sm text-sky-100 mt-1">
                      {it.description}
                    </p>
                  )}
                </div>
              </div>

              {hasPanel && (
                <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-around bg-sky-50/50">
                  {impact.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#0284c7] uppercase font-mono">
                        <Award className="w-4 h-4" />
                        <span>Impact</span>
                      </div>
                      <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                        {impact.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {it.stat && (
                    <div className="border-t border-sky-200/80 pt-6">
                      <div className="text-3xl font-black text-[#0284c7] font-mono">
                        {it.stat}
                      </div>
                      {it.statLabel && (
                        <div className="text-xs text-slate-500">
                          {it.statLabel}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
