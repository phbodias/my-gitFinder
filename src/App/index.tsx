import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "../pages/Search";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
