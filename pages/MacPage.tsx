import React, { useState } from 'react';
import ChapterNav from '../components/ChapterNav';
import { ChevronRight } from '../components/Icons';
import { ProductCard, FeatureCard, InfoCard } from '../components/Cards';

const macChapters = [
  { name: 'MacBook Air', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/macbookair15.macbookair13_7e8b978ec.svg', url: '/mac/macbook-air' },
  { name: 'MacBook Pro', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/macbookpro16.macbookpro14_c495bb45b.svg', url: '/mac/macbook-pro', new: true },
  { name: 'iMac', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/imac24_065a2bf21.svg', url: '/mac/imac' },
  { name: 'Mac mini', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/macmini_f7eabee7b.svg', url: '/mac/mac-mini' },
  { name: 'Mac Studio', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/macstudio_d48bbc5a3.svg', url: '/mac/mac-studio' },
  { name: 'Mac Pro', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/macpro_a0f334173.svg', url: '/mac/mac-pro' },
  { name: 'So Sánh', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/compare_e6faa4436.svg', url: '/mac/compare' },
  { name: 'Màn Hình', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/displays_ce60bd4d1.svg', url: '/mac/displays' },
  { name: 'Phụ Kiện', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/accessories_3bf8fc936.svg', url: '/shop/mac/accessories' },
  { name: 'Tahoe', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/macos_a763f3f5e.svg', url: '/macos/tahoe' },
  { name: 'Mua sắm Mac', icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/shop_mac_b01536048.svg', url: '/store/buy-mac' },
];

const MacPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="bg-white">
      <ChapterNav items={macChapters} />
      
      {/* Education Ribbon */}
      <div className="bg-[#f5f5f7] py-4 text-center px-4">
        <p className="text-[14px] text-[#1d1d1f] max-w-4xl mx-auto">
          Mua Mac với chính sách trợ giá cho giáo dục. <a href="/store/education" className="text-[#0066cc] hover:underline">Mua sắm <ChevronRight /></a>
        </p>
      </div>

      {/* Header Section */}
      <section className="pt-16 pb-10 px-4 md:px-12">
         <div className="flex flex-col md:flex-row md:items-end justify-between max-w-[1440px] mx-auto mb-12">
            <h1 className="text-[64px] md:text-[96px] font-semibold text-[#1d1d1f] leading-none mb-6 md:mb-0">Mac</h1>
            <div className="flex flex-col md:items-end gap-2">
                <span className="text-[24px] md:text-[28px] font-semibold text-[#1d1d1f]">Khám phá các sản phẩm.</span>
                <div className="flex gap-4 text-[14px] md:text-[17px]">
                    <button onClick={() => setActiveTab('all')} className={`pb-1 border-b-2 ${activeTab === 'all' ? 'border-black text-black' : 'border-transparent text-gray-500'}`}>Tất cả</button>
                    <button onClick={() => setActiveTab('laptop')} className={`pb-1 border-b-2 ${activeTab === 'laptop' ? 'border-black text-black' : 'border-transparent text-gray-500'}`}>Máy Tính Xách Tay</button>
                    <button onClick={() => setActiveTab('desktop')} className={`pb-1 border-b-2 ${activeTab === 'desktop' ? 'border-black text-black' : 'border-transparent text-gray-500'}`}>Máy Tính Để Bàn</button>
                    <button onClick={() => setActiveTab('display')} className={`pb-1 border-b-2 ${activeTab === 'display' ? 'border-black text-black' : 'border-transparent text-gray-500'}`}>Màn Hình</button>
                </div>
            </div>
         </div>

         {/* Product Grid */}
         <div className="overflow-x-auto no-scrollbar pb-16">
             <div className="flex gap-6 min-w-max mx-auto px-4">
                <ProductCard 
                    title="MacBook Air 13” và 15”"
                    chip="Chip M4"
                    desc="Siêu mỏng, siêu nhanh để làm việc, giải trí và sáng tạo bất cứ đâu."
                    image="https://www.apple.com/assets-www/en_WW/mac/01_product_tile/xlarge/mba_13_15_140e630d3_2x.jpg"
                    colors={['#c8d8e0', '#e3e4e5', '#f0e4d3', '#2e3642']}
                />
                <ProductCard 
                    title="MacBook Pro 14” và 16”"
                    badge="Phiên bản 14” mới với M5"
                    chip="Chip M5, M4 Pro hoặc M4 Max"
                    desc="Máy tính xách tay Mac tiên tiến nhất cho các luồng công việc phức tạp."
                    image="https://www.apple.com/assets-www/en_WW/mac/01_product_tile/xlarge/mbp_14_16_b933a4e71_2x.jpg"
                    colors={['#2e2c2e', '#e3e4e5']}
                />
                <ProductCard 
                    title="iMac"
                    chip="Chip M4"
                    desc="Máy tính để bàn tất cả trong một tuyệt đẹp, cho sáng tạo và năng suất."
                    image="https://www.apple.com/assets-www/en_WW/mac/01_product_tile/xlarge/imac_24_cc965acc1_2x.jpg"
                    colors={['#1b4c78', '#4b2f67', '#8f2e46', '#cf5925', '#e3ab2b', '#346b41', '#e3e4e5']}
                />
                <ProductCard 
                    title="Mac mini"
                    chip="Chip M4 hoặc M4 Pro"
                    desc="Mac mini nhất, giá hợp lý nhất với hiệu năng khủng."
                    image="https://www.apple.com/assets-www/en_WW/mac/01_product_tile/xlarge/mac_mini_f6ea6b417_2x.jpg"
                />
                <ProductCard 
                    title="Mac Studio"
                    chip="Chip M4 Max hoặc M3 Ultra"
                    desc="Hiệu năng mạnh mẽ và kết nối rộng mở cho các luồng công việc chuyên nghiệp."
                    image="https://www.apple.com/assets-www/en_WW/mac/01_product_tile/xlarge/mac_studio_f409e7d5c_2x.jpg"
                />
                <ProductCard 
                    title="Mac Pro"
                    chip="Chip M2 Ultra"
                    desc="Máy trạm chuyên nghiệp có khả năng mở rộng PCIe cho các luồng công việc phức tạp."
                    image="https://www.apple.com/assets-www/en_WW/mac/01_product_tile/xlarge/mac_pro_abb84cfe3_2x.jpg"
                />
                 <ProductCard 
                    title="Studio Display"
                    desc="Màn hình Retina 5K với camera và âm thanh tuyệt đỉnh."
                    image="https://www.apple.com/assets-www/en_WW/mac/01_product_tile/xlarge/studio_display_5958bd8d8_2x.jpg"
                />
                 <ProductCard 
                    title="Pro Display XDR"
                    desc="Màn hình XDR 6K tiên tiến cho các luồng công việc chuyên nghiệp."
                    image="https://www.apple.com/assets-www/en_WW/mac/01_product_tile/xlarge/pro_display_808ebd8d9_2x.jpg"
                />
             </div>
         </div>
      </section>

      {/* Great Ideas Banner */}
      <section className="px-4 md:px-6 mb-24">
        <div className="max-w-[1440px] mx-auto relative rounded-[32px] overflow-hidden bg-[#f5f5f7] h-[600px] md:h-[700px]">
            <img 
                src="https://www.apple.com/assets-www/en_WW/mac/banner_card_1up/xlarge/great_ideas_514dc88e4_2x.jpg" 
                alt="Great Ideas" 
                className="w-full h-full object-cover"
            />
             <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/10">
                 <h2 className="text-[48px] md:text-[80px] font-semibold text-white mb-2 leading-tight">Bạn nghĩ được là <br /> Mac làm được.</h2>
                 <p className="text-[20px] md:text-[24px] text-white font-medium mb-6">Những ý tưởng lớn khởi đầu từ đây.</p>
                 <div className="flex gap-4">
                    <button className="bg-white text-black px-6 py-3 rounded-full text-[17px] font-medium hover:bg-gray-100 transition-colors">
                        Xem phim
                    </button>
                    <a href="#" className="bg-transparent border border-white text-white px-6 py-3 rounded-full text-[17px] font-medium hover:bg-white hover:text-black transition-colors">
                        Tìm hiểu thêm
                    </a>
                 </div>
             </div>
        </div>
      </section>

      {/* Why Apple Section */}
      <section className="bg-[#f5f5f7] py-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
             <h2 className="text-[40px] md:text-[56px] font-semibold text-[#1d1d1f] mb-16 px-4 md:px-12 text-left">Vì sao Apple là nơi tốt nhất <br className="hidden md:block"/> để mua Mac.</h2>
             <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 md:px-12 pb-12 snap-x">
                <InfoCard 
                    icon="https://www.apple.com/assets-www/en_WW/common/icon_card/creditcard_elevated_b70609ee9.svg"
                    title="Thanh toán hàng tháng thật dễ dàng."
                    desc="Bao gồm lựa chọn lãi suất 0%."
                />
                <InfoCard 
                    icon="https://www.apple.com/assets-www/en_WW/common/icon_card/graduationcap_elevated_e406e6e68.svg"
                    title="Tiết kiệm khi mua Mac mới với chính sách trợ giá cho giáo dục."
                    desc="Sinh viên và giảng viên có đặc quyền mua thiết bị với giá tiết kiệm tại Apple Store."
                />
                <InfoCard 
                    icon="https://www.apple.com/assets-www/en_WW/common/icon_card/desktopcomputer.and.macbook_elevated_960eac0cc.svg"
                    title="Tùy chỉnh máy Mac của bạn."
                    desc="Chọn chip, bộ nhớ, dung lượng lưu trữ và cả màu sắc."
                />
                <InfoCard 
                    icon="https://www.apple.com/assets-www/en_WW/common/icon_card/truck.box_elevated_d74c82127.svg"
                    title="Giao hàng miễn phí"
                    desc="Giao hàng luôn miễn phí. Dịch vụ giao hàng nhanh tại TP.HCM."
                />
                 <InfoCard 
                    icon="https://www.apple.com/assets-www/en_WW/common/icon_card/message.and.message_elevated_39112f93f.svg"
                    title="Mua sắm cùng Chuyên Gia Máy Mac"
                    desc="Mua sắm trực tiếp với Chuyên Gia trực tuyến."
                />
                 <InfoCard 
                    icon="https://www.apple.com/assets-www/en_WW/common/icon_card/app.applestore_elevated_8102e7f71.svg"
                    title="Khám phá trải nghiệm mua sắm được thiết kế cho bạn."
                    desc="Sử dụng ứng dụng Apple Store để có phương thức mua sắm cá nhân hơn."
                />
             </div>
        </div>
      </section>

      {/* Get to Know Mac (Feature Cards) */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-[1440px] mx-auto">
             <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f] mb-12 px-4 md:px-8">Tìm hiểu Mac.</h2>
             <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 md:px-8 pb-12 snap-x">
                <FeatureCard 
                    label="Hiệu Năng Và Thời Lượng Pin"
                    headline="Làm tốc độ. Suốt nhiều giờ."
                    image="https://www.apple.com/assets-www/en_WW/mac/feature_card/xlarge/fc_performance_5fe9a9615_2x.jpg"
                    dark
                    large
                />
                 <FeatureCard 
                    label="Được thiết kế cho AI"
                    headline="Thông minh. Bảo mật. Ngay trên thiết bị."
                    image="https://www.apple.com/assets-www/en_WW/mac/01_feature_card/xlarge/fc_intelligence_409ba2518_2x.jpg"
                    dark
                    large
                />
                 <FeatureCard 
                    label="macOS và Apple Intelligence"
                    headline="Dễ sử dụng. Dễ phải lòng."
                    image="https://www.apple.com/assets-www/en_WW/mac/01_feature_card/xlarge/fc_macos_50d8c6181_2x.jpg"
                    large
                />
                 <FeatureCard 
                    label="Mac + iPhone"
                    headline="Cùng nhau làm nên chuyện lớn."
                    image="https://www.apple.com/assets-www/en_WW/mac/01_feature_card/xlarge/fc_iphone_ef6a4ea29_2x.jpg"
                    large
                />
                 <FeatureCard 
                    label="Khả Năng Tương Thích"
                    headline="Mac chạy các ứng dụng yêu thích của bạn."
                    image="https://www.apple.com/assets-www/en_WW/mac/01_feature_card/xlarge/fc_compatibility_c6a7119ac_2x.jpg"
                    large
                />
                 <FeatureCard 
                    label="Quyền Riêng Tư Và Bảo Mật"
                    headline="Việc của bạn. Chỉ của riêng bạn."
                    image="https://www.apple.com/assets-www/en_WW/mac/feature_card/xlarge/fc_security_63b3ffbc6_2x.jpg"
                    dark
                    large
                />
                <FeatureCard 
                    label="Độ Bền"
                    headline="Được thiết kế để trụ vững với thời gian."
                    image="https://www.apple.com/assets-www/en_WW/mac/feature_card/xlarge/fc_durability_8f04baeb6_2x.jpg"
                    dark
                    large
                />
                <FeatureCard 
                    label="Giá Trị Cốt Lõi Của Apple"
                    headline="Giá trị của chúng tôi định hướng mọi việc chúng tôi làm."
                    image="https://www.apple.com/assets-www/en_WW/mac/feature_card/xlarge/fc_values_2c6cff834_2x.jpg"
                    dark
                    large
                />
             </div>
        </div>
      </section>

      {/* Switch to Mac Section */}
      <section className="py-16 px-4 bg-[#f5f5f7]">
        <div className="max-w-[1440px] mx-auto">
             <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f] mb-12 px-4 md:px-8">Chuyển sang Mac.</h2>
             <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8">
                 <div className="flex-1 bg-white rounded-[24px] overflow-hidden flex flex-col md:flex-row h-[500px] md:h-[420px]">
                     <div className="p-10 flex flex-col justify-center items-start md:w-1/2">
                         <h3 className="text-[32px] font-semibold leading-tight mb-4">Đưa máy cũ cho chúng tôi. Tiết kiệm khi mua máy mới.</h3>
                         <p className="text-[17px] mb-6">Với Apple Trade In, bạn có thể nhận được khoản giá trị xứng đáng khi đổi thiết bị đang dùng.</p>
                         <a href="/store/trade-in" className="text-[#0066cc] hover:underline flex items-center">Xem thiết bị của bạn đáng giá bao nhiêu <ChevronRight /></a>
                     </div>
                     <div className="md:w-1/2 h-full">
                         <img src="https://www.apple.com/assets-www/en_WW/mac/banner_card_2up/xlarge/trade_in_b8c840ded_2x.png" className="w-full h-full object-cover object-bottom" alt="" />
                     </div>
                 </div>
             </div>
             <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8 mt-6">
                <div className="flex-1 bg-white rounded-[24px] overflow-hidden flex flex-col md:flex-row h-[500px] md:h-[420px]">
                     <div className="p-10 flex flex-col justify-center items-start md:w-1/2">
                         <h3 className="text-[32px] font-semibold leading-tight mb-4">Mac làm được đó.</h3>
                         <p className="text-[17px] mb-6">Hãy xem chuyển sang dùng Mac dễ dàng thế nào.</p>
                         <a href="#" className="text-[#0066cc] hover:underline flex items-center">Tìm hiểu thêm <ChevronRight /></a>
                     </div>
                     <div className="md:w-1/2 h-full">
                         <img src="https://www.apple.com/assets-www/vi_VN/mac/01_banner_card_2up/xlarge/mac_does_that_e85b77194_2x.png" className="w-full h-full object-cover object-center" alt="" />
                     </div>
                 </div>
             </div>
        </div>
      </section>

      {/* Mac Essentials */}
      <section className="py-24 px-4 bg-[#f5f5f7]">
          <div className="max-w-[1440px] mx-auto">
             <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f] mb-12 px-4 md:px-8">Phụ kiện thiết yếu cho Mac.</h2>
             <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8">
                 <div className="flex-1 bg-white rounded-[24px] overflow-hidden p-8 h-[500px] flex flex-col items-center text-center justify-between">
                    <div>
                        <h3 className="text-[28px] font-semibold mb-2">Phụ kiện Mac</h3>
                        <p className="text-[17px] mb-6">Khám phá bàn phím, chuột và các phụ kiện thiết yếu khác.</p>
                        <a href="/shop/mac/accessories" className="text-[#0066cc] hover:underline mb-8">Mua sắm phụ kiện Mac</a>
                    </div>
                    <img src="https://www.apple.com/assets-www/en_WW/mac/01_banner_card_2up/xlarge/accessories_5e6486404_2x.png" className="w-full h-auto mt-auto" alt="" />
                 </div>
                 <div className="flex-1 bg-white rounded-[24px] overflow-hidden p-8 h-[500px] flex flex-col items-center text-center justify-between">
                    <div>
                        <h3 className="text-[28px] font-semibold mb-2">Studio Display</h3>
                        <p className="text-[17px] mb-6">Màn hình Retina 5K 27 inch kết hợp tuyệt đẹp với bất kỳ máy Mac nào.</p>
                        <a href="/mac/studio-display" className="text-[#0066cc] hover:underline mb-8">Tìm hiểu thêm</a>
                    </div>
                    <img src="https://www.apple.com/assets-www/en_WW/mac/01_banner_card_2up/xlarge/display_441552c95_2x.png" className="w-full h-auto mt-auto" alt="" />
                 </div>
             </div>
          </div>
      </section>
      
      {/* Ecosystem Accordion (Simplified as List) */}
      <section className="py-24 px-4 bg-white">
          <div className="max-w-[1024px] mx-auto px-4 md:px-8">
             <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f] mb-12">Mở khoá thế giới của Apple.</h2>
             <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-[24px] font-semibold mb-4">Mac và iPhone</h3>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <p className="md:w-1/2 text-[17px] text-[#1d1d1f]">Trả lời cuộc gọi hoặc tin nhắn từ iPhone ngay trên Mac. Xem và điều khiển mọi thứ trên iPhone của bạn từ máy Mac với tính năng Phản Chiếu iPhone.</p>
                        <img src="https://www.apple.com/assets-www/en_WW/mac/01_image_accordion/xlarge/mac_iphone_c3449f0e5_2x.jpg" className="md:w-1/2 rounded-xl" alt="" />
                    </div>
                </div>
                 <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-[24px] font-semibold mb-4">Mac và iPad</h3>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <p className="md:w-1/2 text-[17px] text-[#1d1d1f]">Phác thảo trên iPad và bản vẽ xuất hiện ngay trên Mac của bạn. Hoặc sử dụng iPad của bạn làm màn hình thứ hai.</p>
                        <img src="https://www.apple.com/assets-www/en_WW/mac/01_image_accordion/xlarge/mac_ipad_f4b0cf26c_2x.jpg" className="md:w-1/2 rounded-xl" alt="" />
                    </div>
                </div>
                 <div className="pb-6">
                    <h3 className="text-[24px] font-semibold mb-4">Mac và Apple Watch</h3>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <p className="md:w-1/2 text-[17px] text-[#1d1d1f]">Tự động đăng nhập vào máy Mac của bạn khi bạn đang đeo Apple Watch với tính năng Tự Động Mở Khóa.</p>
                        <img src="https://www.apple.com/assets-www/en_WW/mac/01_image_accordion/xlarge/mac_watch_d8a3d08d7_2x.jpg" className="md:w-1/2 rounded-xl" alt="" />
                    </div>
                </div>
             </div>
             <div className="mt-12 text-center">
                 <a href="/macos/continuity" className="text-[#0066cc] hover:underline text-[19px] flex items-center justify-center">Tìm hiểu cách các thiết bị Apple hoạt động tốt hơn khi phối hợp cùng nhau <ChevronRight /></a>
             </div>
          </div>
      </section>

    </div>
  );
};

export default MacPage;