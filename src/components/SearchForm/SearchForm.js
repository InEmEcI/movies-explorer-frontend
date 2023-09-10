import "./SearchForm.css";
import search_icon from "../../images/search-icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({
  checkboxRef,
  setCheckboxState,
  onSubmit,
  inputValues,
  handleChange,
  isArrayEmpty,
  defaultValue,
  isCheckboxClicked, 
  isLoading
}) {
  return (
    <section className="search">
      <div className="search__line">
        <form className="search__line-left" onSubmit={onSubmit}>
          <img
            src={search_icon}
            className="search__line-left-icon"
            alt="иконка поиска"
          />
          <input
            className="search__line-left-input"
            id="search-input"
            autoComplete="off"
            type="text"
            required
            onChange={handleChange}
            defaultValue={defaultValue}
            placeholder="Фильм"
            name="search"
          />

          <button
            className="search__line-rigth-btn"
            alt="кнопка 'Найти' "
            type="sumbit"
            disabled={!inputValues?.search?.length || isLoading}
          >
            Найти
          </button>
          {isArrayEmpty && (
            <span className={"search__emptyArr"}>Ничего не найдено</span>
          )}
        </form>

        <FilterCheckbox
        isCheckboxClicked={isCheckboxClicked}
          checkboxRef={checkboxRef}
          setCheckboxState={setCheckboxState}
        />
      </div>
      <div className="search__after-line"></div>
    </section>
  );
}

export default SearchForm;
