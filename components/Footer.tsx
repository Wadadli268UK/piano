
import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-[#F3F0EC] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-[#333333] pb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="serif text-2xl font-medium mb-6">Piano & Strings</h3>
            <p className="text-[#999999] text-sm leading-relaxed">
              Professional piano and string instrument tuition in the heart of Richmond, London. 
              Fostering musical excellence and a lifelong love for art.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6 text-[#999999]">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6 text-[#999999]">Lessons</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/piano" className="hover:text-white transition-colors">Piano Lessons</Link></li>
              <li><Link to="/strings" className="hover:text-white transition-colors">Violin Lessons</Link></li>
              <li><Link to="/strings" className="hover:text-white transition-colors">Viola Lessons</Link></li>
              <li><Link to="/strings" className="hover:text-white transition-colors">Cello Lessons</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6 text-[#999999]">Local Areas</h4>
            <p className="text-sm text-[#999999] leading-relaxed">
              Serving Richmond, Kew, East Sheen, Twickenham, Barnes, and Petersham.
            </p>
            <div className="mt-6 flex space-x-4">
              {/* Social Placeholders */}
              <div className="w-8 h-8 rounded-full bg-[#333333] hover:bg-[#4A5D4E] transition-colors cursor-pointer flex items-center justify-center">
                <span className="text-xs">IG</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#333333] hover:bg-[#4A5D4E] transition-colors cursor-pointer flex items-center justify-center">
                <span className="text-xs">FB</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#666666]">
          <p>
            © {new Date().getFullYear()} Piano & Strings. All rights reserved. 
            <span className="ml-1">Site by <a href="https://www.mediadesign.ltd" target="_blank" rel="noopener noreferrer" className="hover:text-[#999999] transition-colors underline decoration-[#333333]">Media Design</a></span>
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-[#999999]">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#999999]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
