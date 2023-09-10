import "./Register.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../images/logo.svg";
import { signUp, signIn } from "../../utils/MainApi";
import { getCookie, setCookie } from "../../utils/cookie";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import useFormValidatorHook from "../../hooks/useFormValidationHook";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { cookieExpiredTime } from "../../utils/constants";

function Register({ location }) {
  const [error, setError] = useState({ isError: false, errorMesage: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { inputValues, isFormValid, handleChange, inputErrors } =
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
    signUp({
      email: inputValues.email,
      password: inputValues.password,
      name: inputValues.name,
    })
      .then((res) => {
        setError({ isError: false, errorMesage: "" });
        setIsLoading(true);
        if (res._id !== undefined) {
          signIn({ email: inputValues.email, password: inputValues.password })
            .then((res) => {
              if (res) {
                setIsLoading(false);
                setCookie("token", res.token, cookieExpiredTime);
                navigate("/movies");
              }
            })
            .catch((err) => {
              console.error(err);
              setIsLoading(false);
            });
        }
      })
      .catch((err) =>
        err.status == 409
          ? setError({
              isError: true,
              errorMesage: "такой пользователь уже существует",
            })
          : err.status == 404
          ? setError({
              isError: true,
              errorMesage: "NOT FOUND",
            })
          : setError({ isError: true, errorMesage: "непредвиденная ошибка" })
      );
  };
  return (
    <section className="register">
      <Link to="/" className="register__logo">
        <img src={logo} alt="логотип" />
      </Link>

      <h3 className="register__hi">Добро пожаловать!</h3>

      <form className="register__form" onSubmit={(e) => submit(e)} noValidate>
        <Input
          inputTitle="Имя"
          type="text"
          isRequired={true}
          name="name"
          value={inputValues.name}
          onChange={handleChange}
          placeholder="Имя"
          isValidate={true}
          validationContent={inputErrors?.name}
          minLength={2}
          maxLength={32}
        />

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
          minLength={6}
          placeholder="Пароль"
          validationContent={inputErrors?.password}
        />
        {error.isError ? (
          <span className="input__extraError">{error.errorMesage}</span>
        ) : null}
        <Button
          content="Зарегистрироваться"
          type="submit"
          isDisabled={!isFormValid || inputErrors.email !== '' || isLoading}
        />
      </form>

      <div className="register-down">
        <p className="register-down__left">Уже зарегистрированы?</p>
        <Link to="/signin" className="register-down__rigth">
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
