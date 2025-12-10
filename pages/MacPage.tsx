import React from 'react';
import ChapterNav from '../components/ChapterNav';
import { ChevronRight } from '../components/Icons';

// Helper component for Mac Product Card
const MacProductCard = ({ 
  title, 
  chip, 
  desc, 
  image, 
  isNew,
}: { 
  title: string; 
  chip?: string; 
  desc: string; 
  image: string; 
  isNew?: boolean;
}) => (
  <div className="flex-none w-[312px] md:w-[400px] snap-center flex flex-col items-center text-center group">
    <div className="w-full aspect-[4/3] mb-6 flex items-end justify-center">
        <img src={image} alt={title} className="max-w-full max-h-full object-contain" />
    </div>
    <div className="flex flex-col gap-2">
        {isNew && <span className="text-[#bf4800] text-[12px] font-semibold">Mới</span>}
        <h3 className="text-[24px] md:text-[28px] font-semibold text-[#1d1d1f]">{title}</h3>
        {chip && <span className="text-[14px] md:text-[17px] font-semibold text-[#1d1d1f]">{chip}</span>}
        <p className="text-[14px] md:text-[17px] text-[#1d1d1f] max-w-[300px]">{desc}</p>
        <div className="flex gap-4 mt-2 justify-center">
            <a href="#" className="text-white bg-[#0071e3] hover:bg-[#0077ED] px-4 py-2 rounded-full text-[14px]">Tìm hiểu thêm</a>
            <a href="#" className="text-[#0066cc] hover:underline flex items-center text-[14px]">Mua <ChevronRight /></a>
        </div>
    </div>
  </div>
);

// Helper for Feature Card
const FeatureCard = ({ 
    label, 
    headline, 
    image,
    dark = false 
}: { 
    label: string; 
    headline: string; 
    image: string;
    dark?: boolean; 
}) => (
    <div className={`relative w-[300px] md:w-[400px] h-[500px] md:h-[600px] rounded-[24px] overflow-hidden flex-none snap-center ${dark ? 'bg-black text-white' : 'bg-white text-black'} border border-gray-200 shadow-sm`}>
        <div className="absolute inset-0">
             <img src={image} alt={label} className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 p-8 flex flex-col h-full justify-start">
             <span className="text-[12px] font-semibold mb-2 opacity-80">{label}</span>
             <h3 className="text-[32px] font-semibold leading-tight">{headline}</h3>
        </div>
    </div>
);

const MacPage: React.FC = () => {
  return (
    <div className="bg-white">
      <ChapterNav />
      
      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 md:px-8 text-center">
        <div className="max-w-[1200px] mx-auto">
             <h1 className="text-[48px] md:text-[80px] font-bold tracking-tight mb-4 text-[#1d1d1f]">Mac</h1>
             <div className="relative w-full aspect-video rounded-[32px] overflow-hidden bg-black mb-12">
                 <img src="https://www.apple.com/assets-www/en_WW/mac/banner_card_1up/xlarge/great_ideas_3b353a83a.jpg" alt="Mac Hero" className="w-full h-full object-cover opacity-80" />
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                     <h2 className="text-[40px] md:text-[64px] font-semibold mb-4 leading-tight">Bạn nghĩ được là <br /> Mac làm được.</h2>
                 </div>
             </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="bg-[#f5f5f7] py-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-between items-end px-4 mb-12">
                 <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f]">Khám phá các sản phẩm.</h2>
            </div>
            
            <div className="flex gap-8 overflow-x-auto no-scrollbar px-8 pb-12 snap-x">
                <MacProductCard 
                    title="MacBook Air"
                    chip="Chip M3"
                    desc="Siêu mỏng, siêu nhanh để làm việc, giải trí và sáng tạo bất cứ đâu."
                    image="https://www.apple.com/assets-www/en_WW/mac/01_product_tile/xlarge/mba_13_15_08deb8525.jpg"
                />
                 <MacProductCard 
                    title="MacBook Pro"
                    chip="Chip M5, M4 Pro hoặc M4 Max"
                    desc="Máy tính xách tay Mac tiên tiến nhất cho các luồng công việc phức tạp."
                    image="https://www.apple.com/assets-www/en_WW/mac/01_product_tile/xlarge/mbp_14_16_3386877fa.jpg"
                    isNew
                />
                 <MacProductCard 
                    title="iMac"
                    chip="Chip M4"
                    desc="Máy tính để bàn tất cả trong một tuyệt đẹp, cho sáng tạo và năng suất."
                    image="https://www.apple.com/assets-www/en_WW/mac/01_product_tile/xlarge/imac_24_13b716162.jpg"
                />
                 <MacProductCard 
                    title="Mac mini"
                    chip="Chip M4 hoặc M4 Pro"
                    desc="Mac mini nhất, giá hợp lý nhất với hiệu năng khủng."
                    image="https://www.apple.com/assets-www/en_WW/mac/01_product_tile/xlarge/mac_mini_f7987f207.jpg"
                />
                 <MacProductCard 
                    title="Mac Studio"
                    chip="Chip M2 Max hoặc M2 Ultra"
                    desc="Hiệu năng mạnh mẽ và kết nối rộng mở cho các luồng công việc chuyên nghiệp."
                    image="https://www.apple.com/assets-www/en_WW/mac/01_product_tile/xlarge/mac_studio_6988bc9f9.jpg"
                />
            </div>
        </div>
      </section>

      {/* Why Apple */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-[1440px] mx-auto">
             <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f] mb-12 text-center md:text-left">Vì sao Apple là nơi tốt nhất để mua Mac.</h2>
             <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x">
                <div className="min-w-[280px] md:w-[320px] p-8 rounded-[24px] bg-[#f5f5f7] flex flex-col gap-4 snap-center">
                    <img src="https://www.apple.com/assets-www/en_WW/common/icon_card/creditcard_elevated_b70609ee9.svg" className="w-10 h-10" alt="" />
                    <h3 className="text-[24px] font-semibold">Thanh toán hàng tháng thật dễ dàng.</h3>
                    <p className="text-[14px] text-gray-600">Bao gồm lựa chọn lãi suất 0%.</p>
                </div>
                <div className="min-w-[280px] md:w-[320px] p-8 rounded-[24px] bg-[#f5f5f7] flex flex-col gap-4 snap-center">
                    <img src="https://www.apple.com/assets-www/en_WW/common/icon_card/graduationcap_elevated_e406e6e68.svg" className="w-10 h-10" alt="" />
                    <h3 className="text-[24px] font-semibold">Tiết kiệm với chính sách trợ giá giáo dục.</h3>
                    <p className="text-[14px] text-gray-600">Sinh viên và giảng viên có đặc quyền mua thiết bị với giá tiết kiệm.</p>
                </div>
                 <div className="min-w-[280px] md:w-[320px] p-8 rounded-[24px] bg-[#f5f5f7] flex flex-col gap-4 snap-center">
                    <img src="https://www.apple.com/assets-www/en_WW/common/icon_card/desktopcomputer.and.macbook_elevated_960eac0cc.svg" className="w-10 h-10" alt="" />
                    <h3 className="text-[24px] font-semibold">Tùy chỉnh máy Mac của bạn.</h3>
                    <p className="text-[14px] text-gray-600">Chọn chip, bộ nhớ, dung lượng lưu trữ và cả màu sắc.</p>
                </div>
                 <div className="min-w-[280px] md:w-[320px] p-8 rounded-[24px] bg-[#f5f5f7] flex flex-col gap-4 snap-center">
                    <img src="https://www.apple.com/assets-www/en_WW/common/icon_card/truck.box_elevated_d74c82127.svg" className="w-10 h-10" alt="" />
                    <h3 className="text-[24px] font-semibold">Giao hàng miễn phí.</h3>
                    <p className="text-[14px] text-gray-600">Giao hàng miễn phí cho tất cả các đơn hàng.</p>
                </div>
             </div>
        </div>
      </section>

      {/* Feature Cards */}
       <section className="py-24 px-4 bg-white border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto">
             <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f] mb-12">Tìm hiểu Mac.</h2>
             <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x">
                <FeatureCard 
                    label="Hiệu Năng Và Thời Lượng Pin"
                    headline="Làm tốc độ. Suốt nhiều giờ."
                    image="https://www.apple.com/assets-www/en_WW/mac/feature_card/xlarge/fc_performance_73f99203e.jpg"
                    dark
                />
                 <FeatureCard 
                    label="Được thiết kế cho AI"
                    headline="Thông minh. Bảo mật. Ngay trên thiết bị."
                    image="https://www.apple.com/assets-www/en_WW/mac/01_feature_card/xlarge/fc_intelligence_0bb1dcbc6.jpg"
                    dark
                />
                 <FeatureCard 
                    label="macOS và Apple Intelligence"
                    headline="Dễ sử dụng. Dễ phải lòng."
                    image="https://www.apple.com/assets-www/en_WW/mac/01_feature_card/xlarge/fc_macos_627ff5fd8.jpg"
                />
                 <FeatureCard 
                    label="Mac + iPhone"
                    headline="Cùng nhau làm nên chuyện lớn."
                    image="https://www.apple.com/assets-www/en_WW/mac/01_feature_card/xlarge/fc_iphone_03ad8efae.jpg"
                />
             </div>
        </div>
      </section>
      
    </div>
  );
};

export default MacPage;