import React, { useState } from 'react';
import OurApproachCard from '../../../components/OurApproachCard';

const OurApproach = ({ approachData }) => {
  console.log(approachData)
  const [selectedType, setSelectedType] = useState("Requirement_Analysis");
  const filterButtonBaseClasses = "mx-2 mb-2 px-4 py-2 rounded-lg focus:outline-none focus:ring-4 ring-green-300 transition duration-500";
  const filterButtonActiveClasses = "bg-green-500 text-white";
  const filterButtonInactiveClasses = "bg-white text-green-500 border border-green-500";
  return (
<div className=''>
  <div>
    <h1 className='text-center m-4 md:m-6 text-2xl md:text-3xl lg:text-4xl'>
      Our Approach
    </h1>
    <h1 className='text-center m-4 md:m-6 text-4xl md:text-5xl lg:text-6xl font-sans font-bold'>
      What is Our Approach?
    </h1>
  </div>

  <div className='flex flex-wrap justify-center my-2 md:my-4 text-center'>
    {["Requirement_Analysis", "Threat_Modeling", "Authentication_&_Authorization_Testing", "Session_Management", "Data_Input_Validation", "Error_Handling_Inspection", "Business_Logic_Testing", "Client_Side_Security_Analysis", "Database_Connection_&_Assesment", "Dos_Resilience_Testing", "Reporting_and_Documentation"].map((type) => (
      <button
        key={type}
        onClick={() => setSelectedType(type)}
        className={`${filterButtonBaseClasses} ${selectedType === type ? filterButtonActiveClasses : filterButtonInactiveClasses} m-1 md:m-2`}
      >
        {type.split('_').join(' ')}
      </button>
    ))}
  </div>
  <div className='flex flex-wrap justify-center'>
    {approachData.filter((approach) => approach.type === selectedType)
      .map((approach) => (
        <div key={approach.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'>
          <OurApproachCard 
            image={approach.imgUrl} 
            description={approach.description}
            name={approach.name}
          />
        </div>
      ))
    }
  </div>
</div>

  );
}

export default OurApproach;
