import { Content } from "./style";
import loadingGif from "../../img/loadingGif.gif";

const Loading = () => {
  return (
    <Content>
      <img src={loadingGif} />
    </Content>
  );
};

export default Loading;
