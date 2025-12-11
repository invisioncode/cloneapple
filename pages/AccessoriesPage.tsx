import React from 'react';
import ChapterNav from '../components/ChapterNav';
import { ChevronRight } from '../components/Icons';

// --- Data ---

const browseByProduct = [
  { name: 'Mac', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-product-mac?wid=112&hei=112&fmt=png-alpha' },
  { name: 'iPad', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-product-ipad?wid=112&hei=112&fmt=png-alpha' },
  { name: 'iPhone', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-product-iphone?wid=112&hei=112&fmt=png-alpha' },
  { name: 'Watch', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-product-watch?wid=112&hei=112&fmt=png-alpha' },
  { name: 'Vision', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-product-vision-pro?wid=150&hei=150&fmt=png-alpha' },
  { name: 'AirPods', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-product-airpods?wid=112&hei=112&fmt=png-alpha' },
  { name: 'TV & Home', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-product-tv?wid=112&hei=112&fmt=png-alpha' },
];

const browseByCategory = [
  { name: 'Hàng Mới', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-new-arrivals?wid=150&hei=150&fmt=png-alpha' },
  { name: 'Ốp Lưng & Bảo Vệ', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-cases-protection?wid=150&hei=150&fmt=png-alpha' },
  { name: 'Sạc', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-charging-essentials?wid=150&hei=150&fmt=png-alpha' },
  { name: 'MagSafe', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-magsafe?wid=150&hei=150&fmt=png-alpha' },
  { name: 'Tai Nghe & Loa', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-audio-music?wid=150&hei=150&fmt=png-alpha' },
  { name: 'Dây Đeo Apple Watch', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-watch-bands?wid=150&hei=150&fmt=png-alpha' },
  { name: 'AirTag', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-airtag?wid=150&hei=150&fmt=png-alpha' },
  { name: 'Sức Khỏe', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-health-fitness?wid=150&hei=150&fmt=png-alpha' },
  { name: 'Gaming', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-gaming?wid=150&hei=150&fmt=png-alpha' },
  { name: 'Nhiếp Ảnh', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-photography-creativity?wid=150&hei=150&fmt=png-alpha' },
  { name: 'Sáng Tạo', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/icon-category-creative-tools?wid=150&hei=150&fmt=png-alpha' },
];

const holidayPicks = [
  {
    id: 'homepod-mini',
    title: 'HomePod mini - Xanh Dương',
    price: '2.499.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/homepod-mini-select-blue-202110?wid=532&hei=582&fmt=png-alpha',
    colors: ['#2e3642', '#344e71', '#e56d29', '#e8d939', '#e9e9ea'],
  },
  {
    id: 'atv-4k',
    title: 'Apple TV 4K Wi-Fi với dung lượng 64GB',
    price: '3.499.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/apple-tv-4k-hero-select-202210?wid=532&hei=582&fmt=png-alpha',
  },
  {
    id: 'airpods-pro-3',
    title: 'AirPods Pro 3',
    price: '6.799.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-3-hero-select-202509?wid=532&hei=582&fmt=png-alpha',
    badge: 'Khắc Miễn Phí'
  },
  {
    id: 'iphone-17-case',
    title: 'Ốp Lưng Silicone MagSafe cho iPhone 17 - Tím Sương',
    price: '1.429.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGF04?wid=532&hei=582&fmt=png-alpha',
    badge: 'Mới',
    colors: ['#d7f334', '#344e71', '#a998c5', '#9faea5', '#2e3642']
  },
  {
    id: 'crossbody',
    title: 'Dây Đeo Chéo – Tím',
    price: '1.699.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGGJ4?wid=532&hei=582&fmt=png-alpha',
    badge: 'Mới',
     colors: ['#d7f334', '#8eb6ce', '#0066cc', '#7d4a96', '#9c5f42', '#ff6b00']
  },
  {
    id: 'sport-band',
    title: 'Dây Đeo Thể Thao 46mm - Tím Sương - M/L',
    price: '1.299.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MFH04ref?wid=532&hei=582&fmt=png-alpha',
    badge: 'Mới',
    colors: ['#d7f334', '#344e71', '#a998c5', '#f0e5d8', '#2e3642']
  },
   {
    id: 'airtag',
    title: 'AirTag',
    price: '799.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airtag-single-select-202104?wid=532&hei=582&fmt=png-alpha',
    badge: 'Khắc Miễn Phí'
  }
];

const travelEssentials = [
    {
    id: 'iphone-17-pro-max-case',
    title: 'Ốp Lưng TechWoven MagSafe cho iPhone 17 Pro Max - Xanh Dương',
    price: '1.668.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGF94?wid=532&hei=582&fmt=png-alpha',
    badge: 'Mới',
    colors: ['#243445', '#5e3f73', '#7a513e', '#3f5246', '#1d1d1f']
  },
  {
    id: 'nimble-kit',
    title: 'Bộ Dụng Cụ Du Lịch Nimble Daily',
    price: '2.499.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HSBP2?wid=532&hei=582&fmt=png-alpha',
    badge: 'Độc Quyền'
  },
   {
    id: 'twelve-south-plugbug',
    title: 'Bộ Chuyển Đổi Du Lịch Twelve South PlugBug 50W có Tìm',
    price: '1.999.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HRUB2?wid=532&hei=582&fmt=png-alpha',
    badge: 'Độc Quyền'
  },
  {
    id: 'aer-go-tote',
    title: 'Túi Aer Go Tote 2',
    price: '2.199.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HS7V2?wid=532&hei=582&fmt=png-alpha',
    badge: 'Chỉ Có Trực Tuyến'
  },
  {
    id: 'airtag-4pack',
    title: 'AirTag 4 pack',
    price: '2.799.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airtag-4pack-select-202104?wid=532&hei=582&fmt=png-alpha',
    badge: 'Khắc Miễn Phí'
  }
];

const chargeAndGo = [
  {
    id: 'magsafe-battery',
    title: 'Pin Dự Phòng MagSafe cho iPhone Air',
    price: '2.499.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGPG4?wid=532&hei=582&fmt=png-alpha',
    badge: 'Mới'
  },
   {
    id: 'zens-cable',
    title: 'Cáp Sạc Zens USB-C sang USB-C Pro 3',
    price: '2.499.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HSB82?wid=532&hei=582&fmt=png-alpha',
    badge: 'Chỉ Có Trực Tuyến',
    colors: ['#381e26', '#f2f2f2']
  },
  {
    id: 'power-adapter',
    title: 'Bộ Tiếp Hợp Nguồn Dynamic 40W với 60W Tối Đa',
    price: '999.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGKN4?wid=532&hei=582&fmt=png-alpha',
    badge: 'Mới'
  },
   {
    id: 'anker-maggo',
    title: 'Pin Dự Phòng Anker MagGo (5K, Mỏng)',
    price: '1.299.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HRWY2?wid=532&hei=582&fmt=png-alpha',
    badge: 'Độc Quyền',
    colors: ['#4b6b8b', '#f2f2f2']
  }
];

// --- Components ---

const BrowseItem = ({ name, image }: { name: string, image: string }) => (
    <div className="flex flex-col items-center gap-3 group cursor-pointer min-w-[100px] snap-center">
        <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px]">
            <img src={image} alt={name} className="w-full h-full object-contain mix-blend-multiply" />
        </div>
        <span className="text-[13px] md:text-[14px] text-[#1d1d1f] font-medium text-center hover:underline hover:text-[#0066cc]">{name}</span>
    </div>
);

const StoreItemCard = ({ 
    item 
}: { 
    item: { id: string, title: string, price: string, image: string, badge?: string, colors?: string[] } 
}) => (
    <div className="flex-none w-[280px] md:w-[312px] h-[460px] bg-white rounded-[18px] p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 snap-center flex flex-col justify-between group cursor-pointer">
        <div className="flex-1 flex flex-col">
            <div className="w-full aspect-square mb-6 flex items-center justify-center relative">
                <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain" />
            </div>
            
            {item.colors && (
                <div className="flex gap-2 mb-4 justify-center">
                    {item.colors.slice(0, 5).map((color, idx) => (
                        <div key={idx} className="w-3 h-3 rounded-full shadow-sm border border-gray-200" style={{ backgroundColor: color }}></div>
                    ))}
                    {item.colors.length > 5 && <span className="text-[12px] text-gray-500 self-center">+</span>}
                </div>
            )}
        </div>

        <div className="mt-2 text-center md:text-left">
            {item.badge && <span className="text-[12px] font-semibold text-[#bf4800] uppercase block mb-1">{item.badge}</span>}
            <h3 className="text-[17px] font-semibold text-[#1d1d1f] group-hover:text-[#0066cc] group-hover:underline line-clamp-2 min-h-[42px] mb-1">
                {item.title}
            </h3>
            <p className="text-[14px] text-[#1d1d1f]">{item.price}</p>
        </div>
    </div>
);

const SectionHeader = ({ title }: { title: string }) => (
    <h2 className="text-[28px] md:text-[34px] font-semibold text-[#1d1d1f] mb-8 px-6 md:px-0">
        {title}
    </h2>
);

const AccessoriesPage: React.FC = () => {
  return (
    <div className="bg-[#f5f5f7] min-h-screen">
       {/* Store Local Nav Placeholder (Simplified) */}
       <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-[44px] z-30 hidden md:block">
           <div className="max-w-[1024px] mx-auto px-4 h-[52px] flex items-center justify-between">
                <h1 className="text-[21px] font-semibold text-[#1d1d1f]">Phụ Kiện</h1>
                <a href="#" className="text-[12px] text-[#0066cc]">Duyệt xem tất cả</a>
           </div>
       </div>

       {/* Hero */}
       <section className="bg-white border-b border-gray-200">
           <div className="max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center overflow-hidden">
               <div className="md:w-5/12 p-10 md:p-16 flex flex-col justify-center items-start text-left z-10">
                   <h2 className="text-[40px] md:text-[56px] font-semibold text-[#1d1d1f] leading-tight mb-4">
                       Cặp đôi hoàn hảo.
                   </h2>
                   <p className="text-[19px] md:text-[21px] text-[#1d1d1f] mb-6 max-w-md">
                       Kết hợp iPhone của bạn với ốp lưng, ví hoặc Dây Đeo Chéo với các chất liệu và màu sắc mới mẻ.
                   </p>
                   <div className="flex flex-col gap-2">
                       <a href="#" className="text-[#0066cc] hover:underline text-[17px]">Mua MagSafe <ChevronRight /></a>
                       <a href="#" className="text-[#0066cc] hover:underline text-[17px]">Mua Dây Đeo Chéo <ChevronRight /></a>
                   </div>
               </div>
               <div className="md:w-7/12 w-full h-[400px] md:h-[500px]">
                   <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/aalp-magsafe-strap-header-202509?wid=2880&hei=960&fmt=png-alpha" alt="Accessories Header" className="w-full h-full object-cover object-center" />
               </div>
           </div>
       </section>

       <div className="max-w-[1440px] mx-auto py-16">
            {/* Search Box Placeholder */}
            <div className="mb-16 px-6 md:px-12 text-center">
                 <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-6">Tìm phụ kiện bạn đang cần.</h2>
                 <div className="max-w-2xl mx-auto relative">
                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-gray-400" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                     </div>
                     <input type="text" placeholder="Tìm kiếm phụ kiện" className="w-full h-12 pl-12 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[17px]" />
                 </div>
            </div>

            {/* Browse by Product */}
            <section className="mb-20">
                <SectionHeader title="Duyệt theo Sản Phẩm" />
                <div className="flex gap-8 overflow-x-auto no-scrollbar px-6 md:px-12 pb-8 snap-x">
                    {browseByProduct.map((item, idx) => (
                        <BrowseItem key={idx} {...item} />
                    ))}
                </div>
            </section>

            {/* Browse by Category */}
            <section className="mb-20">
                <SectionHeader title="Duyệt theo Danh Mục" />
                <div className="flex gap-8 overflow-x-auto no-scrollbar px-6 md:px-12 pb-8 snap-x">
                    {browseByCategory.map((item, idx) => (
                        <BrowseItem key={idx} {...item} />
                    ))}
                </div>
            </section>

            {/* Holiday Picks */}
            <section className="mb-20">
                <SectionHeader title="Lựa chọn cho dịp lễ" />
                <div className="flex gap-5 overflow-x-auto no-scrollbar px-6 md:px-12 pb-12 snap-x">
                    {holidayPicks.map((item) => (
                        <StoreItemCard key={item.id} item={item} />
                    ))}
                </div>
                <div className="text-center">
                     <a href="#" className="button rounded-full px-5 py-2 bg-[#e8e8ed] text-[#1d1d1f] hover:bg-[#d2d2d7] font-medium transition-colors text-[14px]">Mua sắm tất cả Lựa chọn cho dịp lễ</a>
                </div>
            </section>

             {/* Travel Essentials */}
             <section className="mb-20">
                <SectionHeader title="Vật dụng du lịch thiết yếu" />
                <div className="flex gap-5 overflow-x-auto no-scrollbar px-6 md:px-12 pb-12 snap-x">
                    {travelEssentials.map((item) => (
                        <StoreItemCard key={item.id} item={item} />
                    ))}
                </div>
                <div className="text-center">
                     <a href="#" className="button rounded-full px-5 py-2 bg-[#e8e8ed] text-[#1d1d1f] hover:bg-[#d2d2d7] font-medium transition-colors text-[14px]">Mua sắm Vật dụng du lịch thiết yếu</a>
                </div>
            </section>

             {/* Charge & Go */}
             <section className="mb-20">
                <SectionHeader title="Sạc & Đi" />
                <div className="flex gap-5 overflow-x-auto no-scrollbar px-6 md:px-12 pb-12 snap-x">
                    {chargeAndGo.map((item) => (
                        <StoreItemCard key={item.id} item={item} />
                    ))}
                </div>
                <div className="text-center">
                     <a href="#" className="button rounded-full px-5 py-2 bg-[#e8e8ed] text-[#1d1d1f] hover:bg-[#d2d2d7] font-medium transition-colors text-[14px]">Mua sắm Sạc & Đi</a>
                </div>
            </section>

       </div>
    </div>
  );
};

export default AccessoriesPage;