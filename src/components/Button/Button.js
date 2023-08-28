import "./Button.css";

function Button({ content, isDisabled, type }) {
  return (
    <button className="button" disabled={isDisabled} type={type}>
      {content}
    </button>
  );
}

export default Button;
