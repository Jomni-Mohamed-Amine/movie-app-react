import React from "react";

const MovieCard = ({ movies }) => {
  return (
    <div className="max-w-sm rounded shadow-lg bg-white">
      <img
        className="w-md h-48 object-cover "
        src={movies.posterUrl}
        alt={movies.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movies.title}</div>
        <p className="text-gray-700 text-base">{movies.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Rating: {movies.rating}
        </span>
      </div>
    </div>
   
  );
};

export default MovieCard;
