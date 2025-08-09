import { useEffect, useRef, useState } from "react";
import "./FeedBack.css";
import userAVT from "../../assets/image/user-avt.png";

const FeedBack = ({ dataFeedBack }) => {
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
      <h2 className="title-detail">Bệnh nhân nói gì?</h2>
      {dataFeedBack.length > 3 && (
        <div className="scroll-buttons">
          <i className="fa-solid fa-arrow-left" onClick={handleScrollLeft}></i>
          <i
            className="fa-solid fa-arrow-right"
            onClick={handleScrollRight}
          ></i>
        </div>
      )}

      <div
        className={`wrapper-feedBack ${
          dataFeedBack.length > 3 ? "activeFeedBack" : ""
        }`}
        ref={wrapperRef}
      >
        {dataFeedBack.length > 0 ? (
          dataFeedBack.map((item, index) => (
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
          ))
        ) : (
          <p>Chưa có cảm nhận nào từ bệnh nhân.</p>
        )}
      </div>
    </div>
  );
};

export default FeedBack;
