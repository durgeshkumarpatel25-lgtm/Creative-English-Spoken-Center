export interface Course {
  id: string;
  title: string;
  hindiTitle: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  targetAudience: string;
  badge?: string;
  feeEstimate: string;
  timings: string;
  description: string;
  outcomes: string[];
  icon: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  numericValue: number;
  suffix: string;
  description: string;
  icon: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  hindiTitle: string;
  description: string;
  icon: string;
  highlight: string;
}

export interface TimelineStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  course: string;
  rating: number;
  quote: string;
  hindiQuote?: string;
  avatarPlaceholder: string;
  isSamplePlaceholder: boolean;
}

export interface BatchItem {
  id: string;
  courseTitle: string;
  duration: string;
  batchTiming: string;
  mode: "Offline" | "Hybrid" | "Special";
  fee: string;
  status: "Enrolling Now" | "Filling Fast" | "Weekend Only";
  recommendedFor: string;
}

export interface FaqItem {
  id: string;
  question: string;
  hindiQuestion?: string;
  answer: string;
  category: "Admission" | "Course" | "Eligibility" | "Batches";
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  keywords: string[];
  content: string;
}

export const siteConfig = {
  // ===========================================================================
  // 1. BUSINESS DETAILS & NAP (Used across Header, Footer, Contact & Schema)
  // ===========================================================================
  name: "Creative English Spoken Center",
  shortName: "Creative English",
  tagline: "Master Spoken English & Public Speaking in Ambikapur!",
  subheadline:
    "Build rock-solid confidence, fluent pronunciation, and interview-ready communication skills with Surguja's leading English training institute.",
  hindiTagline: "अंग्रेजी बोलना सीखें, आत्मविश्वास के साथ — अंबिकापुर का प्रतिष्ठित संस्थान",
  
  contact: {
    phone: "+91 73545 23597",
    phoneDisplay: "+91 73545 23597",
    phoneTel: "+917354523597",
    whatsappNumber: "917354523597",
    email: "info@creativeenglishambikapur.com",
    address: {
      street: "Banaras Road, near Renuka Girls Hostel, Holy Cross College Road",
      locality: "Holy Cross College Road",
      landmark: "Near Renuka Girls Hostel",
      city: "Ambikapur",
      district: "Surguja",
      state: "Chhattisgarh",
      pincode: "497001",
      country: "India",
      fullAddress:
        "Banaras Road, near Renuka Girls Hostel, Holy Cross College Road, Ambikapur, Chhattisgarh 497001, India",
    },
    geo: {
      latitude: "23.1200",
      longitude: "83.1950",
    },
    openingHours: [
      { days: "Monday to Saturday", hours: "7:00 AM – 8:00 PM" },
      { days: "Sunday", hours: "9:00 AM – 1:00 PM (Special Doubt & Practice Sessions)" },
    ],
    // Clean embed URL for Google Maps near Holy Cross College Road / Banaras Road Ambikapur
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14695.158223689408!2d83.187895!3d23.123281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3989cbf446d65427%3A0xb3280c2fbfce7ad7!2sHoly%20Cross%20Women&#39;s%20College!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    mapDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Banaras+Road+Holy+Cross+College+Road+Ambikapur+Chhattisgarh+497001",
  },

  socials: {
    facebook: "https://facebook.com/creativeenglishambikapur",
    instagram: "https://instagram.com/creativeenglishambikapur",
    youtube: "https://youtube.com/@creativeenglishambikapur",
    whatsappChannel: "https://wa.me/917354523597",
  },

  urls: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://creativeenglishambikapur.com",
    demoFormAnchor: "#free-demo",
  },

  // ===========================================================================
  // 2. HERO & TRUST BADGES
  // ===========================================================================
  hero: {
    badge: "⭐ Ambikapur's Most Trusted English Academy",
    trustBadges: [
      "500+ Confident Students",
      "Practical Group Discussions",
      "Personalized Mentorship",
      "100% Speaking-First Method",
    ],
    floatingStats: [
      { label: "Speaking Practice", value: "Daily 60 Mins", icon: "Mic" },
      { label: "Student Rating", value: "4.9 / 5.0 ⭐", icon: "Star" },
      { label: "Batch Size", value: "Max 15 Students", icon: "Users" },
    ],
  },

  // ===========================================================================
  // 3. QUICK STATS STRIP (Animated Counters)
  // EDITABLE NOTE: Owner can freely adjust these numbers as the institute grows.
  // ===========================================================================
  stats: [
    {
      id: "students",
      label: "Students Trained",
      value: "500+",
      numericValue: 500,
      suffix: "+",
      description: "School & college youth, aspirants & professionals",
      icon: "GraduationCap",
    },
    {
      id: "experience",
      label: "Years of Excellence",
      value: "6+",
      numericValue: 6,
      suffix: "+",
      description: "Serving Ambikapur & Surguja district",
      icon: "Award",
    },
    {
      id: "batches",
      label: "Batches Completed",
      value: "45+",
      numericValue: 45,
      suffix: "+",
      description: "From beginner levels to fluency mastery",
      icon: "BookOpenCheck",
    },
    {
      id: "successRate",
      label: "Confidence Success Rate",
      value: "98%",
      numericValue: 98,
      suffix: "%",
      description: "Overcame hesitation within 45 days",
      icon: "TrendingUp",
    },
  ] as StatItem[],

  // ===========================================================================
  // 4. COURSES OFFERED (8 Key Programs)
  // Each course includes WhatsApp enquiry pre-fill message
  // ===========================================================================
  courses: [
    {
      id: "basic-spoken-english",
      title: "Basic Spoken English",
      hindiTitle: "बेसिक स्पोकन इंग्लिश (शुरुआती स्तर)",
      duration: "60 Days (2 Months)",
      level: "Beginner",
      badge: "Most Popular",
      targetAudience: "Beginners, Hindi-medium students, anyone struggling with sentence framing",
      feeEstimate: "₹2,499 / Course",
      timings: "Morning 7:30 AM & Evening 5:00 PM",
      description:
        "Designed specifically for Hindi-to-English transition. Learn step-by-step how to think in English, frame sentences without translating in your head, and pronounce words accurately.",
      outcomes: [
        "Eliminate Hindi-to-English mental translation",
        "Master 300+ daily conversational phrases & essential grammar",
        "Speak in everyday situations without stammering or hesitation",
        "Clear phonetics, vowel sounds, and correct pronunciation",
      ],
      icon: "Sparkles",
    },
    {
      id: "advanced-spoken-english",
      title: "Advanced Spoken English & Fluency",
      hindiTitle: "एडवांस्ड स्पोकन इंग्लिश एवं फ्लूएंसी",
      duration: "60 Days (2 Months)",
      level: "Intermediate",
      badge: "High Fluency",
      targetAudience: "College students, working executives, graduates preparing for MNCs",
      feeEstimate: "₹2,999 / Course",
      timings: "Morning 8:30 AM & Evening 6:00 PM",
      description:
        "Take your English from broken to effortless fluency. Master complex sentence patterns, corporate vocabulary, idioms, nuances, and conversational transitions.",
      outcomes: [
        "Continuous 10-minute uninterrupted speech flow",
        "Business idioms, phrasal verbs, and smart conversational connectors",
        "Storytelling, spontaneous talk, and humor in English",
        "Neutral accent training and cadence enhancement",
      ],
      icon: "Flame",
    },
    {
      id: "public-speaking-stage-confidence",
      title: "Public Speaking & Stage Confidence",
      hindiTitle: "पब्लिक स्पीकिंग एवं स्टेज कॉन्फिडेंस",
      duration: "45 Days",
      level: "All Levels",
      badge: "Stage Mastery",
      targetAudience: "Students, teachers, aspiring leaders, politicians, anchors",
      feeEstimate: "₹2,999 / Course",
      timings: "Evening 4:00 PM & Weekend Batches",
      description:
        "Overcome stage fear once and for all. Learn voice modulation, commanding body language, microphone technique, and how to hold 100+ audience attention.",
      outcomes: [
        "100% elimination of stage fright and trembling hands/voice",
        "Dynamic body language, hand gestures, and eye contact drills",
        "Audience engagement tricks, speech hooks, and memorable conclusions",
        "Live stage practice in front of batch peers every week",
      ],
      icon: "Mic",
    },
    {
      id: "personality-development-grooming",
      title: "Personality Development & Grooming",
      hindiTitle: "पर्सनालिटी डेवलपमेंट एवं ग्रूमिंग",
      duration: "30 Days",
      level: "All Levels",
      badge: "Transformational",
      targetAudience: "Youth preparing for professional life, social events, weddings & careers",
      feeEstimate: "₹2,199 / Course",
      timings: "Evening 7:00 PM",
      description:
        "Your communication is complete only when your body language, etiquette, and dressing align. Transform yourself into a magnetic, confident personality.",
      outcomes: [
        "Professional posture, walk, handshake, and formal etiquette",
        "Positive mindset cultivation, self-discipline & emotional control",
        "Dining etiquette, meeting manners, and social small-talk",
        "Personal grooming tips and executive presence",
      ],
      icon: "UserCheck",
    },
    {
      id: "interview-prep-gd",
      title: "Interview Preparation & Group Discussion",
      hindiTitle: "इंटरव्यू तैयारी एवं ग्रुप डिस्कशन (GD)",
      duration: "30 Days Intensive",
      level: "Intermediate",
      badge: "Job Ready",
      targetAudience: "Final year college students, job applicants, bank/SSC aspirants",
      feeEstimate: "₹2,499 / Course",
      timings: "Morning 9:30 AM & Evening 6:30 PM",
      description:
        "Crack competitive job interviews with high-impact answers. Master HR questions, technical introductions, GD entry strategies, and objection handling.",
      outcomes: [
        "Answer 'Tell me about yourself' & behavioral questions with punch",
        "Group discussion entry, polite contradiction & conclusion skills",
        "Resume building, cover letter guidance, and LinkedIn makeover",
        "3 video-recorded Mock Interviews with individual feedback",
      ],
      icon: "Briefcase",
    },
    {
      id: "kids-school-english",
      title: "Kids & School Students Spoken English",
      hindiTitle: "बच्चों एवं स्कूल विद्यार्थियों हेतु इंग्लिश",
      duration: "90 Days (3 Months)",
      level: "Beginner",
      badge: "Kids Special",
      targetAudience: "Class 3rd to 10th school students (CBSE, ICSE, CG Board)",
      feeEstimate: "₹1,999 / Month",
      timings: "Afternoon 3:30 PM & 4:30 PM",
      description:
        "Engaging, gamified English learning for young minds. Build early confidence, school debate skills, vocabulary, and correct reading & speaking habits.",
      outcomes: [
        "School recitation, debate & morning assembly anchoring",
        "Fun vocabulary building with games, flashcards & roleplays",
        "Sentence framing without grammatical mistakes",
        "Habitual English speaking at home and in school",
      ],
      icon: "Smile",
    },
    {
      id: "competitive-exam-english",
      title: "Competitive Exam English",
      hindiTitle: "प्रतियोगी परीक्षाओं हेतु इंग्लिश ग्रामर",
      duration: "75 Days",
      level: "Intermediate",
      badge: "Exam Focused",
      targetAudience: "Aspirants of CGPSC, Vyapam, SSC CGL/CHSL, Banking, Railway, CTET",
      feeEstimate: "₹2,999 / Course",
      timings: "Morning 7:00 AM & Evening 5:30 PM",
      description:
        "Master high-scoring English grammar rules, reading comprehension strategies, cloze tests, error spotting, and vocabulary mnemonics for government exams.",
      outcomes: [
        "100+ proven golden grammar rules with exam shortcut techniques",
        "Rapid reading comprehension & paragraph jumbles tricks",
        "Root words, prefixes, synonyms, antonyms & one-word substitutions",
        "Weekly simulated mock tests with detailed negative marking analysis",
      ],
      icon: "BookOpen",
    },
    {
      id: "business-corporate-english",
      title: "Professional & Business English",
      hindiTitle: "बिजनेस एवं कॉरपोरेट इंग्लिश",
      duration: "45 Days",
      level: "Advanced",
      badge: "Corporate",
      targetAudience: "Working executives, business owners, doctors, teachers, advocates",
      feeEstimate: "₹3,499 / Course",
      timings: "Evening 7:30 PM & Weekend Special",
      description:
        "For professionals seeking promotions, client confidence, or overseas opportunities. Master corporate emails, presentations, negotiations, and phone calls.",
      outcomes: [
        "Flawless corporate email drafting & memo writing",
        "Pitching ideas, slide presentations & client negotiations",
        "Telephone etiquette & zoom/teams conference participation",
        "Cross-cultural workplace communication & conflict de-escalation",
      ],
      icon: "Building2",
    },
  ] as Course[],

  // ===========================================================================
  // 5. WHY CHOOSE US & LEARNING METHOD
  // ===========================================================================
  whyChooseUs: {
    heading: "Why Creative English Spoken Center is Ambikapur's #1 Choice",
    subheading:
      "We don't teach English like a boring school subject. We treat it like a natural life skill learned through continuous speaking practice.",
    features: [
      {
        id: "speaking-first",
        title: "80% Speaking, 20% Theory",
        hindiTitle: "80% बोलने का अभ्यास, केवल 20% थ्योरी",
        description:
          "No rote memorization of grammar rules. Every minute in class is dedicated to dialogues, extempore, roleplays, and discussions.",
        icon: "MessageSquare",
        highlight: "Practical Approach",
      },
      {
        id: "small-batches",
        title: "Small Batch Size (12–15 Only)",
        hindiTitle: "सीमित बैच साइज — हर छात्र पर विशेष ध्यान",
        description:
          "Unlike crowded coaching centers with 50+ students, our strict limit ensures every student speaks on the microphone every single day.",
        icon: "Users",
        highlight: "Personalized",
      },
      {
        id: "daily-gd",
        title: "Daily GDs & Stage Practice",
        hindiTitle: "प्रतिदिन ग्रुप डिस्कशन एवं स्टेज स्पीच",
        description:
          "Daily stage drills that permanently eliminate the fear of 'Log kya kahenge' (what will people think). Build natural stage presence.",
        icon: "Presentation",
        highlight: "Confidence Booster",
      },
      {
        id: "mentorship",
        title: "1-on-1 Personalized Mentorship",
        hindiTitle: "व्यक्तिगत मार्गदर्शन एवं त्रुटि सुधार",
        description:
          "Get gentle, constructive feedback on your specific accent, tone, hesitation spots, and grammatical blind spots.",
        icon: "HeartHandshake",
        highlight: "Care & Support",
      },
      {
        id: "mock-interviews",
        title: "Simulated Mock Interviews",
        hindiTitle: "रियल-लाइफ मॉक इंटरव्यू अभ्यास",
        description:
          "Experience the pressure of real corporate and government interview panels with video recordings and detailed grading.",
        icon: "Target",
        highlight: "Career Growth",
      },
      {
        id: "flexible-timings",
        title: "Flexible Morning & Evening Batches",
        hindiTitle: "सुविधानुसार सुबह एवं शाम के बैच",
        description:
          "Early morning batches for college goers and evening batches for working professionals and homemakers. Free repeat classes if missed.",
        icon: "Clock",
        highlight: "Convenient",
      },
    ] as FeatureItem[],

    timeline: [
      {
        step: 1,
        title: "Assess & Diagnose",
        subtitle: "Free Level Assessment",
        description:
          "We analyze your current vocabulary, sentence formation, mother-tongue influence (MTI), and stage hesitation level to map a personalized roadmap.",
        icon: "Search",
        duration: "Day 1",
      },
      {
        step: 2,
        title: "Learn & Construct",
        subtitle: "Grammar Without Jargon",
        description:
          "Understand sentence structures naturally using situational templates instead of dry grammar books. Start thinking in English instantly.",
        icon: "Cpu",
        duration: "Days 2 - 15",
      },
      {
        step: 3,
        title: "Practice & Drill",
        subtitle: "Daily Micro-Discussions",
        description:
          "Paired dialogues, spontaneous extempore, vocabulary drills, and group debates. You speak English for a minimum of 45 minutes every day.",
        icon: "Repeat",
        duration: "Days 16 - 45",
      },
      {
        step: 4,
        title: "Perform & Lead",
        subtitle: "Stage & Interview Mastery",
        description:
          "Deliver commanding stage presentations, participate in competitive GDs, and ace mock interviews with effortless polish and poise.",
        icon: "Trophy",
        duration: "Days 46 - 60",
      },
    ] as TimelineStep[],
  },

  // ===========================================================================
  // 6. SUCCESS STORIES & TESTIMONIALS
  // ⚠️ OWNER NOTE: These are authentic sample placeholders.
  // Replace with real student photos, names, and reviews once gathered.
  // ===========================================================================
  testimonials: [
    {
      id: "test-1",
      name: "Aman Gupta",
      role: "College Student, Holy Cross Road",
      location: "Ambikapur",
      course: "Basic to Advanced Spoken English",
      rating: 5,
      quote:
        "I was always terrified of speaking in English in front of college professors. Within 45 days at Creative English Spoken Center, my hesitation vanished! The daily speaking drills made all the difference.",
      hindiQuote: "कॉलेज में इंग्लिश बोलने का डर यहाँ 45 दिनों में बिल्कुल खत्म हो गया!",
      avatarPlaceholder: "AG",
      isSamplePlaceholder: true,
    },
    {
      id: "test-2",
      name: "Pooja Sharma",
      role: "Job Seeker / Banking Aspirant",
      location: "Surguja",
      course: "Interview Prep & GD",
      rating: 5,
      quote:
        "The mock interview sessions with sir were invaluable. They corrected my body language, taught me how to handle tricky questions, and gave me confidence to clear my private bank interview.",
      hindiQuote: "मॉक इंटरव्यू और जीडी की प्रैक्टिस ने मुझे बैंक इंटरव्यू क्रैक करने में मदद की।",
      avatarPlaceholder: "PS",
      isSamplePlaceholder: true,
    },
    {
      id: "test-3",
      name: "Rakesh Tirkey",
      role: "Government Exam Aspirant",
      location: "Ambikapur",
      course: "Competitive Exam English",
      rating: 5,
      quote:
        "English grammar always pulled down my scores in CGPSC. The rules taught here are so logical and easy to remember. My comprehension accuracy increased from 40% to 90%.",
      hindiQuote: "इंग्लिश ग्रामर के रूल्स यहाँ बहुत सरल तरीके से समझाए जाते हैं।",
      avatarPlaceholder: "RT",
      isSamplePlaceholder: true,
    },
    {
      id: "test-4",
      name: "Sunita Verma",
      role: "Homemaker & Parent",
      location: "Ambikapur (Banaras Road)",
      course: "Personality Development & Basic English",
      rating: 5,
      quote:
        "I wanted to speak in English with my children and during PTMs at their school. The teachers are so polite, patient, and encouraging. Never made me feel embarrassed for making mistakes.",
      hindiQuote: "बच्चों के स्कूल और सोशल सर्कल में इंग्लिश बोलने का आत्मविश्वास मिला।",
      avatarPlaceholder: "SV",
      isSamplePlaceholder: true,
    },
    {
      id: "test-5",
      name: "Vikas Singh",
      role: "Sales Executive",
      location: "Ambikapur",
      course: "Professional Business English",
      rating: 5,
      quote:
        "I needed English for sending emails to corporate headquarters and speaking on client calls. Now I write crisp professional emails and converse confidently with state managers.",
      hindiQuote: "ऑफिस ईमेल और क्लाइंट कॉल्स में मेरी बातचीत का स्तर बहुत सुधर गया।",
      avatarPlaceholder: "VS",
      isSamplePlaceholder: true,
    },
    {
      id: "test-6",
      name: "Deepika Patel",
      role: "School Student (Class 10)",
      location: "Ambikapur",
      course: "Public Speaking & Stage Confidence",
      rating: 5,
      quote:
        "I won 1st prize in our inter-school debate competition after taking the Public Speaking course here! Sir taught me voice modulation and how to look the judges straight in the eye.",
      hindiQuote: "स्कूल डिबेट कॉम्पिटिशन में मुझे पहला पुरस्कार मिला!",
      avatarPlaceholder: "DP",
      isSamplePlaceholder: true,
    },
  ] as Testimonial[],

  // ===========================================================================
  // 7. BATCHES & FEES TABLE
  // EDITABLE NOTE: Owner can adjust batch timings and fees here.
  // ===========================================================================
  batches: [
    {
      id: "b-1",
      courseTitle: "Basic Spoken English (Morning Batch)",
      duration: "2 Months",
      batchTiming: "07:30 AM – 08:45 AM (Mon-Sat)",
      mode: "Offline",
      fee: "₹2,499",
      status: "Enrolling Now",
      recommendedFor: "College & school students before classes",
    },
    {
      id: "b-2",
      courseTitle: "Basic Spoken English (Evening Batch)",
      duration: "2 Months",
      batchTiming: "05:00 PM – 06:15 PM (Mon-Sat)",
      mode: "Offline",
      fee: "₹2,499",
      status: "Filling Fast",
      recommendedFor: "Job seekers & youth returning from coaching",
    },
    {
      id: "b-3",
      courseTitle: "Advanced Fluency & Public Speaking",
      duration: "2 Months",
      batchTiming: "06:30 PM – 07:45 PM (Mon-Sat)",
      mode: "Offline",
      fee: "₹2,999",
      status: "Enrolling Now",
      recommendedFor: "Graduates, professionals & leaders",
    },
    {
      id: "b-4",
      courseTitle: "Interview Mastery & GD Fast-Track",
      duration: "1 Month (Intensive)",
      batchTiming: "08:30 AM – 09:45 AM (Mon-Sat)",
      mode: "Offline",
      fee: "₹2,499",
      status: "Filling Fast",
      recommendedFor: "Upcoming campus & govt interview candidates",
    },
    {
      id: "b-5",
      courseTitle: "Kids & School English Program",
      duration: "3 Months",
      batchTiming: "04:00 PM – 05:00 PM (Mon-Sat)",
      mode: "Offline",
      fee: "₹1,999/mo",
      status: "Enrolling Now",
      recommendedFor: "Class 3rd to 10th school students",
    },
    {
      id: "b-6",
      courseTitle: "Weekend Fluency & Personality Batch",
      duration: "3 Months",
      batchTiming: "Saturday & Sunday (Special Timings)",
      mode: "Hybrid",
      fee: "₹3,499",
      status: "Weekend Only",
      recommendedFor: "Working professionals & busy homemakers",
    },
  ] as BatchItem[],

  // ===========================================================================
  // 8. FAQS (With FAQPage Schema mapping)
  // ===========================================================================
  faqs: [
    {
      id: "faq-1",
      question: "Do I need prior English knowledge to join the basic course?",
      hindiQuestion: "क्या बेसिक कोर्स जॉइन करने के लिए पहले से इंग्लिश आना जरूरी है?",
      category: "Eligibility",
      answer:
        "Not at all! Our Basic Spoken English course starts from the ground up for Hindi-medium students. We explain initial concepts in simple Hindi and gradually transition you to thinking and speaking entirely in English.",
    },
    {
      id: "faq-2",
      question: "How long does it typically take to speak English fluently?",
      hindiQuestion: "धाराप्रवाह इंग्लिश बोलने में कितना समय लगता है?",
      category: "Course",
      answer:
        "Most students notice a dramatic reduction in hesitation within the first 15–20 days. By 45 to 60 days of regular attendance and daily 60-minute speaking drills, you will be able to converse comfortably in everyday, college, and workplace settings.",
    },
    {
      id: "faq-3",
      question: "Are there both online and offline classes available?",
      hindiQuestion: "क्या ऑनलाइन और ऑफलाइन दोनों क्लास उपलब्ध हैं?",
      category: "Batches",
      answer:
        "Our primary and most effective mode is offline classroom learning at our Banaras Road center in Ambikapur, because physical stage presence and eye contact create the fastest breakthrough. However, we also provide hybrid weekend support and online doubt-clearing sessions for students residing outside Ambikapur.",
    },
    {
      id: "faq-4",
      question: "What is the typical batch size at Creative English Spoken Center?",
      hindiQuestion: "एक बैच में कितने छात्र होते हैं?",
      category: "Batches",
      answer:
        "We maintain a strict limit of 12 to 15 students per batch. This ensures every single student gets at least 20–30 minutes of direct speaking time, microphone practice, and individualized mentor correction daily.",
    },
    {
      id: "faq-5",
      question: "Will I receive an official certificate after completing the course?",
      hindiQuestion: "क्या कोर्स पूरा होने के बाद सर्टिफिकेट मिलता है?",
      category: "Course",
      answer:
        "Yes! Upon successful completion of your course and passing the final presentation/interview assessment, you will be awarded an official Certificate of Completion from Creative English Spoken Center, recognized across Surguja.",
    },
    {
      id: "faq-6",
      question: "What are the course fees and is there an installment option?",
      hindiQuestion: "फीस कितनी है और क्या किस्तों में भुगतान संभव है?",
      category: "Admission",
      answer:
        "Our courses are kept extremely affordable for Ambikapur students, starting from just ₹2,499. For 2-month and 3-month comprehensive programs, easy two-part installment options are available. Please call or WhatsApp us for current seasonal offers and discounts.",
    },
    {
      id: "faq-7",
      question: "Do you have special batches for kids and school students?",
      hindiQuestion: "क्या बच्चों और स्कूली छात्रों के लिए अलग बैच हैं?",
      category: "Course",
      answer:
        "Yes, we run dedicated afternoon batches for school students from classes 3rd to 10th. These sessions use interactive games, storytelling, debate drills, and vocabulary quizzes so children learn English with joy rather than exam fear.",
    },
    {
      id: "faq-8",
      question: "Is the Free Demo Class really 100% free with no commitment?",
      hindiQuestion: "क्या फ्री डेमो क्लास सचमुच बिना किसी शर्त के मुफ्त है?",
      category: "Admission",
      answer:
        "Yes, 100% free! You can attend a complete 1-hour live session, experience our speaking-first teaching methodology, meet the mentors, and have your speaking level assessed at zero cost. You only enroll if you are completely convinced.",
    },
  ] as FaqItem[],

  // ===========================================================================
  // 9. BLOG ARTICLES FOR LOCAL SEO
  // ===========================================================================
  blogPosts: [
    {
      slug: "how-to-improve-spoken-english-in-30-days-ambikapur",
      title: "How to Improve Spoken English in 30 Days: A Practical Guide for Ambikapur Students",
      description:
        "Discover practical, actionable steps to break your English hesitation in 30 days without rote grammar, specifically tailored for Hindi-medium students in Chhattisgarh.",
      date: "October 10, 2026",
      readTime: "5 min read",
      author: "Senior Mentor, Creative English",
      category: "Spoken English Tips",
      keywords: [
        "spoken english classes in ambikapur",
        "how to learn english in 30 days",
        "english speaking course surguja",
        "hindi to english translation tips",
      ],
      content: `
## Why Most Ambikapur Students Struggle with Spoken English

Every year, hundreds of bright students from Holy Cross College, PG College, and local schools in Ambikapur excel in their written examinations. Yet, when asked to introduce themselves in English during an interview or debate, an invisible barrier locks their voice.

The reason isn't lack of intelligence or poor vocabulary. It is **The Translation Trap**.

### The Translation Trap Explained

When someone asks you a question in English:
1. You listen to the English words.
2. You translate them into Hindi in your mind.
3. You formulate your reply in Hindi.
4. You search for English grammar rules to translate your Hindi thought back into English.
5. By the time you do all this, 5 seconds have passed, panic sets in, and you fumble.

To become fluent, you must bypass Hindi entirely and **think directly in English**.

---

## 4 Proven Steps to Build English Fluency in 30 Days

### Step 1: Replace Grammar Rules with Sentence Formulas (Days 1–7)
Stop studying past participle definitions. Instead, memorize plug-and-play speech formulas:
- *"I was thinking of..."* (I was thinking of visiting the market.)
- *"Would you mind if I..."* (Would you mind if I borrow your notes?)
- *"As far as I know..."* (As far as I know, the interview is tomorrow.)

Practice 5 such formulas every morning.

### Step 2: The 5-Minute Mirror Technique (Days 8–15)
Stand in front of a mirror every evening. Pick any simple object in your room (a fan, a book, your phone) and speak about it continuously for 3 minutes without stopping. Even if you make mistakes, do not stop! Fluency comes from momentum, not perfection.

### Step 3: Surround Your Ears with English (Days 16–22)
Switch your YouTube feed from Hindi commentary to conversational English podcasts or motivational speeches. Listen to clear Indian English speakers like Shashi Tharoor or Chetan Bhagat to understand natural cadence.

### Step 4: Join a Daily Speaking Circle (Days 23–30)
You cannot learn swimming from a book, and you cannot learn spoken English in solitary silence. You must speak with other humans who won't mock your mistakes.

At **Creative English Spoken Center** on Banaras Road (near Renuka Girls Hostel, Ambikapur), our students spend 80% of every class speaking with partners, debating hot topics, and delivering impromptu speeches on stage.

---

## Ready to Start Your 30-Day Fluency Journey?
Book a **Free 1-Hour Demo Class** at Creative English Spoken Center in Ambikapur today. Call or WhatsApp us at **+91 73545 23597**.
      `,
    },
    {
      slug: "top-10-interview-questions-and-answers-in-english",
      title: "Top 10 Job Interview Questions & High-Impact English Answers for Freshers",
      description:
        "Master the top 10 interview questions with sample English answers, common mistakes to avoid, and confidence-boosting tips for private & MNC jobs in Chhattisgarh.",
      date: "October 05, 2026",
      readTime: "7 min read",
      author: "Career Coach, Creative English",
      category: "Interview Preparation",
      keywords: [
        "interview preparation ambikapur",
        "top interview questions and answers in english",
        "job interview coaching surguja",
        "tell me about yourself sample answer",
      ],
      content: `
## Crack Your Next Job Interview with Confidence

Whether you are applying for an MNC role in Raipur or Bengaluru, a banking officer position in Ambikapur, or a customer success job, the interview round determines 90% of the hiring decision.

Here are the 10 most common interview questions with professional English answers tailored for freshers and early-career candidates.

---

### 1. "Tell me about yourself."
**What the interviewer is testing:** Your conciseness, confidence, and ability to structure thoughts in English under pressure.

**Winning Formula (Present - Past - Future):**
> *"Thank you for this opportunity, sir. My name is Rahul Sharma, and I recently graduated in Commerce from Surguja University. Over the past three years, I have actively participated in our college commerce club and led student events. I have honed my analytical and communication skills, and I am now eager to apply my knowledge in an esteemed organization like yours where I can contribute and grow."*

**Avoid:** Reciting your entire 10th and 12th marks sheet.

---

### 2. "What are your greatest strengths?"
> *"My greatest strength is my adaptability and proactive communication. Whether working individually or in a team, I make sure goals are clear and deadlines are respected. During our final year college project, I coordinated between five teammates to submit our report two days ahead of schedule."*

---

### 3. "What is your biggest weakness?"
**Tip:** Share a genuine weakness paired with the active steps you are taking to overcome it.
> *"Earlier, I used to hesitate when addressing large gatherings or leading group discussions. However, to overcome this, I joined public speaking training at Creative English Spoken Center in Ambikapur, where I practice stage speaking every week. Today, I feel far more confident presenting in front of an audience."*

---

### 4. "Where do you see yourself in 5 years?"
> *"In five years, I envision myself as a seasoned professional who has mastered the core operations of this domain, capable of leading cross-functional projects and mentoring incoming freshers."*

---

### 5. "Why should we hire you over other candidates?"
> *"Along with the requisite academic qualifications, I bring high energy, disciplined work ethic, and an eagerness to learn quickly. I am not just looking for a job; I am looking to deliver measurable value to your team from day one."*

---

## Join Our Interview Preparation & GD Batch in Ambikapur
Don't let spoken English stand between you and your dream career. Creative English Spoken Center provides video-recorded mock interviews, GD entry tactics, and personalized resume coaching. Call **+91 73545 23597** to schedule your free demo.
      `,
    },
    {
      slug: "why-public-speaking-builds-unstoppable-confidence",
      title: "Why Public Speaking Builds Unstoppable Confidence for Students & Working Professionals",
      description:
        "Learn how overcoming stage fear and mastering public speaking in English unlocks leadership opportunities, respect, and career acceleration.",
      date: "September 28, 2026",
      readTime: "4 min read",
      author: "Founder, Creative English Spoken Center",
      category: "Personality Development",
      keywords: [
        "public speaking course chhattisgarh",
        "personality development classes ambikapur",
        "stage fear removal english",
        "public speaking institute holy cross road",
      ],
      content: `
## The World's #1 Fear: Glossophobia

Studies repeatedly reveal that the fear of public speaking ranks higher than the fear of financial failure or even illness for many young adults. In school and college, we sit quietly in rows, conditioned never to speak out of turn.

Then, adulthood strikes. Suddenly, success in every sphere demands public speaking:
- Delivering an academic presentation.
- Speaking up in corporate Zoom meetings.
- Anchoring college cultural festivals.
- Pitching a new business idea to clients or investors.

If you can speak with poise and conviction in English, you automatically command respect in any room.

---

## The 3 Pillars of Stage Presence Taught at Creative English

### 1. Eye Contact & The 'Z-Scan' Technique
Frightened speakers look at the floor or the ceiling. Confident speakers connect. We train students to perform a slow 'Z-scan' of the audience, locking eyes with three friendly faces across the left, center, and right sections for 3 seconds each.

### 2. Vocal Modulation Over Monotone
Speaking at a single pitch makes listeners sleepy. We practice:
- **Pacing:** Slowing down on key insights.
- **Power Pauses:** Leaving a 2-second silence before and after an important point.
- **Pitch:** Projecting from the diaphragm instead of the throat.

### 3. Open Body Language
No crossed arms, no fidgeting hands in pockets. Open palms convey honesty, credibility, and authority.

---

## Transform Your Presence at Creative English Spoken Center
Visit our campus on Banaras Road, near Renuka Girls Hostel, Holy Cross College Road, Ambikapur. Step onto our stage and watch your fear dissolve. Call **+91 73545 23597** today!
      `,
    },
  ] as BlogPost[],

  // ===========================================================================
  // 10. SEO KEYWORDS & METADATA
  // ===========================================================================
  seo: {
    siteTitle: "Creative English Spoken Center | Best Spoken English Classes in Ambikapur",
    description:
      "Join Creative English Spoken Center on Banaras Road, near Renuka Girls Hostel, Ambikapur. 100% speaking-first course for students, job seekers & professionals. Book your free demo class today!",
    keywords: [
      "spoken English classes in Ambikapur",
      "best English speaking course in Ambikapur",
      "spoken English institute Surguja",
      "personality development classes Ambikapur",
      "public speaking course Chhattisgarh",
      "English coaching near Holy Cross College Ambikapur",
      "interview preparation Ambikapur",
      "Banaras Road English coaching",
      "English speaking classes for beginners in Ambikapur",
      "Creative English Spoken Center Ambikapur",
    ],
  },
};

export type SiteConfig = typeof siteConfig;
