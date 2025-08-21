import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PatientContext } from "../../../../../context/patientContext";
import { toast } from "react-toastify";
import "./PatientEdit.css";

const PatientEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { patients, updatePatient } = useContext(PatientContext);

  const patient = patients.find((p) => String(p.id) === id);
  const [formData, setFormData] = useState(patient || {});
  const [loading, setLoading] = useState(false);

  if (!patient) {
    return <p>Không tìm thấy bệnh nhân có ID: {id}</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  // gọi updatePatient để lưu vào context
  updatePatient(formData);

  toast.success("Cập nhật thông tin thành công!");

  setTimeout(() => {
    setLoading(false);
    navigate("/patients"); // điều hướng về danh sách nếu muốn
  }, 0);
};


return (
  <div className="patient-edit-container">
    <h2>THÔNG TIN CHI TIẾT BỆNH NHÂN</h2>
    <p>
      Nhắc nhở:<br></br> 
      -Bác sĩ khai báo đúng, đầy đủ thông tin và chịu trách nhiệm với các thông tin mà bản thân đã khai báo.<br></br> 
      -Những mục được đánh dấu <span className="s">*</span> là bắt buộc phải khai báo.
    </p>
    <form onSubmit={handleSubmit} className="form-box">
      {/* Hàng 1: 4 cột */}
      <div className="grid-4col">
        {/* Cột 1 */}
        <div className="form-col">
          <label><span className="s">*</span>Mã bệnh nhân:
            <input type="text" value={formData.id} disabled />
          </label>
          <label><span className="s">*</span>Họ và tên:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label><span className="s">*</span>Số điện thoại:
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </label>
          <label><span className="s">*</span>Quốc tịch:
            <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
          </label>
        </div>

        {/* Cột 2 (trống) */}
        <div></div>

        {/* Cột 3 */}
        <div className="form-col">
          <label>Giới tính:
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">--Chọn--</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
          </label>
          <label>Năm sinh:
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
          </label>
          <label>Nghề nghiệp:
            <input type="text" name="job" value={formData.job} onChange={handleChange} />
          </label>
          <label><span className="s">*</span>Dân tộc:
            <input type="text" name="ethnicity" value={formData.ethnicity} onChange={handleChange} />
          </label>
        </div>

        {/* Cột 4: Avatar vuông */}
        <div className="avatar-col">
          <img src={formData.avatar} alt="avatar" className="avatar-square" />
          <label className="upload-btn">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const url = URL.createObjectURL(file);
                  setFormData((prev) => ({ ...prev, avatar: url }));
                }
              }}
            />
            Chọn ảnh
          </label>
        </div>
      </div>

      {/* Hàng 2: Quê quán, địa chỉ, bảo hiểm */}
      <div className="grid-2col">
        <div className="form-col">
          <label><span className="s">*</span>Quê quán:
            <div className="row-inputs">
              <input type="text" placeholder="Tỉnh" name="province" onChange={handleChange} />
              <input type="text" placeholder="Huyện" name="district" onChange={handleChange} />
              <input type="text" placeholder="Xã" name="ward" onChange={handleChange} />
            </div>
          </label>
          <label><span className="s">*</span>Địa chỉ thường trú:
            <div className="row-inputs">
              <input type="text" placeholder="Tỉnh" name="addressProvince" onChange={handleChange} />
              <input type="text" placeholder="Huyện" name="addressDistrict" onChange={handleChange} />
              <input type="text" placeholder="Xã" name="addressWard" onChange={handleChange} />
              <input type="text" placeholder="Chi tiết" name="addressDetail" onChange={handleChange} />
            </div>
          </label>
          <label>Bảo hiểm:
            <div className="row-inputs">
              <input type="text" placeholder="Loại BHYT" name="insurance" onChange={handleChange} />
              <input type="text" placeholder="Số BHYT" name="insuranceId" onChange={handleChange} />
            </div>
          </label>
        </div>
        <div></div>
      </div>

      {/* Hàng 3: Thông tin sức khỏe */}
      <h3>Thông tin sức khỏe</h3>
      <div className="form-col">
        <div className="row-inputs">
          <input type="text" placeholder="Chiều cao (cm)" name="height" onChange={handleChange} />
          <input type="text" placeholder="Cân nặng (kg)" name="weight" onChange={handleChange} />
          <input type="text" placeholder="Nhóm máu" name="blood" onChange={handleChange} />
        </div>
        <label>Tiền sử bệnh:
          <input type="text" name="medicalHistory" onChange={handleChange} />
        </label>
        <label>Dị ứng thuốc:
          <input type="text" name="allergy" onChange={handleChange} />
        </label>
        <label>Tình trạng sức khỏe hiện tại:
          <textarea name="currentHealth" onChange={handleChange}></textarea>
        </label>
      </div>

      {/* Nút chức năng */}
      <div className="button-group">
        <button type="submit" className="btn btn-blue" disabled={loading}>
          {loading ? "Đang cập nhật..." : "Cập nhật"}
        </button>
        <button
          type="button"
          className="btn btn-gray"
          onClick={() => navigate("/patients")}
        >
          Quay lại
        </button>
      </div>
    </form>
  </div>
);
};

export default PatientEdit;
