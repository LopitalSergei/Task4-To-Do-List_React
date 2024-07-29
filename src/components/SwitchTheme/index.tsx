import { ThemeType, Themes } from "../../types/types";
import {
  SwitchThemeLabel,
  SwitchThemeOption,
  SwitchThemeRow,
  SwitchThemeSelect,
} from "./styled";

const themes = Object.entries(Themes).map((theme) => (
  <SwitchThemeOption key={theme[0]} value={theme[0]}>
    {theme[1]}
  </SwitchThemeOption>
));

function handleSwitchTheme(theme: string) {
  localStorage.setItem("theme-style", theme);
}

export function SwitchTheme({ theme, setTheme }: ThemeType) {
  return (
    <SwitchThemeRow>
      <SwitchThemeLabel htmlFor="theme-select">Switch theme</SwitchThemeLabel>
      <SwitchThemeSelect
        onChange={(e) => {
          setTheme(e.target.value);
          handleSwitchTheme(e.target.value);
        }}
        value={theme || ""}
        name="theme"
        id="theme-select"
      >
        {themes}
      </SwitchThemeSelect>
    </SwitchThemeRow>
  );
}
