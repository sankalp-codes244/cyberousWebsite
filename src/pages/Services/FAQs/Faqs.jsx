import React, { useState } from 'react'
import { Images } from '../../../assets'
import FaqCard from '../../../components/FaqCard'
// import { Description } from '@headlessui/react/dist/components/description/description';

const Faqs = ({faqData}) => {
   
    return (
        <div className='bg-custom-greyBorderColor'>
            <div className='flex justify-center'>
                <h1 className='text-4xl font-bold m-6'>Frequently Asked Questions</h1>
            </div>
            <div>
                {faqData.map((item) => (
                <FaqCard 
                key={item.id}
                name={item.name}
                description={item.description}
                />
                ))}
            </div>
        </div>
    )
}

export default Faqs