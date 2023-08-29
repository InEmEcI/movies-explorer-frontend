import "../SavedMovies/SavedMovies.css";
import { countMovieDuration, moviesUrl } from "../../utils/constants";
import React, { useContext, useEffect, useState } from "react";
import { filterMovies, getShortMovies } from "../../utils/filters";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import useFormValidatorHook from "../../hooks/useFormValidationHook";
import Preloader from "../Preloader/Preloader/Preloader";
import { CurrentUserContext } from "../../services/CurrentUserContext/CurrentUserContext";

function SavedMovies({ isLoading }) {
  const { state, setState } = useContext(CurrentUserContext);
  const { savedMovies } = state;

  const { inputValues, handleChange } = useFormValidatorHook();
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(false);
  const [filteredSaveArray, setFilteredSaveArray] = useState({
    default: [],
    shortMovies: [],
  });

  useEffect(() => {
    setFilteredSaveArray((prevState) => {
      return {
        ...prevState,
        default: savedMovies,
      };
    });
  }, [savedMovies]);
  const searchFilmSubmit = (e) => {
    e.preventDefault();

    const filteredMovies = filterMovies(inputValues.search, savedMovies);
    const shortMovies = getShortMovies(filteredMovies);

    setFilteredSaveArray((prevState) => {
      return {
        ...prevState,
        default: filteredMovies,
        shortMovies: shortMovies,
      };
    });
  };

  return (
    <main className="movies">
      <SearchForm
        setCheckboxState={() => {
          setIsCheckboxClicked(!isCheckboxClicked);
        }}
        onSubmit={searchFilmSubmit}
        inputValues={inputValues}
        handleChange={handleChange}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="saved-movies">
          {savedMovies.length != 0
            ? isCheckboxClicked
              ? filteredSaveArray?.shortMovies.map((el) => {
                  const durationObj = countMovieDuration(el.duration);
                  return (
                    <MoviesCard
                      _id={el._id}
                      key={el.movieId}
                      nameRU={el.nameRU}
                      nameEN={el.nameEN}
                      country={el.country}
                      director={el.director}
                      duration={el.duration}
                      year={el.year}
                      description={el.description}
                      thumbnail={`https://api.nomoreparties.co/${el?.image?.format?.thumbnail?.url}`}
                      trailerLink={el.trailerLink}
                      movieId={el.movieId}
                      imageAlt={el.image.alternativeText}
                      imageSrc={el.image}
                      hours={durationObj?.hours}
                      minutes={durationObj?.minutes}
                    />
                  );
                })
              : filteredSaveArray?.default.map((el) => {
                  const durationObj = countMovieDuration(el.duration);
                  return (
                    <MoviesCard
                      _id={el._id}
                      key={el.movieId}
                      nameRU={el.nameRU}
                      nameEN={el.nameEN}
                      country={el.country}
                      director={el.director}
                      duration={el.duration}
                      year={el.year}
                      description={el.description}
                      thumbnail={`https://api.nomoreparties.co/${el?.image?.format?.thumbnail?.url}`}
                      trailerLink={el.trailerLink}
                      movieId={el.movieId}
                      imageAlt={el.image.alternativeText}
                      imageSrc={el.image}
                      hours={durationObj?.hours}
                      minutes={durationObj?.minutes}
                    />
                  );
                })
            : null}
        </div>
      )}
    </main>
  );
}

export default SavedMovies;
