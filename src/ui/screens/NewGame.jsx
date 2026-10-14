import { useState } from "react";
import { startGame } from "../../game/actions.js";
import { useGameStore } from "../../store/gameStore.js";
import { useUiStore } from "../../store/uiStore.js";
import Button from "../components/Button.jsx";
export default function NewGame() {
  const [seed, setSeed] = useState("");
  const [error, setError] = useState("");
  const dispatch = useGameStore((state) => state.dispatch);
  const goTo = useUiStore((state) => state.goTo);
  function confirm(event) {
    event.preventDefault();
    const value = seed.trim() === "" ? Date.now() : Number(seed);
    if (!Number.isSafeInteger(value) || value < 0) {
      setError("Informe um inteiro positivo ou zero.");
      return;
    }
    dispatch(startGame(value, new Date().toISOString()));
    goTo("city");
  }
  return (
    <>
      <h1>Novo jogo</h1>
      <form onSubmit={confirm}>
        <label htmlFor="seed">Semente (opcional)</label>
        <input
          id="seed"
          inputMode="numeric"
          value={seed}
          onChange={(event) => setSeed(event.target.value)}
          aria-describedby="seed-help"
        />
        <p id="seed-help">Deixe vazio para gerar uma semente.</p>
        {error && <p role="alert">{error}</p>}
        <Button type="submit">Confirmar</Button>
      </form>
      <Button onClick={() => goTo("menu")}>Voltar ao menu</Button>
    </>
  );
}
