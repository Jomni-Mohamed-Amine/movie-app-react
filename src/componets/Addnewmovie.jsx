import React, { useState } from "react";
import axios from "axios";
const AddNewMovie = ({ addMovie, setopen}) => {
  const handlesubmit = (e) => {
    e.preventDefault();
    const newmovies = {
      title: e.target.title.value,
      description: e.target.description.value,
      posterUrl: e.target.posterUrl.value,
      rating:  Number(e.target.rating.value)
    };
    axios.post("http://localhost:5000/movies", newmovies)
    .then((response) => {
      addMovie(response.data);
      setopen(false);
    })
    .catch((error) => {
      console.error("Error adding movie:", error);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-25">
      <div className="w-[90%] max-w-md  p-8 rounded-lg shadow-lg relative bg-cyan-200">
    
        <button
          onClick={() => setopen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

     
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Add Movie
        </h2>

        <form onSubmit={handlesubmit}>
          {/* Title Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Title
            </label>
            <input
              name="title"
              type="text"
              className="w-full p-3 border rounded  text-black"
              placeholder="Enter movie title"
            />
          </div>

          {/* Image URL Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Image URL
            </label>
            <input
              name="posterUrl"
              type="text"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400  text-black"
              placeholder="Enter image URL"
            />
          </div>

          {/* Description Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Description
            </label>
            <textarea
              name="description"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400  text-black"
              placeholder="Enter movie description"
            />
          </div>

          {/* Rating Input */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-1">
              Rating
            </label>
            <input
              name="rating"
              type="number"
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              placeholder="Enter rating (1-10)"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-300"
          >
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewMovie;
