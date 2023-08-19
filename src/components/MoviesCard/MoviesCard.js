import movie_8 from "../../images/movies-img/movie_8.png";
import "./MoviesCard.css";

function MoviesCard({ name }) {
  return (
    <article className="movies-card">
      <img className="movies-card__img" src={movie_8} alt={name} />
      <div className="movies-card-down">
        <p className="movies-card-down__name">Gimme Danger: История Игги и The Stooges</p>
        <button className="movies-card-down__icon"></button>
      </div>
      <p className="movies-card__duration">1ч 42м</p>
    </article>
  );
}

export default MoviesCard;
