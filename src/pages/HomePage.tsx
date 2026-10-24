import React from 'react';
import { useApp } from '../context/AppContext';
import { EventItem } from '../types';
import { 
  ArrowRight, 
  MapPin, 
  Heart, 
  BookOpen, 
  Compass, 
  Quote,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onSelectEvent: (event: EventItem) => void;
  onOpenResource: (resourceId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onNavigate, 
  onSelectEvent 
}) => {
  const { events, blogPosts, testimonials, activeUrdu } = useApp();

  const featuredEvents = events.slice(0, 3);
  const recentArticles = blogPosts.slice(0, 3);
  const approvedTestimonials = testimonials.filter(t => t.approved);

  return (
    <div className="space-y-24 pb-24">
      {/* 1. Hero Section - Vibrant Soft Luxury Editorial */}
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-16 md:pb-24 px-4 lg:px-8 border-b border-[#EAD7C8] bg-gradient-to-b from-[#FFFDFB] via-[#FDF3F5]/60 to-[#FCFAF7]">
        {/* Luminous Glowing Color Orbs */}
        <div className="absolute top-0 right-10 w-[30rem] h-[30rem] bg-gradient-to-br from-[#F7BAC7]/40 via-[#FADCE2]/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-5 w-[26rem] h-[26rem] bg-gradient-to-tr from-[#D8E6D5]/50 via-[#E8DCF0]/30 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-[#F5E5D3]/40 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#FDF0F3] border border-[#F5B5C4] px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#D94F70] animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-[#B52F51]">
                A COMMUNITY FOR WOMEN IN PAKISTAN
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-[#2A1C1E] leading-[1.12] tracking-tight">
              Where Women Connect, Grow & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D94F70] via-[#C93F62] to-[#B52F51]">Rise Together.</span>
            </h1>

            {activeUrdu && (
              <p className="font-urdu text-2xl md:text-3xl text-[#9E2442] leading-relaxed pt-1">
                جہاں خواتین باہم جڑتی ہیں، سیکھتی ہیں اور اعتماد کے ساتھ آگے بڑھتی ہیں۔
              </p>
            )}

            <p className="text-base sm:text-lg text-[#2A1C1E]/80 font-normal leading-relaxed max-w-xl">
              Elevate Her is a women's community creating meaningful connections, inspiring experiences, and opportunities for Pakistani women to learn, grow, and thrive together.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('community')}
                className="px-7 py-3.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#D94F70] via-[#C93F62] to-[#B52F51] rounded-xl hover:from-[#B52F51] hover:to-[#9E2442] transition-all shadow-[0_6px_22px_rgba(217,79,112,0.35)] hover:shadow-[0_8px_28px_rgba(217,79,112,0.5)] cursor-pointer flex items-center gap-2"
              >
                <span>Join Our Community</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('events')}
                className="px-6 py-3.5 text-xs sm:text-sm font-bold text-[#2A1C1E] bg-white border border-[#EAD7C8] rounded-xl hover:bg-[#FDF0F3] hover:border-[#D94F70]/50 transition-all shadow-xs cursor-pointer"
              >
                Explore Upcoming Events
              </button>
            </div>

            {/* Cultural Footnote */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#2A1C1E]/75 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D94F70]" />
                <span>Karachi · Lahore · Islamabad Chapters</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4D7A52]" />
                <span>Modern Working Women & Founders</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Editorial Frame - Authentic Pakistani Modern Working Women in Karachi */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#F5B5C4]/70 bg-gradient-to-br from-[#FDF0F3] to-[#F5E5D3] shadow-[0_20px_50px_rgba(217,79,112,0.18)] aspect-4/5 flex flex-col justify-end p-8 group">
              {/* Generated Real Image of Pakistani Modern Working Women in Karachi */}
              <img
                src="/src/assets/images/karachi_women_hero_1792856473621.jpg"
                alt="Modern Pakistani working women connecting over coffee and laptops in an upscale Karachi cafe patio"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Warm Rose Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1C1E]/90 via-[#2A1C1E]/35 to-transparent" />

              {/* Editorial Caption Box */}
              <div className="relative z-10 text-[#FCFAF7] space-y-2">
                <div className="inline-block bg-[#D94F70]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] tracking-widest uppercase text-white font-bold">
                  Karachi Sisterhood Series
                </div>
                <p className="font-serif-luxury text-xl sm:text-2xl font-bold leading-snug">
                  "Where modern ambition meets sincere sisterhood and lifelong support."
                </p>
                <div className="text-xs text-[#F5E5D3] flex items-center gap-2 pt-1 font-medium">
                  <span>Working Women Circle</span>
                  <span>·</span>
                  <span>Clifton, Karachi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Three Pillars: CONNECT, LEARN, GROW */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D94F70]">
            THE FOUNDATION OF ELEVATE HER
          </span>
          <h2 className="text-3xl md:text-4xl font-serif-luxury font-bold text-[#2A1C1E]">
            Our Three Pillars
          </h2>
          <p className="text-sm text-[#2A1C1E]/70">
            Every gathering, workshop, and conversation is anchored in these principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CONNECT */}
          <div className="bg-white rounded-3xl p-8 border border-[#EAD7C8] luxury-card-shadow luxury-card-hover space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FADCE2]/40 rounded-full blur-2xl group-hover:bg-[#FADCE2]/70 transition-all pointer-events-none" />
            <div className="w-13 h-13 rounded-2xl bg-[#FDF0F3] border border-[#F5B5C4] flex items-center justify-center text-[#D94F70] shadow-xs">
              <Heart className="w-6 h-6 fill-[#FDF0F3]" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-widest font-bold text-[#D94F70] block mb-1">
                01. PILLAR
              </span>
              <h3 className="text-2xl font-serif-luxury font-bold text-[#2A1C1E]">
                CONNECT
              </h3>
            </div>
            <p className="text-sm text-[#2A1C1E]/80 leading-relaxed">
              Build genuine friendships, expand your network, and find women who inspire you in a safe, unpretentious environment.
            </p>
            <div className="pt-2 text-xs text-[#D94F70] font-semibold flex items-center gap-2">
              <span>Sisterhood brunches</span>
              <span>·</span>
              <span>Intimate tea circles</span>
            </div>
          </div>

          {/* LEARN */}
          <div className="bg-white rounded-3xl p-8 border border-[#EAD7C8] luxury-card-shadow luxury-card-hover space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E8DCF0]/40 rounded-full blur-2xl group-hover:bg-[#E8DCF0]/70 transition-all pointer-events-none" />
            <div className="w-13 h-13 rounded-2xl bg-[#F5EFF9] border border-[#E0D0EB] flex items-center justify-center text-[#8E58A6] shadow-xs">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-widest font-bold text-[#8E58A6] block mb-1">
                02. PILLAR
              </span>
              <h3 className="text-2xl font-serif-luxury font-bold text-[#2A1C1E]">
                LEARN
              </h3>
            </div>
            <p className="text-sm text-[#2A1C1E]/80 leading-relaxed">
              Discover new skills, exchange ideas, and explore opportunities for personal and professional growth with leaders in tech, design, and finance.
            </p>
            <div className="pt-2 text-xs text-[#8E58A6] font-semibold flex items-center gap-2">
              <span>Financial sovereignty</span>
              <span>·</span>
              <span>Leadership masterclasses</span>
            </div>
          </div>

          {/* GROW */}
          <div className="bg-white rounded-3xl p-8 border border-[#EAD7C8] luxury-card-shadow luxury-card-hover space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D8E6D5]/40 rounded-full blur-2xl group-hover:bg-[#D8E6D5]/70 transition-all pointer-events-none" />
            <div className="w-13 h-13 rounded-2xl bg-[#F2F7F1] border border-[#CDE0C9] flex items-center justify-center text-[#4D7A52] shadow-xs">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-widest font-bold text-[#4D7A52] block mb-1">
                03. PILLAR
              </span>
              <h3 className="text-2xl font-serif-luxury font-bold text-[#2A1C1E]">
                GROW
              </h3>
            </div>
            <p className="text-sm text-[#2A1C1E]/80 leading-relaxed">
              Nurture your confidence, well-being, and potential in a supportive community that celebrates your milestones and respects your boundaries.
            </p>
            <div className="pt-2 text-xs text-[#4D7A52] font-semibold flex items-center gap-2">
              <span>Mindfulness resets</span>
              <span>·</span>
              <span>Intentional daily habits</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Preview - Karachi Creative Studio Image */}
      <section className="bg-gradient-to-r from-[#FDF3F5] via-[#FCFAF7] to-[#F5E5D3]/50 py-20 border-y border-[#EAD7C8]">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-[#EAD7C8] shadow-lg aspect-4/5 relative bg-white group">
              <img
                src="/src/assets/images/karachi_women_meetup_1792856474355.jpg"
                alt="Modern Pakistani female entrepreneurs collaborating in a design studio in Clifton, Karachi"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1C1E]/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] tracking-wider uppercase text-[#F7BAC7] font-bold">
                  Karachi Studio Spotlight
                </span>
                <h4 className="font-serif-luxury text-xl font-bold">Ayesha Tariq & Community Leads</h4>
                <p className="text-xs text-[#F5E5D3]">Creative Direction & Women's Venture Circle · Clifton</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D94F70]">
              OUR PURPOSE & MISSION
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#2A1C1E] leading-tight">
              Built for Pakistani Women Who Dare to Flourish.
            </h2>
            <p className="text-sm sm:text-base text-[#2A1C1E]/80 leading-relaxed">
              In Pakistan, ambitious women move through complex, parallel realities: fulfilling deep familial bonds while pioneering tech products, running studios, practicing medicine, and scaling ventures.
            </p>
            <p className="text-sm sm:text-base text-[#2A1C1E]/80 leading-relaxed">
              Elevate Her was created to be the space where you do not have to compartmentalize yourself. Here, you meet women who understand your local context, celebrate your ambition, and stand beside you as you build the life you envision.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 text-xs font-bold text-[#2A1C1E] bg-white border border-[#EAD7C8] rounded-xl hover:bg-[#FDF0F3] hover:border-[#D94F70] transition-all shadow-xs cursor-pointer flex items-center gap-2"
              >
                <span>Discover Our Story & Values</span>
                <ArrowRight className="w-4 h-4 text-[#D94F70]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Upcoming Events Section */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D94F70]">
              GATHER. CONNECT. BE INSPIRED.
            </span>
            <h2 className="text-3xl md:text-4xl font-serif-luxury font-bold text-[#2A1C1E]">
              Upcoming Events & Meetups
            </h2>
            <p className="text-sm text-[#2A1C1E]/70">
              Curated experiences across Karachi, Lahore, Islamabad, and nationwide virtual gatherings.
            </p>
          </div>

          <button
            onClick={() => onNavigate('events')}
            className="text-xs font-bold text-[#D94F70] hover:text-[#B52F51] flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
          >
            <span>View All Gatherings</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredEvents.map((evt) => {
            const seatsLeft = Math.max(0, evt.capacity - evt.registeredCount);
            const isFull = seatsLeft === 0;

            return (
              <div 
                key={evt.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#EAD7C8] luxury-card-shadow luxury-card-hover flex flex-col justify-between"
              >
                {/* Event Image Box */}
                <div className="h-56 relative overflow-hidden bg-[#FDF0F3]">
                  <img
                    src={evt.imageUrl}
                    alt={evt.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-[#2A1C1E]/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-lg">
                    {evt.city}
                  </div>
                  <div className="absolute top-3.5 right-3.5 bg-white/95 text-[#D94F70] text-[11px] font-bold px-3 py-1 rounded-lg shadow-xs">
                    {evt.pricePKR === 0 ? 'Complimentary' : `Rs. ${evt.pricePKR.toLocaleString()} PKR`}
                  </div>
                </div>

                {/* Event Info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#2A1C1E]/65 font-medium">
                      <span className="text-[#D94F70] font-bold">{evt.category}</span>
                      <span>·</span>
                      <span>{evt.displayDate.split(',')[1]}</span>
                    </div>

                    <h3 className="text-xl font-serif-luxury font-bold text-[#2A1C1E] leading-snug line-clamp-2">
                      {evt.title}
                    </h3>

                    <p className="text-xs text-[#2A1C1E]/80 line-clamp-2 leading-relaxed">
                      {evt.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#EAD7C8]/70 space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#2A1C1E]/75">
                      <div className="flex items-center gap-1.5 truncate">
                        <MapPin className="w-3.5 h-3.5 text-[#D94F70] shrink-0" />
                        <span className="truncate">{evt.venueName}</span>
                      </div>
                      <span className="text-[11px] font-bold shrink-0">
                        {isFull ? (
                          <span className="text-[#D94F70]">Waitlist Only</span>
                        ) : (
                          <span className="text-[#4D7A52]">{seatsLeft} spots left</span>
                        )}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => onSelectEvent(evt)}
                        className="w-full py-2.5 text-xs font-bold text-[#2A1C1E] bg-[#FCFAF7] border border-[#EAD7C8] rounded-xl hover:bg-[#FDF0F3] transition-colors text-center cursor-pointer"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => onSelectEvent(evt)}
                        className={`w-full py-2.5 text-xs font-bold text-white rounded-xl transition-all text-center cursor-pointer ${
                          isFull 
                            ? 'bg-[#B52F51] hover:bg-[#9E2442]' 
                            : 'bg-gradient-to-r from-[#D94F70] to-[#B52F51] hover:from-[#B52F51] hover:to-[#9E2442] shadow-xs'
                        }`}
                      >
                        {isFull ? 'Join Waitlist' : 'Register'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Community Highlights & Experiences */}
      <section className="bg-gradient-to-r from-[#D8E6D5]/40 via-[#FCFAF7] to-[#FADCE2]/40 py-20 border-y border-[#EAD7C8]">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-[#4D7A52]">
              AUTHENTIC CIRCLES
            </span>
            <h2 className="text-3xl md:text-4xl font-serif-luxury font-bold text-[#2A1C1E]">
              Community Highlights
            </h2>
            <p className="text-sm text-[#2A1C1E]/70">
              Real reflections, brunches, and conversations from our sisterhood in Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-7 border border-[#EAD7C8] luxury-card-shadow space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#D94F70]">
                Karachi Chapter · Clifton
              </span>
              <h3 className="text-lg font-serif-luxury font-bold text-[#2A1C1E]">
                The Working Women Sisterhood Brunch
              </h3>
              <p className="text-xs text-[#2A1C1E]/80 leading-relaxed">
                28 modern working women across fintech, law, and creative agencies gathered in Clifton to discuss imposter syndrome, salary negotiations, and building peer alliances.
              </p>
              <div className="text-[11px] text-[#2A1C1E]/70 pt-2 border-t border-[#EAD7C8] font-medium">
                Key takeaway: "Vulnerability and genuine support build stronger alliances than polished competition."
              </div>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-[#EAD7C8] luxury-card-shadow space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#4D7A52]">
                Karachi Seaside · Clifton
              </span>
              <h3 className="text-lg font-serif-luxury font-bold text-[#2A1C1E]">
                Morning Breathwork & Somatic Reset
              </h3>
              <p className="text-xs text-[#2A1C1E]/80 leading-relaxed">
                Practicing gentle nervous system regulation and grounding techniques to navigate high-stress corporate and family deadlines without burning out.
              </p>
              <div className="text-[11px] text-[#2A1C1E]/70 pt-2 border-t border-[#EAD7C8] font-medium">
                Key takeaway: "Stillness is not wasted time; it is where clarity and deep resilience return."
              </div>
            </div>

            <div className="bg-white rounded-3xl p-7 border border-[#EAD7C8] luxury-card-shadow space-y-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#8E58A6]">
                Islamabad & Lahore Hubs
              </span>
              <h3 className="text-lg font-serif-luxury font-bold text-[#2A1C1E]">
                Financial Sovereignty & Wealth Building
              </h3>
              <p className="text-xs text-[#2A1C1E]/80 leading-relaxed">
                A focused financial literacy workshop breaking down mutual funds, tax filing in Pakistan, and negotiating consulting fees with confidence.
              </p>
              <div className="text-[11px] text-[#2A1C1E]/70 pt-2 border-t border-[#EAD7C8] font-medium">
                Key takeaway: "Financial clarity is fundamental to personal peace and creative freedom."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Wellness & Personal Growth Blog Preview - Clifton Seaside Image */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D94F70]">
              SMALL HABITS. MEANINGFUL GROWTH.
            </span>
            <h2 className="text-3xl md:text-4xl font-serif-luxury font-bold text-[#2A1C1E]">
              The Wellness & Lifestyle Magazine
            </h2>
            <p className="text-sm text-[#2A1C1E]/70">
              Thoughtful articles, habits, and self-care reflections tailored to our lives in Pakistan.
            </p>
          </div>

          <button
            onClick={() => onNavigate('blog')}
            className="text-xs font-bold text-[#D94F70] hover:text-[#B52F51] flex items-center gap-1.5 cursor-pointer underline underline-offset-4"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentArticles.map(article => (
            <div
              key={article.id}
              onClick={() => onNavigate('blog')}
              className="bg-white rounded-3xl overflow-hidden border border-[#EAD7C8] luxury-card-shadow luxury-card-hover flex flex-col justify-between cursor-pointer group"
            >
              <div className="h-52 overflow-hidden relative bg-[#FDF0F3]">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#2A1C1E]/65 font-medium">
                    <span className="text-[#D94F70] font-bold">{article.category}</span>
                    <span>·</span>
                    <span>{article.readTimeMinutes} min read</span>
                  </div>

                  <h3 className="text-xl font-serif-luxury font-bold text-[#2A1C1E] group-hover:text-[#D94F70] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#2A1C1E]/75 line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAD7C8]/70 text-xs text-[#2A1C1E]/70 flex items-center justify-between">
                  <span>By {article.authorName}</span>
                  <span className="text-[#D94F70] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read article →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Community Testimonials */}
      <section className="bg-gradient-to-r from-[#FDF0F3] via-white to-[#FDF0F3] py-20 border-y border-[#EAD7C8]">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D94F70]">
              VOICES OF OUR MEMBERS
            </span>
            <h2 className="text-3xl md:text-4xl font-serif-luxury font-bold text-[#2A1C1E]">
              Sisterhood in Their Own Words
            </h2>
            <p className="text-sm text-[#2A1C1E]/70">
              Real reflections from modern working women across Karachi, Lahore, and Islamabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approvedTestimonials.map(t => (
              <div 
                key={t.id} 
                className="bg-white p-7 rounded-3xl border border-[#EAD7C8] luxury-card-shadow flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <Quote className="w-7 h-7 text-[#D94F70]" />
                  <p className="text-xs sm:text-sm text-[#2A1C1E]/90 italic leading-relaxed font-serif-luxury">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAD7C8] flex items-center justify-between text-xs">
                  <div>
                    <strong className="block font-bold text-[#2A1C1E]">{t.name}</strong>
                    <span className="text-[#2A1C1E]/65 text-[11px]">{t.role} · {t.city}</span>
                  </div>
                  <span className="text-[10px] text-[#D94F70] font-bold bg-[#FDF0F3] px-2 py-0.5 rounded-full">{t.eventAttended}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final Call to Action - Radiant Vibrant Soft Luxury */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <div className="bg-gradient-to-br from-[#FDF0F3] via-[#FADCE2] to-[#F5E5D3] border-2 border-[#F5B5C4] rounded-3xl p-8 md:p-14 space-y-6 shadow-lg">
          <span className="text-xs uppercase tracking-widest font-bold text-[#B52F51]">
            YOUR INVITATION TO GROW
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#2A1C1E] leading-tight">
            Your Journey to Growth Starts Here.
          </h2>
          <p className="text-sm sm:text-base text-[#2A1C1E]/80 max-w-lg mx-auto leading-relaxed">
            Meet inspiring women, discover new possibilities, and become part of a community that grows together.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('community')}
              className="px-8 py-3.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#D94F70] to-[#B52F51] rounded-xl hover:from-[#B52F51] hover:to-[#9E2442] transition-all shadow-[0_6px_20px_rgba(217,79,112,0.4)] cursor-pointer"
            >
              Join Elevate Her
            </button>
            <button
              onClick={() => onNavigate('events')}
              className="px-7 py-3.5 text-xs sm:text-sm font-bold text-[#2A1C1E] bg-white border border-[#EAD7C8] rounded-xl hover:bg-[#FDF0F3] transition-colors cursor-pointer shadow-xs"
            >
              Discover Our Events
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
