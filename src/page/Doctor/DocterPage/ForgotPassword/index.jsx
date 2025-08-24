import React, { useState } from "react";
import accounts from "../../../../data/account.json";
import "./ForgotPassword.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = ({ onBack }) => {
  const [phone, setPhone] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const handleCheckPhone = (e) => {
    e.preventDefault();
    setError("");
    const account = accounts.find((acc) => acc.phone === phone);
    if (!account) {
      setError("Số điện thoại không tồn tại!");
      return;
    }
    setStep(2);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setError("");

    if (!newPassword || !confirmPassword) {
      setError("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Mật khẩu nhập lại không khớp!");
      return;
    }

    const accountIndex = accounts.findIndex((acc) => acc.phone === phone);
    if (accountIndex !== -1) {
      accounts[accountIndex].password = newPassword;

      toast.success("Đổi mật khẩu thành công!", {
        position: "top-center",
        autoClose: 2000,
      });

      setTimeout(() => onBack(), 2000);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-box">
          <img className="logo" src="./Logo.svg" alt="Logo" />
        </div>

        {step === 1 && (
          <form onSubmit={handleCheckPhone}>
            <h2>Quên mật khẩu</h2>
            <p className="form-text">
              Nhập số điện thoại để xác nhận tài khoản của bạn
            </p>
            <input
              type="text"
              placeholder="Số điện thoại"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <button type="submit">Tiếp theo</button>
            <div className="links">
              <a href="#" onClick={onBack}>
                Quay lại đăng nhập
              </a>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleChangePassword}>
            <h2>Đặt mật khẩu mới</h2>
            <p className="form-text">Nhập mật khẩu mới cho tài khoản của bạn</p>
            <input
              type="password"
              placeholder="Mật khẩu mới"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Nhập lại mật khẩu mới"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <button type="submit">Đổi mật khẩu</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
