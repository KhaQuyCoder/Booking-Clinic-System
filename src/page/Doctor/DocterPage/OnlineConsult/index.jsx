import React, { useState, useEffect } from "react";
import "./OnlineConsult.css";
import OnlienConsult from "./../../../../data/OnlineConsult.json";

const OnlineConsult = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    setPatients(OnlienConsult);
    setSelectedPatient(OnlienConsult[0]);
  }, []);

  return (
<div className="online-container-wrapper">
  <div className="online-container">
    {/* Sidebar trái */}
    <div className="online-sidebar">
      <h3>Danh sách khám</h3>
      <div className="patient-list">
        {patients.map((p) => (
          <div
            key={p.id}
            className={`patient-item ${selectedPatient?.id === p.id ? "active" : ""}`}
            onClick={() => setSelectedPatient(p)}
          >
            <img src={p.avatar} alt={p.name} className="avatar" />
            <div>
              <strong>{p.name}</strong>
              <p>{p.time} - {p.specialty}</p>
              <p className={`status ${p.status ? p.status.replace(/\s/g, "-") : ""}`}>
                {p.status || "Chưa có trạng thái"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Cột phải */}
    <div className="online-main">
      {/* Video */}
      <div className="video-section">
        <div className="video-box">
          <div className="video-patient">{selectedPatient?.name || "Bệnh nhân"}</div>
          <div className="video-doctor">Bác sĩ</div>
        </div>
        <div className="video-controls">
          <button>🔴</button>
          <button>🎥</button>
          <button>🖥️</button>
          <button>🎙️</button>
          <button>💬</button>
          <button>⚙️</button>
        </div>
      </div>

      {/* Consultation info */}
      <div className="consultation-info">
        <p><strong>ID:</strong> {selectedPatient?.consultationInfo.consultationId}</p>
        <p><strong>Ngày khám:</strong> {selectedPatient?.consultationInfo.date}</p>
        <p><strong>Thời lượng:</strong> {selectedPatient?.consultationInfo.duration}</p>
        <p>
          <strong>Trạng thái:</strong> 
          <span className={`status-label ${selectedPatient?.consultationInfo.status.replace(/\s/g, "-")}`}>
            {selectedPatient?.consultationInfo.status}
          </span>
        </p>
        <p><strong>Kết nối mạng:</strong> {selectedPatient?.consultationInfo.networkStatus}</p>
        <p><strong>Người tạo lịch:</strong> {selectedPatient?.consultationInfo.creator}</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default OnlineConsult;
