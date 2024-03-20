import React, { useState } from 'react';
import { Images } from '../assets';

const FaqCard = ({ name, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={buttonHandler}>
      <div className='flex justify-center'>
        <div className='bg-white w-full md:w-2/3 rounded-xl m-4 shadow-xl'>
          <div className='flex flex-row justify-between'>
            <h1 className='text-xl font-bold m-6'>{name}</h1>
            <button onClick={buttonHandler}>
              <img src={Images.chevronDown} className={`m-6 mr-8 h-7 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} alt='this is an image' />
            </button>
          </div>
          <div className={`overflow-hidden transition-height ${isOpen ? 'h-auto' : 'h-0'}`}>
            <div className={`${isOpen ? 'opacity-100' : 'opacity-0'} p-6 pt-0 text-justify transition-opacity duration-500`}>
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
