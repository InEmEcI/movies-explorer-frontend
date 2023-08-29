import "./Profile.css";
import { useContext, useEffect, useMemo } from "react";
import { CurrentUserContext } from "../../services/CurrentUserContext/CurrentUserContext";
import { deleteCookie } from "../../utils/cookie";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import ProfileInput from "../ProfileInput/ProfileInput";
import useFormValidatorHook from "../../hooks/useFormValidationHook";
import { updateUserData } from "../../utils/MainApi";

function Profile() {
  const exit = (e) => {
    e.preventDefault();
    deleteCookie("token");
    setState((prevState) => {
      return {
        ...prevState,
        isAuth: false,
        userData: null,
        _id: null,
      };
    });
  };

  const { state, setState } = useContext(CurrentUserContext);
  const {
    inputValues,
    handleChange,
    setInputValues,
    inputErrors,
    isFormValid,
  } = useFormValidatorHook();

  useEffect(() => {
    setInputValues((prevState) => {
      return {
        ...prevState,
        name: state?.userData?.name,
        email: state?.userData?.email,
      };
    });
  }, [state?.userData?.name, state?.userData?.email]);

  const isSubmitDisabled = useMemo(() => {
    return (
      (inputValues?.name == state?.userData?.name &&
        inputValues?.email == state?.userData?.email) ||
      !isFormValid
    );
  }, [
    inputValues?.name,
    inputValues?.email,
    state?.userData?.name,
    state?.userData?.email,
  ]);

  const submitUserDataUpdating = (e) => {
    e.preventDefault();
    updateUserData({ name: inputValues?.name, email: inputValues?.email })
      .then((res) =>
        setState((prevState) => {
          return {
            ...prevState,
            userData: {
              name: res.name,
              email: res.email,
            },
          };
        })
      )
      .catch((err) => console.error(err));
  };

  return (
    <main>
      <section className="profile">
        <h3 className="profile__hi">{`Привет, ${state?.userData?.name}!`}</h3>

        <form className="profile__form" onSubmit={submitUserDataUpdating}>
          <ProfileInput
            inputTitle="Имя"
            type="text"
            value={inputValues?.name}
            onChange={handleChange}
            isRequired={true}
            name="name"
            validationContent={inputErrors.name}
            placeholder="Имя"
          />

          <div className="profile__form-line" />

          <ProfileInput
            inputTitle="E-mail"
            type="email"
            name="email"
            value={inputValues?.email}
            isRequired={true}
            onChange={handleChange}
            validationContent={inputErrors.email}
            placeholder="pochta@yandex.ru"
          />

          <button
            className="profile__edit"
            type="submit"
            disabled={isSubmitDisabled}
          >
            Редактировать
          </button>
        </form>

        <Link onClick={(e) => exit(e)} className="profile__exit">
          Выйти из аккаунта
        </Link>
      </section>
    </main>
  );
}

export default Profile;
