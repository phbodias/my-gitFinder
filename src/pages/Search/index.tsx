import { useState } from "react";

import { UserProps } from "../../types/user";
import SearchBar from "../../components/SearchBar";
import UserPreview from "../../components/UserPreview";
import Loading from "../../components/Loading";

const Search = () => {
  const [searchedUser, setSearchedUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div>
      <SearchBar
        searchedUser={searchedUser}
        setSearchedUser={setSearchedUser}
        loading={loading}
        setLoading={setLoading}
      />
      {searchedUser && <UserPreview {...searchedUser} />}
      {loading && <Loading />}
    </div>
  );
};

export default Search;
