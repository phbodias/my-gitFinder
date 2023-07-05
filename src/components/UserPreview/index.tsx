import { MdLocationPin } from "react-icons/md";

import { UserProps } from "../../types/user";
import { Content, Location, Stats } from "./style";
import UserRepos from "../../pages/Search/UserRepos";
import { Link } from "react-router-dom";

const UserPreview = (props: UserProps) => {
  return (
    <Content>
      <img src={props.avatar_url} alt="" />
      {props.name && <h2>{props.name}</h2>} {/* name isn't required */}
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
      <Link to={`/users/${props.login}`} >See the best projects</Link>
    </Content>
  );
};

export default UserPreview;
