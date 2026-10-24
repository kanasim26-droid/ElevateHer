import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  EventItem, 
  Registration, 
  BlogPost, 
  ResourceItem, 
  Announcement, 
  Testimonial, 
  MemberProfile, 
  ContactInquiry, 
  SiteConfig 
} from '../types';
import { 
  initialEvents, 
  initialBlogPosts, 
  initialResources, 
  initialAnnouncements, 
  initialTestimonials, 
  initialSiteConfig 
} from '../data/initialData';

interface AppContextType {
  siteConfig: SiteConfig;
  updateSiteConfig: (config: SiteConfig) => void;
  events: EventItem[];
  addEvent: (event: EventItem) => void;
  updateEvent: (event: EventItem) => void;
  deleteEvent: (id: string) => void;
  registrations: Registration[];
  registerForEvent: (reg: Omit<Registration, 'id' | 'registeredAt' | 'ticketCode' | 'status'>) => { success: boolean; registration?: Registration; message: string };
  cancelRegistration: (id: string) => void;
  blogPosts: BlogPost[];
  addBlogPost: (post: BlogPost) => void;
  updateBlogPost: (post: BlogPost) => void;
  deleteBlogPost: (id: string) => void;
  resources: ResourceItem[];
  incrementResourceDownload: (id: string) => void;
  announcements: Announcement[];
  updateAnnouncement: (ann: Announcement) => void;
  dismissAnnouncement: (id: string) => void;
  testimonials: Testimonial[];
  addTestimonial: (test: Omit<Testimonial, 'id' | 'approved' | 'date'>) => void;
  currentMember: MemberProfile | null;
  joinCommunity: (profile: Omit<MemberProfile, 'id' | 'joinedDate'>) => { success: boolean; profile: MemberProfile };
  logoutMember: () => void;
  newsletterEmails: string[];
  subscribeNewsletter: (email: string) => { success: boolean; message: string };
  contactInquiries: ContactInquiry[];
  submitContactInquiry: (inquiry: Omit<ContactInquiry, 'id' | 'submittedAt' | 'status'>) => void;
  activeUrdu: boolean;
  toggleUrdu: () => void;
  dismissedAnnouncements: string[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Config
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(() => {
    const saved = localStorage.getItem('eh_siteConfig');
    return saved ? JSON.parse(saved) : initialSiteConfig;
  });

  // Events
  const [events, setEvents] = useState<EventItem[]>(() => {
    const saved = localStorage.getItem('eh_events_v2');
    return saved ? JSON.parse(saved) : initialEvents;
  });

  // Registrations
  const [registrations, setRegistrations] = useState<Registration[]>(() => {
    const saved = localStorage.getItem('eh_registrations');
    return saved ? JSON.parse(saved) : [];
  });

  // Blog Posts
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem('eh_blogPosts_v2');
    return saved ? JSON.parse(saved) : initialBlogPosts;
  });

  // Resources
  const [resources, setResources] = useState<ResourceItem[]>(() => {
    const saved = localStorage.getItem('eh_resources');
    return saved ? JSON.parse(saved) : initialResources;
  });

  // Announcements
  const [announcements, setAnnouncements] = useState<Announcement[]>(() => {
    const saved = localStorage.getItem('eh_announcements');
    return saved ? JSON.parse(saved) : initialAnnouncements;
  });

  const [dismissedAnnouncements, setDismissedAnnouncements] = useState<string[]>(() => {
    const saved = localStorage.getItem('eh_dismissedAnnouncements');
    return saved ? JSON.parse(saved) : [];
  });

  // Testimonials
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('eh_testimonials');
    return saved ? JSON.parse(saved) : initialTestimonials;
  });

  // Member
  const [currentMember, setCurrentMember] = useState<MemberProfile | null>(() => {
    const saved = localStorage.getItem('eh_currentMember');
    return saved ? JSON.parse(saved) : null;
  });

  // Newsletter Subscribers
  const [newsletterEmails, setNewsletterEmails] = useState<string[]>(() => {
    const saved = localStorage.getItem('eh_newsletterEmails');
    return saved ? JSON.parse(saved) : ['sample.sisterhood@gmail.com'];
  });

  // Inquiries
  const [contactInquiries, setContactInquiries] = useState<ContactInquiry[]>(() => {
    const saved = localStorage.getItem('eh_contactInquiries');
    return saved ? JSON.parse(saved) : [
      {
        id: 'inq-1',
        fullName: 'Hafsa Faruqi',
        email: 'hafsa.f@creatives.pk',
        inquiryType: 'Partnership & Collaboration',
        message: 'We are a female-led artisanal pottery studio in Lahore and would love to co-host an intimate ceramics & mindfulness morning with Elevate Her.',
        submittedAt: '2026-10-22',
        status: 'New'
      }
    ];
  });

  // Urdu preview mode
  const [activeUrdu, setActiveUrdu] = useState<boolean>(false);

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem('eh_siteConfig', JSON.stringify(siteConfig));
  }, [siteConfig]);

  useEffect(() => {
    localStorage.setItem('eh_events_v2', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('eh_registrations', JSON.stringify(registrations));
  }, [registrations]);

  useEffect(() => {
    localStorage.setItem('eh_blogPosts_v2', JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    localStorage.setItem('eh_resources', JSON.stringify(resources));
  }, [resources]);

  useEffect(() => {
    localStorage.setItem('eh_announcements', JSON.stringify(announcements));
  }, [announcements]);

  useEffect(() => {
    localStorage.setItem('eh_dismissedAnnouncements', JSON.stringify(dismissedAnnouncements));
  }, [dismissedAnnouncements]);

  useEffect(() => {
    localStorage.setItem('eh_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem('eh_currentMember', JSON.stringify(currentMember));
  }, [currentMember]);

  useEffect(() => {
    localStorage.setItem('eh_newsletterEmails', JSON.stringify(newsletterEmails));
  }, [newsletterEmails]);

  useEffect(() => {
    localStorage.setItem('eh_contactInquiries', JSON.stringify(contactInquiries));
  }, [contactInquiries]);

  // Actions
  const updateSiteConfig = (cfg: SiteConfig) => {
    setSiteConfig(cfg);
  };

  const addEvent = (event: EventItem) => {
    setEvents(prev => [event, ...prev]);
  };

  const updateEvent = (updated: EventItem) => {
    setEvents(prev => prev.map(e => e.id === updated.id ? updated : e));
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  const registerForEvent = (regData: Omit<Registration, 'id' | 'registeredAt' | 'ticketCode' | 'status'>) => {
    const targetEvent = events.find(e => e.id === regData.eventId);
    if (!targetEvent) {
      return { success: false, message: 'Event not found.' };
    }

    // Check duplicate email for the same event
    const existing = registrations.find(r => r.eventId === regData.eventId && r.email.toLowerCase() === regData.email.toLowerCase() && r.status !== 'Cancelled');
    if (existing) {
      return { success: false, message: 'You have already registered for this event with this email address.' };
    }

    const isFull = targetEvent.registeredCount >= targetEvent.capacity;
    const ticketCode = 'EH-' + Math.random().toString(36).substring(2, 7).toUpperCase() + '-' + targetEvent.id.substring(0, 3).toUpperCase();

    const newReg: Registration = {
      ...regData,
      id: 'reg-' + Date.now(),
      registeredAt: new Date().toISOString().split('T')[0],
      ticketCode,
      status: isFull ? 'Waitlisted' : 'Confirmed'
    };

    setRegistrations(prev => [newReg, ...prev]);

    if (!isFull) {
      setEvents(prev => prev.map(e => e.id === targetEvent.id ? { ...e, registeredCount: e.registeredCount + 1 } : e));
    }

    return { 
      success: true, 
      registration: newReg, 
      message: isFull 
        ? 'This event has reached full capacity. You have been placed on the priority waitlist!' 
        : 'Registration successful! Your digital ticket pass has been generated.' 
    };
  };

  const cancelRegistration = (id: string) => {
    const targetReg = registrations.find(r => r.id === id);
    if (!targetReg) return;

    setRegistrations(prev => prev.map(r => r.id === id ? { ...r, status: 'Cancelled' } : r));
    if (targetReg.status === 'Confirmed') {
      setEvents(prev => prev.map(e => e.id === targetReg.eventId ? { ...e, registeredCount: Math.max(0, e.registeredCount - 1) } : e));
    }
  };

  const addBlogPost = (post: BlogPost) => {
    setBlogPosts(prev => [post, ...prev]);
  };

  const updateBlogPost = (post: BlogPost) => {
    setBlogPosts(prev => prev.map(p => p.id === post.id ? post : p));
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(p => p.id !== id));
  };

  const incrementResourceDownload = (id: string) => {
    setResources(prev => prev.map(r => r.id === id ? { ...r, downloadsCount: r.downloadsCount + 1 } : r));
  };

  const updateAnnouncement = (ann: Announcement) => {
    setAnnouncements(prev => prev.map(a => a.id === ann.id ? ann : a));
  };

  const dismissAnnouncement = (id: string) => {
    setDismissedAnnouncements(prev => [...prev, id]);
  };

  const addTestimonial = (test: Omit<Testimonial, 'id' | 'approved' | 'date'>) => {
    const newTest: Testimonial = {
      ...test,
      id: 'test-' + Date.now(),
      approved: false, // requires admin approval
      date: 'Just now'
    };
    setTestimonials(prev => [newTest, ...prev]);
  };

  const joinCommunity = (profileData: Omit<MemberProfile, 'id' | 'joinedDate'>) => {
    const profile: MemberProfile = {
      ...profileData,
      id: 'mem-' + Date.now(),
      joinedDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };
    setCurrentMember(profile);
    if (profileData.newsletterOptIn && !newsletterEmails.includes(profileData.email.toLowerCase())) {
      setNewsletterEmails(prev => [...prev, profileData.email.toLowerCase()]);
    }
    return { success: true, profile };
  };

  const logoutMember = () => {
    setCurrentMember(null);
  };

  const subscribeNewsletter = (email: string) => {
    const clean = email.trim().toLowerCase();
    if (!clean || !clean.includes('@')) {
      return { success: false, message: 'Please provide a valid email address.' };
    }
    if (newsletterEmails.includes(clean)) {
      return { success: true, message: 'You are already subscribed to the Elevate Her newsletter.' };
    }
    setNewsletterEmails(prev => [...prev, clean]);
    return { success: true, message: 'Thank you for joining our community newsletter!' };
  };

  const submitContactInquiry = (inquiry: Omit<ContactInquiry, 'id' | 'submittedAt' | 'status'>) => {
    const newInq: ContactInquiry = {
      ...inquiry,
      id: 'inq-' + Date.now(),
      submittedAt: new Date().toISOString().split('T')[0],
      status: 'New'
    };
    setContactInquiries(prev => [newInq, ...prev]);
  };

  const toggleUrdu = () => {
    setActiveUrdu(prev => !prev);
  };

  return (
    <AppContext.Provider value={{
      siteConfig,
      updateSiteConfig,
      events,
      addEvent,
      updateEvent,
      deleteEvent,
      registrations,
      registerForEvent,
      cancelRegistration,
      blogPosts,
      addBlogPost,
      updateBlogPost,
      deleteBlogPost,
      resources,
      incrementResourceDownload,
      announcements,
      updateAnnouncement,
      dismissAnnouncement,
      dismissedAnnouncements,
      testimonials,
      addTestimonial,
      currentMember,
      joinCommunity,
      logoutMember,
      newsletterEmails,
      subscribeNewsletter,
      contactInquiries,
      submitContactInquiry,
      activeUrdu,
      toggleUrdu
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
