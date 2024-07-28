import { SearchGHUser } from "../../components/SearchGHUser";
import { SwitchTheme } from "../../components/SwitchTheme";
import { MainContainer } from "../../global.styled";

export default function Settings() {
  return (
    <MainContainer>
      <SwitchTheme />
      <SearchGHUser />
    </MainContainer>
  );
}
