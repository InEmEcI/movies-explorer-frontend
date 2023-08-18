import arrow from "../../images/arrow.svg";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>

      <ul className="portfolio__sites">
        <li>
          <a
            className="portfolio__sites-item"
            href="https://github.com/InEmEcI/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
            <img
              src={arrow}
              className="portfolio__sites-item-arrow"
              alt="стрелка наверх-направо"
            />
          </a>
        </li>

        <li>
          <a
            className="portfolio__sites-item"
            href="https://github.com/InEmEcI/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
            <img
              src={arrow}
              className="portfolio__sites-item-arrow"
              alt="стрелка наверх-направо"
            />
          </a>
        </li>

        <li>
          <a
            className="portfolio__sites-item portfolio__sites-item_application"
            href="https://github.com/InEmEcI/react-mesto-api-full-gha"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
            <img
              src={arrow}
              className="portfolio__sites-item-arrow"
              alt="стрелка наверх-направо"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
