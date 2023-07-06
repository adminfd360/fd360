import { useState } from "react";

const NewsCard = ({ imageUrl, title, date, description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="md:flex flex-wrap items-center border border-black rounded-lg shadow-lg overflow-hidden cursor-pointer p-5">
      <img
        src={imageUrl}
        alt={title}
        className="h-fit w-72 object-cover object-center"
      />
      <div className="p-4 flex-1">
        <h3 className="text-black font-bold text-xl mb-2">{title}</h3>
        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5zm3 4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2H8z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M4 9a1 1 0 0 1-1-1V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1zm13 5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-gray-600 text-sm">{date}</p>
        </div>
        <p className="text-black text-base">
          {showFullDescription
            ? description
            : `${description.slice(0, 100)}...`}
          <button
            className="text-blue-500 font-medium hover:underline ml-1 focus:outline-none"
            onClick={() => setShowFullDescription(!showFullDescription)}
          >
            {showFullDescription ? "Read less" : "Read more"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
