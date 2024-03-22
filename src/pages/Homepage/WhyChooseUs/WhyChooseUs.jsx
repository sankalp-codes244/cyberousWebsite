import React from 'react';
import { Images } from '../../../assets';


const WhyChooseUs = ({ whyUs }) => {
    return (
        <div className='pt-12'>
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:w-3/4 bg-custom-greyLightColor mb-10 px-6 lg:px-0'>
                    <h1 className='text-black text-4xl lg:text-5xl font-bold lg:ml-36 pb-4 mt-10 lg:mt-36 font-serif'>Why To Choose Us</h1>
                    <div className="h-1 w-56 bg-custom-buttonColor-Green mt-6 rounded-full lg:ml-36"></div>
                    <div className='mt-6 lg:pl-36 lg:pr-12 text-custom-fontColor-grey text-md lg:text-lg text-justify'>
                        <p>
                            Choose us for unparalleled cybersecurity solutions tailored to your needs. Our seasoned professionals bring extensive industry experience, ensuring comprehensive services from training to VAPT assessments. With a proven track record of safeguarding clients' digital assets, trust in our tailored approach for maximum protection.
                        </p>
                    </div>
                    <div className='flex flex-wrap justify-center lg:justify-start lg:ml-36 mt-10 lg:mt-16 mb-8'>
                        {whyUs.map((index) => (
                            <div key={index.id} className='flex flex-row items-center my-4 lg:my-0 lg:mr-10 pt-6'>
                                <div className=' rounded-full p-2'>
                                    <img src={index.img} className='h-16 w-16 pointer-events-none select-none' alt={`Feature ${index.id + 1}`} />
                                </div>
                                <div className='flex flex-col ml-4'>
                                    {/* <h1 className='text-lg text-custom-buttonColor-Green '>Feature</h1> */}
                                    <h1 className='text-black font-bold text-xl ml-0 mt-2 font-serif'>{index.description}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='lg:w-1/2 flex justify-center lg:justify-end'>
                    <img src={Images.whychooseus1} className='pointer-events-none select-none max-w-full h-auto mb-10' alt="Why Choose Us" />
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUs;
