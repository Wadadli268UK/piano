
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E8E4DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <span className="serif text-2xl font-semibold tracking-tight text-[#4A5D4E] group-hover:text-[#6B7C6E] transition-colors">
                Piano & Strings
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-[#4A5D4E] ${
                  location.pathname === item.path ? 'text-[#4A5D4E] border-b-2 border-[#4A5D4E]/30' : 'text-[#666666]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-[#4A5D4E] text-white px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-[#3D4D40] transition-all transform hover:-translate-y-0.5"
            >
              Book a Trial
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#4A5D4E] hover:bg-[#F3F0EC] transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#E8E4DE] py-4 px-6 space-y-3 shadow-lg">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block text-lg font-medium ${
                location.pathname === item.path ? 'text-[#4A5D4E]' : 'text-[#666666]'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/booking"
            onClick={() => setIsOpen(false)}
            className="block text-lg font-bold text-[#4A5D4E]"
          >
            Book a Trial
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
