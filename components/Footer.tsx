
import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AppleIcon, ChevronRight } from './Icons';
import { useAppLanguage, getPath } from '../utils/i18n';

interface FooterLink {
  name: string;
  url: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Breadcrumbs = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { lang, t } = useAppLanguage();
  
  if (currentPath === `/${lang}`) return null;

  const getPageName = (path: string) => {
      if (path.includes('mac')) return t.nav.mac;
      if (path.includes('ipad')) return t.nav.ipad;
      if (path.includes('iphone')) return t.nav.iphone;
      if (path.includes('watch')) return t.nav.watch;
      if (path.includes('store')) return t.nav.store;
      return 'Apple';
  };
  
  const pageName = getPageName(currentPath);

  return (
    <nav aria-label="Breadcrumbs" className="pt-4 mb-2 overflow-hidden">
      <ol className="flex items-center gap-2 text-[12px] text-[#424245] leading-normal">
        <li>
            <Link to={`/${lang}`} className="text-[#1d1d1f] hover:text-black flex items-center" aria-label="Apple">
                <AppleIcon className="h-[14px] w-auto -mt-[2px]" />
            </Link>
        </li>
        {pageName && (
          <>
            <li aria-hidden="true" className="text-[#86868b] flex items-center">
                <ChevronRight className={`h-[10px] w-[10px] stroke-[2.5] ${lang === 'eg' ? 'rotate-180' : ''}`} />
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

const MobileFooterItem: React.FC<{ section: FooterSection }> = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#d2d2d7]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-3 text-left outline-none group select-none"
        aria-expanded={isOpen}
      >
        <span className="text-[12px] text-[#1d1d1f] leading-[1.33337] font-normal">{section.title}</span>
        <span className="relative w-3 h-3 flex items-center justify-center text-[#1d1d1f]">
            {/* Horizontal Line */}
            <span className={`absolute w-full h-[1px] bg-current transition-transform duration-300 ease-out ${isOpen ? 'rotate-45' : ''}`} />
            {/* Vertical Line */}
            <span className={`absolute w-full h-[1px] bg-current transition-transform duration-300 ease-out ${isOpen ? '-rotate-45' : 'rotate-90'}`} />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="pl-0 list-none">
          {section.links.map((link) => (
            <li key={link.name} className="mb-2 last:mb-0">
              <Link to={link.url} className="text-[#424245] hover:underline block py-1.5 text-[12px]">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const FooterColumn: React.FC<{ section: FooterSection }> = ({ section }) => (
    <div className="mb-6">
        <h3 className="text-[12px] font-semibold text-[#1d1d1f] mb-2.5 tracking-tight">{section.title}</h3>
        <ul className="space-y-2">
            {section.links.map((link) => (
                <li key={link.name}>
                    <Link to={link.url} className="text-[#424245] hover:underline hover:text-[#1d1d1f] text-[12px]">
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const Footer: React.FC = () => {
  const { lang, t } = useAppLanguage();
  const location = useLocation();

  const loc = (path: string) => getPath(path, lang);

  const getLangUrl = (targetLang: string) => {
    const currentPath = location.pathname;
    const segments = currentPath.split('/');
    if (segments.length > 1) {
        segments[1] = targetLang;
        return segments.join('/');
    }
    return `/${targetLang}`;
  };

  // Define data structure for 5 columns
  const footerSections = {
      shopAndLearn: {
        title: t.footer.shop_learn,
        links: [
            { name: t.nav.store, url: loc('/store') },
            { name: t.nav.mac, url: loc('/mac') },
            { name: t.nav.ipad, url: loc('/ipad') },
            { name: t.nav.iphone, url: loc('/iphone') },
            { name: t.nav.watch, url: loc('/watch') },
            { name: t.nav.vision, url: loc('/apple-vision-pro') },
            { name: t.nav.airpods, url: loc('/airpods') },
            { name: t.nav.tvhome, url: loc('/tv-home') },
            { name: t.nav.accessories, url: loc('/accessories') },
        ]
      },
      wallet: {
        title: t.footer.wallet,
        links: [
             { name: 'Apple Pay', url: loc('/wallet') },
        ]
      },
      account: {
        title: t.footer.account,
        links: [
            { name: t.footer.account, url: loc('/account') },
            { name: 'iCloud.com', url: 'https://www.icloud.com' },
        ]
      },
      entertainment: {
        title: t.footer.entertainment,
        links: [
            { name: 'Apple One', url: loc('/services/apple-one') },
            { name: 'Apple TV+', url: loc('/apple-tv-plus') },
            { name: 'Apple Music', url: loc('/apple-music') },
            { name: 'Apple Arcade', url: loc('/apple-arcade') },
            { name: 'Apple Podcasts', url: loc('/apple-podcasts') },
            { name: 'Apple Books', url: loc('/apple-books') },
            { name: 'App Store', url: loc('/app-store') },
        ]
      },
      store: {
        title: t.footer.store,
        links: [
            { name: 'Tìm Cửa Hàng', url: loc('/retail') },
            { name: 'Genius Bar', url: loc('/genius') },
            { name: 'Today at Apple', url: loc('/today') },
            { name: 'Trại Hè Apple', url: loc('/camp') },
            { name: 'Ứng Dụng Apple Store', url: loc('/app') },
            { name: 'Tài Chính', url: loc('/financing') },
            { name: 'Chương Trình Tái Chế', url: loc('/trade-in') },
            { name: 'Trạng Thái Đơn Hàng', url: loc('/order-status') },
            { name: 'Hỗ Trợ Mua Hàng', url: loc('/shopping-help') },
        ]
      },
      business: {
        title: t.footer.business,
        links: [{ name: t.footer.business, url: loc('/business') }]
      },
      education: {
        title: t.footer.education,
        links: [
            { name: t.footer.education, url: loc('/education') },
            { name: 'Mua Cho Đại Học', url: loc('/education/k12') }
        ]
      },
      values: {
        title: t.footer.values,
        links: [
            { name: 'Trợ Năng', url: loc('/accessibility') },
            { name: 'Môi Trường', url: loc('/environment') },
            { name: 'Quyền Riêng Tư', url: loc('/privacy') },
            { name: 'Trách Nhiệm Nhà Cung Cấp', url: loc('/supplier-responsibility') },
        ]
      },
      about: {
        title: t.footer.about,
        links: [
            { name: 'Newsroom', url: loc('/newsroom') },
            { name: 'Lãnh Đạo Apple', url: loc('/leadership') },
            { name: 'Cơ Hội Nghề Nghiệp', url: loc('/careers') },
            { name: 'Nhà Đầu Tư', url: loc('/investors') },
            { name: 'Đạo Đức & Tuân Thủ', url: loc('/compliance') },
            { name: 'Sự Kiện', url: loc('/events') },
            { name: 'Liên Hệ Apple', url: loc('/contact') },
        ]
      }
  };

  const columns = [
      // Column 1
      [footerSections.shopAndLearn, footerSections.wallet],
      // Column 2
      [footerSections.account, footerSections.entertainment],
      // Column 3
      [footerSections.store],
      // Column 4
      [footerSections.business, footerSections.education],
      // Column 5
      [footerSections.values, footerSections.about],
  ];

  const allSections = Object.values(footerSections);

  return (
    <footer className="bg-[#f5f5f7] text-[#1d1d1f] text-xs pt-8 pb-6 px-4 font-sans">
      <div className="max-w-[980px] mx-auto">
        
        {/* Footnotes */}
        <section aria-label="Footnotes" className="border-b border-[#d2d2d7] pb-4 mb-5 text-[#6e6e73] text-[11px] leading-relaxed">
             <p className="mb-2">1. {lang === 'vn' ? 'Apple TV yêu cầu đăng ký thuê bao.' : 'Apple TV+ requires a subscription.'}</p>
             <p className="mb-2">Giá hiển thị đã bao gồm các loại thuế theo luật định, các phí liên quan và phí dịch vụ (nếu có).</p>
        </section>

        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Directory Columns (Desktop) - 5 Columns Grid */}
        <nav aria-label="Apple Directory" className="hidden md:grid grid-cols-5 gap-x-4 pt-5">
            {columns.map((col, idx) => (
                <div key={idx}>
                    {col.map((section, sIdx) => (
                         <FooterColumn key={sIdx} section={section} />
                    ))}
                </div>
            ))}
        </nav>

        {/* Mobile Accordion */}
        <nav aria-label="Apple Directory" className="md:hidden pt-4">
             {allSections.map((section, idx) => (
                 <MobileFooterItem key={idx} section={section} />
             ))}
        </nav>

        {/* Legal Section */}
        <section aria-label="Legal" className="pt-8 text-[#6e6e73]">
            <div className="md:border-t md:border-[#d2d2d7] pt-4 mt-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-y-2 mb-2">
                     <div className="mb-1 md:mb-0">
                         {t.footer.other_country} <Link to="/choose-country-region" className="text-[#0066cc] hover:underline">Tìm cửa hàng bán lẻ</Link> gần bạn.
                     </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-2">
                     {/* Mobile: Copyright is below links usually, but on desktop it's left. Apple places copyright first on desktop line. */}
                    <div className="mb-2 md:mb-0 md:mr-8 order-2 md:order-1 mt-2 md:mt-0">
                        {t.footer.copyright}
                    </div>

                    <div className="flex flex-wrap gap-x-2 order-1 md:order-2">
                        <Link to={loc('/privacy')} className="hover:underline text-[#424245] border-r border-[#d2d2d7] pr-2 last:border-0">{t.footer.privacy}</Link>
                        <Link to={loc('/legal')} className="hover:underline text-[#424245] border-r border-[#d2d2d7] pr-2 last:border-0">{t.footer.terms}</Link>
                        <Link to={loc('/sales')} className="hover:underline text-[#424245] border-r border-[#d2d2d7] pr-2 last:border-0">{t.footer.sales}</Link>
                        <Link to={loc('/legal')} className="hover:underline text-[#424245] border-r border-[#d2d2d7] pr-2 last:border-0">{t.footer.legal}</Link>
                        <Link to={loc('/sitemap')} className="hover:underline text-[#424245]">{t.footer.sitemap}</Link>
                    </div>

                    <div className="mt-4 md:mt-0 flex gap-2 font-semibold text-[#1d1d1f] order-3 md:order-3 ml-auto md:ml-0">
                        <Link to={getLangUrl('vn')} className={`hover:underline ${lang === 'vn' ? 'text-black cursor-default' : 'text-[#6e6e73]'}`}>Tiếng Việt</Link>
                        <span className="text-[#d2d2d7]">|</span>
                        <Link to={getLangUrl('en')} className={`hover:underline ${lang === 'en' ? 'text-black cursor-default' : 'text-[#6e6e73]'}`}>English</Link>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
