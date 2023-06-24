import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";

import { Content, SearchContainer } from "./style";

type SearchProps = {
  loadUser: (username: string) => Promise<void>;
};

const SearchBar = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
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
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </SearchContainer>
    </Content>
  );
};

export default SearchBar;
