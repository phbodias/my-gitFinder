import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Content, SearchContainer } from "./style";
import { searchUserService } from "../../services/searchApi";
import { UserProps } from "../../types/user";
import { AxiosError } from "axios";

interface Props {
  searchedUser: UserProps | null;
  setSearchedUser: (newState: UserProps | null) => void;
}

const SearchBar = (props: Props) => {
  const [username, setUsername] = useState<string>("");

  const notify = (message: string) => toast(message);

  const loadUser = async (username: string) => {
    if (username === "") return;

    try {
      const userData = await searchUserService(username);
      props.setSearchedUser(userData);
    } catch (err) {
      if (err instanceof AxiosError)
        if (err.message === "Request failed with status code 404") {
          notify("No user found");
          props.setSearchedUser(null);
        } else notify(err.message);
      else notify("Error");
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") loadUser(username);
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        draggable
        theme="dark"
      />
    </Content>
  );
};

export default SearchBar;
