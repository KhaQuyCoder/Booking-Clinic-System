import Header from "../../../layouts/LayoutsUser/Header/Header.js";
import "./Booking.css";
import dataClinic from "../../../data/clinic.json";
import { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import DetaiClinicCpn from "../../../components/DetailClinicComponent/DetaiClinicCpn.js";
import Button from "../../../components/ButtonComponent/Button.js";
import Footer from "../../../components/FooterComponent/Footer.js";
import CadendaBooking from "../../../data/CalendaBooking.json";
import FormConfiml from "../../../components/FormConfimlComponent/FormConfirm.js";
import Opacity from "../../../components/OpacityComponent/Opacity.js";
import Message from "../../../components/MessageComponent/Message.js";
import { State } from "../../../state/context.js";
import calendaDone from "../../../data/calendaDone.json";
const Booking = () => {
  const { slug: slugParam } = useParams();
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [clickBooking, setClickBooking] = useState(false);
  const { messageRef } = useContext(State);
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
  const handelShowMessage = () => {
    messageRef.current.style.transform = "translateX(0%)";
    setClickBooking(false);
    setTimeout(() => {
      if (messageRef.current)
        messageRef.current.style.transform = "translateX(104%)";
    }, 2000);
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
            handelShowMessage={handelShowMessage}
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
              <p className="name-docter-booking">
                {docterFind?.name} -{" "}
                <span className="specialty-booking">
                  Trưởng khoa {docterFind?.specialty}{" "}
                </span>{" "}
              </p>
              <p style={{ margin: "7px 0" }}>
                <strong>Quá trình công tác:</strong>
                {docterFind?.working.slice(0, 7).map((work, index) => (
                  <p key={index}>{work}</p>
                ))}
              </p>
              <Button
                booking={true}
                path={`/xem-chi-tiet-bac-si/${docterFind?.slugDocter}`}
                idDocter={docterFind?.idDocter}
              />
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
                        {day.Morning.map((timeSlot, idx) => {
                          const isBooked = calendaDone.some(
                            (c) =>
                              c.date.trim() === day.month.trim() &&
                              c.time.trim() === timeSlot.trim()
                          );

                          return (
                            <div
                              key={idx}
                              className={isBooked ? "doneBooking" : "time-slot"}
                              onClick={() =>
                                handelConfirmBooking(day.day, timeSlot)
                              }
                            >
                              {timeSlot}
                            </div>
                          );
                        })}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Buổi chiều</td>
                  {CadendaBooking.map((day, i) => (
                    <td key={i}>
                      <div className="time-list">
                        {day.afternoon.map((timeSlot, idx) => {
                          const checkCaledaDoneBooking = calendaDone.some(
                            (c) =>
                              c.date.trim() === day.month.trim() &&
                              c.time.trim() === timeSlot.trim()
                          );

                          return (
                            <div
                              key={idx}
                              className={
                                checkCaledaDoneBooking
                                  ? "doneBooking"
                                  : "time-slot"
                              }
                              onClick={() =>
                                handelConfirmBooking(day.day, timeSlot)
                              }
                            >
                              {timeSlot}
                            </div>
                          );
                        })}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Message ref={messageRef} />
        <Footer />
      </div>
    </>
  );
};

export default Booking;
