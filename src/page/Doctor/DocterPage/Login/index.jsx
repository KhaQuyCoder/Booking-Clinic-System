import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { State } from "../../../../state/context";

import iconLogin from "../../../../assets/image/login.png";
import iconLogo from "../../../../assets/image/logo.png";
import bcg from "../../../../assets/image/backgroundBody.webp";
import accounts from "../../../../data/account.json";

import "react-toastify/dist/ReactToastify.css";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const { setRole } = useContext(State);
  const role = JSON.parse(localStorage.getItem("role"));
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    const foundAccount = accounts.find(
      (acc) => acc.phone === phone && acc.password === password
    );

    if (foundAccount) {
      localStorage.setItem("role", JSON.stringify(foundAccount.role));

      switch (foundAccount.role) {
        case "doctor":
          setRole("doctor");
          setTimeout(() => navigate("/doctor"), 200);
          break;
        case "admin":
          setRole("admin");
          setTimeout(() => navigate("/admin"), 200);
          break;
        case "user":
          setRole("user");
          setTimeout(() => navigate("/trang-chu"), 200);
          break;
        case "clinic":
          setRole("clinic");
          setTimeout(() => navigate("/clinic"), 200);
          break;
        default:
          break;
      }

      setTimeout(() => {
        window.location.reload();
      }, 200);
    } else {
      toast.error("Sai số điện thoại hoặc mật khẩu!", {
        position: "top-center",
        autoClose: 2000,
        style: { marginBottom: "400px" },
      });
    }
  };

  return (
    <div className="login-container">
      <img className="bcg-login" src={bcg} alt="bcg" />
      <div className="wrapper-container">
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
            style={{ width: role === "user" ? "93%" : "85%" }}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            style={{ width: role === "user" ? "93%" : "85%" }}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Đăng nhập</button>

          <div className="links">
            <a href="/forgotPassword">Quên mật khẩu?</a> |{" "}
            <a href="/register">Đăng ký?</a>
          </div>
          <div className="social-login">
            <span>Hoặc đăng nhập bằng</span>
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
    </div>
  );
};

export default Login;
