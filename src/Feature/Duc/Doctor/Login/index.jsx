import React, { useState } from 'react';
import iconLogin from '../../../../assets/image/login.png';
import iconLogo from '../../../../assets/image/logo.png';
import accounts from '../../../../data/account.json'; // import dữ liệu account
import './login.css';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // dùng để điều hướng
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

   const handleLogin = () => {
    // kiểm tra trong file accounts.json
    const foundAccount = accounts.find(
      (acc) => acc.phone === phone && acc.password === password
    );

    if (foundAccount) {
      toast.success('Đăng nhập thành công!', {
        position: 'top-center',
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate('/'); // điều hướng về trang chủ
      }, 0);
    } else {
      toast.error('Sai số điện thoại hoặc mật khẩu!', {
        position: 'top-center',
        autoClose: 2000,
      });
    }
  };

return (
    <div className="login-container">
      {/* Ảnh minh họa */}
      <div className="login-image">
        <img src={iconLogin} alt="Doctors" />
      </div>

      {/* Form đăng nhập */}
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

        {/* Hiện thông báo */}
        {/* {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>} */}

        <div className="links">
          <a href="#">Quên mật khẩu?</a> | <a href="#">Đăng ký?</a>
        </div>

        <div className="social-login">
          Hoặc đăng nhập bằng
          <div className="social-icons">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              alt="Google"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
