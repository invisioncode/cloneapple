
import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
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

  // Very basic mapping for demo purposes
  const getPageName = (path: string) => {
      if (path.includes('mac')) return t.nav.mac;
      if (path.includes('ipad')) return t.nav.ipad;
      if (path.includes('iphone')) return t.nav.iphone;
      if (path.includes('watch')) return t.nav.watch;
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

const Footer: React.FC = () => {
  const { lang, t } = useAppLanguage();
  const navigate = useNavigate();

  const loc = (path: string) => getPath(path, lang);

  const footerData: FooterSection[] = [
    {
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
        ]
    },
    {
        title: t.footer.account,
        links: [
            { name: t.footer.account, url: loc('/account') }
        ]
    },
    {
        title: t.footer.entertainment,
        links: [
            { name: t.footer.entertainment, url: loc('/services') }
        ]
    },
    {
        title: t.footer.store,
        links: [
            { name: t.nav.store, url: loc('/store') }
        ]
    },
    {
        title: t.footer.business,
        links: [{ name: t.footer.business, url: loc('/business') }]
    },
     {
        title: t.footer.education,
        links: [{ name: t.footer.education, url: loc('/education') }]
    },
     {
        title: t.footer.values,
        links: [{ name: t.footer.values, url: loc('/environment') }]
    },
     {
        title: t.footer.about,
        links: [{ name: t.footer.about, url: loc('/about') }]
    }
  ];

  return (
    <footer className="bg-[#f5f5f7] text-[#1d1d1f] text-xs pt-8 pb-6 px-4">
      <div className="max-w-[980px] mx-auto">
        
        {/* Footnotes */}
        <section aria-label="Footnotes" className="border-b border-[#d2d2d7] pb-4 mb-0 text-[#6e6e73]">
            <p className="mb-2">1. {lang === 'vn' ? 'Apple TV yêu cầu đăng ký thuê bao.' : 'Apple TV+ requires a subscription.'}</p>
        </section>

        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Directory Columns */}
        <nav aria-label="Apple Directory" className="hidden md:flex flex-wrap justify-between pt-5">
            {/* Simplified columns for i18n demo */}
            <div className="w-1/4 pr-4">
                <FooterColumn section={footerData[0]} />
            </div>
            <div className="w-1/4 pr-4">
                <FooterColumn section={footerData[1]} />
                <FooterColumn section={footerData[2]} />
            </div>
            <div className="w-1/4 pr-4">
                <FooterColumn section={footerData[3]} />
                <FooterColumn section={footerData[4]} />
            </div>
             <div className="w-1/4">
                <FooterColumn section={footerData[5]} />
                <FooterColumn section={footerData[6]} />
                <FooterColumn section={footerData[7]} />
            </div>
        </nav>

        {/* Mobile Accordion */}
        <nav aria-label="Apple Directory" className="md:hidden pt-4">
             {footerData.map((section, idx) => (
                 <div key={idx} className="border-b border-[#d2d2d7] py-3">
                     <h3 className="font-semibold text-[#1d1d1f]">{section.title}</h3>
                 </div>
             ))}
        </nav>

        <section aria-label="Legal" className="pt-8 text-[#6e6e73]">
            <div className="border-t border-[#d2d2d7] pt-4 mt-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-2 md:mb-0">
                    {t.footer.copyright}
                </div>
                <div className="flex flex-wrap gap-x-4">
                    <Link to={loc('/privacy')} className="hover:underline text-[#424245]">{t.footer.privacy}</Link>
                    <Link to={loc('/legal')} className="hover:underline text-[#424245]">{t.footer.terms}</Link>
                    <Link to={loc('/sitemap')} className="hover:underline text-[#424245]">{t.footer.sitemap}</Link>
                </div>
                <div className="mt-2 md:mt-0 flex gap-4 font-semibold text-[#1d1d1f]">
                     <a href="/vn" className={`hover:underline ${lang === 'vn' ? 'text-black' : 'text-gray-500'}`}>Tiếng Việt</a>
                     <span className="text-gray-300">|</span>
                     <a href="/en" className={`hover:underline ${lang === 'en' ? 'text-black' : 'text-gray-500'}`}>English</a>
                     <span className="text-gray-300">|</span>
                     <a href="/eg" className={`hover:underline ${lang === 'eg' ? 'text-black' : 'text-gray-500'}`}>مصر</a>
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
            {section.links.map((link) => (
                <li key={link.name} className="mb-2">
                    <Link to={link.url} className="hover:underline text-[#424245]">
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default Footer;
