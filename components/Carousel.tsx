import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from './Icons';

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ children, className = "" }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // Tolerance of 2px to account for sub-pixel rendering differences
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [children]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const firstItem = container.firstElementChild as HTMLElement;
      let scrollAmount = container.clientWidth * 0.8; // Default scroll amount

      if (firstItem) {
         const itemWidth = firstItem.offsetWidth;
         const style = window.getComputedStyle(container);
         const gap = parseFloat(style.columnGap) || parseFloat(style.gap) || 0;
         // Scroll by one item + gap for precise alignment
         scrollAmount = itemWidth + gap;
      }

      const left = direction === 'left' ? -scrollAmount : scrollAmount;
      container.scrollBy({ left, behavior: 'smooth' });
      
      // Update arrows state after scrolling animation (approx 500ms)
      setTimeout(checkScroll, 500);
    }
  };

  return (
    <div className="relative group">
      <button 
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#d2d2d7]/80 hover:bg-[#d2d2d7] rounded-full flex items-center justify-center text-black/60 shadow-lg backdrop-blur-sm transition-all duration-300 ml-4 hidden md:flex
            ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-0 group-hover:opacity-100'}
          `}
          aria-label="Previous"
      >
          <span className="w-5 h-5"><ChevronLeft /></span>
      </button>
      
      <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className={`flex overflow-x-auto no-scrollbar snap-x scroll-smooth ${className}`}
      >
          {children}
      </div>

      <button 
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#d2d2d7]/80 hover:bg-[#d2d2d7] rounded-full flex items-center justify-center text-black/60 shadow-lg backdrop-blur-sm transition-all duration-300 mr-4 hidden md:flex
            ${!canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-0 group-hover:opacity-100'}
          `}
          aria-label="Next"
      >
          <span className="w-5 h-5"><ChevronRight /></span>
      </button>
    </div>
  );
};

export default Carousel;