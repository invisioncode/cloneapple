
import React, { useEffect, useState } from 'react';
import { ChevronRight } from './Icons';
import { useAppLanguage } from '../utils/i18n';

const Ribbon: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t, lang } = useAppLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`bg-[#f5f5f7] pt-[44px] transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-[980px] mx-auto py-3 px-4 text-center">
        <p className="text-[12px] md:text-[14px] text-[#1d1d1f] font-normal leading-relaxed">
          {t.ribbon.text}{' '}
          <a href="#" className="text-apple-blue hover:underline inline-flex items-center group">
            {t.ribbon.cta} 
            <span className={`w-3 h-3 ${lang === 'eg' ? 'rotate-180 mr-1' : 'ml-0.5'}`}>
               <ChevronRight />
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Ribbon;
