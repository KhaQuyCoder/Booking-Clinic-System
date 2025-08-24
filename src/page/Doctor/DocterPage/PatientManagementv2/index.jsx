import React, { useState } from "react";
import AddPatientForm from "./AddPatientForm/AddPatientForm";
import EditPatientForm from "./PatientEdit/index";
import PatientDetailsModal from "./PatientDetail/index";
import MedicalHistoryModal from "./MedicalHistory/index";
import DeletePatientButton from "./DeletePatient/DeletePatientButton";
import styles from "./PatientManagement.module.css";
import dataUser from "../../../../data/AcceptMedicalAppointment.json";
const PatientManagement = () => {
  const [patients, setPatients] = useState(dataUser);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingPatient, setEditingPatient] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  const filteredPatients = patients.filter(
    (patient) =>
      patient.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm)
  );

  const handleAddPatient = (newPatient) => {
    const newId = `${String(patients.length + 1)}`;
    const patientToAdd = {
      ...newPatient,
      id: newId,
    };
    setPatients([...patients, patientToAdd]);
    setShowAddForm(false);
  };

  const handleEditPatient = (updatedPatient) => {
    const PatientEdit = {
      ...updatedPatient,
      patientName: updatedPatient.fullName || updatedPatient.patientName,
    };

    setPatients(
      patients.map((patient) =>
        patient.id === PatientEdit.id ? PatientEdit : patient
      )
    );
    setEditingPatient(null);
  };

  const handleDeletePatient = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

  const viewPatientDetails = (patient) => {
    setSelectedPatient(patient);
    setShowDetailModal(true);
  };

  const viewMedicalHistory = (patient) => {
    setSelectedPatient(patient);
    setShowHistoryModal(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Quản lý Bệnh nhân</h1>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Tìm kiếm theo mã, tên hoặc số điện thoại..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <span className={styles.searchIcon}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>

        <button
          className={styles.addButton}
          onClick={() => setShowAddForm(true)}
        >
          + Thêm bệnh nhân
        </button>
      </div>

      {showAddForm && (
        <AddPatientForm
          onSave={handleAddPatient}
          onCancel={() => setShowAddForm(false)}
        />
      )}

      {editingPatient && (
        <EditPatientForm
          patient={editingPatient}
          onSave={handleEditPatient}
          onCancel={() => setEditingPatient(null)}
        />
      )}

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Mã BN</th>
              <th>Họ tên</th>
              <th>Giới tính</th>
              <th>Số điện thoại</th>
              <th>Ngày sinh</th>
              <th>Tuổi</th>
              <th>Địa chỉ</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td>
                  <span className={styles.patientId}>{patient.id}</span>
                </td>
                <td>
                  <div className={styles.patientName}>
                    {patient.patientName || patient.fullName}
                  </div>
                </td>
                <td>{patient.gender}</td>
                <td>{patient.phone}</td>
                <td>{patient.date}</td>

                <td>{patient.age} tuổi</td>
                <td>{patient.address}</td>

                <td>
                  <div className={styles.actions}>
                    <button
                      className={styles.viewButton}
                      onClick={() => viewPatientDetails(patient)}
                    >
                      <i class="fa-solid fa-eye"></i>
                    </button>
                    <button
                      className={styles.historyButton}
                      onClick={() => viewMedicalHistory(patient)}
                    >
                      <i class="fa-solid fa-clock-rotate-left"></i>
                    </button>
                    <button
                      className={styles.editButton}
                      onClick={() => setEditingPatient(patient)}
                    >
                      <i class="fa-solid fa-pen"></i>
                    </button>
                    <DeletePatientButton
                      patientId={patient.id}
                      patientName={patient.fullName}
                      onDelete={handleDeletePatient}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showDetailModal && selectedPatient && (
        <PatientDetailsModal
          patient={selectedPatient}
          onClose={() => setShowDetailModal(false)}
        />
      )}

      {showHistoryModal && selectedPatient && (
        <MedicalHistoryModal
          patient={selectedPatient}
          onClose={() => setShowHistoryModal(false)}
        />
      )}
    </div>
  );
};

export default PatientManagement;
