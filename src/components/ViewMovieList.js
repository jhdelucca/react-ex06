import { MoviesList } from "../hooks/MoviesList"
import React from "react";
import { Link } from "react-router-dom";

export const MovieListView = () => {

    const movies = MoviesList();

    return (
        <>
        <h1>Lista Filmes</h1>
        <ul>
          {movies.data.results.map(movie => (
            <li>
              <Link to={`movie/${movie.id}`} >{movie.title}</Link>
            </li>
          ))}
        </ul>
        </>
    )
} 