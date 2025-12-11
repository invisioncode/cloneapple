import React from 'react';
import ChapterNav from '../components/ChapterNav';
import { ChevronRight } from '../components/Icons';
import { ProductCard, FeatureCard, InfoCard } from '../components/Cards';

const watchChapters = [
  { name: 'Apple Watch Series 11', icon: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-watch-nav-202509_GEO_VN?wid=200&hei=130&fmt=png-alpha', url: '#', new: true },
  { name: 'Apple Watch SE', icon: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-watch-se-nav-202509?wid=200&hei=130&fmt=png-alpha', url: '#', new: true },
  { name: 'Apple Watch Ultra', icon: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-watch-ultra-nav-202509?wid=200&hei=130&fmt=png-alpha', url: '#', new: true },
  { name: 'Nike', icon: 'https://www.apple.com/v/watch/bt/images/overview/chapternav/watch_nav_nike_light__b3234j7q0uqa_large.svg', url: '#' },
  { name: 'Hermès', icon: 'https://www.apple.com/v/watch/bt/images/overview/chapternav/watch_nav_hermes_light__c20985551502_large.svg', url: '#' },
  { name: 'So Sánh', icon: 'https://www.apple.com/v/watch/bt/images/overview/chapternav/watch_nav_compare_light__f29055812902_large.svg', url: '#' },
  { name: 'Dây Đeo', icon: 'https://www.apple.com/v/watch/bt/images/overview/chapternav/watch_nav_bands_light__f29055812902_large.svg', url: '#' },
  { name: 'Phụ Kiện', icon: 'https://www.apple.com/v/watch/bt/images/overview/chapternav/watch_nav_accessories_light__f29055812902_large.svg', url: '#' },
  { name: 'Apple Fitness+', icon: 'https://www.apple.com/v/watch/bt/images/overview/chapternav/watch_nav_fitness_light__f29055812902_large.svg', url: '#' },
  { name: 'watchOS', icon: 'https://www.apple.com/v/watch/bt/images/overview/chapternav/watch_nav_watch_os_light__f29055812902_large.svg', url: '#' },
];

const WatchPage: React.FC = () => {
  return (
    <div className="bg-white">
      <ChapterNav items={watchChapters} />
      
      {/* Ribbon */}
      <div className="bg-[#f5f5f7] py-4 text-center px-4">
        <p className="text-[14px] text-[#1d1d1f] max-w-4xl mx-auto">
          Nhận 3 tháng Apple Fitness+ khi mua bất kỳ Apple Watch nào. <a href="#" className="text-[#0066cc] hover:underline">Mua Apple Watch <ChevronRight /></a>
        </p>
      </div>

      {/* Header Section */}
      <section className="pt-16 pb-10 px-4 md:px-12">
         <div className="flex flex-col md:flex-row md:items-end justify-between max-w-[1440px] mx-auto mb-12">
            <h1 className="text-[64px] md:text-[96px] font-semibold text-[#1d1d1f] leading-none mb-6 md:mb-0">Apple Watch</h1>
         </div>

         {/* Product Grid */}
         <div className="overflow-x-auto no-scrollbar pb-16">
             <div className="flex gap-6 min-w-max mx-auto px-4">
                <ProductCard 
                    title="Apple Watch Series 11"
                    badge="Mới"
                    desc="Cách tuyệt vời nhất để theo dõi sức khỏe của bạn."
                    image="https://www.apple.com/v/watch/bt/images/overview/select/product_s11__c23ym6fc09me_large.png"
                    colors={['#5e5e5f', '#e3e4e6', '#e6c7c2', '#1d1d1f', '#d3d0c9', '#d4af37', '#4d5b62']} // Space Grey, Silver, Rose Gold, Jet Black, Natural, Gold, Slate
                    price="Từ 11.499.000đ"
                />
                <ProductCard 
                    title="Apple Watch SE"
                    badge="Mới"
                    desc="Các tính năng sức khỏe thiết yếu với mức giá tuyệt vời."
                    image="https://www.apple.com/v/watch/bt/images/overview/select/product_se__cbhd710p3auq_large.png"
                    colors={['#2e3642', '#f0e5d8']} // Midnight, Starlight
                    price="Từ 6.999.000đ"
                />
                <ProductCard 
                    title="Apple Watch Ultra 3"
                    badge="Mới"
                    desc="Đồng hồ thể thao và phiêu lưu đỉnh cao."
                    image="https://www.apple.com/v/watch/bt/images/overview/select/product_u3__eh9hc0els5g2_large.png"
                    colors={['#d3d0c9', '#1a1a1a']} // Natural, Black
                    price="Từ 23.999.000đ"
                />
             </div>
         </div>
      </section>

      {/* Why Apple Section (Incentive) */}
      <section className="bg-[#f5f5f7] py-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
             <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f] mb-12 px-4 md:px-12 text-left">Vì sao Apple là nơi tốt nhất <br className="hidden md:block" /> để mua Apple Watch.</h2>
             <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 md:px-12 pb-12 snap-x">
                <FeatureCard 
                    label="Tài Chính"
                    headline="Thanh toán hàng tháng dễ dàng."
                    subhead="Lãi suất 0%."
                    image="https://www.apple.com/v/watch/bt/images/overview/incentive/incentive_card__ed4ymox3k9ua_large.jpg"
                />
                 <FeatureCard 
                    label="Apple Trade In"
                    headline="Tiết kiệm khi đổi thiết bị cũ."
                    image="https://www.apple.com/v/watch/bt/images/overview/incentive/incentive_trade_in__dj8ydvx9fx4y_large.jpg"
                />
                 <FeatureCard 
                    label="Giao Hàng"
                    headline="Giao hàng nhanh chóng và miễn phí."
                    image="https://www.apple.com/v/watch/bt/images/overview/incentive/incentive_delivery_and_pickup__ljtapj0ry7ey_large.jpg"
                />
                 <FeatureCard 
                    label="Thiết Lập Cá Nhân"
                    headline="Tận dụng tối đa Apple Watch của bạn."
                    image="https://www.apple.com/v/watch/bt/images/overview/incentive/incentive_personal_session__tc2rfkamj3ey_large.jpg"
                />
                <FeatureCard 
                    label="Mua Sắm Qua Video"
                    headline="Mua sắm trực tiếp cùng Chuyên Gia."
                    image="https://www.apple.com/v/watch/bt/images/overview/incentive/incentive_support__dzrqlvvn1cia_large.jpg"
                />
                 <FeatureCard 
                    label="Ứng Dụng Apple Store"
                    headline="Trải nghiệm mua sắm được thiết kế cho bạn."
                    image="https://www.apple.com/v/watch/bt/images/overview/incentive/incentive_store_app__e1rh3xt10p6q_large.jpg"
                />
             </div>
        </div>
      </section>

      {/* Get to Know Apple Watch */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
             <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f] mb-12 px-4 md:px-12 text-left">Tìm hiểu Apple Watch.</h2>
             <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 md:px-12 pb-12 snap-x">
                <FeatureCard 
                    label="Sức Khỏe"
                    headline="Hiểu bạn. <br/>Từ trong ra ngoài."
                    image="https://www.apple.com/v/watch/bt/images/overview/consider/feature_health__d7mywzialfo2_large.jpg"
                    dark
                    large
                />
                 <FeatureCard 
                    label="Thể Thao"
                    headline="Động lực <br/>trên từng cây số."
                    image="https://www.apple.com/v/watch/bt/images/overview/consider/feature_fitness__deop8n4uo5g2_large.jpg"
                    dark
                    large
                />
                 <FeatureCard 
                    label="An Toàn"
                    headline="Giữ sự trợ giúp <br/>trong tầm tay."
                    image="https://www.apple.com/v/watch/bt/images/overview/consider/feature_safety__dw301bl8sh4y_large.jpg"
                    dark
                    large
                />
                 <FeatureCard 
                    label="Apple Watch Ultra 3"
                    headline="Đồng hồ thể thao <br/>và phiêu lưu đỉnh cao."
                    image="https://www.apple.com/v/watch/bt/images/overview/consider/feature_adventure__c724gznn7o8y_large.jpg"
                    large
                />
                <FeatureCard 
                    label="Kết Nối"
                    headline="Luôn giữ liên lạc <br/>đúng lúc."
                    image="https://www.apple.com/v/watch/bt/images/overview/consider/feature_connectivity__f9uv4tebmi2q_large.jpg"
                    large
                />
                 <FeatureCard 
                    label="Cá Nhân Hóa"
                    headline="Đậm chất riêng."
                    image="https://www.apple.com/v/watch/bt/images/overview/consider/feature_personalization__euxcm8q4ojyq_large.jpg"
                    large
                />
                 <FeatureCard 
                    label="Apple Watch Cho Con Bạn"
                    headline="Độc lập cho con. <br/>An tâm cho bạn."
                    image="https://www.apple.com/v/watch/bt/images/overview/consider/feature_family_setup__p3mbmd1ta8ii_large.jpg"
                    large
                />
             </div>
        </div>
      </section>

      {/* Essentials */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-[1440px] mx-auto">
             <div className="flex flex-col md:flex-row justify-between items-end mb-12 px-4 md:px-8">
                 <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f]">Phụ kiện thiết yếu.</h2>
                 <a href="#" className="text-[#0066cc] hover:underline text-[19px] mb-2 flex items-center">Xem tất cả phụ kiện <ChevronRight /></a>
             </div>
             
             <div className="px-4 md:px-8">
                <FeatureCard 
                    label="Dây Đeo Apple Watch"
                    headline="Đến lúc làm mới."
                    subhead="Khám phá các dây đeo mới với vật liệu, kiểu dáng và màu sắc mới."
                    image="https://www.apple.com/v/watch/bt/images/overview/essentials/banner_watch_studio__flxoj26afcia_large.jpg"
                    large
                />
             </div>
        </div>
      </section>
      
      {/* Ecosystem */}
      <section className="py-24 px-4 bg-[#f5f5f7]">
          <div className="max-w-[1024px] mx-auto px-4 md:px-8">
             <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f] mb-12">Sinh ra là để cho nhau.</h2>
             <div className="space-y-8">
                <div className="border-b border-gray-200 pb-8">
                    <h3 className="text-[24px] md:text-[32px] font-semibold mb-4">Apple Watch và iPhone</h3>
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-3xl p-6 md:p-0 overflow-hidden">
                        <div className="md:w-1/2 md:p-8">
                            <p className="text-[17px] text-[#1d1d1f] leading-relaxed">
                                Kết hợp Apple Watch và iPhone mở ra một thế giới các tính năng giúp mỗi thiết bị trở nên tốt hơn. Bạn có thể tạo lộ trình tùy chỉnh với Bản đồ trên iPhone, sau đó tải xuống đồng hồ để sử dụng bất cứ lúc nào. Hoặc bắt đầu bài tập đạp xe trên đồng hồ và xem các chỉ số tự động xuất hiện dưới dạng Hoạt Động Trực Tiếp trên iPhone.
                            </p>
                        </div>
                        <img src="https://www.apple.com/v/watch/bt/images/overview/augment/accordion_watch_and_iphone__cpy8yuk3tpqq_large.jpg" className="md:w-1/2 w-full object-cover" alt="Apple Watch và iPhone" />
                    </div>
                </div>
                 <div className="border-b border-gray-200 pb-8">
                    <h3 className="text-[24px] md:text-[32px] font-semibold mb-4">Apple Watch và AirPods</h3>
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-3xl p-6 md:p-0 overflow-hidden">
                         <div className="md:w-1/2 md:p-8">
                            <p className="text-[17px] text-[#1d1d1f] leading-relaxed">
                                Bạn có thể làm rất nhiều việc chỉ với Apple Watch và AirPods — mà không cần iPhone. Nhận cuộc gọi, nghe nhạc và podcast, nghe thông báo đến. Thậm chí trả lời tin nhắn bằng Siri.
                            </p>
                        </div>
                        <img src="https://www.apple.com/v/watch/bt/images/overview/augment/accordion_watch_and_airpods__gam9ojqlj0a6_large.jpg" className="md:w-1/2 w-full object-cover" alt="Apple Watch và AirPods" />
                    </div>
                </div>
                 <div className="pb-8">
                    <h3 className="text-[24px] md:text-[32px] font-semibold mb-4">Apple Watch và Apple Fitness+</h3>
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-3xl p-6 md:p-0 overflow-hidden">
                         <div className="md:w-1/2 md:p-8">
                            <p className="text-[17px] text-[#1d1d1f] leading-relaxed">
                                Apple Watch tăng cường trải nghiệm Fitness+ của bạn với các chỉ số cá nhân hóa theo thời gian thực trên màn hình, như nhịp tim, lượng calo đã đốt cháy và Vòng Hoạt Động. Và bạn có được sự tự do của các bài đi bộ, chạy bộ và thiền định có hướng dẫn bằng âm thanh chỉ với đồng hồ và AirPods.
                            </p>
                        </div>
                        <img src="https://www.apple.com/v/watch/bt/images/overview/augment/accordion_watch_and_fitness_plus__gjwsj1yd7c2m_large.jpg" className="md:w-1/2 w-full object-cover" alt="Apple Watch và Fitness+" />
                    </div>
                </div>
             </div>
          </div>
      </section>

    </div>
  );
};

export default WatchPage;