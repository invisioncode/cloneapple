
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavItem } from '../types';
import { AppleLogo, SearchIcon, BagIcon, MenuIcon } from './Icons';
import { useAppLanguage, getPath } from '../utils/i18n';

const GlobalNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const { lang, t } = useAppLanguage();
  const navigate = useNavigate();

  // Helper to localize paths defined in static config
  const loc = (path: string) => getPath(path, lang);

  // Dynamic Nav Items based on translation
  const navItems: NavItem[] = [
    { 
        name: t.nav.store, 
        url: loc('/store'),
        submenu: [
        {
            title: 'Mua Sắm',
            items: [
            { name: 'Mua Sản Phẩm Mới Nhất', url: loc('/store') },
            { name: 'Mac', url: loc('/mac') },
            { name: 'iPad', url: loc('/ipad') },
            { name: 'iPhone', url: loc('/iphone') },
            { name: 'Apple Watch', url: loc('/watch') },
            { name: 'Apple Vision Pro', url: loc('/apple-vision-pro') },
            { name: 'AirPods', url: loc('/airpods') },
            { name: 'TV & Nhà', url: loc('/tv-home') },
            { name: 'Phụ Kiện', url: loc('/accessories') },
            ]
        }
        ]
    },
    { 
        name: t.nav.mac, 
        url: loc('/mac'),
        submenu: [
        {
            title: 'Khám Phá Mac',
            items: [
            { name: 'Khám Phá Tất Cả Mac', url: loc('/mac') },
            { name: 'MacBook Air', url: loc('/mac/macbook-air') },
            { name: 'MacBook Pro', url: loc('/mac/macbook-pro') },
            { name: 'iMac', url: loc('/mac/imac') },
            { name: 'Mac mini', url: loc('/mac/mac-mini') },
            ]
        }
        ]
    },
    { name: t.nav.ipad, url: loc('/ipad') },
    { name: t.nav.iphone, url: loc('/iphone') },
    { name: t.nav.watch, url: loc('/watch') },
    { name: t.nav.vision, url: loc('/apple-vision-pro') },
    { name: t.nav.airpods, url: loc('/airpods') },
    { name: t.nav.tvhome, url: loc('/tv-home') },
    { name: t.nav.entertainment, url: loc('/services') },
    { name: t.nav.accessories, url: loc('/accessories') },
    { name: t.nav.support, url: loc('/support') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      onMouseLeave={() => setHoveredNav(null)}
      className={`fixed top-0 left-0 right-0 z-50 h-[44px] transition-all duration-300 ${
        scrolled || isMenuOpen || hoveredNav ? 'bg-[#161617]' : 'bg-[#161617]'
      }`}
    >
      <div className="max-w-[1024px] mx-auto px-4 h-full relative z-50 bg-[#161617]">
        {/* Desktop Nav */}
        <div className="hidden md:flex justify-between items-center h-full text-[#f5f5f7] text-xs font-light tracking-wide">
          <Link to={loc('/')} className="opacity-80 hover:opacity-100 transition-opacity p-2" aria-label={t.aria.apple}>
            <AppleLogo />
          </Link>
          {navItems.map((item) => (
            <div 
                key={item.name} 
                className="h-full flex items-center"
                onMouseEnter={() => setHoveredNav(item.name)}
            >
                <Link 
                  to={item.url}
                  className={`relative group opacity-80 hover:opacity-100 transition-opacity px-2 ${hoveredNav === item.name ? 'opacity-100' : ''}`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute -bottom-1 left-2 right-2 h-[1px] bg-[#f5f5f7] origin-center transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>
            </div>
          ))}
          <a href="#" className="opacity-80 hover:opacity-100 transition-opacity p-2" aria-label={t.aria.search}>
            <SearchIcon />
          </a>
          <a href="#" className="opacity-80 hover:opacity-100 transition-opacity p-2" aria-label={t.aria.bag}>
            <BagIcon />
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex justify-between items-center h-full text-[#f5f5f7]">
           <Link to={loc('/')} className="opacity-80 hover:opacity-100 transition-opacity px-2" aria-label={t.aria.apple}>
            <AppleLogo />
          </Link>
          <div className="flex items-center">
             <a href="#" className="opacity-80 hover:opacity-100 transition-opacity px-4" aria-label={t.aria.search}>
              <SearchIcon />
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity px-4" aria-label={t.aria.bag}>
              <BagIcon />
            </a>
            <button 
              className="opacity-80 hover:opacity-100 transition-opacity px-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? t.aria.close_menu : t.aria.menu}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Submenu - Keeping it simple for demo, normally would translate deep submenu items too */}
      <div 
        className={`absolute top-[44px] left-0 w-full bg-[#161617] text-[#f5f5f7] overflow-hidden transition-all duration-300 ease-in-out border-[#424245] ${
            hoveredNav && navItems.find(i => i.name === hoveredNav)?.submenu 
            ? 'max-h-[600px] py-10 opacity-100 visible border-b' 
            : 'max-h-0 py-0 opacity-0 invisible border-none'
        }`}
        onMouseEnter={() => setHoveredNav(hoveredNav)}
        onMouseLeave={() => setHoveredNav(null)}
      >
        <div className="max-w-[1024px] mx-auto px-4 flex justify-start gap-12 text-[12px]">
            {hoveredNav && navItems.find(i => i.name === hoveredNav)?.submenu?.map((col, idx) => (
                <div key={idx} className="flex flex-col gap-2 min-w-[100px]">
                    {col.title && <span className="text-[#86868b] text-[12px] mb-2">{col.title}</span>}
                    {col.items.map((subItem, subIdx) => (
                        <Link 
                            key={subIdx} 
                            to={subItem.url} 
                            className="text-[#e8e8ed] hover:text-white hover:underline text-[20px] md:text-[12px] font-semibold md:font-normal leading-relaxed"
                        >
                            {subItem.name}
                        </Link>
                    ))}
                </div>
            ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-[44px] left-0 right-0 bg-[#161617] h-[calc(100vh-44px)] overflow-y-auto transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-10 py-4 text-[#f5f5f7]">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-[#424245]">
                <Link 
                  to={item.url}
                  className="block py-3 text-[17px] font-semibold opacity-80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
            </div>
          ))}
        </div>
      </div>
      
      {/* Backdrop Curtain for Desktop Hover */}
      <div 
        className={`fixed top-[44px] left-0 w-full h-screen bg-black/40 backdrop-blur-sm transition-opacity duration-300 -z-10 ${
            hoveredNav && navItems.find(i => i.name === hoveredNav)?.submenu ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />
    </nav>
  );
};

export default GlobalNavbar;
