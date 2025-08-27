import React from "react";
import styles from "./Clinicpage.module.css";

const ClinicRequestDetails = ({ request, onClose }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "Chưa cập nhật";
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN");
  };

  const getStatusText = (status) => {
    switch (status) {
      case "pending":
        return "Chờ duyệt";
      case "approved":
        return "Đã duyệt";
      case "rejected":
        return "Đã từ chối";
      default:
        return status;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "pending":
        return styles.statusPending;
      case "approved":
        return styles.statusApproved;
      case "rejected":
        return styles.statusRejected;
      default:
        return "";
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={`${styles.modal} ${styles.modalClinic}`}>
        <div className={styles.modalHeader}>
          <h2>Chi tiết yêu cầu đăng ký phòng khám</h2>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalContent}>
          <div className={styles.clinicInfo}>
            <div className={styles.infoSection}>
              <h3 className={styles.sectionTitle}>Thông tin cơ bản</h3>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>ID Phòng khám:</span>
                  <span className={styles.infoValue}>{request.id}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Tên phòng khám:</span>
                  <span className={styles.infoValue}>{request.name}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>
                    Loại hình phòng khám:
                  </span>
                  <span className={styles.infoValue}>{request.type}</span>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Ngày thành lập:</span>
                  <span className={styles.infoValue}>
                    {formatDate(request.establishmentDate)}
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Địa chỉ cụ thể:</span>
                  <span className={styles.infoValue}>{request.address}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Xã/Phường:</span>
                  <span className={styles.infoValue}>{request.ward}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Tỉnh/Thành phố:</span>
                  <span className={styles.infoValue}>{request.city}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Số điện thoại:</span>
                  <span className={styles.infoValue}>{request.phone}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Email:</span>
                  <span className={styles.infoValue}>{request.email}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Giờ hoạt động:</span>
                  <span className={styles.infoValue}>
                    {request.operatingHours}
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Trạng thái:</span>
                  <span
                    className={`${styles.infoValue} ${getStatusClass(
                      request.status
                    )}`}
                  >
                    {getStatusText(request.status)}
                  </span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Mô tả ngắn:</span>
                <span className={styles.infoValue}>{request.description}</span>
              </div>
            </div>

            <div className={styles.infoSection}>
              <h3 className={styles.sectionTitle}>Thông tin giấy phép</h3>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Số giấy phép:</span>
                  <span className={styles.infoValue}>
                    {request.licenseNumber}
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Ngày cấp:</span>
                  <span className={styles.infoValue}>
                    {formatDate(request.issueDate)}
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Nơi cấp:</span>
                  <span className={styles.infoValue}>{request.issuePlace}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Tệp đính kèm:</span>
                  <span className={styles.infoValue}>
                    {request.attachment ? (
                      <a
                        href={request.attachment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.attachmentLink}
                      >
                        Xem giấy phép
                      </a>
                    ) : (
                      "Không có tệp đính kèm"
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.infoSection}>
              <h3 className={styles.sectionTitle}>Thông tin người đại diện</h3>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Tên người đại diện:</span>
                  <span className={styles.infoValue}>
                    {request.representative}
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>
                    Số điện thoại cá nhân:
                  </span>
                  <span className={styles.infoValue}>
                    {request.representativePhone}
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>
                    Tên tài khoản/Email quản trị:
                  </span>
                  <span className={styles.infoValue}>{request.adminEmail}</span>
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

export default ClinicRequestDetails;
