import { useParams } from "react-router-dom";
import userReposService from "../../../services/userReposApi";
import { AxiosError } from "axios";
import { useEffect } from "react";

const UserRepos = () => {
  const { username } = useParams<string>();

  useEffect(() => {
    const loadUserRepos = async (username: string) => {
      try {
        const repos = await userReposService(username);
      } catch (err) {
        if (err instanceof AxiosError)
          if (err.message === "Request failed with status code 404") {
            alert("No user found");
          } else alert(err.message);
        else alert("Error");
      }
    };
    if (username) loadUserRepos(username);
  }, [username]);
  return <div>{username}</div>;
};

export default UserRepos;
