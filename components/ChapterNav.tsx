import React from 'react';

export interface ChapterNavItem {
  name: string;
  icon: string;
  url: string;
  new?: boolean;
}

interface ChapterNavProps {
  items: ChapterNavItem[];
}

const ChapterNav: React.FC<ChapterNavProps> = ({ items }) => {
  return (
    <div className="w-full bg-white border-b border-gray-200 overflow-x-auto no-scrollbar pt-6 pb-2 sticky top-[44px] z-40 bg-opacity-95 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-4">
            <ul className="flex justify-start md:justify-center items-start gap-6 md:gap-8 min-w-max mx-auto px-2">
                {items.map((item) => (
                    <li key={item.name} className="flex flex-col items-center gap-1 group cursor-pointer w-[70px] md:w-[80px]">
                        <div className="h-[52px] flex items-end mb-1">
                            <img src={item.icon} alt={item.name} className="h-full object-contain" />
                        </div>
                        <span className="text-[11px] md:text-[12px] text-[#1d1d1f] hover:text-[#0066cc] font-normal text-center leading-tight">
                            {item.name}
                        </span>
                        {item.new && <span className="text-[10px] text-[#bf4800] font-medium">Mới</span>}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default ChapterNav;