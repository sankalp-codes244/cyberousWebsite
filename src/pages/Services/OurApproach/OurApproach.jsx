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
        <h1 className='text-center m-6 text-3xl'>
          Our Approach
        </h1>
        <h1 className='text-center m-6 text-5xl font-sans font-bold'>
          What is Our Approach?
        </h1>
      </div>

      <div className='flex flex-wrap justify-center my-4 text-center'>
        {["Requirement_Analysis", "Threat_Modeling", "Authentication_&_Authorization_Testing", "Session_Management", "Data_Input_Validation", "Error_Handling_Inspection", "Business_Logic_Testing", "Client_Side_Security_Analysis", "Database_Connection_&_Assesment", "Dos_Resilience_Testing", "Reporting_and_Documentation"].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`${filterButtonBaseClasses} ${selectedType === type ? filterButtonActiveClasses : filterButtonInactiveClasses}`}
          >
            {type.split('_').join(' ')}
          </button>
        ))}
      </div>
      <div className='flex justify-center '>
        {approachData.filter((approach) => approach.type === selectedType)
          .map((approach) => (
            <OurApproachCard 
            key={approach.id} 
            image={approach.imgUrl} 
            description = {approach.description}
            name = {approach.name}
            />
          ))
        }
      </div>
    </div>
  );
}

export default OurApproach;
