import React, { useState } from "react";
import styles from "./ScheduleAppointment.module.css";

const ScheduleAppointment = () => {
  const [form, setForm] = useState({
    session: "",
    timeSlot: "",
    date: "",
  });

  const [appointments, setAppointments] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.session || !form.timeSlot || !form.date) {
      alert("Vui lòng chọn đầy đủ thông tin!");
      return;
    }
    setAppointments([...appointments, form]);
    setForm({ session: "", timeSlot: "", date: "" });
  };
  const handelDeleCalenda = (hour) => {
    const tmp = appointments.filter((apt) => apt.timeSlot !== hour);
    setAppointments(tmp);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftCol}>
        <h2 className={styles.title}>Thiết lập lịch khám</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label>Chọn buổi</label>
            <select
              name="session"
              value={form.session}
              onChange={handleChange}
              required
            >
              <option value="">-- Chọn buổi --</option>
              <option value="Sáng">Sáng</option>
              <option value="Chiều">Chiều</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Chọn khung giờ</label>
            <select
              name="timeSlot"
              value={form.timeSlot}
              onChange={handleChange}
              required
            >
              <option value="">-- Chọn khung giờ --</option>
              <option value="08:00 - 08:30">08:00 - 08:30</option>
              <option value="09:00 - 09:30">09:00 - 09:30</option>
              <option value="10:00 - 10:30">10:00 - 10:30</option>
              <option value="11:00 - 11:30">11:00 - 11:30</option>
              <option value="13:30 - 14:00">13:30 - 14:00</option>
              <option value="14:30 - 15:00">14:30 - 15:00</option>
              <option value="15:30 - 16:00">15:30 - 16:00</option>
              <option value="16:30 - 17:00">16:30 - 17:00</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Chọn ngày</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.btn}>
            Xác nhận đặt lịch
          </button>
        </form>
      </div>

      <div className={styles.rightCol}>
        <h2 className={styles.title}>Lịch khám đã thiết lập</h2>
        {appointments.length === 0 ? (
          <p className={styles.empty}>Chưa có lịch nào được thiết lập</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Ngày</th>
                <th>Buổi</th>
                <th>Khung giờ</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((a, idx) => (
                <tr key={idx}>
                  <td>{a.date}</td>
                  <td>{a.session}</td>
                  <td>{a.timeSlot}</td>
                  <td>
                    <i
                      class="fa-solid fa-trash"
                      onClick={() => handelDeleCalenda(a.timeSlot)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ScheduleAppointment;
