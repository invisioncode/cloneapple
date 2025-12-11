import React from 'react';
import ChapterNav from '../components/ChapterNav';
import { ChevronRight } from '../components/Icons';

const servicesChapters = [
  { name: 'Apple One', icon: 'https://www.apple.com/v/services/j/images/chapternav/light/apple_one__b02w77464d2q_large.svg', url: '#' },
  { name: 'Apple TV+', icon: 'https://www.apple.com/v/services/j/images/chapternav/light/apple_tv_plus__f44o7k94o1e6_large.svg', url: '#' },
  { name: 'Apple Music', icon: 'https://www.apple.com/v/services/j/images/chapternav/light/apple_music__f8p35775436y_large.svg', url: '#' },
  { name: 'Apple Arcade', icon: 'https://www.apple.com/v/services/j/images/chapternav/light/apple_arcade__e5d76l99c4oi_large.svg', url: '#' },
  { name: 'Apple Podcasts', icon: 'https://www.apple.com/v/services/j/images/chapternav/light/apple_podcasts__e35x02v672qa_large.svg', url: '#' },
  { name: 'Apple Books', icon: 'https://www.apple.com/v/services/j/images/chapternav/light/apple_books__d3753696602u_large.svg', url: '#' },
];

const ServiceHero = ({ 
    logo, 
    headline, 
    subhead, 
    bgImage, 
    bgVideo, 
    ctas,
    bundle = false
}: { 
    logo?: string; 
    headline?: string;
    subhead: string; 
    bgImage: string; 
    bgVideo?: string;
    ctas: { text: string; url: string; type: 'white' | 'glass' }[];
    bundle?: boolean;
}) => (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-black text-white group">
        <div className="absolute inset-0 z-0">
            {bgVideo ? (
                <video src={bgVideo} autoPlay muted loop playsInline className="w-full h-full object-cover opacity-80" />
            ) : (
                <img src={bgImage} alt="" className="w-full h-full object-cover opacity-80" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
            <div className="max-w-2xl">
                {logo && <img src={logo} alt="Service Logo" className="h-10 md:h-12 object-contain mb-4" />}
                {headline && <h2 className="text-[40px] md:text-[56px] font-semibold leading-tight mb-2">{headline}</h2>}
                
                {bundle && (
                    <div className="flex items-center gap-2 mb-4 text-sm font-semibold tracking-wide uppercase text-gray-300">
                        <span>Gộp với</span>
                        <span className="flex items-center gap-1"><span className="text-xl"></span> One</span>
                    </div>
                )}

                <p className="text-[21px] md:text-[24px] font-medium leading-relaxed mb-8">{subhead}</p>
                
                <div className="flex flex-wrap gap-4">
                    {ctas.map((cta, i) => (
                        <a 
                            key={i} 
                            href={cta.url} 
                            className={`px-6 py-3 rounded-full text-[17px] font-medium transition-all
                                ${cta.type === 'white' 
                                    ? 'bg-white text-black hover:bg-gray-100' 
                                    : 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30'
                                }
                            `}
                        >
                            {cta.text}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const AppleOneBanner = () => (
    <div className="bg-black text-white py-20 px-6 overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center relative z-10">
            {/* Floating Icons Representation */}
            <div className="flex justify-center items-center gap-4 mb-8 scale-75 md:scale-100">
                 <img src="https://www.apple.com/v/services/j/images/services/overview/services/apple-one-banner/chiclet_music__czz4szrg9qc2_large.png" className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-2xl shadow-lg -translate-y-4" alt="" />
                 <img src="https://www.apple.com/v/services/j/images/services/overview/services/apple-one-banner/chiclet_apple_tv__e3uyhyy0a4sy_large.png" className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-2xl shadow-lg -translate-y-8" alt="" />
                 <img src="https://www.apple.com/v/services/j/images/services/overview/services/apple-one-banner/logo_apple_one__cftfcy53dtsi_large.png" className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-3xl shadow-2xl z-10" alt="Apple One" />
                 <img src="https://www.apple.com/v/services/j/images/services/overview/services/apple-one-banner/chiclet_arcade__pg8i0s94i322_large.png" className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-2xl shadow-lg -translate-y-8" alt="" />
                 <img src="https://www.apple.com/v/services/j/images/services/overview/services/apple-one-banner/chiclet_icloud__cg2fz3fj3nau_large.png" className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-2xl shadow-lg -translate-y-4" alt="" />
            </div>

            <h2 className="text-[32px] md:text-[48px] font-semibold leading-tight mb-6">
                Gộp chung bốn dịch vụ Apple<br className="hidden md:block" /> và tận hưởng nhiều hơn, tốn kém ít hơn.
            </h2>
            <a href="#" className="bg-white text-black px-8 py-3 rounded-full text-[17px] font-medium hover:bg-gray-100 transition-colors">
                Tìm hiểu thêm
            </a>
        </div>
    </div>
);

const GalleryRow = ({ items, landscape = true }: { items: string[], landscape?: boolean }) => (
    <div className="bg-black py-8 overflow-x-auto no-scrollbar">
        <div className="flex gap-4 px-6 md:px-12 min-w-max">
            {items.map((src, i) => (
                <div key={i} className={`relative flex-none rounded-xl overflow-hidden group cursor-pointer ${landscape ? 'w-[280px] h-[158px] md:w-[400px] md:h-[225px]' : 'w-[200px] h-[200px] md:w-[280px] md:h-[280px]'}`}>
                    <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                </div>
            ))}
        </div>
    </div>
);

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen font-sans">
      <div className="bg-white">
        <ChapterNav items={servicesChapters} />
      </div>

      {/* Main Intro */}
      <section className="bg-black pt-20 pb-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
              <h1 className="text-[48px] md:text-[80px] font-semibold text-white leading-[1.1] mb-6">
                  Giới thiệu<br />vũ trụ giải trí <br className="hidden md:block" />hạng A.
              </h1>
              <p className="text-[21px] md:text-[24px] text-[#86868b] leading-relaxed">
                  Những bộ phim đoạt giải. Các chương trình hấp dẫn. Nghe nhạc bạn thích với Âm Thanh Không Gian. Cùng bộ sưu tập trò chơi di động hoành tráng nhất. Các chương trình giải trí và trải nghiệm tuyệt vời nhất ở ngay đây, chỉ có ở Apple.
              </p>
          </div>
      </section>

      <AppleOneBanner />

      {/* Apple TV+ */}
      <section>
          <ServiceHero 
            logo="https://www.apple.com/v/services/j/images/services/overview/services/apple_tv_icon__bvibg7x6ma1y_large.png"
            subhead="Xem trực tuyến các chương trình Apple Originals đoạt giải trên tất cả màn hình của bạn."
            bgImage="https://www.apple.com/v/services/j/images/services/overview/services/service-headers/services_tv_startframe__dsqpuhmpr9aq_large.jpg"
            bgVideo="https://www.apple.com/105/media/us/services/2025/ff000a6e-4b20-4ad3-9702-b3cf302fd65d/anim/services/large.mp4"
            bundle={true}
            ctas={[
                { text: 'Dùng thử miễn phí', url: '#', type: 'white' },
                { text: 'Tìm hiểu thêm', url: '#', type: 'glass' }
            ]}
          />
          <GalleryRow 
            landscape
            items={[
                'https://is1-ssl.mzstatic.com/image/thumb/Features/v4/37/60/72/37607246-0e06-4443-4467-37667c42730f/8207d727-b062-4217-a02b-a7970d47340e.png/600x338.jpg',
                'https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/91/31/31/91313134-e90f-9017-f3d3-78b0c477964b/40292723-92b0-466d-b633-149eb0db266a.png/600x338.jpg',
                'https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/7e/17/dc/7e17dcc8-2747-0744-8396-9f7926795493/9874a706-e7e2-4740-9b43-447764db8069.png/600x338.jpg',
                'https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/9f/c7/23/9fc72332-9c36-7c91-a620-333068694002/f9347d48-12d9-4363-9a3d-4c3e74be7a71.png/600x338.jpg'
            ]}
          />
      </section>

      {/* Apple Music */}
      <section className="mt-4">
          <ServiceHero 
            logo="https://www.apple.com/v/services/j/images/services/overview/services/music_icon__eeojpjw8ldiu_large.png"
            subhead="Tất cả thể loại nhạc. Chất lượng âm thanh tuyệt hảo. Không quảng cáo."
            bgImage="https://www.apple.com/v/services/j/images/services/overview/services/service-headers/music_2024_startframe__gkhou3rh32um_large.jpg"
            bgVideo="https://www.apple.com/105/media/us/services/2024/a8e4c2f2-5eaa-476d-b419-e6faf9237070/anim/services/large.mp4"
            bundle={true}
            ctas={[
                { text: 'Dùng thử miễn phí', url: '#', type: 'white' },
                { text: 'Tìm hiểu thêm', url: '#', type: 'glass' }
            ]}
          />
           <GalleryRow 
            landscape={false}
            items={[
                'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ab/3e/26/ab3e2646-0042-f823-3b6d-49d7b97397b9/196362205574.jpg/600x600.jpg',
                'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/9a/20/c7/9a20c7d4-03a9-e263-7c7d-93339cb20e9d/196362205635.jpg/600x600.jpg',
                'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0d/2a/39/0d2a392b-363c-3962-43ce-7f3f26049232/198704289896.png/600x600.jpg',
                'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/28/76/97/28769747-4933-2bf9-7622-49ce69399435/196589634952.jpg/600x600.jpg'
            ]}
          />
      </section>

      {/* Apple Arcade */}
      <section className="mt-4">
          <ServiceHero 
            logo="https://www.apple.com/v/services/j/images/services/overview/services/apple_arcade_icon__dui73v827lqq_large.png"
            subhead="Bộ sưu tập trò chơi di động tuyệt vời, nay có trong ứng dụng Trò Chơi."
            bgImage="https://www.apple.com/v/services/j/images/services/overview/services/service-headers/arcade_startframe_2024__cb6o2uwuqpaq_large.jpg"
            bgVideo="https://www.apple.com/105/media/us/services/2024/416d7ef9-e5f1-4bdb-9443-3b7a1958236f/anim/hero/large.mp4"
            bundle={true}
            ctas={[
                { text: 'Dùng thử miễn phí', url: '#', type: 'white' },
                { text: 'Tìm hiểu thêm', url: '#', type: 'glass' }
            ]}
          />
           <GalleryRow 
            landscape
            items={[
                'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/0a/87/03/0a87034f-4d92-720e-8f24-279c6d32ec0b/AppIcon-0-0-1x_U007emarketing-0-5-0-0-sRGB-85-220.png/492x0w.webp',
                'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/21/6f/31/216f3126-bd38-7323-9993-9c3629e30a7d/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/492x0w.webp',
                'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/ce/2f/a0/ce2fa0b0-3773-6330-9b36-7c0440306236/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/492x0w.webp',
            ]}
          />
      </section>

      {/* Apple Podcasts */}
      <section className="mt-4 pb-20">
          <div className="bg-[#1c1c1e] relative w-full h-[600px] flex flex-col justify-center items-center text-center px-6">
             <img src="https://www.apple.com/v/services/j/images/services/overview/services/podcast_icon__gdo1h9k9z8uy_large.png" alt="Apple Podcasts" className="h-16 md:h-20 object-contain mb-6" />
             <h2 className="text-[40px] md:text-[64px] font-semibold text-white mb-2">Apple Podcasts</h2>
             <p className="text-[21px] md:text-[24px] text-white font-medium max-w-2xl leading-relaxed mb-8">
                 Hàng triệu chương trình, từ những tên tuổi lớn đến các tài năng mới nổi.
             </p>
             <div className="flex flex-wrap gap-4 justify-center">
                <a href="#" className="bg-white text-black px-6 py-3 rounded-full text-[17px] font-medium hover:bg-gray-100 transition-colors">
                    Mở ứng dụng
                </a>
                <a href="#" className="text-[#2997ff] hover:underline flex items-center text-[17px] font-medium bg-transparent px-4 py-3">
                    Tìm hiểu thêm <ChevronRight />
                </a>
             </div>
          </div>
      </section>

      {/* Footer Apple One Promo */}
      <section className="bg-black py-24 border-t border-gray-800">
          <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
              <div className="md:w-1/2 flex flex-col items-start text-white">
                  <img src="https://www.apple.com/v/services/j/images/services/overview/apple-one/apple_services_apple_one__b80olquewa2u_large.png" alt="Apple One" className="h-10 mb-4" />
                  <p className="text-[28px] md:text-[40px] font-semibold leading-tight mb-6">
                      Gộp chung đến bốn dịch vụ Apple và tận hưởng nhiều hơn, tốn kém ít hơn.
                  </p>
                  <div className="flex gap-4">
                      <a href="#" className="bg-white text-black px-6 py-3 rounded-full text-[17px] font-medium hover:bg-gray-100 transition-colors">
                          Dùng thử Apple One miễn phí
                      </a>
                      <a href="#" className="text-white hover:underline flex items-center text-[17px] px-4 py-3">
                          Tìm hiểu thêm
                      </a>
                  </div>
              </div>
              <div className="md:w-1/2">
                  <img src="https://www.apple.com/vn/services/images/services/overview/apple-one/apple_services_logos__egjjf8y4n4sy_large.png" alt="Services bundle" className="w-full" />
              </div>
          </div>
      </section>

    </div>
  );
};

export default ServicesPage;