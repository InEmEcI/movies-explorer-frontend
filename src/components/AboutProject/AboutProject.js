import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <p className="about-project__name">О проекте</p>

      <div className="about-project__texts">
        <div>
          <p className="about-project__title">
            Дипломный проект включал 5 этапов
          </p>
          <p className="about-project__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>

        <div>
          <p className="about-project__title about-project__title_rigth">
            На выполнение диплома ушло 5 недель
          </p>
          <p className="about-project__subtitle about-project__subtitle_rigth">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className="about-project__weeks">
        <p className="about-project__item">1 неделя</p>
        <p className="about-project__item">4 недели</p>
        <p className="about-project__item">Back-end</p>
        <p className="about-project__item">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
