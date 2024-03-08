import { useState } from "react";
import TrainingCard from "../../../components/TrainingCard";

const Training = ({ programs }) => {
  const [selectedType, setSelectedType] = useState("All"); // Fixed typo

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center text-4xl font-bold my-10">
        Our Training Programs
      </h2>

      <div className="flex justify-center my-4">
        <button
          onClick={() => setSelectedType("All")}
          className={`mx-2 px-4 py-2 ${
            selectedType === "All"
              ? "bg-green-500 text-white rounded-lg"
              : "bg-white text-green-500 border border-green-500 rounded-lg focus:ring-4 duration-500 ring-green-300"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedType("bug_bounty")}
          className={`mx-2 px-4 py-2 ${
            selectedType === "bug_bounty"
              ? "bg-green-500 text-white rounded-lg"
              : "bg-white text-green-500 border border-green-500 rounded-lg focus:ring-4 duration-500 ring-green-300"
          }`}
        >
          Bug Bounty
        </button>
        <button
          onClick={() => setSelectedType("Linux_Fundamental")}
          className={`mx-2 px-4 py-2 ${
            selectedType === "Linux_Fundamental"
              ? "bg-green-500 text-white rounded-lg"
              : "bg-white text-green-500 border border-green-500 rounded-lg focus:ring-4 duration-500 ring-green-300"
          }`}
        >
          Linux Fundamental
        </button>
        <button
          onClick={() => setSelectedType("Advanced_Ethical_Hacking")}
          className={`mx-2 px-4 py-2 ${
            selectedType === "Advanced_Ethical_Hacking"
              ? "bg-green-500 text-white rounded-lg"
              : "bg-white text-green-500 border border-green-500 rounded-lg focus:ring-4 duration-500 ring-green-300"
          }`}
        >
          Advanced Ethical Hacking
        </button>
        <button
          onClick={() => setSelectedType("Cyber_Security_Diploma")}
          className={`mx-2 px-4 py-2 ${
            selectedType === "Cyber_Security_Diploma"
              ? "bg-green-500 text-white rounded-lg"
              : "bg-white text-green-500 border border-green-500 rounded-lg focus:ring-4 duration-500 ring-green-300"
          }`}
        >
          Cyber Security Diploma
        </button>
        <button
          onClick={() => setSelectedType("Application_Development")}
          className={`mx-2 px-4 py-2 ${
            selectedType === "Application_Development"
              ? "bg-green-500 text-white rounded-lg"
              : "bg-white text-green-500 border border-green-500 rounded-lg focus:ring-4 duration-500 ring-green-300"
          }`}
        >
          Application Development
        </button>
      </div>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 my-4">
        {selectedType === "All"?(
            programs.map((program) => (
              <TrainingCard
                key={program.id}
                image={program.image}
                title={program.title}
                description={program.description}
                type={program.type}
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
                />
              ))
          )

        }
      </div>
    </div>
  );
};

export default Training;
