
export interface NavItem {
  label: string;
  path: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface PricingPlan {
  duration: string;
  price: string;
  description: string;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
