import React from 'react';
import { PromoProps } from '../types';
import { ChevronRight } from './Icons';

const PromoCard: React.FC<PromoProps> = ({ title, subtitle, subtitle2, ctaLinks, image, dark, logo }) => {
  const textColor = dark ? 'text-white' : 'text-[#1d1d1f]';

  return (
    <div className="relative w-full h-[500px] md:h-[580px] bg-black overflow-hidden group">
       <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        
        <div className="absolute inset-0 flex flex-col items-center pt-10 md:pt-14 px-6 text-center">
            {logo ? (
                 <div className="h-8 md:h-10 mb-2 font-semibold text-2xl" style={{color: dark ? '#fff' : '#000'}}>
                    {/* Using simple text for logos to avoid external SVG dependencies complexity */}
                    {title} 
                 </div>
            ) : (
                <h3 className={`text-3xl md:text-4xl font-semibold mb-1 ${textColor}`}>{title}</h3>
            )}
            
            <p className={`text-lg md:text-xl font-normal mb-1 ${textColor}`}>{subtitle}</p>
            {subtitle2 && <p className={`text-gray-500 text-sm md:text-base font-normal mb-2`}>{subtitle2}</p>}
            
            <div className="flex gap-4 mt-3">
                 {ctaLinks.map((link, index) => (
                    <a
                    key={index}
                    href={link.url}
                    className={`
                        px-4 py-2 rounded-full text-sm md:text-[17px] font-normal transition-all
                        ${link.type === 'primary' 
                        ? 'bg-[#0071e3] text-white hover:bg-[#0077ED]' 
                        : 'text-[#0066cc] hover:underline flex items-center gap-1'
                        }
                    `}
                    >
                    {link.text} {link.type === 'secondary' && <ChevronRight />}
                    </a>
                ))}
            </div>
        </div>
    </div>
  );
};

interface PromoGridProps {
  promos: PromoProps[];
}

const PromoGrid: React.FC<PromoGridProps> = ({ promos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 pt-0">
      {promos.map((promo) => (
        <PromoCard key={promo.id} {...promo} />
      ))}
    </div>
  );
};

export default PromoGrid;