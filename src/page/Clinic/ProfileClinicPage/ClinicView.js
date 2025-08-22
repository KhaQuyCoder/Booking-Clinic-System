import { useNavigate } from "react-router-dom";
import styles from "./ClinicView.module.css";
const ClinicView = ({ clinic }) => {
  const demoData = {
    id: "CLN-001",
    name: "Phòng khám Đa khoa Hòa Bình",
    type: "Phòng khám đa khoa",
    address: "Số 123, Nguyễn Trãi, Thanh Xuân, Hà Nội",
    email: "contact@hoabinhclinic.vn",
    phone: "0243 888 999",
    establishedDate: "2015-06-12",
    description:
      "Phòng khám đa khoa với đội ngũ bác sĩ giàu kinh nghiệm, trang thiết bị hiện đại. Cung cấp các dịch vụ khám tổng quát, nhi khoa, sản phụ khoa, tim mạch, xét nghiệm…",
    openingHours: "Thứ 2–Thứ 7: 07:30–20:00 | Chủ nhật: 08:00–17:00",
    representativeName: "BS. Nguyễn Văn An",
    hometown: "Huế",
    clinicImage:
      "https://penviet.com/wp-content/uploads/2023/05/thiet-ke-phong-kham-da-khoa-dung-chau-3.jpg",
    licenseImage:
      "https://annhien.org/wp-content/uploads/2018/05/Giay-phep-hoat-dong-KCB_Bs-Hanh-2018-1024x724.jpg",
  };

  const data = clinic || demoData;
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
          <Field label="Mã phòng khám" value={data.id} />
          <Field label="Tên phòng khám" value={data.name} wide />
          <Field label="Loại hình" value={data.type} />
          <Field
            label="Ngày thành lập"
            value={formatDate(data.establishedDate)}
          />
          <Field label="Email" value={data.email} />
          <Field label="Số điện thoại" value={data.phone} />
          <Field label="Giờ hoạt động" value={data.openingHours} wide />
          <Field label="Địa chỉ cụ thể" value={data.address} wide />
          <Field label="Người đại diện" value={data.representativeName} />
          <Field label="Quê quán (hộ khẩu)" value={data.hometown} />
        </div>
      </section>

      <section className={styles.card}>
        <h2 className={styles.cardTitle}>Mô tả</h2>
        <p className={styles.description}>{data.description}</p>
      </section>

      <section className={styles.card}>
        <h2 className={styles.cardTitle}>Hình ảnh & giấy phép</h2>
        <div className={styles.mediaGrid}>
          <MediaBlock
            title="Ảnh phòng khám"
            src={data.clinicImage}
            alt="Ảnh phòng khám"
          />
          <MediaBlock
            title="Giấy phép kinh doanh"
            src={data.licenseImage}
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
