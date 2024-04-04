import React from 'react'

const TrainingPageCard = ({ id, name, desc }) => {
  return (
    
    <div className=' p-4 w-9/12'>
        <div className='bg-custom-bg-violet rounded-xl shadow-xl p-4'>
        <h1 className='text-xl md:text-3xl text-white'>
            {name}
        </h1>
        </div>
    </div>
  )
}

export default TrainingPageCard