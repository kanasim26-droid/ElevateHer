/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EventsPage } from './pages/EventsPage';
import { CommunityPage } from './pages/CommunityPage';
import { BlogPage } from './pages/BlogPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { LegalPage } from './pages/LegalPage';
import { EventModal } from './components/EventModal';
import { ResourceViewerModal } from './components/ResourceViewerModal';
import { MemberModal } from './components/MemberModal';
import { EventItem, ResourceItem } from './types';

function MainApp() {
  const { resources } = useApp();

  const [currentPage, setCurrentPage] = useState<string>('home');
  const [legalTopic, setLegalTopic] = useState<string>('guidelines');

  // Modals
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);
  const [memberModalOpen, setMemberModalOpen] = useState(false);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleOpenLegal = (topic: string) => {
    setLegalTopic(topic);
    setCurrentPage('legal');
  };

  const handleOpenResourceById = (resourceId: string) => {
    const res = resources.find(r => r.id === resourceId);
    if (res) {
      setSelectedResource(res);
    }
  };

  // If in Admin CMS page, show full-screen admin mode
  if (currentPage === 'admin') {
    return (
      <AdminPage onBackToSite={() => setCurrentPage('home')} />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F2E8] text-[#493B3B] font-sans selection:bg-[#F4DDE1] selection:text-[#493B3B]">
      {/* Sticky Header with Top Bar Contract & Announcement */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onOpenMemberModal={() => setMemberModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={(p) => setCurrentPage(p)}
            onSelectEvent={(evt) => setSelectedEvent(evt)}
            onOpenResource={handleOpenResourceById}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={(p) => setCurrentPage(p)} />
        )}

        {currentPage === 'events' && (
          <EventsPage
            onSelectEvent={(evt) => setSelectedEvent(evt)}
            onNavigateToCommunity={() => setCurrentPage('community')}
          />
        )}

        {currentPage === 'community' && (
          <CommunityPage
            onNavigateToEvents={() => setCurrentPage('events')}
            onOpenMemberModal={() => setMemberModalOpen(true)}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage onNavigateToResources={() => setCurrentPage('resources')} />
        )}

        {currentPage === 'resources' && (
          <ResourcesPage onSelectResource={(res) => setSelectedResource(res)} />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}

        {currentPage === 'legal' && (
          <LegalPage
            initialTopic={legalTopic}
            onBack={() => setCurrentPage('home')}
          />
        )}
      </main>

      {/* Consistent Luxury Footer */}
      <Footer
        onNavigate={(p) => setCurrentPage(p)}
        onOpenLegal={handleOpenLegal}
      />

      {/* Global Interactive Modals */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      <ResourceViewerModal
        resource={selectedResource}
        onClose={() => setSelectedResource(null)}
      />

      <MemberModal
        isOpen={memberModalOpen}
        onClose={() => setMemberModalOpen(false)}
        onNavigateToEvents={() => setCurrentPage('events')}
      />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}
