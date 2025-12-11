
import React from 'react';
import HeroSection from '../components/HeroSection';
import PromoGrid from '../components/PromoGrid';
import TVPlusCarousel from '../components/TVPlusCarousel';
import Ribbon from '../components/Ribbon';
import { useAppLanguage, getPath } from '../utils/i18n';

const HomePage: React.FC = () => {
  const { lang, t } = useAppLanguage();
  const loc = (path: string) => getPath(path, lang);

  return (
    <>
      <Ribbon />
      {/* Holiday 2025 Hero */}
      <HeroSection 
          id="holiday"
          title={t.hero.holiday_title}
          subtitle={t.hero.holiday_subtitle}
          ctaLinks={[{ text: t.hero.cta_shop_gift, url: loc('/store'), type: 'primary' }]}
          image="https://www.apple.com/v/home/ci/images/heroes/holiday-2025/hero_holiday_2025_startframe__d9p5369r33mu_large.jpg"
          video="https://www.apple.com/105/media/us/home/2025/4c46fd14-1e53-4074-954d-140ec02a3c7d/anim/hero/large.mp4"
          top={false}
          dark={false}
      />

      {/* iPhone Family Hero */}
      <HeroSection 
          id="iphone"
          title={t.hero.iphone_title}
          subtitle={t.hero.iphone_subtitle}
          ctaLinks={[
              { text: t.hero.cta_learn, url: loc('/iphone'), type: 'primary' },
              { text: t.hero.cta_buy, url: loc('/store/buy-iphone'), type: 'secondary' }
          ]}
          image="https://www.apple.com/v/home/cj/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_large.jpg"
          top={true}
      />

      {/* MacBook Pro Hero */}
      <HeroSection 
          id="macbook"
          title="MacBook Pro 14”"
          subtitle={t.hero.macbook_subtitle}
          ctaLinks={[
              { text: t.hero.cta_learn, url: loc('/mac'), type: 'primary' },
              { text: t.hero.cta_buy, url: loc('/store/buy-mac'), type: 'secondary' }
          ]}
          image="https://www.apple.com/v/home/ci/images/heroes/macbook-pro-m5/hero_macbook_pro_m5_announce__i8r7suk8moqe_large.jpg"
          dark={true}
          top={true}
      />

      {/* Promo Grid */}
      <PromoGrid 
          promos={[
              {
                  id: 'airpods',
                  title: t.promos.airpods_title,
                  subtitle: t.promos.airpods_subtitle,
                  ctaLinks: [
                      { text: t.hero.cta_learn, url: loc('/airpods'), type: 'primary' },
                      { text: t.hero.cta_buy, url: loc('/store/buy-airpods'), type: 'secondary' }
                  ],
                  image: 'https://www.apple.com/v/home/ci/images/promos/airpods-pro-3/promo_airpodspro_3__f6xmza7bglei_large.jpg',
                  dark: false
              },
              {
                  id: 'ipad-pro',
                  title: t.promos.ipad_title,
                  subtitle: t.promos.ipad_subtitle,
                  ctaLinks: [
                      { text: t.hero.cta_learn, url: loc('/ipad'), type: 'primary' },
                      { text: t.hero.cta_buy, url: loc('/store/buy-ipad'), type: 'secondary' }
                  ],
                  image: 'https://www.apple.com/v/home/ci/images/promos/ipad-pro/promo_ipad_pro__c529dk533k4m_large.jpg',
                  dark: true
              },
              {
                  id: 'watch-s11',
                  title: t.promos.watch_s11_title,
                  subtitle: t.promos.watch_s11_subtitle,
                  ctaLinks: [
                      { text: t.hero.cta_learn, url: loc('/watch'), type: 'primary' },
                      { text: t.hero.cta_buy, url: loc('/store/buy-watch'), type: 'secondary' }
                  ],
                  image: 'https://www.apple.com/vn/home/images/promos/apple-watch-series-11/promo_apple_watch_series_11__b63hxviqvonm_large.jpg',
                  dark: false,
                  logo: 'Apple Watch Series 11'
              },
                {
                  id: 'watch-ultra',
                  title: t.promos.watch_ultra_title,
                  subtitle: t.promos.watch_ultra_subtitle,
                  ctaLinks: [
                      { text: t.hero.cta_learn, url: loc('/watch'), type: 'primary' },
                      { text: t.hero.cta_buy, url: loc('/store/buy-watch'), type: 'secondary' }
                  ],
                  image: 'https://www.apple.com/vn/home/images/promos/apple-watch-ultra-3/promo_apple_watch_ultra3__bwvslhbxx99e_large.jpg',
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
