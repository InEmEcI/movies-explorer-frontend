import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>


      <div className="footer__down">
        <p className="footer__down-year">&copy; 2020</p>

        <div className="footer__down-menu">
          <a
            href="https://practicum.yandex.ru/catalog/"
            className="footer__link-yp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/InEmEcI"
            className="footer__link-git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
