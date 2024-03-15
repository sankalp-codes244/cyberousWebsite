import React from 'react';
import { Images } from '../../../assets';
import FaqCard from '../../../components/FaqCard';

const Faqs = ({ faqData }) => {
  return (
    <div className='bg-custom-greyBorderColor'>
      <div className='flex justify-center'>
        <h1 className='text-4xl font-bold m-6'>Frequently Asked Questions</h1>
      </div>
      <div className='flex justify-center'>
        <div className='w-full md:w-2/3'>
          {faqData.map((item) => (
            <FaqCard
              key={item.id}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
