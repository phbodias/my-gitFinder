import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";

import userReposService from "../../services/userReposApi";
import { ReposProps } from "../../types/repos";

import ProjectModel from "../../components/ProjectModel";
import Loading from "../../components/Loading";

import { Content, Title } from "./style";

const UserRepos = () => {
  const { username } = useParams<string>();
  const [repos, setRepos] = useState<ReposProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const loadUserRepos = async (username: string) => {
      setLoading(true);
      try {
        const data = await userReposService(username);
        setRepos(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setNotFound(true);
        if (err instanceof AxiosError)
          if (err.message === "Request failed with status code 404") {
            setErrorMessage("No user found");
          } else setErrorMessage(err.message);
        else setErrorMessage("Unexpected Error");
      }
    };
    if (username) loadUserRepos(username);
  }, [username]);
  return (
    <Content>
      {loading && <Loading />}
      {!loading && notFound && <Title>{errorMessage}</Title>}
      {repos.length > 0
        ? <Title>The best repositories of: {username}</Title> &&
          repos.map((repo: ReposProps, index: number) => {
            return <ProjectModel {...repo} key={index} />;
          })
        : !loading && <Title>No repository to view</Title>}
    </Content>
  );
};

export default UserRepos;
