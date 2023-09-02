import "./MoviesCard.css";
import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  createMovie,
  deleteMovieById,
  getSavedMovies,
} from "../../utils/MainApi";
import { CurrentUserContext } from "../../services/CurrentUserContext/CurrentUserContext";
import { Link } from "react-router-dom";

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
}) {
  const { state, setState } = useContext(CurrentUserContext);
  const { savedMovies } = state;
  const [isSaved, setSave] = useState(false);

  useEffect(() => {
    if (savedMovies.some((movie) => movie.movieId == movieId)) {
      setSave(true);
    }
  }, []);

  const isCardExist = useMemo(() => {
    return savedMovies.some((movie) => movie.movieId == movieId);
  }, [movieId, [...savedMovies]]);

  const toggleLike = () => {
    if (isCardExist) {
      deleteMovieById(savedMovies.find((movie) => movie.movieId == movieId)._id)
        .then((res) => {
          if (res) {
            setSave(false);
            setState((prevState) => {
              return {
                ...prevState,
                savedMovies: savedMovies.filter(
                  (movie) => movie.movieId !== movieId
                ),
              };
            });
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
            setState((prevState) => {
              return {
                ...prevState,
                savedMovies: [...prevState.savedMovies, res]
              };
            });
          }
        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <article className="movies-card">
      <Link to={trailerLink}>
        <img className="movies-card__img" src={imageSrc} alt={imageAlt} />
      </Link>
      <div className="movies-card-down">
        <p className="movies-card-down__name">{nameRU}</p>
        <button
          onClick={() => toggleLike()}
          className={
            isSaved ? "movies-card-down__icon_active" : "movies-card-down__icon"
          }
        />
      </div>
      <p className="movies-card__duration">{`${hours}ч ${minutes}м`}</p>
    </article>
  );
}

export default MoviesCard;
