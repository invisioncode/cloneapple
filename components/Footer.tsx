import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AppleIcon, ChevronRight } from './Icons';

interface FooterLink {
  name: string;
  url: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerData: FooterSection[] = [
  {
    title: 'Mua Sắm Và Tìm Hiểu',
    links: [
        { name: 'Cửa Hàng', url: '/store' },
        { name: 'Mac', url: '/mac' },
        { name: 'iPad', url: '/ipad' },
        { name: 'iPhone', url: '/iphone' },
        { name: 'Watch', url: '/watch' },
        { name: 'Vision', url: '/apple-vision-pro' },
        { name: 'AirPods', url: '/airpods' },
        { name: 'TV & Nhà', url: '/tv-home' },
        { name: 'AirTag', url: '/shop/accessories/all' },
        { name: 'Phụ Kiện', url: '/shop/accessories/all' },
        { name: 'Thẻ Quà Tặng', url: '/store' }
    ]
  },
  {
    title: 'Ví Apple',
    links: [
        { name: 'Ví', url: '/wallet' },
        { name: 'Apple Pay', url: '/apple-pay' }
    ]
  },
  {
    title: 'Tài Khoản',
    links: [
        { name: 'Quản Lý Tài Khoản Apple', url: 'https://appleid.apple.com' },
        { name: 'Tài Khoản Apple Store', url: '/account' },
        { name: 'iCloud.com', url: 'https://www.icloud.com' }
    ]
  },
  {
    title: 'Giải Trí',
    links: [
        { name: 'Apple One', url: '/services/apple-one' },
        { name: 'Apple TV', url: '/services/apple-tv-plus' },
        { name: 'Apple Music', url: '/services/apple-music' },
        { name: 'Apple Arcade', url: '/services/apple-arcade' },
        { name: 'Apple Podcasts', url: '/services/apple-podcasts' },
        { name: 'Apple Books', url: '/services/apple-books' }
    ]
  },
  {
    title: 'Apple Store',
    links: [
        { name: 'Ứng Dụng Apple Store', url: 'https://apps.apple.com' },
        { name: 'Apple Trade In', url: '/store/trade-in' },
        { name: 'Tài Chính', url: '/store/financing' },
        { name: 'Tình Trạng Đơn Hàng', url: '/store/order-status' },
        { name: 'Hỗ Trợ Mua Hàng', url: '/store/help' }
    ]
  },
  {
    title: 'Dành Cho Doanh Nghiệp',
    links: [
        { name: 'Apple Và Doanh Nghiệp', url: '/business' },
        { name: 'Mua Hàng Cho Doanh Nghiệp', url: '/business/shop' }
    ]
  },
  {
    title: 'Cho Giáo Dục',
    links: [
        { name: 'Apple Và Giáo Dục', url: '/education' },
        { name: 'Mua Hàng Cho Bậc Đại Học', url: '/education/k12' }
    ]
  },
  {
     title: 'Về Apple',
     links: [
         { name: 'Newsroom', url: '/newsroom' },
         { name: 'Lãnh Đạo Của Apple', url: '/leadership' },
         { name: 'Nhà Đầu Tư', url: '/investor' },
         { name: 'Đạo Đức & Quy Tắc', url: '/ethics' },
         { name: 'Sự Kiện', url: '/events' },
         { name: 'Liên Hệ Apple', url: '/contact' }
     ]
  }
];

const healthLinks: FooterSection = {
    title: 'Cho Chăm Sóc Sức Khỏe',
    links: [{ name: 'Apple và Chăm Sóc Sức Khỏe', url: '/healthcare' }]
};

const governmentLinks: FooterSection = {
    title: 'Cho Chính Phủ',
    links: [{ name: 'Apple và Chính Phủ', url: '/government' }]
};

const valuesLinks: FooterSection = {
    title: 'Giá Trị Cốt Lõi Của Apple',
    links: [
        { name: 'Trợ Năng', url: '/accessibility' },
        { name: 'Môi Trường', url: '/environment' },
        { name: 'Quyền Riêng Tư', url: '/privacy' },
        { name: 'Đổi Mới Chuỗi Cung Ứng', url: '/supplier-responsibility' }
    ]
};

const routeNameMap: Record<string, string> = {
  '/mac': 'Mac',
  '/ipad': 'iPad',
  '/iphone': 'iPhone',
  '/watch': 'Watch',
  '/apple-vision-pro': 'Apple Vision Pro',
  '/airpods': 'AirPods',
  '/tv-home': 'TV & Nhà',
  '/services': 'Giải Trí',
  '/accessories': 'Phụ Kiện',
  '/shop/accessories/all': 'Phụ Kiện',
  '/support': 'Hỗ Trợ',
  '/store': 'Cửa Hàng',
  '/choose-country-region': 'Chọn quốc gia hoặc khu vực',
};

const Breadcrumbs = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  if (currentPath === '/') return null;
  
  // Find the matching name
  let pageName = routeNameMap[currentPath];
  
  // Simple check for sub-routes if exact match fails
  if (!pageName) {
      const key = Object.keys(routeNameMap).find(k => currentPath.startsWith(k) && k !== '/');
      if (key) pageName = routeNameMap[key];
  }

  return (
    <nav aria-label="Breadcrumbs" className="pt-4 mb-2 overflow-hidden">
      <ol className="flex items-center gap-2 text-[12px] text-[#424245] leading-normal">
        <li>
            <Link to="/" className="text-[#1d1d1f] hover:text-black flex items-center" aria-label="Apple">
                <AppleIcon className="h-[14px] w-auto -mt-[2px]" />
            </Link>
        </li>
        {pageName && (
          <>
            <li aria-hidden="true" className="text-[#86868b] flex items-center">
                <ChevronRight className="h-[10px] w-[10px] stroke-[2.5]" />
            </li>
            <li>
                <span aria-current="page" className="text-[#424245]">{pageName}</span>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f5f7] text-[#1d1d1f] text-xs pt-8 pb-6 px-4">
      <div className="max-w-[980px] mx-auto">
        
        {/* Footnotes */}
        <section aria-label="Footnotes" className="border-b border-[#d2d2d7] pb-4 mb-0 text-[#6e6e73]">
            <p className="mb-2">1. Apple TV yêu cầu đăng ký thuê bao.</p>
            <p>Một số tính năng có thể thay đổi. Một số tính năng, ứng dụng và dịch vụ chỉ khả dụng ở một số khu vực hoặc ngôn ngữ.</p>
        </section>

        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Directory Columns */}
        <nav aria-label="Apple Directory" className="hidden md:flex flex-wrap justify-between pt-5">
            <div className="w-1/5 pr-4">
                <FooterColumn section={footerData[0]} />
                <FooterColumn section={footerData[1]} />
            </div>
            <div className="w-1/5 pr-4">
                <FooterColumn section={footerData[2]} />
                <FooterColumn section={footerData[3]} />
            </div>
            <div className="w-1/5 pr-4">
                <FooterColumn section={footerData[4]} />
            </div>
            <div className="w-1/5 pr-4">
                <FooterColumn section={footerData[5]} />
                <FooterColumn section={footerData[6]} />
                <div className="pt-6">
                    <FooterColumn section={healthLinks} noMargin />
                </div>
                 <div className="pt-6">
                    <FooterColumn section={governmentLinks} noMargin />
                </div>
            </div>
             <div className="w-1/5">
                 <div className="pt-0">
                    <FooterColumn section={valuesLinks} />
                </div>
                <FooterColumn section={footerData[7]} />
            </div>
        </nav>

        {/* Mobile Accordion (Simplified as stacked for this demo) */}
        <nav aria-label="Apple Directory" className="md:hidden pt-4">
             {[...footerData, healthLinks, governmentLinks, valuesLinks].map((section) => (
                 <div key={section.title} className="border-b border-[#d2d2d7] py-3">
                     <h3 className="font-semibold text-[#1d1d1f]">{section.title}</h3>
                 </div>
             ))}
        </nav>

        <section aria-label="Legal" className="pt-8 text-[#6e6e73]">
            <div className="mb-2">
                Xem thêm cách để mua hàng: <Link to="/store/locator" className="text-[#0066cc] hover:underline" title="Tìm cửa hàng bán lẻ">Tìm cửa hàng bán lẻ</Link> gần bạn. Hoặc gọi <a href="tel:18001192" className="text-[#0066cc] hover:underline" title="Call 1800 1192">1800 1192</a>.
            </div>
            <div className="border-t border-[#d2d2d7] pt-4 mt-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-2 md:mb-0">
                    Bản quyền © 2025 Apple Inc. Bảo lưu mọi quyền.
                </div>
                <div className="flex flex-wrap gap-x-4">
                    <Link to="/privacy" className="hover:underline text-[#424245]" title="Chính Sách Quyền Riêng Tư">Chính Sách Quyền Riêng Tư</Link>
                    <Link to="/legal" className="hover:underline text-[#424245]" title="Điều Khoản Sử Dụng">Điều Khoản Sử Dụng</Link>
                    <Link to="/shop/sales-policies" className="hover:underline text-[#424245]" title="Bán Hàng Và Hoàn Tiền">Bán Hàng Và Hoàn Tiền</Link>
                    <Link to="/legal" className="hover:underline text-[#424245]" title="Pháp Lý">Pháp Lý</Link>
                    <Link to="/sitemap" className="hover:underline text-[#424245]" title="Bản Đồ Trang Web">Bản Đồ Trang Web</Link>
                </div>
                <div className="mt-2 md:mt-0">
                    <Link to="/choose-country-region" className="hover:underline text-[#424245]" title="Choose your country or region">Việt Nam</Link>
                </div>
            </div>
        </section>
      </div>
    </footer>
  );
};

const FooterColumn: React.FC<{ section: FooterSection, noMargin?: boolean }> = ({ section, noMargin }) => (
    <div className={noMargin ? 'mb-0' : 'mb-6'}>
        <h3 className="font-semibold mb-2 text-[#1d1d1f]">{section.title}</h3>
        <ul>
            {section.links.map((link) => {
                const isExternal = link.url.startsWith('http');
                return (
                    <li key={link.name} className="mb-2">
                        {isExternal ? (
                            <a 
                                href={link.url} 
                                className="hover:underline text-[#424245]"
                                target="_blank"
                                rel="noreferrer"
                                title={`Go to ${link.name} (External Link)`}
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link 
                                to={link.url} 
                                className="hover:underline text-[#424245]"
                                title={`Go to ${link.name}`}
                            >
                                {link.name}
                            </Link>
                        )}
                    </li>
                );
            })}
        </ul>
    </div>
);

export default Footer;