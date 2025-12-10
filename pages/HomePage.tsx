import React from 'react';
import HeroSection from '../components/HeroSection';
import PromoGrid from '../components/PromoGrid';
import TVPlusCarousel from '../components/TVPlusCarousel';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Holiday 2025 Hero */}
      <HeroSection 
          id="holiday"
          title="Trao những điều đặc biệt."
          subtitle="Tìm thấy điều mong đợi suốt cả năm."
          ctaLinks={[{ text: 'Mua sắm quà tặng', url: '#', type: 'primary' }]}
          image="https://www.apple.com/v/home/ci/images/heroes/holiday-2025/hero_holiday_2025_startframe__d9p5369r33mu_large.jpg"
          video="https://www.apple.com/105/media/us/home/2025/4c46fd14-1e53-4074-954d-140ec02a3c7d/anim/hero/large.mp4"
          top={false}
          dark={false}
      />

      {/* iPhone Family Hero */}
      <HeroSection 
          id="iphone"
          title="iPhone"
          subtitle="Xin chào thế hệ iPhone mới nhất."
          ctaLinks={[
              { text: 'Tìm hiểu thêm', url: '#', type: 'primary' },
              { text: 'Mua sắm iPhone', url: '#', type: 'secondary' }
          ]}
          image="https://www.apple.com/v/home/ci/images/heroes/iphone-family/hero_iphone_family__b5al00te2aaq_large.jpg"
          top={true}
      />

      {/* MacBook Pro Hero */}
      <HeroSection 
          id="macbook"
          title="MacBook Pro 14”"
          subtitle="Siêu mạnh mẽ với M5."
          ctaLinks={[
              { text: 'Tìm hiểu thêm', url: '#', type: 'primary' },
              { text: 'Mua', url: '#', type: 'secondary' }
          ]}
          image="https://www.apple.com/v/home/ci/images/heroes/macbook-pro-m5/hero_macbookpro__f2j8n091j7iu_large.jpg"
          dark={true}
          top={true}
      />

      {/* Promo Grid */}
      <PromoGrid 
          promos={[
              {
                  id: 'airpods',
                  title: 'AirPods Pro 3',
                  subtitle: 'Chủ Động Khử Tiếng Ồn tai bạn chưa từng nghe.',
                  ctaLinks: [
                      { text: 'Tìm hiểu thêm', url: '#', type: 'primary' },
                      { text: 'Mua', url: '#', type: 'secondary' }
                  ],
                  image: 'https://www.apple.com/v/home/ci/images/promos/airpods-pro-3/promo_airpodspro_3__e67y4728522q_large.jpg',
                  dark: false
              },
              {
                  id: 'ipad-pro',
                  title: 'iPad Pro',
                  subtitle: 'Hiệu năng AI tiên tiến và năng lực thay đổi cuộc chơi.',
                  ctaLinks: [
                      { text: 'Tìm hiểu thêm', url: '#', type: 'primary' },
                      { text: 'Mua', url: '#', type: 'secondary' }
                  ],
                  image: 'https://www.apple.com/v/home/ci/images/promos/ipad-pro/promo_ipad_pro__ch1666d9g26q_large.jpg',
                  dark: true
              },
              {
                  id: 'ipad-air',
                  title: 'iPad Air',
                  subtitle: 'Nay siêu mạnh mẽ với chip M3.',
                  ctaLinks: [
                      { text: 'Tìm hiểu thêm', url: '#', type: 'primary' },
                      { text: 'Mua', url: '#', type: 'secondary' }
                  ],
                  image: 'https://www.apple.com/v/home/ci/images/promos/ipad-air/promo_ipad_air__be233h91k8me_large.jpg',
                  dark: false
              },
                {
                  id: 'ipad',
                  title: 'iPad',
                  subtitle: 'Nay với tốc độ của chip A16.',
                  subtitle2: 'Tăng gấp đôi dung lượng lưu trữ khởi điểm.',
                  ctaLinks: [
                      { text: 'Tìm hiểu thêm', url: '#', type: 'primary' },
                      { text: 'Mua', url: '#', type: 'secondary' }
                  ],
                  image: 'https://www.apple.com/v/home/ci/images/promos/ipad/promo_ipad__fioegapgvyou_large.jpg',
                  dark: false
              },
                {
                  id: 'watch-s11',
                  title: 'Apple Watch Series 11',
                  subtitle: 'Siêu công cụ chăm sóc sức khỏe của bạn.',
                  ctaLinks: [
                      { text: 'Tìm hiểu thêm', url: '#', type: 'primary' },
                      { text: 'Mua', url: '#', type: 'secondary' }
                  ],
                  image: 'https://www.apple.com/v/home/ci/images/promos/apple-watch-series-11/promo_apple_watch_series_11__b7a052j615yu_large.jpg',
                  dark: false,
                  logo: 'Apple Watch Series 11'
              },
                {
                  id: 'watch-ultra',
                  title: 'Apple Watch Ultra 3',
                  subtitle: 'Tay chơi cự phách.',
                  ctaLinks: [
                      { text: 'Tìm hiểu thêm', url: '#', type: 'primary' },
                      { text: 'Mua', url: '#', type: 'secondary' }
                  ],
                  image: 'https://www.apple.com/v/home/ci/images/promos/apple-watch-ultra-3/promo_apple_watch_ultra3__g62r3353s02a_large.jpg',
                  dark: true,
                  logo: 'Apple Watch Ultra 3'
              }
          ]}
      />
      
      <TVPlusCarousel />
    </>
  );
};

export default HomePage;