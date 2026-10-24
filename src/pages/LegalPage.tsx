import React, { useState } from 'react';
import { ArrowLeft, Shield, FileText, CheckCircle2 } from 'lucide-react';

interface LegalPageProps {
  initialTopic?: string;
  onBack: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTopic = 'guidelines', onBack }) => {
  const [activeTab, setActiveTab] = useState<'guidelines' | 'privacy' | 'terms' | 'refunds'>(
    (initialTopic as any) || 'guidelines'
  );

  return (
    <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12 space-y-8 text-[#493B3B]">
      <button
        onClick={onBack}
        className="text-xs font-semibold text-[#493B3B] hover:text-[#B85C6D] flex items-center gap-1.5 cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Return to Website</span>
      </button>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#E8D8C5]">
        <button
          onClick={() => setActiveTab('guidelines')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'guidelines' ? 'bg-[#493B3B] text-white' : 'bg-white text-[#493B3B]/80 hover:bg-[#E8D8C5]/40 border border-[#E8D8C5]'
          }`}
        >
          Community Guidelines
        </button>
        <button
          onClick={() => setActiveTab('privacy')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'privacy' ? 'bg-[#493B3B] text-white' : 'bg-white text-[#493B3B]/80 hover:bg-[#E8D8C5]/40 border border-[#E8D8C5]'
          }`}
        >
          Privacy Policy
        </button>
        <button
          onClick={() => setActiveTab('terms')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'terms' ? 'bg-[#493B3B] text-white' : 'bg-white text-[#493B3B]/80 hover:bg-[#E8D8C5]/40 border border-[#E8D8C5]'
          }`}
        >
          Terms of Use
        </button>
        <button
          onClick={() => setActiveTab('refunds')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
            activeTab === 'refunds' ? 'bg-[#493B3B] text-white' : 'bg-white text-[#493B3B]/80 hover:bg-[#E8D8C5]/40 border border-[#E8D8C5]'
          }`}
        >
          Event Cancellation & Refund Policy
        </button>
      </div>

      {/* Document Content */}
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E8D8C5] shadow-xs space-y-6 text-xs sm:text-sm leading-relaxed">
        {activeTab === 'guidelines' && (
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#B85C6D]">
              OUR CODE OF SISTERHOOD
            </span>
            <h1 className="text-3xl font-serif-luxury font-bold text-[#493B3B]">
              Elevate Her Community Guidelines
            </h1>
            <p className="text-[#493B3B]/80">
              Elevate Her is dedicated to providing a safe, welcoming, and enriching sanctuary for Pakistani women of all backgrounds, professions, and life chapters. By participating in our digital spaces or in-person gatherings, you agree to uphold these core tenets:
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="bg-[#F8F2E8] p-4 rounded-xl border border-[#E8D8C5]">
                <strong className="block font-semibold text-[#493B3B] mb-1">1. Mutual Respect & Inclusivity</strong>
                <p className="text-[#493B3B]/80 text-xs">
                  We celebrate diverse paths—whether you are a student, corporate executive, homemaker, or entrepreneur. Judgment, condescension, and unsolicited moral policing have no place in our circles.
                </p>
              </div>

              <div className="bg-[#F8F2E8] p-4 rounded-xl border border-[#E8D8C5]">
                <strong className="block font-semibold text-[#493B3B] mb-1">2. Confidentiality & Emotional Safety</strong>
                <p className="text-[#493B3B]/80 text-xs">
                  What is shared in the circle stays in the circle. Personal stories, career vulnerabilities, and reflections must never be broadcast or discussed outside without explicit permission.
                </p>
              </div>

              <div className="bg-[#F8F2E8] p-4 rounded-xl border border-[#E8D8C5]">
                <strong className="block font-semibold text-[#493B3B] mb-1">3. Collaboration Over Exploitation</strong>
                <p className="text-[#493B3B]/80 text-xs">
                  While we encourage organic business networking, aggressive direct multi-level marketing pitches or unsolicited solicitation during gatherings is prohibited. Focus on building genuine relationships first.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'privacy' && (
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#B85C6D]">
              DATA PROTECTION
            </span>
            <h1 className="text-3xl font-serif-luxury font-bold text-[#493B3B]">
              Privacy Policy
            </h1>
            <p className="text-[#493B3B]/80">
              Your trust is sacred to us. Elevate Her respects the privacy of every member and visitor.
            </p>
            <h3 className="font-bold text-[#493B3B] pt-2">1. Information We Collect</h3>
            <p className="text-[#493B3B]/80">
              We collect information you explicitly provide: your name, email address, WhatsApp number (for event updates), and city chapter. We only collect details necessary to organize gatherings, issue digital passes, and deliver community newsletters.
            </p>
            <h3 className="font-bold text-[#493B3B] pt-2">2. Strict Non-Disclosure</h3>
            <p className="text-[#493B3B]/80">
              We never sell, rent, or trade your personal data to commercial third parties. Your contact information is never made public on the website without your explicit consent.
            </p>
            <h3 className="font-bold text-[#493B3B] pt-2">3. Unsubscribe & Data Deletion</h3>
            <p className="text-[#493B3B]/80">
              You can unsubscribe from marketing emails at any time. To request complete removal of your member profile or past records, contact us at hello@elevateher.pk.
            </p>
          </div>
        )}

        {activeTab === 'terms' && (
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#B85C6D]">
              LEGAL TERMS
            </span>
            <h1 className="text-3xl font-serif-luxury font-bold text-[#493B3B]">
              Terms of Use
            </h1>
            <p className="text-[#493B3B]/80">
              Welcome to the Elevate Her website. By accessing or using our platform, you agree to be bound by these Terms of Use.
            </p>
            <h3 className="font-bold text-[#493B3B] pt-2">1. Educational & Wellness Content</h3>
            <p className="text-[#493B3B]/80">
              All articles, guides, and workshops provided by Elevate Her are for educational and inspirational purposes. They do not constitute personalized medical, psychological, legal, or licensed financial advice.
            </p>
            <h3 className="font-bold text-[#493B3B] pt-2">2. Intellectual Property</h3>
            <p className="text-[#493B3B]/80">
              All branding, editorial copy, printable worksheets, and visual assets are proprietary to Elevate Her. You may use worksheets for personal, non-commercial self-development.
            </p>
          </div>
        )}

        {activeTab === 'refunds' && (
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-[#B85C6D]">
              TICKET & ATTENDANCE POLICIES
            </span>
            <h1 className="text-3xl font-serif-luxury font-bold text-[#493B3B]">
              Event Cancellation & Refund Policy
            </h1>
            <p className="text-[#493B3B]/80">
              Because our in-person brunches and circles have strictly limited seats and require upfront catering and venue commitments, please review our policy:
            </p>
            <h3 className="font-bold text-[#493B3B] pt-2">1. Cancellation by Attendee</h3>
            <p className="text-[#493B3B]/80">
              - Up to 5 days before the event: 100% refund or transfer to a future gathering.<br />
              - Between 48 to 96 hours before the event: 50% refund or option to transfer your ticket to a female friend or family member.<br />
              - Less than 48 hours before the event: Non-refundable due to finalized food and seating arrangements.
            </p>
            <h3 className="font-bold text-[#493B3B] pt-2">2. Cancellation or Rescheduling by Elevate Her</h3>
            <p className="text-[#493B3B]/80">
              In the rare event of weather disruptions, civic unrest, or unforeseen venue emergencies in Pakistan, we will notify attendees immediately. Attendees will receive a full 100% refund or automatic transfer to the rescheduled date.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
