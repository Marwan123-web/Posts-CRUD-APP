import "./Button.css";
const Button = ({
  id,
  name,
  disabled = false,
  label = "Click Me",
  children,
  clickFun,
  type = "submit",
}: {
  id?: string;
  name?: string;
  disabled?: boolean;
  label?: string;
  children?: any;
  clickFun?: Function;
  type?: string | any;
}) => {
  const RunClickFun = () => {
    if (clickFun) {
      clickFun();
    }
  };
  return (
    <button
      type={type}
      id={id}
      name={name}
      disabled={disabled}
      onClick={RunClickFun}
    >
      {label || children}
    </button>
  );
};

export default Button;
