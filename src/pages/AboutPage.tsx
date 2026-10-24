import React from 'react';
import { useApp } from '../context/AppContext';
import { Heart, Sparkles, Compass, Users, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { siteConfig, activeUrdu } = useApp();

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#FDF0F3] via-[#FADCE2]/40 to-[#FCFAF7] border-b border-[#EAD7C8] py-16 md:py-24 px-4 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-[#D94F70]">
            OUR STORY & PURPOSE
          </span>
          <h1 className="text-4xl md:text-5xl font-serif-luxury font-bold text-[#2A1C1E] leading-tight">
            Cultivating Sisterhood, Wellness & Growth in Pakistan
          </h1>
          {activeUrdu && (
            <p className="font-urdu text-2xl text-[#9E2442] leading-relaxed">
              خواتین کے لیے ایک بااعتماد، بامقصد اور محبت بھرا پلیٹ فارم
            </p>
          )}
          <p className="text-base text-[#2A1C1E]/80 max-w-xl mx-auto leading-relaxed">
            Elevate Her was founded with a singular conviction: when modern Pakistani working women have a safe, inspiring space to connect authentically, their collective potential is limitless.
          </p>
        </div>
      </section>

      {/* 2. Our Story & Why We Exist */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D94F70]">
              THE GENESIS
            </span>
            <h2 className="text-3xl md:text-4xl font-serif-luxury font-bold text-[#2A1C1E] leading-tight">
              Why Elevate Her Exists
            </h2>
            <p className="text-sm text-[#2A1C1E]/80 leading-relaxed">
              In Pakistan’s bustling financial and cultural hubs—especially Karachi, Lahore, and Islamabad—women are achieving remarkable professional milestones, heading tech teams, launching creative studios, and leading corporate transformations.
            </p>
            <p className="text-sm text-[#2A1C1E]/80 leading-relaxed">
              Yet despite social media connectivity, many working women experience an underlying loneliness. Standard corporate networking often feels transactional and cold. Finding fellow ambitious women who prioritize emotional well-being and mutual mentorship is rare.
            </p>
            <p className="text-sm text-[#2A1C1E]/80 leading-relaxed">
              Elevate Her was born to bridge this exact gap: creating warm, curated, pressure-free gatherings where you can show up as your full, multifaceted self—unapologetically ambitious, deeply grounded, and eager to learn.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 border border-[#EAD7C8] luxury-card-shadow space-y-6">
              <h3 className="text-xl font-serif-luxury font-bold text-[#2A1C1E] border-b border-[#EAD7C8] pb-3">
                Mission & Vision
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#D94F70] mb-1">
                    Our Mission
                  </h4>
                  <p className="text-sm text-[#2A1C1E]/80 leading-relaxed">
                    {siteConfig.mission}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#4D7A52] mb-1">
                    Our Vision
                  </h4>
                  <p className="text-sm text-[#2A1C1E]/80 leading-relaxed">
                    A Pakistan where every woman has an uplifting network of peers, mentors, and wellness resources to navigate life transitions with grace, financial autonomy, and joyful confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="bg-gradient-to-r from-[#FCFAF7] via-[#FDF0F3] to-[#FCFAF7] py-20 border-y border-[#EAD7C8]">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D94F70]">
              OUR PILLARS OF INTEGRITY
            </span>
            <h2 className="text-3xl md:text-4xl font-serif-luxury font-bold text-[#2A1C1E]">
              The Core Values We Uphold
            </h2>
            <p className="text-sm text-[#2A1C1E]/70">
              These principles guide our community culture, partnerships, and event curation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-7 rounded-3xl border border-[#EAD7C8] luxury-card-shadow space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FDF0F3] border border-[#F5B5C4] flex items-center justify-center text-[#D94F70]">
                <Heart className="w-6 h-6 fill-[#FDF0F3]" />
              </div>
              <h3 className="font-serif-luxury font-bold text-lg text-[#2A1C1E]">
                Authentic Sisterhood
              </h3>
              <p className="text-xs text-[#2A1C1E]/80 leading-relaxed">
                We replace competition with collaboration. We applaud each other's successes and hold compassionate space during challenges.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#EAD7C8] luxury-card-shadow space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F2F7F1] border border-[#CDE0C9] flex items-center justify-center text-[#4D7A52]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury font-bold text-lg text-[#2A1C1E]">
                Whole-Woman Wellness
              </h3>
              <p className="text-xs text-[#2A1C1E]/80 leading-relaxed">
                True success includes rest, mental peace, and physical health. We reject burnout culture and champion sustainable self-care.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#EAD7C8] luxury-card-shadow space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F5EFF9] border border-[#E0D0EB] flex items-center justify-center text-[#8E58A6]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury font-bold text-lg text-[#2A1C1E]">
                Lifelong Learning
              </h3>
              <p className="text-xs text-[#2A1C1E]/80 leading-relaxed">
                From financial sovereignty to creative crafts, we cultivate curiosity and practical skills that empower women in their daily lives.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#EAD7C8] luxury-card-shadow space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FDF0F3] border border-[#F5B5C4] flex items-center justify-center text-[#D94F70]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury font-bold text-lg text-[#2A1C1E]">
                Cultural Relatability
              </h3>
              <p className="text-xs text-[#2A1C1E]/80 leading-relaxed">
                We celebrate our Pakistani heritage, modest fashion traditions, family values, and modern aspirations without contradiction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Founder's Note - Karachi Women Summit Photo */}
      <section className="bg-white py-20 border-y border-[#EAD7C8]">
        <div className="max-w-5xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5">
            <div className="rounded-3xl overflow-hidden border-2 border-[#EAD7C8] shadow-lg aspect-3/4 relative bg-[#FDF0F3]">
              <img
                src="/src/assets/images/karachi_women_summit_1792856475136.jpg"
                alt={siteConfig.founderName}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D94F70]">
              A MESSAGE FROM THE FOUNDER
            </span>
            <h2 className="text-3xl font-serif-luxury font-bold text-[#2A1C1E]">
              {siteConfig.founderName}
            </h2>
            <p className="text-xs text-[#D94F70] font-bold uppercase tracking-wider">
              {siteConfig.founderRole} · Karachi & Lahore
            </p>
            <p className="text-sm text-[#2A1C1E]/80 leading-relaxed italic font-serif-luxury">
              "{siteConfig.founderBio}"
            </p>
            <p className="text-xs text-[#2A1C1E]/75 leading-relaxed">
              "When I hosted our first circle with six women in a coffee shop in Karachi, I realized how deeply we all craved a space free from pretension. Elevate Her is my love letter to Pakistani working women: you do not have to carry the world on your shoulders alone. We are here, and we rise together."
            </p>
          </div>
        </div>
      </section>

      {/* 5. CTA to Join */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-serif-luxury font-bold text-[#2A1C1E]">
          Your Place in Our Circle Awaits
        </h2>
        <p className="text-sm text-[#2A1C1E]/80 max-w-lg mx-auto">
          Whether you join our newsletter, attend your first Karachi brunch, or participate in a virtual workshop, we would love to welcome you.
        </p>
        <button
          onClick={() => onNavigate('community')}
          className="px-8 py-3.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#D94F70] to-[#B52F51] rounded-xl hover:from-[#B52F51] hover:to-[#9E2442] transition-all shadow-[0_6px_20px_rgba(217,79,112,0.35)] cursor-pointer inline-flex items-center gap-2"
        >
          <span>Join Elevate Her</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
