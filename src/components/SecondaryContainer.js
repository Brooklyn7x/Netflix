import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-56 relative z-20">
          <MovieList title={"Now Playing "} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular Movies "} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
          <MovieList title={" Top Rated "} movies={movies.topRatedMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
