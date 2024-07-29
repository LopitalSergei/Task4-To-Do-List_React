import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { darkTheme, GlobalStyles, lightTheme } from "./global.styled";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { ThemeType } from "./types/types";

export default function App() {
  const [theme, setTheme] = useState("light");
  let currentTheme = lightTheme;

  switch (theme) {
    case "light":
      currentTheme = lightTheme;
      break;
    case "dark":
      currentTheme = darkTheme;
      break;
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <Header />
      <Outlet context={{ theme, setTheme } satisfies ThemeType} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
