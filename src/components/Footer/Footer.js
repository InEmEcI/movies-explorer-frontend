import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>

      <div className="footer__down">
        <p className="footer__down-year">&copy; 2023</p>
        <nav className="footer__down-menu">
          <a
            className="footer__link-yp"
            href="https://practicum.yandex.ru/catalog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link-git"
            href="https://github.com/InEmEcI"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
