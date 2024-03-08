import { useState } from "react";
import TrainingCard from "../../../components/TrainingCard";

const Training = ({ programs }) => {
  const [selectedType, setSelectedType] = useState('All'); // Fixed typo

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center text-4xl font-bold my-10">Our Training Programs</h2>
      
      {/* <div className="flex justify-center my-4">
        <button onClick={() => setSelectedType('All')} className={`mx-2 px-4 py-2 ${selectedType === 'All' ? 'bg-green-500 text-white rounded-lg' : 'bg-white text-green-500 border border-green-500 rounded-lg'}`}>All</button>
        <button onClick={() => setSelectedType('Complete')} className={`mx-2 px-4 py-2 ${selectedType === 'Complete' ? 'bg-green-500 text-white rounded-lg' : 'bg-white text-green-500 border border-green-500 rounded-lg'}`}>Complete Projects</button>
        <button onClick={() => setSelectedType('Ongoing')} className={`mx-2 px-4 py-2 ${selectedType === 'Ongoing' ? 'bg-green-500 text-white rounded-lg' : 'bg-white text-green-500 border border-green-500 rounded-lg'}`}>Ongoing Projects</button>
      </div> */}
      
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 my-4">
        {programs.map((program, index) => (
          <TrainingCard 
            title={program.title}
            description={program.description}
            image={program.image}
            key={program.id} 
          />
        ))}
      </div>
    </div>
  );
};

export default Training;
