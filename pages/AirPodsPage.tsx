import React from 'react';
import ChapterNav from '../components/ChapterNav';
import { ChevronRight } from '../components/Icons';
import { FeatureCard, ProductCard } from '../components/Cards';

const airpodsChapters = [
  { name: 'AirPods 4', icon: 'https://www.apple.com/v/airpods/ab/images/chapternav/airpods_4_light__c51717t43yqa_large.svg', url: '/airpods/airpods-4' },
  { name: 'AirPods Pro 2', icon: 'https://www.apple.com/v/airpods/ab/images/chapternav/airpods_pro_light__etrj133dhy6a_large.svg', url: '/airpods/airpods-pro-2', new: true },
  { name: 'AirPods Max', icon: 'https://www.apple.com/v/airpods/ab/images/chapternav/airpods_max_light__b2gn1h9g67eu_large.svg', url: '/airpods/airpods-max' },
  { name: 'So Sánh', icon: 'https://www.apple.com/v/airpods/ab/images/chapternav/airpods_compare_light__c2n2i1d545ci_large.svg', url: '/airpods/compare' },
  { name: 'Phụ Kiện', icon: 'https://www.apple.com/v/airpods/ab/images/chapternav/airpods_accessories_light__c9zlg7o7b0ya_large.svg', url: '/shop/airpods/accessories' },
  { name: 'Apple Music', icon: 'https://www.apple.com/v/airpods/ab/images/chapternav/apple_music_light__fpx0a09b8h6y_large.svg', url: '/apple-music' },
];

const AirPodsHero = ({ 
    title, 
    subtitle, 
    price, 
    image, 
    dark = false,
    video,
    ctas
}: { 
    title: string; 
    subtitle: string; 
    price?: string; 
    image?: string; 
    dark?: boolean; 
    video?: string;
    ctas: { text: string; url: string; type: 'primary' | 'secondary' }[]
}) => (
    <div className={`relative w-full h-[650px] md:h-[800px] overflow-hidden rounded-[24px] mb-6 mx-auto max-w-[95%] md:max-w-none md:mx-6 group ${dark ? 'bg-black text-white' : 'bg-[#f5f5f7] text-[#1d1d1f]'}`}>
        <div className="absolute inset-0 z-0">
            {video ? (
                <video src={video} autoPlay muted loop playsInline className="w-full h-full object-cover" />
            ) : (
                <img src={image} alt={title} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]" />
            )}
        </div>
        <div className={`relative z-10 flex flex-col items-center justify-end h-full pb-16 md:pb-24 px-4 text-center ${dark ? 'text-white' : 'text-[#1d1d1f]'}`}>
            <h2 className="text-[40px] md:text-[80px] font-semibold leading-tight mb-2">{title}</h2>
            <p className="text-[20px] md:text-[28px] font-medium max-w-2xl mb-2">{subtitle}</p>
            {price && <p className="text-[17px] font-normal mb-6">{price}</p>}
            <div className="flex gap-4">
                {ctas.map((cta, i) => (
                    <a key={i} href={cta.url} className={`px-6 py-2 rounded-full text-[17px] font-medium transition-all ${cta.type === 'primary' ? 'bg-[#0071e3] text-white hover:bg-[#0077ED]' : (dark ? 'text-white hover:underline' : 'text-[#0066cc] hover:underline')}`}>
                        {cta.text} {cta.type === 'secondary' && <ChevronRight />}
                    </a>
                ))}
            </div>
        </div>
    </div>
);

const CompareRow = ({ feature, items }: { feature?: string, items: React.ReactNode[] }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-gray-200">
        {feature && <div className="col-span-2 md:col-span-4 text-[17px] font-semibold mb-4 md:hidden">{feature}</div>}
        {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center px-2">
                <span className="text-[14px] md:text-[17px] font-medium text-[#1d1d1f]">{item}</span>
            </div>
        ))}
    </div>
);

const AirPodsPage: React.FC = () => {
  return (
    <div className="bg-white">
      <ChapterNav items={airpodsChapters} />
      
      {/* Ribbon */}
      <div className="bg-[#f5f5f7] py-4 text-center px-4">
        <p className="text-[14px] text-[#1d1d1f] max-w-4xl mx-auto">
          Mua AirPods Pro 2 và nhận 3 tháng sử dụng Apple Music miễn phí. <a href="/apple-music" className="text-[#0066cc] hover:underline">Mua ngay <ChevronRight /></a>
        </p>
      </div>

      {/* Hero Section - AirPods Pro 2 */}
      <div className="pt-8">
          <AirPodsHero 
            title="AirPods Pro 2"
            subtitle="Chủ Động Khử Tiếng Ồn chuẩn mực mới."
            price="Từ 6.199.000đ"
            image="https://www.apple.com/v/airpods/ab/images/overview/hero_endframe__calpooy4ucr6_large.jpg"
            dark={false} // The image has a light background in the source
            ctas={[
                { text: 'Tìm hiểu thêm', url: '#', type: 'primary' },
                { text: 'Mua', url: '/store/buy-airpods', type: 'secondary' }
            ]}
          />
      </div>

       {/* Hero Section - AirPods 4 */}
       <div>
          <AirPodsHero 
            title="AirPods 4"
            subtitle="Biểu tượng. Nay siêu thanh."
            price="Hai phiên bản: Có và Không Có Chủ Động Khử Tiếng Ồn."
            image="https://www.apple.com/v/airpods/ab/images/overview/hero__gb4d3fd8jnu6_large.jpg"
            dark={true}
            ctas={[
                { text: 'Tìm hiểu thêm', url: '#', type: 'primary' },
                { text: 'Mua', url: '/store/buy-airpods', type: 'secondary' }
            ]}
          />
      </div>

      {/* Hero Section - AirPods Max */}
       <div>
          <AirPodsHero 
            title="AirPods Max"
            subtitle="Năm màu mới. Âm thanh táo bạo."
            price="13.999.000đ"
            image="https://www.apple.com/v/airpods/ab/images/overview/airpods_max_purple__d9y3g3n7cnyq_large.png" // Using the static image as we don't have the scroll animation logic
            // Using a white background wrapper for the image effectively
            ctas={[
                { text: 'Tìm hiểu thêm', url: '#', type: 'primary' },
                { text: 'Mua', url: '/store/buy-airpods', type: 'secondary' }
            ]}
          />
      </div>

      {/* Compare Section */}
      <section className="py-24 px-4 max-w-[1440px] mx-auto">
        <h2 className="text-[40px] md:text-[64px] font-semibold text-center mb-16">AirPods nào phù hợp với bạn?</h2>
        
        {/* Device Headers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 sticky top-[50px] bg-white/90 backdrop-blur-md z-20 py-4">
            {[
                { name: 'AirPods 4', img: 'https://www.apple.com/v/airpods/shared/compare/f/images/compare/airpods_4__cis6k1r5q9ya_large.png', price: 'Từ 3.499.000đ' },
                { name: 'AirPods 4', sub: 'với Chủ Động Khử Tiếng Ồn', img: 'https://www.apple.com/v/airpods/shared/compare/f/images/compare/airpods_4_anc__gjgeiu3094qy_large.png', price: 'Từ 4.799.000đ' },
                { name: 'AirPods Pro 2', img: 'https://www.apple.com/v/airpods/shared/compare/f/images/compare/airpods_pro__e9nri03a65mq_large.png', price: '6.199.000đ' },
                { name: 'AirPods Max', img: 'https://www.apple.com/v/airpods/shared/compare/f/images/compare/airpods_max__f26524w0wyie_large.png', price: '13.999.000đ' }
            ].map((device, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                    <div className="h-[150px] flex items-end mb-6">
                        <img src={device.img} alt={device.name} className="max-h-full object-contain" />
                    </div>
                    <h3 className="text-[20px] font-semibold">{device.name}</h3>
                    {device.sub && <p className="text-[12px] text-gray-500">{device.sub}</p>}
                    <p className="text-[14px] mt-2 mb-4">{device.price}</p>
                    <a href="/store/buy-airpods" className="bg-[#0071e3] text-white px-4 py-1 rounded-full text-[12px] hover:bg-[#0077ED]">Mua</a>
                </div>
            ))}
        </div>

        {/* Features Comparison */}
        <div className="space-y-8">
            <CompareRow 
                items={[
                    <span className="text-gray-400">—</span>,
                    <span className="font-semibold">Chủ Động<br/>Khử Tiếng Ồn</span>,
                    <span className="font-semibold">Chủ Động<br/>Khử Tiếng Ồn<br/>Cấp Chuyên Nghiệp</span>,
                    <span className="font-semibold">Chủ Động<br/>Khử Tiếng Ồn<br/>Cấp Chuyên Nghiệp</span>
                ]} 
            />
             <CompareRow 
                items={[
                    <span className="text-gray-400">—</span>,
                    <span>Âm Thanh Thích Ứng<br/>Chế Độ Xuyên Âm<br/>Nhận Biết Cuộc Hội Thoại</span>,
                    <span>Âm Thanh Thích Ứng<br/>Chế Độ Xuyên Âm<br/>Nhận Biết Cuộc Hội Thoại</span>,
                    <span>Chế Độ Xuyên Âm</span>
                ]} 
            />
             <CompareRow 
                items={[
                    <span>Âm Thanh Không Gian Cá Nhân Hóa với khả năng theo dõi chuyển động đầu</span>,
                    <span>Âm Thanh Không Gian Cá Nhân Hóa với khả năng theo dõi chuyển động đầu</span>,
                    <span>Âm Thanh Không Gian Cá Nhân Hóa với khả năng theo dõi chuyển động đầu</span>,
                    <span>Âm Thanh Không Gian Cá Nhân Hóa với khả năng theo dõi chuyển động đầu</span>
                ]} 
            />
             <CompareRow 
                items={[
                    <span className="font-semibold text-[24px]">5 giờ</span>,
                    <span className="font-semibold text-[24px]">5 giờ</span>,
                    <span className="font-semibold text-[24px]">6 giờ</span>,
                    <span className="font-semibold text-[24px]">20 giờ</span>
                ]} 
            />
             <CompareRow 
                items={[
                    <span className="text-gray-500 text-[12px]">thời gian nghe chỉ với một lần sạc</span>,
                    <span className="text-gray-500 text-[12px]">thời gian nghe chỉ với một lần sạc</span>,
                    <span className="text-gray-500 text-[12px]">thời gian nghe chỉ với một lần sạc</span>,
                    <span className="text-gray-500 text-[12px]">thời gian nghe chỉ với một lần sạc</span>
                ]} 
            />
        </div>
        
        <div className="mt-16 text-center">
             <a href="/airpods/compare" className="text-[#0066cc] hover:underline text-[19px] flex items-center justify-center">So sánh tất cả các mẫu AirPods <ChevronRight /></a>
        </div>
      </section>

      {/* Get to Know AirPods (Scroll Gallery) */}
      <section className="bg-[#f5f5f7] py-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
             <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f] mb-12 px-4 md:px-12 text-left">Tìm hiểu AirPods.</h2>
             <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 md:px-12 pb-12 snap-x">
                <FeatureCard 
                    label="Cảm Biến Nhịp Tim"
                    headline="Theo dõi nhịp tim và lượng calo đốt cháy."
                    image="https://www.apple.com/v/airpods/ab/images/overview/consider/card_heart_rate_sensing__exas9s71qo4m_large.jpg"
                    large
                />
                 <FeatureCard 
                    label="Dịch Trực Tiếp"
                    headline="Giao tiếp dễ dàng qua các ngôn ngữ."
                    image="https://www.apple.com/v/airpods/ab/images/overview/consider/card_live_translation__ep68h9wscbee_large.jpg"
                    large
                />
                 <FeatureCard 
                    label="Chủ Động Khử Tiếng Ồn"
                    headline="Kiểm soát điều bạn nghe. Và điều bạn không nghe."
                    image="https://www.apple.com/v/airpods/ab/images/overview/consider/card_noise_cancellation__bcl69t06noci_large.jpg"
                    large
                />
                 <FeatureCard 
                    label="Sức Khỏe Thính Giác"
                    headline="Luôn cập nhật về thính giác của bạn."
                    image="https://www.apple.com/v/airpods/ab/images/overview/consider/card_hearing_health__ss2uxyv3j5m6_large.jpg"
                    large
                />
             </div>
        </div>
      </section>

      {/* Apple Music Section */}
      <section className="py-24 px-4 bg-white text-center">
         <div className="max-w-[800px] mx-auto flex flex-col items-center">
             <img src="https://www.apple.com/v/airpods/ab/images/overview/music/music_album_stack__bi4gk5n0vwb6_large.png" alt="Apple Music" className="w-[300px] mb-8" />
             <h2 className="text-[32px] md:text-[48px] font-semibold mb-4 flex items-center justify-center gap-3">
                 <span className="text-[#fa2d48]"> Music</span>
             </h2>
             <p className="text-[24px] md:text-[32px] font-semibold mb-6">
                 Nhận 3 tháng sử dụng Apple Music miễn phí với AirPods của bạn.
             </p>
             <a href="/apple-music" className="bg-black text-white px-6 py-3 rounded-full text-[17px] hover:bg-gray-800 transition-colors">Tìm hiểu thêm</a>
         </div>
      </section>

      {/* Shop AirPods Section (Added to use ProductCard) */}
      <section className="py-24 px-4 bg-[#f5f5f7]">
          <div className="max-w-[1440px] mx-auto">
             <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f] mb-12 px-4 md:px-12 text-center md:text-left">Mua AirPods.</h2>
             <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 md:px-12 pb-12 snap-x">
                 <ProductCard 
                    title="AirPods Pro 2"
                    desc="Âm thanh đỉnh cao và tính năng khử tiếng ồn chuyên nghiệp."
                    price="6.199.000đ"
                    image="https://www.apple.com/v/airpods/shared/compare/f/images/compare/airpods_pro__e9nri03a65mq_large.png"
                 />
                 <ProductCard 
                    title="AirPods 4"
                    desc="Thiết kế tai nghe mở hoàn toàn mới."
                    price="Từ 3.499.000đ"
                    image="https://www.apple.com/v/airpods/shared/compare/f/images/compare/airpods_4__cis6k1r5q9ya_large.png"
                 />
                 <ProductCard 
                    title="AirPods Max"
                    desc="Tai nghe chụp tai tối thượng."
                    price="13.999.000đ"
                    image="https://www.apple.com/v/airpods/shared/compare/f/images/compare/airpods_max__f26524w0wyie_large.png"
                    colors={['#e6c7c2', '#f0e5d8', '#344e71', '#a998c5', '#2e3642']}
                 />
             </div>
          </div>
      </section>

    </div>
  );
};

export default AirPodsPage;