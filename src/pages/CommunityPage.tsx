import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { City } from '../types';
import { 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Lock, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';

interface CommunityPageProps {
  onNavigateToEvents: () => void;
  onOpenMemberModal: () => void;
}

export const CommunityPage: React.FC<CommunityPageProps> = ({ 
  onNavigateToEvents, 
  onOpenMemberModal 
}) => {
  const { currentMember, joinCommunity } = useApp();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState<City>('Karachi');
  const [profession, setProfession] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    'Networking & Brunches',
    'Wellness & Mindfulness'
  ]);
  const [agreedGuidelines, setAgreedGuidelines] = useState(false);
  const [agreedPrivacy, setAgreedPrivacy] = useState(false);
  const [newsletterOptIn, setNewsletterOptIn] = useState(true);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [justJoined, setJustJoined] = useState(false);

  const interestOptions = [
    'Networking & Brunches',
    'Wellness & Mindfulness',
    'Career & Leadership Growth',
    'Financial Literacy for Women',
    'Creative Writing & Book Club',
    'Entrepreneurship & Startups'
  ];

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(prev => prev.filter(i => i !== interest));
    } else {
      setSelectedInterests(prev => [...prev, interest]);
    }
  };

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!fullName.trim() || !email.trim()) {
      setErrorMsg('Please enter your full name and valid email address.');
      return;
    }

    if (!agreedGuidelines) {
      setErrorMsg('Please agree to the Elevate Her Community Guidelines.');
      return;
    }

    if (!agreedPrivacy) {
      setErrorMsg('Please acknowledge our Privacy Policy.');
      return;
    }

    const res = joinCommunity({
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      city,
      profession: profession.trim() || undefined,
      interests: selectedInterests,
      newsletterOptIn
    });

    if (res.success) {
      setJustJoined(true);
    }
  };

  return (
    <div className="space-y-20 pb-24">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#FDF0F3] via-[#FADCE2]/40 to-[#FCFAF7] border-b border-[#EAD7C8] py-16 md:py-20 px-4 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-[#D94F70]">
            JOIN ELEVATE HER
          </span>
          <h1 className="text-4xl md:text-5xl font-serif-luxury font-bold text-[#2A1C1E]">
            A Digital & In-Person Sisterhood
          </h1>
          <p className="text-base text-[#2A1C1E]/80 leading-relaxed">
            Membership is your invitation to connect with modern Pakistani working women, attend curated gatherings in Karachi, Lahore, and Islamabad, and receive thoughtful wellness tools.
          </p>
        </div>
      </section>

      {/* 2. Membership Value & Benefits */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-[#EAD7C8] luxury-card-shadow luxury-card-hover space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FDF0F3] border border-[#F5B5C4] flex items-center justify-center text-[#D94F70] shadow-xs">
              <Heart className="w-6 h-6 fill-[#FDF0F3]" />
            </div>
            <h3 className="font-serif-luxury font-bold text-xl text-[#2A1C1E]">
              Intimate In-Person Circles
            </h3>
            <p className="text-xs text-[#2A1C1E]/80 leading-relaxed">
              Priority invitations to signature Sisterhood Brunches in Clifton Karachi, Gulberg Lahore, and Islamabad, with no awkward transactional posturing.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#EAD7C8] luxury-card-shadow luxury-card-hover space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#F2F7F1] border border-[#CDE0C9] flex items-center justify-center text-[#4D7A52] shadow-xs">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury font-bold text-xl text-[#2A1C1E]">
              Curated Wellness Library
            </h3>
            <p className="text-xs text-[#2A1C1E]/80 leading-relaxed">
              Full access to downloadable worksheets, evening journaling cadences, personal finance templates, and habit trackers designed for modern life in Pakistan.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#EAD7C8] luxury-card-shadow luxury-card-hover space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#F5EFF9] border border-[#E0D0EB] flex items-center justify-center text-[#8E58A6] shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif-luxury font-bold text-xl text-[#2A1C1E]">
              Safe & Private Space
            </h3>
            <p className="text-xs text-[#2A1C1E]/80 leading-relaxed">
              We hold strict zero-gossip, zero-competition values. Your personal details and conversations are kept safe, respected, and confidential.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Registration Form or Active Member Card */}
      <section className="max-w-3xl mx-auto px-4 lg:px-8">
        {currentMember || justJoined ? (
          <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-[#F5B5C4] luxury-card-shadow text-center space-y-6">
            <div className="w-16 h-16 bg-[#D8E6D5] text-[#4D7A52] rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-[#D94F70]">
                COMMUNITY MEMBER
              </span>
              <h2 className="text-3xl font-serif-luxury font-bold text-[#2A1C1E]">
                Welcome to Elevate Her, {currentMember?.fullName || fullName}!
              </h2>
              <p className="text-xs sm:text-sm text-[#2A1C1E]/80 max-w-md mx-auto leading-relaxed">
                You are officially part of our sisterhood. Explore upcoming gatherings in Karachi and nationwide, download your reflection guides, or view your digital passes.
              </p>
            </div>

            <div className="bg-[#FCFAF7] p-5 rounded-2xl border border-[#EAD7C8] max-w-md mx-auto text-left text-xs space-y-1.5 font-medium">
              <p><span className="text-[#2A1C1E]/60">Member Name:</span> <strong className="text-[#2A1C1E]">{currentMember?.fullName || fullName}</strong></p>
              <p><span className="text-[#2A1C1E]/60">Primary Chapter:</span> <strong className="text-[#D94F70]">{currentMember?.city || city}</strong></p>
              <p><span className="text-[#2A1C1E]/60">Registered Email:</span> <strong className="text-[#2A1C1E]">{currentMember?.email || email}</strong></p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={onOpenMemberModal}
                className="px-7 py-3 text-xs font-bold text-white bg-gradient-to-r from-[#D94F70] to-[#B52F51] rounded-xl hover:from-[#B52F51] hover:to-[#9E2442] shadow-md cursor-pointer"
              >
                Open My Member Space
              </button>
              <button
                onClick={onNavigateToEvents}
                className="px-6 py-3 text-xs font-bold text-[#2A1C1E] bg-white border border-[#EAD7C8] rounded-xl hover:bg-[#FDF0F3] transition-colors cursor-pointer"
              >
                View Upcoming Meetups
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#EAD7C8] luxury-card-shadow space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-[#D94F70]">
                MEMBERSHIP APPLICATION
              </span>
              <h2 className="text-3xl font-serif-luxury font-bold text-[#2A1C1E]">
                Join Our Community Circle
              </h2>
              <p className="text-xs sm:text-sm text-[#2A1C1E]/70 max-w-md mx-auto leading-relaxed">
                Standard community membership is complimentary. Please share a little about yourself so we can connect you with local circles in your city.
              </p>
            </div>

            {errorMsg && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleJoinSubmit} className="space-y-6 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#2A1C1E] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Zara Qureshi"
                    className="w-full bg-[#FCFAF7] border border-[#EAD7C8] rounded-xl p-3 text-xs text-[#2A1C1E] focus:outline-hidden focus:border-[#D94F70]"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#2A1C1E] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="zara@example.com"
                    className="w-full bg-[#FCFAF7] border border-[#EAD7C8] rounded-xl p-3 text-xs text-[#2A1C1E] focus:outline-hidden focus:border-[#D94F70]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-[#2A1C1E] mb-1">
                    Your Primary City in Pakistan *
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value as City)}
                    className="w-full bg-[#FCFAF7] border border-[#EAD7C8] rounded-xl p-3 text-xs text-[#2A1C1E] focus:outline-hidden focus:border-[#D94F70]"
                  >
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Online">Online / Other City</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#2A1C1E] mb-1">
                    WhatsApp Number (Optional, for circle invitations)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+92 300 0000000"
                    className="w-full bg-[#FCFAF7] border border-[#EAD7C8] rounded-xl p-3 text-xs text-[#2A1C1E] focus:outline-hidden focus:border-[#D94F70]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#2A1C1E] mb-1">
                  Profession or Current Life Focus (Optional)
                </label>
                <input
                  type="text"
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  placeholder="e.g. Fintech Lead, Product Designer, Founder, Doctor"
                  className="w-full bg-[#FCFAF7] border border-[#EAD7C8] rounded-xl p-3 text-xs text-[#2A1C1E] focus:outline-hidden focus:border-[#D94F70]"
                />
              </div>

              {/* Interests multi-select buttons */}
              <div className="space-y-2">
                <label className="block font-bold text-[#2A1C1E]">
                  What areas are you most excited to explore? (Select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {interestOptions.map(opt => {
                    const active = selectedInterests.includes(opt);
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => toggleInterest(opt)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                          active
                            ? 'bg-[#FDF0F3] border-[#F5B5C4] text-[#D94F70] shadow-xs'
                            : 'bg-white border-[#EAD7C8] text-[#2A1C1E]/75 hover:border-[#D94F70]/50'
                        }`}
                      >
                        {active && <Check className="w-3.5 h-3.5 text-[#D94F70]" />}
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Consents */}
              <div className="space-y-3 pt-2 border-t border-[#EAD7C8]">
                <label className="flex items-start gap-2.5 text-[#2A1C1E]/80 cursor-pointer font-medium">
                  <input
                    type="checkbox"
                    checked={agreedGuidelines}
                    onChange={(e) => setAgreedGuidelines(e.target.checked)}
                    className="mt-0.5 rounded border-[#EAD7C8] text-[#D94F70] focus:ring-[#D94F70]"
                    required
                  />
                  <span>
                    I agree to the <strong className="text-[#2A1C1E]">Elevate Her Community Guidelines</strong>, committing to cultivate a safe, respectful, and confidential space for all sisters. *
                  </span>
                </label>

                <label className="flex items-start gap-2.5 text-[#2A1C1E]/80 cursor-pointer font-medium">
                  <input
                    type="checkbox"
                    checked={agreedPrivacy}
                    onChange={(e) => setAgreedPrivacy(e.target.checked)}
                    className="mt-0.5 rounded border-[#EAD7C8] text-[#D94F70] focus:ring-[#D94F70]"
                    required
                  />
                  <span>
                    I acknowledge that my personal information will remain private and never be published or shared without permission. *
                  </span>
                </label>

                <label className="flex items-start gap-2.5 text-[#2A1C1E]/80 cursor-pointer font-medium">
                  <input
                    type="checkbox"
                    checked={newsletterOptIn}
                    onChange={(e) => setNewsletterOptIn(e.target.checked)}
                    className="mt-0.5 rounded border-[#EAD7C8] text-[#D94F70] focus:ring-[#D94F70]"
                  />
                  <span>
                    Send me thoughtful wellness reflections and invitations to upcoming city meetups. (Optional)
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#D94F70] to-[#B52F51] rounded-xl hover:from-[#B52F51] hover:to-[#9E2442] transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Submit Membership Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </section>

      {/* 4. Privacy Guarantee */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-xs text-[#2A1C1E]/70 font-medium">
          <Lock className="w-4 h-4 text-[#D94F70]" />
          <span>Personal data is strictly confidential. No commercial directory publishing without explicit consent.</span>
        </div>
      </section>
    </div>
  );
};
