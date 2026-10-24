import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Menu, X, Heart, User, ShieldCheck, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onOpenMemberModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentPage, 
  setCurrentPage, 
  onOpenMemberModal 
}) => {
  const { announcements, dismissedAnnouncements, dismissAnnouncement, currentMember, registrations, activeUrdu, toggleUrdu } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active announcement
  const activeAnnouncement = announcements.find(a => a.active && !dismissedAnnouncements.includes(a.id));

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const confirmedRegistrations = registrations.filter(r => r.status === 'Confirmed');

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDFB]/95 backdrop-blur-md border-b border-[#EAD7C8] transition-all">
      {/* 1. Admin Announcement Bar - Vibrant Soft Rose Gradient */}
      {activeAnnouncement && (
        <aside aria-label="Announcement" className="bg-gradient-to-r from-[#FDE8ED] via-[#FAD0D9] to-[#FDE8ED] border-b border-[#F5B5C4] text-[#2A1C1E] text-xs py-2.5 px-4 shadow-xs">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 truncate">
              <span className="font-bold text-[10px] tracking-wider uppercase bg-white/80 text-[#D94F70] px-2 py-0.5 rounded-full shrink-0">
                COMMUNITY UPDATE
              </span>
              <span className="text-[#2A1C1E] font-medium truncate">{activeAnnouncement.message}</span>
              {activeAnnouncement.linkText && activeAnnouncement.linkPage && (
                <button
                  onClick={() => handleNavClick(activeAnnouncement.linkPage!)}
                  className="text-[#D94F70] hover:text-[#B52F51] underline font-bold shrink-0 ml-1 cursor-pointer"
                >
                  {activeAnnouncement.linkText} →
                </button>
              )}
            </div>
            <button
              onClick={() => dismissAnnouncement(activeAnnouncement.id)}
              className="text-[#2A1C1E]/70 hover:text-[#2A1C1E] p-1 shrink-0"
              title="Dismiss announcement"
              aria-label="Dismiss announcement"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>
      )}

      {/* 2. Quiet Utility Bar: Cultural Urdu Toggle & Portal Links */}
      <div className="border-b border-[#EAD7C8]/60 text-[11px] text-[#2A1C1E]/80 py-1.5 px-4 lg:px-8 bg-[#FCFAF7]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline font-medium text-[#2A1C1E]/70">Pakistan's Sisterhood & Modern Women's Network</span>
            <span className="hidden sm:inline text-[#D4A373]">·</span>
            <span className="font-serif-luxury italic text-[#D94F70] font-semibold">Karachi · Lahore · Islamabad</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleUrdu}
              className={`text-[11px] font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeUrdu ? 'text-[#D94F70] underline' : 'text-[#2A1C1E]/70 hover:text-[#D94F70]'
              }`}
              title="Toggle Urdu Cultural Preview"
            >
              <span className="font-urdu text-xs leading-none">اردو</span>
              <span className="hidden sm:inline text-[10px]">({activeUrdu ? 'Urdu On' : 'Preview Urdu'})</span>
            </button>

            <span className="text-[#EAD7C8]">·</span>

            {confirmedRegistrations.length > 0 && (
              <button
                onClick={onOpenMemberModal}
                className="text-[#2A1C1E] hover:text-[#D94F70] font-medium flex items-center gap-1 cursor-pointer"
              >
                <Heart className="w-3 h-3 text-[#D94F70] fill-[#D94F70]" />
                <span>My Passes ({confirmedRegistrations.length})</span>
              </button>
            )}

            <button
              onClick={() => handleNavClick('admin')}
              className={`text-[11px] font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                currentPage === 'admin' ? 'text-[#D94F70] font-bold' : 'text-[#2A1C1E]/70 hover:text-[#D94F70]'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin CMS</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Main Header Contract: Strict 3-Zone Layout */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single Element, No clutter) */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-2xl lg:text-3xl font-serif-luxury font-bold tracking-tight text-[#2A1C1E] whitespace-nowrap shrink-0 hover:text-[#D94F70] transition-colors text-left cursor-pointer flex items-center gap-2"
        >
          <span>Elevate Her</span>
          <span className="w-2 h-2 rounded-full bg-[#D94F70]" />
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-sm font-medium text-[#2A1C1E]/80">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentPage === 'home' ? 'text-[#D94F70] font-bold underline underline-offset-8 decoration-[#D94F70] decoration-2' : 'hover:text-[#D94F70]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentPage === 'about' ? 'text-[#D94F70] font-bold underline underline-offset-8 decoration-[#D94F70] decoration-2' : 'hover:text-[#D94F70]'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick('events')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentPage === 'events' ? 'text-[#D94F70] font-bold underline underline-offset-8 decoration-[#D94F70] decoration-2' : 'hover:text-[#D94F70]'
            }`}
          >
            Events
          </button>
          <button
            onClick={() => handleNavClick('community')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentPage === 'community' ? 'text-[#D94F70] font-bold underline underline-offset-8 decoration-[#D94F70] decoration-2' : 'hover:text-[#D94F70]'
            }`}
          >
            Community
          </button>
          <button
            onClick={() => handleNavClick('blog')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentPage === 'blog' ? 'text-[#D94F70] font-bold underline underline-offset-8 decoration-[#D94F70] decoration-2' : 'hover:text-[#D94F70]'
            }`}
          >
            Wellness Blog
          </button>
          <button
            onClick={() => handleNavClick('resources')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentPage === 'resources' ? 'text-[#D94F70] font-bold underline underline-offset-8 decoration-[#D94F70] decoration-2' : 'hover:text-[#D94F70]'
            }`}
          >
            Resources
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              currentPage === 'contact' ? 'text-[#D94F70] font-bold underline underline-offset-8 decoration-[#D94F70] decoration-2' : 'hover:text-[#D94F70]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Primary Action - Vibrant Soft Luxury CTA */}
        <div className="flex items-center gap-3 shrink-0">
          {currentMember ? (
            <button
              onClick={onOpenMemberModal}
              className="px-4 py-2.5 text-xs font-bold text-[#2A1C1E] bg-[#FDF0F3] border border-[#F5B5C4] rounded-xl hover:bg-[#FADCE2] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <User className="w-3.5 h-3.5 text-[#D94F70]" />
              <span>{currentMember.fullName.split(' ')[0]}'s Portal</span>
            </button>
          ) : (
            <button
              onClick={() => handleNavClick('community')}
              className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#D94F70] via-[#C93F62] to-[#B52F51] rounded-xl hover:from-[#B52F51] hover:to-[#9E2442] transition-all shadow-[0_4px_16px_rgba(217,79,112,0.32)] hover:shadow-[0_6px_22px_rgba(217,79,112,0.45)] whitespace-nowrap shrink-0 cursor-pointer"
            >
              Join Elevate Her
            </button>
          )}

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#2A1C1E] hover:bg-[#FDF0F3] rounded-lg cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#D94F70]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDFB] border-b border-[#EAD7C8] px-6 py-4 flex flex-col gap-3 shadow-xl animate-in fade-in duration-200">
          <button
            onClick={() => handleNavClick('home')}
            className={`text-left py-2 text-base font-medium ${currentPage === 'home' ? 'text-[#D94F70] font-bold' : 'text-[#2A1C1E]'}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`text-left py-2 text-base font-medium ${currentPage === 'about' ? 'text-[#D94F70] font-bold' : 'text-[#2A1C1E]'}`}
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick('events')}
            className={`text-left py-2 text-base font-medium ${currentPage === 'events' ? 'text-[#D94F70] font-bold' : 'text-[#2A1C1E]'}`}
          >
            Events & Meetups
          </button>
          <button
            onClick={() => handleNavClick('community')}
            className={`text-left py-2 text-base font-medium ${currentPage === 'community' ? 'text-[#D94F70] font-bold' : 'text-[#2A1C1E]'}`}
          >
            Community Membership
          </button>
          <button
            onClick={() => handleNavClick('blog')}
            className={`text-left py-2 text-base font-medium ${currentPage === 'blog' ? 'text-[#D94F70] font-bold' : 'text-[#2A1C1E]'}`}
          >
            Wellness Blog
          </button>
          <button
            onClick={() => handleNavClick('resources')}
            className={`text-left py-2 text-base font-medium ${currentPage === 'resources' ? 'text-[#D94F70] font-bold' : 'text-[#2A1C1E]'}`}
          >
            Resources & Guides
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`text-left py-2 text-base font-medium ${currentPage === 'contact' ? 'text-[#D94F70] font-bold' : 'text-[#2A1C1E]'}`}
          >
            Contact & Inquiries
          </button>
          <div className="pt-2 border-t border-[#EAD7C8] flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('community')}
              className="w-full py-3 text-center text-xs font-bold text-white bg-gradient-to-r from-[#D94F70] to-[#B52F51] rounded-xl shadow-md"
            >
              Join Elevate Her Community
            </button>
            <button
              onClick={() => handleNavClick('admin')}
              className="w-full py-2 text-center text-xs font-medium text-[#2A1C1E]/80 hover:text-[#D94F70]"
            >
              Admin Dashboard CMS
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
