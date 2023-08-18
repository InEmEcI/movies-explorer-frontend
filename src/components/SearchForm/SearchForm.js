import "./SearchForm.css"; 
import search_icon from "../../images/search-icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <div className="search__line">
        
        <div className="search__line-left">
          <img src={search_icon} className="search__line-left-icon" alt="иконка поиска" />
          <input className="search__line-left-input" id="search-input" autoComplete="off" type="text" required placeholder="Фильм" name="search" ></input>
          <button className="search__line-rigth-btn" alt="кнопка 'Найти' ">Найти</button>
        </div>
        
        <FilterCheckbox />
      </div>

      <div className="search__after-line"></div>
      
    </section>
  );
}

export default SearchForm;
