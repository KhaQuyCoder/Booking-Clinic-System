import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PatientContext } from "../../../../../context/patientContext";
import "./PatientDetail.css";

const PatientDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { patients } = useContext(PatientContext);

  const patient = patients.find((p) => String(p.id) === id);

  if (!patient) {
    return <p>Không tìm thấy bệnh nhân có ID: {id}</p>;
  }


return (
    <div className="patient-edit-container">
      <h2>THÔNG TIN CHI TIẾT BỆNH NHÂN</h2>

      <div className="form-box">
        {/* Hàng 1: 4 cột */}
        <div className="grid-4col">
          {/* Cột 1 */}
          <div className="form-col">
            <label>
              Mã bệnh nhân:
              <input type="text" value={patient.id} disabled />
            </label>
            <label>
              Họ và tên:
              <input type="text" value={patient.name} disabled />
            </label>
            <label>
              Số điện thoại:
              <input type="text" value={patient.phone} disabled />
            </label>
            <label>
              Quốc tịch:
              <input type="text" value={patient.nationality} disabled />
            </label>
          </div>

          {/* Cột 2 (trống) */}
          <div></div>

          {/* Cột 3 */}
          <div className="form-col">
            <label>
              Giới tính:
              <input type="text" value={patient.gender} disabled />
            </label>
            <label>
              Năm sinh:
              <input type="date" value={patient.dob} disabled />
            </label>
            <label>
              Nghề nghiệp:
              <input type="text" value={patient.job} disabled />
            </label>
            <label>
              Dân tộc:
              <input type="text" value={patient.ethnicity} disabled />
            </label>
          </div>

          {/* Cột 4: Avatar */}
          <div className="avatar-col">
            <img src={patient.avatar} alt="avatar" className="avatar-square" />
          </div>
        </div>

        {/* Hàng 2: Quê quán, địa chỉ, bảo hiểm */}
        <div className="grid-2col">
          <div className="form-col">
            <label>
              Quê quán:
              <div className="row-inputs">
                <input type="text" value={patient.province} disabled />
                <input type="text" value={patient.district} disabled />
                <input type="text" value={patient.ward} disabled />
              </div>
            </label>
            <label>
              Địa chỉ thường trú:
              <div className="row-inputs">
                <input type="text" value={patient.addressProvince} disabled />
                <input type="text" value={patient.addressDistrict} disabled />
                <input type="text" value={patient.addressWard} disabled />
                <input type="text" value={patient.addressDetail} disabled />
              </div>
            </label>
            <label>
              Bảo hiểm:
              <div className="row-inputs">
                <input type="text" value={patient.insurance} disabled />
                <input type="text" value={patient.insuranceId} disabled />
              </div>
            </label>
          </div>
          <div></div>
        </div>

        {/* Hàng 3: Thông tin sức khỏe */}
        <h3>Thông tin sức khỏe</h3>
        <div className="form-col">
          <div className="row-inputs">
            <input type="text" value={patient.height} disabled />
            <input type="text" value={patient.weight} disabled />
            <input type="text" value={patient.blood} disabled />
          </div>
          <label>
            Tiền sử bệnh:
            <input type="text" value={patient.medicalHistory} disabled />
          </label>
          <label>
            Dị ứng thuốc:
            <input type="text" value={patient.allergy} disabled />
          </label>
          <label>
            Tình trạng sức khỏe hiện tại:
            <textarea value={patient.currentHealth} disabled></textarea>
          </label>
        </div>
      </div>

      {/* Chỉ còn nút quay lại */}
      <div className="button-group">
        <button className="btn btn-gray" onClick={() => navigate(-1)}>
          Quay lại
        </button>
      </div>
    </div>
  );
};

export default PatientDetail;