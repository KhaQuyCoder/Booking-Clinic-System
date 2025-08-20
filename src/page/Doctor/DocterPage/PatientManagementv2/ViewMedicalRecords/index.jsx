import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PatientContext } from "../../../../../context/patientContext";
import medicalRecords from "../../../../../data/medicalRecords.json";
import "./ViewMedicalRecords.css";

const ViewMedicalRecords = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { patients } = useContext(PatientContext);

    const patient = patients.find((p) => String(p.id) === id);

    if (!patient) {
        return <p>Không tìm thấy bệnh nhân có ID: {id}</p>;
    }

    // Lọc các bệnh án theo patientId
    const records = medicalRecords.filter(record => record.patientId === id);

    return (
        <div className="view-records-container">
            <h2>THÔNG TIN BỆNH NHÂN</h2>

            <div className="section">
                <h3>Thông tin bệnh nhân</h3>
                <div className="grid-2col">
                    <div className="col-2-3 grid-2col">
                        <div className="form-col1">
                            <label className="form-row">
                                <span>Mã bệnh nhân:</span>
                                <input type="text" value={patient.id} disabled />
                            </label>
                            <label className="form-row">
                                <span>Họ và tên:</span>
                                <input type="text" value={patient.name} disabled />
                            </label>
                        </div>

                        <div className="form-col2">
                            <div className="form-row">
                                <span>Giới tính:</span>
                                <div className="gender-box">
                                    <label>
                                        <input
                                            type="radio"
                                            checked={patient.gender === "Nam"}
                                            readOnly
                                        />
                                        Nam
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            checked={patient.gender === "Nữ"}
                                            readOnly
                                        />
                                        Nữ
                                    </label>
                                </div>
                            </div>

                            <label className="form-row">
                                <span>Năm sinh:</span>
                                <input type="date" value={patient.dob} disabled />
                            </label>
                        </div>
                    </div>

                    <div className="col-1-3 avatar-col">
                        <img src={patient.avatar} alt="avatar" className="avatar-square" />
                    </div>
                </div>
            </div>

            <hr />

            {/* Hiển thị tất cả bệnh án */}
            {records.length === 0 ? (
                <p>Chưa có bệnh án nào cho bệnh nhân này.</p>
            ) : (
                records.map(record => (
                    <div className="section" key={record.recordId}>
                        <h3>Thông tin bệnh án ({record.recordId})</h3>

                        <label>
                            Ngày khám:
                            <input type="date" value={record.examDate} disabled />
                        </label>

                        <div className="grid-3col">
                            <label>
                                Chuyên khoa:
                                <input type="text" value={record.specialty} disabled />
                            </label>
                            <label>
                                Bác sĩ khám:
                                <input type="text" value={record.doctorName} disabled />
                            </label>
                            <label>
                                Năm sinh bác sĩ:
                                <input type="date" value={record.doctorDob} disabled />
                            </label>
                        </div>

                        <div className="grid-2col">
                            <div className="col-2-3">
                                <label>
                                    Triệu chứng:
                                    <textarea value={record.symptoms} disabled />
                                </label>
                            </div>

                            <div className="col-1-3">
                                <label>
                                    File đính kèm:
                                    <div className="file-box">
                                        {record.attachments.length > 0 ? (
                                            record.attachments.map((file, index) => (
                                                <a key={index} href={file} target="_blank" rel="noreferrer">
                                                    Xem file {index + 1}
                                                </a>
                                            ))
                                        ) : (
                                            <span>Không có</span>
                                        )}
                                    </div>
                                </label>
                            </div>
                        </div>

                        <label>
                            Chuẩn đoán sơ bộ:
                            <input type="text" value={record.preliminaryDiagnosis} disabled />
                        </label>
                        <label>
                            Chuẩn đoán chính xác:
                            <input type="text" value={record.finalDiagnosis} disabled />
                        </label>
                        <label>
                            Hướng điều trị:
                            <input type="text" value={record.treatmentPlan} disabled />
                        </label>
                        <label>
                            Đơn thuốc:
                            <textarea rows="3" value={record.prescription} disabled />
                        </label>
                        <label>
                            Ghi chú:
                            <textarea rows="3" value={record.notes} disabled />
                        </label>

                        <hr />
                    </div>
                ))
            )}

            <div className="button-group">
                <button className="btn btn-gray" onClick={() => navigate(-1)}>
                    Quay lại
                </button>
            </div>
        </div>
    );
};

export default ViewMedicalRecords;
