import "./FilterCheckbox.css";
import search_line from "../../images/search_line.svg";

function FilterCheckbox() {
  return (
    <section className="checkbox">
      <div className="checkbox__img">
        <img
          src={search_line}
          className="checkbox__image"
          alt="вертикальная линия"
        />
  
        <label class="checkbox__lablel">
          <input type="checkbox"></input>
          <span class="checkbox__span checkbox__span_round"></span>
        </label>
        <p className="checkbox__txt">Короткометражки</p>
      </div>
    </section>
  );
}

export default FilterCheckbox;