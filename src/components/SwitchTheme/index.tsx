import {
  SwitchThemeLabel,
  SwitchThemeOption,
  SwitchThemeRow,
  SwitchThemeSelect,
} from "./styled";

export function SwitchTheme() {
  return (
    <SwitchThemeRow>
      <SwitchThemeLabel htmlFor="theme-select">Switch theme</SwitchThemeLabel>
      <SwitchThemeSelect name="theme" id="theme-select">
        <SwitchThemeOption value="light">Light theme</SwitchThemeOption>
        <SwitchThemeOption value="dark">Dark theme</SwitchThemeOption>
      </SwitchThemeSelect>
    </SwitchThemeRow>
  );
}
