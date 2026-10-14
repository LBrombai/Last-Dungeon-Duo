import { useEffect } from "react";
import SmokeTest from "./scene/SmokeTest.jsx";
import { useUiStore } from "./store/uiStore.js";
import ScreenFrame from "./ui/components/ScreenFrame.jsx";
import City from "./ui/screens/City.jsx";
import Credits from "./ui/screens/Credits.jsx";
import Expedition from "./ui/screens/Expedition.jsx";
import MainMenu from "./ui/screens/MainMenu.jsx";
import NewGame from "./ui/screens/NewGame.jsx";
import Options from "./ui/screens/Options.jsx";

const screens = {
  menu: MainMenu,
  newGame: NewGame,
  city: City,
  expedition: Expedition,
  options: Options,
  credits: Credits,
};
export default function App() {
  const screen = useUiStore((state) => state.screen);
  const goTo = useUiStore((state) => state.goTo);
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") goTo("menu");
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goTo]);
  const Screen = screens[screen] ?? MainMenu;
  return (
    <ScreenFrame>
      <Screen>{screen === "expedition" && <SmokeTest />}</Screen>
    </ScreenFrame>
  );
}
