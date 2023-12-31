import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  
  return (
    <div className="px-12 text-white">
      <h1 className="text-2xl  py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movies) => (
            <MovieCard key={movies.id} posterPath={movies.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
