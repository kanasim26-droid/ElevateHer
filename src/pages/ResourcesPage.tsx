import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ResourceItem } from '../types';
import { Search, FileText, Eye, Sparkles } from 'lucide-react';

interface ResourcesPageProps {
  onSelectResource: (res: ResourceItem) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onSelectResource }) => {
  const { resources } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Habits & Wellness',
    'Mindfulness & Journaling',
    'Networking & Career',
    'Personal Growth'
  ];

  const filteredResources = resources.filter(res => {
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          res.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-24">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#FDF0F3] via-[#FADCE2]/40 to-[#FCFAF7] border-b border-[#EAD7C8] py-16 px-4 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-[#D94F70]">
            THE RESOURCES LIBRARY
          </span>
          <h1 className="text-4xl md:text-5xl font-serif-luxury font-bold text-[#2A1C1E]">
            Worksheets, Trackers & Guides
          </h1>
          <p className="text-sm text-[#2A1C1E]/80 leading-relaxed">
            Practical tools created by wellness educators and Karachi/Lahore community mentors to help you structure your routines, reflect deeply, and pursue your goals.
          </p>
        </div>
      </section>

      {/* 2. Filter & Search */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#D94F70] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides and trackers..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#EAD7C8] rounded-xl text-xs text-[#2A1C1E] placeholder:text-[#2A1C1E]/40 focus:outline-hidden focus:border-[#D94F70]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#D94F70] to-[#B52F51] text-white shadow-xs'
                    : 'bg-white text-[#2A1C1E]/80 hover:bg-[#FDF0F3] border border-[#EAD7C8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Resources Grid */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map(res => (
            <div
              key={res.id}
              className="bg-white rounded-3xl p-8 border border-[#EAD7C8] luxury-card-shadow luxury-card-hover flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#2A1C1E]/65 font-medium">
                  <span className="font-bold text-[#D94F70]">{res.category}</span>
                  <span>{res.format}</span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-[#FDF0F3] border border-[#F5B5C4] flex items-center justify-center text-[#D94F70] shadow-xs">
                  <FileText className="w-6 h-6 text-[#D94F70]" />
                </div>

                <h3 className="text-xl font-serif-luxury font-bold text-[#2A1C1E] leading-snug">
                  {res.title}
                </h3>

                <p className="text-xs text-[#2A1C1E]/80 leading-relaxed">
                  {res.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAD7C8]/70 flex items-center justify-between">
                <span className="text-[11px] text-[#4D7A52] font-bold font-mono">
                  {res.downloadsCount} community uses
                </span>

                <button
                  onClick={() => onSelectResource(res)}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#D94F70] to-[#B52F51] rounded-xl hover:from-[#B52F51] hover:to-[#9E2442] transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Open Worksheet</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="max-w-3xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-r from-[#D8E6D5]/50 via-white to-[#FADCE2]/40 p-5 rounded-2xl border border-[#CDE0C9] text-xs text-[#2A1C1E]/80 leading-relaxed font-medium">
          All Elevate Her worksheets are free for personal journaling and community circles. They are formatted to print cleanly on standard A4 / Letter paper.
        </div>
      </section>
    </div>
  );
};
