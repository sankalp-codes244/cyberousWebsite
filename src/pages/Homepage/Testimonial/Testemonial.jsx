import React from 'react'
import { Images } from '../../../assets/index'
const Testemonial = () => {
  let data = [
    {
      id: 1,
      name: 'Suraj Kumar',
      title: 'CEO, Cyberous',
      desc: 'Cyberous is the best institute for web development courses and many other courses. Their faculties are very friendly and skilled',
      image: Images.user
    },
    {
      id: 2,
      name: 'Muskan Jindal',
      title: 'CEO, Cyberous',
      desc: 'Learning skills from cyberous is great. Teachers are wonderful, they helps you to brush your skills and learn new technical skills. Moreover  the main focus is on hands on practice which is must to survive in the corporate world.',
      image: Images.user
    },
    {
      id: 3,
      name: 'Girdhari kumawat',
      title: 'CEO, Cyberous',
      desc: 'Cyberous is the finest place to learn ethical hacking and variety of other topics. The trainers are really pleasent and knowledgable. The enrollment process was smooth. I completed course and now working as a cybersecurity analyst.',
      image: Images.user

    },
  ]
  return (
    <div className="container mx-auto px-4">
      <div className='items-center justify-center flex-col self-center justify-items-center'>
        <h2 className="text-center text-3xl md:text-4xl font-bold my-10">
        Testimonial
        </h2>
      </div>


    {/* Responsive grid layout for cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
      { data.map((item, index) => {
        return (
            <div className="flex justify-center">
            <div className="w-1/2">
                <img src={item.image} alt="Placeholder" className="pointer-events-none select-none w-full h-32 sm:h-20 object-contain duration-500 hover:scale-110 rounded-full" />
                <p className="text-center text-xl font-sans ">{item.desc}</p>
                <p className="text-right text-xl font-bold my-4"> - {item.name}</p>
                </div>
    
        </div>
        )
       })}
       


    </div>
  </div>
  )
}

export default Testemonial