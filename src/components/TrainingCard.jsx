const TrainingCard = ({ image, title, description,type }) => {
  return (
    // Responsive max width and hover effects
    <div className="max-w-xs sm:max-w-sm md:max-w-80 lg:max-w-80 xl:max-w-80 mx-auto rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Zoom and transition effects on the image */}
      <div className="overflow-hidden">
        <img className="w-full transform transition duration-500 hover:scale-110" src={image} alt={title} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TrainingCard;
