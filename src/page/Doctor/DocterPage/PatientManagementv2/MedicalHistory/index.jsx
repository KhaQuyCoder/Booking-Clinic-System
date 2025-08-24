import React from "react";
import styles from "../PatientManagement.module.css";

const MedicalHistoryModal = ({ patient, onClose }) => {
  const medicalHistory = [
    {
      id: 1,
      date: "2023-10-15",
      doctor: "BS. Nguyễn Văn A",
      diagnosis: "Viêm họng cấp",
      prescription: "Thuốc kháng sinh, giảm đau",
      notes: "Bệnh nhân cần tái khám sau 5 ngày",
    },
    {
      id: 2,
      date: "2023-08-22",
      doctor: "BS. Trần Thị B",
      diagnosis: "Cảm cúm thông thường",
      prescription: "Thuốc hạ sốt, vitamin C",
      notes: "Nghỉ ngơi, uống nhiều nước",
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN");
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>Lịch sử khám bệnh - {patient.fullName}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalContent}>
          <div className={styles.historyTable}>
            <table>
              <thead>
                <tr>
                  <th>Ngày khám</th>
                  <th>Bác sĩ</th>
                  <th>Chẩn đoán</th>
                  <th>Đơn thuốc</th>
                  <th>Ghi chú</th>
                </tr>
              </thead>
              <tbody>
                {medicalHistory.map((record) => (
                  <tr key={record.id}>
                    <td>{formatDate(record.date)}</td>
                    <td>{record.doctor}</td>
                    <td>{record.diagnosis}</td>
                    <td>{record.prescription}</td>
                    <td>{record.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <button className={styles.closeModalButton} onClick={onClose}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistoryModal;
