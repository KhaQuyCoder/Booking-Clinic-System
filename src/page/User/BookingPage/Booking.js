import Header from "../../../layouts/LayoutsUser/Header/Header.js";
import "./Booking.css";
import dataClinic from "../../../data/clinic.json";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import DetaiClinicCpn from "../../../components/DetailClinicComponent/DetaiClinicCpn.js";
import Button from "../../../components/ButtonComponent/Button.js";
import Footer from "../../../components/FooterComponent/Footer.js";
import CadendaBooking from "../../../data/CalendaBooking.json";
import FormConfiml from "../../../components/FormConfimlComponent/FormConfirm.js";
import Opacity from "../../../components/OpacityComponent/Opacity.js";
const Booking = () => {
  const { slug: slugParam } = useParams();
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [clickBooking, setClickBooking] = useState(false);

  const nameDocterBooking = JSON.parse(
    localStorage.getItem("nameDocterBooking")
  );
  const [docterFind, setDocterFind] = useState();
  const dataFilterClinic = useMemo(() => {
    return dataClinic.find((clinic) => clinic.slug === slugParam);
  }, [dataClinic]);

  useEffect(() => {
    const data = dataFilterClinic.docter.find(
      (docter) => docter.name === nameDocterBooking
    );
    setDocterFind(data);
    console.log(docterFind);
  }, [dataFilterClinic]);
  useEffect(() => {
    window.scrollTo({
      top: "true",
      behavior: "instant",
    });
  }, []);
  const handelConfirmBooking = (day, hour) => {
    setDay(day);
    setHour(hour);
    setClickBooking(true);
  };
  return (
    <>
      {clickBooking && <Opacity />}
      <div>
        {clickBooking && (
          <FormConfiml
            dataDocter={docterFind}
            dataClinic={dataFilterClinic}
            day={day}
            hour={hour}
            setClickBooking={setClickBooking}
          />
        )}
        <Header />
        <div className="container-booking">
          <h2 style={{ marginBottom: "20px", color: "#1250DC" }}>
            Thông tin phòng khám
          </h2>
          <DetaiClinicCpn clinicDetailShow={dataFilterClinic} />
          <h2 style={{ marginTop: "20px", color: "#1250DC" }}>
            Thông tin bác sĩ
          </h2>
          <div className="wrapper-booking">
            <img src={docterFind?.image} className="image-booking" />
            <div className="infor-docter-booking">
              <p className="name-docter-booking">{docterFind?.name} </p>
              <p className="specialty-booking">
                Trưởng khoa {docterFind?.specialty}{" "}
              </p>
              <p>
                <strong>Quá trình công tác:</strong>
                {docterFind?.working.map((work, index) => (
                  <p key={index}>{work}</p>
                ))}
              </p>
              <p className="des-booking">{docterFind?.description}</p>
              <Button booking={true} />
            </div>
          </div>
          <div>
            <h2 style={{ marginTop: "20px", color: "#1250DC" }}>
              Khung giờ đặt khám
            </h2>
            <table className="booking-table">
              <thead>
                <tr>
                  <th>Buổi</th>
                  {CadendaBooking.map((day, index) => (
                    <th key={index}>{day.day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Buổi sáng</td>
                  {CadendaBooking.map((day, i) => (
                    <td key={i}>
                      <div className="time-list">
                        {day.Morning.map((hour, idx) => (
                          <span
                            key={idx}
                            className="time-slot"
                            onClick={() => handelConfirmBooking(day.day, hour)}
                          >
                            {hour}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Buổi chiều</td>
                  {CadendaBooking.map((day, i) => (
                    <td key={i}>
                      <div className="time-list">
                        {day.afternoon.map((hour, idx) => (
                          <span
                            key={idx}
                            className="time-slot"
                            onClick={() => handelConfirmBooking(day.day, hour)}
                          >
                            {hour}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Booking;
