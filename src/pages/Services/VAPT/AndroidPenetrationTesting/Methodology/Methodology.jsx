import React, { useState, useEffect } from 'react';
import { Images } from '../../../../../assets';

const Methodology = ({ boxData }) => {
    const [selectedBox, setSelectedBox] = useState(() => {
        return parseInt(localStorage.getItem('selectedBox')) || 0;
    });

    useEffect(() => {
        localStorage.setItem('selectedBox', selectedBox);
    }, [selectedBox]);

    const handleBoxClick = (id) => {
        setSelectedBox(id);
    };

    return (
        <div className='bg-custom-greyBorderColor'>
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:w-3/5'>
                    <h1 className='text-center mt-10 lg:mt-20 text-4xl lg:text-5xl font-bold'>Methodology</h1>
                    <div className='flex justify-center'>
                        <div className="h-1 w-32 lg:w-48 mt-4 mb-6 lg:mb-8 bg-custom-buttonColor-Green rounded-full"></div>
                    </div>
                    <p className=' mx-6 lg:mx-20 mt-2 lg:mt-6 text-lg lg:text-xl text-justify'>
                    Unlock Advanced Security Solutions with Our Comprehensive Penetration Testing Methodology. Discover and Address Business Logic Vulnerabilities with Cyberous. Our Approach Aligns with Industry Standards Including OWASP10, SANS25, and OSSTMM. Experience Both On-Premises and Off-Premises Application Security Solutions Tailored to Your Needs. Trust Our Years of Expertise in Safeguarding Online Platforms, Mobile Apps, and Cloud Environments.

                    </p>
                    <div className='flex flex-wrap justify-center mx-6 lg:mx-20 mt-6'>
                        {boxData.map((item, index) => (
                            <button key={item.id} className={`mx-2 mb-2 px-4 py-2 rounded-lg focus:outline-none focus:ring-4 ring-green-300 transition duration-500 focus:bg-green-500 focus:text-white bg-${selectedBox === index ? 'green-500' : 'white'} text-${selectedBox === index ? 'white' : 'green-500'} border border-green-500`} onClick={() => handleBoxClick(index)}>
                                {item.headingText}
                            </button>
                        ))}
                    </div>
                    {selectedBox !== null && (
                        <div className='border border-solid border-black text-black text-lg mb-8 mx-6 lg:mx-20 mt-6 lg:mt-8 bg-white rounded-lg p-2'>
                            {boxData[selectedBox].paragraphText}
                        </div>
                    )}
                </div>
                <div className='lg:w-2/5 mt-10 lg:mt-20 lg:ml-20 mb-10 lg:mb-20'>
                    <img src={Images.AndroidMethimg1} className='pointer-events-none select-none' alt='Methodology' />
                </div>
            </div>
        </div>

    );
};

export default Methodology;
