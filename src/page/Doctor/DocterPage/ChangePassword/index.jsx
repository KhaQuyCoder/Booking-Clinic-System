import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ChangePassword.css";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("Mật khẩu mới và xác nhận không khớp!");
      return;
    }

    if (newPassword.length < 6) {
      toast.warn("Mật khẩu mới phải từ 6 ký tự!");
      return;
    }

    // Giả lập đổi mật khẩu thành công
    toast.success("Đổi mật khẩu thành công!");
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="change-password-container">
      <div className="change-password-card">
        <h2>Đổi Mật Khẩu</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Mật khẩu cũ:</label>
            <input
              type={showPassword ? "text" : "password"}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Mật khẩu mới:</label>
            <input
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Xác nhận mật khẩu mới:</label>
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="show-password-toggle">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={handleTogglePassword}
            />
            Hiển thị mật khẩu
          </div>

          <button type="submit" className="btn-submit">
            Đổi mật khẩu
          </button>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ChangePassword;
