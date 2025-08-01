import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
const Button = ({ login, booking, title }) => {
  return !booking ? (
    <button className="cpm-Button">{login ? "Đăng nhập" : "Đăng ký"}</button>
  ) : (
    <button className={title ? "btn-booking-docter" : "btn-viewMore"}>
      {title ? "Đặt lịch khám" : "Xem chi tiết"}
    </button>
  );
};
export const ViewMore = () => <Link className="cpm-viewMore">Xem thêm</Link>;
export const BookingHome = () => (
  <button className="booking-home">Đặt lịch ngay</button>
);
export const Advise = () => (
  <button className="advise-home">Tư vấn ngay</button>
);

export default Button;
