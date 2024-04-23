import { useState } from "react";
import TrainingCard from "../../../components/TrainingCard";
const Training = ({ programs }) => {
  const [selectedType, setSelectedType] = useState("All");

  // Classes for filter buttons with responsive adjustments
  const filterButtonBaseClasses = "mx-2 mb-2 px-4 py-2 rounded-lg focus:outline-none focus:ring-4 ring-green-300 transition duration-500";
  const filterButtonActiveClasses = "bg-green-500 text-white";
  const filterButtonInactiveClasses = "bg-white text-green-500 border border-green-500";

  return (
    <div className="container mx-auto px-4 my-24">
      <h1 className="text-center text-3xl md:text-4xl font-bold font-serif">
        Our <span className="text-custom-fontColor-Green font-bold"> Training </span> Programs
      </h1>
      <div className="justify-center flex m-6">
        <div className="h-1 w-72 md:w-96 bg-custom-buttonColor-Green"></div>
      </div>
      {/* Filter buttons with responsive adjustments */}
      <div className="flex flex-wrap justify-center my-4 text-center">
        {["All", "bug_bounty", "Linux_Fundamental", "Ethical_Hacking", "Cyber_Security_Diploma", 
      ].map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`${filterButtonBaseClasses} ${selectedType === type ? filterButtonActiveClasses : filterButtonInactiveClasses}`}
          >
            {type.toUpperCase().split('_').join(' ')}
          </button>
        ))}
      </div>
      {/* Responsive grid layout for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {selectedType === "All" ? (
          programs.map((program) => (
            <TrainingCard
              key={program.id}
              image={program.image}
              title={program.title}
              description={program.description}
              type={program.type}
              path={`${program.path}`}
            />
          ))
        ) : (
          programs
            .filter((program) => program.type === selectedType)
            .map((program) => (
              <TrainingCard
                key={program.id}
                image={program.image}
                title={program.title}
                description={program.description}
                type={program.type}
                path={program.path}
              />
            ))
        )}

      </div>
    </div>
  );
};

export default Training;