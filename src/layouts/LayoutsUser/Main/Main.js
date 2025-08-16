import React, { useContext, useEffect, useRef } from "react";
import "./Main.css";
import dataClinic from "../../../data/clinic.json";
import { State } from "../../../state/context";
import Loading from "../../../components/LoadingComponent/Loading";
import { ViewMore } from "../../../components/ButtonComponent/Button";
import CarDocter from "../../../components/DocterComponent/CarDocter";
import HealthNews from "../../../components/HealthNewsComponent/HealthNews";
import Specialty from "../../../components/SpecialtyComponent/Specialty";
import FeedBack from "../../../components/FeddBackComponent/FeedBack";
import Footer from "../../../components/FooterComponent/Footer";
import ScrollReveal from "scrollreveal";
const Main = () => {
  const { loading, resetPage } = useContext(State);
  const clinicRef = useRef();
  useEffect(() => {
    const rs = ScrollReveal({
      origin: "top",
      distance: "300px",
      duration: "2500",
    });
    rs.reveal(clinicRef.current, { origin: "left" });
  });
  return (
    <>
      {loading && (
        <div className="loading-main">
          <Loading />
        </div>
      )}
      {resetPage && (
        <div>
          <div className="container-main" ref={clinicRef}>
            <h2 className="title-clinic">Phòng khám</h2>
            <div className="wrapper-clinic">
              {dataClinic.map((item, index) => (
                <div className="item-clinic" key={index}>
                  <img
                    className="image-clinic"
                    src={item.image}
                    alt={item.name}
                  />
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
                      <span>
                        {item.status ? "Đang hoạt động" : "Đã đóng cửa"}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="title-docter">Bác sĩ</h2>
            <div className="wrapper-docter">
              {dataClinic
                .slice(0, 5)
                .map((item, index) =>
                  item.docter
                    .slice(0, 1)
                    .map((IteamDocter, idx) => (
                      <CarDocter key={`${index}-${idx}`} doctor={IteamDocter} />
                    ))
                )}
            </div>
            <div className="ViewMore-docter">
              <ViewMore />
            </div>
            <Specialty />
            <HealthNews />
            <FeedBack />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Main;
