import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, CheckCircle2, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenLegal: (topic: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  const { siteConfig, subscribeNewsletter, activeUrdu } = useApp();
  const [emailInput, setEmailInput] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    const res = subscribeNewsletter(emailInput);
    setFeedback(res.message);
    if (res.success) {
      setEmailInput('');
    }
  };

  return (
    <footer className="bg-[#2A1C1E] text-[#FCFAF7] pt-16 pb-12 border-t border-[#3D292C]">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Top Newsletter & Brand Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-[#4A3236]">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-serif-luxury font-bold tracking-tight text-white">
                Elevate Her
              </h2>
              <span className="w-2.5 h-2.5 rounded-full bg-[#D94F70]" />
            </div>
            <p className="text-xs uppercase tracking-widest text-[#F7BAC7] font-bold">
              Connect · Learn · Grow
            </p>
            {activeUrdu && (
              <p className="font-urdu text-xl text-[#F7BAC7] leading-relaxed">
                جہاں پاکستانی خواتین باہم جڑتی ہیں، سیکھتی ہیں اور اعتماد کے ساتھ آگے بڑھتی ہیں۔
              </p>
            )}
            <p className="text-sm text-[#FCFAF7]/80 leading-relaxed max-w-md">
              A luxury women's community and wellness platform in Pakistan. Creating inspiring, safe spaces for modern working women, entrepreneurs, and creatives across Karachi, Lahore, and Islamabad.
            </p>
            <div className="pt-2 text-xs text-[#F5E5D3] space-y-1 font-medium">
              <p><span className="text-[#F7BAC7]">Active Hubs:</span> Karachi (Clifton & DHA) · Lahore (Gulberg) · Islamabad · Online</p>
              <p><span className="text-[#F7BAC7]">Official Inquiries:</span> {siteConfig.officialEmail}</p>
              <p><span className="text-[#F7BAC7]">Market Standard Time:</span> Asia/Karachi (PKT, UTC+05:00)</p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-[#F7BAC7] font-bold">
              Community Navigation
            </h3>
            <ul className="space-y-2 text-sm text-[#FCFAF7]/80">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#F7BAC7] transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#F7BAC7] transition-colors cursor-pointer">
                  About Our Story & Founder
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('events')} className="hover:text-[#F7BAC7] transition-colors cursor-pointer">
                  Events & Meetups
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('community')} className="hover:text-[#F7BAC7] transition-colors cursor-pointer">
                  Join Elevate Her Community
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-[#F7BAC7] transition-colors cursor-pointer">
                  Wellness & Lifestyle Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-[#F7BAC7] transition-colors cursor-pointer">
                  Printable Guides & Trackers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#F7BAC7] transition-colors cursor-pointer">
                  Contact & Collaborations
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-[#F7BAC7] font-bold">
              A Little Inspiration for Your Journey
            </h3>
            <p className="text-xs text-[#FCFAF7]/80 leading-relaxed">
              Receive thoughtful weekly wellness reflections, early invitations to Karachi, Lahore, and Islamabad gatherings, and member worksheets.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email address"
                  className="bg-[#1F1315] border border-[#52383C] text-white text-xs rounded-xl px-4 py-3 flex-1 placeholder:text-[#FCFAF7]/40 focus:outline-hidden focus:border-[#D94F70]"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#D94F70] to-[#B52F51] text-white hover:from-[#B52F51] hover:to-[#9E2442] px-5 py-3 rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {feedback && (
                <p className="text-xs text-[#F7BAC7] flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{feedback}</span>
                </p>
              )}
              <p className="text-[11px] text-[#FCFAF7]/50">
                Zero spam. You can unsubscribe anytime with a single click.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FCFAF7]/60">
          <p>© {new Date().getFullYear()} Elevate Her Pakistan. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <button onClick={() => onOpenLegal('guidelines')} className="hover:text-[#F7BAC7] transition-colors cursor-pointer">
              Community Guidelines
            </button>
            <span>·</span>
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-[#F7BAC7] transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span>·</span>
            <button onClick={() => onOpenLegal('terms')} className="hover:text-[#F7BAC7] transition-colors cursor-pointer">
              Terms of Use
            </button>
            <span>·</span>
            <button onClick={() => onOpenLegal('refunds')} className="hover:text-[#F7BAC7] transition-colors cursor-pointer">
              Event Refund & Cancellation Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
