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
      images: [Images.EXPN, Images.EXPN, Images.CodeshalaLogo] // Replace with actual image URLs
    },
    {
      id: 1,
      name: "Navy",
      description: "Description for Event 1",
      images: [Images.EXPN, Images.EXPN, Images.CodeshalaLogo] // Replace with actual image URLs
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
    <div className="container mx-auto px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold my-10">
        Hosted Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-4 shadow-md cursor-pointer" onClick={() => openModal(event.id)}>
            <div className="flex justify-center mb-4">
              {event.images.slice(0, 3).map((image, index) => (
                <img key={index} src={image} alt={`Event ${event.id} Image ${index + 1}`} className="w-16 h-16 object-cover mx-1 rounded-md" />
              ))}
            </div>
            <h3 className="text-lg font-bold text-center">{event.name}</h3>
            <p className="text-sm text-gray-500 text-center">{event.description}</p>
          </div>
        ))}
      </div>
      
      {selectedEvent && (
        <CarouselModal event={selectedEvent} onClose={closeModal} />
      )}
    </div>
  );
};

export default MediaGallery;
