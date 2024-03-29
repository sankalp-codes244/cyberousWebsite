import React, { useState } from 'react';
import { Images } from '../../../assets/index';
import CarouselModal from './CarouselModal'; // Import your CarouselModal component

const MediaGallery = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Dummy data for the gallery events
  const events = [
    {
      id: 1,
      name: "Manipal",
      description: "Description for Event 1",
      images: [Images.eventimg1, Images.eventimg2, Images.eventimg3] // Replace with actual image URLs
    },
    {
      id: 1,
      name: "Navy",
      description: "Description for Event 1",
      images: [Images.eventimg4, Images.eventimg5, Images.eventimg6] // Replace with actual image URLs
    },
    // The rest of your events...
  ];

  const openModal = (eventId) => {
    const event = events.find(e => e.id === eventId);
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="h-full w-full mx-auto px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold my-10">
        Hosted Events
        <div className='flex justify-center'>
          <div className='h-1 w-40 md:w-56 bg-custom-buttonColor-GreenDark my-6'></div>
        </div>
      </h2>
      <div className='flex justify-center  '>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-4 w-full h-full">
          {events.map((event) => (
            <div key={event.id} className="bg-white p-4 shadow-xl border border-solid border-custom-greyBorderColor cursor-pointer w-full h-full" onClick={() => openModal(event.id)}>
              <div className="flex justify-center mb-4">
                {event.images.slice(0, 3).map((image, index) => (
                  <img key={index} src={image} alt={`Event ${event.id} Image ${index + 1}`} className="mx-5 pointer-events-none select-none w-1/4 h-1/4 object-cover rounded-md" />
                ))}
              </div>
              <h3 className="text-lg font-bold text-center">{event.name}</h3>
              <p className="text-sm text-gray-500 text-center">{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <CarouselModal event={selectedEvent} onClose={closeModal} />
      )}
    </div>
  );
};

export default MediaGallery;
