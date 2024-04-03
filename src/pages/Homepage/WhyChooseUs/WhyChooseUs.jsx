import React from 'react';
import { Images } from '../../../assets';


const WhyChooseUs = ({ whyUs }) => {
    return (
        <div className='pt-12'>
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:w-3/4 bg-custom-greyLightColor mb-10 px-6 lg:px-0'>
                    <h1 className='text-center text-black text-3xl lg:text-5xl font-bold lg:ml-36 pb-2 mt-10 lg:mt-36 font-serif'>Why To Choose Us</h1>
                    <div className='flex justify-center'>
                    <div className="h-1 w-56 md:w-80 bg-custom-buttonColor-Green mt-6 rounded-full lg:ml-36"></div>
                    </div>
                    <div className='mt-6 lg:pl-36 lg:pr-12 text-black text-md lg:text-lg text-justify'>
                        <p>
                            Choose us for unparalleled cybersecurity solutions tailored to your needs. Our seasoned professionals bring extensive industry experience, ensuring comprehensive services from training to VAPT assessments. With a proven track record of safeguarding clients' digital assets, trust in our tailored approach for maximum protection.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        {whyUs.map((index) => (
                            <div key={index.id} className='my-8 md:m-4 flex justify-center '>
                                <div className='py-2'>
                                    <img src={index.img} className='h-20 w-20 pointer-events-none select-none' alt={`Feature ${index.id + 1}`} />
                                </div>
                                <div className='flex flex-col ml-4  '>
                                    {/* <h1 className='text-lg text-custom-buttonColor-Green '>Feature</h1> */}
                                    <h1 className='text-custom-fontColor-Green font-bold text-xl text-wrap mt-7 md:mt-7  font-serif'>{index.description}</h1>
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
