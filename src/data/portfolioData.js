// ============ PROJECTS DATA ============
export const projects = [
  {
    id: 1,
    title: 'FinTech & Gift-Card Ecosystem',
    category: 'iOS / FinTech',
    description: 'Lead iOS Engineer. Developed a high-security payment platform with Stripe, Apple Pay, and subscription features via StoreKit 2.',
    tech: ['Swift', 'SwiftUI', 'Stripe SDK', 'Apple Pay', 'StoreKit 2'],
    stats: { security: 'High', payments: 'Stripe', subs: 'StoreKit' },
    color: 'cyan',
    year: '2024',
  },
  {
    id: 2,
    title: 'Real-Time Communication Platform',
    category: 'iOS / RTC',
    description: 'Implemented low-latency live chat and multi-user audio/video calls using Agora SDK and Firebase integration.',
    tech: ['Swift', 'Agora SDK', 'Firebase', 'WebRTC', 'Combine'],
    stats: { latency: 'Low', calls: 'Audio/Video', chat: 'Real-time' },
    color: 'amber',
    year: '2024',
  },
  {
    id: 3,
    title: 'ML Health Risk Analytics',
    category: 'Data Science / ML',
    description: 'Developed a machine learning system to predict health risks based on lifestyle data as part of a Data Science capstone.',
    tech: ['Python', 'scikit-learn', 'pandas', 'NumPy', 'Data Science'],
    stats: { model: 'scikit-learn', data: 'Lifestyle', accuracy: 'High' },
    color: 'cyan',
    year: '2023',
  },
];

// ============ SKILLS DATA ============
export const skills = {
  'Languages': [
    { name: 'Swift (Modern/Concurrency)', level: 98 },
    { name: 'Python', level: 85 },
    { name: 'SQL', level: 80 },
    { name: 'Dart', level: 75 },
  ],
  'iOS Ecosystem': [
    { name: 'SwiftUI', level: 97 },
     { name: 'UIKit', level: 97 },
    { name: 'iOS SDK', level: 90 },
     { name: 'ARKit', level: 97 },
    { name: 'StoreKit 2', level: 92 },
    { name: 'TrueDepth', level: 88 },
     { name: 'MapKit', level: 97 },
     { name: 'PushKit', level: 97 },
     { name: 'CallKit', level: 97 },
    { name: 'App Review Compliance', level: 95 },
  ],
  'Integrations': [
    { name: 'Firebase (Auth/DB)', level: 94 },
    { name: 'Stripe', level: 92 },
    { name: 'Apple Pay', level: 97 },
    { name: 'Agora SDK', level: 88 },
    { name: 'Google Places API', level: 90 },
  ],
  'AI, ML & Workflow': [
    { name: 'Generative AI', level: 95 },
    { name: 'scikit-learn / pandas', level: 82 },
    { name: 'Clean Architecture', level: 96 },
    { name: 'TDD / Agile', level: 94 },
    { name: 'Performance Optimization', level: 92 },
  ],
};

// ============ EXPERIENCE DATA ============
export const experiences = [
  {
    id: 1,
    role: 'Associate Software Engineer (iOS)',
    company: 'Elegant Media',
    location: 'Colombo, Sri Lanka',
    period: 'Jan 2024 – Present',
    type: 'Full-time',
    description: 'Architecting and maintaining high-quality iOS applications utilizing SwiftUI and UIKit, ensuring strict adherence to Apple Human Interface Guidelines.',
    highlights: [
      'Collaborated with designers on high-fidelity interfaces and complex animations',
      'Optimized performance in data-heavy modules in Agile environments',
      'Accelerated cycles by 30% via AI-Native Workflow integration',
    ],
  },
  {
    id: 2,
    role: 'Trainee Software Engineer (iOS)',
    company: 'Elegant Media',
    location: 'Colombo, Sri Lanka',
    period: 'Jan 2023 – Jan 2024',
    type: 'Full-time',
    description: 'Contributed to developing mobile applications for Apple platforms using Swift, UIKit, and third-party libraries.',
    highlights: [
      'Improved app stability by 25% through rigorous Xcode profiling',
      'Executed refactoring for App Store Review Guideline compliance',
      'Developed native features across various Apple platforms',
    ],
  },
];

// ============ EDUCATION DATA ============
export const education = [
  {
    id: 1,
    degree: 'BSc (Hons) Data Science',
    school: 'London Metropolitan University',
    period: 'Sep 2025',
  },
  {
    id: 2,
    degree: 'Graduate Diploma in Software Engineering',
    school: 'IJSE',
    period: 'Jan 2021 – Jan 2023',
  },
];

// ============ TESTIMONIALS DATA (Kept as placeholder) ============
export const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CEO, MedTech Startup',
    avatar: 'SC',
    text: 'Exceptional iOS talent. The integration was flawless and the app shipped ahead of schedule.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Webb',
    role: 'CTO, FinanceFlow Inc.',
    avatar: 'MW',
    text: 'Deep Swift expertise and product instincts. Delivered our fintech app rock-solid and performant.',
    rating: 5,
  },
];

// ============ SERVICES DATA ============
export const services = [
  {
    id: 1,
    icon: '📱',
    title: 'iOS App Development',
    subtitle: 'Swift · SwiftUI · UIKit',
    description: 'End-to-end native iOS development following Apple Human Interface Guidelines. Clean code, stellar performance, and subscription integration.',
    features: [
      'SwiftUI & Modern Swift',
      'StoreKit 2 Subscriptions',
      'Performance Profiling',
      'App Store Compliance',
    ],
    highlight: 'Expertise',
    color: 'cyan',
  },
  {
    id: 2,
    icon: '🤖',
    title: 'AI-Native Development',
    subtitle: 'GenAI · ML · Analytics',
    description: 'Leveraging AI-native workflows to accelerate development and integrating on-device ML health analytics into mobile experiences.',
    features: [
      'AI-Native Workflow Optimization',
      'CoreML & scikit-learn',
      'Predictive Analytics',
      'Privacy-First ML',
    ],
    highlight: 'Future-Proof',
    color: 'amber',
  },
  {
    id: 3,
    icon: '💬',
    title: 'Real-Time Systems',
    subtitle: 'Agora · WebRTC · Firebase',
    description: 'Implementation of low-latency communication platforms including multi-user audio/video calls and real-time data sync.',
    features: [
      'Agora SDK Integration',
      'Low-Latency Video/Audio',
      'Firebase Real-time Systems',
      'Secure RTC Architecture',
    ],
    highlight: null,
    color: 'cyan',
  },
];
