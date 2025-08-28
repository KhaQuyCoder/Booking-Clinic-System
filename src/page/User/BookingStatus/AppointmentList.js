import { useContext, useEffect, useState } from "react";
import "./AppointmentList.css";
import Header from "../../../layouts/LayoutsUser/Header/Header";
import Footer from "../../../components/FooterComponent/Footer";
import appointmentsData from "../../../data/calendaDone.json";
import { State } from "../../../state/context";
const AppointmentList = () => {
  const { bookingDone } = useContext(State);
  const [appointments, setAppointments] = useState(appointmentsData);
  useEffect(() => {
    if (bookingDone && bookingDone.clinic) {
      setAppointments((prev) => [...prev, bookingDone]);
    }
  }, [bookingDone]);
  const cancelAppointment = (id) => {
    const confirmCancel = window.confirm("Bạn có chắc muốn hủy lịch khám này?");
    if (confirmCancel) {
      setAppointments((prev) => prev.filter((appt) => appt.id !== id));
    }
  };
  useEffect(() => {
    window.scrollTo({
      top: "true",
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <Header />
      <div className="appointment-container">
        <h2>Lịch khám đã đặt</h2>
        <div className="table-wrapper">
          <table className="appointment-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Phòng khám</th>
                <th>Bác sĩ</th>
                <th>Địa chỉ</th>
                <th>Ngày giờ</th>
                <th>Hình thức khám</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((appt, index) => (
                  <tr key={appt.id}>
                    <td>{index + 1}</td>
                    <td>{appt.clinic}</td>
                    <td>{appt.doctor}</td>
                    <td>{appt.address}</td>
                    <td>{appt.date + " " + appt.time}</td>
                    <td>{appt.method}</td>
                    <td>
                      <span
                        className={`status ${
                          appt.status === "Đã xác nhận"
                            ? "confirmed"
                            : "pending"
                        }`}
                      >
                        {appt.status}
                      </span>
                    </td>
                    <td>
                      {appt.status === "Đã xác nhận" ? (
                        <i class="fa-solid fa-circle-check"></i>
                      ) : (
                        <i
                          class="fa-solid fa-circle-xmark"
                          onClick={() => cancelAppointment(appt.id)}
                        ></i>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" style={{ textAlign: "center" }}>
                    Không có lịch khám nào
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AppointmentList;
