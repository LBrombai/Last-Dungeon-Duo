import { useUiStore } from "../../store/uiStore.js";
import Button from "../components/Button.jsx";
export default function Options() {
  const goTo = useUiStore((state) => state.goTo);
  return (
    <>
      <h1>Opções</h1>
      <Button onClick={() => goTo("menu")}>Voltar ao menu</Button>
    </>
  );
}
