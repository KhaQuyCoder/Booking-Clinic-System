import { useEffect } from "react";
import Header from "../../../layouts/LayoutsUser/Header/Header";
import Main from "../../../layouts/LayoutsUser/Main/Main";
import "./Home.css";
import Introdution from "../../../components/IntrodutionComponent/Introdution";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: true, behavior: "instant" });
  }, []);
  return (
    <>
      <Header />
      <div className="container-home">
        <Introdution />
        <Main />
      </div>
    </>
  );
};

export default Home;
