import React from 'react'
import CarouselElement from '../../components/CarouselElement'

export const Homepage = () => {
  let imgData = [
    "https://staticg.sportskeeda.com/editor/2022/02/7b353-16439509782499.png",
    "https://images3.alphacoders.com/666/666312.jpg",
    "https://sm.ign.com/ign_latam/screenshot/default/saitama-debilidad_ve13.jpg",
  
  ]
  return (
    <div className='h-screen  '>
      <div className=''>

      <CarouselElement getImages={imgData} />
      </div>
    </div>
  )
}
