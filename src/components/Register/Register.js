import "./Register.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import logo from "../../images/logo.svg";
import { signUp } from "../../utils/MainApi";
import { getCookie } from "../../utils/cookie";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import useFormValidatorHook from "../../hooks/useFormValidationHook";
import Input from "../Input/Input";
import Button from "../Button/Button";

function Register({location}) {
  const { inputValues, isFormValid, handleChange, inputErrors } =
    useFormValidatorHook();
    const token = getCookie("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate(location.state?.from?.pathname || '/movies', { replace: true });
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
        if (res._id !== undefined) {
          return navigate("/signin");
        }
      })
      .catch((err) => console.error(err));
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
          placeholder="Виталий"
          isValidate={true}
          validationContent={inputErrors?.name}
        />

        <Input
          inputTitle="E-mail"
          type="email"
          isRequired={true}
          name="email"
          value={inputValues.email}
          onChange={handleChange}
          placeholder="pochta@yandex.ru"
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
        <Button
          content="Зарегистрироваться"
          type="submit"
          isDisabled={!isFormValid}
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
