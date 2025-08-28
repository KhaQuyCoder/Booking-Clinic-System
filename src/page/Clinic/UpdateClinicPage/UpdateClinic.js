import React, { useContext, useState } from "react";
import styles from "./UpdateClinic.module.css";
import { toast } from "react-toastify";
import { State } from "../../../state/context";

const UpdateClinic = () => {
  const { profileClinic, setProfileClinic } = useContext(State);
  const [clinic, setClinic] = useState(profileClinic);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const clinicTypes = [
    "Phòng khám đa khoa",
    "Phòng khám chuyên khoa",
    "Phòng tư nhân",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClinic((prev) => ({ ...prev, [name]: value }));
    setProfileClinic((pre) => ({ ...pre, [name]: value }));
  };

  const handleFile = (e, field) => {
    const file = e.target.files?.[0] || null;
    setClinic((prev) => ({ ...prev, [field]: file }));
  };

  const validate = () => {
    const newErr = {};
    if (!clinic.id.trim()) newErr.id = "Vui lòng nhập ID.";
    if (!clinic.name.trim()) newErr.name = "Nhập tên phòng khám.";
    if (!clinic.type) newErr.type = "Chọn loại hình.";
    if (!clinic.address.trim()) newErr.address = "Nhập địa chỉ.";
    if (!clinic.email.trim()) newErr.email = "Nhập email.";
    if (clinic.email && !/^\S+@\S+\.\S+$/.test(clinic.email))
      newErr.email = "Email không hợp lệ.";
    if (!clinic.phone.trim()) newErr.phone = "Nhập số điện thoại.";
    if (clinic.phone && !/^\d{9,11}$/.test(clinic.phone))
      newErr.phone = "SĐT 9–11 số.";
    if (!clinic.establishedDate)
      newErr.establishedDate = "Chọn ngày thành lập.";
    if (!clinic.businessLicense) newErr.businessLicense = "Tải lên giấy phép.";
    if (!clinic.representativeName.trim())
      newErr.representativeName = "Nhập tên người đại diện.";
    if (!clinic.clinicImage) newErr.clinicImage = "Tải lên ảnh phòng khám.";
    return newErr;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    setSubmitting(true);
    try {
      toast.success("Cập nhật phòng khám thành công.", {
        position: "top-center",
        autoClose: 2000,
        style: { marginBottom: "400px" },
      });
    } catch (err) {
      alert("Có lỗi khi cập nhật.");
    } finally {
      setSubmitting(false);
    }
  };

  const Error = ({ msg }) =>
    msg ? <span className={styles.errorMsg}>{msg}</span> : null;

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Cập nhật thông tin phòng khám</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.grid2}>
            <div className={styles.field}>
              <label>ID *</label>
              <input name="id" value={clinic.id} onChange={handleChange} />
              <Error msg={errors.id} />
            </div>
            <div className={styles.field}>
              <label>Tên phòng khám *</label>
              <input name="name" value={clinic.name} onChange={handleChange} />
              <Error msg={errors.name} />
            </div>
            <div className={styles.field}>
              <label>Loại hình *</label>
              <select name="type" value={clinic.type} onChange={handleChange}>
                <option value="">--Chọn--</option>
                {clinicTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <Error msg={errors.type} />
            </div>
            <div className={styles.field}>
              <label>Địa chỉ *</label>
              <input
                name="address"
                value={clinic.address}
                onChange={handleChange}
              />
              <Error msg={errors.address} />
            </div>
            <div className={styles.field}>
              <label>Email *</label>
              <input
                name="email"
                value={clinic.email}
                onChange={handleChange}
              />
              <Error msg={errors.email} />
            </div>
            <div className={styles.field}>
              <label>SĐT *</label>
              <input
                name="phone"
                value={clinic.phone}
                onChange={handleChange}
              />
              <Error msg={errors.phone} />
            </div>
            <div className={styles.field}>
              <label>Ngày thành lập *</label>
              <input
                type="date"
                name="establishedDate"
                value={clinic.establishedDate}
                onChange={handleChange}
              />
              <Error msg={errors.establishedDate} />
            </div>
            <div className={styles.field}>
              <label>Giờ hoạt động</label>
              <input
                name="workingHours"
                value={clinic.openingHours}
                onChange={handleChange}
                placeholder="VD: 7h - 17h"
              />
            </div>
          </div>

          <div className={styles.fieldWide}>
            <label>Mô tả</label>
            <textarea
              rows={3}
              name="description"
              value={clinic.description}
              onChange={handleChange}
              placeholder="Thông tin chi tiết về phòng khám..."
            />
          </div>

          <div className={styles.grid2}>
            <div className={styles.field}>
              <label>Người đại diện *</label>
              <input
                name="representative"
                value={clinic.representativeName}
                onChange={handleChange}
              />
              <Error msg={errors.representative} />
            </div>
            <div className={styles.field}>
              <label>Quê quán</label>
              <input
                name="hometown"
                value={clinic.hometown}
                onChange={handleChange}
              />
            </div>
            <div className={styles.fieldWide}>
              <label>Địa chỉ cư trú</label>
              <input
                name="licenseImage"
                value={clinic.hometown}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.uploads}>
            <div className={styles.fieldWide}>
              <label>Giấy phép kinh doanh (upload) *</label>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => handleFile(e, "businessLicense")}
              />
              {clinic.businessLicense && (
                <span className={styles.fileHint}>
                  {clinic.businessLicense.name}
                </span>
              )}
              <Error msg={errors.businessLicense} />
            </div>
            <div className={styles.fieldWide}>
              <label>Ảnh phòng khám *</label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={(e) => handleFile(e, "clinicImage")}
              />
              {clinic.clinicImage && (
                <span className={styles.fileHint}>
                  {clinic.clinicImage.name}
                </span>
              )}
              <Error msg={errors.clinicImage} />
            </div>
          </div>

          <div className={styles.footer}>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={submitting}
            >
              {submitting ? "Đang lưu..." : "Cập nhật"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateClinic;
