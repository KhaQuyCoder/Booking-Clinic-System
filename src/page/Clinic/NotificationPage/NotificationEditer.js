import React, { useState } from "react";
import styles from "./NotificationEditer.module.css";

const NotificationEditor = () => {
  const [notification, setNotification] = useState({
    title: "",
    content: "",
    type: "info",
    recipients: "all",
    schedule: false,
    sendTime: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNotification((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thông báo đã được lưu và gửi thành công!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Soạn thông báo mới</h1>
        <p className={styles.subtitle}>
          Tạo và gửi thông báo đến người mọi người
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Tiêu đề thông báo
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={notification.title}
            onChange={handleChange}
            className={styles.input}
            placeholder="Nhập tiêu đề thông báo"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="content" className={styles.label}>
            Nội dung thông báo
          </label>
          <textarea
            id="content"
            name="content"
            value={notification.content}
            onChange={handleChange}
            className={styles.textarea}
            placeholder="Nhập nội dung chi tiết thông báo..."
            rows="5"
            required
          />
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label htmlFor="type" className={styles.label}>
              Loại thông báo
            </label>
            <select
              id="type"
              name="type"
              value={notification.type}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="info">Thông tin</option>
              <option value="warning">Cảnh báo</option>
              <option value="success">Thành công</option>
              <option value="error">Lỗi</option>
              <option value="urgent">Khẩn cấp</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="recipients" className={styles.label}>
              Đối tượng nhận
            </label>
            <select
              id="recipients"
              name="recipients"
              value={notification.recipients}
              onChange={handleChange}
              className={styles.select}
            >
              <option value="all">Tất cả người dùng</option>
              <option value="members">Thành viên</option>
              <option value="admins">Quản trị viên</option>
              <option value="custom">Tùy chỉnh</option>
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.checkboxContainer}>
            <input
              type="checkbox"
              name="schedule"
              checked={notification.schedule}
              onChange={handleChange}
              className={styles.checkbox}
            />
            <span className={styles.checkboxLabel}>Lên lịch gửi sau</span>
          </label>
        </div>

        {notification.schedule && (
          <div className={styles.formGroup}>
            <label htmlFor="sendTime" className={styles.label}>
              Thời gian gửi
            </label>
            <input
              type="datetime-local"
              id="sendTime"
              name="sendTime"
              value={notification.sendTime}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        )}

        <div className={styles.buttonGroup}>
          <button type="button" className={styles.cancelButton}>
            Hủy bỏ
          </button>
          <button type="submit" className={styles.submitButton}>
            Gửi thông báo
          </button>
        </div>
      </form>
    </div>
  );
};

export default NotificationEditor;
