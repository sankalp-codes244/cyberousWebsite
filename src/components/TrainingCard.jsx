import { Link } from "react-router-dom";

const TrainingCard = ({ image, title, description,type}) => {
  return (
    // Responsive max width and hover effects
    <div className="max-w-xs sm:max-w-sm lg:max-w-lg xl:max-w-lg mx-auto rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 relative">
      {/* Zoom and transition effects on the image */}
      <div className="overflow-hidden">
        <img className="pointer-events-none select-none w-full h-64 transform transition duration-500 hover:scale-110" src={image} alt={title}
        />
      </div>
      <div className="px-6 py-10">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
        {/* Button that appears on hover */}

        
        
      </div>
      <Link className=" absolute bottom-0 right-0 m-3  px-3 py-2 bg-custom-buttonColor-Green text-white rounded-full focus:ring-4 duration-500 ring-green-300">
          Learn More
        </Link>
      </div>
      
  );
};

export default TrainingCard;

