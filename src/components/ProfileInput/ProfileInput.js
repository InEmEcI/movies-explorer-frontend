import { inputPatterns } from "../../utils/constants";
import "./ProfileInput.css";

export default function ProfileInput({
  inputTitle,
  name,
  isRequired,
  type,
  value,
  onChange,
  placeholder,
  minLength,
  validationContent,
}) {
  return (
    <label className="profile__label" htmlFor={name}>
      <p className="profile__inputTitle">{inputTitle}</p>
      <input
        className="profile__input"
        type={type}
        required={isRequired}
        name={name}
        defaultValue={value}
        onChange={onChange}
        minLength={minLength}
        placeholder={placeholder}
        pattern={name === "name" ? inputPatterns.name : undefined}
      />
      {validationContent && (
        <span className="profile__inputError">{validationContent}</span>
      )}
    </label>
  );
}
