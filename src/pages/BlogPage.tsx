import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BlogPost } from '../types';
import { Search, ArrowLeft, Share2 } from 'lucide-react';

interface BlogPageProps {
  onNavigateToResources: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigateToResources }) => {
  const { blogPosts } = useApp();

  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const categories = [
    'All',
    'Healthy Daily Habits',
    'Self-Care',
    'Relationships and Community',
    'Confidence and Personal Growth',
    'Work-Life Balance',
    'Mindfulness'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.content.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // If viewing a single article
  if (selectedArticle) {
    return (
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12 space-y-10 animate-in fade-in duration-150">
        <button
          onClick={() => { setSelectedArticle(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-xs font-bold text-[#2A1C1E] hover:text-[#D94F70] flex items-center gap-1.5 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </button>

        {/* Article Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-[#2A1C1E]/65 font-medium">
            <span className="font-bold text-[#D94F70]">{selectedArticle.category}</span>
            <span>·</span>
            <span>{selectedArticle.publishedDate}</span>
            <span>·</span>
            <span>{selectedArticle.readTimeMinutes} min read</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-[#2A1C1E] leading-[1.2]">
            {selectedArticle.title}
          </h1>

          <p className="text-base sm:text-lg text-[#2A1C1E]/80 font-serif-luxury italic leading-relaxed">
            {selectedArticle.subtitle}
          </p>

          <div className="pt-2 flex items-center justify-between border-y border-[#EAD7C8] py-3.5 text-xs text-[#2A1C1E]/75 font-medium">
            <div>
              Written by <strong className="text-[#2A1C1E]">{selectedArticle.authorName}</strong> ({selectedArticle.authorRole})
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 text-[#D94F70] font-bold hover:text-[#B52F51] cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden aspect-16/9 bg-[#FDF0F3] border-2 border-[#EAD7C8] luxury-card-shadow relative">
          <img
            src={selectedArticle.imageUrl}
            alt={selectedArticle.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Key Takeaways Box */}
        {selectedArticle.takeaways && selectedArticle.takeaways.length > 0 && (
          <div className="bg-gradient-to-r from-[#D8E6D5]/50 to-[#FCFAF7] border-2 border-[#CDE0C9] p-6 rounded-3xl space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#4D7A52]">
              Key Reflections & Takeaways
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#2A1C1E]/90 font-medium">
              {selectedArticle.takeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#4D7A52] mt-1.5 shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Long-form Content */}
        <article className="space-y-6 text-[#2A1C1E]/85 text-sm sm:text-base leading-relaxed font-sans">
          {selectedArticle.content.map((para, idx) => (
            <p key={idx} className="leading-relaxed">
              {para}
            </p>
          ))}
        </article>

        {/* Tags */}
        <div className="pt-6 border-t border-[#EAD7C8] flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[#2A1C1E]/60 font-semibold mr-1">Topics:</span>
          {selectedArticle.tags.map(tag => (
            <span key={tag} className="text-[#D94F70] font-bold bg-[#FDF0F3] border border-[#F5B5C4] px-3 py-1 rounded-full text-[11px]">
              #{tag}
            </span>
          ))}
        </div>

        {/* Resources callout */}
        <div className="bg-gradient-to-br from-[#FDF0F3] via-white to-[#F5E5D3]/60 border border-[#EAD7C8] p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 luxury-card-shadow">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif-luxury font-bold text-xl text-[#2A1C1E]">
              Looking for practical companion worksheets?
            </h4>
            <p className="text-xs text-[#2A1C1E]/75">
              Download our companion habit trackers and journaling guides from the Resources Library.
            </p>
          </div>
          <button
            onClick={onNavigateToResources}
            className="px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-[#D94F70] to-[#B52F51] rounded-xl hover:from-[#B52F51] hover:to-[#9E2442] shrink-0 cursor-pointer shadow-md"
          >
            Explore Resources
          </button>
        </div>
      </div>
    );
  }

  // Blog Directory View
  return (
    <div className="space-y-12 pb-24">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#FDF0F3] via-[#FADCE2]/40 to-[#FCFAF7] border-b border-[#EAD7C8] py-16 px-4 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-[#D94F70]">
            THE WELLNESS & LIFESTYLE MAGAZINE
          </span>
          <h1 className="text-4xl md:text-5xl font-serif-luxury font-bold text-[#2A1C1E]">
            Nourishing Mind, Body & Ambition
          </h1>
          <p className="text-sm text-[#2A1C1E]/80 leading-relaxed">
            Evidence-informed reflections, mindfulness habits, and personal essays curated for modern working women across Karachi, Lahore, and Islamabad.
          </p>
        </div>
      </section>

      {/* 2. Filters & Search */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#D94F70] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles and topics..."
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

      {/* 3. Articles Grid */}
      <section className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <div
              key={post.id}
              onClick={() => { setSelectedArticle(post); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="bg-white rounded-3xl overflow-hidden border border-[#EAD7C8] luxury-card-shadow luxury-card-hover flex flex-col justify-between cursor-pointer group"
            >
              <div className="h-56 overflow-hidden relative bg-[#FDF0F3]">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#2A1C1E]/65 font-medium">
                    <span className="text-[#D94F70] font-bold">{post.category}</span>
                    <span>·</span>
                    <span>{post.readTimeMinutes} min read</span>
                  </div>

                  <h3 className="text-xl font-serif-luxury font-bold text-[#2A1C1E] group-hover:text-[#D94F70] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#2A1C1E]/75 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAD7C8]/70 text-xs text-[#2A1C1E]/70 flex items-center justify-between font-medium">
                  <span>By {post.authorName}</span>
                  <span className="text-[#D94F70] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Article →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
