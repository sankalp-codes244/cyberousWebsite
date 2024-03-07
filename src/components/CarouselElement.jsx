import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'react-feather';

const CarouselElement = ({ getImages }) => {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Total number of images
  const totalImages = getImages?.length;

  // Function to go to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  // Function to go to the previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext(); // Change to the next image every 3 seconds
    }, 3000); // Set the interval to 3 seconds

    return () => clearInterval(timer); // Clear interval on component unmount
  }, [currentIndex, totalImages]); // Depend on currentIndex and totalImages to reset timer if these values change

  return (
    <>
      <div className="w-full h-screen overflow-hidden relative">
        <div className="flex transition-transform ease-out duration-1000" style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
          {getImages.map((item, index) => (
            <>
            {/* <div key={index} className='absolute bottom-0 left-1/2 top-1/2 '>
              {item.text}
            </div> */}
            <img key={index} className="w-full h-screen flex-shrink-0" src={item.Image} alt={`carousel-${index}`} />
            </>

          ))}
        </div>
        
        <button onClick={goToPrevious} className="absolute top-1/2 left-10 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10">
          <ChevronLeft size={40} />
        </button>
        <button onClick={goToNext} className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10">
          <ChevronRight size={40} />
        </button>
        <div className='bottom-8 absolute flex left-1/2 '>
        {getImages.map((img, index) => (
          <div key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 bg-white mx-1 rounded-full cursor-pointer ${index === currentIndex ? 'bg-opacity-100' : 'bg-opacity-50'}`}></div>
        ))} 
      </div>
        
      </div>
      
    </>
  );
};

export default CarouselElement;
