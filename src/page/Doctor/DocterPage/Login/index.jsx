import { useContext, useEffect, useState } from "react";
import iconLogin from "../../../../assets/image/login.png";
import iconLogo from "../../../../assets/image/logo.png";
import accounts from "../../../../data/account.json"; // import dữ liệu account
import "./login.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import bcg from "../../../../assets//image/backgroundBody.webp";
import { State } from "../../../../state/context";
const Login = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { setRole } = useContext(State);
  const handleLogin = () => {
    const foundAccount = accounts.find(
      (acc) => acc.phone === phone && acc.password === password
    );

    if (foundAccount) {
      localStorage.setItem("role", JSON.stringify(foundAccount.role));
      switch (foundAccount.role) {
        case "doctor":
          setRole("doctor");
          setTimeout(() => {
            navigate("/doctor");
          }, 200);
          break;
        case "admin":
          setRole("admin");
          navigate("/");
          setTimeout(() => {
            navigate("/admin");
          }, 200);
          break;
        case "user":
          setRole("user");
          setTimeout(() => {
            navigate("/");
          }, 200);
          break;
      }
    } else {
      toast.error("Sai số điện thoại hoặc mật khẩu!", {
        position: "top-center",
        autoClose: 2000,
        style: { marginBottom: "400px" },
      });
    }
    setTimeout(() => {
      window.location.reload();
    }, 200);
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
    </div>
  );
};

export default Login;
