import React, { useState, useEffect } from "react";
import styles from "../PatientManagement.module.css";

const EditPatientForm = ({ patient, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "Nam",
    dateOfBirth: "",
    hometown: "",
    phone: "",
    occupation: "",
    height: "",
    weight: "",
    medicalHistory: "",
    currentHealthStatus: "",
    bloodType: "",
    drugAllergies: "",
    address: "",
  });

  useEffect(() => {
    if (patient) {
      setFormData({
        fullName: patient.patientName || "",
        gender: patient.gender || "Nam",
        dateOfBirth: patient.dateOfBirth || "",
        hometown: patient.hometown || "",
        phone: patient.phone || "",
        occupation: patient.occupation || "",
        height: patient.height || "",
        weight: patient.weight || "",
        medicalHistory: patient.medicalHistory || "",
        currentHealthStatus: patient.currentHealthStatus || "",
        bloodType: patient.bloodType || "",
        drugAllergies: patient.drugAllergies || "",
        address: patient.address || "",
      });
    }
  }, [patient]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...patient,
      ...formData,
    });
  };

  const bloodTypes = ["A", "B", "AB", "O"];
  const healthStatuses = ["Tốt", "Bình thường", "Yếu", "Có vấn đề sức khỏe"];

  return (
    <div className={styles.editForm}>
      <h2 className={styles.formTitle}>Chỉnh sửa thông tin bệnh nhân</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formSections}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Thông tin cá nhân</h3>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Họ và tên *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Giới tính</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className={styles.select}
                >
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Ngày sinh</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Quê quán</label>
                <input
                  type="text"
                  name="hometown"
                  value={formData.hometown}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Nhập quê quán"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Số điện thoại *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Nghề nghiệp</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Nhập nghề nghiệp"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Địa chỉ</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Thông tin sức khỏe</h3>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Chiều cao (cm)</label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  className={styles.input}
                  min="0"
                  step="0.1"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Cân nặng (kg)</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className={styles.input}
                  min="0"
                  step="0.1"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Nhóm máu</label>
                <select
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleInputChange}
                  className={styles.select}
                >
                  <option value="">Chọn nhóm máu</option>
                  {bloodTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Dị ứng thuốc</label>
                <textarea
                  name="drugAllergies"
                  value={formData.drugAllergies}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  rows="3"
                  placeholder="Liệt kê các loại thuốc dị ứng (nếu có)"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Tiền sử bệnh lý</label>
                <textarea
                  name="medicalHistory"
                  value={formData.medicalHistory}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  rows="3"
                  placeholder="Khai báo tiền sử bệnh lý (nếu có)"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Tình trạng sức khỏe hiện tại
                </label>
                <select
                  name="currentHealthStatus"
                  value={formData.currentHealthStatus}
                  onChange={handleInputChange}
                  className={styles.select}
                >
                  <option value="">Chọn tình trạng</option>
                  {healthStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formButtons}>
          <button type="submit" className={styles.saveButton}>
            Cập nhật
          </button>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={onCancel}
          >
            Hủy bỏ
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPatientForm;
