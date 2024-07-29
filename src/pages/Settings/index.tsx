import { useOutletContext } from "react-router-dom";
import { SearchGHUser } from "../../components/SearchGHUser";
import { SwitchTheme } from "../../components/SwitchTheme";
import { MainContainer } from "../../global.styled";
import { ThemeType } from "../../types/types";

export default function Settings() {
  const { theme, setTheme } = useOutletContext<ThemeType>();
  return (
    <MainContainer>
      <SwitchTheme theme={theme} setTheme={setTheme} />
      <SearchGHUser />
    </MainContainer>
  );
}
