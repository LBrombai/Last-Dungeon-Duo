import "./ScreenFrame.css";
export default function ScreenFrame({ children }) {
  return (
    <main className="screen-frame">
      <div className="screen-content">{children}</div>
    </main>
  );
}
