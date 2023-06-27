import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Content, SearchContainer } from "./style";
import { searchUser } from "../../services/searchApi";
import { UserProps } from "../../types/user";
import { AxiosError } from "axios";

const SearchBar = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [username, setUsername] = useState<string>("");

  const notify = () => toast("No user found!");

  const loadUser = async (username: string) => {
    try {
      const userData = await searchUser(username);
      setUser(userData);
    } catch (err) {
      if (err instanceof AxiosError)
        if (err.message === "Request failed with status code 404") notify();
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="dark"
      />
    </Content>
  );
};

export default SearchBar;
