
import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h1 className="text-5xl font-semibold mb-6 serif">Simple, Transparent Pricing</h1>
        <p className="text-xl text-[#666666] max-w-3xl mx-auto">
          Investing in high-quality music education is a gift that lasts a lifetime. 
          Our rates are competitive for the Richmond area, reflecting our professional standard.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRICING_PLANS.map((plan, idx) => (
          <div key={idx} className={`relative p-8 rounded-sm border ${idx === 1 ? 'border-[#4A5D4E] shadow-2xl scale-105 z-10 bg-white' : 'border-[#E8E4DE] bg-white/50 shadow-sm'}`}>
            {idx === 1 && (
              <span className="absolute top-0 right-0 bg-[#4A5D4E] text-white text-[10px] uppercase font-bold tracking-widest py-1 px-3 rounded-bl-sm transform -translate-y-full mb-2">
                Most Popular
              </span>
            )}
            <h3 className="serif text-2xl font-semibold mb-2">{plan.duration}</h3>
            <div className="text-4xl font-bold text-[#4A5D4E] mb-6">{plan.price} <span className="text-base font-normal text-[#999999]">/ lesson</span></div>
            <p className="text-[#666666] text-sm mb-8 min-h-[60px]">{plan.description}</p>
            <ul className="space-y-4 mb-10 text-left">
              {plan.features.map((feature, fidx) => (
                <li key={fidx} className="flex items-center text-sm text-[#333333]">
                  <svg className="h-5 w-5 text-[#4A5D4E] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link 
              to={`/booking?duration=${encodeURIComponent(plan.duration)}`} 
              className={`block text-center py-4 rounded-sm font-semibold transition-all ${
                idx === 1 ? 'bg-[#4A5D4E] text-white hover:bg-[#3D4D40]' : 'bg-[#1A1A1A] text-white hover:bg-[#333333]'
              }`}
            >
              Book {plan.duration} Trial
            </Link>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-24">
        <div className="bg-[#F3F0EC] p-10 rounded-sm border border-[#E8E4DE]">
          <h2 className="serif text-3xl font-semibold mb-6">Terms & Policies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-bold mb-3 text-[#4A5D4E]">Trial Lessons</h4>
              <p className="text-sm text-[#666666] leading-relaxed">
                Your first 30-minute trial lesson is offered at a discounted rate of £15. 
                This allows us to meet, discuss goals, and see if the student-teacher fit is right.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-[#4A5D4E]">Block Bookings</h4>
              <p className="text-sm text-[#666666] leading-relaxed">
                Save 10% when you pay for a full term (10 lessons) in advance. 
                This is our recommended way to ensure consistent progress and secure your preferred time slot.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-[#4A5D4E]">Cancellation Policy</h4>
              <p className="text-sm text-[#666666] leading-relaxed">
                24-hour notice is required for all cancellations. Lessons missed without notice 
                cannot be rescheduled or refunded.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-[#4A5D4E]">Term Dates</h4>
              <p className="text-sm text-[#666666] leading-relaxed">
                We generally follow the London Borough of Richmond upon Thames school term dates, 
                with optional holiday intensive sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
