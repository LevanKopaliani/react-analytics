import "../styles/Button.css";

const Button = ({ text, size = "medium", bg = "" }) => {
  return <button className={`btn + ${size} + ${bg}`}>{text}</button>;
};

export default Button;
