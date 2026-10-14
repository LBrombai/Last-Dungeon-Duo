import "./ScreenFrame.css";
export default function ScreenFrame({ children, className = "" }) {
  return (
    <main className={`screen-frame ${className}`}>
      <div className="screen-content">{children}</div>
    </main>
  );
}
