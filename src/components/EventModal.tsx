import React, { useState } from 'react';
import { EventItem, Registration, City } from '../types';
import { useApp } from '../context/AppContext';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Check, 
  Share2, 
  Download, 
  AlertCircle,
  CheckCircle2,
  Ticket
} from 'lucide-react';

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const { registerForEvent, currentMember } = useApp();

  const [step, setStep] = useState<'details' | 'form' | 'ticket'>('details');
  const [fullName, setFullName] = useState(currentMember?.fullName || '');
  const [email, setEmail] = useState(currentMember?.email || '');
  const [phone, setPhone] = useState(currentMember?.phone || '');
  const [city, setCity] = useState<City>(event?.city || 'Karachi');
  const [profession, setProfession] = useState(currentMember?.profession || '');
  const [dietary, setDietary] = useState('');
  const [agreed, setAgreed] = useState(false);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [confirmedTicket, setConfirmedTicket] = useState<Registration | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!event) return null;

  const seatsLeft = Math.max(0, event.capacity - event.registeredCount);
  const isFull = seatsLeft === 0;

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg('Please complete all required fields (Full Name, Email, Phone).');
      return;
    }

    if (!agreed) {
      setErrorMsg('Please agree to the Elevate Her community guidelines and event attendance policy.');
      return;
    }

    const res = registerForEvent({
      eventId: event.id,
      eventTitle: event.title,
      eventDate: event.displayDate,
      eventVenue: `${event.venueName}, ${event.city}`,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      city,
      profession: profession.trim() || 'Community Member',
      dietaryRequirements: dietary.trim() || undefined
    });

    if (res.success && res.registration) {
      setConfirmedTicket(res.registration);
      setStep('ticket');
    } else {
      setErrorMsg(res.message);
    }
  };

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Elevate Her Pakistan//Events//EN
BEGIN:VEVENT
UID:${event.id}@elevateher.pk
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${event.date.replace(/-/g, '')}T060000Z
DTEND:${event.date.replace(/-/g, '')}T090000Z
SUMMARY:${event.title} - Elevate Her
DESCRIPTION:${event.tagline}. Venue: ${event.venueName}, ${event.venueAddress}
LOCATION:${event.venueName}, ${event.venueAddress}, ${event.city}, Pakistan
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${event.title.replace(/[^a-zA-Z0-9]/g, '_')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A1C1E]/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150">
      <div className="bg-[#FFFDFB] border border-[#EAD7C8] rounded-3xl w-full max-w-2xl my-8 overflow-hidden shadow-2xl relative text-[#2A1C1E] max-h-[90vh] flex flex-col">
        {/* Top Header Controls */}
        <div className="flex items-center justify-between p-4 px-6 border-b border-[#EAD7C8] bg-gradient-to-r from-[#FDF0F3] to-[#FADCE2]/60 shrink-0">
          <div className="flex items-center gap-2 text-xs text-[#2A1C1E]/80 font-bold">
            <span className="text-[#D94F70]">{event.category}</span>
            <span>·</span>
            <span>{event.city}</span>
            <span>·</span>
            <span className="font-bold text-[#2A1C1E]">
              {event.pricePKR === 0 ? 'Complimentary' : `Rs. ${event.pricePKR.toLocaleString()} PKR`}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#2A1C1E]/70 hover:text-[#D94F70] hover:bg-white rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6 flex-1">
          {step === 'details' && (
            <>
              {/* Event Title & Tagline */}
              <div>
                <h2 className="text-2xl md:text-3xl font-serif-luxury font-bold text-[#2A1C1E] leading-tight">
                  {event.title}
                </h2>
                <p className="text-sm text-[#D94F70] italic mt-1 font-serif-luxury font-medium">
                  {event.tagline}
                </p>
              </div>

              {/* Key Quick Facts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-[#FCFAF7] p-5 rounded-2xl border border-[#EAD7C8]">
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-[#D94F70] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#2A1C1E]/60 block font-medium">Date</span>
                    <span className="font-bold text-[#2A1C1E]">{event.displayDate}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#D94F70] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#2A1C1E]/60 block font-medium">Time (Pakistan Standard Time)</span>
                    <span className="font-bold text-[#2A1C1E]">{event.startTime} – {event.endTime}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D94F70] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#2A1C1E]/60 block font-medium">Location</span>
                    <span className="font-bold text-[#2A1C1E]">{event.venueName}</span>
                    <span className="text-[#2A1C1E]/70 block text-[11px]">{event.venueAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Users className="w-4 h-4 text-[#D94F70] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#2A1C1E]/60 block font-medium">Capacity Status</span>
                    <span className="font-bold">
                      {isFull ? (
                        <span className="text-[#D94F70]">Waitlist Only (Full)</span>
                      ) : (
                        <span className="text-[#4D7A52]">{seatsLeft} spots available of {event.capacity}</span>
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Long Description */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold tracking-wider uppercase text-[#D94F70]">
                  About This Gathering
                </h3>
                <p className="text-sm text-[#2A1C1E]/85 leading-relaxed whitespace-pre-line">
                  {event.longDescription}
                </p>
              </div>

              {/* Perks & What's Included */}
              {event.perks && event.perks.length > 0 && (
                <div className="space-y-3 bg-[#D8E6D5]/40 p-5 rounded-2xl border border-[#CDE0C9]">
                  <h3 className="text-xs font-bold tracking-wider uppercase text-[#4D7A52]">
                    What’s Included with Your Attendance
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    {event.perks.map((perk, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[#2A1C1E]/90 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#4D7A52] shrink-0" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Agenda Schedule */}
              {event.agenda && event.agenda.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-bold tracking-wider uppercase text-[#2A1C1E]/80">
                    Gathering Schedule
                  </h3>
                  <div className="space-y-2 border-l-2 border-[#F5B5C4] ml-2 pl-4">
                    {event.agenda.map((item, idx) => (
                      <div key={idx} className="text-xs">
                        <span className="font-bold text-[#D94F70] mr-2">{item.time}</span>
                        <span className="text-[#2A1C1E]/80">{item.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Speakers / Facilitators */}
              {event.speakers && event.speakers.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-bold tracking-wider uppercase text-[#2A1C1E]/80">
                    Facilitators & Speakers
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {event.speakers.map((spk, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-xl border border-[#EAD7C8] luxury-card-shadow">
                        <p className="font-bold text-sm text-[#2A1C1E]">{spk.name}</p>
                        <p className="text-xs text-[#D94F70] font-semibold">{spk.role}</p>
                        <p className="text-[11px] text-[#2A1C1E]/70 mt-1">{spk.bio}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Host & Community Note */}
              <div className="text-xs text-[#2A1C1E]/70 border-t border-[#EAD7C8] pt-4 flex items-center justify-between">
                <span>Hosted by <strong className="text-[#2A1C1E]">{event.hostName}</strong> ({event.hostRole})</span>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 text-[#D94F70] font-bold hover:underline cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
                </button>
              </div>
            </>
          )}

          {step === 'form' && (
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div>
                <h3 className="text-2xl font-serif-luxury font-bold text-[#2A1C1E]">
                  Attendee Registration
                </h3>
                <p className="text-xs text-[#2A1C1E]/70">
                  Reserving your pass for <strong className="text-[#D94F70]">{event.title}</strong>
                </p>
              </div>

              {errorMsg && (
                <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-bold text-[#2A1C1E] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Aimen Khan"
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
                    placeholder="aimen@example.com"
                    className="w-full bg-[#FCFAF7] border border-[#EAD7C8] rounded-xl p-3 text-xs text-[#2A1C1E] focus:outline-hidden focus:border-[#D94F70]"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#2A1C1E] mb-1">
                    WhatsApp / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+92 300 1234567"
                    className="w-full bg-[#FCFAF7] border border-[#EAD7C8] rounded-xl p-3 text-xs text-[#2A1C1E] focus:outline-hidden focus:border-[#D94F70]"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#2A1C1E] mb-1">
                    Your City *
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-bold text-[#2A1C1E] mb-1">
                    Profession / Area of Focus (Optional)
                  </label>
                  <input
                    type="text"
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    placeholder="e.g. Fintech PM, Creative Founder, Doctor"
                    className="w-full bg-[#FCFAF7] border border-[#EAD7C8] rounded-xl p-3 text-xs text-[#2A1C1E] focus:outline-hidden focus:border-[#D94F70]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#2A1C1E] mb-1">
                    Dietary Requirements (Optional)
                  </label>
                  <input
                    type="text"
                    value={dietary}
                    onChange={(e) => setDietary(e.target.value)}
                    placeholder="e.g. Vegetarian, Nut Allergy"
                    className="w-full bg-[#FCFAF7] border border-[#EAD7C8] rounded-xl p-3 text-xs text-[#2A1C1E] focus:outline-hidden focus:border-[#D94F70]"
                  />
                </div>
              </div>

              {/* Price summary */}
              <div className="p-4 bg-gradient-to-r from-[#FDF0F3] to-[#FADCE2]/60 border border-[#F5B5C4] rounded-2xl text-xs flex items-center justify-between">
                <div>
                  <span className="font-bold block text-[#2A1C1E]">
                    {event.pricePKR === 0 ? 'Complimentary Community Pass' : 'Standard Event Pass'}
                  </span>
                  <span className="text-[#2A1C1E]/70 font-medium">
                    Includes all sessions, materials, tea & refreshments
                  </span>
                </div>
                <span className="text-base font-bold text-[#D94F70]">
                  {event.pricePKR === 0 ? 'Free' : `Rs. ${event.pricePKR.toLocaleString()} PKR`}
                </span>
              </div>

              {/* Guidelines consent */}
              <label className="flex items-start gap-2.5 text-xs text-[#2A1C1E]/80 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 rounded border-[#EAD7C8] text-[#D94F70] focus:ring-[#D94F70]"
                />
                <span>
                  I agree to the Elevate Her Community Guidelines, embracing sisterhood, respect, and mutual confidentiality.
                </span>
              </label>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#EAD7C8]">
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="px-4 py-2.5 text-xs font-bold text-[#2A1C1E] hover:bg-[#FDF0F3] rounded-xl cursor-pointer"
                >
                  ← Back to Details
                </button>
                <button
                  type="submit"
                  className="px-7 py-3 text-xs font-bold text-white bg-gradient-to-r from-[#D94F70] to-[#B52F51] rounded-xl hover:from-[#B52F51] hover:to-[#9E2442] transition-all shadow-md cursor-pointer"
                >
                  {isFull ? 'Join Priority Waitlist' : 'Confirm Registration'}
                </button>
              </div>
            </form>
          )}

          {step === 'ticket' && confirmedTicket && (
            <div className="space-y-6 text-center py-2 animate-in zoom-in-95 duration-200">
              <div className="w-14 h-14 bg-[#D8E6D5] text-[#4D7A52] rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-serif-luxury font-bold text-[#2A1C1E]">
                  {confirmedTicket.status === 'Waitlisted' ? 'Added to Priority Waitlist' : 'You’re Registered!'}
                </h3>
                <p className="text-xs text-[#2A1C1E]/70 max-w-md mx-auto mt-1">
                  {confirmedTicket.status === 'Waitlisted'
                    ? 'We will notify you immediately if a seat opens up before the deadline.'
                    : 'We cannot wait to welcome you into this intentional circle of modern Pakistani working women.'}
                </p>
              </div>

              {/* Digital Pass Card */}
              <div className="bg-[#FCFAF7] border-2 border-dashed border-[#F5B5C4] rounded-3xl p-6 text-left max-w-md mx-auto shadow-sm space-y-4 relative">
                <div className="flex items-center justify-between border-b border-[#EAD7C8] pb-3">
                  <div>
                    <span className="text-[10px] tracking-wider uppercase text-[#D94F70] font-bold block">
                      Elevate Her · Digital Pass
                    </span>
                    <h4 className="font-serif-luxury font-bold text-lg text-[#2A1C1E] leading-snug">
                      {confirmedTicket.eventTitle}
                    </h4>
                  </div>
                  <Ticket className="w-6 h-6 text-[#D94F70]" />
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[#2A1C1E]/60 text-[10px] block font-medium">Attendee</span>
                    <span className="font-bold text-[#2A1C1E]">{confirmedTicket.fullName}</span>
                  </div>
                  <div>
                    <span className="text-[#2A1C1E]/60 text-[10px] block font-medium">Pass Code</span>
                    <span className="font-mono font-bold text-[#D94F70]">{confirmedTicket.ticketCode}</span>
                  </div>
                  <div>
                    <span className="text-[#2A1C1E]/60 text-[10px] block font-medium">Date</span>
                    <span className="font-bold text-[#2A1C1E]">{confirmedTicket.eventDate}</span>
                  </div>
                  <div>
                    <span className="text-[#2A1C1E]/60 text-[10px] block font-medium">Location</span>
                    <span className="font-bold text-[#2A1C1E] truncate block">{confirmedTicket.eventVenue}</span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#EAD7C8] text-[11px] text-[#2A1C1E]/80 text-center font-medium">
                  Present this digital pass or mention code <strong className="font-mono text-[#D94F70]">{confirmedTicket.ticketCode}</strong> at check-in.
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleDownloadCalendar}
                  className="px-5 py-2.5 text-xs font-bold text-[#2A1C1E] bg-white border border-[#EAD7C8] rounded-xl hover:bg-[#FDF0F3] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5 text-[#D94F70]" />
                  <span>Add to Calendar (.ICS)</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-7 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#D94F70] to-[#B52F51] rounded-xl hover:from-[#B52F51] hover:to-[#9E2442] transition-colors cursor-pointer shadow-xs"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Sticky CTA (when in details step) */}
        {step === 'details' && (
          <div className="p-4 px-6 md:px-8 border-t border-[#EAD7C8] bg-white shrink-0 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#2A1C1E]/65 block font-medium">
                {event.pricePKR === 0 ? 'Complimentary Admission' : 'Investment per seat'}
              </span>
              <span className="text-lg font-bold text-[#D94F70]">
                {event.pricePKR === 0 ? 'Free' : `Rs. ${event.pricePKR.toLocaleString()} PKR`}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setStep('form')}
                className={`px-7 py-3 text-xs font-bold text-white rounded-xl transition-all shadow-md cursor-pointer ${
                  isFull 
                    ? 'bg-[#B52F51] hover:bg-[#9E2442]' 
                    : 'bg-gradient-to-r from-[#D94F70] to-[#B52F51] hover:from-[#B52F51] hover:to-[#9E2442]'
                }`}
              >
                {isFull ? 'Join Waitlist' : 'Register Now'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
