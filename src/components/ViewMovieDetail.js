import { MovieDetail } from "../hooks/MovieDetail";
import React from "react";

export const MovieDetailView = (props) => {

    const movieLocate = 'https://image.tmdb.org/t/p/w500/';

    const movieDetail = MovieDetail(props.match.params.movieId);

    return (
        <>
            <h1>{movieDetail.data.title}</h1>

            <img src={`${movieLocate}/${movieDetail.data.backdrop_path}`} alt="capa" /> <br></br>

            <a target="_blank" href={movieDetail.data.homepage}>Acesse a pagina do filme</a> <br></br>

            <p>{movieDetail.data.overview}</p>
        </>
    );

}