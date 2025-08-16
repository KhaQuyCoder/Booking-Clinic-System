import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./PatientDetail.css";
import patients from "../../../../data/detailPatient.json";

const PatientDetail = () => {
    const { id } = useParams(); // lấy id từ URL
    const patient = patients.find((p) => p.id === id); // tìm bệnh nhân theo id

    const [province, setProvince] = useState(patient?.province || "");
    const [district, setDistrict] = useState(patient?.district || "");
    const [ward, setWard] = useState(patient?.ward || "");

    if (!patient) {
        return <p>Không tìm thấy bệnh nhân có ID: {id}</p>;
    }

    console.log("paitien: ", patient);


    return (
        <div className="patient-detail-container">
            <h2 className="title">THÔNG TIN CHI TIẾT BỆNH NHÂN</h2>

            <div className="patient-card">
                {/* Thông tin chung */}
                <h3 className="section-title">Thông tin chung</h3>
                <div className="patient-info">
                    <div className="info-left">
                        <p><b>Mã bệnh nhân:</b> {patient.id}</p>
                        <p><b>Họ và tên:</b> {patient.name}</p>
                        <p><b>Số điện thoại:</b> {patient.phone}</p>
                        <p><b>Quốc tịch:</b> {patient.nationality}</p>
                    </div>
                    <div className="info-right">
                        <div>
                            <p><b>Giới tính:</b> {patient.gender}</p>
                            <p><b>Năm sinh:</b> {patient.dob}</p>
                            <p><b>Nghề nghiệp:</b> {patient.job}</p>
                            <p><b>Dân tộc:</b> {patient.ethnicity}</p>
                        </div>
                        <div className="avatar">
                            <img src={patient.avatar} alt="avatar" />
                        </div>
                    </div>

                </div>
                <div className="infor-box">
                    <p>
                        <b>Quê quán:</b>
                        <input
                            className="input-contry"
                            type="text"
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                            placeholder="Tỉnh/Thành phố"
                        />
                        <input
                            className="input-contry"
                            type="text"
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                            placeholder="Quận/Huyện"
                        />
                        <input
                            className="input-contry"
                            type="text"
                            value={ward}
                            onChange={(e) => setWard(e.target.value)}
                            placeholder="Phường/Xã"
                        />
                    </p>
                    <p><b>Địa chỉ thường trú:</b> {province}, {district}, {ward}, {patient.address}</p>

                <div className="insurance-block">

                    <span>Bảo hiểm y tế: {patient.insurance}</span>
                    <span>Số bảo hiểm y tế: {patient.insuranceNo}</span>

                </div>
                </div>

                {/* Thông tin sức khỏe */}
                <h3 className="section-title">Thông tin sức khỏe</h3>
                <div className="health-info">
                    <p><b>Chiều cao:</b> {patient.height} &nbsp;&nbsp;
                        <b>Cân nặng:</b> {patient.weight} &nbsp;&nbsp;
                        <b>Nhóm máu:</b> {patient.blood}</p>

                    <p><b>Tiền sử bệnh:</b> {patient.history}</p>
                    <p><b>Dị ứng thuốc:</b> {patient.allergy}</p>
                    <p><b>Tình trạng sức khỏe hiện tại:</b> {patient.condition}</p>
                </div>
            </div>
        </div>
    );
};

export default PatientDetail;
