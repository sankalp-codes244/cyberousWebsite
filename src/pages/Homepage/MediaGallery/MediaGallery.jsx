import React, { useState } from 'react';
import { Images } from '../../../assets/index';
import CarouselModal from './CarouselModal'; // Import your CarouselModal component

const MediaGallery = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Dummy data for the gallery events
  const events = [
    {
      id: 1,
      name: "Manipal University",
      description: "Description for Event 1",
      images: [Images.ManipalImg1, Images.ManipalImg2, Images.ManipalImg3, Images.ManipalImg4] // Replace with actual image URLs
    },
    {
      id: 2,
      name: "Navy",
      description: "Description for Event 2",
      images: [Images.NavyImg1, Images.NavyImg2, Images.NavyImg3, Images.NavyImg4,] // Replace with actual image URLs
    },
    {
      id: 3,
      name: "Mody University",
      description: "Description for Event 3",
      images: [Images.ModiImg1, Images.ModiImg2, Images.ModiImg3, Images.ModiImg4,] // Replace with actual image URLs
    },
    {
      id: 4,
      name: "Amity University",
      description: "Description for Event 4",
      images: [Images.AmityImg1, Images.AmityImg2, Images.AmityImg3, Images.AmityImg4, ] // Replace with actual image URLs
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
      <h2 className="text-center text-3xl md:text-4xl font-bold my-10 font-serif">
        Hosted Events
        <div className='flex justify-center'>
          <div className='h-1 w-40 md:w-56 bg-custom-buttonColor-Green my-6'></div>
        </div>
      </h2>
      <div className='flex justify-center '>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-4 w-full h-full">
          {events.map((event) => (
            <div key={event.id} className="bg-white p-4 shadow-xl border border-solid border-custom-greyBorderColor cursor-pointer w-full h-full" onClick={() => openModal(event.id)}>
              <div className="grid grid-cols-2 grid-flow-row items-center justify-items-center flex-row gap-4  mb-4">
                {event.images.slice(0, 4).map((image, index) => (
                  <img key={index} src={image} alt={`Event ${event.id} Image ${index + 1}`} className="mx-2 pointer-events-none select-none w-52 max-h-28 min-h-28 lg:w-96 lg:min-h-52  lg:max-h-52 object-cover rounded-md" />
                ))}
              </div>
              <h3 className="text-3xl font-__Inter_aaf875 font-bold text-center py-3">{event.name}</h3>

              {/* <p className="text-sm text-gray-500 text-center">{event.description}</p> */}
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
