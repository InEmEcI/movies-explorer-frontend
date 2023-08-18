import avatar from "../../images/avatar.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="aboutMe">
      <p className="aboutMe__studen">Студент</p>

      <div className="aboutMe__text-avatar">
        
        <div className="aboutMe__text">
          <h2 className="aboutMe__name">Виталий</h2>

          <p className="aboutMe__job">Фронтенд-разработчик, 30 лет</p>

          <p className="aboutMe__biografiya">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>

          <a
            href="https://github.com/InEmEcI"
            target="_blank"
            rel="noopener noreferrer"
            className="aboutMe__git"            
          >
            Github
          </a>
        </div>
        <img src={avatar} className="aboutMe__avatar" alt="фото студента" />
      </div>
    </section>
  );
}

export default AboutMe;
