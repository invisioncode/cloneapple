
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';
import { AppleLogo, SearchIcon, BagIcon, MenuIcon } from './Icons';
import { useAppLanguage, getPath } from '../utils/i18n';

const GlobalNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [bagItems] = useState<any[]>([]); 

  const { lang, t } = useAppLanguage();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  const loc = (path: string) => getPath(path, lang);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setIsBagOpen(false);
  }, [location]);

  // Handle Click Outside to close Bag/Search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsBagOpen(false);
        if (isSearchOpen) setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSearchOpen]);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen) {
        setIsMenuOpen(false);
        setIsBagOpen(false);
        setTimeout(() => {
            searchInputRef.current?.focus();
        }, 300);
    }
  }, [isSearchOpen]);

  const navItems: NavItem[] = [
    { name: t.nav.store, url: loc('/store') },
    { name: t.nav.mac, url: loc('/mac') },
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

  const quickLinks = [
    { text: 'Tìm Cửa Hàng', url: loc('/retail') },
    { text: 'Phụ Kiện', url: loc('/accessories') },
    { text: 'AirPods', url: loc('/airpods') },
    { text: 'Apple Trade In', url: loc('/shop/trade-in') },
  ];

  const toggleSearch = (e: React.MouseEvent) => {
      e.preventDefault();
      setIsSearchOpen(!isSearchOpen);
  };

  const toggleBag = (e: React.MouseEvent) => {
      e.preventDefault();
      if(isSearchOpen) setIsSearchOpen(false);
      setIsBagOpen(!isBagOpen);
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 h-[44px] transition-all duration-300 font-sans tracking-wide text-[12px]
        ${isMenuOpen ? 'bg-[#161617]' : 'bg-[#161617]/80 backdrop-blur-md'}
      `}
    >
      <div className="max-w-[1024px] mx-auto px-4 h-full relative z-50">
        
        {/* --- DESKTOP VIEW --- */}
        <div className="hidden md:flex justify-between items-center h-full">
            
            {/* Nav Items Container (Fades out when search is open) */}
            <div className={`absolute inset-0 flex justify-between items-center px-4 transition-all duration-300 ease-apple-ease
                ${isSearchOpen ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100 visible'}`}
            >
                <Link to={loc('/')} className="text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity p-2 -ml-2">
                    <AppleLogo />
                </Link>
                
                {navItems.map((item) => (
                    <Link 
                        key={item.name}
                        to={item.url}
                        className="text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity px-2"
                    >
                        {item.name}
                    </Link>
                ))}

                <div className="flex items-center">
                     <a href="#" className="text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity p-2" onClick={toggleSearch}>
                        <SearchIcon width={15} />
                    </a>
                    <a href="#" className="text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity p-2 -mr-2" onClick={toggleBag}>
                        <BagIcon width={13} />
                    </a>
                </div>
            </div>

            {/* Search Input Container (Fades in when search is open) */}
            <div className={`absolute inset-0 flex items-center px-4 transition-all duration-300 ease-apple-ease
                 ${isSearchOpen ? 'opacity-100 translate-x-0 visible' : 'opacity-0 translate-x-10 invisible pointer-events-none'}`}
            >
                 <SearchIcon className="text-[#86868b] w-[15px] mr-3" />
                 <input 
                    ref={searchInputRef}
                    type="text"
                    placeholder={t.aria.search}
                    className="flex-1 bg-transparent border-none outline-none text-white text-[17px] placeholder-[#86868b] h-full"
                    onKeyDown={(e) => e.key === 'Escape' && setIsSearchOpen(false)}
                 />
                 <button onClick={() => setIsSearchOpen(false)} className="text-[#86868b] hover:text-[#2997ff] transition-colors p-2 text-[20px] font-light leading-none">
                     &times;
                 </button>
            </div>
        </div>

        {/* --- MOBILE VIEW --- */}
        <div className="md:hidden flex justify-between items-center h-full relative z-50">
           <Link to={loc('/')} className="text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity px-2">
                <AppleLogo />
           </Link>
           <div className="flex items-center gap-4">
                <a href="#" className="text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity" onClick={toggleSearch}>
                    <SearchIcon width={17} />
                </a>
                <a href="#" className="text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity" onClick={toggleBag}>
                    <BagIcon width={15} />
                </a>
                <button 
                  className={`text-[#f5f5f7] opacity-80 hover:opacity-100 transition-all duration-300 px-2 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <span className="text-[24px] font-light leading-none block h-[18px] -mt-2">&times;</span>
                    ) : (
                        <MenuIcon />
                    )}
                </button>
           </div>
        </div>
      </div>

      {/* --- DESKTOP SEARCH DROPDOWN --- */}
      <div className={`hidden md:block absolute top-[44px] left-0 right-0 bg-white shadow-xl overflow-hidden transition-all duration-500 ease-in-out origin-top
          ${isSearchOpen ? 'h-[300px] opacity-100 visible' : 'h-0 opacity-0 invisible'}
      `}>
          <div className="max-w-[680px] mx-auto pt-10 px-10">
              <span className="text-[12px] text-[#6e6e73] uppercase font-semibold tracking-wide mb-3 block">Liên Kết Nhanh</span>
              <ul className="space-y-1">
                  {quickLinks.map((link, idx) => (
                      <li key={idx} className="group">
                          <Link 
                            to={link.url} 
                            className="block py-1.5 text-[14px] text-[#1d1d1f] group-hover:text-[#0066cc] group-hover:bg-[#f5f5f7] -mx-4 px-4 rounded-lg transition-colors"
                            onClick={() => setIsSearchOpen(false)}
                          >
                              {link.text}
                          </Link>
                      </li>
                  ))}
              </ul>
          </div>
      </div>

      {/* --- BAG DROPDOWN --- */}
      <div className={`absolute top-[48px] right-0 md:right-[max(0px,calc(50vw-512px+16px))] w-[280px] bg-white rounded-[12px] shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 ease-out origin-top-right z-40
           ${isBagOpen ? 'opacity-100 scale-100 visible translate-y-0' : 'opacity-0 scale-95 invisible -translate-y-2'}
      `}>
          <div className="relative">
             {/* Simple Arrow */}
             <div className="absolute -top-[6px] right-[14px] w-3 h-3 bg-white border-l border-t border-gray-200 rotate-45 z-50"></div>
             
             <div className="p-8 text-center">
                 {bagItems.length === 0 ? (
                     <>
                        <p className="text-[#6e6e73] text-[14px] mb-6">Giỏ hàng của bạn đang trống.</p>
                        <Link to={loc('/store')} className="text-[#0066cc] text-[12px] hover:underline" onClick={() => setIsBagOpen(false)}>
                            Mua Sắm
                        </Link>
                     </>
                 ) : (
                    <div className="text-left">
                        {/* Example of items if cart wasn't empty */}
                        <p>Items...</p>
                    </div>
                 )}
             </div>
             
             <div className="bg-[#f5f5f7] p-4 border-t border-gray-200">
                  <ul className="space-y-3">
                      <li>
                          <Link to={loc('/account')} className="flex items-center gap-3 text-[#0066cc] hover:underline text-[12px]" onClick={() => setIsBagOpen(false)}>
                             <span className="text-[#1d1d1f]"><BagIcon width={12} /></span>
                             Đơn Hàng
                          </Link>
                      </li>
                      <li>
                          <Link to={loc('/account')} className="flex items-center gap-3 text-[#0066cc] hover:underline text-[12px]" onClick={() => setIsBagOpen(false)}>
                             <span className="text-[#1d1d1f]"><svg width="12" height="12" viewBox="0 0 12 12"><path d="M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1zm0 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm0 7.25a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5A.75.75 0 0 1 6 9.75z" fill="currentColor"/></svg></span>
                             Tài Khoản
                          </Link>
                      </li>
                      <li>
                          <Link to={loc('/signin')} className="flex items-center gap-3 text-[#0066cc] hover:underline text-[12px]" onClick={() => setIsBagOpen(false)}>
                             <span className="text-[#1d1d1f]"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg></span>
                             Đăng Nhập
                          </Link>
                      </li>
                  </ul>
             </div>
          </div>
      </div>

      {/* --- DESKTOP BACKDROP OVERLAY --- */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-300
            ${isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}
        onClick={() => setIsSearchOpen(false)}
      />

      {/* --- MOBILE MENU OVERLAY --- */}
      <div 
        className={`md:hidden absolute top-[44px] left-0 right-0 bg-[#161617] h-[calc(100vh-44px)] overflow-y-auto transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)
          ${isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}
        `}
      >
        <div className="flex flex-col px-8 py-4 text-[#f5f5f7]">
            {/* Mobile Search Input */}
            <div className="relative mb-6 mt-2">
                 <input 
                    type="text" 
                    placeholder={t.aria.search} 
                    className="w-full bg-[#1d1d1f] rounded-[8px] h-[36px] pl-9 pr-3 text-[17px] text-white placeholder-[#86868b] outline-none focus:ring-1 focus:ring-[#0071e3]"
                 />
                 <SearchIcon className="absolute left-2 top-2 text-[#86868b] w-[14px]" />
            </div>

            <div className="border-b border-[#424245] mb-2"></div>

            {navItems.map((item, index) => (
                <div 
                    key={item.name} 
                    className="border-b border-[#424245]"
                    style={{ 
                        animation: isMenuOpen ? `fadeInSlideDown 0.5s ease forwards ${index * 0.05}s` : 'none',
                        opacity: 0 
                    }}
                >
                    <Link 
                    to={item.url}
                    className="block py-3 text-[17px] font-semibold text-[#f5f5f7] hover:text-[#2997ff]"
                    onClick={() => setIsMenuOpen(false)}
                    >
                    {item.name}
                    </Link>
                </div>
            ))}
        </div>
      </div>
      
      <style>{`
        @keyframes fadeInSlideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .ease-apple-ease {
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </nav>
  );
};

export default GlobalNavbar;
