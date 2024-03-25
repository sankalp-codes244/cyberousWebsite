import React, { useState } from 'react';
import OurApproachCard from '../../../../components/OurApproachCard';

const OurApproach = ({ approachData }) => {
  const [selectedType, setSelectedType] = useState('Requirement_Analysis');
  const filterButtonBaseClasses = "mx-2 mb-2 px-4 py-2 rounded-lg focus:outline-none focus:ring-4 ring-green-300 transition duration-500";
  const filterButtonActiveClasses = "bg-green-500 text-white";
  const filterButtonInactiveClasses = "bg-white text-green-500 border border-green-500";
  return (
    <div class=''>
    <div>
        <h1 class='text-center m-6 text-3xl'>
            Our Approach
        </h1>
        <h1 class='text-center m-6 text-5xl font-sans font-bold'>
            What is Our Approach?
        </h1>
    </div>

    <div class='flex flex-wrap justify-center my-4 text-center'>
        {['Scoping_and_objectives','Application Profiling','Dynamic_Behavior_Analysis','Static_Code_Review','Data_Security_Analysis','Network_Communication_Assessment','Authentication_and_Authorization_Testing','Comprehensive_Reporting'].map((type) => (
            <button
                key={type}
                onClick={() => setSelectedType(type)}
                class={`m-2 px-4 py-2 rounded-lg border ${selectedType === type ? 'bg-green-500 text-white' : 'bg-white text-green-500 border border-green-500'} focus:outline-none `}
            >
                {type.split('_').join(' ')}
            </button>
        ))}
    </div>
    <div class='flex justify-center'>
        {approachData.filter((approach) => approach.type === selectedType)
            .map((approach) => (
                <OurApproachCard
                    key={approach.id} 
                    image={approach.imgUrl} 
                    description={approach.description}
                    name={approach.name}
                />
            ))
        }
    </div>
</div>

  );
}

export default OurApproach;

