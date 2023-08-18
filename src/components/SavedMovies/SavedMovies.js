import "../SavedMovies/SavedMovies.css";

import movie_1 from "../../images/movies-img/movie_1.png";
import movie_2 from "../../images/movies-img/movie_2.png";
import movie_3 from "../../images/movies-img/movie_3.png";
import cross from "../../images/crestik.svg";


import React from "react";

import SearchForm from "../SearchForm/SearchForm";

function SavedMovies() {
  return (

    <main className="saved-movies">

      <SearchForm />

      <section>
      <ul className="movie-cards">
        <li className="movies-card">
          <img src={movie_1} className="movies-card__img" alt="фото фильма" />
          <div className="movies-card-down">
            <p className="movies-card-down__name">33 слова о дизайне</p>
            <img
              src={cross}
              className="movies-card-down__icon"
              alt="фото фильма"
            />
          </div>
          <p className="movies-card__duration">1ч42м</p>
        </li>

        <li className="movies-card">
          <img src={movie_2} className="movies-card__img" alt="фото фильма" />
          <div className="movies-card-down">
            <p className="movies-card-down__name">
              Киноальманах «100 лет дизайна»
            </p>
            <img
              src={cross}
              className="movies-card-down__icon"
              alt="фото фильма"
            />
          </div>
          <p className="movies-card__duration">1ч42м</p>
        </li>

        <li className="movies-card">
          <img src={movie_3} className="movies-card__img" alt="фото фильма" />
          <div className="movies-card-down">
            <p className="movies-card-down__name">В погоне за Бенкси</p>
            <img
              src={cross}
              className="movies-card-down__icon"
              alt="фото фильма"
            />
          </div>
          <p className="movies-card__duration">1ч42м</p>
        </li>
        </ul>

        {/* <button className="movie-cards-more-btn">Ещё</button> */}
      </section>
      
    </main>
  );
}

export default SavedMovies;
