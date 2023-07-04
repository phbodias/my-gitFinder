import { MdLocationPin } from "react-icons/md";

import { UserProps } from "../../types/user";
import { Content, Location, Stats } from "./style";

const UserPreview = (props: UserProps) => {
  return (
    <Content>
      <img src={props.avatar_url} alt="" />
      <h2>{props.name}</h2>
      {props.location && ( //location isn't required
        <Location>
          <MdLocationPin />
          <span>{props.location}</span>
        </Location>
      )}
      <Stats>
        <div>
          <p>Followers:</p>
          <p>{props.followers}</p>
        </div>
        <div>
          <p>Following:</p>
          <p>{props.following}</p>
        </div>
      </Stats>
      <a href={props.url} target="_blank">
        See the projects
      </a>
    </Content>
  );
};

export default UserPreview;
