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
          { name: 'Tìm Cửa Hàng', url: '#' },
          { name: 'Tình Trạng Đơn Hàng', url: '#' },
          { name: 'Apple Trade In', url: '#' },
          { name: 'Tài Chính', url: '#' },
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
          { name: 'MacBook Air', url: '#' },
          { name: 'MacBook Pro', url: '#' },
          { name: 'iMac', url: '#' },
          { name: 'Mac mini', url: '#' },
          { name: 'Mac Studio', url: '#' },
          { name: 'Mac Pro', url: '#' },
          { name: 'Màn Hình', url: '#' },
        ]
      },
      {
        title: 'Mua Mac',
        items: [
          { name: 'Mua Mac', url: '#' },
          { name: 'Phụ Kiện Mac', url: '#' },
        ]
      },
      {
        title: 'Tìm Hiểu Thêm',
        items: [
          { name: 'Hỗ Trợ Mac', url: '#' },
          { name: 'macOS', url: '#' },
          { name: 'Apple Intelligence', url: '#' },
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
          { name: 'iPad Pro', url: '#' },
          { name: 'iPad Air', url: '#' },
          { name: 'iPad', url: '#' },
          { name: 'iPad mini', url: '#' },
          { name: 'Apple Pencil', url: '#' },
          { name: 'Bàn Phím', url: '#' },
        ]
      },
      {
        title: 'Mua iPad',
        items: [
          { name: 'Mua iPad', url: '#' },
          { name: 'Phụ Kiện iPad', url: '#' },
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
          { name: 'iPhone 17 Pro', url: '#' },
          { name: 'iPhone 17', url: '#' },
          { name: 'iPhone 16', url: '#' },
          { name: 'iPhone SE', url: '#' },
        ]
      },
      {
        title: 'Mua iPhone',
        items: [
          { name: 'Mua iPhone', url: '#' },
          { name: 'Phụ Kiện iPhone', url: '#' },
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
          { name: 'Apple Watch Series 11', url: '#' },
          { name: 'Apple Watch Ultra 3', url: '#' },
          { name: 'Apple Watch SE', url: '#' },
          { name: 'Nike', url: '#' },
          { name: 'Hermès', url: '#' },
        ]
      },
      {
        title: 'Mua Watch',
        items: [
          { name: 'Mua Apple Watch', url: '#' },
          { name: 'Dây Đeo', url: '#' },
          { name: 'Phụ Kiện Watch', url: '#' },
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
          { name: 'Mua Apple Vision Pro', url: '#' },
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
          { name: 'AirPods 4', url: '#' },
          { name: 'AirPods Pro 2', url: '#' },
          { name: 'AirPods Max', url: '#' },
        ]
      },
      {
        title: 'Mua AirPods',
        items: [
          { name: 'Mua AirPods', url: '#' },
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
          { name: 'Apple TV 4K', url: '#' },
          { name: 'HomePod', url: '#' },
          { name: 'HomePod mini', url: '#' },
        ]
      },
      {
        title: 'Mua TV & Nhà',
        items: [
          { name: 'Mua Apple TV 4K', url: '#' },
          { name: 'Mua HomePod', url: '#' },
          { name: 'Phụ Kiện TV & Nhà', url: '#' },
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
          { name: 'Apple One', url: '#' },
          { name: 'Apple TV+', url: '#' },
          { name: 'Apple Music', url: '#' },
          { name: 'Apple Arcade', url: '#' },
          { name: 'Apple Podcasts', url: '#' },
          { name: 'Apple Books', url: '#' },
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
          { name: 'Mac', url: '#' },
          { name: 'iPad', url: '#' },
          { name: 'iPhone', url: '#' },
          { name: 'Apple Watch', url: '#' },
          { name: 'AirPods', url: '#' },
          { name: 'TV & Nhà', url: '#' },
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
          { name: 'Hỗ Trợ iPhone', url: '#' },
          { name: 'Hỗ Trợ Mac', url: '#' },
          { name: 'Hỗ Trợ iPad', url: '#' },
          { name: 'Hỗ Trợ Watch', url: '#' },
          { name: 'Hỗ Trợ AirPods', url: '#' },
          { name: 'Hỗ Trợ Music', url: '#' },
          { name: 'Hỗ Trợ TV', url: '#' },
        ]
      },
      {
        title: 'Trợ Giúp',
        items: [
          { name: 'Cộng Đồng', url: '#' },
          { name: 'Kiểm Tra Bảo Hành', url: '#' },
          { name: 'Sửa Chữa', url: '#' },
          { name: 'Liên Hệ', url: '#' },
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