import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Calendar, MapPin, User, LogOut, CheckCircle2 } from 'lucide-react';

interface MemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToEvents: () => void;
}

export const MemberModal: React.FC<MemberModalProps> = ({ isOpen, onClose, onNavigateToEvents }) => {
  const { currentMember, logoutMember, registrations, cancelRegistration } = useApp();

  if (!isOpen) return null;

  const confirmedPasses = registrations.filter(r => r.status === 'Confirmed');
  const waitlistedPasses = registrations.filter(r => r.status === 'Waitlisted');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A1C1E]/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150">
      <div className="bg-[#FFFDFB] border border-[#EAD7C8] rounded-3xl w-full max-w-xl my-8 overflow-hidden shadow-2xl relative text-[#2A1C1E] max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 px-6 border-b border-[#EAD7C8] bg-gradient-to-r from-[#FDF0F3] to-[#FADCE2]/60 shrink-0">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-[#D94F70]" />
            <h3 className="font-serif-luxury font-bold text-base text-[#2A1C1E]">
              Member Portal & Passes
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#2A1C1E]/70 hover:text-[#D94F70] hover:bg-white rounded-full transition-colors cursor-pointer"
            aria-label="Close portal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6 flex-1">
          {/* Member Profile Snapshot */}
          {currentMember ? (
            <div className="bg-white p-5 rounded-2xl border border-[#EAD7C8] luxury-card-shadow flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#D94F70]">
                  Elevate Her Community Member
                </span>
                <h4 className="text-xl font-serif-luxury font-bold text-[#2A1C1E]">
                  {currentMember.fullName}
                </h4>
                <p className="text-xs text-[#2A1C1E]/70 font-medium">
                  {currentMember.city} · {currentMember.profession || 'Community Sister'}
                </p>
                <p className="text-[11px] text-[#2A1C1E]/50 mt-1">
                  Member since {currentMember.joinedDate}
                </p>
              </div>

              <button
                onClick={logoutMember}
                className="text-xs text-[#2A1C1E]/70 hover:text-red-600 flex items-center gap-1 cursor-pointer p-2 rounded-xl hover:bg-[#FDF0F3]"
                title="Switch Member"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            </div>
          ) : (
            <div className="bg-[#FDF0F3] p-5 rounded-2xl border border-[#F5B5C4] text-xs space-y-2">
              <p className="font-bold text-[#2A1C1E]">Welcome to Elevate Her</p>
              <p className="text-[#2A1C1E]/80 leading-relaxed font-medium">
                You can register for any gathering or join our community directory to save your passes and receive personalized invitations.
              </p>
            </div>
          )}

          {/* Active Event Passes */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A1C1E]">
                Your Registered Passes ({confirmedPasses.length})
              </h4>
              {confirmedPasses.length === 0 && (
                <button
                  onClick={() => { onClose(); onNavigateToEvents(); }}
                  className="text-xs text-[#D94F70] font-bold hover:underline cursor-pointer"
                >
                  Browse upcoming gatherings →
                </button>
              )}
            </div>

            {confirmedPasses.length === 0 ? (
              <div className="bg-[#FCFAF7] p-8 rounded-2xl border border-[#EAD7C8] text-center text-xs text-[#2A1C1E]/70">
                You currently have no confirmed event registrations.
              </div>
            ) : (
              <div className="space-y-3">
                {confirmedPasses.map(pass => (
                  <div key={pass.id} className="bg-white p-5 rounded-2xl border border-[#EAD7C8] luxury-card-shadow space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-serif-luxury font-bold text-base text-[#2A1C1E]">
                          {pass.eventTitle}
                        </span>
                        <p className="text-xs text-[#2A1C1E]/70 flex items-center gap-1.5 mt-0.5">
                          <Calendar className="w-3.5 h-3.5 text-[#D94F70]" />
                          <span>{pass.eventDate}</span>
                        </p>
                        <p className="text-xs text-[#2A1C1E]/70 flex items-center gap-1.5 mt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-[#D94F70]" />
                          <span>{pass.eventVenue}</span>
                        </p>
                      </div>
                      <span className="font-mono text-xs font-bold bg-[#FDF0F3] text-[#D94F70] border border-[#F5B5C4] px-3 py-1 rounded-lg">
                        {pass.ticketCode}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#EAD7C8]/60 text-xs font-medium">
                      <span className="text-[#4D7A52] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Confirmed
                      </span>
                      <button
                        onClick={() => cancelRegistration(pass.id)}
                        className="text-xs text-[#2A1C1E]/60 hover:text-red-600 underline cursor-pointer"
                      >
                        Cancel Reservation
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Waitlisted Section */}
          {waitlistedPasses.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A1C1E]">
                Priority Waitlist ({waitlistedPasses.length})
              </h4>
              <div className="space-y-2">
                {waitlistedPasses.map(pass => (
                  <div key={pass.id} className="bg-[#F5E5D3]/30 p-3.5 rounded-xl border border-[#EAD7C8] text-xs flex items-center justify-between font-medium">
                    <div>
                      <p className="font-bold text-[#2A1C1E]">{pass.eventTitle}</p>
                      <p className="text-[11px] text-[#2A1C1E]/70">{pass.eventDate}</p>
                    </div>
                    <span className="text-[11px] text-[#D94F70] font-bold">Waitlisted</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-[#EAD7C8] bg-[#FDF0F3]/40 shrink-0 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#D94F70] to-[#B52F51] rounded-xl hover:from-[#B52F51] hover:to-[#9E2442] cursor-pointer shadow-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
