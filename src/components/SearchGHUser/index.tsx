import { useState } from "react";
import { GHUserInfo } from "../GHUserInfo";
import {
  SearchUserBlock,
  SearchUserIcon,
  SearchUserInput,
  SearchUserInputRow,
  SearchUserTitle,
} from "./styled";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";

export function SearchGHUser() {
  const [searchUserLogin, setSearchUserLogin] = useState("");
  const [userLogin, setUserLogin] = useState("");
  const [url, setUrl] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  async function searchUser(login: string) {
    const response = await axios.get(`https://api.github.com/users/${login}`);
    setUrl(response.data.url);
    setUserLogin(response.data.login);
    setAvatarUrl(response.data.avatar_url);
    setSearchUserLogin("");
  }
  return (
    <SearchUserBlock>
      <SearchUserTitle>GitHub info</SearchUserTitle>
      <SearchUserInputRow>
        <SearchUserInput
          placeholder="Search name..."
          value={searchUserLogin}
          onChange={(e) => setSearchUserLogin(e.target.value)}
        />
        <SearchUserIcon>
          <IoIosSearch size={25} onClick={() => searchUser(searchUserLogin)} />
        </SearchUserIcon>
      </SearchUserInputRow>
      <GHUserInfo login={userLogin} avatar_url={avatarUrl} url={url} />
    </SearchUserBlock>
  );
}
