import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Login.css";
// import Header from "./Header";
// import LogReg from "./LogReg";

function Login() {
  return (
    <section className="login">
      <Link to="/" className="logo">
        <img src={logo} alt="логотип" />
      </Link>

      <h3 className="hi">Рады видеть!</h3>

      <form
        className="form"
        // onSubmit={handleSubmit}
      >
        <span className="form__top-span">E-mail</span>
        <input
          id="sing-in-email-input"
          type="email"
          required
          name="email"
          // value={inputs.email}
          // onChange={handeleChange}
          placeholder="Email"
          className="form__input-email"
        />
        <span className="form__top-span">Пароль</span>
        <input
          id="sing-in-password-input"
          type="password"
          required
          // value={inputs.password}
          // onChange={handeleChange}
          name="password"
          placeholder="Пароль"
          className="form__input-pass"
        />
        {/* <span className='login__form-error-span'>Что-то пошло не так...</span> */}

        <button className="login__enter" type="submit">
          {/* {buttonText} */}
          Войти
        </button>
      </form>

      <div className="login-down">
        <p className="login-down__left">Ещё не зарегистрированы?</p>
        <Link to="/signup" className="login-down__rigth">
          Регистрация
        </Link>
      </div>
    </section>
  );
}

export default Login;
