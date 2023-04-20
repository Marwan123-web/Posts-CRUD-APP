import "./Input.css";
const Input = ({
  id,
  name,
  placeholder = "Input Filed",
  required = false,
  label,
  children,
}: {
  id?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  label?: string;
  children?: any;
}) => {
  return (
    <div className="form__group">
      <input
        type="text"
        className="form__input"
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
      />
      {label && (
        <label htmlFor={id} className="form__label">
          {label}
        </label>
      )}
      {children}
    </div>
  );
};

export default Input;
