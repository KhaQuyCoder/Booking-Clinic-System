import React, { useState } from "react";
import ClinicRequestTable from "./Listclinicmanager";
import styles from "../Clinicbrowse/Clinicbrowses.module.css";
import dataClinic from "../../data/Browseclinic.json";
import ClinicRequestDetails from "../Clinicbrowse/Clinicpage";
const Clinicmanagers = () => {
  const [requests, setRequests] = useState(dataClinic);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 5;
  const filteredRequests = requests.filter((request) => {
    const matchesSearch =
      request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.representative.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.address.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
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
      <h1 className={styles.title}>Quản lý phòng khám</h1>
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
      </div>

      <ClinicRequestTable
        requests={currentPatients}
        onApprove={handleApprove}
        onReject={handleReject}
        onViewDetails={handleViewDetails}
        currentPage={currentPage}
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

export default Clinicmanagers;
