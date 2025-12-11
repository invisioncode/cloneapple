import React, { useEffect, useState } from 'react';
import { ChevronRight } from './Icons';

const Ribbon: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

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
          Thanh toán hàng tháng thật dễ dàng. Bao gồm lựa chọn lãi suất 0%.{' '}
          <a href="#" className="text-apple-blue hover:underline inline-flex items-center">
            Tìm hiểu thêm <span className="w-3 h-3 ml-0.5"><ChevronRight /></span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Ribbon;