
import React from 'react'

const OurApproachCard = ({key, image, description, name}) => {
  return (
    <div class='h-full w-full bg-custom-greyBorderColor'>
    <div class='flex flex-col md:flex-row'>
        <div class='w-full md:w-1/2 h-auto md:h-1/5'>
            <div class='flex flex-col justify-center p-6 md:p-16'>
                <h1 class='text-3xl text-black m-6 text-center md:text-left'>{name}</h1>
                <p class='text-lg text-black m-6 text-center md:text-justify'>{description}</p>
            </div>
        </div>
        <div class=' md:w-auto m-6 md:ml-16 '>
            <img src={image} alt='This is an image' class='pointer-events-none select-none' />
        </div>
    </div>
</div>

  )
}

export default OurApproachCard
