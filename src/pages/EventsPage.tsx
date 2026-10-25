import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { EventItem, EventCategory, City } from '../types';
import { Search, MapPin, Calendar, Clock, Filter, ArrowRight, Check } from 'lucide-react';

interface EventsPageProps {
  onSelectEvent: (event: EventItem) => void;
  onNavigateToCommunity: () => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ 
  onSelectEvent, 
  onNavigateToCommunity 
}) => {
  const { events } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCity, setSelectedCity] = useState<string>('All');

  const categories = [
    'All',
    'Brunch & Social',
    'Wellness & Circles',
    'Career & Leadership',
    'Workshops',
    'Networking'
  ];

  const cities = ['All', 'Karachi', 'Lahore', 'Islamabad', 'Online'];

  // Filter logic
  const filteredEvents = events.filter(evt => {
    const matchesSearch = evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          evt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          evt.venueName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || evt.category === selectedCategory;
    const matchesCity = selectedCity === 'All' || evt.city === selectedCity;

    return matchesSearch && matchesCategory && matchesCity;
  });

  return (
    <div className="space-y-12 pb-24">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#FDF0F3] via-[#FADCE2]/40 to-[#FCFAF7] border-b border-[#EAD7C8] py-16 px-4 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-[#D94F70]">
            ELEVATE HER CALENDAR
          </span>
          <h1 className="text-4xl md:text-5xl font-serif-luxury font-bold text-[#2A1C1E]">
            Gatherings, Meetups & Circles
          </h1>
          <p className="text-sm text-[#2A1C1E]/80 leading-relaxed">
            Curated in-person brunches, wellness circles, and career masterclasses across Karachi, Lahore, and Islamabad, plus interactive virtual sessions.
          </p>
        </div>
      </section>

      {/* 2. Interactive Filter & Search Bar */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8 space-y-4">
        <div className="bg-white p-4 rounded-3xl border border-[#EAD7C8] luxury-card-shadow flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#D94F70] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, venue, or speaker..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#FCFAF7] border border-[#EAD7C8] rounded-xl text-xs text-[#2A1C1E] placeholder:text-[#2A1C1E]/40 focus:outline-hidden focus:border-[#D94F70]"
            />
          </div>

          {/* City Segmented Control */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            <span className="text-xs text-[#2A1C1E]/70 font-semibold mr-1 shrink-0">City:</span>
            {cities.map(c => (
              <button
                key={c}
                onClick={() => setSelectedCity(c)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCity === c
                    ? 'bg-gradient-to-r from-[#D94F70] to-[#B52F51] text-white shadow-xs'
                    : 'bg-[#FCFAF7] text-[#2A1C1E]/80 hover:bg-[#FDF0F3] border border-[#EAD7C8]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-[#FDF0F3] border-[#F5B5C4] text-[#D94F70] shadow-xs'
                  : 'bg-white border-[#EAD7C8] text-[#2A1C1E]/75 hover:border-[#D94F70]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Events Grid */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8">
        {filteredEvents.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#EAD7C8] space-y-4 max-w-lg mx-auto luxury-card-shadow">
            <Calendar className="w-10 h-10 text-[#D94F70] mx-auto" />
            <h3 className="text-xl font-serif-luxury font-bold text-[#2A1C1E]">
              No upcoming gatherings found
            </h3>
            <p className="text-xs text-[#2A1C1E]/70 leading-relaxed">
              We couldn't find any events matching your selected filters. Join our newsletter to receive priority notice when new dates are announced.
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSelectedCity('All'); setSearchQuery(''); }}
              className="text-xs font-bold text-[#D94F70] hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(evt => {
              const seatsLeft = Math.max(0, evt.capacity - evt.registeredCount);
              const isFull = seatsLeft === 0;

              return (
                <div
                  key={evt.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#EAD7C8] luxury-card-shadow luxury-card-hover flex flex-col justify-between"
                >
                  {/* Image */}
                  <div className="h-56 relative overflow-hidden bg-[#FDF0F3]">
                    <img
                      src={evt.imageUrl}
                      alt={`${evt.title} — Elevate Her women’s community event in Pakistan`}
                      onError={(event) => {
                        const image = event.currentTarget;
                        if (image.dataset.fallbackApplied === 'true') return;
                        image.dataset.fallbackApplied = 'true';
                        const category = evt.category.toLowerCase();
                        image.src = category.includes('wellness')
                          ? 'https://raw.githubusercontent.com/kanasim26-droid/ElevateHer/main/public/assets/images/karachi_women_wellness_1792856475702.jpg'
                          : category.includes('career') || category.includes('leadership')
                          ? 'https://raw.githubusercontent.com/kanasim26-droid/ElevateHer/main/public/assets/images/karachi_women_summit_1792856475136.jpg'
                          : category.includes('workshop') || category.includes('networking')
                          ? 'https://raw.githubusercontent.com/kanasim26-droid/ElevateHer/main/public/assets/images/karachi_women_meetup_1792856474355.jpg'
                          : 'https://raw.githubusercontent.com/kanasim26-droid/ElevateHer/main/public/assets/images/karachi_women_hero_1792856473621.jpg';
                      }}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-[#2A1C1E]/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-lg">
                      {evt.city}
                    </div>
                    <div className="absolute top-3.5 right-3.5 bg-white/95 text-[#D94F70] text-[11px] font-bold px-3 py-1 rounded-lg shadow-xs">
                      {evt.pricePKR === 0 ? 'Complimentary' : `Rs. ${evt.pricePKR.toLocaleString()} PKR`}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-[#2A1C1E]/65 font-medium">
                        <span className="text-[#D94F70] font-bold">{evt.category}</span>
                        <span>·</span>
                        <span>{evt.displayDate.split(',')[1]}</span>
                      </div>

                      <h3 className="text-xl font-serif-luxury font-bold text-[#2A1C1E] leading-snug">
                        {evt.title}
                      </h3>

                      <p className="text-xs text-[#2A1C1E]/80 line-clamp-2 leading-relaxed">
                        {evt.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EAD7C8]/70 space-y-3">
                      <div className="space-y-1 text-xs text-[#2A1C1E]/75 font-medium">
                        <div className="flex items-center gap-1.5 truncate">
                          <MapPin className="w-3.5 h-3.5 text-[#D94F70] shrink-0" />
                          <span className="truncate">{evt.venueName}</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#D94F70]" />
                            <span>{evt.startTime} PKT</span>
                          </span>
                          <span className="font-bold">
                            {isFull ? (
                              <span className="text-[#D94F70]">Waitlist Only</span>
                            ) : (
                              <span className="text-[#4D7A52]">{seatsLeft} seats remaining</span>
                            )}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <button
                          onClick={() => onSelectEvent(evt)}
                          className="w-full py-2.5 text-xs font-bold text-[#2A1C1E] bg-[#FCFAF7] border border-[#EAD7C8] rounded-xl hover:bg-[#FDF0F3] transition-colors text-center cursor-pointer"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => onSelectEvent(evt)}
                          className={`w-full py-2.5 text-xs font-bold text-white rounded-xl transition-all text-center cursor-pointer ${
                            isFull 
                              ? 'bg-[#B52F51] hover:bg-[#9E2442]' 
                              : 'bg-gradient-to-r from-[#D94F70] to-[#B52F51] hover:from-[#B52F51] hover:to-[#9E2442] shadow-xs'
                          }`}
                        >
                          {isFull ? 'Join Waitlist' : 'Register Now'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. Host a Gathering Banner */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-[#D8E6D5]/50 via-white to-[#FADCE2]/40 border-2 border-[#EAD7C8] rounded-3xl p-8 space-y-3 luxury-card-shadow">
          <h3 className="text-xl font-serif-luxury font-bold text-[#2A1C1E]">
            Interested in Hosting a Circle or Speaking in Karachi?
          </h3>
          <p className="text-xs sm:text-sm text-[#2A1C1E]/80 max-w-md mx-auto leading-relaxed">
            We partner with female entrepreneurs, studio owners, and expert facilitators across Karachi, Lahore, and Islamabad. Reach out to collaborate on our upcoming calendar.
          </p>
          <button
            onClick={onNavigateToCommunity}
            className="text-xs font-bold text-[#D94F70] hover:underline inline-flex items-center gap-1.5 cursor-pointer pt-1"
          >
            <span>Learn more about community collaborations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
};
