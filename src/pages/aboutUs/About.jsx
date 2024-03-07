import React from 'react'
import { Images } from '../../assets'

const About = () => {
  return (
    <div className='pt-8 flex flex-row w-full h-full mb-10'>
      <div className='w-1/2'>
        <img src={Images.aboutImages} alt='This is image'
        />
      </div>
      <div className='w-1/2 p-20 bg-custom-greyLightColor mb-8'>
        <h1 className='text-5xl text-black font-bold'>About Us</h1>
        <div className="h-1 w-56 bg-custom-buttonColor-Green mt-6 rounded-full">
        </div>
        <div className=''>
          <p className='text-xl mr-12 mt-6 text-custom-fontColor-grey'>Welcome to Cyberous, your premier cyber security partner. Specializing in ethical hacking training, VAPT services covering web, network, mobile, and cloud platforms, as well as red teaming and consultancy solutions. Founded in 2020 by Mr. Yogesh Saini, renowned for training over 10,000 students globally and 2,500+ corporate employees. Recognized as a Top 10 CEO in Jaipur, Rajasthan, Cyberous is committed to empowering individuals and organizations while ensuring a secure digital future. Join us in safeguarding your digital assets today.</p>
        </div>
        <div className='mt-20 flex flex-row'>
          <img src={Images.aboutimg1} alt='Image of something' />
          {/* <h1 className='text-black text-xl ml-10'>0</h1> */}
          <h1 className='ml-10 mt-10 text-custom-buttonColor-Green text-lg'>1000+ Projects</h1>
          <img src={Images.aboutimg2} className='ml-20' />

          {/* <h1 className='text-black text-3xl font-bold ml-10'>1234</h1> */}
          <h1 className='mt-10 ml-10 text-custom-buttonColor-Green text-lg'>50+</h1>
        </div>
        <div className=''>
          <button className='h-16 w-60 bg-custom-buttonColor-Green mt-12 rounded-full text-white text-xl'>
            Explore More
          </button>
        </div>
      </div>
    </div>
  )
}

export default About