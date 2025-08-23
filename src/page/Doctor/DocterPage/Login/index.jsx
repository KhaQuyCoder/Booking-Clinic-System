import React, { useState } from "react";
import ForgotPassword from "./../ForgotPassword"; // import component
import iconLogin from "../../../../assets/image/login.png";
import iconLogo from "../../../../assets/image/logo.png";
import accounts from "../../../../data/account.json";
import "./login.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showForgot, setShowForgot] = useState(false); // bật tắt form quên mật khẩu

  const handleLogin = () => {
    const foundAccount = accounts.find(
      (acc) => acc.phone === phone && acc.password === password
    );
    if (foundAccount) {
      toast.success("Đăng nhập thành công!", { position: "top-center", autoClose: 2000 });

      // Chuyển hướng sang màn hình Thống kê báo cáo
      setTimeout(() => navigate("/DoctorStatistics"), 0);
    } else {
      toast.error("Sai số điện thoại hoặc mật khẩu!", { position: "top-center", autoClose: 2000 });
    }
  };


  if (showForgot) return <ForgotPassword onBack={() => setShowForgot(false)} />;

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={iconLogin} alt="Doctors" />
      </div>

      <div className="login-box">
        <div className="logo-box">
          <img className="logo" src={iconLogo} alt="Logo" />
        </div>

        <input
          type="text"
          placeholder="Số điện thoại"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Đăng nhập</button>

        <div className="links">
          <a href="#" onClick={() => setShowForgot(true)}>Quên mật khẩu?</a> | <a href="#">Đăng ký?</a>
        </div>

        <div className="social-login">
          Hoặc đăng nhập bằng
          <div className="social-icons">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
