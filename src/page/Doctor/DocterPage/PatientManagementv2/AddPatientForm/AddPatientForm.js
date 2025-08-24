import React, { useState } from "react";
import styles from "../PatientManagement.module.css";

const AddPatientForm = ({ onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    patientName: "",
    age: "Nam",
    phone: "",
    date: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className={styles.addForm}>
      <h2 className={styles.formTitle}>Thêm bệnh nhân mới</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Họ và tên *</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleInputChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Giới tính</label>
            <select
              name="gender"
              value={formData.age}
              onChange={handleInputChange}
              className={styles.select}
            >
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Khác">Khác</option>
            </select>
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
            <label className={styles.label}>Ngày sinh</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className={styles.input}
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

        <div className={styles.formButtons}>
          <button type="submit" className={styles.saveButton}>
            Lưu thông tin
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

export default AddPatientForm;
