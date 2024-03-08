import React from 'react'
import CarouselElement from '../../components/CarouselElement'
import { Images } from '../../assets'
import OurServices from '../OurServices/OurServices'
import About from '../aboutUs/About'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'

const Homepage = () => {
  let imgData = [
    {
      id:1,
      text:'Empowering Organizations With Tailored Security Solutions Through Expert Consultation.',
      Image: Images.carousalImg1,
    },
    {
      id:2,
      text:'Transforming Individuals into Cyber Guardians Through Expert Training',
      Image: Images.carousalImg2,
    },
    {
      id:3,
      text:'Empowering Organizations With Tailored Security Solutions Through Expert Consultation.',
      Image: Images.carousalImg3,
    }
  ]
  return (
    <>
      <div className='h-screen  '>
        <div className=''>

          <CarouselElement getImages={imgData} />
        </div>
      </div>
      <div id="about" className='h-screen bg-white'>
        <About/>
      </div>
      <div id="ourservices" className=' bg-white'>
        <OurServices/>
      </div>
      <div id="chooseus" className='h-screen bg-white'>
        <WhyChooseUs/>
      </div>
    </>
  )
}
export default Homepage;