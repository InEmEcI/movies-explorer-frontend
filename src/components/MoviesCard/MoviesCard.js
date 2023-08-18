function MoviesCard() {
  return (
    <li className="movies-card">
      <img src={''} className="movies-card__img" alt="" />
      <div className="movies-card-down">
        <p className="movies-card-down__name"></p>
        <img
          src={''}
          className="movies-card-down__icon"
          alt="фото фильма"
        />
      </div>
      <p className="movies-card__duration"></p>
    </li>
  );
}

export default MoviesCard;
