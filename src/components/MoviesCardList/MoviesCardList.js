// import { useState } from "react"
// import { Link } from "react-router-dom";
// import SearchForm from "../SearchForm/SearchForm";

// import logo from "../../images/logo.svg";
// import account_icon from "../../images/account_icon.svg";
import movie_1 from "../../images/movies-img/movie_1.png";
import movie_2 from "../../images/movies-img/movie_2.png";
import movie_3 from "../../images/movies-img/movie_3.png";
import movie_4 from "../../images/movies-img/movie_4.png";
import movie_5 from "../../images/movies-img/movie_5.png";
import movie_6 from "../../images/movies-img/movie_6.png";
import movie_7 from "../../images/movies-img/movie_7.png";
import movie_8 from "../../images/movies-img/movie_8.png";
import movie_9 from "../../images/movies-img/movie_9.png";
import movie_10 from "../../images/movies-img/movie_10.png";
import movie_11 from "../../images/movies-img/movie_11.png";
import movie_12 from "../../images/movies-img/movie_12.png";
import movie_13 from "../../images/movies-img/movie_13.png";
import movie_14 from "../../images/movies-img/movie_14.png";
import movie_15 from "../../images/movies-img/movie_15.png";
import movie_16 from "../../images/movies-img/movie_16.png";
import red_heard from "../../images/red-heard-icon.svg";
import white_heard from "../../images/white-heard-icon.svg";

import "./MoviesCardList.css";

function MoviesCardList() {
  return (
    <section className="movies-list">      
      <ul className="movie-cards">
        <li className="movies-card">
          <img src={movie_1} className="movies-card__img" alt="фото фильма" />
          <div className="movies-card-down">
            <p className="movies-card-down__name">33 слова о дизайне</p>
            <img
              src={red_heard}
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
              src={white_heard}
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
              src={white_heard}
              className="movies-card-down__icon"
              alt="фото фильма"
            />
          </div>
          <p className="movies-card__duration">1ч42м</p>
        </li>

        <li className="movies-card">
          <img src={movie_4} className="movies-card__img" alt="фото фильма" />
          <div className="movies-card-down">
            <p className="movies-card-down__name">Баския: Взрыв реальности</p>
            <img
              src={white_heard}
              className="movies-card-down__icon"
              alt="фото фильма"
            />
          </div>
          <p className="movies-card__duration">1ч42м</p>
        </li>

        <li className="movies-card">
          <img src={movie_5} className="movies-card__img" alt="фото фильма" />
          <div className="movies-card-down">
            <p className="movies-card-down__name">Бег это свобода</p>
            <img
              src={red_heard}
              className="movies-card-down__icon"
              alt="фото фильма"
            />
          </div>
          <p className="movies-card__duration">1ч42м</p>
        </li>

        <li className="movies-card">
          <img src={movie_6} className="movies-card__img" alt="фото фильма" />
          <div className="movies-card-down">
            <p className="movies-card-down__name">Книготорговцы</p>
            <img
              src={red_heard}
              className="movies-card-down__icon"
              alt="фото фильма"
            />
          </div>
          <p className="movies-card__duration">1ч42м</p>
        </li>

        <li className="movies-card">
          <img src={movie_7} className="movies-card__img" alt="фото фильма" />
          <div className="movies-card-down">
            <p className="movies-card-down__name">
              Когда я думаю о Германии ночью
            </p>
            <img
              src={white_heard}
              className="movies-card-down__icon"
              alt="фото фильма"
            />
          </div>
          <p className="movies-card__duration">1ч42м</p>
        </li>

        <li className="movies-card">
          <img src={movie_8} className="movies-card__img" alt="фото фильма" />
          <div className="movies-card-down">
            <p className="movies-card-down__name">
              Gimme Danger: История Игги и The Stooges
            </p>
            <img
              src={white_heard}
              className="movies-card-down__icon"
              alt="фото фильма"
            />
          </div>
          <p className="movies-card__duration">1ч42м</p>
        </li>

        {/* <li className="movies-card">
          <img src={movie_9} className="movies-card__img" alt="фото фильма" />
          <div className="movies-card-down">
            <p className="movies-card-down__name">
              Дженис: Маленькая девочка грустит
            </p>
            <img
              src={red_heard}
              className="movies-card-down__icon"
              alt="фото фильма"
            />
          </div>
          <p className="movies-card__duration">1ч42м</p>
        </li> */}

        {/* <li className="movies-card">
          <img src={movie_10} className="movies-card__img" alt="фото фильма" />
          <div className="movies-card-down">
            <p className="movies-card-down__name">Соберись перед прыжком</p>
            <img
              src={red_heard}
              className="movies-card-down__icon"
              alt="фото фильма"
            />
          </div>
          <p className="movies-card__duration">1ч42м</p>
        </li> */}

        {/* <li className="movies-card">
          <img src={movie_11} className="movies-card__img" alt="фото фильма" />
          <div className="movies-card-down">
            <p className="movies-card-down__name">
              Пи Джей Харви: A dog called money
            </p>
            <img
              src={red_heard}
              className="movies-card-down__icon"
              alt="фото фильма"
            />
          </div>
          <p className="movies-card__duration">1ч42м</p>
        </li> */}

        {/* <li className="movies-card">
          <img src={movie_12} className="movies-card__img" alt="фото фильма" />
          <div className="movies-card-down">
            <p className="movies-card-down__name">
              По волнам: Искусство звука в кино
            </p>
            <img
              src={red_heard}
              className="movies-card-down__icon"
              alt="фото фильма"
            />
          </div>
          <p className="movies-card__duration">1ч42м</p>
        </li> */}

        {/* <li className="movies-card">
          <img src={movie_13} className="movies-card__img" alt="фото фильма" />
          <div className="movies-card-down">
            <p className="movies-card-down__name">Рудбой</p>
            <img
              src={white_heard}
              className="movies-card-down__icon"
              alt="фото фильма"
            />
          </div>
          <p className="movies-card__duration">1ч42м</p>
        </li> */}

        {/* <li className="movies-card">
          <img src={movie_14} className="movies-card__img" alt="фото фильма" />
          <div className="movies-card-down">
            <p className="movies-card-down__name">Скейт — кухня</p>
            <img
              src={white_heard}
              className="movies-card-down__icon"
              alt="фото фильма"
            />
          </div>
          <p className="movies-card__duration">1ч42м</p>
        </li> */}

        {/* <li className="movies-card">
          <img src={movie_15} className="movies-card__img" alt="фото фильма" />
          <div className="movies-card-down">
            <p className="movies-card-down__name">Война искусств</p>
            <img
              src={white_heard}
              className="movies-card-down__icon"
              alt="фото фильма"
            />
          </div>
          <p className="movies-card__duration">1ч42м</p>
        </li> */}

        {/* <li className="movies-card">
          <img src={movie_16} className="movies-card__img" alt="фото фильма" />
          <div className="movies-card-down">
            <p className="movies-card-down__name">Зона</p>
            <img
              src={red_heard}
              className="movies-card-down__icon"
              alt="фото фильма"
            />
          </div>
          <p className="movies-card__duration">1ч42м</p>
        </li> */}
      </ul>

      <button className="movie-cards-more-btn">Ещё</button>

    </section>
  );
}

export default MoviesCardList;
