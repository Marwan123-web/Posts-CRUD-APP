import "./Input.css";
const Input = ({
  type = "text",
  id,
  name,
  placeholder = "Input Filed",
  required = false,
  label,
  children,
  changeFun,
  value = "",
}: {
  type?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  label?: string;
  children?: any;
  changeFun?: Function;
  value: string | number;
}) => {
  const RunChangeFun = (e: any) => {
    if (changeFun) {
      changeFun(e.target.value);
    }
  };
  return (
    <div className="form__group">
      <input
        type={type}
        className="form__input"
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={(e) => RunChangeFun(e)}
        value={value}
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
