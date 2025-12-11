import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from '../types';
import { AppleLogo, SearchIcon, BagIcon, MenuIcon } from './Icons';

const navItems: NavItem[] = [
  { name: 'Cửa Hàng', url: '/store' },
  { name: 'Mac', url: '/mac' },
  { name: 'iPad', url: '/ipad' },
  { name: 'iPhone', url: '/iphone' },
  { name: 'Watch', url: '/watch' },
  { name: 'Vision', url: '/apple-vision-pro' },
  { name: 'AirPods', url: '/airpods' },
  { name: 'TV & Nhà', url: '/tv-home' },
  { name: 'Giải Trí', url: '/services' },
  { name: 'Phụ Kiện', url: '/accessories' },
  { name: 'Hỗ Trợ', url: '/support' },
];

const GlobalNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 h-[44px] transition-all duration-300 ${
        scrolled || isMenuOpen ? 'bg-[rgba(22,22,23,0.8)] backdrop-blur-md' : 'bg-[#161617]'
      }`}
    >
      <div className="max-w-[1024px] mx-auto px-4 h-full">
        {/* Desktop Nav */}
        <div className="hidden md:flex justify-between items-center h-full text-[#f5f5f7] text-xs font-light tracking-wide">
          <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity p-2">
            <AppleLogo />
          </Link>
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.url}
              className="opacity-80 hover:opacity-100 transition-opacity px-2"
            >
              {item.name}
            </Link>
          ))}
          <a href="#" className="opacity-80 hover:opacity-100 transition-opacity p-2">
            <SearchIcon />
          </a>
          <a href="#" className="opacity-80 hover:opacity-100 transition-opacity p-2">
            <BagIcon />
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex justify-between items-center h-full text-[#f5f5f7]">
           <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity px-2">
            <AppleLogo />
          </Link>
          <div className="flex items-center">
             <a href="#" className="opacity-80 hover:opacity-100 transition-opacity px-4">
              <SearchIcon />
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity px-4">
              <BagIcon />
            </a>
            <button 
              className="opacity-80 hover:opacity-100 transition-opacity px-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-[44px] left-0 right-0 bg-[#161617] h-screen transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-10 py-4 text-[#f5f5f7]">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.url}
              className="py-3 border-b border-[#424245] text-[17px] font-normal opacity-80"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default GlobalNavbar;