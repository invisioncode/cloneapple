
export const ProductCard = ({ 
  title, 
  chip, 
  desc, 
  price,
  image, 
  isNew,
  badge,
  colors
}: { 
  title: string; 
  chip?: string; 
  desc: string; 
  price?: string;
  image: string; 
  isNew?: boolean;
  badge?: string;
  colors?: string[];
}) => (
  <div className="flex-none w-[280px] md:w-[360px] snap-center flex flex-col items-center text-center group p-4">
    <div className="w-full aspect-[1.3] mb-6 flex items-end justify-center">
        <img src={image} alt={title} className="max-w-full max-h-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="flex flex-col gap-2 items-center">
        {isNew && <span className="text-[#bf4800] text-[12px] font-medium">Mới</span>}
        {badge && <span className="text-[#bf4800] text-[12px] font-medium">{badge}</span>}
        <h3 className="text-[21px] md:text-[24px] font-semibold text-[#1d1d1f] leading-tight">{title}</h3>
        {chip && <span className="text-[14px] md:text-[15px] font-medium text-[#1d1d1f]">{chip}</span>}
        
        {colors && (
            <div className="flex gap-1.5 my-1">
                {colors.map((c, i) => (
                    <div key={i} className="w-3 h-3 rounded-full shadow-sm border border-black/20" style={{backgroundColor: c}}></div>
                ))}
            </div>
        )}

        <p className="text-[14px] leading-relaxed text-[#1d1d1f] mt-1 max-w-[280px]">{desc}</p>
        
        {price && <p className="text-[14px] font-medium text-[#1d1d1f] mt-1">{price}</p>}

        <div className="flex gap-3 mt-3 justify-center">
            <a href="#" className="text-white bg-[#0071e3] hover:bg-[#0077ED] px-4 py-1.5 rounded-full text-[14px] font-medium">Tìm hiểu thêm</a>
            <button className="bg-white text-[#0071e3] border border-[#0071e3] hover:bg-[#0071e3] hover:text-white px-4 py-1.5 rounded-full text-[14px] font-medium transition-colors">
                Add to Cart
            </button>
        </div>
    </div>
  </div>
);

export const FeatureCard = ({ 
    label, 
    headline, 
    subhead,
    image,
    dark = false,
    large = false
}: { 
    label: string; 
    headline: string; 
    subhead?: string;
    image: string;
    dark?: boolean; 
    large?: boolean;
}) => (
    <div className={`relative flex-none rounded-[24px] overflow-hidden snap-center group cursor-pointer transition-shadow hover:shadow-md
      ${large ? 'w-[310px] md:w-[480px] h-[500px] md:h-[600px]' : 'w-[280px] md:w-[310px] h-[450px] md:h-[500px]'}
      ${dark ? 'bg-black text-white' : 'bg-white text-[#1d1d1f]'}
      border border-gray-200/50 shadow-sm
    `}>
        <div className="absolute inset-0 z-0">
             <img src={image} alt={label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
        </div>
        <div className={`relative z-10 p-6 md:p-8 flex flex-col h-full justify-start items-start text-left ${dark ? 'bg-gradient-to-b from-black/60 via-black/20 to-transparent' : ''}`}>
             <span className="text-[12px] font-semibold mb-2 opacity-90 uppercase tracking-wider">{label}</span>
             <h3 className={`font-semibold leading-tight ${large ? 'text-[28px] md:text-[32px]' : 'text-[24px]'}`}>
                <span dangerouslySetInnerHTML={{ __html: headline }} />
             </h3>
             {subhead && <p className="mt-2 text-[17px] opacity-90">{subhead}</p>}
        </div>
        {/* Plus icon overlay for interaction hint */}
        <div className={`absolute bottom-6 right-6 z-10 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md ${dark ? 'bg-white/20 text-white' : 'bg-black/10 text-black'}`}>
            <span className="text-xl font-light">+</span>
        </div>
    </div>
);

export const InfoCard = ({ icon, title, desc }: { icon: string, title: string, desc: string }) => (
    <div className="flex-none w-[280px] md:w-[320px] p-6 md:p-8 rounded-[24px] bg-white shadow-sm border border-gray-100 snap-center flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300">
        <img src={icon} className="w-10 h-10 object-contain self-start" alt="" />
        <div>
            <h3 className="text-[20px] md:text-[24px] font-semibold text-[#1d1d1f] mb-2">{title}</h3>
            <p className="text-[14px] md:text-[15px] text-[#1d1d1f] leading-relaxed">{desc}</p>
        </div>
        <div className="mt-auto pt-2">
            <button className="w-8 h-8 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center">
                <span className="text-xl pb-1">+</span>
            </button>
        </div>
    </div>
);
