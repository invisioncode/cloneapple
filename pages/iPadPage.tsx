
import React from 'react';
import ChapterNav from '../components/ChapterNav';
import { ChevronRight } from '../components/Icons';
import { ProductCard, FeatureCard, InfoCard } from '../components/Cards';

const ipadChapters = [
  { name: 'iPad Pro', icon: 'https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_pro_b05b29e18.svg', url: '#', new: true },
  { name: 'iPad Air', icon: 'https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_air_b05b29e18.svg', url: '#' },
  { name: 'iPad', icon: 'https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_ec6ec9ee7.svg', url: '#' },
  { name: 'iPad mini', icon: 'https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_mini_ca78d03ea.svg', url: '#' },
  { name: 'So Sánh', icon: 'https://www.apple.com/assets-www/en_WW/ipad/chapternav/compare_ipad_93f95f0a1.svg', url: '#' },
  { name: 'Apple Pencil', icon: 'https://www.apple.com/assets-www/en_WW/ipad/chapternav/apple_pencil_607b17f9f.svg', url: '#' },
  { name: 'Bàn Phím', icon: 'https://www.apple.com/assets-www/en_WW/ipad/chapternav/keyboard_ipad_0113a1a87.svg', url: '#' },
  { name: 'Phụ Kiện', icon: 'https://www.apple.com/assets-www/en_WW/ipad/chapternav/accessories_ipad_1d680a4ad.svg', url: '#' },
  { name: 'iPadOS 26', icon: 'https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipados_1e9806c02.svg', url: '#' },
  { name: 'Mua sắm iPad', icon: 'https://www.apple.com/assets-www/en_WW/ipad/chapternav/shop_ipad_a90662b1a.svg', url: '#' },
];

const IPadPage: React.FC = () => {
  return (
    <div className="bg-white pt-[44px]">
      <ChapterNav items={ipadChapters} />
      
      {/* Education Ribbon */}
      <div className="bg-[#f5f5f7] py-4 text-center px-4">
        <p className="text-[14px] text-[#1d1d1f] max-w-4xl mx-auto">
          Mua iPad với chính sách trợ giá cho giáo dục. <a href="#" className="text-[#0066cc] hover:underline">Mua sắm <ChevronRight /></a>
        </p>
      </div>

      {/* Header Section */}
      <section className="pt-16 pb-10 px-4 md:px-12">
         <div className="flex flex-col md:flex-row md:items-end justify-between max-w-[1440px] mx-auto mb-12">
            <h1 className="text-[64px] md:text-[96px] font-semibold text-[#1d1d1f] leading-none mb-6 md:mb-0">iPad</h1>
            <div className="flex flex-col md:items-end gap-2">
                <span className="text-[24px] md:text-[28px] font-semibold text-[#1d1d1f]">Khám phá các sản phẩm.</span>
            </div>
         </div>

         {/* Product Grid */}
         <div className="overflow-x-auto no-scrollbar pb-16">
             <div className="flex gap-6 min-w-max mx-auto px-4">
                <ProductCard 
                    title="iPad Pro"
                    badge="Mới"
                    desc="Trải nghiệm iPad cực đỉnh với công nghệ tiên tiến hàng đầu."
                    image="https://www.apple.com/assets-www/en_WW/ipad/01_product_tile/xlarge/ipad_pro_90a3188c9_2x.jpg"
                    colors={['#2e2c2e', '#e2e3e4']}
                />
                <ProductCard 
                    title="iPad Air"
                    desc="Hiệu năng mạnh mẽ trong một thiết kế mỏng nhẹ."
                    image="https://www.apple.com/assets-www/en_WW/ipad/01_product_tile/xlarge/ipad_air_ec8bcd5f8_2x.jpg"
                    colors={['#6b696e', '#d7e5e6', '#e3dee9', '#e3dcd1']}
                />
                <ProductCard 
                    title="iPad"
                    desc="iPad màn hình toàn phần, đầy màu sắc. Cho mọi tác vụ hàng ngày."
                    image="https://www.apple.com/assets-www/en_WW/ipad/01_product_tile/xlarge/ipad_e1ea1c091_2x.jpg"
                    colors={['#6480a3', '#de6274', '#f0d95b', '#e3e4e5']}
                />
                <ProductCard 
                    title="iPad mini"
                    desc="Trải nghiệm trọn vẹn iPad trong một thiết kế siêu gọn nhẹ."
                    image="https://www.apple.com/assets-www/en_WW/ipad/01_product_tile/xlarge/ipad_mini_9d028c8ee_2x.jpg"
                    colors={['#6b696e', '#d7e5e6', '#e3dee9', '#e3dcd1']}
                />
             </div>
         </div>
      </section>

      {/* Why Apple Section */}
      <section className="bg-[#f5f5f7] py-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
             <h2 className="text-[40px] md:text-[56px] font-semibold text-[#1d1d1f] mb-16 px-4 md:px-12 text-left">Vì sao Apple là nơi tốt nhất <br className="hidden md:block"/> để mua iPad.</h2>
             <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 md:px-12 pb-12 snap-x">
                <InfoCard 
                    icon="https://www.apple.com/assets-www/en_WW/common/icon_card/creditcard_elevated_b70609ee9.svg"
                    title="Thanh toán hàng tháng thật dễ dàng."
                    desc="Bao gồm lựa chọn lãi suất 0%."
                />
                <InfoCard 
                    icon="https://www.apple.com/assets-www/en_WW/common/icon_card/arrow.2.squarepath.devices_elevated_fac99429a.svg"
                    title="Tiết kiệm với Apple Trade In."
                    desc="Đổi thiết bị đủ điều kiện của bạn lấy điểm tín dụng cho lần mua hàng tiếp theo."
                />
                <InfoCard 
                    icon="https://www.apple.com/assets-www/en_WW/common/icon_card/graduationcap_elevated_e406e6e68.svg"
                    title="Tiết kiệm khi mua iPad mới với chính sách trợ giá cho giáo dục."
                    desc="Dành cho sinh viên và giáo viên."
                />
                <InfoCard 
                    icon="https://www.apple.com/assets-www/en_WW/common/icon_card/truck.box_elevated_d74c82127.svg"
                    title="Giao Hàng Miễn Phí."
                    desc="Giao hàng luôn miễn phí. Dịch vụ giao hàng nhanh tại TP.HCM."
                />
                 <InfoCard 
                    icon="https://www.apple.com/assets-www/en_WW/common/icon_card/emoji.face.grinning_elevated_bd5991c26.svg"
                    title="Cá nhân hóa iPad của bạn miễn phí."
                    desc="Khắc biểu tượng cảm xúc, tên, tên viết tắt và số lên iPad mới của bạn."
                />
                 <InfoCard 
                    icon="https://www.apple.com/assets-www/en_WW/common/icon_card/message.and.message_elevated_39112f93f.svg"
                    title="Mua sắm trực tiếp với Chuyên Gia trực tuyến."
                    desc="Chọn iPad mới cho bạn với sự hỗ trợ từ Chuyên Gia trực tuyến."
                />
                 <InfoCard 
                    icon="https://www.apple.com/assets-www/en_WW/common/icon_card/app.applestore_elevated_8102e7f71.svg"
                    title="Khám phá trải nghiệm mua sắm được thiết kế cho bạn."
                    desc="Sử dụng ứng dụng Apple Store để có phương thức mua sắm cá nhân hơn."
                />
             </div>
        </div>
      </section>

      {/* Get to Know iPad (Feature Cards) */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-[1440px] mx-auto">
             <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f] mb-12 px-4 md:px-8">Tìm hiểu iPad.</h2>
             <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 md:px-8 pb-12 snap-x">
                <FeatureCard 
                    label="iPadOS + Ứng Dụng"
                    headline="Siêu năng lực bạn cần mỗi ngày.<br/>Tích hợp sẵn."
                    image="https://www.apple.com/assets-www/vi_VN/ipad/01_feature_card/xlarge/fc_ipados_eaaeac179_2x.jpg"
                    dark
                    large
                />
                 <FeatureCard 
                    label="Apple Intelligence"
                    headline="Riêng tư, bảo mật,<br/>mạnh mẽ."
                    image="https://www.apple.com/assets-www/vi_VN/ipad/01_feature_card/xlarge/fc_apple_intelligence_6a24fcadf_2x.jpg"
                    dark
                    large
                />
                 <FeatureCard 
                    label="Hiệu Suất"
                    headline="Ở đâu cũng<br/>làm việc được."
                    image="https://www.apple.com/assets-www/en_WW/ipad/feature_card/xlarge/fc_productivity_8cfa01f32_2x.jpg"
                    dark
                    large
                />
                 <FeatureCard 
                    label="Sáng Tạo"
                    headline="Đánh thức tâm hồn<br/>nghệ sĩ trong bạn."
                    image="https://www.apple.com/assets-www/en_WW/ipad/feature_card/xlarge/fc_creativity_b7786b04b_2x.jpg"
                    dark
                    large
                />
                 <FeatureCard 
                    label="Học Tập"
                    headline="Bốn bể<br/>là phòng học."
                    image="https://www.apple.com/assets-www/en_WW/ipad/feature_card/xlarge/fc_learning_8e45b8fea_2x.jpg"
                    dark
                    large
                />
                 <FeatureCard 
                    label="Giải Trí"
                    headline="Thư giãn. Giải trí.<br/>Chơi game."
                    image="https://www.apple.com/assets-www/en_WW/ipad/01_feature_card/xlarge/fc_entertainment_4f84ef4c4_2x.jpg"
                    dark
                    large
                />
                  <FeatureCard 
                    label="Apple Pencil"
                    headline="Lên ý tưởng.<br/>Viết xuống."
                    image="https://www.apple.com/assets-www/vi_VN/ipad/feature_card/xlarge/fc_pencil_7e6ce0300_2x.jpg"
                    dark
                    large
                />
             </div>
        </div>
      </section>

      {/* iPad Essentials */}
      <section className="py-24 px-4 bg-[#f5f5f7]">
          <div className="max-w-[1440px] mx-auto">
             <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f] mb-12 px-4 md:px-8">Phụ kiện thiết yếu cho iPad.</h2>
             <div className="flex flex-col md:flex-row gap-6 px-4 md:px-8">
                 <div className="flex-1 bg-white rounded-[24px] overflow-hidden p-8 h-[500px] flex flex-col items-center text-center justify-between">
                    <div>
                        <h3 className="text-[28px] font-semibold mb-2">Apple Pencil</h3>
                        <p className="text-[17px] mb-6">Lên ý tưởng. Viết xuống.</p>
                        <div className="flex flex-col gap-2 mb-8">
                            <a href="#" className="text-[#0066cc] hover:underline">Tìm hiểu thêm về Apple Pencil</a>
                            <a href="#" className="text-[#0066cc] hover:underline flex items-center justify-center gap-1">Mua sắm Apple Pencil <ChevronRight /></a>
                        </div>
                    </div>
                    <img src="https://www.apple.com/v/ipad/home/ck/images/overview/essentials/apple_pencil__ek4237c541mu_large.jpg" className="w-full h-auto mt-auto" alt="" />
                 </div>
                 <div className="flex-1 bg-white rounded-[24px] overflow-hidden p-8 h-[500px] flex flex-col items-center text-center justify-between">
                    <div>
                        <h3 className="text-[28px] font-semibold mb-2">Bàn Phím cho iPad</h3>
                        <p className="text-[17px] mb-6">Bàn phím. Và hơn thế nữa.</p>
                        <a href="#" className="text-[#0066cc] hover:underline mb-8">Mua sắm Bàn Phím</a>
                    </div>
                    <img src="https://www.apple.com/v/ipad/home/ck/images/overview/essentials/magic_keyboard__f5zba93x4e2q_large.jpg" className="w-full h-auto mt-auto" alt="" />
                 </div>
             </div>
          </div>
      </section>

    </div>
  );
};

export default IPadPage;
