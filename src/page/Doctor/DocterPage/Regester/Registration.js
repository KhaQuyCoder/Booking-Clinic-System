import React, { useState } from "react";
import styles from "./Registration.module.css";
import bcg from "../../../../assets/image/backgroundBody.webp";
import iconLogin from "../../../../assets/image/login.png";

export default function Register() {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const [sendingOtp, setSendingOtp] = useState(false);
  const role = JSON.parse(localStorage.getItem("role"));
  function validatePhone(p) {
    return /^((\+84)|0)\d{9}$/.test(p);
  }

  function validatePassword(p) {
    return /(?=.*[0-9])(?=.*[a-zA-Z]).{6,}/.test(p);
  }

  const handleNext = () => {
    setError("");
    if (!validatePhone(phone)) return setError("Số điện thoại không hợp lệ.");
    if (!validatePassword(password))
      return setError("Mật khẩu yêu cầu ít nhất 6 ký tự, có chữ và số.");

    setSendingOtp(true);
    setTimeout(() => {
      setSendingOtp(false);
      setStep(2);
    }, 800);
  };

  const handleChangeOtp = (e, idx) => {
    const val = e.target.value.replace(/[^0-9]/g, "").slice(0, 1);
    const newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);
    if (val && idx < 5) {
      const next = document.getElementById(`otp-${idx + 1}`);
      next?.focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code.length < 6) return setError("Nhập đủ 6 chữ số OTP.");
    setError("");
    alert(`Đăng ký thành công! SĐT: ${phone} — OTP: ${code}`);
  };

  const handleResend = () => {
    setError("");
    setSendingOtp(true);
    setTimeout(() => {
      setSendingOtp(false);
      setOtp(new Array(6).fill(""));
    }, 800);
  };

  return (
    <>
      <img className="bcg-login" src={bcg} alt="bcg" />
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>Đăng ký</h1>
          {step === 1 && (
            <div className={styles.form}>
              <label className={styles.label}>
                Số điện thoại
                <input
                  className={styles.input}
                  placeholder="0xxxxxxxxx hoặc +84xxxxxxxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  inputMode="tel"
                  style={{ width: role === "user" ? "93%" : "85%" }}
                />
              </label>

              <label className={styles.label}>
                Mật khẩu
                <input
                  className={styles.input}
                  type="password"
                  placeholder="Ít nhất 6 ký tự, có chữ và số"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: role === "user" ? "93%" : "85%" }}
                />
              </label>

              {error && <div className={styles.error}>{error}</div>}

              <button
                className={styles.nextBtn}
                onClick={handleNext}
                disabled={sendingOtp}
              >
                {sendingOtp ? "Gửi mã..." : "Tiếp"}
              </button>
            </div>
          )}

          {step === 2 && (
            <div className={styles.otpWrap}>
              <p className={styles.subtitle}>
                Nhập mã OTP đã gửi tới <strong>{phone}</strong>
              </p>

              <div className={styles.otpInputs}>
                {otp.map((v, i) => (
                  <input
                    key={i}
                    id={`otp-${i}`}
                    className={styles.otp}
                    value={v}
                    onChange={(e) => handleChangeOtp(e, i)}
                    inputMode="numeric"
                  />
                ))}
              </div>

              {error && <div className={styles.error}>{error}</div>}

              <div className={styles.actions}>
                <button className={styles.verifyBtn} onClick={handleVerify}>
                  Xác nhận
                </button>

                <button
                  className={styles.resendBtn}
                  onClick={handleResend}
                  disabled={sendingOtp}
                >
                  {sendingOtp ? "Đang gửi..." : "Gửi lại mã"}
                </button>
              </div>

              <button
                className={styles.backLink}
                onClick={() => {
                  setStep(1);
                  setError("");
                }}
              >
                Quay lại
              </button>
            </div>
          )}

          <p className={styles.small}>
            Bằng việc tiếp tục, bạn đồng ý với điều khoản sử dụng.
          </p>
        </div>
      </div>
    </>
  );
}
