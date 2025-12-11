import React from 'react';
import LocalNav from '../components/LocalNav';
import { ChevronRight } from '../components/Icons';

// --- Data extracted from HTML ---

const designGallery = [
  { title: "Design Innovation", desc: "Apple Vision Pro is the result of decades of high‑performance, mobile, and wearable device innovation.", img: "https://www.apple.com/v/apple-vision-pro/j/images/overview/design/drawer/design_innovation_startframe__4mig33ckaf6y_large.jpg" },
  { title: "Dual Knit Band", desc: "The new Dual Knit Band combines soft, breathable straps with a counterbalanced design.", img: "https://www.apple.com/v/apple-vision-pro/j/images/overview/design/drawer/dual_knit_band__cuhpalc1t9ea_large.jpg" },
  { title: "Fit Dial", desc: "The dual-function Fit Dial lets you easily adjust the band’s upper and lower straps independently.", img: "https://www.apple.com/v/apple-vision-pro/j/images/overview/design/drawer/headband_startframe__dd6bzq5p6lqq_large.jpg" },
  { title: "Light Seal", desc: "The Light Seal magnetically attaches to the aluminum alloy frame and gently flexes to conform to your face.", img: "https://www.apple.com/v/apple-vision-pro/j/images/overview/design/drawer/light_seal_startframe__edlebmd6r1aq_large.jpg" },
];

const entertainmentGallery = [
  { title: "Immersive Video", desc: "Apple Immersive Video is a 180-degree, 3D 8K recording format captured with Spatial Audio.", img: "https://www.apple.com/v/apple-vision-pro/j/images/overview/experiences/entertainment/drawer/immersive_startframe__cnugrn0zk30i_large.jpg" },
  { title: "Spatial Gallery", desc: "Immerse yourself with the Spatial Gallery app — an evolving collection of spatial photos and videos.", img: "https://www.apple.com/v/apple-vision-pro/j/images/overview/experiences/entertainment/drawer/spatial_gallery_startframe__c2d5fzswvfu6_large.jpg" },
  { title: "visionOS Games", desc: "visionOS games offer thrilling ways to play using the space around you.", img: "https://www.apple.com/v/apple-vision-pro/j/images/overview/experiences/entertainment/drawer/gaming_startframe__gfsm177e89yu_large.jpg" },
];

const productivityGallery = [
  { title: "Mac Virtual Display", desc: "Bring your Mac wirelessly into Apple Vision Pro with an expandable, ultrawide screen.", img: "https://www.apple.com/v/apple-vision-pro/j/images/overview/experiences/productivity/drawer/mac_startframe__ez7om6vgeis2_large.jpg" },
  { title: "Widgets", desc: "With widgets, you can arrange your favorite information and apps in your space.", img: "https://www.apple.com/v/apple-vision-pro/j/images/overview/experiences/productivity/drawer/widgets_startframe__e5k95qxoevue_large.jpg" },
  { title: "Apple Intelligence", desc: "With Apple Intelligence, Writing Tools can proofread your text and rewrite versions.", img: "https://www.apple.com/v/apple-vision-pro/j/images/overview/experiences/productivity/drawer/apple_intelligence__btsvykyvfooi_large.jpg" },
];

// --- Components ---

const SectionIntro = ({ eyebrow, headline, subhead, white = false }: { eyebrow: string, headline: string, subhead?: string, white?: boolean }) => (
    <div className={`max-w-[980px] mx-auto text-center mb-16 px-6 ${white ? 'text-white' : 'text-[#1d1d1f]'}`}>
        <h2 className="text-[21px] md:text-[24px] font-semibold mb-3">{eyebrow}</h2>
        <p className="text-[40px] md:text-[64px] font-semibold leading-tight tracking-tight mb-6">{headline}</p>
        {subhead && <p className="text-[21px] md:text-[24px] font-medium leading-normal max-w-3xl mx-auto opacity-90">{subhead}</p>}
    </div>
);

const Gallery = ({ items }: { items: { title: string, desc: string, img: string }[] }) => (
    <div className="flex gap-6 overflow-x-auto no-scrollbar px-6 md:px-12 pb-12 snap-x">
        {items.map((item, idx) => (
            <div key={idx} className="flex-none w-[320px] md:w-[400px] snap-center flex flex-col">
                <div className="rounded-[24px] overflow-hidden mb-6 bg-[#f5f5f7] aspect-[1.5]">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
                <p className="text-[17px] text-[#1d1d1f] leading-relaxed opacity-80">{item.desc}</p>
            </div>
        ))}
    </div>
);

const VisionProPage: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      <LocalNav 
        title="Apple Vision Pro"
        links={[
            { name: 'Overview', url: '#', active: true },
            { name: 'Tech Specs', url: '#' },
            { name: 'visionOS', url: '#' },
        ]}
        cta={{ text: 'Buy', url: '#' }}
      />

      {/* Hero Section */}
      <section className="relative w-full h-[85vh] min-h-[600px] bg-black overflow-hidden flex flex-col items-center justify-start pt-16 text-center text-white">
        <div className="relative z-10 px-4">
             <h1 className="text-5xl md:text-7xl font-semibold mb-4">Apple Vision Pro</h1>
             <p className="text-xl md:text-2xl font-normal max-w-2xl mx-auto mb-8">New powerful M5 chip and comfortable Dual Knit Band.</p>
             <div className="flex gap-4 justify-center">
                 <a href="#" className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">Buy</a>
                 <a href="#" className="border border-white text-white px-5 py-2 rounded-full font-medium hover:bg-white hover:text-black transition-colors">Book a demo</a>
             </div>
        </div>
        <div className="absolute inset-0 z-0 mt-[10vh]">
             <img src="https://www.apple.com/v/apple-vision-pro/j/images/overview/hero/hero__cvgr5aj1ttsi_large.jpg" alt="Apple Vision Pro Hero" className="w-full h-full object-cover object-top" />
        </div>
      </section>

      {/* Foundation Section */}
      <section className="py-24 px-6 md:px-12 bg-white text-center">
          <p className="text-[28px] md:text-[40px] font-semibold leading-tight text-[#1d1d1f] max-w-4xl mx-auto">
              Apple Vision Pro seamlessly blends digital content with your physical space. So you can work, watch, relive memories, and connect in ways never before possible. <span className="text-[#86868b]">The era of spatial computing is here.</span>
          </p>
      </section>

      {/* Design Section */}
      <section className="bg-[#f5f5f7] py-24 border-t border-gray-200">
          <SectionIntro 
             eyebrow="" 
             headline="Designed by Apple." 
             subhead="Apple Vision Pro is the result of decades of experience designing high-performance, mobile, and wearable devices — culminating in the most ambitious product Apple has ever created." 
          />
          <Gallery items={designGallery} />
      </section>

      {/* Experiences - Entertainment */}
      <section className="bg-black text-white py-24">
          <SectionIntro 
             eyebrow="Entertainment" 
             headline="The ultimate theater. Wherever you are." 
             subhead="Transform any room into your own personal theater. Expand your movies, shows, and games up to the perfect size while feeling like you're part of the action with Spatial Audio." 
             white
          />
          <div className="mb-12 max-w-[1200px] mx-auto px-6">
               <img src="https://www.apple.com/v/apple-vision-pro/j/images/overview/experiences/entertainment/entertainment_a_startframe__eqosxjbd3xua_large.jpg" className="w-full rounded-[24px]" alt="Entertainment" />
          </div>
          <Gallery items={entertainmentGallery} />
      </section>

       {/* Experiences - Productivity */}
       <section className="bg-[#f5f5f7] py-24">
          <SectionIntro 
             eyebrow="Productivity" 
             headline="A workspace with infinite space." 
             subhead="Apple Vision Pro gives you limitless space to get work done. Arrange apps anywhere and scale them to the perfect size, making the workspace of your dreams a reality — all while staying present in the world around you." 
          />
          <div className="mb-12 max-w-[1200px] mx-auto px-6">
               <img src="https://www.apple.com/v/apple-vision-pro/j/images/overview/experiences/productivity/productivity_a_startframe__b78h8iwbcw76_large.jpg" className="w-full rounded-[24px]" alt="Productivity" />
          </div>
          <Gallery items={productivityGallery} />
      </section>

      {/* Experiences - Photos & Videos */}
      <section className="bg-white py-24">
          <SectionIntro 
             eyebrow="Photos and Videos" 
             headline="Be in the moment. All over again." 
             subhead="Apple Vision Pro is Apple's first 3D camera. You can capture magical spatial photos and spatial videos in 3D, then relive those cherished moments like never before with immersive Spatial Audio." 
          />
          <div className="mb-12 max-w-[1200px] mx-auto px-6">
               <img src="https://www.apple.com/v/apple-vision-pro/j/images/overview/experiences/photos-videos/photos_videos_startframe__dnwwa2e1qys2_large.jpg" className="w-full rounded-[24px]" alt="Photos" />
          </div>
      </section>

      {/* Technology Section */}
      <section className="bg-black text-white py-24">
          <SectionIntro 
             eyebrow="Technology" 
             headline="Innovation you can see, hear, and feel." 
             subhead="Pushing boundaries from the inside out. Spatial experiences on Apple Vision Pro are only possible through groundbreaking Apple technology." 
             white
          />
          <div className="relative max-w-[1024px] mx-auto mb-20 px-6">
             <img src="https://www.apple.com/v/apple-vision-pro/j/images/overview/technology/displays/hero_base__bpxhq09r962u_large.jpg" className="w-full" alt="Technology Exploded View" />
             <div className="flex flex-col md:flex-row justify-around text-center mt-12 gap-8">
                 <div>
                     <p className="text-4xl font-bold">120Hz</p>
                     <p className="text-sm opacity-70 mt-1">Refresh rates</p>
                 </div>
                 <div>
                     <p className="text-4xl font-bold">M5</p>
                     <p className="text-sm opacity-70 mt-1">Powerful chip</p>
                 </div>
                  <div>
                     <p className="text-4xl font-bold">23M</p>
                     <p className="text-sm opacity-70 mt-1">Pixels</p>
                 </div>
             </div>
          </div>
      </section>
      
      {/* Values */}
      <section className="bg-[#f5f5f7] py-24">
          <SectionIntro 
             eyebrow="Values" 
             headline="Designed to make a difference." 
             subhead="Our values lead the way. Apple Vision Pro was designed to help protect your privacy and keep you in control of your data." 
          />
      </section>

    </div>
  );
};

export default VisionProPage;