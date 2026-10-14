import { useUiStore } from "../../store/uiStore.js";

import Button from "../components/Button.jsx";

export default function Credits() {
  const goTo = useUiStore((state) => state.goTo);

  return (
    <>
      <h1>Créditos</h1>
      <p>Lucas Brombai</p>
      <p>Flávio Portela Estelato</p>
      <Button onClick={() => goTo("menu")}>Voltar ao menu</Button>
    </>
  );
}
