import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/User/HomePage/Home";
import Context from "./state/context";
import { Docter } from "./page/User/DocterPage/Docter";
import Clinic from "./page/User/ClinicPage/Clinic";
import Question from "./page/User/QuestionPage/Question";
function App() {
  return (
    <Context>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bac-si" element={<Docter />} />
        <Route path="bac-si/page/:page" element={<Docter />} />
        <Route path="phong-kham" element={<Clinic />} />
        <Route path="phong-kham/page/:page" element={<Clinic />} />
        <Route path="tu-van" element={<Question />} />
        <Route path="tu-van/page/:page" element={<Question />} />
      </Routes>
    </Context>
  );
}

export default App;
