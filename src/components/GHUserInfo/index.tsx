import { IUser } from "../../types/types";
import { ImageWrapper, Login, UserImage, UserInfo } from "./styled";

interface GHUserInfoProps extends IUser {
  info: boolean;
}

export function GHUserInfo({
  info,
  login,
  avatar_url,
  html_url,
}: GHUserInfoProps) {
  if (info) {
    return (
      <UserInfo href={html_url}>
        <Login>Login: {login}</Login>
        <ImageWrapper>
          <UserImage src={avatar_url} alt={login} />
        </ImageWrapper>
      </UserInfo>
    );
  } else return null;
}
