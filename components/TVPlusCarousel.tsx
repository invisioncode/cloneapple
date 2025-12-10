import React from 'react';
import { TVShow } from '../types';

const shows: TVShow[] = [
  {
    id: '1',
    title: 'Kế Hoạch Bảo Vệ Gia Đình 2',
    genre: 'Hài',
    description: 'Gia đình vẫn vậy. Kế hoạch thì mới toanh.',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/G-607wKexfM07KiP8OOjOg/1250x703.jpg'
  },
  {
    id: '2',
    title: 'Kẻ Lạc Loài',
    genre: 'Tâm lý',
    description: 'Hạnh phúc chỉ là một trạng thái của tâm trí.',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/_VJpc3bpe8DaZ7yMWZZadg/1250x703.jpg'
  },
  {
    id: '3',
    title: 'Đường Về Cõi Chết',
    genre: 'Giật gân',
    description: 'Tò mò sẽ rước họa vào thân.',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/zbds51eIdIGcQezW3ah3gA/1250x703.jpg'
  },
   {
    id: '4',
    title: 'Biên Giới Cuối Cùng',
    genre: 'Hành động',
    description: 'Alaska mênh mông vô tận. Không một nơi ẩn náu.',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/vubQXype6pNn2dknTQYAOw/1250x703.jpg'
  }
];

const TVPlusCarousel: React.FC = () => {
  return (
    <div className="bg-[#f5f5f7] py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex justify-center mb-8">
            <h2 className="text-3xl font-bold">Apple TV+</h2>
        </div>
        
        {/* Carousel Container */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x px-4 md:justify-center">
          {shows.map((show) => (
            <div 
              key={show.id} 
              className="flex-none w-[300px] md:w-[400px] snap-center group cursor-pointer"
            >
              <div className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img src={show.image} alt={show.title} className="w-full h-full object-cover aspect-video" />
              </div>
              <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full">Xem ngay</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TVPlusCarousel;