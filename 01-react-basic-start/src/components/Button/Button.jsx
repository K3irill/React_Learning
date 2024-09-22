import "./Button.css";

export default function ({ children, onClick, isActive }) {
  return (
    <button className={isActive ? "button active" : "button"} onClick={onClick}>
      {children}
    </button>
  );
}
