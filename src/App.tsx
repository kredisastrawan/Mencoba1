/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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
import { BecView } from './components/views/BecView';
import { PrestamediaView } from './components/views/PrestamediaView';

// Quick floating WhatsApp
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [defaultJoinRole, setDefaultJoinRole] = useState('Pelajar / Siswa');

  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

        {/* BEC: Bali Entrepreneur Circle */}
        {activePage === 'bec' && (
          <div className="animate-in fade-in duration-300">
            <BecView onContact={() => handleNavigate('contact')} />
          </div>
        )}

        {/* Prestamedia: publikasi media prestasi */}
        {activePage === 'prestamedia' && (
          <div className="animate-in fade-in duration-300">
            <PrestamediaView />
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