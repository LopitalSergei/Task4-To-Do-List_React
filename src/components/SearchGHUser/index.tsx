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

  const [info, setInfo] = useState(false);

  async function searchUser(login: string) {
    const response = await axios.get(`https://api.github.com/users/${login}`);
    setUrl(response.data.html_url);
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
          <IoIosSearch
            size={25}
            onClick={() => {
              searchUser(searchUserLogin);
              setInfo(true);
            }}
          />
        </SearchUserIcon>
      </SearchUserInputRow>
      <GHUserInfo
        info={info}
        login={userLogin}
        avatar_url={avatarUrl}
        html_url={url}
      />
    </SearchUserBlock>
  );
}
