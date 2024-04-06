import React from "react";
import { Images } from "../../../assets/index";
import TestimonialCard from "../../../components/TestimonialCard";
const Testemonial = ({data}) => {

  
  return (
    <>
      <div className="mb-8">
        <h1 className="text-center text-3xl md:text-5xl font-serif m-6 font-bold">
          Testimonials
        </h1>
        <div className="justify-center flex">
        <div className="h-1 w-40 md:w-64 bg-custom-buttonColor-Green"></div>
        </div>
        <h1 className="text-center text-2xl md:text-4xl font-sans m-6">
          What do People Say About Us
        </h1>
        <div className="flex justify-center">
          <div className=" md:w-4/5 grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-5 ">
            {data?.map((item) => (
              <TestimonialCard 
              image={item.image}
              name={item.name}
              title={item.title}
              desc={item.desc}
              />
            ))
            }
          </div>
      </div>
      </div>
    </>
  );
};

export default Testemonial;

{
  /* <div className="container mx-auto px-4">
      <div className='items-center justify-center flex-col self-center justify-items-center'>
        <h2 className="text-center text-3xl md:text-4xl font-bold my-10">
        Testimonial
        </h2>
      </div>


    {/* Responsive grid layout for cards */
}
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
//     { data.map((item, index) => {
//       return (
//           <div className="flex justify-center">
//           <div className="w-1/2">
//               <img src={item.image} alt="Placeholder" className="pointer-events-none select-none w-full h-32 sm:h-20 object-contain duration-500 hover:scale-110 rounded-full" />
//               <p className="text-center text-xl font-sans ">{item.desc}</p>
//               <p className="text-right text-xl font-bold my-4"> - {item.name}</p>
//               </div>

//       </div>
//       )
//      })}
//   </div>
// </div> */}
