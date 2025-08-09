import { useContext, useEffect, useRef } from "react";
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
import ClinicCpn from "../../../components/ClinicComponent/ClinicCpn";
import FeedBackData from "../../../data/feedBack.json";

const Main = () => {
  const { loading, resetPage } = useContext(State);
  const clinicRef = useRef();
  useEffect(() => {
    const rs = ScrollReveal({
      origin: "top",
      distance: "300px",
      duration: "2500",
    });
    rs.reveal(clinicRef?.current, { origin: "left" });

    return () => rs.destroy();
  }, []);
  return (
    <>
      {loading && (
        <div className="loading-main">
          <Loading />
        </div>
      )}
      {resetPage && (
        <div className="test">
          <div className="container-main" ref={clinicRef}>
            <h2 className="title-clinic">Phòng khám</h2>
            <div className="wrapper-clinic">
              {dataClinic.map((item, index) => (
                <ClinicCpn item={item} index={index} key={index} />
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
                      <CarDocter
                        key={`${index}-${idx}`}
                        doctor={IteamDocter}
                        item={item}
                      />
                    ))
                )}
            </div>
            <div className="ViewMore-docter">
              <ViewMore path={"/bac-si"} />
            </div>
            <Specialty />
            <HealthNews />
            <FeedBack dataFeedBack={FeedBackData} />
          </div>
        </div>
      )}
      {!loading && <Footer />}
    </>
  );
};

export default Main;
