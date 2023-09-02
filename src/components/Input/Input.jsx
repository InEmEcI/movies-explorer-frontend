import { inputPatterns } from "../../utils/constants";
import "./Input.css";

export default function Input({
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
    <label className="label" for={name}>
      <p className="input__title">{inputTitle}</p>
      <input
        className="input"
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
        <span className="input__error">{validationContent}</span>
      )}
    </label>
  );
}
