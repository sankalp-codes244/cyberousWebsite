import React from 'react'
import { Images } from '../../../../assets'

const PageHeader = () => {
  return (
    <div className='text-center bg-no-repeat bg-cover bg-center h-screen object-cover' style={{ backgroundImage: `url(${Images.RedteamingHeader})`, }}>
        <div className='p-10 md:p-40'>
          <div className='bg-orange-500  md:w-2/3 '>
            <h1 className='text-4xl md:text-8xl mr-6 md:mr-0 font-holtwood py-6 pl-4 text-left'>
              Red Team Services
            </h1>
            <p className='text-2xl text-start p-4 pb-20 font-stylish md:p-6 md:pb-32 md:text-justify'>
            Experience a revolution in red teaming with our innovative approach, extending beyond the constraints of traditional consultancy exercises. Our method ensures constant threat detection and highly effective deflection strategies, offering unparalleled security solutions.
            </p>
          </div>
        </div>
      </div>
  )
}

export default PageHeader