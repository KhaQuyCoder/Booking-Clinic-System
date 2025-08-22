import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PatientContext } from "../../../../../context/patientContext";
import medicalRecordsData from "../../../../../data/medicalRecords.json";
import "./ViewMedicalRecords.css";

const ViewMedicalRecords = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { patients } = useContext(PatientContext);

  const [patient, setPatient] = useState(null);
  const [record, setRecord] = useState(null); // dùng để lưu bản ghi gần nhất

  useEffect(() => {
    const foundPatient = patients.find((p) => String(p.id) === id);
    setPatient(foundPatient || null);

    // Lấy bản ghi gần nhất theo examDate
    const patientRecords = medicalRecordsData
      .filter((r) => r.patientId === id)
      .sort((a, b) => new Date(b.examDate) - new Date(a.examDate));

    setRecord(patientRecords[0] || null);
  }, [id, patients]);

  if (!patient) {
    return <p>Không tìm thấy bệnh nhân có ID: {id}</p>;
  }

  return (
    <div className="patient-edit-container">
      <h2>THÔNG TIN BỆNH ÁN</h2>
      {/* Thông tin bệnh nhân */}
      <div className="form-box">
        <h3>Thông tin bệnh nhân</h3>
        <div className="patient-info">
          {/* Cột trái 3/4 */}
          <div className="col-3-4 grid-2col">
            {/* Cột con 1 */}
            <div className="form-col1">
              <div className="form-row-inline">
                <label>Mã bệnh nhân:</label>
                <input type="text" value={patient.id} disabled />
              </div>
              <div className="form-row-inline">
                <label>Họ và tên:</label>
                <input type="text" value={patient.name} disabled />
              </div>
            </div>
            
          </div>
          <div className="form-col2">
              <div className="form-row-inline">
                <label>Giới tính:</label>
                <div className="gender-box">
                  <label>
                    <input type="radio" checked={patient.gender === "Nam"} readOnly /> Nam
                  </label>
                  <label>
                    <input type="radio" checked={patient.gender === "Nữ"} readOnly /> Nữ
                  </label>
                </div>
              </div>
              <div className="form-row-inline">
                <label>Năm sinh:</label>
                <input type="date" value={patient.dob} disabled />
              </div>
            </div>
          <div className="col-1-4 avatar-col">
            <img src={patient.avatar} alt="avatar" className="avatar-square" />
          </div>
        </div>
        {/* Cột phải 1/4: avatar */}

      
      {/* Thông tin bệnh án */}
      
        <h3>Thông tin bệnh án</h3>

        {record ? (
          <>
            <label className="N">Ngày khám:
              <input type="date" value={record.examDate} disabled />
            </label>

            <div className="row-inputs">
              <label>Chuyên khoa:
                <input type="text" value={record.specialty} disabled />
              </label>
              <label>Bác sĩ khám:
                <input type="text" value={record.doctorName} disabled />
              </label>
              <label>Năm sinh bác sĩ:
                <input type="date" value={record.doctorDob || ""} disabled />
              </label>
            </div>

            <div className="grid-2col">
              <div className="form-col">
                <label>Triệu chứng:
                  <textarea value={record.symptoms || ""} disabled></textarea>
                </label>
              </div>
              <div className="form-col">
                <label>File đính kèm:
                  <div className="file-box">
                    {record.attachments && record.attachments.length > 0 ? (
                      record.attachments.map((file, i) => (
                        <a key={i} href={file} target="_blank" rel="noreferrer">{file}</a>
                      ))
                    ) : (
                      <span>Không có file</span>
                    )}
                  </div>
                </label>
              </div>
            </div>
            <label>Chuẩn đoán sơ bộ:
              <input type="text" value={record.preliminaryDiagnosis || ""} disabled />
            </label>
            <label>Chuẩn đoán chính xác:
              <input type="text" value={record.finalDiagnosis || ""} disabled />
            </label>
            <label>Hướng điều trị:
              <input type="text" value={record.treatment || ""} disabled />
            </label>
            <label>Đơn thuốc:
              <textarea value={record.prescription || ""} disabled></textarea>
            </label>
            <label>Ghi chú:
              <textarea value={record.notes || ""} disabled></textarea>
            </label>
          </>
        ) : (
          <p>Chưa có bệnh án cho bệnh nhân này.</p>
        )}
      </div>

      <div className="button-group">
        <button className="btn btn-gray" onClick={() => navigate(-1)}>Quay lại</button>
      </div>
    </div>
  );
};

export default ViewMedicalRecords;
