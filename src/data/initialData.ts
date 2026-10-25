import { 
  EventItem, 
  BlogPost, 
  ResourceItem, 
  Announcement, 
  Testimonial, 
  SiteConfig 
} from '../types';

export const initialSiteConfig: SiteConfig = {
  brandName: 'Elevate Her',
  tagline: 'Connect. Learn. Grow.',
  mission: 'To create a welcoming community where Pakistani women build meaningful relationships, discover opportunities, learn new skills, nurture their well-being, and grow together.',
  primaryMarket: 'Pakistan',
  defaultCurrency: 'PKR',
  defaultTimezone: 'Asia/Karachi (PKT, UTC+05:00)',
  officialEmail: 'hello@elevateher.pk',
  phoneCountryCode: '+92',
  founderName: 'Ayesha Tariq',
  founderRole: 'Founder & Community Lead',
  founderBio: 'Ayesha Tariq is a cultural strategist, former management consultant, and community builder. Having navigated corporate life and independent creative entrepreneurship in Karachi and Lahore, she founded Elevate Her to bridge the gap between ambitious Pakistani women seeking sincere mentorship, wellness, and authentic sisterhood.',
  instagramHandle: '@elevateher.pk',
  linkedinHandle: 'elevate-her-pakistan'
};

export const initialAnnouncements: Announcement[] = [
  {
    id: 'ann-1',
    message: '✨ Registration open for the Spring Sisterhood Brunch in Karachi (Clifton) & Mindful Morning Circle!',
    linkText: 'Explore Events',
    linkPage: 'events',
    priority: 'normal',
    active: true,
  }
];

export const initialEvents: EventItem[] = [
  {
    id: 'evt-1',
    title: 'The Karachi Sisterhood Brunch & Networking Circle',
    tagline: 'Authentic conversations, purposeful connections & artisanal morning tea in Clifton, Karachi',
    description: 'An intimate gathering for modern Pakistani working women, tech professionals, creatives, and founders to connect without transactional pressure over a curated three-course brunch.',
    longDescription: 'Join Elevate Her for our signature quarterly Sisterhood Brunch in Karachi. Set in a breezy, sunlit patio in Clifton, this gathering is designed to nurture deep, authentic relationships among modern Pakistani working women. We explore career pivots, creative agency building, navigating corporate ladders in Karachi, and finding like-minded allies. Every attendee receives an Intentional Reflection Journal and participates in guided peer mentorship prompts.',
    category: 'Brunch & Social',
    city: 'Karachi',
    venueName: 'The Veranda Glasshouse Cafe',
    venueAddress: 'Block 4, Clifton (Near Bilawal Roundabout), Karachi',
    isOnline: false,
    date: '2026-11-15',
    displayDate: 'Sunday, November 15, 2026',
    startTime: '11:00 AM',
    endTime: '02:30 PM',
    timezone: 'PKT (Asia/Karachi, UTC+05:00)',
    pricePKR: 2800,
    capacity: 28,
    registeredCount: 19,
    featured: true,
    hostName: 'Ayesha Tariq',
    hostRole: 'Founder, Elevate Her',
    speakers: [
      {
        name: 'Zainab Qureshi',
        role: 'Creative Director & Brand Consultant, Karachi',
        bio: 'Over a decade leading design studios and product teams across South Asia, championing female-led ventures.'
      },
      {
        name: 'Dr. Mariam Bilal',
        role: 'Holistic Health & Wellness Educator',
        bio: 'Advocating for evidence-based hormonal and nervous system wellness for working Pakistani women.'
      }
    ],
    agenda: [
      { time: '11:00 AM', activity: 'Welcome Pink Rose Mocktails & Kashmiri Chai Reception' },
      { time: '11:30 AM', activity: 'Opening Reflection: "Redefining Success on Our Own Terms in Karachi"' },
      { time: '12:15 PM', activity: 'Curated Artisan Brunch & Small-Group Guided Prompts' },
      { time: '01:30 PM', activity: 'Peer Mentorship & Career Opportunity Exchange Circle' },
      { time: '02:15 PM', activity: 'Closing Intentions & Community Group Photo' }
    ],
    perks: [
      'Gourmet 3-course brunch & specialty tea selection',
      'Elevate Her linen-bound Intentional Reflection Journal',
      'Directory access to fellow Karachi working women and leaders',
      'Curated floral gift bouquet of fresh Karachi Motia and roses'
    ],
    imageUrl: 'https://raw.githubusercontent.com/kanasim26-droid/ElevateHer/main/public/assets/images/karachi_women_hero_1792856473621.jpg',
    status: 'Upcoming',
    deadlineDate: '2026-11-12'
  },
  {
    id: 'evt-2',
    title: 'Mindful Morning: Breathwork, Reflection & Tea Circle',
    tagline: 'Gentle nervous system reset and reflective journaling overlooking Sea View, Karachi',
    description: 'A soothing sanctuary morning in Clifton designed to help modern working women decompress from fast-paced corporate deadlines, restore clarity, and practice mindful stillness.',
    longDescription: 'In the fast-paced business hub of Karachi, modern working women carry high-stakes deliverables while managing family bonds, often leaving their own nervous systems in chronic fight-or-flight. This Saturday morning circle at Studio 88 Clifton offers somatic breathing techniques, guided silence, and reflective journaling alongside fresh jasmine tea.',
    category: 'Wellness & Circles',
    city: 'Karachi',
    venueName: 'Studio 88 Seaside Sanctuary',
    venueAddress: 'Block 4, Clifton (Overlooking Sea View), Karachi',
    isOnline: false,
    date: '2026-11-21',
    displayDate: 'Saturday, November 21, 2026',
    startTime: '09:30 AM',
    endTime: '12:00 PM',
    timezone: 'PKT (Asia/Karachi, UTC+05:00)',
    pricePKR: 1500,
    capacity: 22,
    registeredCount: 15,
    featured: true,
    hostName: 'Sana Rizvi',
    hostRole: 'Karachi Chapter Wellness Co-Lead',
    speakers: [
      {
        name: 'Sana Rizvi',
        role: 'Certified Mindfulness & Breathwork Facilitator',
        bio: 'Specializing in restorative somatic movement and burnout recovery for corporate professionals.'
      }
    ],
    agenda: [
      { time: '09:30 AM', activity: 'Arrival, coastal breeze, fresh Motia jasmine water' },
      { time: '09:45 AM', activity: 'Grounding breathwork for anxiety and mental fatigue' },
      { time: '10:30 AM', activity: 'Guided reflective prompt: "Reclaiming My Inner Stillness"' },
      { time: '11:15 AM', activity: 'Slow organic herbal tea bar & peer listening circle' },
      { time: '11:50 AM', activity: 'Take-home grounding practices and goodbye' }
    ],
    perks: [
      'Yoga mats and plush floor cushions provided',
      'Organic herbal teas & light seasonal dried fruits/nuts',
      'Printed 7-Day Mindful Breathing pocket guide'
    ],
    imageUrl: 'https://raw.githubusercontent.com/kanasim26-droid/ElevateHer/main/public/assets/images/karachi_women_wellness_1792856475702.jpg',
    status: 'Upcoming',
    deadlineDate: '2026-11-19'
  },
  {
    id: 'evt-3',
    title: 'Women in Leadership: Career Sovereignty & Wealth Building',
    tagline: 'Practical financial literacy, investments, and salary negotiation masterclass in Karachi',
    description: 'Demystifying personal budgeting, mutual funds, fintech portfolios, freelance foreign currency earnings, and corporate leadership.',
    longDescription: 'Financial clarity is the bedrock of personal autonomy and career freedom. Led by experienced female fintech directors and wealth strategists in Karachi, this workshop demystifies local investment avenues (Pakistan Stock Exchange funds, Sharia-compliant wealth plans, freelance foreign reserves) into clear, actionable steps.',
    category: 'Career & Leadership',
    city: 'Karachi',
    venueName: 'The Hive Executive Pavilion',
    venueAddress: 'Main Clifton Road, Block 5, Karachi',
    isOnline: false,
    date: '2026-11-28',
    displayDate: 'Saturday, November 28, 2026',
    startTime: '02:30 PM',
    endTime: '05:30 PM',
    timezone: 'PKT (Asia/Karachi, UTC+05:00)',
    pricePKR: 2000,
    capacity: 35,
    registeredCount: 31,
    featured: true,
    hostName: 'Fatima Hasan, CFA',
    hostRole: 'Investment Director & Mentor',
    speakers: [
      {
        name: 'Fatima Hasan, CFA',
        role: 'Portfolio Strategist',
        bio: '12+ years in asset management educating working women on financial sovereignty.'
      },
      {
        name: 'Barrister Hiba Khan',
        role: 'Corporate & Commercial Attorney',
        bio: 'Specialist in employment contracts, startup equity, and women property rights in Pakistan.'
      }
    ],
    agenda: [
      { time: '02:30 PM', activity: 'Registration & Specialty Coffee Bar' },
      { time: '03:00 PM', activity: 'The Working Woman Financial Audit: Budgeting & Emergency Funds' },
      { time: '03:45 PM', activity: 'Smart Investing in Pakistan: Mutual Funds, Gold, & Passive Income' },
      { time: '04:30 PM', activity: 'Salary & Client Rate Negotiation Roleplay' },
      { time: '05:00 PM', activity: 'Interactive Q&A and 1-on-1 breakout mentoring' }
    ],
    perks: [
      'Comprehensive Pakistani Personal Finance Spreadsheet Template',
      'Checklist of legal safeguards and digital banking precautions',
      'Artisanal coffee and savoury high-tea refreshments'
    ],
    imageUrl: 'https://raw.githubusercontent.com/kanasim26-droid/ElevateHer/main/public/assets/images/karachi_women_summit_1792856475136.jpg',
    status: 'Upcoming',
    deadlineDate: '2026-11-26'
  },
  {
    id: 'evt-4',
    title: 'Designing Your Intentional Year: Creative Journaling & Life Vision',
    tagline: 'An accessible virtual masterclass open to women across Pakistan and the diaspora',
    description: 'Transform vague hopes into a concrete, nourishing life blueprint for your career, health, creative pursuits, and family life.',
    longDescription: 'Whether you are a university student planning your career launch, a working professional re-evaluating your life direction, or a mother seeking creative revitalisation, this interactive workshop guides you through our signature 5-step Intentional Life Matrix.',
    category: 'Workshops',
    city: 'Online',
    venueName: 'Elevate Her Live Virtual Studio',
    venueAddress: 'Interactive Zoom Video (Private Link provided upon registration)',
    isOnline: true,
    date: '2026-12-05',
    displayDate: 'Saturday, December 5, 2026',
    startTime: '04:00 PM',
    endTime: '06:00 PM',
    timezone: 'PKT (Asia/Karachi, UTC+05:00)',
    pricePKR: 0,
    capacity: 100,
    registeredCount: 78,
    featured: false,
    hostName: 'Ayesha Tariq',
    hostRole: 'Founder, Elevate Her',
    speakers: [
      {
        name: 'Mahnoor Akram',
        role: 'Life Transition Coach & Author',
        bio: 'Helping modern South Asian women cultivate calm self-leadership and clear boundaries.'
      }
    ],
    agenda: [
      { time: '04:00 PM', activity: 'Welcome & Virtual Room Grounding' },
      { time: '04:15 PM', activity: 'Deconstructing External Expectations vs Personal Truth' },
      { time: '04:45 PM', activity: 'Live Journaling Exercise: The 4 Quadrants of Flourishing' },
      { time: '05:30 PM', activity: 'Live Community Shares & Small Breakout Rooms' }
    ],
    perks: [
      'High-resolution downloadable Life Vision Workbook (Printable PDF)',
      '14-day digital access to the session recording',
      'Invitation to the private Elevate Her WhatsApp Community Circle'
    ],
    imageUrl: 'https://raw.githubusercontent.com/kanasim26-droid/ElevateHer/main/public/assets/images/karachi_women_wellness_1792856475702.jpg',
    status: 'Upcoming',
    deadlineDate: '2026-12-04'
  },
  {
    id: 'evt-5',
    title: 'Women Founders & Freelance Creators Mastermind',
    tagline: 'Scale your studio, navigate payment gateways, and build collaborative alliances in Karachi',
    description: 'A focused, peer-to-peer mastermind for female founders, design studio owners, and senior independent specialists in Pakistan.',
    longDescription: 'Running a venture as a woman in Karachi requires grit, savvy, and reliable alliances. This intimate roundtable convenes 18 female entrepreneurs across design, tech, education, and e-commerce to share vendor contacts, tackle cash flow management, discuss hiring, and explore cross-brand partnerships.',
    category: 'Networking',
    city: 'Karachi',
    venueName: 'Clifton Co-Lab Studio',
    venueAddress: 'DHA Phase 6 Commercial (Near Bukhari), Karachi',
    isOnline: false,
    date: '2026-12-12',
    displayDate: 'Saturday, December 12, 2026',
    startTime: '03:00 PM',
    endTime: '06:00 PM',
    timezone: 'PKT (Asia/Karachi, UTC+05:00)',
    pricePKR: 2500,
    capacity: 20,
    registeredCount: 16,
    featured: false,
    hostName: 'Anum Sheikh',
    hostRole: 'Karachi Chapter Entrepreneurship Lead',
    speakers: [
      {
        name: 'Anum Sheikh',
        role: 'Founder of Pret Studio & E-Commerce Strategist',
        bio: 'Bootstrapped an ethical modest apparel line exported to 14 countries from Karachi.'
      }
    ],
    agenda: [
      { time: '03:00 PM', activity: 'Arrival & artisanal chai & savory pastries' },
      { time: '03:30 PM', activity: 'Lightning founder case studies: Overcoming local payment & courier bottlenecks' },
      { time: '04:15 PM', activity: 'Mastermind Hot Seats: Bring 1 current challenge for collective feedback' },
      { time: '05:30 PM', activity: 'Direct collaboration matchmaking' }
    ],
    perks: [
      'Access to vetted supplier and vendor referral list in Pakistan',
      'Direct intro to guest angel investors and grant consultants',
      'Artisan high tea service'
    ],
    imageUrl: 'https://raw.githubusercontent.com/kanasim26-droid/ElevateHer/main/public/assets/images/karachi_women_meetup_1792856474355.jpg',
    status: 'Upcoming',
    deadlineDate: '2026-12-10'
  }
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: '3 Simple Habits for Better Energy and a Healthier Daily Routine',
    slug: '3-simple-habits-for-better-energy-healthy-routine',
    subtitle: 'Nourishing your physical and emotional reserves amidst the hustle of Karachi & Lahore.',
    category: 'Healthy Daily Habits',
    authorName: 'Dr. Mariam Bilal',
    authorRole: 'Integrative Wellness Physician',
    publishedDate: 'October 18, 2026',
    readTimeMinutes: 5,
    featured: true,
    summary: 'When life in Pakistan feels fast-paced and demanding, true vitality begins not with dramatic overhauls, but with gentle, consistent rhythms in our morning sunlight, hydration, and evening digital boundaries.',
    imageUrl: 'https://raw.githubusercontent.com/kanasim26-droid/ElevateHer/main/public/assets/images/karachi_women_wellness_1792856475702.jpg',
    content: [
      'In our conversations with hundreds of Pakistani working women at Elevate Her in Karachi and Lahore, one recurrent theme echoes continuously: exhaustion disguised as productivity. We balance family commitments, professional deadlines, traffic commutes, and social obligations, often leaving our own wellness at the bottom of the priority stack.',
      'Yet wellness need not be an elaborate, expensive luxury. By grounding our biological rhythms in three fundamental shifts, we can rebuild resilience from the inside out.',
      'Habit 1: Reclaim the First 20 Minutes of Natural Morning Light. In urban Pakistani cities, we often wake directly into phone screens, artificial indoor lighting, or immediate kitchen chores. Stepping out into your veranda, balcony, or apartment terrace within an hour of sunrise sets your circadian rhythm, balancing cortisol levels and improving sleep quality by nightfall.',
      'Habit 2: Mindful Hydration Before Caffeine. Before reaching for the morning cup of Karak chai or espresso, gift your body a tall glass of lukewarm water infused with lemon or a pinch of pink Himalayan rock salt. It restores cellular hydration and aids digestion.',
      'Habit 3: The Sacred 9:30 PM Digital Sunset. Disconnecting from group family chats and social feeds at least 45 minutes prior to sleep allows your nervous system to down-regulate from hyper-vigilance into restorative parasympathetic rest.'
    ],
    takeaways: [
      'Circadian alignment with morning sunlight reduces afternoon fatigue.',
      'Start the day with warm hydration prior to tea or coffee.',
      'Protect an evening digital quiet hour to safeguard restorative sleep.'
    ],
    tags: ['Energy', 'Routines', 'Morning Rhythms', 'Rest']
  },
  {
    id: 'blog-2',
    title: 'The Art of Making Time for Yourself (Without Guilt)',
    slug: 'art-of-making-time-for-yourself-without-guilt',
    subtitle: 'Navigating South Asian familial expectations while honoring your need for personal solitude and restoration.',
    category: 'Self-Care',
    authorName: 'Ayesha Tariq',
    authorRole: 'Founder, Elevate Her',
    publishedDate: 'October 12, 2026',
    readTimeMinutes: 7,
    featured: true,
    summary: 'For many Pakistani women, putting ourselves first feels instinctively selfish. Here is how we transform self-care from a guilty indulgence into a foundational responsibility.',
    imageUrl: 'https://raw.githubusercontent.com/kanasim26-droid/ElevateHer/main/public/assets/images/karachi_women_hero_1792856473621.jpg',
    content: [
      'Culturally, South Asian womanhood has historically celebrated self-sacrifice as the highest virtue. We applaud the mother who eats last, the sister who works until 2 AM without complaint, and the daughter who suppresses her dreams to keep everyone comfortable.',
      'At Elevate Her, we believe that an empty cup cannot pour kindness, wisdom, or love. When we operate in chronic depletion, our relationships suffer, our patience frays, and our health deteriorates silently.',
      'Making time for yourself does not mean neglecting your loved ones or abandoning cultural bonds. It means establishing loving, transparent boundaries that preserve your mental sanity.',
      'Begin by naming a non-negotiable 30 minutes each day as your "sacred sanctuary." Whether that is reading with a cup of chamomile tea, journaling in silence, or taking a quiet evening walk, communicate this kindly to your household as an essential wellness necessity.'
    ],
    takeaways: [
      'Self-care is not selfish; it is preventative maintenance for the soul.',
      'Communicate boundaries with gentleness and clarity rather than resentment.',
      'Small daily moments of solitude recharge emotional resilience far better than rare vacations.'
    ],
    tags: ['Self-Care', 'Boundaries', 'Mindset', 'Emotional Health']
  },
  {
    id: 'blog-3',
    title: 'How to Build Meaningful Friendships as an Adult Woman in Pakistan',
    slug: 'build-meaningful-friendships-adult-women-pakistan',
    subtitle: 'Moving beyond surface acquaintances to cultivate deep, trustworthy, and uplifting female sisterhood.',
    category: 'Relationships and Community',
    authorName: 'Sana Rizvi',
    authorRole: 'Community Facilitator',
    publishedDate: 'September 28, 2026',
    readTimeMinutes: 6,
    featured: false,
    summary: 'Making close friends after university or marriage can feel daunting. Here is a practical framework for creating safe, mutually inspiring connections in cities like Karachi and Lahore.',
    imageUrl: 'https://raw.githubusercontent.com/kanasim26-droid/ElevateHer/main/public/assets/images/karachi_women_meetup_1792856474355.jpg',
    content: [
      'During school and college, friendships form almost serendipitously through proximity and shared schedules. But as we enter our mid-twenties, thirties, and beyond, adult life in Pakistan often scatters our social circles across different cities, responsibilities, and life stages.',
      'Many women share with us that while they have hundreds of acquaintances on social media or wedding guest lists, they lack friends they can call in tears at midnight or share their rawest entrepreneurial ideas with without fear of judgment.',
      'Deep friendships require three essential elements: consistency, vulnerability, and mutual goodwill. Participating in value-aligned spaces—like Elevate Her workshops, book clubs, or volunteer initiatives—puts you in contact with women who share your hunger for growth.',
      'Take the courageous first step: follow up with someone you clicked with at an event. Invite them for tea. Ask genuine questions about their passions rather than superficial small talk. Sincere friendship is built one candid conversation at a time.'
    ],
    takeaways: [
      'Proximity and shared values are the natural catalysts for authentic connection.',
      'Vulnerability signals safety and invites true reciprocity.',
      'Consistency turns one-time coffee chats into lifelong sisterhood.'
    ],
    tags: ['Sisterhood', 'Friendship', 'Belonging', 'Community']
  },
  {
    id: 'blog-4',
    title: 'Small Steps to Build Confidence Every Day',
    slug: 'small-steps-build-confidence-every-day',
    subtitle: 'Quiet, steadfast self-assurance that doesn’t rely on loud extroversion or perfection.',
    category: 'Confidence and Personal Growth',
    authorName: 'Zainab Qureshi',
    authorRole: 'Creative Director & Mentor',
    publishedDate: 'September 20, 2026',
    readTimeMinutes: 5,
    featured: false,
    summary: 'Confidence is not a personality trait you are born with—it is a muscle built through small, repeated promises kept to yourself.',
    imageUrl: 'https://raw.githubusercontent.com/kanasim26-droid/ElevateHer/main/public/assets/images/karachi_women_summit_1792856475136.jpg',
    content: [
      'In professional meetings and family gatherings alike, women frequently experience the quiet sting of imposter syndrome. We double-check our emails five times, second-guess our opinions in conference rooms, and apologize before asking basic clarifying questions.',
      'True confidence does not mean being the loudest voice in the room. It is the calm, grounded belief that your perspective is valid, your experience is real, and your voice deserves to take up space.',
      'Practice keeping microscopic promises to yourself: if you commit to waking up at 7:00 AM, do it. When you honor your word to yourself, your subconscious mind begins to trust your own capability.',
      'Furthermore, replace reflex apologies ("Sorry to bother you...") with gratitude ("Thank you for your time on this"). Notice how shifting your language immediately recalibrates your presence.'
    ],
    takeaways: [
      'Self-trust is earned through consistent micro-commitments.',
      'Shift reflex apologies to respectful expressions of gratitude.',
      'Quiet presence commands more respect than forced bravado.'
    ],
    tags: ['Confidence', 'Career', 'Mindset', 'Growth']
  }
];

export const initialResources: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'Weekly Self-Care & Habit Nourishment Tracker',
    category: 'Habits & Wellness',
    description: 'An elegant, gentle weekly planning sheet designed to track sleep, hydration, quiet reflection, and joyful movement without punitive scores.',
    pages: 2,
    format: 'Interactive Sheet',
    isMemberOnly: false,
    downloadsCount: 342,
    contentTemplate: {
      subtitle: 'Nurturing Mind, Body & Spirit — Elevate Her Community',
      instructions: 'Print or save this tracker. Focus on celebration rather than perfection. Fill in 3 core nourishing habits you want to cultivate this week.',
      sections: [
        {
          heading: 'Core Nourishment Anchors',
          items: [
            'Morning Sunlight & Hydration (10–15 mins outdoors with warm water)',
            'Intentional Movement (Brisk walk, yoga, stretching, or light workout)',
            'Quiet Reflection & Journaling (10 minutes free writing without screens)',
            'Nourishing Whole Foods (Balanced homemade meals & herbal hydration)',
            'Digital Sunset (Phones away 45 mins before bedtime)'
          ]
        },
        {
          heading: 'Weekly Reflection Prompts',
          items: [
            'What brought me genuine joy and peace this week?',
            'Where did I feel drained, and what boundaries can I adjust?',
            'One thing I am proud of accomplishing or navigating:'
          ]
        }
      ]
    }
  },
  {
    id: 'res-2',
    title: 'Evening Mindful Journaling & Gratitude Sheet',
    category: 'Mindfulness & Journaling',
    description: 'Guided prompts to help you close your day with clarity, release work anxieties, and acknowledge the quiet blessings in your life.',
    pages: 1,
    format: 'Interactive Sheet',
    isMemberOnly: false,
    downloadsCount: 518,
    contentTemplate: {
      subtitle: 'Evening Sanctuary Practice — Elevate Her Sisterhood',
      instructions: 'Light a candle or brew your favourite tea. Spend 5 to 7 minutes answering these questions honestly before sleeping.',
      sections: [
        {
          heading: 'The Evening Release & Gratitude Cadence',
          items: [
            'Three specific moments I am grateful for today (big or small):',
            'Something I chose to let go of today instead of carrying into tomorrow:',
            'How did I show kindness or patience to myself or someone else?',
            'My intention for restful, restorative sleep tonight:'
          ]
        }
      ]
    }
  },
  {
    id: 'res-3',
    title: 'Pakistani Women in Business: The 30-Second Introduction Matrix',
    category: 'Networking & Career',
    description: 'A structured worksheet to craft a compelling, authentic introduction for networking meetups, panels, and client pitches.',
    pages: 2,
    format: 'Interactive Sheet',
    isMemberOnly: false,
    downloadsCount: 289,
    contentTemplate: {
      subtitle: 'Own Your Story with Poise & Clarity — Elevate Her Professional Series',
      instructions: 'Use this framework to introduce yourself with warmth and impact without feeling boastful or shrinking your accomplishments.',
      sections: [
        {
          heading: 'The 4-Part Introduction Architecture',
          items: [
            '1. Who You Are: "Hello, I am [Name], based in Karachi/Lahore."',
            '2. What Problem You Solve: "I help [audience/clients] achieve [specific outcome] through [your craft/service]."',
            '3. What Excites You Right Now: "Currently, I am working on [exciting project/skill] and exploring [topic]."',
            '4. The Sincere Connect: "I would love to learn more about your experience in [their domain]."'
          ]
        },
        {
          heading: 'Common Pitfalls to Avoid',
          items: [
            'Avoid minimizing words like "I just do a little freelance..."',
            'Avoid reciting a chronological resume; focus on value and curiosity',
            'Remember that eye contact, a warm smile, and active listening create lasting rapport'
          ]
        }
      ]
    }
  },
  {
    id: 'res-4',
    title: 'Life Balance Wheel & Goal Alignment Blueprint',
    category: 'Personal Growth',
    description: 'Assess 8 key life dimensions (Health, Relationships, Career, Finance, Solitude, Learning, Creativity, Community) and set intentional priorities.',
    pages: 3,
    format: 'Downloadable Guide',
    isMemberOnly: false,
    downloadsCount: 412,
    contentTemplate: {
      subtitle: 'Holistic Flourishing for the Modern Woman — Elevate Her',
      instructions: 'Rate your current satisfaction (1 to 10) in each dimension, then identify 1 intentional shift for the upcoming quarter.',
      sections: [
        {
          heading: 'The 8 Dimensions of Well-Being',
          items: [
            '1. Physical Health & Vitality (Sleep, nutrition, energy)',
            '2. Emotional & Spiritual Peace (Mindfulness, faith, solitude)',
            '3. Family & Primary Bonds (Love, warmth, presence)',
            '4. Deep Female Friendships & Community (Sisterhood, support)',
            '5. Career, Craft & Purpose (Professional growth, autonomy)',
            '6. Financial Health & Sovereignty (Savings, independence, investments)',
            '7. Creative Expression & Hobbies (Art, writing, cooking, beauty)',
            '8. Rest, Play & Recreation (Laughter, downtime, travel)'
          ]
        }
      ]
    }
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Alizeh Farooq',
    city: 'Karachi',
    role: 'Fintech Product Lead & Strategist',
    quote: 'Attending the Sisterhood Brunch in Clifton was transformative. In Karachi\'s intense tech sector, finding ambitious Pakistani women who speak openly about career pressure, equity negotiation, and mental peace is rare. Elevate Her is a genuine breath of fresh air.',
    eventAttended: 'Sisterhood Brunch Clifton Karachi',
    approved: true,
    date: 'October 2026'
  },
  {
    id: 'test-2',
    name: 'Maha Siddiqui',
    city: 'Lahore',
    role: 'Architect & Interior Designer',
    quote: 'The sense of warmth and zero-pretension blew me away. In the design industry, competition can feel isolating. Meeting sisters who listened with sincere empathy and shared vendor resources openly changed my entire outlook.',
    eventAttended: 'Sisterhood Tea Circle Lahore',
    approved: true,
    date: 'September 2026'
  },
  {
    id: 'test-3',
    name: 'Khadija Rehman',
    city: 'Islamabad',
    role: 'Public Policy Researcher & Writer',
    quote: 'What makes Elevate Her different is the complete absence of pretension. Whether you are wearing a modest hijab or contemporary silk pret, you feel an instant warm embrace of sisterhood.',
    eventAttended: 'Financial Sovereignty Masterclass',
    approved: true,
    date: 'August 2026'
  }
];
