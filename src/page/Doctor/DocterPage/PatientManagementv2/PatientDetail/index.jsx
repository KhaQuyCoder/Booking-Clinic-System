import React from "react";
import styles from "../PatientManagement.module.css";

const PatientDetailsModal = ({ patient, onClose }) => {
  const calculateAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Chưa cập nhật";
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN");
  };

  const calculateBMI = (height, weight) => {
    if (!height || !weight) return "Chưa đủ thông tin";
    const heightInMeter = height / 100;
    const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(1);

    let status = "";
    if (bmi < 18.5) status = "Thiếu cân";
    else if (bmi >= 18.5 && bmi < 23) status = "Bình thường";
    else if (bmi >= 23 && bmi < 25) status = "Tiền béo phì";
    else if (bmi >= 25 && bmi < 30) status = "Béo phì độ I";
    else status = "Béo phì độ II";

    return `${bmi} (${status})`;
  };

  const displayName = patient.fullName || patient.patientName;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>Thông tin chi tiết bệnh nhân</h2>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalContent}>
          <div className={styles.patientProfile}>
            <div className={styles.profileInfo}>
              <h3>{displayName}</h3>
              <p>Mã bệnh nhân: {patient.id}</p>
            </div>
          </div>

          <div className={styles.detailSections}>
            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>Thông tin cá nhân</h4>
              <div className={styles.detailGrid}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Họ và tên:</span>
                  <span className={styles.detailValue}>{displayName}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Giới tính:</span>
                  <span className={styles.detailValue}>{patient.gender}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Ngày sinh:</span>
                  <span className={styles.detailValue}>
                    {formatDate(patient.dateOfBirth || patient.date)}
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Tuổi:</span>
                  <span className={styles.detailValue}>
                    {patient.dateOfBirth
                      ? `${calculateAge(patient.dateOfBirth)} tuổi`
                      : patient.age
                      ? `${patient.age} tuổi`
                      : "Chưa cập nhật"}
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Quê quán:</span>
                  <span className={styles.detailValue}>
                    {patient.hometown || "Chưa cập nhật"}
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Nghề nghiệp:</span>
                  <span className={styles.detailValue}>
                    {patient.occupation || "Chưa cập nhật"}
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Số điện thoại:</span>
                  <span className={styles.detailValue}>{patient.phone}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Email:</span>
                  <span className={styles.detailValue}>
                    {patient.email || "Chưa cập nhật"}
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Địa chỉ:</span>
                  <span className={styles.detailValue}>
                    {patient.address || "Chưa cập nhật"}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>Thông tin sức khỏe</h4>
              <div className={styles.detailGrid}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Chiều cao:</span>
                  <span className={styles.detailValue}>
                    {patient.height ? `${patient.height} cm` : "Chưa cập nhật"}
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Cân nặng:</span>
                  <span className={styles.detailValue}>
                    {patient.weight ? `${patient.weight} kg` : "Chưa cập nhật"}
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Chỉ số BMI:</span>
                  <span className={styles.detailValue}>
                    {calculateBMI(patient.height, patient.weight)}
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Nhóm máu:</span>
                  <span className={styles.detailValue}>
                    {patient.bloodType || "Chưa cập nhật"}
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Dị ứng thuốc:</span>
                  <span className={styles.detailValue}>
                    {patient.drugAllergies || "Không có"}
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Tiền sử bệnh lý:</span>
                  <span className={styles.detailValue}>
                    {patient.medicalHistory || "Không có"}
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>
                    Tình trạng sức khỏe hiện tại:
                  </span>
                  <span className={styles.detailValue}>
                    {patient.currentHealthStatus || "Bình thường"}
                  </span>
                </div>
              </div>
            </div>
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

export default PatientDetailsModal;
