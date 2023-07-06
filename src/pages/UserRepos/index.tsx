import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";

import userReposService from "../../services/userReposApi";
import { ReposProps } from "../../types/repos";
import ProjectModel from "../../components/ProjectModel";
import { Content } from "./style";

const UserRepos = () => {
  const { username } = useParams<string>();
  const [repos, setRepos] = useState<ReposProps[]>([]);

  useEffect(() => {
    const loadUserRepos = async (username: string) => {
      try {
        const data = await userReposService(username);
        setRepos(data);
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
  return (
    <>
      {repos ? (
        <Content>
          {repos.map((repo: ReposProps, index: number) => {
            return <ProjectModel {...repo} key={index} />;
          })}
        </Content>
      ) : (
        ""
      )}
    </>
  );
};

export default UserRepos;
