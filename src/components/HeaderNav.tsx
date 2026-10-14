import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

import { BYE_LOGO_DATA_URI } from './ByeLogo';

export type ActivePage =
  | 'home'
  | 'about'
  | 'programs'
  | 'ecosystem'
  | 'portfolio'
  | 'partnership'
  | 'metamorph-academy'
  | 'bec'
  | 'prestamedia'
  | 'contact';

interface HeaderNavProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onOpenJoin: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  activePage,
  onNavigate,
  onOpenJoin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Sembunyikan header saat scroll ke bawah, tampilkan lagi saat scroll ke atas
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (!mobileMenuOpen) {
        if (y > lastY && y > 80) setHidden(true);
        else if (y < lastY) setHidden(false);
      }
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [mobileMenuOpen]);

  const navItems: { id: ActivePage; label: string; path: string }[] = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'metamorph-academy', label: 'Metamorph Academy', path: '/metamorph-academy' },
    { id: 'prestamedia', label: 'Prestamedia', path: '/prestamedia' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-40 bg-white text-[#0284c7] shadow-sm border-b border-slate-200 transition-transform duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Zone */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="flex items-center gap-3 text-left cursor-pointer group"
        >
          <img
            src={BYE_LOGO_DATA_URI}
            alt="Bali Youth Evolution"
            className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col border-l border-sky-200 pl-2.5">
            <span className="text-xs font-bold leading-none text-[#0369a1] tracking-tight">
              Bali Youth
            </span>
            <span className="text-[10px] font-medium leading-none text-[#0284c7] tracking-wider">
              Evolution
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-8 text-sm font-semibold">
          {navItems.map((item) => {
            const isActive =
              activePage === item.id ||
              (item.id === 'metamorph-academy' && (activePage as string) === 'bec');
            return (
              <a
                key={item.id}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                className={`py-1 transition-colors cursor-pointer relative whitespace-nowrap ${
                  isActive
                    ? 'text-[#0369a1] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0284c7]'
                    : 'text-[#0284c7] hover:text-[#0369a1]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button: Join BYE -> */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenJoin}
            className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full bg-[#0284c7] text-white hover:bg-[#0369a1] font-bold text-xs shadow-xs transition-all cursor-pointer whitespace-nowrap active:scale-95"
          >
            <span>Join BYE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#0284c7] hover:bg-sky-50 rounded-lg cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full block text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                activePage === item.id || (item.id === 'metamorph-academy' && (activePage as string) === 'bec')
                  ? 'bg-sky-50 text-[#0369a1]'
                  : 'text-[#0284c7] hover:bg-sky-50 hover:text-[#0369a1]'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200">
            <button
              type="button"
              onClick={() => {
                onOpenJoin();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#0284c7] text-white font-bold text-sm cursor-pointer"
            >
              <span>Join BYE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};