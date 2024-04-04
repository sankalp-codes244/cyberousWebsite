import React from 'react'
import SideArrow from '../assets/Svgs/SideArrow'
import { Images } from '../assets'

const TrainingPageCard = ({ id, name, desc }) => {
  return (
    <div className='p-4'>
      <div className='w-11/12 h-full md:h-60 bg-custom-bg-violet rounded-xl shadow-xl  py-6'>
        <div className='flex flex-row pt-4 pb-4'>
          <img src={Images.Trainingpageimg} className='w-12 h-12 m-2'/> 
        <h1 className='text-xl md:text-1xl text-white font-__Inter_aaf875 md:pt-6'>
          {name}
        </h1>
        </div>
        <div className='w-full h-1 bg-custom-orange-color mb-2'>
        </div>
        <div className='px-2 font-__Inter_aaf875'>
          {desc.map((item) => (
            [<SideArrow />, item, <br />]
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrainingPageCard