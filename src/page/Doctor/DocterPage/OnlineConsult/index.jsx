import React, { useState } from "react";
import patientsData from "./../../../../data/OnlineConsult.json";
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash, FaPhoneAlt } from "react-icons/fa";
import "./OnlineConsult.css";

const OnlineConsult = () => {
  const [patients] = useState(patientsData);
  const [selectedPatient, setSelectedPatient] = useState(patients[0]);
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);

  return (
    <div className="online-consult-container">
      {/* Danh sách khám */}
      <div className="patient-list">
        <h3>Danh sách khám</h3>
        {patients.map((patient) => (
          <div
            key={patient.id}
            className={`patient-item ${selectedPatient.id === patient.id ? "active" : ""}`}
            onClick={() => setSelectedPatient(patient)}
          >
            <img src={patient.avatar} alt={patient.name} />
            <div>
              <p>{patient.name}</p>
              <span>{patient.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Video Call */}
      <div className="video-section">
        {/* Video bệnh nhân */}
        <div className="patient-video">
          <img src={selectedPatient.consultationInfo.video} alt="Patient Video" />
        </div>

        {/* Thumbnail video bác sĩ */}
        <div className="doctor-video">
          <img src="https://th.bing.com/th/id/R.eb6175173ddee60459d5df8f00ad6285?rik=fHF%2bwPKRRN5AtQ&pid=ImgRaw&r=0" alt="Doctor Video" />
        </div>

        {/* Toolbar */}
        <div className="toolbar">
          <button onClick={() => setMicOn(!micOn)}>
            {micOn ? <FaMicrophone /> : <FaMicrophoneSlash />}
          </button>
          <button onClick={() => setCameraOn(!cameraOn)}>
            {cameraOn ? <FaVideo /> : <FaVideoSlash />}
          </button>
          <button className="end-call">
            <FaPhoneAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlineConsult;
