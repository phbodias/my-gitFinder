import { MdLocationPin } from "react-icons/md";

import { UserProps } from "../../types/user";
import { Link } from "react-router-dom";

const UserPreview = (props: UserProps) => {
  return (
    <div>
      <img src={props.avatar_url} alt="" />
      <h2>{props.login}</h2>
      <p>
        <MdLocationPin />
        <span>{props.location}</span>
      </p>
      <div>
        <div>
          <p>Followers</p>
          <p>{props.followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{props.following}</p>
        </div>
        <Link to="/">See the best projects</Link>
      </div>
    </div>
  );
};

export default UserPreview;
