import { useState } from "react";
import styles from "./AppointmentApproval.module.css";
import AppointmentApprovalData from "../../../../data/AcceptMedicalAppointment.json";
const AppointmentApproval = () => {
  const [appointments, setAppointments] = useState(AppointmentApprovalData);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const approveAppointment = (id) => {
    setAppointments(
      appointments.map((app) =>
        app.id === id ? { ...app, status: "approved" } : app
      )
    );
  };

  const rejectAppointment = (id) => {
    setAppointments(
      appointments.map((app) =>
        app.id === id ? { ...app, status: "rejected" } : app
      )
    );
  };

  const filteredAppointments = appointments.filter((app) => {
    const matchesFilter = filter === "all" || app.status === filter;
    const matchesSearch =
      app.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.phone.includes(searchTerm) ||
      app.doctor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const formatDate = (dateString) => {
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
        return "Đã hủy";
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
      <div className={styles.summary}>
        <div className={styles.summaryItem}>
          <span className={styles.summaryLabel}>Tổng số:</span>
          <span className={styles.summaryValue}>{appointments.length}</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.summaryLabel}>Chờ duyệt:</span>
          <span className={styles.summaryValue}>
            {appointments.filter((a) => a.status === "pending").length}
          </span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.summaryLabel}>Đã duyệt:</span>
          <span className={styles.summaryValue}>
            {appointments.filter((a) => a.status === "approved").length}
          </span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.summaryLabel}>Đã hủy:</span>
          <span className={styles.summaryValue}>
            {appointments.filter((a) => a.status === "rejected").length}
          </span>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.controls}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Tìm kiếm theo tên bệnh nhân, số điện thoại, bác sĩ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <span className={styles.searchIcon}>
              {" "}
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>

          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Lọc theo trạng thái:</span>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="all">Tất cả</option>
              <option value="pending">Chờ duyệt</option>
              <option value="approved">Đã duyệt</option>
              <option value="rejected">Đã hủy</option>
            </select>
          </div>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Tên bệnh nhân</th>
                <th>Giới tính</th>
                <th>Tuổi</th>
                <th>Địa chỉ</th>
                <th>Số điện thoại</th>
                <th>Ngày khám</th>
                <th>Giờ khám</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((app, index) => (
                  <tr key={app.id} className={styles.tableRow}>
                    <td className={styles.tableCell}>
                      <div className={styles.patientInfo}>
                        <span className={styles.patientName}>
                          {app.patientName}
                        </span>
                        <span className={styles.patientId}>ID: {app.id}</span>
                      </div>
                    </td>
                    <td className={styles.tableCell}>{app.gender}</td>
                    <td className={styles.tableCell}>{app.age}</td>
                    <td className={styles.tableCell}>
                      <div className={styles.address}>{app.address}</div>
                    </td>
                    <td className={styles.tableCell}>{app.phone}</td>
                    <td className={styles.tableCell}>
                      {formatDate(app.appointmentDate)}
                    </td>
                    <td className={styles.tableCell}>{app.appointmentTime}</td>
                    <td className={styles.tableCell}>
                      <span
                        className={`${styles.status} ${getStatusClass(
                          app.status
                        )}`}
                      >
                        {getStatusText(app.status)}
                      </span>
                    </td>
                    <td className={styles.tableCell}>
                      <div className={styles.actions}>
                        {app.status === "pending" && (
                          <>
                            <button
                              className={styles.approveButton}
                              onClick={() => approveAppointment(app.id)}
                            >
                              Duyệt
                            </button>
                            <button
                              className={styles.rejectButton}
                              onClick={() => rejectAppointment(app.id)}
                            >
                              Hủy
                            </button>
                          </>
                        )}
                        {app.status !== "pending" && (
                          <span className={styles.noActions}>Đã xử lý</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="12" className={styles.noData}>
                    Không có dữ liệu đặt lịch nào
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AppointmentApproval;
