import React from 'react';
import ChapterNav from '../components/ChapterNav';
import { ChevronRight } from '../components/Icons';
import { ProductCard, FeatureCard, InfoCard } from '../components/Cards';

const ipadChapters = [
  { name: 'iPad Pro', icon: 'https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_pro_b05b29e18.svg', url: '/ipad/ipad-pro', new: true },
  { name: 'iPad Air', icon: 'https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_air_b05b29e18.svg', url: '/ipad/ipad-air' },
  { name: 'iPad', icon: 'https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_ec6ec9ee7.svg', url: '/ipad/ipad-10-9' },
  { name: 'iPad mini', icon: 'https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_mini_ca78d03ea.svg', url: '/ipad/ipad-mini' },
  { name: 'So Sánh', icon: 'https://www.apple.com/assets-www/en_WW/ipad/chapternav/compare_ipad_93f95f0a1.svg', url: '/ipad/compare' },
  { name: 'Apple Pencil', icon: 'https://www.apple.com/assets-www/en_WW/ipad/chapternav/apple_pencil_607b17f9f.svg', url: '/ipad/apple-pencil' },
  { name: 'Bàn Phím', icon: 'https://www.apple.com/assets-www/en_WW/ipad/chapternav/keyboard_ipad_0113a1a87.svg', url: '/ipad/keyboards' },
  { name: 'Phụ Kiện', icon: 'https://www.apple.com/assets-www/en_WW/ipad/chapternav/accessories_ipad_1d680a4ad.svg', url: '/shop/ipad/accessories' },
  { name: 'iPadOS 26', icon: 'https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipados_1e9806c02.svg', url: '/ipados' },
  { name: 'Mua sắm iPad', icon: 'https://www.apple.com/assets-www/en_WW/ipad/chapternav/shop_ipad_a90662b1a.svg', url: '/store/buy-ipad' },
];

const IPadPage: React.FC = () => {
  return (
    <div className="bg-white">
      <ChapterNav items={ipadChapters} />
      
      {/* Education Ribbon */}
      <div className="bg-[#f5f5f7] py-4 text-center px-4">
        <p className="text-[14px] text-[#1d1d1f] max-w-4xl mx-auto">
          Mua iPad với chính sách trợ giá cho giáo dục. <a href="/store/education" className="text-[#0066cc] hover:underline">Mua sắm <ChevronRight /></a>
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
                        <a href="/ipad/apple-pencil" className="text-[#0066cc] hover:underline mb-8">Tìm hiểu thêm</a>
                    </div>
                    <img src="https://www.apple.com/assets-www/vi_VN/ipad/banner_card_2up/xlarge/pencil_447a469e5_2x.png" className="w-full h-auto mt-auto" alt="" />
                 </div>
                 <div className="flex-1 bg-white rounded-[24px] overflow-hidden p-8 h-[500px] flex flex-col items-center text-center justify-between">
                    <div>
                        <h3 className="text-[28px] font-semibold mb-2">Bàn Phím Cho iPad</h3>
                        <p className="text-[17px] mb-6">Gõ hết ra. Cầm cả theo.</p>
                        <a href="/ipad/keyboards" className="text-[#0066cc] hover:underline mb-8">Tìm hiểu thêm</a>
                    </div>
                    <img src="https://www.apple.com/assets-www/vi_VN/ipad/banner_card_2up/xlarge/keyboard_3902383b0_2x.png" className="w-full h-auto mt-auto" alt="" />
                 </div>
             </div>
          </div>
      </section>
      
      {/* Ecosystem Accordion (Simplified as List) */}
      <section className="py-24 px-4 bg-white">
          <div className="max-w-[1024px] mx-auto px-4 md:px-8">
             <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f] mb-12">Nửa kia hoàn hảo.</h2>
             <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-[24px] font-semibold mb-4">iPad và iPhone</h3>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <p className="md:w-1/2 text-[17px] text-[#1d1d1f]">iPad là thiết bị hoàn hảo để đưa những nội dung bạn quay chụp trên iPhone và biến chúng trở thành hiện thực trên một không gian sáng tạo. Bạn có thể quay video và chụp ảnh trên iPhone sau đó sử dụng màn hình lớn của iPad để chỉnh sửa, thêm hiệu ứng hình động và hơn thế nữa. Bạn cũng có thể tiếp tục ngay tại điểm bạn dừng lại với Handoff.</p>
                        <img src="https://www.apple.com/assets-www/vi_VN/ipad/01_image_accordion/xlarge/ipad_iphone_bac90ab60_2x.jpg" className="md:w-1/2 rounded-xl" alt="" />
                    </div>
                </div>
                 <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-[24px] font-semibold mb-4">iPad và Mac</h3>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <p className="md:w-1/2 text-[17px] text-[#1d1d1f]">iPad và Mac được thiết kế để phối hợp cùng nhau tạo nên một nền tảng sáng tạo cực đỉnh. Phác thảo trên iPad và bản vẽ xuất hiện ngay trên Mac của bạn với Sidecar. Sau đó dùng iPad của bạn để vẽ hoặc chỉnh sửa bằng Apple Pencil hoặc sử dụng như màn hình thứ hai. Mở rộng quy trình làm việc của bạn đến những địa điểm mới và khi bạn quay lại bàn làm việc, Điều Khiển Chung cho phép bạn sử dụng chuột hoặc bàn di một cách liền mạch trên cả hai thiết bị.</p>
                        <img src="https://www.apple.com/assets-www/vi_VN/ipad/01_image_accordion/xlarge/ipad_mac_ae30cb976_2x.jpg" className="md:w-1/2 rounded-xl" alt="" />
                    </div>
                </div>
                 <div className="pb-6">
                    <h3 className="text-[24px] font-semibold mb-4">iPad và Apple Watch</h3>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <p className="md:w-1/2 text-[17px] text-[#1d1d1f]">iPad vô cùng phù hợp để xem dữ liệu Sức Khỏe phong phú do Apple Watch theo dõi và xem lại xu hướng và điểm nổi bật trong ứng dụng Sức Khỏe trên màn hình lớn. Bạn cũng có thể mời những người thân yêu chia sẻ thông tin sức khỏe của họ với bạn một cách an toàn để giúp bạn an tâm và giữ kết nối với mọi người.</p>
                        <img src="https://www.apple.com/assets-www/vi_VN/ipad/01_image_accordion/xlarge/ipad_watch_68d81ebba_2x.jpg" className="md:w-1/2 rounded-xl" alt="" />
                    </div>
                </div>
             </div>
          </div>
      </section>

    </div>
  );
};

export default IPadPage;