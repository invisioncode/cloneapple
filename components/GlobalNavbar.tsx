import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from '../types';
import { AppleLogo, SearchIcon, BagIcon, MenuIcon } from './Icons';

const navItems: NavItem[] = [
  { 
    name: 'Cửa Hàng', 
    url: '/store',
    submenu: [
      {
        title: 'Mua Sắm',
        items: [
          { name: 'Mua Sản Phẩm Mới Nhất', url: '/store' },
          { name: 'Mac', url: '/mac' },
          { name: 'iPad', url: '/ipad' },
          { name: 'iPhone', url: '/iphone' },
          { name: 'Apple Watch', url: '/watch' },
          { name: 'Apple Vision Pro', url: '/apple-vision-pro' },
          { name: 'AirPods', url: '/airpods' },
          { name: 'TV & Nhà', url: '/tv-home' },
          { name: 'Phụ Kiện', url: '/accessories' },
        ]
      },
      {
        title: 'Liên Kết Nhanh',
        items: [
          { name: 'Tìm Cửa Hàng', url: '/store/locator' },
          { name: 'Tình Trạng Đơn Hàng', url: '/store/order-status' },
          { name: 'Apple Trade In', url: '/store/trade-in' },
          { name: 'Tài Chính', url: '/store/financing' },
        ]
      }
    ]
  },
  { 
    name: 'Mac', 
    url: '/mac',
    submenu: [
      {
        title: 'Khám Phá Mac',
        items: [
          { name: 'Khám Phá Tất Cả Mac', url: '/mac' },
          { name: 'MacBook Air', url: '/mac/macbook-air' },
          { name: 'MacBook Pro', url: '/mac/macbook-pro' },
          { name: 'iMac', url: '/mac/imac' },
          { name: 'Mac mini', url: '/mac/mac-mini' },
          { name: 'Mac Studio', url: '/mac/mac-studio' },
          { name: 'Mac Pro', url: '/mac/mac-pro' },
          { name: 'Màn Hình', url: '/mac/displays' },
        ]
      },
      {
        title: 'Mua Mac',
        items: [
          { name: 'Mua Mac', url: '/store/buy-mac' },
          { name: 'Phụ Kiện Mac', url: '/mac/accessories' },
        ]
      },
      {
        title: 'Tìm Hiểu Thêm',
        items: [
          { name: 'Hỗ Trợ Mac', url: '/support/mac' },
          { name: 'macOS', url: '/mac/os' },
          { name: 'Apple Intelligence', url: '/apple-intelligence' },
        ]
      }
    ]
  },
  { 
    name: 'iPad', 
    url: '/ipad',
    submenu: [
      {
        title: 'Khám Phá iPad',
        items: [
          { name: 'Khám Phá Tất Cả iPad', url: '/ipad' },
          { name: 'iPad Pro', url: '/ipad/ipad-pro' },
          { name: 'iPad Air', url: '/ipad/ipad-air' },
          { name: 'iPad', url: '/ipad/ipad-10-9' },
          { name: 'iPad mini', url: '/ipad/ipad-mini' },
          { name: 'Apple Pencil', url: '/ipad/apple-pencil' },
          { name: 'Bàn Phím', url: '/ipad/keyboards' },
        ]
      },
      {
        title: 'Mua iPad',
        items: [
          { name: 'Mua iPad', url: '/store/buy-ipad' },
          { name: 'Phụ Kiện iPad', url: '/ipad/accessories' },
        ]
      }
    ]
  },
  { 
    name: 'iPhone', 
    url: '/iphone',
    submenu: [
      {
        title: 'Khám Phá iPhone',
        items: [
          { name: 'Khám Phá Tất Cả iPhone', url: '/iphone' },
          { name: 'iPhone 17 Pro', url: '/iphone/iphone-17-pro' },
          { name: 'iPhone 17', url: '/iphone/iphone-17' },
          { name: 'iPhone 16', url: '/iphone/iphone-16' },
          { name: 'iPhone SE', url: '/iphone/iphone-se' },
        ]
      },
      {
        title: 'Mua iPhone',
        items: [
          { name: 'Mua iPhone', url: '/store/buy-iphone' },
          { name: 'Phụ Kiện iPhone', url: '/iphone/accessories' },
        ]
      }
    ]
  },
  { 
    name: 'Watch', 
    url: '/watch',
    submenu: [
      {
        title: 'Khám Phá Watch',
        items: [
          { name: 'Khám Phá Tất Cả Apple Watch', url: '/watch' },
          { name: 'Apple Watch Series 11', url: '/watch/apple-watch-series-11' },
          { name: 'Apple Watch Ultra 3', url: '/watch/apple-watch-ultra-3' },
          { name: 'Apple Watch SE', url: '/watch/apple-watch-se' },
          { name: 'Nike', url: '/watch/nike' },
          { name: 'Hermès', url: '/watch/hermes' },
        ]
      },
      {
        title: 'Mua Watch',
        items: [
          { name: 'Mua Apple Watch', url: '/store/buy-watch' },
          { name: 'Dây Đeo', url: '/watch/bands' },
          { name: 'Phụ Kiện Watch', url: '/watch/accessories' },
        ]
      }
    ]
  },
  { 
    name: 'Vision', 
    url: '/apple-vision-pro',
    submenu: [
      {
        title: 'Khám Phá Vision',
        items: [
          { name: 'Khám Phá Apple Vision Pro', url: '/apple-vision-pro' },
        ]
      },
      {
        title: 'Mua Vision',
        items: [
          { name: 'Mua Apple Vision Pro', url: '/store/buy-vision-pro' },
        ]
      }
    ]
  },
  { 
    name: 'AirPods', 
    url: '/airpods',
    submenu: [
      {
        title: 'Khám Phá AirPods',
        items: [
          { name: 'Khám Phá Tất Cả AirPods', url: '/airpods' },
          { name: 'AirPods 4', url: '/airpods/airpods-4' },
          { name: 'AirPods Pro 2', url: '/airpods/airpods-pro-2' },
          { name: 'AirPods Max', url: '/airpods/airpods-max' },
        ]
      },
      {
        title: 'Mua AirPods',
        items: [
          { name: 'Mua AirPods', url: '/store/buy-airpods' },
        ]
      }
    ]
  },
  { 
    name: 'TV & Nhà', 
    url: '/tv-home',
    submenu: [
      {
        title: 'Khám Phá TV & Nhà',
        items: [
          { name: 'Khám Phá TV & Nhà', url: '/tv-home' },
          { name: 'Apple TV 4K', url: '/tv-home/apple-tv-4k' },
          { name: 'HomePod', url: '/tv-home/homepod' },
          { name: 'HomePod mini', url: '/tv-home/homepod-mini' },
        ]
      },
      {
        title: 'Mua TV & Nhà',
        items: [
          { name: 'Mua Apple TV 4K', url: '/store/buy-apple-tv-4k' },
          { name: 'Mua HomePod', url: '/store/buy-homepod' },
          { name: 'Phụ Kiện TV & Nhà', url: '/tv-home/accessories' },
        ]
      }
    ]
  },
  { 
    name: 'Giải Trí', 
    url: '/services',
    submenu: [
      {
        title: 'Khám Phá Dịch Vụ',
        items: [
          { name: 'Khám Phá Dịch Vụ', url: '/services' },
          { name: 'Apple One', url: '/services/apple-one' },
          { name: 'Apple TV+', url: '/services/apple-tv-plus' },
          { name: 'Apple Music', url: '/services/apple-music' },
          { name: 'Apple Arcade', url: '/services/apple-arcade' },
          { name: 'Apple Podcasts', url: '/services/apple-podcasts' },
          { name: 'Apple Books', url: '/services/apple-books' },
        ]
      }
    ]
  },
  { 
    name: 'Phụ Kiện', 
    url: '/accessories',
    submenu: [
      {
        title: 'Mua Phụ Kiện',
        items: [
          { name: 'Mua Tất Cả Phụ Kiện', url: '/accessories' },
          { name: 'Mac', url: '/accessories/mac' },
          { name: 'iPad', url: '/accessories/ipad' },
          { name: 'iPhone', url: '/accessories/iphone' },
          { name: 'Apple Watch', url: '/accessories/watch' },
          { name: 'AirPods', url: '/accessories/airpods' },
          { name: 'TV & Nhà', url: '/accessories/tv-home' },
        ]
      }
    ]
  },
  { 
    name: 'Hỗ Trợ', 
    url: '/support',
    submenu: [
      {
        title: 'Khám Phá Hỗ Trợ',
        items: [
          { name: 'Hỗ Trợ iPhone', url: '/support/iphone' },
          { name: 'Hỗ Trợ Mac', url: '/support/mac' },
          { name: 'Hỗ Trợ iPad', url: '/support/ipad' },
          { name: 'Hỗ Trợ Watch', url: '/support/watch' },
          { name: 'Hỗ Trợ AirPods', url: '/support/airpods' },
          { name: 'Hỗ Trợ Music', url: '/support/music' },
          { name: 'Hỗ Trợ TV', url: '/support/tv' },
        ]
      },
      {
        title: 'Trợ Giúp',
        items: [
          { name: 'Cộng Đồng', url: '/support/community' },
          { name: 'Kiểm Tra Bảo Hành', url: '/support/check-coverage' },
          { name: 'Sửa Chữa', url: '/support/repair' },
          { name: 'Liên Hệ', url: '/support/contact' },
        ]
      }
    ]
  },
];

const GlobalNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

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
          <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity p-2">
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
                  className={`opacity-80 hover:opacity-100 transition-opacity px-2 ${hoveredNav === item.name ? 'opacity-100' : ''}`}
                >
                  {item.name}
                </Link>
            </div>
          ))}
          <a href="/search" className="opacity-80 hover:opacity-100 transition-opacity p-2">
            <SearchIcon />
          </a>
          <a href="/bag" className="opacity-80 hover:opacity-100 transition-opacity p-2">
            <BagIcon />
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex justify-between items-center h-full text-[#f5f5f7]">
           <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity px-2">
            <AppleLogo />
          </Link>
          <div className="flex items-center">
             <a href="/search" className="opacity-80 hover:opacity-100 transition-opacity px-4">
              <SearchIcon />
            </a>
            <a href="/bag" className="opacity-80 hover:opacity-100 transition-opacity px-4">
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

      {/* Desktop Submenu */}
      <div 
        className={`absolute top-[44px] left-0 w-full bg-[#161617] text-[#f5f5f7] overflow-hidden transition-all duration-300 ease-in-out border-b border-[#424245] ${
            hoveredNav && navItems.find(i => i.name === hoveredNav)?.submenu 
            ? 'h-auto py-10 opacity-100 visible' 
            : 'h-0 py-0 opacity-0 invisible'
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