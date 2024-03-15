import React from 'react';

const EvCard = ({ image, heading, paragraph }) => {
  return (
    <div className='flex justify-center border border-solid border-l-custom-greyBorderColor p-4'>
      <div className='h-auto w-full'>
        <div className='flex justify-center'>
          <img src={image} className='h-32 sm:h-48 md:h-64 lg:h-72 xl:h-80 pointer-events-none select-none' alt="Card" />
        </div>
        <h1 className='flex text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black pt-4 sm:pt-6 pl-2 sm:pl-6'>
          {heading}
        </h1>
        <p className='mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-custom-fontColor-grey mr-4 sm:mr-10 text-justify p-2 sm:p-6 pt-2 sm:pt-4'>
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default EvCard;
