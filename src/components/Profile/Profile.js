import "./Profile.css";
import "../Header/Header.css";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <main>
      <section className="profile">
        <h3 className="profile__hi">Привет, Виталий!</h3>

        <form className="profile__form">
          <div className="profile__form-line">
            <p className="profile__form-line-txt">Имя</p>
            <p className="profile__form-line-value">Виталий</p>            
          </div>

          <div className="profile__form-line profile__form-line_down">
            <p className="profile__form-line-txt">E-mail</p>
            <p className="profile__form-line-value">pochta@yandex.ru</p>            
          </div>

          <button className="profile__edit" type="submit">
            Редактировать
          </button>
        </form>

        <Link to="/" className="profile__exit">
          Выйти из аккаунта
        </Link>
      </section>
    </main>
  );
}

export default Profile;
