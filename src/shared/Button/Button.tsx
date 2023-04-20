import "./Button.css";
const Button = ({
  id,
  name,
  disabled = false,
  label = "Click Me",
  children,
}: {
  id?: string;
  name?: string;
  disabled?: boolean;
  label?: string;
  children?: any;
}) => {
  return (
    <button id={id} name={name} disabled={disabled}>
      {label || children}
    </button>
  );
};

export default Button;
