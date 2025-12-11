import React from 'react';
import ChapterNav from '../components/ChapterNav';
import { ChevronRight } from '../components/Icons';

const tvHomeChapters = [
  { name: 'Apple TV 4K', icon: 'https://www.apple.com/v/tv-home/p/images/chapternav/apple_tv_4k_light__c51717t43yqa_large.svg', url: '#' },
  { name: 'Apple TV app', icon: 'https://www.apple.com/v/tv-home/p/images/chapternav/apple_tv_app_light__etrj133dhy6a_large.svg', url: '#' },
  { name: 'Apple TV+', icon: 'https://www.apple.com/v/tv-home/p/images/chapternav/apple_tv_plus_light__b2gn1h9g67eu_large.svg', url: '#' },
  { name: 'HomePod', icon: 'https://www.apple.com/v/tv-home/p/images/chapternav/homepod_light__c2n2i1d545ci_large.svg', url: '#' },
  { name: 'HomePod mini', icon: 'https://www.apple.com/v/tv-home/p/images/chapternav/homepod_mini_light__c9zlg7o7b0ya_large.svg', url: '#' },
  { name: 'Home app', icon: 'https://www.apple.com/v/tv-home/p/images/chapternav/home_app_light__fpx0a09b8h6y_large.svg', url: '#' },
  { name: 'Phụ Kiện', icon: 'https://www.apple.com/v/tv-home/p/images/chapternav/accessories_light__fpx0a09b8h6y_large.svg', url: '#' },
];

const Tile = ({ 
    eyebrow, 
    headline, 
    price, 
    image, 
    dark = false,
    logo,
    ctaLinks 
}: { 
    eyebrow?: string; 
    headline: string | React.ReactNode; 
    price?: string; 
    image: string; 
    dark?: boolean; 
    logo?: string;
    ctaLinks?: { text: string; url: string; type: 'button' | 'link' }[]
}) => (
    <div className={`relative overflow-hidden rounded-[24px] p-8 md:p-10 flex flex-col justify-between h-[500px] md:h-[600px] group ${dark ? 'bg-black text-white' : 'bg-white text-[#1d1d1f]'} shadow-sm border border-gray-100`}>
        <div className="relative z-10 flex flex-col items-start gap-2 max-w-[340px]">
             {logo && <img src={logo} alt="" className="h-8 md:h-10 object-contain mb-2" />}
             {eyebrow && <p className={`text-[12px] font-semibold uppercase tracking-wider ${dark ? 'text-[#a1a1a6]' : 'text-[#6e6e73]'}`}>{eyebrow}</p>}
             <h3 className="text-[32px] md:text-[40px] font-semibold leading-tight">{headline}</h3>
             {price && <p className="text-[17px] mt-1">{price}</p>}
             {ctaLinks && (
                 <div className="flex flex-wrap gap-4 mt-4">
                     {ctaLinks.map((link, i) => (
                         link.type === 'button' ? (
                             <a key={i} href={link.url} className={`px-5 py-2 rounded-full text-[14px] font-medium transition-colors ${dark ? 'bg-white text-black hover:bg-gray-200' : 'bg-[#0071e3] text-white hover:bg-[#0077ED]'}`}>
                                 {link.text}
                             </a>
                         ) : (
                             <a key={i} href={link.url} className={`text-[14px] hover:underline flex items-center ${dark ? 'text-white' : 'text-[#0066cc]'}`}>
                                 {link.text} <ChevronRight />
                             </a>
                         )
                     ))}
                 </div>
             )}
        </div>
        <div className="absolute inset-0 z-0 flex items-end justify-center">
            <img src={image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
        </div>
    </div>
);

const SmartHomeCard = ({ 
    headline, 
    cta, 
    image, 
    quote 
}: { 
    headline: React.ReactNode; 
    cta?: { text: string; url: string }; 
    image?: string;
    quote?: string[];
}) => (
    <div className="flex-none w-[300px] md:w-[400px] h-[500px] bg-white rounded-[24px] overflow-hidden snap-center relative shadow-sm border border-gray-100 group">
         <div className="absolute inset-0 p-8 z-10 flex flex-col">
             <h4 className="text-[24px] md:text-[28px] font-semibold leading-tight text-[#1d1d1f] mb-4">
                 {headline}
             </h4>
             {cta && (
                 <a href={cta.url} className="text-[#0066cc] hover:underline flex items-center text-[17px] mb-auto">
                     {cta.text} <ChevronRight />
                 </a>
             )}
             {quote && (
                 <div className="mt-auto space-y-4">
                     {quote.map((q, i) => (
                         <p key={i} className="text-[21px] md:text-[24px] font-bold text-[#1d1d1f] leading-tight">"{q}"</p>
                     ))}
                 </div>
             )}
         </div>
         {image && (
             <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-[1.02]" />
         )}
    </div>
);

const ServiceTile = ({ title, subhead, image, logo, link }: any) => (
     <div className="flex-none w-[300px] md:w-[360px] h-[540px] bg-white rounded-[24px] overflow-hidden snap-center relative shadow-sm border border-gray-100 group flex flex-col">
        <div className="h-[280px] w-full relative bg-[#f5f5f7] flex items-center justify-center overflow-hidden">
             <img src={image} alt="" className="h-full object-contain" />
        </div>
        <div className="p-8 flex flex-col flex-1 items-center text-center">
            {logo && <img src={logo} alt="" className="h-8 object-contain mb-4" />}
            <h3 className="text-[20px] font-semibold leading-tight mb-2 text-[#1d1d1f]">{title}</h3>
            {subhead && <p className="text-[14px] text-gray-500 mb-6">{subhead}</p>}
            <div className="mt-auto">
                 <a href={link} className="bg-black text-white px-5 py-2 rounded-full text-[14px] font-medium hover:bg-gray-800 transition-colors inline-block">
                    Dùng thử miễn phí
                 </a>
                 <div className="mt-3">
                    <a href={link} className="text-[#0066cc] hover:underline text-[14px] inline-flex items-center">
                        Tìm hiểu thêm <ChevronRight />
                    </a>
                 </div>
            </div>
        </div>
     </div>
);


const TVHomePage: React.FC = () => {
  return (
    <div className="bg-[#f5f5f7]">
      <ChapterNav items={tvHomeChapters} />

      {/* Hero Grid */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Tile 
                eyebrow="HomePod"
                headline="Âm thanh sâu lắng."
                price="Từ 7.999.000đ"
                image="https://www.apple.com/v/tv-home/p/images/overview/homepod__eam53jjm772a_large.jpg"
                dark={true}
                ctaLinks={[
                    { text: 'Mua', url: '#', type: 'button' },
                    { text: 'Tìm hiểu thêm', url: '#', type: 'link' }
                ]}
            />
            <Tile 
                eyebrow="HomePod mini"
                headline="Nhỏ nhắn. Âm thanh đầy đặn."
                price="Từ 2.499.000đ"
                image="https://www.apple.com/v/tv-home/p/images/overview/room_filling_sound__zagu3551kwyi_large.jpg"
                ctaLinks={[
                    { text: 'Mua', url: '#', type: 'button' },
                    { text: 'Tìm hiểu thêm', url: '#', type: 'link' }
                ]}
            />
             <Tile 
                headline={<>Trải nghiệm Apple.<br />Điện ảnh hóa mọi giác quan.</>}
                logo="https://www.apple.com/v/tv-home/p/images/overview/apple_tv_4k_logo__vyjj7uki3tui_large.png"
                price="Từ 3.499.000đ"
                image="https://www.apple.com/v/tv-home/p/images/overview/apple_tv_4k__b30wcqp0pdle_large.jpg"
                ctaLinks={[
                    { text: 'Mua', url: '#', type: 'button' },
                    { text: 'Tìm hiểu thêm', url: '#', type: 'link' }
                ]}
            />
             <Tile 
                eyebrow="Ứng dụng Nhà"
                headline={<>Nền tảng cho <br />ngôi nhà thông minh hơn.</>}
                logo="https://www.apple.com/v/tv-home/p/images/overview/home_icon__9u57pp0qahea_large.png"
                image="https://www.apple.com/v/tv-home/p/images/overview/homeapp__cpc1k972xys2_large.jpg"
                ctaLinks={[
                    { text: 'Tìm hiểu thêm', url: '#', type: 'link' }
                ]}
            />
        </div>
      </section>

      {/* Smart Home Gallery */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
            <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f] mb-16 px-4 md:px-12 text-center md:text-left max-w-4xl mx-auto md:mx-0 leading-tight">
                Mọi lý do để biến ngôi nhà của bạn thành nhà thông minh.
            </h2>
            <div className="flex gap-6 overflow-x-auto no-scrollbar px-6 md:px-12 pb-12 snap-x">
                <SmartHomeCard 
                    headline={<>Điều khiển nhà dễ dàng từ bất cứ đâu <br className="hidden md:block"/> với các thiết bị yêu thích.</>}
                    cta={{ text: 'Tìm hiểu về ứng dụng Nhà', url: '#' }}
                    image="https://www.apple.com/v/tv-home/p/images/overview/smart_control__dsa6v8m1pp0m_large.jpg"
                />
                 <SmartHomeCard 
                    headline="Giải trí kết nối liền mạch trong mọi căn phòng."
                    cta={{ text: 'Tìm hiểu về HomePod', url: '#' }}
                    image="https://www.apple.com/v/tv-home/p/images/overview/smart_connect__d8o6agoqfh0m_large.jpg"
                />
                <SmartHomeCard 
                    headline="Điều hành tất cả bằng giọng nói của bạn."
                    cta={{ text: 'Tìm hiểu về Siri', url: '#' }}
                    quote={[
                        "Hey Siri, bật chế độ đi ngủ",
                        "Hey Siri, tăng nhiệt độ phòng",
                        "Hey Siri, tắt đèn tầng dưới"
                    ]}
                />
                 <SmartHomeCard 
                    headline={<>Tất cả với sự bảo mật <br/> và quyền riêng tư của Apple.</>}
                    cta={{ text: 'Tìm hiểu về Quyền Riêng Tư', url: '#' }}
                    image="https://www.apple.com/v/tv-home/p/images/overview/security_and_privacy__bzlguj2x29jm_large.jpg"
                />
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#f5f5f7] py-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
            <div className="text-center mb-16 px-4">
                 <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f] leading-tight">
                    Xem, nghe, chơi và tập luyện. <br /> Trên màn hình lớn.
                </h2>
            </div>

            <div className="flex gap-6 overflow-x-auto no-scrollbar px-6 md:px-12 pb-12 snap-x justify-start md:justify-center">
                <ServiceTile 
                    title="Phát trực tiếp các chương trình Apple Originals từng đoạt giải thưởng."
                    logo="https://www.apple.com/v/tv-home/p/images/overview/tv_plus_logo__ftim9r0zkyum_large.png"
                    image="https://www.apple.com/v/tv-home/p/images/overview/apple_experience_hardware__bk2gaiiovh7m_large.png"
                    link="#"
                />
                <ServiceTile 
                    title="Tất cả âm nhạc. Chất lượng âm thanh cao nhất. Không quảng cáo."
                    logo="https://www.apple.com/v/tv-home/p/images/overview/apple_music_logo__fysswdp9i4yi_large.png"
                    image="https://www.apple.com/v/tv-home/p/images/overview/apple_experience_hardware__bk2gaiiovh7m_large.png" // Reusing image for demo layout match
                    link="#"
                />
                <ServiceTile 
                    title="Bộ sưu tập trò chơi di động hay nhất cho mọi người chơi."
                    logo="https://www.apple.com/v/tv-home/p/images/overview/apple_arcade_logo__fkj0u4ziuguy_large.png"
                    image="https://www.apple.com/v/tv-home/p/images/overview/apple_experience_hardware__bk2gaiiovh7m_large.png"
                    link="#"
                />
            </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end px-6 md:px-12 mb-12">
                <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f] max-w-3xl leading-tight">
                    Phụ kiện. Quanh nhà bạn và trên mọi thiết bị.
                </h2>
                <a href="#" className="text-[#0066cc] hover:underline text-[19px] mb-4 flex items-center whitespace-nowrap">
                    Mua phụ kiện <ChevronRight />
                </a>
            </div>
            
            <div className="flex gap-6 overflow-x-auto no-scrollbar px-6 md:px-12 pb-12 snap-x">
                 <SmartHomeCard 
                    headline="Hệ Thống Chiếu Sáng"
                    cta={{ text: 'Mua Đèn & Bóng Đèn', url: '#' }}
                    image="https://www.apple.com/v/tv-home/p/images/overview/lighting__bwpnaru6q1w2_large.jpg"
                />
                <SmartHomeCard 
                    headline="An Ninh"
                    cta={{ text: 'Mua Camera & Cảm Biến', url: '#' }}
                    image="https://www.apple.com/v/tv-home/p/images/overview/security__dbctk5zp4gcy_large.jpg"
                />
                <SmartHomeCard 
                    headline="Tiện Nghi"
                    cta={{ text: 'Mua Bộ Điều Nhiệt', url: '#' }}
                    image="https://www.apple.com/v/tv-home/p/images/overview/comfort__bnwbuouyz10i_large.jpg"
                />
                 <SmartHomeCard 
                    headline="Lối Vào"
                    cta={{ text: 'Mua Khóa & Cảm Biến', url: '#' }}
                    image="https://www.apple.com/v/tv-home/p/images/overview/entry__bfom4g78kbg2_large.jpg"
                />
            </div>
        </div>
      </section>

    </div>
  );
};

export default TVHomePage;