import React from 'react';

const OurApproachCard = ({ key, image, description, name }) => {
  return (
    <div className='h-full w-full bg-custom-greyBorderColor'>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 h-auto'>
          <div className='flex flex-col p-6 md:p-16'>
            <h1 className='text-xl md:text-3xl text-black m-2 md:m-6'>{name}</h1>
            <p className='text-sm md:text-lg text-black m-2 md:m-6 text-justify'>{description}</p>
          </div>
        </div>
        <div className='m-4 md:m-6 mt-6 md:mt-0 flex justify-center'>
          <img src={image} alt='Approach Image' className='w-48 md:w-auto h-auto' />
        </div>
      </div>
    </div>
  );
};

export default OurApproachCard;
