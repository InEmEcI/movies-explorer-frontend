import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import burger from "../../images/burger.svg";
import krest from "../../images/Krest.svg";
import "./burger.css";
function Burger() {
  const [isMenu, setMenu] = useState(false);

  const handleMenuClick = () => {
    setMenu(!isMenu);
  };

  const handleMenuClose = () => {
    setMenu(false);
  };
  return (
    <main className="burger">
      <div
        className={`burger__menu-button ${isMenu ? "active" : ""}`}
        onClick={handleMenuClick}
      >
        <img className="burger__icon" src={burger} alt="меню" />
      </div>
      <div className={`burger__menu ${isMenu ? "active" : ""}`}>
        <div className="burger__close" onClick={handleMenuClose}>
          <img src={krest} alt="меню" />
        </div>
        <ul className="burger__imems">
          <li>
            <NavLink to="/" className="burger__item" activeclassname="active">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className="burger__item"
              activeclassname="active"
            >
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/saved-movies"
              className="burger__item"
              activeclassname="active"
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>

        <NavLink
          to="/profile"
          className="burger__account"
          activeclassname="active"
        >
          <p className="burger__account-name">Аккаунт</p>
          <div className="burger__account-icon"></div>
        </NavLink>
      </div>
    </main>
  );
}

export default Burger;
