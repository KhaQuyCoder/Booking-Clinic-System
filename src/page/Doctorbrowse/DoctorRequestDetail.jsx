import styles from "../Clinicbrowse/Clinicpage.module.css";

const Doctorbrowses = ({ request, onClose }) => {
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
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>Chi tiết yêu cầu đăng ký bác sĩ</h2>
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
                  <span className={styles.infoLabel}>ID Bác sĩ:</span>
                  <span className={styles.infoValue}>{request.id}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Tên Bác sĩ:</span>
                  <span className={styles.infoValue}>{request.name}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Giới tính:</span>
                  <span className={styles.infoValue}>{request.gender}</span>
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
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Ngày sinh:</span>
                  <span className={styles.infoValue}>
                    {request.dateofbirth}
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Địa chỉ cụ thể:</span>
                  <span className={styles.infoValue}>{request.hometown}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Học hàm:</span>
                  <span className={styles.infoValue}>
                    {request.academictitle}
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Chuyên khoa:</span>
                  <span className={styles.infoValue}>{request.specialty}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Số điện thoại:</span>
                  <span className={styles.infoValue}>{request.phone}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Email:</span>
                  <span className={styles.infoValue}>{request.email}</span>
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
                  <span className={styles.infoValue}>{request.idnumber}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Ngày cấp:</span>
                  <span className={styles.infoValue}>{request.dateofid}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Nơi cấp:</span>
                  <span className={styles.infoValue}>{request.placeofid}</span>
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

export default Doctorbrowses;
