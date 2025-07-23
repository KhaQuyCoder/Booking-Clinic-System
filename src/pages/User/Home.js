import React from "react";
import Header from "../../layouts/LayoutUser/Header/Header";
import Main from "../../layouts/LayoutUser/Main/Main";
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
