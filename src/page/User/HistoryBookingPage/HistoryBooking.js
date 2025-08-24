import { useState, useEffect } from "react";
import styles from "./HistoryBooking.module.css";
import Header from "../../../layouts/LayoutsUser/Header/Header";
import HistoryBookingDat from "../../../data/HistoryBooking.json";
import Footer from "../../../components/FooterComponent/Footer";
const HistoryBooking = () => {
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  useEffect(() => {
    window.scrollTo({
      top: "true",
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <Header />
      <div className={styles.historyContainer}>
        <h2>Lịch sử khám bệnh</h2>
        <div className={styles.tableResponsive}>
          <table className={styles.historyTable}>
            <thead>
              <tr>
                <th>STT</th>
                <th>Phòng khám</th>
                <th>Bác sĩ</th>
                <th>Địa chỉ</th>
                <th>Triệu chứng</th>
                <th>Hóa đơn</th>
                <th>Ngày khám</th>
                <th>Chuyên khoa</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {HistoryBookingDat.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.clinic}</td>
                  <td>{item.doctor}</td>
                  <td>{item.address}</td>
                  <td>{item.symptoms}</td>
                  <td>
                    <i
                      class="fa-regular fa-eye"
                      onClick={() => setSelectedInvoice(item.invoice)}
                    ></i>
                  </td>
                  <td>{item.date}</td>
                  <td>{item.specialty}</td>
                  <td className={styles.statusDone}>
                    <i class="fa-solid fa-circle-check"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedInvoice && (
          <div
            className={styles.modalOverlay}
            onClick={() => setSelectedInvoice(null)}
          >
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>Chi tiết hóa đơn</h3>
              <table>
                <thead>
                  <tr>
                    <th>Tên thuốc</th>
                    <th>Số lượng</th>
                    <th>Cách dùng</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedInvoice.medicine.map((med, idx) => (
                    <tr key={idx}>
                      <td>{med.name}</td>
                      <td>{med.qty}</td>
                      <td>{med.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={styles.total}>Tổng tiền: {selectedInvoice.total}</p>
              <button onClick={() => setSelectedInvoice(null)}>Đóng</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default HistoryBooking;
