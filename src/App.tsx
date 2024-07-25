import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { GlobalStyles } from "./global.styled";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <GlobalStyles />
    </>
  );
}
