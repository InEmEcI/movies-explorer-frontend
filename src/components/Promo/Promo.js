import uzor from "../../images/uzor.png";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img src={uzor} className="promo__uzor" alt="узор" />
    </section>
  );
}

export default Promo;
