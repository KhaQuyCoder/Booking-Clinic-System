import React, { useState } from 'react';
import patientsData from '../../../../data/Patient.json';

const ITEMS_PER_PAGE = 10;

const PatientManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Tổng số trang
  const totalPages = Math.ceil(patientsData.length / ITEMS_PER_PAGE);

  // Lấy dữ liệu bệnh nhân trang hiện tại
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPatients = patientsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Các hàm sự kiện tạm thời
  const handleViewDetails = (patient) => alert(`Xem chi tiết bệnh nhân: ${patient.name}`);
  const handleEdit = (patient) => alert(`Sửa thông tin bệnh nhân: ${patient.name}`);
  const handleViewMedicalRecord = (patient) => alert(`Xem hồ sơ bệnh án: ${patient.name}`);
  const handleViewHistory = (patient) => alert(`Xem lịch sử khám: ${patient.name}`);

  return (
    <div style={{ padding: 20 }}>
      <h2>Quản lý bệnh nhân</h2>
      <table
        style={{ width: '100%', borderCollapse: 'collapse' }}
        border="1"
      >
        <thead>
          <tr style={{ backgroundColor: '#eee' }}>
            <th>STT</th>
            <th>Mã bệnh nhân</th>
            <th>Họ tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Số điện thoại</th>
            <th>Hoạt động</th>
          </tr>
        </thead>
        <tbody>
          {currentPatients.map((patient, index) => (
            <tr key={patient.id}>
              <td style={{ textAlign: 'center' }}>{startIndex + index + 1}</td>
              <td style={{ textAlign: 'center' }}>{patient.id}</td>
              <td>{patient.name}</td>
              <td style={{ textAlign: 'center' }}>{patient.gender}</td>
              <td style={{ textAlign: 'center' }}>{patient.dob}</td>
              <td style={{ textAlign: 'center' }}>{patient.phone}</td>
              <td style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                <button onClick={() => handleViewDetails(patient)}>Xem chi tiết</button>
                <button onClick={() => handleEdit(patient)}>Sửa</button>
                <button onClick={() => handleViewMedicalRecord(patient)}>Hồ sơ bệnh án</button>
                <button onClick={() => handleViewHistory(patient)}>Lịch sử khám</button>
              </td>
            </tr>
          ))}
          {currentPatients.length === 0 && (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>
                Chưa có bệnh nhân
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Phân trang */}
      <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', gap: 8 }}>
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Trang trước
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              fontWeight: currentPage === i + 1 ? 'bold' : 'normal',
              backgroundColor: currentPage === i + 1 ? '#2469DF' : 'white',
              color: currentPage === i + 1 ? 'white' : 'black',
              padding: '4px 8px',
              border: '1px solid #ccc',
              cursor: 'pointer',
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Trang sau
        </button>
      </div>
    </div>
  );
};

export default PatientManagement;
