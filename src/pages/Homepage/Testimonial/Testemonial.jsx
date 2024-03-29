import React from "react";
import { Images } from "../../../assets/index";
import TestimonialCard from "../../../components/TestimonialCard";
import { Carousel } from "react-responsive-carousel";
const Testemonial = () => {
  let data = [
    {
      id: 1,
      name: "Suraj Kumar",
      title: "CEO, Cyberous",
      desc: "Cyberous excels in web development and other courses. With friendly, skilled faculty, it's the premier institute for mastering diverse skills. Stand out with Cyberous for top-notch learning experiences.",
      image: Images.user,
    },
    {
      id: 2,
      name: "Muskan Jindal",
      title: "CEO, Cyberous",
      desc: "Learning skills from cyberous is great. Teachers are wonderful, they helps you to brush your skills and learn new technical skills. Moreover  the main focus is on hands on practice which is must to survive in the corporate world.",
      image: Images.user,
    },
    {
      id: 3,
      name: "Girdhar kumawat",
      title: "CEO, Cyberous",
      desc: "Cyberous is the finest place to learn ethical hacking and variety of other topics. The trainers are really pleasent and knowledgable. The enrollment process was smooth. I completed course and now working as a cybersecurity analyst.",
      image: Images.user,
    },
  ];
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
          <div className=" md:w-4/5 grid grid-flow-row grid-cols-1 gap-5 md:flex md:flex-row m-4 lg:hidden">
            {data.map((item) => (
              <TestimonialCard 
              image={item.image}
              name={item.name}
              title={item.title}
              desc={item.desc}
              />
            ))
            }
          </div>
          

            {/* <Carousel 
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            showArrows={true}
            showIndicators={false}
            interval={5000}
            stopOnHover={true}
            centerSlidePercentage={300}
            centerMode
            > */}
            <div className="lg:flex justify-center hidden border">
            <div className=" lg:w-4/5 lg:flex  m-4">
            {data.map((item) => (
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

            {/* </Carousel> */}

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
