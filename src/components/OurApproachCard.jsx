
import React from 'react'

const OurApproachCard = ({key, image, description, name}) => {
  return (
    <div class='h-full w-full bg-custom-greyBorderColor'>
    <div class='flex flex-col sm:flex-row'>
        <div class='w-full sm:w-1/2 h-auto sm:h-1/5'>
            <div class='flex flex-col justify-center p-6 sm:p-16'>
                <h1 class='text-3xl text-black m-6 text-center sm:text-left'>{name}</h1>
                <p class='text-lg text-black m-6 text-justify'>{description}</p>
            </div>
        </div>
        <div class=' sm:w-auto m-6 sm:ml-16 '>
            <img src={image} alt='This is an image' class='rounded-xl border border-solid shadow-xl pointer-events-none select-none' />
        </div>
    </div>
</div>

  )
}

export default OurApproachCard
