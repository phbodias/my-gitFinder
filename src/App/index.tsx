import { Outlet } from "react-router-dom";
import Content from "./style";

function App() {
  return (
    <Content>
      <h1>GitFinder</h1>
      <Outlet />
    </Content>
  );
}

export default App;
