import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { json } from "react-router-dom";

const useNowPlayingmovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const js = await data.json();
    console.log(js.results);
    dispatch(addNowPlayingMovie(js.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingmovies;
