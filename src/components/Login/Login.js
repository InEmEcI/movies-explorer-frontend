import "./Login.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { signIn } from "../../utils/MainApi";
import { getCookie, setCookie } from "../../utils/cookie";
import useFormValidatorHook from "../../hooks/useFormValidationHook";
import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { cookieExpiredTime } from "../../utils/constants";

function Login({ location }) {
  const [error, setError] = useState({ isError: false, errorMesage: "" });

  const { inputValues, handleChange, inputErrors, isFormValid } =
    useFormValidatorHook();
  const token = getCookie("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate(location.state?.from?.pathname || "/movies", { replace: true });
    }
  }, [token]);
  const submit = (e) => {
    e.preventDefault();
    signIn({ email: inputValues.email, password: inputValues.password })
      .then((res) => {
        if (res) {
          setError({isError: false, errorMesage: ''})
          setCookie("token", res.token, cookieExpiredTime);
          navigate("/");
        }
      })
      .catch((err) =>
        err
          ? setError({
              isError: true,
              errorMesage: "Неправильные почта или пароль",
            })
          : null
      );
  };

  return (
    <section className="login">
      <Link to="/" className="logo">
        <img src={logo} alt="логотип" />
      </Link>

      <h3 className="hi">Рады видеть!</h3>

      <form className="form" onSubmit={(e) => submit(e)} noValidate>
        <Input
          inputTitle="E-mail"
          type="email"
          isRequired={true}
          name="email"
          value={inputValues.email}
          onChange={handleChange}
          placeholder="email"
          validationContent={inputErrors?.email}
        />

        <Input
          inputTitle="Пароль"
          type="password"
          isRequired={true}
          name="password"
          value={inputValues.password}
          onChange={handleChange}
          placeholder="Пароль"
          minLength={6}
          validationContent={inputErrors?.password}
        />
        {error.isError ? (
          <span className="input__extraError">{error.errorMesage}</span>
        ) : null}

        <Button content="Войти" type="submit" isDisabled={!isFormValid} />
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
