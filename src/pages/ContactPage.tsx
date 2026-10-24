import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { City, ContactInquiry } from '../types';
import { MapPin, CheckCircle2, ChevronDown, ChevronUp, AlertCircle, ArrowRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { siteConfig, submitContactInquiry } = useApp();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState<City>('Karachi');
  const [inquiryType, setInquiryType] = useState<ContactInquiry['inquiryType']>('General Question');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the format of Elevate Her gatherings in Karachi & Lahore?',
      a: 'We host small-to-medium intimate gatherings (typically 18 to 35 women) in beautiful, private verandas, studios, and cafe patios across Karachi (Clifton & DHA), Lahore, and Islamabad. Every event includes structured conversational prompts, personal reflection time, and artisanal refreshments so that no one feels awkward or excluded.'
    },
    {
      q: 'Do I have to pay a membership fee to join Elevate Her?',
      a: 'No. Community membership is complimentary! You can join our directory and receive all newsletters and community worksheets for free. In-person events and brunches carry a ticket cost in PKR simply to cover venue hire, artisanal food/tea, and printed materials.'
    },
    {
      q: 'What should I wear to an Elevate Her gathering?',
      a: 'Wear whatever makes you feel confident and comfortable! Our members wear a beautiful mix of elegant shalwar kameez, pastel Pakistani pret, stylish modest wear with hijabs, and contemporary fusion outfits. We celebrate all expressions of personal elegance.'
    },
    {
      q: 'Can I attend alone if I do not know anyone?',
      a: 'Absolutely! Over 80% of our attendees come solo. Our team and volunteer ambassadors greet you warmly at the entrance and introduce you to small groups so you immediately feel like part of the family.'
    },
    {
      q: 'How can a female-led brand or venue in Karachi collaborate with Elevate Her?',
      a: 'We love supporting Pakistani female artisans, boutique cafes, ethical fashion labels, and wellness brands. Simply select "Partnership & Collaboration" in the contact form, and our partnerships lead will reach out to schedule a conversation.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, and Message).');
      return;
    }

    submitContactInquiry({
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      city,
      inquiryType,
      message: message.trim()
    });

    setSubmitted(true);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="space-y-20 pb-24">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#FDF0F3] via-[#FADCE2]/40 to-[#FCFAF7] border-b border-[#EAD7C8] py-16 px-4 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-[#D94F70]">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl md:text-5xl font-serif-luxury font-bold text-[#2A1C1E]">
            Contact & Collaborations
          </h1>
          <p className="text-sm text-[#2A1C1E]/80 leading-relaxed">
            Have questions about an upcoming meetup in Karachi, want to propose a workshop partnership, or host our circle at your venue? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* 2. Contact Form & Hubs */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 border border-[#EAD7C8] luxury-card-shadow space-y-6">
            <div>
              <h2 className="text-2xl font-serif-luxury font-bold text-[#2A1C1E]">
                Send Us a Message
              </h2>
              <p className="text-xs text-[#2A1C1E]/70 font-medium">
                Our team responds to all inquiries within 24 to 48 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#D8E6D5]/40 border-2 border-[#CDE0C9] p-8 rounded-3xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#4D7A52] mx-auto" />
                <h3 className="font-serif-luxury font-bold text-2xl text-[#2A1C1E]">
                  Message Received with Gratitude!
                </h3>
                <p className="text-xs text-[#2A1C1E]/80 leading-relaxed max-w-sm mx-auto">
                  Thank you for reaching out. We have received your inquiry and our team will be in touch soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#D94F70] font-bold underline cursor-pointer pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {errorMsg && (
                  <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#2A1C1E] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Maham Tariq"
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
                      placeholder="maham@example.com"
                      className="w-full bg-[#FCFAF7] border border-[#EAD7C8] rounded-xl p-3 text-xs text-[#2A1C1E] focus:outline-hidden focus:border-[#D94F70]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#2A1C1E] mb-1">
                      Your City
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
                      <option value="Online">Online / Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-[#2A1C1E] mb-1">
                      Inquiry Category *
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value as ContactInquiry['inquiryType'])}
                      className="w-full bg-[#FCFAF7] border border-[#EAD7C8] rounded-xl p-3 text-xs text-[#2A1C1E] focus:outline-hidden focus:border-[#D94F70]"
                    >
                      <option value="General Question">General Question</option>
                      <option value="Partnership & Collaboration">Partnership & Brand Collaboration</option>
                      <option value="Speaker Application">Speaker / Facilitator Application</option>
                      <option value="Venue Host">Venue Host & Space Offering</option>
                      <option value="Press & Media">Press & Media</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#2A1C1E] mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you have in mind..."
                    className="w-full bg-[#FCFAF7] border border-[#EAD7C8] rounded-xl p-3 text-xs text-[#2A1C1E] focus:outline-hidden focus:border-[#D94F70]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-[#D94F70] to-[#B52F51] rounded-xl hover:from-[#B52F51] hover:to-[#9E2442] transition-all shadow-md cursor-pointer flex items-center gap-2"
                >
                  <span>Send Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Official Details & City Hubs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-[#EAD7C8] luxury-card-shadow space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#D94F70]">
                COMMUNITY HUBS
              </span>
              <h3 className="font-serif-luxury font-bold text-2xl text-[#2A1C1E]">
                Connecting Across Pakistan
              </h3>
              <p className="text-xs text-[#2A1C1E]/80 leading-relaxed font-medium">
                We convene regular sisterhood gatherings across key cities:
              </p>

              <div className="space-y-3.5 pt-2 text-xs">
                <div className="flex items-start gap-3 bg-[#FDF0F3] p-3 rounded-xl border border-[#F5B5C4]/60">
                  <MapPin className="w-4 h-4 text-[#D94F70] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#2A1C1E] font-bold">Karachi Chapter (Primary Hub)</strong>
                    <span className="text-[#2A1C1E]/75">Clifton Block 4 & DHA Phase 6 Wellness Verandas</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#FCFAF7] p-3 rounded-xl border border-[#EAD7C8]">
                  <MapPin className="w-4 h-4 text-[#4D7A52] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#2A1C1E] font-bold">Lahore Chapter</strong>
                    <span className="text-[#2A1C1E]/75">Gulberg III & DHA Phase 5 Gathering Spaces</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#FCFAF7] p-3 rounded-xl border border-[#EAD7C8]">
                  <MapPin className="w-4 h-4 text-[#8E58A6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#2A1C1E] font-bold">Islamabad Chapter</strong>
                    <span className="text-[#2A1C1E]/75">Sector F-7 & Serena Executive Lounges</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAD7C8] text-xs text-[#2A1C1E]/80 space-y-1 font-medium">
                <p><strong>Official Email:</strong> {siteConfig.officialEmail}</p>
                <p><strong>Instagram:</strong> {siteConfig.instagramHandle}</p>
                <p><strong>Standard Time:</strong> {siteConfig.defaultTimezone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D94F70]">
            COMMON QUESTIONS
          </span>
          <h2 className="text-3xl font-serif-luxury font-bold text-[#2A1C1E]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-[#2A1C1E]/70 font-medium">
            Everything you need to know about joining circles and attending meetups.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-[#EAD7C8] overflow-hidden transition-all luxury-card-shadow"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-[#2A1C1E] hover:bg-[#FDF0F3]/50 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#D94F70]" /> : <ChevronDown className="w-4 h-4 text-[#2A1C1E]/60" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-[#2A1C1E]/80 leading-relaxed border-t border-[#EAD7C8]/60 pt-3.5 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
