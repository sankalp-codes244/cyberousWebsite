import React, { useState, useEffect } from 'react';
import { Images } from '../../../assets';

const Methodology = ({ boxData }) => {
    const [selectedBox, setSelectedBox] = useState(() => {
        // Initialize selectedBox state with the value from local storage if available,
        // otherwise default to 0
        return parseInt(localStorage.getItem('selectedBox')) || 0;
    });

    useEffect(() => {
        // Update local storage whenever selectedBox changes
        localStorage.setItem('selectedBox', selectedBox);
    }, [selectedBox]);

    const handleBoxClick = (id) => {
        setSelectedBox(id);
    };

    return (
        <div className='bg-custom-greyBorderColor'>
            <div className='flex flex-row'>
                <div className='flex flex-col w-3/5 '>
                    <h1 className=' text-center mt-20 text-black text-4xl font-bold'>Methodology</h1>
                    <p className='ml-20 mr-20 mt-6 text-lg text-justify'>
                        Embrace a comprehensive penetration testing methodology that not only identifies security vulnerabilities but also tackles intricate business logic vulnerabilities. Our approach incorporates meticulous security checklists in line with industry standards such as OWASP10, SANS25, OSSTMM, and others. At IEMLabs, we provide both on-premises and off-premises application security solutions. Backed by years of experience, our proven roadmap extends across the varied threat landscapes of online platforms, mobile applications, and cloud environments.
                    </p>
                    <div>
                        <div className='flex flex-row ml-20 mt-8 w-2/3 justify-between'>
                            {boxData.map((item, index) => (
                                <button key={item.id} className={`mx-2 mb-2 px-4 py-2 rounded-lg focus:outline-none focus:ring-4 ring-green-300 transition duration-500 focus:bg-green-500 focus:text-white bg-${selectedBox === index ? 'green-500' : 'white'} text-${selectedBox === index ? 'white' : 'green-500'} border border-green-500`} onClick={() => handleBoxClick(index)}>
                                    {item.headingText}
                                </button>
                            ))}
                        </div>
                    </div>
                    {selectedBox !== null && (
                        <div className='text-black text-lg mb-8 ml-20 mr-20 text-justify mt-6 bg-white rounded-lg p-2'>
                            {boxData[selectedBox].paragraphText}
                        </div>
                    )}
                </div>
                <div className='w-2/5 ml-20 mb-20 mt-20'>
                    <img src={Images.methodology1} className='pointer-events-none select-none' alt='Methodology' />
                </div>
            </div>
        </div>
    );
};

export default Methodology;
