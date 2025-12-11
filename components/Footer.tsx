import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AppleLogo, ChevronRight } from './Icons';

interface FooterSection {
  title: string;
  links: string[];
}

const footerData: FooterSection[] = [
  {
    title: 'Mua Sắm Và Tìm Hiểu',
    links: ['Cửa Hàng', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Nhà', 'AirTag', 'Phụ Kiện', 'Thẻ Quà Tặng']
  },
  {
    title: 'Ví Apple',
    links: ['Ví', 'Apple Pay']
  },
  {
    title: 'Tài Khoản',
    links: ['Quản Lý Tài Khoản Apple', 'Tài Khoản Apple Store', 'iCloud.com']
  },
  {
    title: 'Giải Trí',
    links: ['Apple One', 'Apple TV', 'Apple Music', 'Apple Arcade', 'Apple Podcasts', 'Apple Books']
  },
  {
    title: 'Apple Store',
    links: ['Ứng Dụng Apple Store', 'Apple Trade In', 'Tài Chính', 'Tình Trạng Đơn Hàng', 'Hỗ Trợ Mua Hàng']
  },
  {
    title: 'Dành Cho Doanh Nghiệp',
    links: ['Apple Và Doanh Nghiệp', 'Mua Hàng Cho Doanh Nghiệp']
  },
  {
    title: 'Cho Giáo Dục',
    links: ['Apple Và Giáo Dục', 'Mua Hàng Cho Bậc Đại Học']
  },
  {
     title: 'Về Apple',
     links: ['Newsroom', 'Lãnh Đạo Của Apple', 'Nhà Đầu Tư', 'Đạo Đức & Quy Tắc', 'Sự Kiện', 'Liên Hệ Apple']
  }
];

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
    <nav aria-label="Breadcrumbs" className="py-4 mb-2 overflow-hidden">
      <ol className="flex items-center gap-2 text-[12px] text-[#424245]">
        <li>
            <Link to="/" className="text-[#1d1d1f] hover:text-black -mt-0.5 block" aria-label="Apple">
                <AppleLogo />
            </Link>
        </li>
        {pageName && (
          <>
            <li aria-hidden="true" className="text-[#86868b] w-3 h-3 flex items-center">
                <ChevronRight />
            </li>
            <li>
                <span aria-current="page">{pageName}</span>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
};

const Footer: React.FC = () => {
    // On mobile, sections are collapsible. For this demo, we'll keep them open on desktop, simplified on mobile.
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
        <nav aria-label="Apple Directory" className="hidden md:flex flex-wrap justify-between pt-0">
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
                    <h3 className="font-semibold mb-2">Cho Chăm Sóc Sức Khỏe</h3>
                    <ul><li><a href="#" className="hover:underline text-[#424245]">Apple và Chăm Sóc Sức Khỏe</a></li></ul>
                </div>
                 <div className="pt-6">
                    <h3 className="font-semibold mb-2">Cho Chính Phủ</h3>
                    <ul><li><a href="#" className="hover:underline text-[#424245]">Apple và Chính Phủ</a></li></ul>
                </div>
            </div>
             <div className="w-1/5">
                 <div className="pt-0">
                    <h3 className="font-semibold mb-2">Giá Trị Cốt Lõi Của Apple</h3>
                    <ul>
                        {['Trợ Năng', 'Môi Trường', 'Quyền Riêng Tư', 'Đổi Mới Chuỗi Cung Ứng'].map(l => (
                             <li key={l} className="mb-2"><a href="#" className="hover:underline text-[#424245]">{l}</a></li>
                        ))}
                    </ul>
                </div>
                <FooterColumn section={footerData[7]} />
            </div>
        </nav>

        {/* Mobile Accordion (Simplified as stacked for this demo) */}
        <nav aria-label="Apple Directory" className="md:hidden">
             {footerData.map((section) => (
                 <div key={section.title} className="border-b border-[#d2d2d7] py-3">
                     <h3 className="font-semibold text-[#1d1d1f]">{section.title}</h3>
                 </div>
             ))}
        </nav>

        <section aria-label="Legal" className="pt-8 text-[#6e6e73]">
            <div className="mb-2">
                Xem thêm cách để mua hàng: <a href="#" className="text-[#0066cc] hover:underline">Tìm cửa hàng bán lẻ</a> gần bạn. Hoặc gọi <a href="#" className="text-[#0066cc] hover:underline">1800 1192</a>.
            </div>
            <div className="border-t border-[#d2d2d7] pt-4 mt-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-2 md:mb-0">
                    Bản quyền © 2025 Apple Inc. Bảo lưu mọi quyền.
                </div>
                <div className="flex flex-wrap gap-x-4">
                    <a href="#" className="hover:underline text-[#424245]">Chính Sách Quyền Riêng Tư</a>
                    <a href="#" className="hover:underline text-[#424245]">Điều Khoản Sử Dụng</a>
                    <a href="#" className="hover:underline text-[#424245]">Bán Hàng Và Hoàn Tiền</a>
                    <a href="#" className="hover:underline text-[#424245]">Pháp Lý</a>
                    <a href="#" className="hover:underline text-[#424245]">Bản Đồ Trang Web</a>
                </div>
                <div className="mt-2 md:mt-0">
                    <Link to="/choose-country-region" className="hover:underline text-[#424245]">Việt Nam</Link>
                </div>
            </div>
        </section>
      </div>
    </footer>
  );
};

const FooterColumn: React.FC<{ section: FooterSection }> = ({ section }) => (
    <div className="mb-6">
        <h3 className="font-semibold mb-2 text-[#1d1d1f]">{section.title}</h3>
        <ul>
            {section.links.map((link) => (
                <li key={link} className="mb-2">
                    <a href="#" className="hover:underline text-[#424245]">{link}</a>
                </li>
            ))}
        </ul>
    </div>
);

export default Footer;