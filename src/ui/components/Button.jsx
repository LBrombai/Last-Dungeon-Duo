import "./Button.css";
export default function Button({ children, ...props }) {
  return (
    <button type="button" className="button" {...props}>
      {children}
    </button>
  );
}
