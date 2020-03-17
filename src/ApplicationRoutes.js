import React from "react";
import { Route } from "react-router-dom";
import { MovieListView } from "./components/ViewMovieList";
import { MovieDetailView } from "./components/ViewMovieDetail";

export const ApplicationRoutes = () => (
    <>
      <Route path="/" exact component={MovieListView} />
      <Route path="/movie/:movieId" exact component={MovieDetailView}  />
    </>
  );