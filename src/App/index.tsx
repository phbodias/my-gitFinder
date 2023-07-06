import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "../pages/Search";
import UserRepos from "../pages/UserRepos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />}></Route>
        <Route path="/users/:username" element={<UserRepos />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
