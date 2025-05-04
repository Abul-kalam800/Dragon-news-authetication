
import React from "react";
import { FaStar, FaRegEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    total_view,
    rating,
    id
   
  } = news;

  const formattedDate = new Date(news.author.published_date).toISOString().split("T")[0];
const handleReadmore = ()=>{

}
  return (
    
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-base-200">
        <div className="flex items-center space-x-3">
          <img
            className="w-10 h-10 rounded-full"
            src={author.img}
            alt={author.name}
          />
          <div>
            <h3 className="font-semibold text-gray-800 text-sm">
              {author.name}
            </h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <FaShareAlt className="text-gray-400 cursor-pointer" />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold px-4 text-gray-800 my-4 ">
        {title}
      </h2>

      {/* Image */}
      <img
        className="w-full h-48 object-cover"
        src={thumbnail_url}
        alt={title}
      />

      {/* Description */}
      <div className="p-4 pt-8 text-sm text-gray-600 my-3 border-b border-base-300">
        {details.slice(0, 200)}...
        <Link to={`/newsdetails/${id}`} onClick={handleReadmore} className="text-red-500 font-semibold cursor-pointer ml-1">
          Read More
        </Link>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center buttone-x-1 text-orange-500 text-sm">
          {Array.from({ length: rating.number }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-700 font-semibold">
            {rating.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center space-x-1 text-gray-600 text-sm">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>

  );
};

export default NewsCard;
