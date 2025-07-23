import React from "react";
import "./Main.css";
import dataClinic from "../../../data/clinic.json";
const Main = () => {
  return (
    <div className="container-main">
      <h2 className="title-clinic">Phòng khám</h2>
      <div className="wrapper-clinic">
        {dataClinic.map((item, index) => (
          <div className="item-clinic" key={index}>
            <img className="image-clinic" src={item.image} alt={item.name} />
            <div>
              <p className="name-clinic">{item.name}</p>
              <p className="location-clinic">
                <i class="fa-solid fa-location-dot"></i>
                {item.location}
              </p>
              <p className="openClock-clinic">
                <i class="fa-regular fa-clock"></i>
                {item.openClock}
              </p>
              <span className="status-clinic">
                <span
                  className={
                    item.status
                      ? "color-status-open-clinic"
                      : "color-status-close-clinic"
                  }
                ></span>
                <span>{item.status ? "Đang hoạt động" : "Đã đóng cửa"}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
