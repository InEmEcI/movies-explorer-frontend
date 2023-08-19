import "../SavedMovies/SavedMovies.css";

import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMovies() {
  return (
    <main>
      <SearchForm />
      <div className="saved-movies">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        {/* <MoviesCard /> */}
      </div>
    </main>
  );
}

export default SavedMovies;
