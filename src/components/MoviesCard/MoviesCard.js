import "./MoviesCard.css";
import React, { useEffect, useState } from "react";
import { createMovie, deleteMovieById } from "../../utils/MainApi";

function MoviesCard({
  nameRU,
  nameEN,
  country,
  director,
  duration,
  year,
  description,
  trailerLink,
  thumbnail,
  imageSrc,
  imageAlt,
  hours,
  minutes,
  movieId,
  savedMovies,
  _id,
}) {
  const [isSaved, setSave] = useState(false);
  useEffect(() => {
    if (savedMovies.some((movie) => movie.movieId == movieId)) {
      setSave(true);
    }
  }, []);

  const toggleLike = () => {
    if (savedMovies.some((movie) => movie.movieId == movieId)) {
      deleteMovieById(_id)
        .then((res) => {
          if (res) {
            setSave(false);
            savedMovies.filter((movie) => movie.movieId !== movieId);
          }
        })
        .catch((err) => console.error(err));
    } else {
      createMovie({
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: imageSrc,
        trailerLink: trailerLink,
        thumbnail: thumbnail,
        movieId: movieId,
        nameRU: nameRU,
        nameEN: nameEN,
      })
        .then((res) => {
          if (res) {
            setSave(true);
          }
        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <article className="movies-card">
      <img className="movies-card__img" src={imageSrc} alt={imageAlt} />
      <div className="movies-card-down">
        <p className="movies-card-down__name">{nameRU}</p>
        <button
          onClick={() => toggleLike()}
          className={
            isSaved ? "movies-card-down__icon_active" : "movies-card-down__icon"
          }
        ></button>
      </div>
      <p className="movies-card__duration">{`${hours}ч ${minutes}м`}</p>
    </article>
  );
}

export default MoviesCard;
