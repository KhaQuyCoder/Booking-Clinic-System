import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/User/HomePage/Home";
import Context from "./state/context";
import { Docter } from "./page/User/DocterPage/Docter";
function App() {
  return (
    <Context>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bac-si" element={<Docter />} />
        <Route path="bac-si/page/:page" element={<Docter />} />
      </Routes>
    </Context>
  );
}

export default App;
