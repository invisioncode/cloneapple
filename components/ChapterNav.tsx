import React from 'react';

const chapters = [
  { name: 'MacBook Air', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/macbookair15.macbookair13_7e8b978ec.svg', url: '#' },
  { name: 'MacBook Pro', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/macbookpro16.macbookpro14_c495bb45b.svg', url: '#', new: true },
  { name: 'iMac', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/imac24_065a2bf21.svg', url: '#' },
  { name: 'Mac mini', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/macmini_f7eabee7b.svg', url: '#' },
  { name: 'Mac Studio', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/macstudio_d48bbc5a3.svg', url: '#' },
  { name: 'Mac Pro', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/macpro_a0f334173.svg', url: '#' },
  { name: 'So Sánh', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/compare_e6faa4436.svg', url: '#' },
  { name: 'Màn Hình', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/displays_ce60bd4d1.svg', url: '#' },
  { name: 'Phụ Kiện', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/accessories_3bf8fc936.svg', url: '#' },
  { name: 'Tahoe', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/macos_a763f3f5e.svg', url: '#' },
  { name: 'Mua sắm Mac', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/shop_mac_b01536048.svg', url: '#' },
];

const ChapterNav: React.FC = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200 overflow-x-auto no-scrollbar py-6">
        <div className="max-w-[1440px] mx-auto px-4">
            <ul className="flex justify-start md:justify-center items-start gap-8 md:gap-12 min-w-max mx-auto">
                {chapters.map((item) => (
                    <li key={item.name} className="flex flex-col items-center gap-2 group cursor-pointer">
                        <div className="h-[56px] flex items-end">
                            <img src={item.icon} alt={item.name} className="h-auto max-h-[56px]" />
                        </div>
                        <span className="text-[12px] text-[#1d1d1f] hover:text-[#0066cc] font-normal flex flex-col items-center">
                            {item.name}
                            {item.new && <span className="text-[10px] text-[#bf4800] mt-[1px]">Mới</span>}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default ChapterNav;