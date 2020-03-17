import { useState, useEffect } from "react";
import MoviesServices from "../services/MoviesService"


export const MoviesList = () => {
  const [movies, setMovies] = useState({ data: { results: [] } });

  const requestMovies = async () => {
    const moviesResults = await MoviesServices.getPopularMovies();
    setMovies(moviesResults);
  }

  useEffect(() => {
    requestMovies();
  }, []);

  return  movies;
  
}
