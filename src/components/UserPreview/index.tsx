import { MdLocationPin } from "react-icons/md";

import { UserProps } from "../../types/user";
import { Link } from "react-router-dom";
import { Content, Location, Stats } from "./style";

const UserPreview = (props: UserProps) => {
  return (
    <Content>
      <img src={props.avatar_url} alt="" />
      <h2>{props.name}</h2>
      {props.location && ( //location ins't required
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
      <Link to="/">See the best projects</Link>
    </Content>
  );
};

export default UserPreview;
