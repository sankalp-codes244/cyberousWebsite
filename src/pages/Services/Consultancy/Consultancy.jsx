import React from "react";
import { Images } from "../../../assets";
import ConsultancyServices from "./ConsultancyServices";

const Consultancy = () => {
  return (
    <div>
      <div
        className="py-10 md:py-40 text-center relative bg-no-repeat mix-blend-multiply bg-cover bg-center h-full object-cover"
        style={{ backgroundImage: `url(${Images.consultancyBG})` }}
      >
        <h1 className="text-center text-lg md:text-xl font-sans p-6 text-white">
          Our Consultancy Services
        </h1>
        <h1 className="text-center text-2xl md:text-6xl font-serif font-bold p-6 text-white">
          Our Consultancy Services
        </h1>
        <div className="flex justify-center">
          <div className="md:w-3/4">
            <p className="text-white text-center p-6 px-10 md:px-40">
              Welcome to Cyberous, your premier destination for expert
              Cybersecurity Consultancy services. Our mission is to empower
              organizations with robust security strategies and proactive
              measures to safeguard their digital assets from ever-evolving
              cyber threats.
            </p>
            <button className="w-1/2 md:w-1/4 h-10 bg-custom-fontColor-grey hover:bg-white rounded-full duration-300 active:bg-slate-800">
              Get a free Consultation
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-center">
        <h1 className="text-3xl lg:text-4xl mt-4">OVERVIEW</h1>
        <div className="flex justify-center">
          <div className="h-1 w-20 lg:w-32 bg-custom-buttonColor-Green mt-4 rounded-full"></div>
        </div>
      </div>

      {/* Overview Services Text */}
      <div className="lg:flex lg:flex-row sm:flex-col justify-center py-10">
        <div className="w-full lg:w-2/3 px-4 lg:px-9">
          <h1 className="text-3xl m-6 lg:text-5xl text-black font-bold mt-4">
            Overview of our Consultancy Services
          </h1>
          <p className="m-6 mb-12 text-base lg:text-xl text-black text-justify ">
            In an era of rapid technological evolution and accelerated digital
            adoption, Cyberous cybersecurity and privacy team transforms risk
            into opportunity. Safeguarding every layer of your organization, we
            unlock new possibilities securely.
          </p>
          {/* <div className='bg-custom-fontColor-grey h-1 w-full '></div> */}
          <p className="mt-12 m-6  text-base lg:text-xl text-black text-justify">
            Our team of strategic and technical subject matter experts
            comprehensively grasp your cybersecurity requirements. We embark on
            assessing, developing, implementing, and managing next-generation
            solutions customized to your specifications. Aligned with your
            dedication to safeguarding data and enhancing business resilience,
            we stand by your side.
          </p>

          <p className="mx-6 mb-10 text-base lg:text-xl text-black text-justify">
            To foster secure growth and minimize risk, it's imperative that your
            cybersecurity strategy remains adaptable and responsive to your
            evolving business landscape.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={Images.Human}
            alt="WebAppHeaderimg1"
            className=" sm:w-full object-contain lg:aspect-video"
          />
        </div>
      </div>
      <ConsultancyServices />
      <div className="lg:flex lg:flex-row sm:flex-col justify-center py-10">
        <div className="w-full lg:w-2/3 px-4 lg:px-9">
          <h1 className="text-3xl m-6 lg:text-5xl text-black textc font-bold mt-4">
          A leader's playbook to Cybersecurity 
          </h1>
          <p className="m-6 mb-12 text-base lg:text-xl text-black text-justify ">
            At Cyberous, we specialize in helping leaders think innovatively in
            today's rapidly evolving digital landscape. Success requires staying
            ahead of trends, being relevant, innovative, and ambitious. Security
            remains paramount in this business mindset. Through innovative and
            resilient approaches, companies can effectively adapt, adopt, and
            secure their digital framework. Our cybersecurity consultancy
            services are designed to help you achieve this.
          </p>
          {/* <div className='bg-custom-fontColor-grey h-1 w-full '></div> */}
          <p className="mt-12 m-6  text-base lg:text-xl text-black text-justify">
            We facilitate secure business transformations step by step. Our
            focus encompasses managing security strategy, ensuring compliance
            and trust, safeguarding data and assets, optimizing business
            processes, architecting security platforms, and enhancing security
            resilience plans. With our core principles of "Advise. Implement.
            Manage.," we deliver industry-relevant cybersecurity consulting
            solutions tailored to your requirements. Cyberous stands out due to
            our attention to detail, deep technical expertise, integrated
            approach, and unwavering commitment to excellence.
          </p>

          <p className="mx-6 mb-10 text-base lg:text-xl text-black text-justify">
            To foster secure growth and minimize risk, it's imperative that your
            cybersecurity strategy remains adaptable and responsive to your
            evolving business landscape.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={Images.Human}
            alt="WebAppHeaderimg1"
            className=" sm:w-full object-contain lg:aspect-video"
          />
        </div>
      </div>
    </div>
  );
};

export default Consultancy;
