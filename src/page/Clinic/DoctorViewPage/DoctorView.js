import { useEffect, useMemo, useState } from "react";
import styles from "./DoctorView.module.css";

const defaultDoctor = {
  id: "BS-000123",
  tenBacSi: "Nguyễn Văn A",
  gioiTinh: "Nam",
  ngaySinh: "1985-07-12",
  quocTich: "Việt Nam",
  danToc: "Kinh",
  tonGiao: "Không",
  noiSinh: "Huế",
  soDT: "0912345678",
  email: "nguyenvana@example.com",

  soCCCD: "012345678901",
  ngayCapCCCD: "2020-01-15",
  noiCapCCCD: "Cục CSQLHC về TTXH",

  caLamViec: "Sáng (08:00 - 12:00), Chiều (13:30 - 17:00)",
  chuyenKhoa: "Tim mạch",
  kinhNghiem: "12 năm tại BV Đa khoa Trung ương",
  moTa: "Bác sĩ chuyên điều trị các bệnh lý về tim mạch. Tư vấn điều trị và theo dõi hậu phẫu.",

  queQuan: "Phú Vang, Thừa Thiên Huế",
  diaChiCuTru: "21 Lê Lợi, P. Phú Hội, TP. Huế",
  hoKhauThuongTru: "Tổ 5, P. An Cựu, TP. Huế",

  chungChiUrl: "",
};

export default function DoctorView() {
  const [doctor, setDoctor] = useState(defaultDoctor);
  const [editMode, setEditMode] = useState(false);
  const [draft, setDraft] = useState(defaultDoctor);
  const [fileInfo, setFileInfo] = useState(null);
  const isDirty = useMemo(
    () => JSON.stringify(doctor) !== JSON.stringify(draft) || !!fileInfo,
    [doctor, draft, fileInfo]
  );

  useEffect(() => {
    setDraft(doctor);
  }, [doctor]);

  useEffect(() => {
    return () => {
      if (fileInfo?.url) URL.revokeObjectURL(fileInfo.url);
    };
  }, [fileInfo]);

  const handleChange = (field, value) => {
    setDraft((prev) => ({ ...prev, [field]: value }));
  };

  const onUpload = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (fileInfo?.url) URL.revokeObjectURL(fileInfo.url);
    const url = URL.createObjectURL(f);
    setFileInfo({ name: f.name, url });
  };

  const cancelEdit = () => {
    setDraft(doctor);
    if (fileInfo?.url) URL.revokeObjectURL(fileInfo.url);
    setFileInfo(null);
    setEditMode(false);
  };

  const save = () => {
    const next = { ...draft, chungChiUrl: fileInfo?.url || doctor.chungChiUrl };
    setDoctor(next);
    setEditMode(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Thông tin bác sĩ</h1>
          <p className={styles.subtitle}>Mã: {doctor.id}</p>
        </div>
        <div className={styles.headerActions}>
          {!editMode ? (
            <button
              className={styles.btnPrimary}
              onClick={() => setEditMode(true)}
            >
              Chỉnh sửa
            </button>
          ) : (
            <>
              <button className={styles.btnGhost} onClick={cancelEdit}>
                Hủy
              </button>
              <button
                className={styles.btnPrimary}
                disabled={!isDirty}
                onClick={save}
              >
                Lưu thay đổi
              </button>
            </>
          )}
        </div>
      </div>

      <div className={styles.grid}>
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Hồ sơ cơ bản</h2>
          <div className={styles.formGrid}>
            <Field label="Tên bác sĩ">
              <Input
                readOnly={!editMode}
                value={draft.tenBacSi}
                onChange={(v) => handleChange("tenBacSi", v)}
              />
            </Field>
            <Field label="Giới tính">
              <Select
                readOnly={!editMode}
                value={draft.gioiTinh}
                onChange={(v) => handleChange("gioiTinh", v)}
                options={["Nam", "Nữ", "Khác"]}
              />
            </Field>
            <Field label="Ngày sinh">
              <Input
                type="date"
                readOnly={!editMode}
                value={draft.ngaySinh}
                onChange={(v) => handleChange("ngaySinh", v)}
              />
            </Field>
            <Field label="Quốc tịch">
              <Input
                readOnly={!editMode}
                value={draft.quocTich}
                onChange={(v) => handleChange("quocTich", v)}
              />
            </Field>
            <Field label="Dân tộc">
              <Input
                readOnly={!editMode}
                value={draft.danToc}
                onChange={(v) => handleChange("danToc", v)}
              />
            </Field>
            <Field label="Tôn giáo">
              <Input
                readOnly={!editMode}
                value={draft.tonGiao}
                onChange={(v) => handleChange("tonGiao", v)}
              />
            </Field>
            <Field label="Nơi sinh" col={2}>
              <Input
                readOnly={!editMode}
                value={draft.noiSinh}
                onChange={(v) => handleChange("noiSinh", v)}
              />
            </Field>
          </div>
        </section>

        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Liên hệ & hành chính</h2>
          <div className={styles.formGrid}>
            <Field label="Email">
              <Input
                type="email"
                readOnly={!editMode}
                value={draft.email}
                onChange={(v) => handleChange("email", v)}
              />
            </Field>
            <Field label="Số điện thoại">
              <Input
                readOnly={!editMode}
                value={draft.soDT}
                onChange={(v) => handleChange("soDT", v)}
              />
            </Field>
            <Field label="Số CCCD">
              <Input
                readOnly={!editMode}
                value={draft.soCCCD}
                onChange={(v) => handleChange("soCCCD", v)}
              />
            </Field>
            <Field label="Ngày cấp CCCD">
              <Input
                type="date"
                readOnly={!editMode}
                value={draft.ngayCapCCCD}
                onChange={(v) => handleChange("ngayCapCCCD", v)}
              />
            </Field>
            <Field label="Nơi cấp CCCD" col={2}>
              <Input
                readOnly={!editMode}
                value={draft.noiCapCCCD}
                onChange={(v) => handleChange("noiCapCCCD", v)}
              />
            </Field>
          </div>
        </section>

        {/* Công tác chuyên môn */}
        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Công tác chuyên môn</h2>
          <div className={styles.formGrid}>
            <Field label="Chuyên khoa">
              <Input
                readOnly={!editMode}
                value={draft.chuyenKhoa}
                onChange={(v) => handleChange("chuyenKhoa", v)}
              />
            </Field>
            <Field label="Ca làm việc" col={2}>
              <Input
                readOnly={!editMode}
                value={draft.caLamViec}
                onChange={(v) => handleChange("caLamViec", v)}
                placeholder="VD: Sáng 8:00-12:00; Chiều 13:30-17:00"
              />
            </Field>
            <Field label="Kinh nghiệm" col={2}>
              <Input
                readOnly={!editMode}
                value={draft.kinhNghiem}
                onChange={(v) => handleChange("kinhNghiem", v)}
              />
            </Field>
            <Field label="Mô tả" col={2}>
              <Textarea
                readOnly={!editMode}
                value={draft.moTa}
                onChange={(v) => handleChange("moTa", v)}
                rows={4}
              />
            </Field>
          </div>
        </section>

        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Quê quán & Hộ khẩu</h2>
          <div className={styles.formGrid}>
            <Field label="Quê quán" col={2}>
              <Input
                readOnly={!editMode}
                value={draft.queQuan}
                onChange={(v) => handleChange("queQuan", v)}
              />
            </Field>
            <Field label="Địa chỉ cư trú" col={2}>
              <Input
                readOnly={!editMode}
                value={draft.diaChiCuTru}
                onChange={(v) => handleChange("diaChiCuTru", v)}
              />
            </Field>
            <Field label="Hộ khẩu thường trú" col={2}>
              <Input
                readOnly={!editMode}
                value={draft.hoKhauThuongTru}
                onChange={(v) => handleChange("hoKhauThuongTru", v)}
              />
            </Field>
          </div>
        </section>

        <section className={styles.card}>
          <h2 className={styles.cardTitle}>Bằng chứng cấp chứng chỉ</h2>

          {!editMode && (doctor.chungChiUrl || fileInfo) && (
            <div className={styles.fileRow}>
              <span className={styles.fileName}>
                {fileInfo?.name || "Tệp đã lưu"}
              </span>
              <a
                className={styles.link}
                href={fileInfo?.url || doctor.chungChiUrl}
                target="_blank"
                rel="noreferrer"
              >
                Xem tệp
              </a>
            </div>
          )}

          {editMode && (
            <div className={styles.uploadWrap}>
              <label className={styles.uploadLabel}>
                <input
                  type="file"
                  accept="application/pdf,image/*"
                  onChange={onUpload}
                />
                Chọn file…
              </label>
              {fileInfo && (
                <div className={styles.fileRow}>
                  <span className={styles.fileName}>{fileInfo.name}</span>
                  <a
                    className={styles.link}
                    href={fileInfo.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Xem tạm
                  </a>
                </div>
              )}
              {!fileInfo && !doctor.chungChiUrl && (
                <p className={styles.hint}>
                  Chưa có tệp. Hãy tải lên PDF hoặc hình ảnh chứng chỉ.
                </p>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function Field({ label, children, col = 1 }) {
  return (
    <div className={`${styles.field} ${col === 2 ? styles.col2 : ""}`}>
      <label className={styles.label}>{label}</label>
      {children}
    </div>
  );
}

function Input({ value, onChange, readOnly, type = "text", placeholder }) {
  return (
    <input
      className={`${styles.input} ${readOnly ? styles.readonly : ""}`}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange && onChange(e.target.value)}
      readOnly={readOnly}
    />
  );
}

function Textarea({ value, onChange, readOnly, rows = 3 }) {
  return (
    <textarea
      className={`${styles.textarea} ${readOnly ? styles.readonly : ""}`}
      value={value}
      rows={rows}
      onChange={(e) => onChange && onChange(e.target.value)}
      readOnly={readOnly}
    />
  );
}

function Select({ value, onChange, readOnly, options = [] }) {
  if (readOnly) {
    return <div className={`${styles.input} ${styles.readonly}`}>{value}</div>;
  }
  return (
    <select
      className={styles.input}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
