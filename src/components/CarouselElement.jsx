import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'react-feather';

const CarouselElement = ({ getImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = getImages?.length;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 3000);
    return () => clearInterval(timer);
  }, [currentIndex, totalImages]);

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-1000" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {getImages.map((item, index) => (
          <div key={index} className="w-full h-screen flex-shrink-0 relative">
            <img className="pointer-events-none select-none w-full h-screen object-cover" src={item.Image} alt={`carousel-${index}`} />
            <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
              <p className="text-white font-bold text-center mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-20 text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={goToPrevious} className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10">
        <ChevronLeft size={40} />
      </button>
      <button onClick={goToNext} className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10">
        <ChevronRight size={40} />
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex">
        {getImages.map((_, index) => (
          <div key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 bg-white mx-1 rounded-full cursor-pointer ${index === currentIndex ? 'bg-opacity-100' : 'bg-opacity-50'}`}></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselElement;
