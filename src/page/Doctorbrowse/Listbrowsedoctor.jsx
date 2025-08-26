import React from "react";
import styles from "../Clinicbrowse/Listbrowseclinic.module.css";

const Listbrowsedoctor = ({
  requests,
  onApprove,
  onReject,
  onViewDetails,
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN");
  };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
    <>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID Bác sĩ</th>
              <th>Tên Bác sĩ</th>
              <th>Tuổi</th>
              <th>Giới tính</th>
              <th>Học hàm</th>
              <th>Địa chỉ</th>
              <th>Ngày đăng ký</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {requests.length > 0 ? (
              requests.map((request) => (
                <tr key={request.id}>
                  <td>
                    <span className={styles.clinicId}>{request.id}</span>
                  </td>
                  <td>
                    <div className={styles.clinicName}>{request.name}</div>
                  </td>
                  <td>{request.certificate}</td>
                  <td>
                    <div className={styles.address}>{request.gender}</div>
                  </td>
                  <td>{request.academictitle}</td>
                  <td>{request.hometown}</td>
                  <td>{request.timesent}</td>
                  <td>
                    <span
                      className={`${styles.status} ${getStatusClass(
                        request.status
                      )}`}
                    >
                      {getStatusText(request.status)}
                    </span>
                  </td>
                  <td>
                    <div className={styles.actions}>
                      <button
                        className={styles.viewButton}
                        onClick={() => onViewDetails(request)}
                      >
                        <i class="fa-solid fa-eye"></i>
                      </button>
                      {request.status === "pending" && (
                        <>
                          <button
                            className={styles.approveButton}
                            onClick={() => onApprove(request.id)}
                          >
                            <i class="fa-solid fa-check"></i>
                          </button>
                          <button
                            className={styles.rejectButton}
                            onClick={() => onReject(request.id)}
                          >
                            <i class="fa-solid fa-square-xmark"></i>
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className={styles.noData}>
                  Không có yêu cầu đăng ký nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className={styles.pagination}>
        <button
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
        >
          <i className="fa-solid fa-square-caret-left"></i>
        </button>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx + 1}
            className={currentPage === idx + 1 ? styles.activePage : ""}
            onClick={() => paginate(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => paginate(currentPage + 1)}
        >
          <i className="fa-solid fa-square-caret-right"></i>
        </button>
      </div>
    </>
  );
};

export default Listbrowsedoctor;
