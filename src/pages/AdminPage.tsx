import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { EventItem, BlogPost, Announcement, City, EventCategory, SiteConfig } from '../types';
import { 
  Calendar, 
  Users, 
  Megaphone, 
  BookOpen, 
  FileText, 
  Mail, 
  Settings, 
  Plus, 
  Trash2, 
  Edit3, 
  Download, 
  Check, 
  ArrowLeft,
  Search,
  CheckCircle2
} from 'lucide-react';

interface AdminPageProps {
  onBackToSite: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ onBackToSite }) => {
  const { 
    events, 
    addEvent, 
    updateEvent, 
    deleteEvent,
    registrations, 
    cancelRegistration,
    announcements, 
    updateAnnouncement,
    blogPosts, 
    addBlogPost, 
    deleteBlogPost,
    resources,
    newsletterEmails, 
    contactInquiries, 
    siteConfig, 
    updateSiteConfig 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'events' | 'registrations' | 'announcements' | 'blog' | 'inquiries' | 'settings'>('events');

  // Event modal state
  const [editingEvent, setEditingEvent] = useState<EventItem | null>(null);
  const [showEventModal, setShowEventModal] = useState(false);

  // New announcement text
  const [announcementText, setAnnouncementText] = useState(announcements[0]?.message || '');
  const [announcementActive, setAnnouncementActive] = useState<boolean>(announcements[0]?.active ?? true);
  const [announcementSaved, setAnnouncementSaved] = useState(false);

  // Site config form
  const [configForm, setConfigForm] = useState<SiteConfig>(siteConfig);
  const [configSaved, setConfigSaved] = useState(false);

  // Event form fields
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<EventCategory>('Brunch & Social');
  const [city, setCity] = useState<City>('Lahore');
  const [venueName, setVenueName] = useState('');
  const [venueAddress, setVenueAddress] = useState('');
  const [displayDate, setDisplayDate] = useState('');
  const [startTime, setStartTime] = useState('11:00 AM');
  const [endTime, setEndTime] = useState('02:00 PM');
  const [pricePKR, setPricePKR] = useState(2500);
  const [capacity, setCapacity] = useState(25);
  const [description, setDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');

  const openNewEventModal = () => {
    setEditingEvent(null);
    setTitle('');
    setCategory('Brunch & Social');
    setCity('Lahore');
    setVenueName('');
    setVenueAddress('');
    setDisplayDate('Sunday, December 20, 2026');
    setStartTime('11:00 AM');
    setEndTime('02:00 PM');
    setPricePKR(2500);
    setCapacity(25);
    setDescription('');
    setLongDescription('');
    setShowEventModal(true);
  };

  const openEditEventModal = (evt: EventItem) => {
    setEditingEvent(evt);
    setTitle(evt.title);
    setCategory(evt.category);
    setCity(evt.city);
    setVenueName(evt.venueName);
    setVenueAddress(evt.venueAddress);
    setDisplayDate(evt.displayDate);
    setStartTime(evt.startTime);
    setEndTime(evt.endTime);
    setPricePKR(evt.pricePKR);
    setCapacity(evt.capacity);
    setDescription(evt.description);
    setLongDescription(evt.longDescription);
    setShowEventModal(true);
  };

  const handleSaveEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !venueName) return;

    if (editingEvent) {
      updateEvent({
        ...editingEvent,
        title,
        category,
        city,
        venueName,
        venueAddress,
        displayDate,
        startTime,
        endTime,
        pricePKR: Number(pricePKR),
        capacity: Number(capacity),
        description,
        longDescription
      });
    } else {
      const newEvt: EventItem = {
        id: 'evt-' + Date.now(),
        title,
        tagline: 'Curated gathering for Pakistani women',
        category,
        city,
        venueName,
        venueAddress,
        isOnline: city === 'Online',
        date: '2026-12-20',
        displayDate,
        startTime,
        endTime,
        timezone: 'PKT (Asia/Karachi, UTC+05:00)',
        pricePKR: Number(pricePKR),
        capacity: Number(capacity),
        registeredCount: 0,
        featured: false,
        hostName: siteConfig.founderName,
        hostRole: siteConfig.founderRole,
        perks: ['Refreshments & artisanal tea', 'Elevate Her workbook', 'Community networking'],
        imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1000&q=80',
        status: 'Upcoming',
        deadlineDate: '2026-12-18',
        description,
        longDescription: longDescription || description
      };
      addEvent(newEvt);
    }
    setShowEventModal(false);
  };

  const handleSaveAnnouncement = () => {
    if (announcements[0]) {
      updateAnnouncement({
        ...announcements[0],
        message: announcementText,
        active: announcementActive
      });
    }
    setAnnouncementSaved(true);
    setTimeout(() => setAnnouncementSaved(false), 2500);
  };

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteConfig(configForm);
    setConfigSaved(true);
    setTimeout(() => setConfigSaved(false), 2500);
  };

  const exportRegistrationsCSV = () => {
    let csv = 'Registration ID,Event Title,Attendee Name,Email,Phone,City,Status,Ticket Code,Registered Date\n';
    registrations.forEach(r => {
      csv += `"${r.id}","${r.eventTitle}","${r.fullName}","${r.email}","${r.phone}","${r.city}","${r.status}","${r.ticketCode}","${r.registeredAt}"\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', `ElevateHer_Registrations_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#F8F2E8] text-[#493B3B] pb-20">
      {/* Top Admin Header */}
      <div className="bg-[#493B3B] text-white px-4 lg:px-8 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToSite}
              className="p-1 text-white/70 hover:text-white rounded-lg hover:bg-white/10 cursor-pointer"
              title="Return to website"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-lg font-serif-luxury font-bold">Elevate Her · Owner Dashboard</h1>
              <p className="text-[11px] text-white/60">Community CMS & Event Management · Pakistan Market</p>
            </div>
          </div>

          <button
            onClick={onBackToSite}
            className="text-xs bg-[#F4DDE1] text-[#493B3B] px-3.5 py-1.5 rounded-lg font-semibold hover:bg-white transition-colors cursor-pointer"
          >
            Preview Live Site
          </button>
        </div>
      </div>

      {/* Main Admin Container */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8 pt-8 space-y-6">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#E8D8C5]">
          <button
            onClick={() => setActiveTab('events')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'events' ? 'bg-[#493B3B] text-white' : 'bg-white text-[#493B3B]/80 hover:bg-[#E8D8C5]/50 border border-[#E8D8C5]'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Events ({events.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('registrations')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'registrations' ? 'bg-[#493B3B] text-white' : 'bg-white text-[#493B3B]/80 hover:bg-[#E8D8C5]/50 border border-[#E8D8C5]'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Registrations ({registrations.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('announcements')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'announcements' ? 'bg-[#493B3B] text-white' : 'bg-white text-[#493B3B]/80 hover:bg-[#E8D8C5]/50 border border-[#E8D8C5]'
            }`}
          >
            <Megaphone className="w-3.5 h-3.5" />
            <span>Top Announcement</span>
          </button>

          <button
            onClick={() => setActiveTab('blog')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'blog' ? 'bg-[#493B3B] text-white' : 'bg-white text-[#493B3B]/80 hover:bg-[#E8D8C5]/50 border border-[#E8D8C5]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Blog Articles ({blogPosts.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('inquiries')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'inquiries' ? 'bg-[#493B3B] text-white' : 'bg-white text-[#493B3B]/80 hover:bg-[#E8D8C5]/50 border border-[#E8D8C5]'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Inquiries & Subscribers ({contactInquiries.length + newsletterEmails.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'settings' ? 'bg-[#493B3B] text-white' : 'bg-white text-[#493B3B]/80 hover:bg-[#E8D8C5]/50 border border-[#E8D8C5]'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Pakistan Settings</span>
          </button>
        </div>

        {/* Tab 1: Events Manager */}
        {activeTab === 'events' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-serif-luxury font-bold">Scheduled Gatherings & Circles</h2>
                <p className="text-xs text-[#493B3B]/70">Create, edit, or adjust seats and PKR pricing for upcoming events.</p>
              </div>
              <button
                onClick={openNewEventModal}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#493B3B] rounded-lg hover:bg-[#362a2a] flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Create New Event</span>
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-[#E8D8C5] overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F8F2E8] border-b border-[#E8D8C5] text-[#493B3B]/70 font-semibold">
                    <tr>
                      <th className="p-3.5">Event Title</th>
                      <th className="p-3.5">City & Venue</th>
                      <th className="p-3.5">Date & Time</th>
                      <th className="p-3.5">Price (PKR)</th>
                      <th className="p-3.5">Capacity / Booked</th>
                      <th className="p-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8D8C5]/60">
                    {events.map(evt => (
                      <tr key={evt.id} className="hover:bg-[#F8F2E8]/40">
                        <td className="p-3.5 font-semibold text-[#493B3B] max-w-xs truncate">
                          {evt.title}
                          <span className="block text-[10px] text-[#B85C6D] font-normal">{evt.category}</span>
                        </td>
                        <td className="p-3.5 text-[#493B3B]/80">
                          {evt.city}
                          <span className="block text-[11px] text-[#493B3B]/60 truncate max-w-[180px]">{evt.venueName}</span>
                        </td>
                        <td className="p-3.5 text-[#493B3B]/80">
                          {evt.displayDate.split(',')[0]}
                          <span className="block text-[11px] text-[#493B3B]/60">{evt.startTime}</span>
                        </td>
                        <td className="p-3.5 font-semibold">
                          {evt.pricePKR === 0 ? 'Free' : `Rs. ${evt.pricePKR.toLocaleString()}`}
                        </td>
                        <td className="p-3.5">
                          <span className="font-semibold">{evt.registeredCount}</span> / {evt.capacity}
                          {evt.registeredCount >= evt.capacity && (
                            <span className="ml-1.5 text-[10px] text-[#B85C6D] font-semibold">FULL</span>
                          )}
                        </td>
                        <td className="p-3.5 text-right space-x-2">
                          <button
                            onClick={() => openEditEventModal(evt)}
                            className="p-1.5 text-[#493B3B]/70 hover:text-[#493B3B] hover:bg-[#E8D8C5]/50 rounded cursor-pointer"
                            title="Edit Event"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => deleteEvent(evt.id)}
                            className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded cursor-pointer"
                            title="Delete Event"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Registrations */}
        {activeTab === 'registrations' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-serif-luxury font-bold">Attendee Roster & Tickets</h2>
                <p className="text-xs text-[#493B3B]/70">Verified registrations with contact details and ticket codes.</p>
              </div>
              <button
                onClick={exportRegistrationsCSV}
                className="px-4 py-2 text-xs font-semibold text-[#493B3B] bg-white border border-[#E8D8C5] rounded-lg hover:bg-[#F4DDE1]/40 flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Attendee CSV</span>
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-[#E8D8C5] overflow-hidden shadow-xs">
              {registrations.length === 0 ? (
                <div className="p-12 text-center text-xs text-[#493B3B]/70">
                  No attendees have registered yet. Test the registration flow from the events page!
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#F8F2E8] border-b border-[#E8D8C5] text-[#493B3B]/70 font-semibold">
                      <tr>
                        <th className="p-3.5">Ticket Code</th>
                        <th className="p-3.5">Attendee</th>
                        <th className="p-3.5">Contact</th>
                        <th className="p-3.5">Event</th>
                        <th className="p-3.5">Status</th>
                        <th className="p-3.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8D8C5]/60">
                      {registrations.map(reg => (
                        <tr key={reg.id} className="hover:bg-[#F8F2E8]/40">
                          <td className="p-3.5 font-mono font-bold text-[#B85C6D]">{reg.ticketCode}</td>
                          <td className="p-3.5 font-semibold text-[#493B3B]">
                            {reg.fullName}
                            <span className="block text-[11px] text-[#493B3B]/60 font-normal">{reg.city} · {reg.profession}</span>
                          </td>
                          <td className="p-3.5 text-[#493B3B]/80">
                            {reg.email}
                            <span className="block text-[11px] text-[#493B3B]/60">{reg.phone}</span>
                          </td>
                          <td className="p-3.5 text-[#493B3B]/80 max-w-[200px] truncate">
                            {reg.eventTitle}
                            <span className="block text-[10px] text-[#493B3B]/50">{reg.eventDate}</span>
                          </td>
                          <td className="p-3.5">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                              reg.status === 'Confirmed' ? 'bg-[#DCE6D9] text-[#3c593a]' :
                              reg.status === 'Waitlisted' ? 'bg-amber-100 text-amber-800' :
                              'bg-gray-100 text-gray-600'
                            }`}>
                              {reg.status}
                            </span>
                          </td>
                          <td className="p-3.5 text-right">
                            {reg.status !== 'Cancelled' && (
                              <button
                                onClick={() => cancelRegistration(reg.id)}
                                className="text-xs text-red-600 hover:underline cursor-pointer"
                              >
                                Cancel
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 3: Announcements */}
        {activeTab === 'announcements' && (
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E8D8C5] shadow-xs space-y-6 max-w-2xl">
            <div>
              <h2 className="text-xl font-serif-luxury font-bold">Top Announcement Banner</h2>
              <p className="text-xs text-[#493B3B]/70">
                Display critical deadlines, event seat openings, or community news at the very top of all pages.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-medium text-[#493B3B] mb-1">
                  Announcement Text
                </label>
                <textarea
                  rows={3}
                  value={announcementText}
                  onChange={(e) => setAnnouncementText(e.target.value)}
                  placeholder="e.g. Registration now open for the Spring Sisterhood Brunch in Lahore!"
                  className="w-full bg-[#F8F2E8]/40 border border-[#E8D8C5] rounded-xl p-3 text-xs text-[#493B3B] focus:outline-hidden focus:border-[#B85C6D]"
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={announcementActive}
                  onChange={(e) => setAnnouncementActive(e.target.checked)}
                  className="rounded border-[#E8D8C5] text-[#B85C6D]"
                />
                <span className="text-[#493B3B] font-medium">Publish announcement to live website</span>
              </label>

              <button
                type="button"
                onClick={handleSaveAnnouncement}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#493B3B] rounded-lg hover:bg-[#362a2a] cursor-pointer flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Save Announcement</span>
              </button>

              {announcementSaved && (
                <p className="text-xs text-[#3c593a] flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Announcement updated and live on top bar!</span>
                </p>
              )}
            </div>
          </div>
        )}

        {/* Tab 4: Blog CMS */}
        {activeTab === 'blog' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-serif-luxury font-bold">Articles & Editorial Content</h2>
                <p className="text-xs text-[#493B3B]/70">Published articles in the Elevate Her wellness and lifestyle magazine.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#E8D8C5] overflow-hidden shadow-xs">
              <div className="divide-y divide-[#E8D8C5]/60">
                {blogPosts.map(post => (
                  <div key={post.id} className="p-4 flex items-center justify-between gap-4 hover:bg-[#F8F2E8]/30">
                    <div className="space-y-1 max-w-xl">
                      <div className="flex items-center gap-2 text-[11px] text-[#493B3B]/60">
                        <span className="font-semibold text-[#B85C6D]">{post.category}</span>
                        <span>·</span>
                        <span>{post.publishedDate}</span>
                        <span>·</span>
                        <span>By {post.authorName}</span>
                      </div>
                      <h4 className="font-serif-luxury font-bold text-base text-[#493B3B]">{post.title}</h4>
                      <p className="text-xs text-[#493B3B]/70 line-clamp-1">{post.summary}</p>
                    </div>

                    <button
                      onClick={() => deleteBlogPost(post.id)}
                      className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg cursor-pointer"
                      title="Delete Article"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Inquiries & Subscribers */}
        {activeTab === 'inquiries' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contact Submissions */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8D8C5] shadow-xs space-y-4">
              <h3 className="font-serif-luxury font-bold text-lg text-[#493B3B]">
                Contact Inquiries ({contactInquiries.length})
              </h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {contactInquiries.map(inq => (
                  <div key={inq.id} className="bg-[#F8F2E8]/60 p-3.5 rounded-xl border border-[#E8D8C5] text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <strong className="text-[#493B3B]">{inq.fullName}</strong>
                      <span className="text-[10px] text-[#B85C6D] font-medium">{inq.inquiryType}</span>
                    </div>
                    <p className="text-[#493B3B]/70 text-[11px]">{inq.email} · {inq.submittedAt}</p>
                    <p className="text-[#493B3B]/90 pt-1 text-xs">{inq.message}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Subscribers */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8D8C5] shadow-xs space-y-4">
              <h3 className="font-serif-luxury font-bold text-lg text-[#493B3B]">
                Newsletter Subscribers ({newsletterEmails.length})
              </h3>
              <p className="text-xs text-[#493B3B]/70">Subscribers who have opted in for reflections and meetup invitations.</p>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {newsletterEmails.map((email, idx) => (
                  <div key={idx} className="p-2.5 bg-[#F8F2E8]/60 rounded-lg border border-[#E8D8C5] text-xs font-mono text-[#493B3B]">
                    {email}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 6: Pakistan Settings */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E8D8C5] shadow-xs space-y-6 max-w-2xl">
            <div>
              <h2 className="text-xl font-serif-luxury font-bold">Pakistan Regional Configuration</h2>
              <p className="text-xs text-[#493B3B]/70">Editable timezone, currency format, founder bio, and official emails.</p>
            </div>

            <form onSubmit={handleSaveConfig} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-[#493B3B] mb-1">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    value={configForm.brandName}
                    onChange={(e) => setConfigForm({ ...configForm, brandName: e.target.value })}
                    className="w-full bg-[#F8F2E8]/40 border border-[#E8D8C5] rounded-xl p-2.5 text-xs text-[#493B3B]"
                  />
                </div>

                <div>
                  <label className="block font-medium text-[#493B3B] mb-1">
                    Tagline
                  </label>
                  <input
                    type="text"
                    value={configForm.tagline}
                    onChange={(e) => setConfigForm({ ...configForm, tagline: e.target.value })}
                    className="w-full bg-[#F8F2E8]/40 border border-[#E8D8C5] rounded-xl p-2.5 text-xs text-[#493B3B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-[#493B3B] mb-1">
                    Default Currency
                  </label>
                  <input
                    type="text"
                    value={configForm.defaultCurrency}
                    onChange={(e) => setConfigForm({ ...configForm, defaultCurrency: e.target.value })}
                    className="w-full bg-[#F8F2E8]/40 border border-[#E8D8C5] rounded-xl p-2.5 text-xs text-[#493B3B]"
                  />
                </div>

                <div>
                  <label className="block font-medium text-[#493B3B] mb-1">
                    Default Event Timezone
                  </label>
                  <input
                    type="text"
                    value={configForm.defaultTimezone}
                    onChange={(e) => setConfigForm({ ...configForm, defaultTimezone: e.target.value })}
                    className="w-full bg-[#F8F2E8]/40 border border-[#E8D8C5] rounded-xl p-2.5 text-xs text-[#493B3B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-[#493B3B] mb-1">
                    Founder Name
                  </label>
                  <input
                    type="text"
                    value={configForm.founderName}
                    onChange={(e) => setConfigForm({ ...configForm, founderName: e.target.value })}
                    className="w-full bg-[#F8F2E8]/40 border border-[#E8D8C5] rounded-xl p-2.5 text-xs text-[#493B3B]"
                  />
                </div>

                <div>
                  <label className="block font-medium text-[#493B3B] mb-1">
                    Official Contact Email
                  </label>
                  <input
                    type="email"
                    value={configForm.officialEmail}
                    onChange={(e) => setConfigForm({ ...configForm, officialEmail: e.target.value })}
                    className="w-full bg-[#F8F2E8]/40 border border-[#E8D8C5] rounded-xl p-2.5 text-xs text-[#493B3B]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-[#493B3B] mb-1">
                  Founder Biography & Story
                </label>
                <textarea
                  rows={3}
                  value={configForm.founderBio}
                  onChange={(e) => setConfigForm({ ...configForm, founderBio: e.target.value })}
                  className="w-full bg-[#F8F2E8]/40 border border-[#E8D8C5] rounded-xl p-2.5 text-xs text-[#493B3B]"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#493B3B] rounded-lg hover:bg-[#362a2a] cursor-pointer"
              >
                Save Site Settings
              </button>

              {configSaved && (
                <p className="text-xs text-[#3c593a] flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Pakistan website configuration saved successfully.</span>
                </p>
              )}
            </form>
          </div>
        )}
      </div>

      {/* Add / Edit Event Modal */}
      {showEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#493B3B]/60 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white border border-[#E8D8C5] rounded-2xl w-full max-w-xl my-8 overflow-hidden shadow-2xl relative text-[#493B3B] max-h-[90vh] flex flex-col">
            <div className="p-4 px-6 border-b border-[#E8D8C5] bg-[#F4DDE1]/40 flex items-center justify-between">
              <h3 className="font-serif-luxury font-bold text-lg text-[#493B3B]">
                {editingEvent ? 'Edit Gathering Details' : 'Create New Elevate Her Gathering'}
              </h3>
              <button
                onClick={() => setShowEventModal(false)}
                className="text-[#493B3B]/70 hover:text-[#493B3B] cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveEvent} className="overflow-y-auto p-6 space-y-4 text-xs flex-1">
              <div>
                <label className="block font-medium mb-1">Event Title *</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Creative Entrepreneurs Tea Circle"
                  className="w-full p-2.5 bg-[#F8F2E8]/40 border border-[#E8D8C5] rounded-lg"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as EventCategory)}
                    className="w-full p-2.5 bg-[#F8F2E8]/40 border border-[#E8D8C5] rounded-lg"
                  >
                    <option value="Brunch & Social">Brunch & Social</option>
                    <option value="Wellness & Circles">Wellness & Circles</option>
                    <option value="Career & Leadership">Career & Leadership</option>
                    <option value="Workshops">Workshops</option>
                    <option value="Networking">Networking</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium mb-1">City</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value as City)}
                    className="w-full p-2.5 bg-[#F8F2E8]/40 border border-[#E8D8C5] rounded-lg"
                  >
                    <option value="Lahore">Lahore</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Online">Online</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium mb-1">Venue Name *</label>
                  <input
                    type="text"
                    value={venueName}
                    onChange={(e) => setVenueName(e.target.value)}
                    placeholder="e.g. Veranda Cafe"
                    className="w-full p-2.5 bg-[#F8F2E8]/40 border border-[#E8D8C5] rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">Venue Address</label>
                  <input
                    type="text"
                    value={venueAddress}
                    onChange={(e) => setVenueAddress(e.target.value)}
                    placeholder="e.g. Gulberg III, Lahore"
                    className="w-full p-2.5 bg-[#F8F2E8]/40 border border-[#E8D8C5] rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block font-medium mb-1">Date</label>
                  <input
                    type="text"
                    value={displayDate}
                    onChange={(e) => setDisplayDate(e.target.value)}
                    placeholder="Sunday, Nov 22, 2026"
                    className="w-full p-2.5 bg-[#F8F2E8]/40 border border-[#E8D8C5] rounded-lg"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">Ticket Price (PKR)</label>
                  <input
                    type="number"
                    value={pricePKR}
                    onChange={(e) => setPricePKR(Number(e.target.value))}
                    className="w-full p-2.5 bg-[#F8F2E8]/40 border border-[#E8D8C5] rounded-lg"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">Max Capacity</label>
                  <input
                    type="number"
                    value={capacity}
                    onChange={(e) => setCapacity(Number(e.target.value))}
                    className="w-full p-2.5 bg-[#F8F2E8]/40 border border-[#E8D8C5] rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium mb-1">Summary Description</label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Short description for event cards..."
                  className="w-full p-2.5 bg-[#F8F2E8]/40 border border-[#E8D8C5] rounded-lg"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#E8D8C5]">
                <button
                  type="button"
                  onClick={() => setShowEventModal(false)}
                  className="px-4 py-2 text-[#493B3B] hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-white bg-[#493B3B] rounded-lg hover:bg-[#362a2a] cursor-pointer"
                >
                  Save Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
