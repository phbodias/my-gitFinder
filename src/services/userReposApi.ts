import api from "./api";

const userReposService = async (username: string) => {
  const res = await api.get(`/users/${username}/repos?per_page=100`);
  const repos = res.data;
  console.log(repos);
  return res.data;
};

export default userReposService;
