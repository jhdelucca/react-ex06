import React, { useState, useEffect } from "react";
import MoviesServices from "../services/MoviesService"

export const MovieDetail = (movieId) => {

  const [movie, setMovie] = useState({ data: {} });

  const requestMovies = async () => {
    const moviesResults = await MoviesServices.getMovieId(movieId);
    setMovie(moviesResults);
  }

  useEffect(() => {
    requestMovies();
  }, []);

  return movie;

  
};