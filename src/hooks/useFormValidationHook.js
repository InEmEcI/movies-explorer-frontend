/* eslint-disable no-fallthrough */
/* eslint-disable no-lone-blocks */
/* eslint-disable default-case */
import { useCallback, useState } from "react";
import { errorType } from "../utils/constants";
import { validate } from "react-email-validator";

export default function useFormValidatorHook() {
  const [inputValues, setInputValues] = useState({});
  const [inputErrors, setInputErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const setErrorMessage = (name, errorMessage) => {
    setInputErrors({ ...inputErrors, [name]: errorMessage });
  };

  const handleChange = (event) => {
    const target = event.target;
    const { name, value } = target;
    const form = target.closest("form");

    setInputValues((prevState) => {
      return { ...prevState, [name]: value };
    });

    setInputErrors((prevState) => {
      return { ...prevState, [name]: target.validationMessage };
    });

    setIsFormValid(form.checkValidity());

    switch (name) {
      case "name":
        {
          if (target.validity.valueMissing) {
            setErrorMessage(name, errorType.valueMissing.default);
          }
          if (target.validity.typeMismatch) {
            setErrorMessage(name, errorType.typeMismatch.name);
          }
        }
        break;
      case "email":
        {
          if (target.validity.valueMissing) {
            setErrorMessage(name, errorType.valueMissing.default);
          }
          if (target.validity.typeMismatch) {
            setErrorMessage(name, errorType.typeMismatch.email);
          }
          const input = form
            .querySelector("label[for='email']")
            .getElementsByTagName("input")[0];
          if (!validate(inputValues.email)) {
            input.setCustomValidity(errorType.typeMismatch.email);
            setIsFormValid(false);
            
          } else 
          input.setCustomValidity("");
          setIsFormValid(true);
        }
        break;
      case "password": {
        if (target.validity.valueMissing) {
          setErrorMessage(name, errorType.valueMissing.default);
        }
        if (target.validity.tooShort) {
          setErrorMessage(name, errorType.tooShort);
        }
      }
      case "search":
        if (target.validity.valueMissing.default) {
          setErrorMessage(name, errorType.valueMissing.search);
        }
        break;
    }

  };

  const resetForm = useCallback(
    (newInputValues = {}, newErrors = {}, newIsValid = false) => {
      setInputValues(newInputValues);
      setInputErrors(newErrors);
      setIsFormValid(newIsValid);
    },
    [setInputValues, setInputErrors, setIsFormValid]
  );

  return {
    inputValues,
    setInputValues,
    inputErrors,
    isFormValid,
    handleChange,
    resetForm,
  };
}
