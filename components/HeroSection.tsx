import React from 'react';
import { HeroProps } from '../types';

const HeroSection: React.FC<HeroProps> = ({ title, subtitle, ctaLinks, image, video, dark, top }) => {
  const textColor = dark ? 'text-white' : 'text-[#1d1d1f]';

  return (
    <div className="relative w-full h-[580px] md:h-[692px] bg-black overflow-hidden mb-3">
      {/* Background Media */}
      <div className="absolute inset-0 w-full h-full">
        {video ? (
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover"
            src={video}
          />
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}
      </div>

      {/* Content Overlay */}
      <div className={`relative z-10 flex flex-col items-center justify-start ${top ? 'pt-12 md:pt-16' : 'pt-[450px] md:pt-[500px]'} h-full text-center px-4`}>
        <h2 className={`text-3xl md:text-5xl lg:text-[56px] font-semibold tracking-tight mb-2 ${textColor}`}>
          {title}
        </h2>
        <p className={`text-xl md:text-[28px] font-normal mb-4 ${textColor}`}>
          {subtitle}
        </p>
        <div className="flex gap-4 items-center">
          {ctaLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={`
                px-5 py-2 rounded-full text-[17px] font-normal transition-all flex items-center gap-1
                ${link.type === 'primary' 
                  ? 'bg-[#0071e3] text-white hover:bg-[#0077ED]' 
                  : 'bg-transparent text-[#0066cc] border border-[#0066cc] hover:bg-[#0066cc] hover:text-white'
                }
              `}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;