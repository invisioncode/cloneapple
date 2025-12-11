import React from 'react';
import ChapterNav from '../components/ChapterNav';
import { ChevronRight } from '../components/Icons';
import { ProductCard, FeatureCard, InfoCard } from '../components/Cards';

const iphoneChapters = [
  { name: 'iPhone 17 Pro', icon: 'https://www.apple.com/v/iphone/home/ch/images/overview/chapternav/nav_iphone_17pro__d60uog2c064i_large.png', url: '#', new: true },
  { name: 'iPhone Air', icon: 'https://www.apple.com/v/iphone/home/ch/images/overview/chapternav/nav_iphone_air__bbj6j2c39efm_large.png', url: '#', new: true },
  { name: 'iPhone 17', icon: 'https://www.apple.com/v/iphone/home/ch/images/overview/chapternav/nav_iphone_17__ffxyxejeezqm_large.png', url: '#', new: true },
  { name: 'iPhone 16', icon: 'https://www.apple.com/v/iphone/home/ch/images/overview/chapternav/nav_iphone_16__kcscr25z9num_large.png', url: '#' },
  { name: 'iPhone 16e', icon: 'https://www.apple.com/v/iphone/home/ch/images/overview/chapternav/nav_iphone_16e__3qxl86zrk0yq_large.png', url: '#' },
  { name: 'Compare', icon: 'https://www.apple.com/v/iphone/home/ch/images/overview/chapternav/nav_compare__fka067e4fgq6_large.png', url: '#' },
  { name: 'Accessories', icon: 'https://www.apple.com/v/iphone/home/ch/images/overview/chapternav/nav_accessories__e5zgfl9e0vwy_large.png', url: '#' },
  { name: 'Shop', icon: 'https://www.apple.com/v/iphone/home/ch/images/overview/chapternav/nav_shop__ehl4csfdphg2_large.png', url: '#' },
  { name: 'iOS', icon: 'https://www.apple.com/v/iphone/home/ch/images/overview/chapternav/nav_ios__efygxkc3oqs2_large.png', url: '#' },
];

const IPhonePage: React.FC = () => {
  return (
    <div className="bg-white">
      <ChapterNav items={iphoneChapters} />
      
      {/* Ribbon */}
      <div className="bg-[#f5f5f7] py-4 text-center px-4">
        <p className="text-[14px] text-[#1d1d1f] max-w-4xl mx-auto">
          Get credit toward iPhone 17, iPhone Air, or iPhone 17 Pro when you trade in an eligible smartphone. <a href="#" className="text-[#0066cc] hover:underline">Shop iPhone <ChevronRight /></a>
        </p>
      </div>

      {/* Header Section */}
      <section className="pt-16 pb-10 px-4 md:px-12">
         <div className="flex flex-col md:flex-row md:items-end justify-between max-w-[1440px] mx-auto mb-12">
            <h1 className="text-[64px] md:text-[96px] font-semibold text-[#1d1d1f] leading-none mb-6 md:mb-0">iPhone</h1>
            <div className="flex flex-col md:items-end gap-2">
                <span className="text-[24px] md:text-[28px] font-semibold text-[#1d1d1f]">Explore the lineup.</span>
                <a href="#" className="text-[#0066cc] hover:underline text-[17px] flex items-center">Compare all models <ChevronRight /></a>
            </div>
         </div>

         {/* Product Grid */}
         <div className="overflow-x-auto no-scrollbar pb-16">
             <div className="flex gap-6 min-w-max mx-auto px-4">
                <ProductCard 
                    title="iPhone 17 Pro"
                    badge="New"
                    desc="Innovative design for ultimate performance and battery life."
                    image="https://www.apple.com/v/iphone/home/ch/images/overview/select/iphone_17pro__0s6piftg70ym_large.jpg"
                    colors={['#A3543A', '#243445', '#E3E4E6']} // Simulated colors based on Cosmic Orange, Deep Blue, Silver
                    price="From $999 or $41.62/mo. for 24 mo."
                />
                <ProductCard 
                    title="iPhone Air"
                    badge="New"
                    desc="The thinnest iPhone ever. With the power of pro inside."
                    image="https://www.apple.com/v/iphone/home/ch/images/overview/select/iphone_air__f0t56fef3oey_large.jpg"
                    colors={['#8EB6CE', '#E8DCC8', '#F5F5F0', '#3C3C3D']} // Sky Blue, Light Gold, Cloud White, Space Black
                    price="From $899 or $37.45/mo. for 24 mo."
                />
                <ProductCard 
                    title="iPhone 17"
                    badge="New"
                    desc="Even more delightful. Even more durable."
                    image="https://www.apple.com/v/iphone/home/ch/images/overview/select/iphone_17__ck7zzemcw37m_large.jpg"
                    colors={['#CDB7D9', '#96A893', '#94A6B8', '#F9F6F2', '#333333']} // Lavender, Sage, Mist Blue, White, Black
                    price="From $799 or $33.29/mo. for 24 mo."
                />
                <ProductCard 
                    title="iPhone 16"
                    desc="Amazing performance. Durable design."
                    image="https://www.apple.com/v/iphone/home/ch/images/overview/select/iphone_16__drr03yfz644m_large.jpg"
                    colors={['#6470CD', '#659E9E', '#E492A7', '#F2F2F2', '#35393B']} // Ultramarine, Teal, Pink, White, Black
                    price="From $699 or $29.12/mo. for 24 mo."
                />
                <ProductCard 
                    title="iPhone 16e"
                    desc="Everything you love. Including the price."
                    image="https://www.apple.com/v/iphone/home/ch/images/overview/select/iphone_16e__dar81seif0cy_large.jpg"
                    colors={['#F2F2F2', '#35393B']} // White, Black
                    price="From $599 or $24.95/mo. for 24 mo."
                />
             </div>
         </div>
      </section>

      {/* Switch to iPhone Section */}
      <section className="bg-[#f5f5f7] py-24 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
             <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f] mb-12 px-4 md:px-12 text-left">Switch to iPhone.</h2>
             <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 md:px-12 pb-12 snap-x">
                <FeatureCard 
                    label="Getting Started"
                    headline="Switching from Android to iPhone is simple."
                    image="https://www.apple.com/v/iphone/home/ch/images/overview/consider/getting_started__f98z0j9hm7m2_large.jpg"
                />
                 <FeatureCard 
                    label="Designed to Last"
                    headline="iPhone holds its value longer than other smartphones."
                    image="https://www.apple.com/v/iphone/home/ch/images/overview/consider/designed-to_last__c3hmkknr9scy_large.jpg"
                />
                 <FeatureCard 
                    label="iOS and Apple Intelligence"
                    headline="New look. Even more magic."
                    image="https://www.apple.com/v/iphone/home/ch/images/overview/consider/ios__02vczxaa3siu_large.jpg"
                    dark
                />
                 <FeatureCard 
                    label="Privacy"
                    headline="Your data. Just where you want it."
                    image="https://www.apple.com/v/iphone/home/ch/images/overview/consider/privacy__dd7zepyil6gm_large.jpg"
                    dark
                />
                <FeatureCard 
                    label="Cutting-Edge Cameras"
                    headline="Picture your best photos and videos."
                    image="https://www.apple.com/v/iphone/home/ch/images/overview/consider/camera__f389jji00bee_large.jpg"
                    dark
                />
                 <FeatureCard 
                    label="Chip and Battery Life"
                    headline="Fast that lasts."
                    image="https://www.apple.com/v/iphone/home/ch/images/overview/consider/chip__6hy1uruuluaa_large.jpg"
                    dark
                />
                 <FeatureCard 
                    label="Peace of Mind"
                    headline="Helpful features. On and off the grid."
                    image="https://www.apple.com/v/iphone/home/ch/images/overview/consider/safety__faiti3j3g0mm_large.jpg"
                    dark
                />
             </div>
        </div>
      </section>

      {/* Essentials */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-[1440px] mx-auto">
             <div className="flex flex-col md:flex-row justify-between items-end mb-12 px-4 md:px-8">
                 <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f]">iPhone essentials.</h2>
                 <a href="#" className="text-[#0066cc] hover:underline text-[19px] mb-2 flex items-center">All iPhone accessories <ChevronRight /></a>
             </div>
             
             <div className="flex gap-6 overflow-x-auto no-scrollbar px-4 md:px-8 pb-12 snap-x">
                <FeatureCard 
                    label="iPhone accessories"
                    headline="Protect and personalize."
                    subhead="Explore cases, straps, and more."
                    image="https://www.apple.com/v/iphone/home/ch/images/overview/essentials/accessories__ek0uv892lg6e_large.jpg"
                    large
                />
                 <FeatureCard 
                    label="AirTag"
                    headline="Lose your knack for losing things."
                    image="https://www.apple.com/v/iphone/home/ch/images/overview/essentials/airtag__es9mk1eqbm2q_large.jpg"
                    large
                />
             </div>
        </div>
      </section>
      
      {/* Ecosystem */}
      <section className="py-24 px-4 bg-[#f5f5f7]">
          <div className="max-w-[1024px] mx-auto px-4 md:px-8">
             <h2 className="text-[40px] md:text-[64px] font-semibold text-[#1d1d1f] mb-12">Significant others.</h2>
             <div className="space-y-8">
                <div className="border-b border-gray-200 pb-8">
                    <h3 className="text-[24px] md:text-[32px] font-semibold mb-4">iPhone and Mac</h3>
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-3xl p-6 md:p-0 overflow-hidden">
                        <div className="md:w-1/2 md:p-8">
                            <p className="text-[17px] text-[#1d1d1f] leading-relaxed">
                                With iPhone Mirroring, you can view your iPhone screen on your Mac and control it without picking up your phone. You can even copy images, video, or text from your iPhone and paste it all into a different app on your Mac.
                            </p>
                        </div>
                        <img src="https://www.apple.com/v/iphone/home/ch/images/overview/augment/mac__gmrv6vyz8x6q_large.jpg" className="md:w-1/2 w-full object-cover" alt="iPhone and Mac" />
                    </div>
                </div>
                 <div className="border-b border-gray-200 pb-8">
                    <h3 className="text-[24px] md:text-[32px] font-semibold mb-4">iPhone and Apple Watch</h3>
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-3xl p-6 md:p-0 overflow-hidden">
                         <div className="md:w-1/2 md:p-8">
                            <p className="text-[17px] text-[#1d1d1f] leading-relaxed">
                                Misplaced your iPhone? The latest Apple Watch models can show you its approximate distance and direction. And when you take a call on your Apple Watch, just tap your iPhone to continue the conversation there.
                            </p>
                        </div>
                        <img src="https://www.apple.com/v/iphone/home/ch/images/overview/augment/watch__fxtwpvwdf3mi_large.jpg" className="md:w-1/2 w-full object-cover" alt="iPhone and Apple Watch" />
                    </div>
                </div>
                 <div className="pb-8">
                    <h3 className="text-[24px] md:text-[32px] font-semibold mb-4">iPhone and AirPods</h3>
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-3xl p-6 md:p-0 overflow-hidden">
                         <div className="md:w-1/2 md:p-8">
                            <p className="text-[17px] text-[#1d1d1f] leading-relaxed">
                                Set up AirPods on iPhone with just a tap. You’ll love Adaptive Audio, which automatically tailors the noise control for you to provide the best listening experience across different environments.
                            </p>
                        </div>
                        <img src="https://www.apple.com/v/iphone/home/ch/images/overview/augment/airpods__ehyxlx24f5g2_large.jpg" className="md:w-1/2 w-full object-cover" alt="iPhone and AirPods" />
                    </div>
                </div>
             </div>
          </div>
      </section>

    </div>
  );
};

export default IPhonePage;