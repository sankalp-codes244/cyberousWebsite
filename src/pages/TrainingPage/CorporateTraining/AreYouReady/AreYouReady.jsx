import React from 'react'
import { Images } from '../../../../assets'
import { Link } from 'react-router-dom'

const AreYouReady = () => {
    const handleDownload = () => {
        // Create a link element
        const link = document.createElement('a');
        // Set the href attribute to the file path
        link.href = '/CorporateTraining.pdf'; // Assuming the file is in the public directory
        // Set the download attribute to give the file a name
        link.download = 'CorporateTraining.pdf';
        // Append the link to the body
        document.body.appendChild(link);
        // Trigger a click event to download the file
        link.click();
        // Clean up: remove the link from the body
        document.body.removeChild(link);
      };
    return (
        <div className='text-center bg-no-repeat bg-cover bg-center h-screen object-cover p-10' style={{ backgroundImage: `url(${Images.CorporateTrainingbg3})`, }}>
            <div className='flex justify-center'>
                <div className='md:w-1/2 py-20'>
                    <h1 className='font-__Inter_aaf875 font-bold text-xl md:text-2xl text-white'>Let's get started with Cyberous</h1>
                    <h1 className='font-__Inter_aaf875 font-bold text-3xl md:text-5xl text-white py-10'>Are you ready for a better, safer, more productive, stressfree business?</h1>
                    <p className='font-__Inter_aaf875 text-lg md:text-xl text-white py-10'>
                    Stop worrying about Cyber Security problems. Focus on your business. Let us provide the best Cyber Security Services you deserve. Let’s Discuss about your Cyber Security Risks & Requirements.
                    </p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <Link to='/contact'>
                    <button className='bg-custom-gold-color p-3 rounded-md w-full lg:w-3/4 text-xl text-white font-bold font-__Inter_aaf875 hover:bg-yellow-600 shadow-lg'>
                        Contact Us Now
                    </button>
                    </Link>
                    <button onClick={handleDownload} className='flex items-center justify-center bg-custom-gold-color  rounded-md w-full text-xl text-white font-bold font-__Inter_aaf875 hover:bg-yellow-600 shadow-lg lg:w-3/4 p-3'><img src={Images.downloadicon} className='w-6 invert mx-5' /> 

                        <p>View Modules</p>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AreYouReady