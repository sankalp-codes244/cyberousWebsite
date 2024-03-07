import React from 'react'
import CarouselElement from '../../components/CarouselElement'
import { Images } from '../../assets'
import OurServices from '../OurServices'
import About from '../aboutUs/About'

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
      <div>
        <OurServices/>
      </div>
    </>
  )
}
export default Homepage;