import React from 'react'
import { Images } from '../../../assets/index'
const Testemonial = () => {
  return (
    <div className="container mx-auto px-4">
      <div className='items-center justify-center flex-col self-center justify-items-center'>
        <h2 className="text-center text-3xl md:text-4xl font-bold my-10">
        Testimonial
        </h2>
      </div>


    {/* Responsive grid layout for cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
      { [Images.codeBlack, Images.CodeshalaLogo, Images.edu].map((image, index) => {
        return (
            <div className="flex justify-center">
            <div className="w-1/2">
                <img src={Images.indrec1} alt="Placeholder" className="pointer-events-none select-none w-full h-32 sm:h-48 object-contain duration-500 hover:scale-110" />
                <p className="text-center text-xl font-sans text-justify">"Cyberous is a great place to learn and grow. The trainers are very knowledgeable and supportive. I would recommend Cyberous to anyone who wants to learn about Cyber Security."</p>
                <p className="text-right text-xl font-bold my-4"> - John Doe</p>
                </div>
    
        </div>
        )
       })}
       


    </div>
  </div>
  )
}

export default Testemonial