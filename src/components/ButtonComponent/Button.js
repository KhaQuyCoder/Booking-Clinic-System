import "./Button.css";
import { Link, useNavigate } from "react-router-dom";
const Button = ({ login, booking, title, path, nameDocter }) => {
  const navigate = useNavigate();
  const handelBooking = () => {
    localStorage.setItem("nameDocterBooking", JSON.stringify(nameDocter));
    navigate(path);
  };
  return !booking ? (
    <button className="cpm-Button">{login ? "Đăng nhập" : "Đăng ký"}</button>
  ) : (
    <button
      className={title ? "btn-booking-docter" : "btn-viewMore"}
      onClick={handelBooking}
    >
      {title ? "Đặt lịch khám" : "Xem chi tiết"}
    </button>
  );
};
export const ViewMore = ({ path }) => (
  <Link to={path} className="cpm-viewMore">
    Xem thêm
  </Link>
);
export const BookingHome = () => (
  <button className="booking-home">Đặt lịch ngay</button>
);

export const Advise = ({ path }) => (
  <button className="advise-home">
    <Link to={path}>Tư vấn ngay</Link>
  </button>
);

export const Exit = ({ name, className, clickExit, handelShowMessage }) => (
  <button
    className={className}
    onClick={name === "Thoát" ? clickExit : handelShowMessage}
  >
    {name}
  </button>
);

export default Button;
