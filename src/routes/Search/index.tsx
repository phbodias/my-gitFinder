import { useState } from "react";
import { UserProps } from "../../types/user";

import SearchBar from "../../components/SearchBar";
import UserPreview from "../../components/UserPreview";

const Search = () => {
  const [searchedUser, setSearchedUser] = useState<UserProps | null>(null);

  return (
    <div>
      <SearchBar
        searchedUser={searchedUser}
        setSearchedUser={setSearchedUser}
      />
      {searchedUser && <UserPreview {...searchedUser} />}
    </div>
  );
};

export default Search;
