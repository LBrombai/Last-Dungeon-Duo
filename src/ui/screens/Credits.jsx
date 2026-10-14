import { useUiStore } from "../../store/uiStore.js";
import Button from "../components/Button.jsx";
export default function Credits() {
  const goTo = useUiStore((state) => state.goTo);
  return (
    <>
      <h1>Créditos</h1>
      <p>Desenvolvimento: Lucas</p>
      <p>Segundo desenvolvedor: nome a confirmar</p>
      <Button onClick={() => goTo("menu")}>Voltar ao menu</Button>
    </>
  );
}
