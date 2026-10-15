
import React from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/111/1920/1080?grayscale" 
            alt="Piano and Violin" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/50 via-transparent to-[#FDFBF7]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 animate-fade-in-up">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4A5D4E] mb-6 block">
            Premier Music Tuition in Richmond
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold text-[#1A1A1A] leading-tight mb-8 serif">
            Private Piano & Strings Lessons in Richmond
          </h1>
          <p className="text-lg md:text-xl text-[#666666] mb-10 max-w-2xl mx-auto leading-relaxed">
            Professional, tailored instruction for all ages and skill levels. Whether you're a young beginner or an adult returning to music, discover the joy of excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-[#4A5D4E] text-white px-8 py-4 rounded-sm text-lg font-medium hover:bg-[#3D4D40] transition-all shadow-lg hover:shadow-xl"
            >
              Book a Trial Lesson
            </Link>
            <Link 
              to="/piano" 
              className="bg-white text-[#4A5D4E] border border-[#4A5D4E] px-8 py-4 rounded-sm text-lg font-medium hover:bg-[#F3F0EC] transition-all"
            >
              View Lesson Options
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Authority Bar */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-[#E8E4DE] text-center">
          <div>
            <h4 className="text-3xl font-bold text-[#4A5D4E] mb-1">15+</h4>
            <p className="text-xs uppercase tracking-widest text-[#999999]">Years Experience</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-[#4A5D4E] mb-1">100%</h4>
            <p className="text-xs uppercase tracking-widest text-[#999999]">Exam Pass Rate</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-[#4A5D4E] mb-1">ABRSM</h4>
            <p className="text-xs uppercase tracking-widest text-[#999999]">Certified Tutor</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-[#4A5D4E] mb-1">DBS</h4>
            <p className="text-xs uppercase tracking-widest text-[#999999]">Fully Enhanced</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 serif">Discover Your Musical Voice</h2>
            <p className="text-lg text-[#666666]">
              I specialize in foundational and advanced techniques for both keyboard and orchestral strings, 
              providing a holistic musical education in a warm, Richmond-based studio.
            </p>
          </div>
          <Link to="/about" className="mt-6 md:mt-0 text-[#4A5D4E] font-medium border-b-2 border-[#4A5D4E]/20 hover:border-[#4A5D4E] transition-all pb-1">
            Learn more about my method →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="aspect-[16/9] overflow-hidden">
              <img src="https://picsum.photos/id/1082/800/450" alt="Piano" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4 serif">Piano Lessons</h3>
              <p className="text-[#666666] mb-6">From first notes to Grade 8 and beyond. Specializing in classical foundations and performance technique.</p>
              <Link to="/piano" className="text-sm font-bold uppercase tracking-widest text-[#4A5D4E]">Explore Piano →</Link>
            </div>
          </div>
          <div className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="aspect-[16/9] overflow-hidden">
              <img src="https://picsum.photos/id/453/800/450" alt="Violin" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4 serif">Violin, Viola & Cello</h3>
              <p className="text-[#666666] mb-6">Expert coaching in posture, tone production, and musicality for all orchestral string instruments.</p>
              <Link to="/strings" className="text-sm font-bold uppercase tracking-widest text-[#4A5D4E]">Explore Strings →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Banner */}
      <section className="bg-[#4A5D4E] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 serif">Student & Parent Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-10 rounded-sm text-left">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg italic mb-6 leading-relaxed">"{t.content}"</p>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-sm opacity-70">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Credibility / Final CTA */}
      <section className="max-w-5xl mx-auto px-4 text-center py-20">
        <h2 className="text-4xl font-semibold mb-8 serif">Start Your Musical Journey in Richmond</h2>
        <p className="text-xl text-[#666666] mb-10 max-w-2xl mx-auto">
          Located conveniently near Richmond Green, serving families in Twickenham, Kew, and East Sheen. 
          Limited slots available for the upcoming term.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-[#1A1A1A] text-white px-10 py-5 rounded-sm text-lg font-medium hover:bg-[#333333] transition-all transform hover:scale-105"
        >
          Book Your First Lesson Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
