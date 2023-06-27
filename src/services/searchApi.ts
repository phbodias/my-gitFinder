import { UserProps } from "../types/user";
import api from "./api";

export const searchUser = async (username: string) => {
  const res = await api.get(`/users/${username}`);

  const { avatar_url, login, location, followers, following } = res.data;

  const userData: UserProps = {
    avatar_url,
    login,
    location,
    followers,
    following,
  };

  return userData;
};
