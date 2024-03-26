import React from 'react'
import { Images } from '../../../assets/index'
const BrandsTrustUs = () => {
  return (
    <div className="container mx-auto my-10 p-4 ">
      <h1 className="text-center text-4xl md:text-7xl font-bold font-arbutus">
        Brands That Trust Us
      </h1>
      <div className="justify-center flex my-10">
        <div className="h-1 w-64 md:w-96 bg-custom-buttonColor-Green"></div>
      </div>

      {/* Responsive grid layout for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 my-4">
        {[Images.codeBlack, Images.CodeshalaLogo, Images.edu, Images.EXPN, Images.gc_fasion, Images.halen, Images.jag, Images.kidcakes, Images.malgodee, Images.nvlogo, Images.pc, Images.rf, Images.travelkicks].map((image, index) => {
          return (<img src={image} alt="Placeholder" className="pointer-events-none select-none w-full h-32 sm:h-48 object-contain duration-500 hover:scale-110" />)
        })}


      </div>
    </div>
  )
}

export default BrandsTrustUs