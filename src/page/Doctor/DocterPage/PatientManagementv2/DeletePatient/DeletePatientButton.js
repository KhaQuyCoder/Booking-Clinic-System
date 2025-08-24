import React, { useState } from "react";
import styles from "../PatientManagement.module.css";

const DeletePatientButton = ({ patientId, patientName, onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    onDelete(patientId);
    setShowConfirm(false);
  };

  return (
    <>
      <button
        className={styles.deleteButton}
        onClick={() => setShowConfirm(true)}
      >
        <i class="fa-solid fa-trash"></i>
      </button>

      {showConfirm && (
        <div className={styles.confirmModal}>
          <div className={styles.modalContent}>
            <h3>Xác nhận xóa</h3>
            <p>
              Bạn có chắc chắn muốn xóa bệnh nhân <strong>{patientName}</strong>
              ?
            </p>
            <div className={styles.modalActions}>
              <button className={styles.confirmButton} onClick={handleDelete}>
                Xóa
              </button>
              <button
                className={styles.cancelButton}
                onClick={() => setShowConfirm(false)}
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeletePatientButton;
