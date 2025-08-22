import React, { useState } from "react";
import styles from "./CreateDoctor.module.css";
import { toast } from "react-toastify";
const CreateDoctor = () => {
  const defaultDoctor = {
    id: "",
    name: "",
    gender: "",
    birthDate: "",
    birthPlace: "",
    ethnicity: "",
    religion: "",
    nationality: "",
    cccd: "",
    cccdIssuedDate: "",
    cccdIssuedPlace: "",
    email: "",
    phone: "",
    shift: "",
    specialty: "",
    experience: "",
    description: "",
    hometown: "",
    residence: "",
    permanentAddress: "",
    certificateFile: null,
  };
  const [doctor, setDoctor] = useState(defaultDoctor);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const specialties = [
    "Sản phụ khoa",
    "Ngoại thần kinh",
    "Chấn thương chỉnh hình",
    "Nhi khoa",
    "Tim mạch",
  ];
  const shifts = ["Sáng", "Chiều", "Tối", "Cả ngày"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0] || null;
    setDoctor((prev) => ({ ...prev, certificateFile: file }));
  };

  const validate = () => {
    const newErr = {};
    if (!doctor.id.trim()) newErr.id = "Vui lòng nhập ID.";
    if (!doctor.name.trim()) newErr.name = "Vui lòng nhập tên bác sĩ.";
    if (!doctor.gender) newErr.gender = "Chọn giới tính.";
    if (!doctor.birthDate) newErr.birthDate = "Chọn ngày sinh.";
    if (!doctor.email.trim()) newErr.email = "Vui lòng nhập email.";
    if (doctor.email && !/^\S+@\S+\.\S+$/.test(doctor.email))
      newErr.email = "Email không hợp lệ.";
    if (!doctor.phone.trim()) newErr.phone = "Vui lòng nhập số điện thoại.";
    if (doctor.phone && !/^\d{9,11}$/.test(doctor.phone))
      newErr.phone = "Số điện thoại 9–11 số.";
    if (!doctor.specialty) newErr.specialty = "Chọn chuyên khoa.";
    if (!doctor.shift) newErr.shift = "Chọn ca làm việc.";
    if (!doctor.cccd.trim()) newErr.cccd = "Vui lòng nhập số CCCD.";
    if (doctor.cccd && !/^\d{9,12}$/.test(doctor.cccd))
      newErr.cccd = "CCCD 9–12 số.";
    if (!doctor.cccdIssuedDate) newErr.cccdIssuedDate = "Chọn ngày cấp CCCD.";
    if (!doctor.cccdIssuedPlace.trim())
      newErr.cccdIssuedPlace = "Nhập nơi cấp CCCD.";
    if (!doctor.certificateFile)
      newErr.certificateFile = "Tải lên bằng chứng cấp chứng chỉ.";
    return newErr;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    setSubmitting(true);
    try {
      toast.success("Gửi yêu cầu thành công", {
        position: "top-center",
        autoClose: 2000,
        style: { marginBottom: "400px" },
      });
      setDoctor(defaultDoctor);
      setErrors({});
    } catch (err) {
      alert("Có lỗi xảy ra khi tạo bác sĩ.");
    } finally {
      setSubmitting(false);
    }
  };
  const Error = ({ msg }) =>
    msg ? <span className={styles.errorMsg}>{msg}</span> : null;
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Tạo mới bác sĩ</h1>
            <p className={styles.subtitle}>
              Nhập đầy đủ thông tin bên dưới. (*) là bắt buộc.
            </p>
          </div>
          <button
            type="button"
            className={styles.resetBtn}
            onClick={() => {
              setDoctor(defaultDoctor);
              setErrors({});
            }}
            disabled={submitting}
          >
            Đặt lại
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Thông tin chung</h3>
            <div className={styles.grid3}>
              <div className={styles.field}>
                <label>
                  <p>
                    {" "}
                    ID <b>*</b>
                  </p>
                </label>
                <input
                  name="id"
                  value={doctor.id}
                  onChange={handleChange}
                  placeholder="VD: BS0001"
                />
                <Error msg={errors.id} />
              </div>
              <div className={styles.field}>
                <label>
                  <p>
                    Tên bác sĩ <b>*</b>
                  </p>
                </label>
                <input
                  name="name"
                  value={doctor.name}
                  onChange={handleChange}
                  placeholder="Nguyễn Văn A"
                />
                <Error msg={errors.name} />
              </div>
              <div className={styles.field}>
                <label>
                  <p>
                    {" "}
                    Giới tính <b>*</b>
                  </p>
                </label>
                <select
                  name="gender"
                  value={doctor.gender}
                  onChange={handleChange}
                >
                  <option value="">-- Chọn --</option>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
                </select>
                <Error msg={errors.gender} />
              </div>

              <div className={styles.field}>
                <label>
                  <p style={{ margin: "0" }}>
                    Ngày sinh <b>*</b>
                  </p>
                </label>
                <input
                  type="date"
                  name="birthDate"
                  value={doctor.birthDate}
                  onChange={handleChange}
                />
                <Error msg={errors.birthDate} />
              </div>
              <div className={styles.field}>
                <label>Nơi sinh</label>
                <input
                  name="birthPlace"
                  value={doctor.birthPlace}
                  onChange={handleChange}
                  placeholder="VD: Hà Nội"
                />
              </div>
              <div className={styles.field}>
                <label>Dân tộc</label>
                <input
                  name="ethnicity"
                  value={doctor.ethnicity}
                  onChange={handleChange}
                  placeholder="VD: Kinh"
                />
              </div>

              <div className={styles.field}>
                <label>Tôn giáo</label>
                <input
                  name="religion"
                  value={doctor.religion}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label>Quốc tịch</label>
                <input
                  name="nationality"
                  value={doctor.nationality}
                  onChange={handleChange}
                  placeholder="Việt Nam"
                />
              </div>
              <div className={styles.field}>
                <label>
                  <p style={{ margin: 0 }}>
                    Ca làm việc <b>*</b>
                  </p>
                </label>
                <select
                  name="shift"
                  value={doctor.shift}
                  onChange={handleChange}
                >
                  <option value="">-- Chọn --</option>
                  {shifts.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <Error msg={errors.shift} />
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Liên hệ & Chuyên môn</h3>
            <div className={styles.grid3}>
              <div className={styles.field}>
                <label>
                  <p>
                    Email <b>*</b>
                  </p>
                </label>
                <input
                  name="email"
                  value={doctor.email}
                  onChange={handleChange}
                  placeholder="email@domain.com"
                />
                <Error msg={errors.email} />
              </div>
              <div className={styles.field}>
                <label>
                  <p>
                    Số điện thoại <b>*</b>
                  </p>
                </label>
                <input
                  name="phone"
                  value={doctor.phone}
                  onChange={handleChange}
                  placeholder="09xxxxxxxx"
                />
                <Error msg={errors.phone} />
              </div>
              <div className={styles.field}>
                <label>
                  <p>
                    Chuyên khoa <b>*</b>
                  </p>
                </label>
                <select
                  name="specialty"
                  value={doctor.specialty}
                  onChange={handleChange}
                >
                  <option value="">-- Chọn --</option>
                  {specialties.map((sp) => (
                    <option key={sp} value={sp}>
                      {sp}
                    </option>
                  ))}
                </select>
                <Error msg={errors.specialty} />
              </div>

              <div className={styles.fieldWide}>
                <label>Kinh nghiệm</label>
                <input
                  name="experience"
                  value={doctor.experience}
                  onChange={handleChange}
                  placeholder="VD: 10 năm công tác tại..."
                />
              </div>
              <div className={styles.fieldWide}>
                <label>Miêu tả</label>
                <textarea
                  name="description"
                  rows={3}
                  value={doctor.description}
                  onChange={handleChange}
                  placeholder="Tóm tắt quá trình đào tạo, công tác, thành tựu..."
                />
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Thông tin CCCD</h3>
            <div className={styles.grid3}>
              <div className={styles.field}>
                <label>
                  <p>
                    Số CCCD <b>*</b>
                  </p>
                </label>
                <input
                  name="cccd"
                  value={doctor.cccd}
                  onChange={handleChange}
                  placeholder="12 chữ số"
                />
                <Error msg={errors.cccd} />
              </div>
              <div className={styles.field}>
                <label>
                  <p>
                    Ngày cấp <b>*</b>
                  </p>
                </label>
                <input
                  type="date"
                  name="cccdIssuedDate"
                  value={doctor.cccdIssuedDate}
                  onChange={handleChange}
                />
                <Error msg={errors.cccdIssuedDate} />
              </div>
              <div className={styles.field}>
                <label>
                  <p>
                    Nơi cấp <b>*</b>
                  </p>
                </label>
                <input
                  name="cccdIssuedPlace"
                  value={doctor.cccdIssuedPlace}
                  onChange={handleChange}
                  placeholder="VD: Công an TP.HCM"
                />
                <Error msg={errors.cccdIssuedPlace} />
              </div>

              <div className={styles.fieldWide}>
                <label>
                  <p>
                    Bằng chứng cấp chứng chỉ (upload) <b>*</b>
                  </p>
                </label>
                <div className={styles.fileRow}>
                  <input
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg"
                    onChange={handleFile}
                  />
                  {doctor.certificateFile && (
                    <span className={styles.fileHint}>
                      {doctor.certificateFile.name}
                    </span>
                  )}
                </div>
                <Error msg={errors.certificateFile} />
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Quê quán & Hộ khẩu</h3>
            <div className={styles.grid2}>
              <div className={styles.field}>
                <label>Quê quán</label>
                <input
                  name="hometown"
                  value={doctor.hometown}
                  onChange={handleChange}
                  placeholder="VD: Thừa Thiên Huế"
                />
              </div>
              <div className={styles.field}>
                <label>Địa chỉ cư trú</label>
                <input
                  name="residence"
                  value={doctor.residence}
                  onChange={handleChange}
                  placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành"
                />
              </div>
              <div className={styles.fieldWide}>
                <label>Hộ khẩu thường trú</label>
                <input
                  name="permanentAddress"
                  value={doctor.permanentAddress}
                  onChange={handleChange}
                  placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành"
                />
              </div>
            </div>
          </section>

          <div className={styles.footer}>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={submitting}
            >
              {submitting ? "Đang gửi..." : "Gửi yêu cầu"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateDoctor;
