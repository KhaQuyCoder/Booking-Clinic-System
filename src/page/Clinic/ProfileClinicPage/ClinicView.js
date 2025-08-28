import { useNavigate } from "react-router-dom";
import styles from "./ClinicView.module.css";
import { useContext } from "react";
import { State } from "../../../state/context";
const ClinicView = ({ clinic }) => {
  const { profileClinic } = useContext(State);

  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>Thông tin phòng khám</h1>
        <button
          className={styles.editBtn}
          type="button"
          onClick={() => navigate("/clinic/updateClinic")}
        >
          Chỉnh sửa
        </button>
      </div>

      <section className={styles.card}>
        <h2 className={styles.cardTitle}>Thông tin cơ bản</h2>
        <div className={styles.grid}>
          <Field label="Mã phòng khám" value={profileClinic.id} />
          <Field label="Tên phòng khám" value={profileClinic.name} wide />
          <Field label="Loại hình" value={profileClinic.type} />
          <Field
            label="Ngày thành lập"
            value={formatDate(profileClinic.establishedDate)}
          />
          <Field label="Email" value={profileClinic.email} />
          <Field label="Số điện thoại" value={profileClinic.phone} />
          <Field
            label="Giờ hoạt động"
            value={profileClinic.openingHours}
            wide
          />
          <Field label="Địa chỉ cụ thể" value={profileClinic.address} wide />
          <Field
            label="Người đại diện"
            value={profileClinic.representativeName}
          />
          <Field label="Quê quán (hộ khẩu)" value={profileClinic.hometown} />
        </div>
      </section>

      <section className={styles.card}>
        <h2 className={styles.cardTitle}>Mô tả</h2>
        <p className={styles.description}>{profileClinic.description}</p>
      </section>

      <section className={styles.card}>
        <h2 className={styles.cardTitle}>Hình ảnh & giấy phép</h2>
        <div className={styles.mediaGrid}>
          <MediaBlock
            title="Ảnh phòng khám"
            src={profileClinic.clinicImage}
            alt="Ảnh phòng khám"
          />
          <MediaBlock
            title="Giấy phép kinh doanh"
            src={profileClinic.licenseImage}
            alt="Giấy phép kinh doanh"
          />
        </div>
        <p className={styles.note}>
          * Đây là trang xem thông tin. Nút <b>Chỉnh sửa</b> ở trên.
        </p>
      </section>
    </div>
  );
};

const Field = ({ label, value, wide = false }) => (
  <div className={`${styles.field} ${wide ? styles.wide : ""}`}>
    <div className={styles.fieldLabel}>{label}</div>
    <div className={styles.fieldValue}>{value || "—"}</div>
  </div>
);

const MediaBlock = ({ title, src, alt }) => (
  <div className={styles.mediaBlock}>
    <div className={styles.mediaHeader}>{title}</div>
    {src ? (
      <img className={styles.mediaImage} src={src} alt={alt} />
    ) : (
      <div className={styles.mediaPlaceholder}>Chưa có hình ảnh</div>
    )}
  </div>
);

function formatDate(dateStr) {
  if (!dateStr) return "—";
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("vi-VN");
  } catch {
    return dateStr;
  }
}

export default ClinicView;
