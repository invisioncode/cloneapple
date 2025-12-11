import React, { useState, useEffect } from 'react';

interface LocalNavProps {
  title: string;
  links: { name: string; url: string; active?: boolean; cta?: boolean }[];
  cta?: { text: string; url: string };
}

const LocalNav: React.FC<LocalNavProps> = ({ title, links, cta }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all duration-300 ${scrolled ? 'bg-white/90' : 'bg-white'}`}>
      <div className="max-w-[1024px] mx-auto px-4 h-[52px] flex items-center justify-between">
        <h2 className="text-[21px] font-semibold text-[#1d1d1f]">
          {title}
        </h2>
        
        <div className="flex items-center gap-6 text-[12px] font-normal">
          <div className="hidden md:flex gap-6">
            {links.map((link) => (
                <a 
                    key={link.name} 
                    href={link.url} 
                    className={`${link.active ? 'text-[#1d1d1f] cursor-default opacity-50' : 'text-[#1d1d1f] hover:text-[#0066cc]'} transition-colors`}
                >
                    {link.name}
                </a>
            ))}
          </div>
          {cta && (
              <a href={cta.url} className="bg-[#0071e3] hover:bg-[#0077ED] text-white px-3 py-1 rounded-full transition-colors">
                  {cta.text}
              </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocalNav;