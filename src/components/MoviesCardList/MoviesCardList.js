import MoviesCard from "../MoviesCard/MoviesCard";
import { countMovieDuration, moviesUrl } from "../../utils/constants";

function MoviesCardList({
  savedMovies,
  defaultCardsArray,
  cardsForRender,
  updateCardsAmount,
}) {

  return (
    <section className="movies-box">
      <ul className="movies-box__list">
        {[...cardsForRender]?.length > 0 &&
          cardsForRender.map((card, index) => {
            const durationObj = countMovieDuration(card.duration);
            return (
              // <Link key={card.id} to={card.trailerLink}>
              <MoviesCard
                key={index}
                savedMovies={savedMovies}
                movieId={card.id}
                nameRU={card.nameRU}
                nameEN={card.nameEN}
                country={card.country}
                director={card.director}
                duration={card.duration}
                year={card.year}
                trailerLink={card.trailerLink}
                description={card.description}
                thumbnail={`https://api.nomoreparties.co/${card?.image?.format?.thumbnail?.url}`}
                imageSrc={`${moviesUrl}/${card.image.url}`}
                imageAlt={card.image.alternativeText}
                hours={durationObj?.hours}
                minutes={durationObj?.minutes}
              />
              // </Link>
            );
          })}
      </ul>
      <div className="movies-box__button">
        {cardsForRender?.length < defaultCardsArray.length && (
          <button className="movies-box__btn" onClick={updateCardsAmount}>
            Ещё
          </button>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
