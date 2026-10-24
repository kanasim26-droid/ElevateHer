export type City = 'Lahore' | 'Karachi' | 'Islamabad' | 'Rawalpindi' | 'Peshawar' | 'Faisalabad' | 'Online';

export type EventCategory = 
  | 'Networking'
  | 'Workshops'
  | 'Wellness & Circles'
  | 'Career & Leadership'
  | 'Brunch & Social'
  | 'Creative & Book Club'
  | 'Special Celebrations';

export interface EventItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: EventCategory;
  city: City;
  venueName: string;
  venueAddress: string;
  isOnline: boolean;
  date: string; // YYYY-MM-DD
  displayDate: string;
  startTime: string; // e.g. "03:00 PM"
  endTime: string;   // e.g. "06:00 PM"
  timezone: string;  // "PKT (Asia/Karachi, UTC+05:00)"
  pricePKR: number;  // 0 for free
  capacity: number;
  registeredCount: number;
  featured: boolean;
  hostName: string;
  hostRole: string;
  speakers?: Array<{ name: string; role: string; bio: string }>;
  agenda?: Array<{ time: string; activity: string }>;
  perks: string[];
  imageUrl: string;
  status: 'Upcoming' | 'Sold Out' | 'Waitlist Only' | 'Completed';
  deadlineDate: string;
}

export interface Registration {
  id: string;
  eventId: string;
  eventTitle: string;
  eventDate: string;
  eventVenue: string;
  fullName: string;
  email: string;
  phone: string;
  city: City;
  profession: string;
  dietaryRequirements?: string;
  registeredAt: string;
  ticketCode: string;
  status: 'Confirmed' | 'Waitlisted' | 'Cancelled';
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  category: string;
  authorName: string;
  authorRole: string;
  authorAvatar?: string;
  publishedDate: string;
  readTimeMinutes: number;
  featured: boolean;
  imageUrl: string;
  summary: string;
  content: string[]; // paragraph list or markdown-like sections
  takeaways: string[];
  tags: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Habits & Wellness' | 'Mindfulness & Journaling' | 'Networking & Career' | 'Personal Growth';
  description: string;
  pages: number;
  format: 'Interactive Sheet' | 'Downloadable Guide' | 'Checklist' | 'Reading List';
  isMemberOnly: boolean;
  downloadsCount: number;
  contentTemplate: {
    subtitle: string;
    instructions: string;
    sections: Array<{
      heading: string;
      items: string[];
    }>;
  };
}

export interface Announcement {
  id: string;
  message: string;
  linkText?: string;
  linkPage?: string;
  priority: 'normal' | 'high';
  active: boolean;
  scheduledUntil?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: City;
  role: string;
  quote: string;
  eventAttended: string;
  approved: boolean;
  date: string;
}

export interface MemberProfile {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  city: City;
  profession?: string;
  interests: string[];
  joinedDate: string;
  newsletterOptIn: boolean;
}

export interface ContactInquiry {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  city?: City;
  inquiryType: 'General Question' | 'Partnership & Collaboration' | 'Speaker Application' | 'Venue Host' | 'Press & Media';
  message: string;
  submittedAt: string;
  status: 'New' | 'Replied' | 'Archived';
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  mission: string;
  primaryMarket: string;
  defaultCurrency: string;
  defaultTimezone: string;
  officialEmail: string;
  phoneCountryCode: string;
  founderName: string;
  founderRole: string;
  founderBio: string;
  instagramHandle: string;
  linkedinHandle: string;
}
