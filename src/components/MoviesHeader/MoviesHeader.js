import logo from "../../images/logo.svg";
import "./MoviesHeader.css";
import { Link } from "react-router-dom";

function MoviesHeader() {
  return (
    <section className="movies-header">
      <img src={logo} className="movies-header__logo" alt="логотип" />

      <div className="movies-header__menu">

        <ul className="movies-header__menu-left">
          <li>
            <Link to="/movies" className="movies-header__menu-left-films">
              Фильмы
            </Link>
          </li>
          <li>
            <Link
              to="/saved-movies"
              className="movies-header__left-menu-saved-films"
            >
              Сохранённые фильмы
            </Link>
          </li>
        </ul>

        <div className="movies-header__menu-rigth">
          <button className="movies-header__menu-rigth-account">
            <div className="movies-header__menu-rigth-account-name">Аккаунт</div>
            <div className="movies-header__menu-rigth-icon"></div>
          </button>
        </div>
        
      </div>
    </section>
  );
}

export default MoviesHeader;
