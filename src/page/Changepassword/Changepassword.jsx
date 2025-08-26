import React, { useMemo, useState } from "react";
import styles from "./ChangePassword.module.css";
const ChangePassword = ({ onSubmit }) => {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [show, setShow] = useState({
    current: false,
    next: false,
    confirm: false,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const strength = useMemo(() => {
    const pwd = form.newPassword || "";
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/\d/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    return Math.min(score, 4);
  }, [form.newPassword]);

  const strengthLabel = ["Rất yếu", "Yếu", "Trung bình", "Mạnh", "Rất mạnh"][
    strength
  ];

  const validate = () => {
    const e = {};
    if (!form.currentPassword.trim())
      e.currentPassword = "Vui lòng nhập mật khẩu hiện tại.";
    if (!form.newPassword) e.newPassword = "Vui lòng nhập mật khẩu mới.";
    if (form.newPassword && form.newPassword.length < 8)
      e.newPassword = "Mật khẩu mới phải tối thiểu 8 ký tự.";
    if (form.newPassword && !/[A-Z]/.test(form.newPassword))
      e.newPassword =
        (e.newPassword ? e.newPassword + " " : "") +
        "Cần có ít nhất 1 chữ in hoa.";
    if (form.newPassword && !/\d/.test(form.newPassword))
      e.newPassword =
        (e.newPassword ? e.newPassword + " " : "") + "Cần có ít nhất 1 chữ số.";
    if (!form.confirmPassword)
      e.confirmPassword = "Vui lòng nhập lại mật khẩu.";
    if (
      form.newPassword &&
      form.confirmPassword &&
      form.newPassword !== form.confirmPassword
    )
      e.confirmPassword = "Mật khẩu nhập lại không khớp.";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    try {
      setSubmitting(true);
      if (typeof onSubmit === "function") {
        await onSubmit(form);
      }
      setForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      alert("Đổi thành công");
      setErrors({});
    } catch {
      alert("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Đổi mật khẩu</h1>
            <p className={styles.subtitle}>
              Vui lòng nhập đúng mật khẩu hiện tại và mã xác nhận được gửi tới
              email/số điện thoại.
            </p>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label>Mật khẩu hiện tại</label>
            <div className={styles.inputGroup}>
              <input
                type={show.current ? "text" : "password"}
                name="currentPassword"
                value={form.currentPassword}
                onChange={handleChange}
                placeholder="Nhập mật khẩu hiện tại"
                autoComplete="current-password"
              />
              <button
                type="button"
                className={styles.eye}
                onClick={() => setShow((p) => ({ ...p, current: !p.current }))}
                aria-label="Hiện/ẩn mật khẩu hiện tại"
              >
                {show.current ? "🙈" : "👁️"}
              </button>
            </div>
            {errors.currentPassword && (
              <span className={styles.error}>{errors.currentPassword}</span>
            )}
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>Mật khẩu mới</label>
              <div className={styles.inputGroup}>
                <input
                  type={show.next ? "text" : "password"}
                  name="newPassword"
                  value={form.newPassword}
                  onChange={handleChange}
                  placeholder="Tối thiểu 8 ký tự, gồm chữ hoa & số"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className={styles.eye}
                  onClick={() => setShow((p) => ({ ...p, next: !p.next }))}
                  aria-label="Hiện/ẩn mật khẩu mới"
                >
                  {show.next ? "🙈" : "👁️"}
                </button>
              </div>

              <div className={styles.meterWrap} aria-hidden="true">
                <div className={`${styles.meter} ${styles[`lv${strength}`]}`} />
              </div>
              <small className={styles.meterLabel}>
                Độ mạnh: {strengthLabel}
              </small>

              {errors.newPassword && (
                <span className={styles.error}>{errors.newPassword}</span>
              )}
            </div>

            <div className={styles.field}>
              <label>Nhập lại mật khẩu</label>
              <div className={styles.inputGroup}>
                <input
                  type={show.confirm ? "text" : "password"}
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Nhập lại mật khẩu mới"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className={styles.eye}
                  onClick={() =>
                    setShow((p) => ({ ...p, confirm: !p.confirm }))
                  }
                  aria-label="Hiện/ẩn nhập lại mật khẩu"
                >
                  {show.confirm ? "🙈" : "👁️"}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className={styles.error}>{errors.confirmPassword}</span>
              )}
            </div>
          </div>
          <div className={styles.footer}>
            <button type="submit" className={styles.submitBtn}>
              {submitting ? "Đang đổi..." : "Đổi mật khẩu"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
