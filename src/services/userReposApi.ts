import { ReposProps } from "../types/repos";
import api from "./api";

const userReposService = async (username: string) => {
  const { data } = await api.get(`/users/${username}/repos?per_page=100`);
  const repos: ReposProps[] = data.map((repo: ReposProps) => {
    const {
      name,
      language,
      description,
      stargazers_count,
      forks_count,
      clone_url,
      watchers_count,
      updated_at,
    } = repo;

    const r: ReposProps = {
      name,
      language,
      description,
      stargazers_count,
      forks_count,
      clone_url,
      watchers_count,
      updated_at,
    };

    return r;
  });

  const bestRepos = repos
    .sort((r: ReposProps, r1: ReposProps) => {
      return r1.stargazers_count - r.stargazers_count;
    })
    .slice(0, 9);

  return bestRepos;
};

export default userReposService;
