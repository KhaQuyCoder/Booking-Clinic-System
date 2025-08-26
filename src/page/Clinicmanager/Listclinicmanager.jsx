import styles from "../Clinicbrowse/Listbrowseclinic.module.css";

const ClinicRequestTable = ({
  requests,
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

  return (
    <>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID Phòng khám</th>
              <th>Tên phòng khám</th>
              <th>Người đại diện</th>
              <th>Loại phòng khám</th>
              <th>Địa chỉ</th>
              <th>Ngày đăng ký</th>
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
                  <td>{request.representative}</td>
                  <td>{request.type}</td>
                  <td>
                    <div className={styles.address}>{request.address}</div>
                  </td>
                  <td>{formatDate(request.registrationDate)}</td>

                  <td>
                    <div className={styles.actions}>
                      <button
                        className={styles.viewButton}
                        onClick={() => onViewDetails(request)}
                      >
                        <i class="fa-solid fa-eye"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className={styles.noData}>
                  Không có phòng khám nào.
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

export default ClinicRequestTable;
