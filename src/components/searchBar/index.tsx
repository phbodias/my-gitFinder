import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";

import { Content, SearchContainer } from "./style";
import { searchUser } from "../../services/searchApi";
import { UserProps } from "../../types/user";
import { AxiosError } from "axios";

const SearchBar = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [username, setUsername] = useState<string>("");

  const loadUser = async (username: string) => {
    try {
      const userData = await searchUser(username);
      setUser(userData);
    } catch (err) {
      if (err instanceof AxiosError)
        if (err.message === "Request failed with status code 404")
          alert("No user found");
        else alert("Error");
      else {
        alert("Error");
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(username);
    }
  };

  return (
    <Content>
      <h2>Search for a user</h2>
      <p>Discover the best repositories</p>
      <SearchContainer>
        <input
          type="text"
          placeholder="Search for a user"
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(username)}>
          <BsSearch />
        </button>
      </SearchContainer>
    </Content>
  );
};

export default SearchBar;
