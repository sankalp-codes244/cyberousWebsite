import React, { useEffect,useState } from 'react';

const CarouselModal = ({ event, onClose }) => {
  if (!event) return null;
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Add event listener
    window.addEventListener('keydown', handleKeyDown);

    // Remove event listener on cleanup
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]); // Ensure effect runs only once or when onClose changes
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Resets the carousel to the first image when the event changes
    setCurrentImageIndex(0);
  }, [event]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === event.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? event.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">

<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="relative bg-white p-5 rounded-lg flex flex-col items-center">
        {event.images?.length > 0 && (
          <img src={event.images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} className="w-full h-auto max-h-[80vh] object-cover" />
        )}
        <div className="flex justify-between items-center w-full mt-4">
          <button onClick={prevImage} className="text-black mr-2">
            {/* Left arrow */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
  onClick={onClose} 
  className="absolute top-0 right-0 m-2 bg-gray-100 p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-600">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
          <button onClick={nextImage} className="text-black ml-2">
            {/* Right arrow */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CarouselModal;
