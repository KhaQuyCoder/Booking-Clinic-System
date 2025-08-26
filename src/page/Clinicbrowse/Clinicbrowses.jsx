import React, { useState } from "react";
import ClinicRequestTable from "./Listbrowseclinic";
import ClinicRequestDetails from "./Clinicpage";
import styles from "./Clinicbrowses.module.css";
import dataClinic from "../../data/Browseclinic.json";
const ClinicRequestManagement = () => {
  const [requests, setRequests] = useState(dataClinic);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 5;
  const filteredRequests = requests.filter((request) => {
    const matchesSearch =
      request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.representative.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || request.status === filter;
    return matchesSearch && matchesFilter;
  });
  const totalPages = Math.ceil(filteredRequests.length / patientsPerPage);
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = filteredRequests.slice(
    indexOfFirstPatient,
    indexOfLastPatient
  );
  const handleApprove = (id) => {
    setRequests(
      requests.map((request) =>
        request.id === id ? { ...request, status: "approved" } : request
      )
    );
  };

  const handleReject = (id) => {
    setRequests(
      requests.map((request) =>
        request.id === id ? { ...request, status: "rejected" } : request
      )
    );
  };

  const handleViewDetails = (request) => {
    setSelectedRequest(request);
    setShowDetailModal(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Duyệt yêu cầu đăng ký phòng khám</h1>
      <div className={styles.controls}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Tìm kiếm theo tên phòng khám, người đại diện hoặc địa chỉ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <span className={styles.searchIcon}>
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
            <option value="rejected">Đã từ chối</option>
          </select>
        </div>
      </div>

      <ClinicRequestTable
        requests={currentPatients}
        onApprove={handleApprove}
        onReject={handleReject}
        onViewDetails={handleViewDetails}
        currentPage={currentPatients}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />

      {showDetailModal && selectedRequest && (
        <ClinicRequestDetails
          request={selectedRequest}
          onClose={() => setShowDetailModal(false)}
        />
      )}
    </div>
  );
};

export default ClinicRequestManagement;
