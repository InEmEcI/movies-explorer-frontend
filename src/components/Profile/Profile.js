import "./Profile.css";
import { useContext, useEffect, useMemo } from "react";
import { CurrentUserContext } from "../../services/CurrentUserContext/CurrentUserContext";
import { deleteCookie } from "../../utils/cookie";
import "../Header/Header.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ProfileInput from "../ProfileInput/ProfileInput";
import useFormValidatorHook from "../../hooks/useFormValidationHook";
import { updateUserData } from "../../utils/MainApi";
import { useState } from "react";

function Profile() {
  const navigate = useNavigate();
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
    navigate("/");
  };

  const { state, setState } = useContext(CurrentUserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessfullyUpdated, setIsSuccessfullyUpdated] = useState(false);
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
    setIsLoading(true);
    updateUserData({ name: inputValues?.name, email: inputValues?.email })
      .then((res) => {
        setIsLoading(false);
        setState((prevState) => {
          return {
            ...prevState,
            userData: {
              name: res.name,
              email: res.email,
            },
          };
        });
      })
      .then((res) => {
        setIsSuccessfullyUpdated(true);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
        setIsSuccessfullyUpdated(false);
      });
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
            minLength={2}
            maxLength={32}
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

          {isSuccessfullyUpdated && (
            <p className="profile__updated">Профиль успешно обновлен!</p>
          )}

          <button
            className="profile__edit"
            type="submit"
            disabled={isSubmitDisabled || inputErrors.email !== '' || isLoading}            
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
