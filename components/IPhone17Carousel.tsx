
import React from 'react';
import Carousel from './Carousel';

const iphoneModels = [
  {
    id: 'iphone-17-pro',
    title: 'iPhone 17 Pro',
    sub: 'Apple Intelligence',
    price: 'Từ 34.999.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-holiday-iphone-17-pro-202511?wid=960&hei=1000&fmt=jpeg&qlt=90',
    dark: false
  },
  {
    id: 'iphone-17-pro-max',
    title: 'iPhone 17 Pro Max',
    sub: 'Apple Intelligence',
    price: 'Từ 37.999.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-holiday-iphone-17-pro-202511?wid=960&hei=1000&fmt=jpeg&qlt=90',
    dark: false
  },
  {
    id: 'iphone-17',
    title: 'iPhone 17',
    sub: 'Apple Intelligence',
    price: 'Từ 24.999.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-holiday-iphone-17-202511?wid=960&hei=1000&fmt=jpeg&qlt=90',
    dark: false
  },
  {
    id: 'iphone-air',
    title: 'iPhone Air',
    sub: 'Apple Intelligence',
    price: 'Từ 31.999.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-holiday-iphone-air-202511?wid=960&hei=1000&fmt=jpeg&qlt=90',
    dark: false
  }
];

const IPhoneCard = ({ item }: { item: typeof iphoneModels[0] }) => (
    <div className={`
      flex-none w-[310px] md:w-[400px] h-[500px]
      rounded-[18px] overflow-hidden snap-center relative group cursor-pointer shadow-sm hover:shadow-md transition-all
      bg-white text-[#1d1d1f]
    `}>
      <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 p-8 flex flex-col items-start z-10">
        <h3 className="font-semibold leading-tight text-[28px] md:text-[32px] text-[#1d1d1f]">
            {item.title}
        </h3>
        {item.sub && <p className="mt-2 text-[17px] opacity-90">{item.sub}</p>}
        <div className="mt-auto pt-4 text-[14px] md:text-[17px] font-medium">{item.price}</div>
      </div>
    </div>
);

const IPhone17Carousel: React.FC = () => {
  return (
    <div className="bg-[#f5f5f7] py-16 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4">
            <div className="flex justify-start md:justify-center mb-8 px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d1f]">Thế hệ iPhone 17 mới.</h2>
            </div>
            <Carousel className="gap-5 px-4 md:px-12 md:justify-center pb-8">
                {iphoneModels.map((item) => (
                    <IPhoneCard key={item.id} item={item} />
                ))}
            </Carousel>
        </div>
    </div>
  );
};

export default IPhone17Carousel;
