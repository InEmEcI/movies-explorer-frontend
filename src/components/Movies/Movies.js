import "./Movies.css";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { filterMovies, getShortMovies } from "../../utils/filters";
import { getAllMovies } from "../../utils/MoviesApi";
import useFormValidatorHook from "../../hooks/useFormValidationHook";
import Preloader from "../Preloader/Preloader/Preloader";

function Movies({ isLoading, isCheckboxClicked, setIsCheckboxClicked, allMovies }) {

  
  const { inputValues, handleChange } = useFormValidatorHook();
  const [isArrayEmpty, setIsArrayEmpty] = useState(false);
  const [cardsIndex, setCardsIndex] = useState({
    startIndex: 0,
    endIndex: 0,
  });

  const [cardsForRender, setCardsForRender] = useState([]);

  const setInitialArray = (firstIndex, lastIndex, defaultArray) => {
    const initialCardsArray =
      defaultArray?.length > lastIndex
        ? defaultArray.slice(firstIndex, lastIndex)
        : defaultArray;
    setCardsForRender(initialCardsArray);
  };

  const [filteredArray, setFilteredArray] = useState({
    default: [],
    shortMovies: [],
  });

  const cardsNumber = useMediaQuery();

  const [isSearchLoading, setIsSearchLoading] = useState(false);

  useEffect(() => {

    if (localStorage.getItem("formInput") !== null && allMovies.length !== 0) {
      setIsArrayEmpty(false);
      const filteredMovies = filterMovies(
        localStorage.getItem("formInput"),
        allMovies
      );
      const shortMovies = getShortMovies(filteredMovies);

      filteredMovies.length === 0
        ? setIsArrayEmpty(true)
        : setIsArrayEmpty(false);

      setFilteredArray((prevState) => {
        return {
          ...prevState,
          default: filteredMovies,
          shortMovies: shortMovies,
        };
      });

      setInitialArray(
        cardsIndex.startIndex,
        cardsIndex.endIndex,
        isCheckboxClicked ? shortMovies : filteredMovies
      );
    }
  }, [localStorage.getItem("formInput"), allMovies]);

  const searchFilmSubmit = (e) => {
    e.preventDefault();
    setIsSearchLoading(true);
    setIsArrayEmpty(false);
    localStorage.setItem("formInput", inputValues.search);
    const filteredMovies = filterMovies(inputValues.search, allMovies);
    const shortMovies = getShortMovies(filteredMovies);

    filteredMovies.length === 0
      ? setIsArrayEmpty(true)
      : setIsArrayEmpty(false);

    setFilteredArray((prevState) => {
      return {
        ...prevState,
        default: filteredMovies,
        shortMovies: shortMovies,
      };
    });

    setInitialArray(
      cardsIndex.startIndex,
      cardsIndex.endIndex,
      isCheckboxClicked ? shortMovies : filteredMovies
    );
    setIsSearchLoading(false);
  };

  // устанавливаем дефолтный индекс для карточек
  useEffect(() => {
    setCardsIndex((prevState) => {
      return {
        ...prevState,
        endIndex: cardsNumber.default,
      };
    });
  }, [cardsNumber.default]);

  useEffect(() => {
    setInitialArray(
      cardsIndex.startIndex,
      cardsIndex.endIndex,
      isCheckboxClicked ? filteredArray.shortMovies : filteredArray.default
    );
  }, [isCheckboxClicked]);

  const updateCardsAmount = () => {
    setCardsIndex((prevState) => {
      return {
        ...prevState,
        startIndex: prevState.endIndex,
        endIndex: prevState.endIndex + cardsNumber.additional,
      };
    });
  };

  const updateArray = (firstIndex, lastIndex) => {
    const additionalCards = [...allMovies.slice(firstIndex, lastIndex)];
    setCardsForRender(cardsForRender.concat(additionalCards));
  };

  useEffect(() => {
    updateArray(cardsIndex.startIndex, cardsIndex.endIndex);
  }, [cardsIndex.startIndex]);

  return (
    <main className="movies">
      <SearchForm
        isArrayEmpty={isArrayEmpty}
        isCheckboxClicked={isCheckboxClicked}
        setCheckboxState={() => {
          setIsCheckboxClicked(!isCheckboxClicked);
        }}
        defaultValue={
          localStorage.getItem("formInput") !== null
            ? localStorage.getItem("formInput")
            : ""
        }
        onSubmit={searchFilmSubmit}
        inputValues={inputValues}
        handleChange={handleChange}
        isLoading={isSearchLoading}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        cardsForRender?.length > 0 && (
          <MoviesCardList
            cardsForRender={cardsForRender}
            updateCardsAmount={updateCardsAmount}
            defaultCardsArray={
              isCheckboxClicked
                ? filteredArray.shortMovies
                : filteredArray.default
            }
          />
        )
      )}
    </main>
  );
}

export default Movies;
