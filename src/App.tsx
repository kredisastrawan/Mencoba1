/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { HeaderNav, ActivePage } from './components/HeaderNav';
import { HeroMockup } from './components/HeroMockup';
import { ProgramsMockup } from './components/ProgramsMockup';
import { EcosystemMockup } from './components/EcosystemMockup';
import { AboutBannerMockup } from './components/AboutBannerMockup';
import { AchievementsMockup } from './components/AchievementsMockup';
import { PartnersMockup } from './components/PartnersMockup';
import { CollaborateBannerMockup } from './components/CollaborateBannerMockup';
import { FooterMockup } from './components/FooterMockup';
import { JoinModal } from './components/JoinModal';

// Dedicated Sub-views matching mockup columns 2-6
import { AboutView } from './components/views/AboutView';
import { ProgramsView } from './components/views/ProgramsView';
import { EcosystemView } from './components/views/EcosystemView';
import { PortfolioView } from './components/views/PortfolioView';
import { ContactView } from './components/views/ContactView';
import { PartnershipView } from './components/views/PartnershipView';
import { MetamorphAcademyView } from './components/views/MetamorphAcademyView';
import { PrestamediaView } from './components/views/PrestamediaView';
import { findNewsBySlug, getFriendlySlug } from './data/prestamediaNews';

// Quick floating WhatsApp
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const parsePath = (pathname: string): { page: ActivePage; articleSlug: string | null } => {
  const clean = pathname.replace(/\/+$/, '').trim().toLowerCase();

  if (!clean || clean === '') return { page: 'home', articleSlug: null };
  if (clean === '/about') return { page: 'about', articleSlug: null };
  if (clean === '/metamorph-academy' || clean === '/bec') return { page: 'metamorph-academy', articleSlug: null };
  if (clean === '/contact') return { page: 'contact', articleSlug: null };
  if (clean === '/programs') return { page: 'programs', articleSlug: null };
  if (clean === '/ecosystem') return { page: 'ecosystem', articleSlug: null };
  if (clean === '/portfolio') return { page: 'portfolio', articleSlug: null };
  if (clean === '/partnership') return { page: 'partnership', articleSlug: null };
  if (clean === '/prestamedia') return { page: 'prestamedia', articleSlug: null };
  if (clean === '/prestasi') return { page: 'prestamedia', articleSlug: null };

  // Handle /prestamedia/:slug atau /prestasi/:slug
  if (clean.startsWith('/prestamedia/')) {
    const slug = clean.replace('/prestamedia/', '').replace(/\/+$/, '');
    return { page: 'prestamedia', articleSlug: slug };
  }
  if (clean.startsWith('/prestasi/')) {
    const slug = clean.replace('/prestasi/', '').replace(/\/+$/, '');
    return { page: 'prestamedia', articleSlug: slug };
  }

  return { page: 'home', articleSlug: null };
};

export default function App() {
  const initial = typeof window !== 'undefined'
    ? parsePath(window.location.pathname)
    : { page: 'home' as ActivePage, articleSlug: null };

  const [activePage, setActivePage] = useState<ActivePage>(initial.page);
  const [prestamediaSlug, setPrestamediaSlug] = useState<string | null>(initial.articleSlug);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [defaultJoinRole, setDefaultJoinRole] = useState('Pelajar / Siswa');

  const navigateTo = useCallback((page: ActivePage, articleSlug?: string | null, pushToHistory = true) => {
    setActivePage(page);
    setPrestamediaSlug(articleSlug ?? null);

    let targetUrl = '/';
    if (page === 'about') targetUrl = '/about';
    else if (page === 'metamorph-academy' || (page as string) === 'bec') targetUrl = '/metamorph-academy';
    else if (page === 'contact') targetUrl = '/contact';
    else if (page === 'programs') targetUrl = '/programs';
    else if (page === 'ecosystem') targetUrl = '/ecosystem';
    else if (page === 'portfolio') targetUrl = '/portfolio';
    else if (page === 'partnership') targetUrl = '/partnership';
    else if (page === 'prestamedia') {
      if (articleSlug) {
        const newsItem = findNewsBySlug(articleSlug);
        const friendly = newsItem ? getFriendlySlug(newsItem) : articleSlug;
        targetUrl = `/prestamedia/${friendly}/`;
      } else {
        targetUrl = '/prestamedia';
      }
    }

    if (pushToHistory && typeof window !== 'undefined') {
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({ page, articleSlug }, '', targetUrl);
      }
    }

    // Dynamic browser title
    if (page === 'prestamedia' && articleSlug) {
      const newsItem = findNewsBySlug(articleSlug);
      if (newsItem) {
        document.title = `${newsItem.title} - Prestamedia | Bali Youth Evolution`;
      } else {
        document.title = 'Prestamedia - Bali Youth Evolution';
      }
    } else if (page === 'about') {
      document.title = 'About - Bali Youth Evolution';
    } else if (page === 'metamorph-academy' || (page as string) === 'bec') {
      document.title = 'Metamorph Academy - Bali Youth Evolution';
    } else if (page === 'prestamedia') {
      document.title = 'Prestamedia - Publikasi Media Prestasi | Bali Youth Evolution';
    } else if (page === 'contact') {
      document.title = 'Contact - Bali Youth Evolution';
    } else if (page === 'programs') {
      document.title = 'Programs - Bali Youth Evolution';
    } else if (page === 'ecosystem') {
      document.title = 'Ecosystem - Bali Youth Evolution';
    } else if (page === 'portfolio') {
      document.title = 'Portfolio & Prestasi - Bali Youth Evolution';
    } else if (page === 'partnership') {
      document.title = 'Telah Berkolaborasi Dengan - Bali Youth Evolution';
    } else {
      document.title = 'Bali Youth Evolution - #EMPOWERINGYOUTH';
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigate = (page: ActivePage) => {
    navigateTo(page, null);
  };

  useEffect(() => {
    const onPopState = () => {
      const parsed = parsePath(window.location.pathname);
      navigateTo(parsed.page, parsed.articleSlug, false);
    };

    window.addEventListener('popstate', onPopState);

    // Initial page title sync
    if (initial.page === 'prestamedia' && initial.articleSlug) {
      const newsItem = findNewsBySlug(initial.articleSlug);
      if (newsItem) {
        document.title = `${newsItem.title} - Prestamedia | Bali Youth Evolution`;
      }
    }

    return () => window.removeEventListener('popstate', onPopState);
  }, [navigateTo]);

  const handleOpenJoin = (role?: string) => {
    if (role) {
      setDefaultJoinRole(role);
    }
    setJoinModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-[#0284c7] selection:text-white font-sans">
      {/* Header matching Mockup */}
      <HeaderNav
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenJoin={() => handleOpenJoin()}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {activePage === 'home' && (
          <div className="animate-in fade-in duration-300">
            {/* 1. Hero Section matching mockup */}
            <HeroMockup
              onExplorePrograms={() => {
                const progEl = document.getElementById('programs');
                if (progEl) {
                  progEl.scrollIntoView({ behavior: 'smooth' });
                } else {
                  handleNavigate('programs');
                }
              }}
              onJoinBye={() => handleOpenJoin()}
              onSelectAudience={(aud) => handleOpenJoin(aud)}
            />

            {/* 2. Our Programs Section matching mockup */}
            <ProgramsMockup
              onLearnMore={(progId) => {
                handleNavigate('programs');
              }}
            />

            {/* 3. Creative & Business Ecosystem matching mockup */}
            <EcosystemMockup
              onViewAll={() => handleNavigate('ecosystem')}
              onSelectService={(svcName) => {
                handleOpenJoin(`Layanan: ${svcName}`);
              }}
            />

            {/* 4. About BYE Banner with Lake Temple matching mockup */}
            <AboutBannerMockup
              onLearnMore={() => handleNavigate('about')}
            />

            {/* 5. Achievements Section matching mockup */}
            <AchievementsMockup
              onViewAll={() => handleNavigate('portfolio')}
            />

            {/* 6. Telah Berkolaborasi Dengan (logo berjalan) */}
            <PartnersMockup
              onViewAll={() => handleNavigate('partnership')}
            />

            {/* 7. Let's Collaborate Banner matching mockup */}
            <CollaborateBannerMockup
              onGetInTouch={() => handleNavigate('contact')}
            />
          </div>
        )}

        {/* Column 2: About BYE Dedicated View */}
        {activePage === 'about' && (
          <div className="animate-in fade-in duration-300">
            <AboutView
              onBackToHome={() => handleNavigate('home')}
              onJoinBye={() => handleOpenJoin()}
            />
          </div>
        )}

        {/* Column 3: Our Programs Dedicated View */}
        {activePage === 'programs' && (
          <div className="animate-in fade-in duration-300">
            <ProgramsView
              onJoinProgram={(progTitle) => handleOpenJoin(progTitle)}
            />
          </div>
        )}

        {/* Column 4: Creative & Business Ecosystem Dedicated View */}
        {activePage === 'ecosystem' && (
          <div className="animate-in fade-in duration-300">
            <EcosystemView
              onSelectService={(svcName) => handleOpenJoin(svcName)}
            />
          </div>
        )}

        {/* Column 5: Portfolio & Achievements Dedicated View */}
        {activePage === 'portfolio' && (
          <div className="animate-in fade-in duration-300">
            <PortfolioView />
          </div>
        )}

        {/* Telah Berkolaborasi Dengan route */}
        {activePage === 'partnership' && (
          <div className="animate-in fade-in duration-300">
            <PartnershipView />
          </div>
        )}

        {/* Metamorph Academy (Pembaruan Branding dari BEC) */}
        {(activePage === 'metamorph-academy' || (activePage as string) === 'bec') && (
          <div className="animate-in fade-in duration-300">
            <MetamorphAcademyView onContact={() => handleNavigate('contact')} />
          </div>
        )}

        {/* Prestamedia: publikasi media prestasi */}
        {activePage === 'prestamedia' && (
          <div className="animate-in fade-in duration-300">
            <PrestamediaView
              selectedSlug={prestamediaSlug}
              onSelectArticle={(slug) => {
                navigateTo('prestamedia', slug);
              }}
            />
          </div>
        )}

        {/* Column 6: Contact Dedicated View */}
        {activePage === 'contact' && (
          <div className="animate-in fade-in duration-300">
            <ContactView />
          </div>
        )}
      </main>

      {/* Footer matching Mockup */}
      <FooterMockup onNavigate={handleNavigate} />

      {/* Discrete Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Join BYE Modal */}
      <JoinModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
        defaultRole={defaultJoinRole}
      />
    </div>
  );
}