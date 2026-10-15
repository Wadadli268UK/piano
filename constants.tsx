
import React from 'react';
import { NavItem, Testimonial, PricingPlan, FAQItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Piano', path: '/piano' },
  { label: 'Strings', path: '/strings' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Booking', path: '/booking' },
  { label: 'Contact', path: '/contact' },
  { label: 'Admin', path: '/admin' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Jenkins",
    role: "Parent of 8-year-old",
    content: "Our daughter has thrived under these lessons. The approach is warm, patient, and incredibly professional. She actually looks forward to her piano practice now!",
    rating: 5
  },
  {
    name: "Mark Thompson",
    role: "Adult Learner (Violin)",
    content: "Returning to the violin after 20 years was daunting, but I felt at ease from the first trial lesson. The technical guidance is superb and tailored to my pace.",
    rating: 5
  },
  {
    name: "Elena Rossi",
    role: "Parent of 14-year-old",
    content: "Excellent preparation for ABRSM exams. My son achieved a Distinction in Grade 5 Cello thanks to the structured and encouraging teaching style.",
    rating: 5
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    duration: "30 Minutes",
    price: "£25",
    description: "Ideal for younger beginners (ages 5-8) or those looking for a focused weekly check-in.",
    features: ["One-on-one tuition", "Customized lesson plans", "Theory integration", "Richmond Studio"]
  },
  {
    duration: "45 Minutes",
    price: "£35",
    description: "Our most popular choice for intermediate students and focused adult learners.",
    features: ["Deep dive into technique", "Exam preparation support", "Repertoire building", "Richmond Studio"]
  },
  {
    duration: "60 Minutes",
    price: "£45",
    description: "Perfect for advanced students, intensive exam prep, or adults wanting more depth.",
    features: ["Masterclass approach", "Advanced theory & analysis", "Extended repertoire", "Richmond Studio"]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What age can children start lessons?",
    answer: "Generally, I recommend starting piano from age 5 and string instruments from age 6. However, every child is different. I offer a trial lesson to assess readiness."
  },
  {
    question: "Do I need my own instrument?",
    answer: "For the trial lesson, I can provide an instrument in the studio. For ongoing study, having your own instrument at home for practice is essential for progress."
  },
  {
    question: "Where do lessons take place?",
    answer: "Lessons are held in my dedicated teaching studio in the heart of Richmond. It's a quiet, professional environment equipped with a high-quality upright piano."
  },
  {
    question: "Do you prepare students for exams?",
    answer: "Yes, I have a 100% pass rate with ABRSM and Trinity exam boards. Whether you want to pursue grades or play for pleasure, we tailor the path to your goals."
  },
  {
    question: "What is your cancellation policy?",
    answer: "I require 24 hours' notice for cancellations. Lessons cancelled within 24 hours are charged at the full rate to cover the studio time."
  }
];
