import { useRef, useState } from "react";
import "./MenuList.css";
export default function MenuList({ options }) {
  const [selected, setSelected] = useState(
    options.findIndex((option) => !option.disabled),
  );
  const buttons = useRef([]);
  function onKeyDown(event) {
    if (!["ArrowUp", "ArrowDown", "Enter"].includes(event.key)) return;
    event.preventDefault();
    if (event.key === "Enter") {
      options[selected].onSelect();
      return;
    }
    const step = event.key === "ArrowDown" ? 1 : -1;
    let index = selected;
    do {
      index = (index + step + options.length) % options.length;
    } while (options[index].disabled);
    setSelected(index);
    buttons.current[index]?.focus();
  }
  return (
    <fieldset
      className="menu-list"
      onKeyDown={onKeyDown}
      aria-label="Menu principal"
    >
      {options.map((option, index) => (
        <button
          type="button"
          key={option.label}
          ref={(element) => {
            buttons.current[index] = element;
          }}
          disabled={option.disabled}
          tabIndex={index === selected ? 0 : -1}
          className={
            index === selected ? "menu-option selected" : "menu-option"
          }
          onFocus={() => setSelected(index)}
          onMouseEnter={() => {
            if (!option.disabled) {
              setSelected(index);
              buttons.current[index]?.focus();
            }
          }}
          onClick={option.onSelect}
        >
          {option.label}
        </button>
      ))}
    </fieldset>
  );
}
