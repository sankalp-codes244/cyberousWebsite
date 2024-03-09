import React from 'react'
import { Images } from '../../../assets/index'
const BrandsTrustUs = () => {
  return (
    <div className="container mx-auto px-4">
    <h2 className="text-center text-3xl md:text-4xl font-bold my-10">
      Brands that trust us
    </h2>


    {/* Responsive grid layout for cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 my-4">
      { [Images.codeBlack, Images.CodeshalaLogo, Images.edu, Images.EXPN, Images.gc_fasion, Images.halen, Images.jag, Images.kidcakes, Images.malgodee, Images.nvlogo, Images.pc, Images.rf, Images.travelkicks].map((image, index) => {
        return (<img src={image} alt="Placeholder" className="w-full h-32 sm:h-48 object-contain duration-500 hover:scale-110" />)
       })}
       
        
    </div>
  </div>
  )
}

export default BrandsTrustUs