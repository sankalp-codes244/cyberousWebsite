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
                        Our methodology encompasses an initial Automated Tool-Based Analysis, swiftly identifying common vulnerabilities and setting the foundation for further assessment. We then conduct a meticulous Manual Tool-Based Examination led by our experts, ensuring a nuanced review of code structures and security controls. The process culminates in a holistic Vulnerability Assessment, delving deep into the codebase to identify advanced vulnerabilities and provide actionable insights for robust security fortification. Elevate your application's security with our comprehensive Source Code Review process today!
                    </p>
                    <div className='flex flex-wrap justify-center mx-6 lg:mx-20 mt-6'>
                        {boxData.map((item, index) => (
                            <button key={item.id} className={`mx-2 mb-2 px-4 py-2 rounded-lg focus:outline-none focus:ring-4 ring-green-300 transition duration-500 focus:bg-green-500 focus:text-white bg-${selectedBox === index ? 'green-500' : 'white'} text-${selectedBox === index ? 'white' : 'green-500'} border border-green-500`} onClick={() => handleBoxClick(index)}>
                                {item.headingText}
                            </button>
                        ))}
                    </div>
                    {selectedBox !== null && boxData[selectedBox] && (
                        <div className='text-black text-lg mb-8 mx-6 lg:mx-20 mt-6 lg:mt-8 bg-white rounded-lg p-2'>
                            {boxData[selectedBox].paragraphText}
                        </div>
                    )}
                </div>
                <div className='lg:w-2/5 mt-10 lg:mt-20 lg:ml-20 mb-10 lg:mb-20'>
                    <img src={Images.NetworkMethimg2} className='pointer-events-none select-none' alt='Methodology' />
                </div>
            </div>
        </div>

    );
};

export default Methodology;
