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

    switch (name) {
      case "name":
        {
          if (target.validity.valueMissing) {
            setErrorMessage(name, errorType.valueMissing.default);
          }
          if (target.validity.typeMismatch) {
            setErrorMessage(name, errorType.typeMismatch.name);
          }
          if (target.validity.tooShort) {
            setErrorMessage(name, errorType.tooShort.name);
          }
        }
        break;
      case "email":
        {
          const re = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])+$/
          if (target.validity.valueMissing) {
            setErrorMessage(name, errorType.valueMissing.default);
          }
          if (target.validity.typeMismatch) {
            setErrorMessage(name, errorType.typeMismatch.email);
          }
          if (!validate(value) || !re.test(value) ) {
            target.setCustomValidity(errorType.typeMismatch.email);
            setIsFormValid(false);
          } else target.setCustomValidity("");
          setIsFormValid(true);
        }
        break;
      case "password": {
        if (target.validity.valueMissing) {
          setErrorMessage(name, errorType.valueMissing.default);
        }
        if (target.validity.tooShort) {
          setErrorMessage(name, errorType.tooShort.password);
        }
      }
      case "search":
        if (target.validity.valueMissing.default) {
          setErrorMessage(name, errorType.valueMissing.search);
        }
        break;
    }

    setIsFormValid(form.checkValidity());
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
