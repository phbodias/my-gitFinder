import { useState } from "react";
import { UserProps } from "../../types/user";

import SearchBar from "../../components/searchBar";

const Search = () => {
  const [searchedUser, setSearchedUser] = useState<UserProps | null>(null);

  return (
    <div>
      <SearchBar
        searchedUser={searchedUser}
        setSearchedUser={setSearchedUser}
      />
    </div>
  );
};

export default Search;
