import { IUser } from "../../types/types";
import { UserInfo } from "./styled";

export function GHUserInfo({ login, avatar_url, url }: IUser) {
  return (
    <UserInfo>
      <div>{login}</div>
      <div>{avatar_url}</div>
      <div>{url}</div>
    </UserInfo>
  );
}
