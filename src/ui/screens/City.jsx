import { config } from "../../data/index.js";
import { advanceClock } from "../../game/actions.js";
import { selectClock, selectSeed } from "../../game/selectors.js";
import { useGameStore } from "../../store/gameStore.js";
import { useUiStore } from "../../store/uiStore.js";
import Button from "../components/Button.jsx";
export default function City() {
  const game = useGameStore((state) => state.game);
  const dispatch = useGameStore((state) => state.dispatch);
  const goTo = useUiStore((state) => state.goTo);
  return (
    <>
      <h1>Cidade</h1>
      <p>Tela provisória · M0</p>
      <p>
        Semente: <strong>{selectSeed(game)}</strong>
      </p>
      <p aria-live="polite">
        Relógio do mundo: <strong>{selectClock(game)}</strong>
      </p>
      <Button onClick={() => dispatch(advanceClock(config.clockStep))}>
        Avançar relógio
      </Button>
      <Button onClick={() => goTo("expedition")}>Ir à Expedição</Button>
      <Button onClick={() => goTo("menu")}>Voltar ao menu</Button>
    </>
  );
}
