import React, { useEffect, useRef, useState } from "react";
import "./FeedBack.css";
import FeedBackData from "../../data/feedBack.json";
import userAVT from "../../assets/image/user-avt.png";

const FeedBack = () => {
  const wrapperRef = useRef(null);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const updateWrapperWidth = () => {
    if (wrapperRef.current) {
      setWrapperWidth(wrapperRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    updateWrapperWidth();
    window.addEventListener("resize", updateWrapperWidth);
  }, []);

  const handleScrollLeft = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({
        left: -wrapperWidth - 10,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({
        left: wrapperWidth + 10,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container-feedback">
      <h2 className="title-feedBack">Bệnh nhân nói gì?</h2>
      <div className="scroll-buttons">
        <i className="fa-solid fa-arrow-left" onClick={handleScrollLeft}></i>
        <i className="fa-solid fa-arrow-right" onClick={handleScrollRight}></i>
      </div>

      <div className="wrapper-feedBack" ref={wrapperRef}>
        {FeedBackData.map((item, index) => (
          <div className="item-feedBack" key={index}>
            <p className="content-feedBack">{item.content}</p>
            <div className="infor-user-feedback">
              <img
                src={userAVT}
                alt={item.name}
                className="image-user-feedback"
              />
              <div className="user-feedBack">
                <p className="name-clinic-feedback">{item.name}</p>
                <p className="clinic-feedback">{item.clinic}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedBack;
