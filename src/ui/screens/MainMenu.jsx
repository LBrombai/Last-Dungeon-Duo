import { useEffect, useRef } from "react";
import { useUiStore } from "../../store/uiStore.js";
import MenuList from "../components/MenuList.jsx";
import "./MainMenu.css";
export default function MainMenu() {
  const goTo = useUiStore((state) => state.goTo);
  const container = useRef(null);
  useEffect(() => {
    container.current?.querySelector("button:not(:disabled)")?.focus();
  }, []);
  return (
    <div className="main-menu" ref={container}>
      <p className="eyebrow">FUNDAÇÃO · M0</p>
      <h1>
        LAST
        <br />
        DUNGEON
      </h1>
      <p className="subtitle">Preparar. Descer. Sobreviver.</p>
      <MenuList
        options={[
          { label: "Novo jogo", onSelect: () => goTo("newGame") },
          { label: "Continuar", disabled: true },
          { label: "Opções", onSelect: () => goTo("options") },
          { label: "Créditos", onSelect: () => goTo("credits") },
        ]}
      />
      <small>Versão {__APP_VERSION__}</small>
    </div>
  );
}
