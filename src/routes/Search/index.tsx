import { useState } from "react";

import { UserProps } from "../../types/user";

import SearchBar from "../../components/searchBar";

const Search = () => {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);

    const data = await res.json();

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <div>
      <SearchBar loadUser={loadUser} />
      {user && <p>{user.login}</p>}
    </div>
  );
};

export default Search;
