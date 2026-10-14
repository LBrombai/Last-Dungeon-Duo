import { useEffect, useRef } from "react";
import menuEmblem from "../../assets/menu-emblem.svg";
import menuFrame from "../../assets/menu-frame.svg";
import menuRule from "../../assets/menu-rule.svg";
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
      <img
        className="main-menu__frame"
        src={menuFrame}
        alt=""
        aria-hidden="true"
      />
      <header className="main-menu__header">
        <img
          className="main-menu__emblem"
          src={menuEmblem}
          alt=""
          aria-hidden="true"
        />
        <p className="eyebrow">FUNDAÇÃO · M0</p>
        <h1>
          <span>LAST</span>
          <span>DUNGEON</span>
        </h1>
        <img
          className="main-menu__title-rule"
          src={menuRule}
          alt=""
          aria-hidden="true"
        />
      </header>
      <p className="subtitle">A Torre chama. O abismo responde.</p>
      <MenuList
        options={[
          { label: "Novo jogo", onSelect: () => goTo("newGame") },
          { label: "Continuar", disabled: true },
          { label: "Opções", onSelect: () => goTo("options") },
          { label: "Créditos", onSelect: () => goTo("credits") },
        ]}
      />
      <img
        className="main-menu__footer-rule"
        src={menuRule}
        alt=""
        aria-hidden="true"
      />
      <small className="main-menu__version">Versão {__APP_VERSION__}</small>
    </div>
  );
}
