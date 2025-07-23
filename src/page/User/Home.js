import React from "react";
import Header from "../../layouts/LayoutsUser/Header/Header";
import Main from "../../layouts/LayoutsUser/Main/Main";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="container-home">
        <Header />
        <Main />
      </div>
    </>
  );
};

export default Home;
