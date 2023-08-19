import logo from "../../images/logo.svg";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
// import React, { useState } from "react";

import Burger from "../Burger/burger";

function Header({ isLoggeIn }) {
  
  const location = useLocation();

  const isRestrictedPath = ["/movies", "/saved-movies", "/profile"].includes(location.pathname);
  return (
    <section className={`header ${isLoggeIn && isRestrictedPath ? "header__loggeIn" : ""}`}>
      <Link to="/" className="header__logo">
        <img src={logo} alt="логотип" />
      </Link>
      {!isLoggeIn ? (
        <div className="header__main">
          <div className="header__menu">
            <div>
              <Link to="/signup" className="header__menu-btn">
                Регистрация
              </Link>
            </div>

            <div>
              <Link
                to="/signin"
                className="header__menu-btn header__menu-btn-enter"
              >
                Войти
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="header__menu-in">
          <ul className="header__menu-components">
            <li>
              <Link to="/movies" className="header__menu-btn">
                Фильмы
              </Link>
            </li>
            <li>
              <Link to="/saved-movies" className="header__menu-btn">
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
          <Link to="/profile" className="header__button-account">
            <p className="header__button-account-name">Аккаунт</p>
            <div className="header__button-account-icon"></div>
          </Link>
          <Burger />
        </div>
      )}
    </section>
    
  );
}

export default Header;
