
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Pricing from './pages/Pricing';
import AdminDashboard from './pages/AdminDashboard';

// Placeholder components for other pages
const About = () => (
  <div className="py-24 px-4 max-w-4xl mx-auto">
    <h1 className="text-5xl font-semibold mb-8 serif">About Your Tutor</h1>
    <div className="prose prose-lg text-[#666666] leading-relaxed space-y-6">
      <p>
        I am a dedicated music educator with over 15 years of experience teaching piano and string instruments 
        across London and my home town of Richmond. My passion lies in unlocking the natural musicality within 
        every student, regardless of their starting point.
      </p>
      <div className="aspect-video overflow-hidden rounded-sm my-12">
        <img src="https://picsum.photos/id/445/1200/800" alt="Tutor playing piano" className="w-full h-full object-cover" />
      </div>
      <h2 className="text-3xl font-semibold text-[#1A1A1A] serif">Philosophy & Qualifications</h2>
      <p>
        My teaching philosophy centers on "Musical Intelligence" — understanding not just the notes on the page, 
        but the phrasing, the history, and the emotional core of the music. I hold a BMus (Hons) from the 
        Royal Academy of Music and am a registered member of the European String Teachers Association (ESTA).
      </p>
      <div className="bg-[#4A5D4E]/5 p-8 border-l-4 border-[#4A5D4E] italic">
        "Every child is an artist. The problem is how to remain an artist once we grow up." — My goal is to ensure 
        musical wonder remains a constant throughout my students' lives.
      </div>
      <h2 className="text-3xl font-semibold text-[#1A1A1A] serif">Teaching Adults</h2>
      <p>
        I have a growing studio of adult learners. Whether you are picking up an instrument for the first time 
        at 40 or returning to a childhood passion at 70, I provide a low-pressure, intellectually stimulating 
        environment to explore the repertoire you love.
      </p>
    </div>
  </div>
);

const PianoPage = () => (
  <div className="py-24 px-4 max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h1 className="text-5xl md:text-6xl font-semibold mb-6 serif">Piano Lessons in Richmond</h1>
      <p className="text-xl text-[#666666] max-w-3xl mx-auto">
        Building technique, musicality, and performance confidence on the king of instruments.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="order-2 md:order-1 space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-3 serif">Beginner Piano</h3>
          <p className="text-[#666666]">Focusing on notation, rhythm, and hand position. Using a mix of modern method books and classical repertoire to keep engagement high.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3 serif">ABRSM & Trinity Exams</h3>
          <p className="text-[#666666]">Structured preparation from Prep Test to Grade 8. 100% pass rate with a focus on holistic preparation (scales, aural, sight-reading).</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3 serif">Adult Repertoire</h3>
          <p className="text-[#666666]">From Bach to Einaudi. We focus on the pieces you've always wanted to play while building the technical skills to play them beautifully.</p>
        </div>
      </div>
      <div className="order-1 md:order-2">
        <img src="https://picsum.photos/id/1082/1000/800" alt="Hands on piano keys" className="rounded-sm shadow-2xl" />
      </div>
    </div>
  </div>
);

const StringsPage = () => (
  <div className="py-24 px-4 max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h1 className="text-5xl md:text-6xl font-semibold mb-6 serif">Violin, Viola & Cello Lessons</h1>
      <p className="text-xl text-[#666666] max-w-3xl mx-auto">
        Mastering the expressive power of orchestral strings in the heart of Richmond London.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div>
        <img src="https://picsum.photos/id/617/1000/800" alt="Violin close up" className="rounded-sm shadow-2xl" />
      </div>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-3 serif">Tone & Intonation</h3>
          <p className="text-[#666666]">Specialized exercises for bowing technique and fingerboard accuracy. Developing a characteristic, beautiful string sound from the start.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3 serif">Chamber Music Skills</h3>
          <p className="text-[#666666]">Learning to play with others is vital. We incorporate duet playing in lessons to develop listening and ensemble skills.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3 serif">Postural Health</h3>
          <p className="text-[#666666]">Crucial for string players. I emphasize ergonomic posture to prevent tension and ensure a lifetime of comfortable playing.</p>
        </div>
      </div>
    </div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/piano" element={<PianoPage />} />
            <Route path="/strings" element={<StringsPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/testimonials" element={<Home />} />
            <Route path="/faq" element={<div className="py-24 px-4 max-w-4xl mx-auto"><h1 className="text-5xl font-semibold mb-12 serif">Frequently Asked Questions</h1><div className="space-y-8">
              <div className="bg-white p-8 border border-[#E8E4DE] shadow-sm">
                <h3 className="font-bold text-xl mb-3 text-[#4A5D4E]">What age can children start?</h3>
                <p className="text-[#666666]">Generally age 5 for piano and 6 for strings. We can discuss your child's specific readiness during a trial.</p>
              </div>
              <div className="bg-white p-8 border border-[#E8E4DE] shadow-sm">
                <h3 className="font-bold text-xl mb-3 text-[#4A5D4E]">Do I need my own instrument?</h3>
                <p className="text-[#666666]">Yes, for practice at home. I can advise on local Richmond shops for rentals or purchases.</p>
              </div>
              <div className="bg-white p-8 border border-[#E8E4DE] shadow-sm">
                <h3 className="font-bold text-xl mb-3 text-[#4A5D4E]">Where are you located?</h3>
                <p className="text-[#666666]">I teach from a private studio near Richmond Green, easily accessible from Kew, Twickenham, and East Sheen.</p>
              </div>
            </div></div>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
