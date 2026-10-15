
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { saveSubmission } from '../lib/db';
import { PRICING_PLANS } from '../constants';

declare const google: any;

const Booking: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const initialFormState = {
    name: '',
    email: '',
    phone: '',
    studentType: 'child',
    instrument: 'piano',
    duration: PRICING_PLANS[0].duration,
    experience: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedPlan = PRICING_PLANS.find(p => p.duration === formData.duration) || PRICING_PLANS[0];

  // Read duration from URL query parameters on mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const durationParam = params.get('duration');
    if (durationParam) {
      // Small validation to ensure it matches a valid plan
      const validPlan = PRICING_PLANS.find(p => p.duration === durationParam);
      if (validPlan) {
        setFormData(prev => ({ ...prev, duration: durationParam }));
      }
    }
  }, [location.search]);

  useEffect(() => {
    if (mapRef.current && typeof google !== 'undefined') {
      const richmond = { lat: 51.4613, lng: -0.3033 };
      const map = new google.maps.Map(mapRef.current, {
        center: richmond,
        zoom: 14,
        disableDefaultUI: true,
        zoomControl: true,
        styles: [
          { "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "color": "#7c93a3" }, { "lightness": "-10" }] },
          { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#4A5D4E" }] },
          { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }] },
          { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }] },
          { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#c9c9c9" }] }
        ]
      });

      new google.maps.Marker({
        position: richmond,
        map: map,
        title: "Piano & Strings Music Studio",
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: "#4A5D4E",
          fillOpacity: 1,
          strokeWeight: 2,
          strokeColor: "#FFFFFF",
        },
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await saveSubmission({
        formType: 'booking',
        ...formData,
        price: selectedPlan.price,
        timestamp: new Date().toISOString()
      });
      setSubmitted(true);
      setFormData(initialFormState); // Clear form after submission
    } catch (error) {
      console.error('Failed to save booking:', error);
      alert('There was an error saving your booking request. Please try again.');
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
          <h2 className="serif text-3xl font-semibold mb-4">Enquiry Received!</h2>
          <p className="text-[#666666] mb-8">
            Thank you for booking a trial. I'll review your details and get back to you within 24 hours to schedule a time.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-[#4A5D4E] font-medium hover:underline"
          >
            Back to booking form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl font-semibold mb-8 serif">Book a Trial Lesson</h1>
            <p className="text-xl text-[#666666] mb-12 leading-relaxed">
              Ready to start your musical journey? Fill out the form below and I'll be in touch to find a time that works for you. 
              My studio is located in central Richmond, just a short walk from the station.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-[#4A5D4E]/10 p-4 rounded-sm mr-6 text-[#4A5D4E]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Location</h4>
                  <p className="text-[#666666]">Richmond Studio, SW19 (Near Richmond Green)</p>
                </div>
              </div>
              <div className="h-72 rounded-sm overflow-hidden border border-[#E8E4DE] shadow-sm relative">
                <div ref={mapRef} className="w-full h-full bg-[#E8E4DE]">
                  <div className="w-full h-full flex items-center justify-center text-[#999999] text-sm italic p-12 text-center">
                    Loading interactive map...
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-sm shadow-xl border border-[#E8E4DE]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#666666] mb-2 uppercase tracking-wider">Name</label>
                  <input required type="text" className="w-full px-4 py-3 border border-[#E8E4DE] rounded-sm focus:outline-none focus:border-[#4A5D4E]" placeholder="Full name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#666666] mb-2 uppercase tracking-wider">Email</label>
                  <input required type="email" className="w-full px-4 py-3 border border-[#E8E4DE] rounded-sm focus:outline-none focus:border-[#4A5D4E]" placeholder="email@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#666666] mb-2 uppercase tracking-wider">Phone (Optional)</label>
                <input type="tel" className="w-full px-4 py-3 border border-[#E8E4DE] rounded-sm focus:outline-none focus:border-[#4A5D4E]" placeholder="07xxx xxxxxx" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#666666] mb-2 uppercase tracking-wider">Student Type</label>
                  <select className="w-full px-4 py-3 border border-[#E8E4DE] rounded-sm focus:outline-none focus:border-[#4A5D4E]" value={formData.studentType} onChange={(e) => setFormData({...formData, studentType: e.target.value})}>
                    <option value="child">Child (5-16)</option>
                    <option value="adult">Adult Learner</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#666666] mb-2 uppercase tracking-wider">Instrument</label>
                  <select className="w-full px-4 py-3 border border-[#E8E4DE] rounded-sm focus:outline-none focus:border-[#4A5D4E]" value={formData.instrument} onChange={(e) => setFormData({...formData, instrument: e.target.value})}>
                    <option value="piano">Piano</option>
                    <option value="violin">Violin</option>
                    <option value="viola">Viola</option>
                    <option value="cello">Cello</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#666666] mb-2 uppercase tracking-wider">Lesson Duration</label>
                  <select 
                    className="w-full px-4 py-3 border border-[#E8E4DE] rounded-sm focus:outline-none focus:border-[#4A5D4E]" 
                    value={formData.duration} 
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                  >
                    {PRICING_PLANS.map(plan => <option key={plan.duration} value={plan.duration}>{plan.duration}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#666666] mb-2 uppercase tracking-wider">Trial Rate</label>
                  <div className="w-full px-4 py-3 border border-[#E8E4DE] rounded-sm bg-[#F3F0EC] font-bold text-[#4A5D4E] flex items-center h-[46px]">
                    {selectedPlan.price}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#666666] mb-2 uppercase tracking-wider">Experience Level & Message</label>
                <textarea className="w-full px-4 py-3 border border-[#E8E4DE] rounded-sm focus:outline-none focus:border-[#4A5D4E]" rows={3} placeholder="Tell me about your experience or specific goals..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className={`w-full bg-[#4A5D4E] text-white py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-[#3D4D40] transition-all transform hover:-translate-y-1 shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                {isSubmitting ? 'Processing...' : `Book ${selectedPlan.duration} Trial`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
