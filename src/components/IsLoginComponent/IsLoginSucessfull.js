import { useContext, useEffect, useRef, useState } from "react";
import "./IsLoginSucessfull.css";
import { Link } from "react-router-dom";
import ContentNotification from "../ContentNotificationComponent/ContentNotification";
import { State } from "../../state/context";

const IsLoginSucessfull = () => {
  const [menuUser, setMenuUser] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const notificationRef = useRef();
  const menuRef = useRef(null);
  const { avatar } = useContext(State);
  const handelSlideDown = () => {
    setMenuUser((prev) => !prev);
  };
  const handelNotification = () => {
    setNotifications((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuUser(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setNotifications(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="container-islogin">
      <Link className="calenda-islogin" to={"/xem-lich-kham"}>
        Lịch khám của tôi
      </Link>
      <div className="wrapper-notification-islogin" ref={notificationRef}>
        <i className="fa-regular fa-bell" onClick={handelNotification}></i>
        <span className="quanlity-notification-islogin">2</span>
        {notifications && <ContentNotification />}
      </div>
      <div className="wrapper-infor-islogin" ref={menuRef}>
        <img
          src={avatar}
          alt="avt"
          className="image-islogin"
          onClick={handelSlideDown}
        />
        {menuUser && (
          <div className="option-islogin">
            <div className="infor-user-islogin">
              <img src={avatar} alt="avt" className="image-islogin" />
              <div className="content-infor-user-islogin">
                <p>Hồ Khả Quý</p>
                <p style={{ color: "#A8A8A8", marginTop: "5px" }}>
                  03235635424
                </p>
              </div>
            </div>
            <div className="option-user-islogin">
              <Link to={"/trang-ca-nhan"}>Hồ sơ của tôi</Link>
              <Link to={"/lich-su-kham-benh"}>Lịch sử khám bệnh</Link>
              <Link to={"/kham-lam-san"}>Khám lâm sàn - online</Link>
            </div>
            <div className="setting-user-islogin">
              <Link>Cài đặt</Link>
              <Link to={"/login"}>Đăng xuất</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IsLoginSucessfull;
