import { useUiStore } from "../../store/uiStore.js";
import Button from "../components/Button.jsx";
export default function Expedition({ children }) {
  const goTo = useUiStore((state) => state.goTo);
  return (
    <>
      <h1>Expedição</h1>
      <p>Teste de renderização 3D · M0</p>
      {children}
      <Button onClick={() => goTo("city")}>Voltar à Cidade</Button>
    </>
  );
}
