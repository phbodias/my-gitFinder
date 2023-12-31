import { HiOutlineCode } from "react-icons/hi";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";

import { Content, Language, Link, Stats, Title } from "./style";

import { ReposProps } from "../../types/repos";

const ProjectModel = (props: ReposProps) => {
  return (
    <Content>
      <Title>{props.name}</Title>
      <Language>
        <HiOutlineCode />
        <p>{props.language}</p>
      </Language>
      <Stats>
        <div>
          <AiOutlineStar />
          <p>{props.stargazers_count}</p>
        </div>
        <div>
          <AiOutlineFork />
          <p>{props.forks_count}</p>
        </div>
      </Stats>
      <Link>
        <a href={props.clone_url} target="_blank">
          <p>See the code</p>
          <RiGitRepositoryCommitsLine />
        </a>
      </Link>
    </Content>
  );
};

export default ProjectModel;
