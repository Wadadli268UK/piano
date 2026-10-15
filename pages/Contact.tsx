
import React, { useState } from 'react';
import { saveSubmission } from '../lib/db';

const Contact: React.FC = () => {
  const initialFormState = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await saveSubmission({
        formType: 'contact',
        ...formData,
        timestamp: new Date().toISOString()
      });
      setSubmitted(true);
      setFormData(initialFormState); // Clear form after submission
    } catch (error) {
      console.error('Failed to save submission:', error);
      alert('There was an error saving your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-md text-center bg-white p-12 rounded-sm shadow-xl border border-[#E8E4DE]">
          <div className="w-16 h-16 bg-[#4A5D4E] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="serif text-3xl font-semibold mb-4">Message Sent!</h2>
          <p className="text-[#666666] mb-8">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-[#4A5D4E] font-medium hover:underline"
          >
            Back to contact form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-[#FDFBF7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-semibold mb-4 serif">Contact Piano & Strings</h1>
          <p className="text-xl text-[#666666] leading-relaxed">
            Have a general question about my teaching or the studio? Drop me a message below.
          </p>
        </div>

        <div className="bg-white p-10 rounded-sm shadow-xl border border-[#E8E4DE]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#666666] mb-2 uppercase tracking-wider">Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-3 border border-[#E8E4DE] rounded-sm focus:outline-none focus:border-[#4A5D4E] transition-colors"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#666666] mb-2 uppercase tracking-wider">Email</label>
                <input 
                  required
                  type="email" 
                  className="w-full px-4 py-3 border border-[#E8E4DE] rounded-sm focus:outline-none focus:border-[#4A5D4E] transition-colors"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#666666] mb-2 uppercase tracking-wider">Phone (Optional)</label>
              <input 
                type="tel" 
                className="w-full px-4 py-3 border border-[#E8E4DE] rounded-sm focus:outline-none focus:border-[#4A5D4E] transition-colors"
                placeholder="07xxx xxxxxx"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#666666] mb-2 uppercase tracking-wider">Your Message</label>
              <textarea 
                required
                className="w-full px-4 py-3 border border-[#E8E4DE] rounded-sm focus:outline-none focus:border-[#4A5D4E] transition-colors"
                rows={5}
                placeholder="How can I help you today?"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#1A1A1A] text-white py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-[#333333] transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
