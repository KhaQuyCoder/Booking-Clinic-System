import React from "react";
import "./Footer.css";
import bcgFooter from "../../assets/image/backgrougHeader.webp";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="container-footer">
      <div className="background-footer">
        <img src={bcgFooter} className="imageFooter" />
      </div>
      <div className="wrapper-footer">
        <div className="about-us-footer">
          <h2>Về chúng tôi</h2>
          <div className="content-footer">
            {[
              "Giới thiệu",
              "Giấy phép kinh doanh",
              "Chính sách nội dung",
              "Quy chế hoạt động",
            ].map((item, index) => (
              <Link key={index}>{item}</Link>
            ))}
          </div>
        </div>
        <div className="catelogy-footer">
          <h2>Danh mục</h2>
          <div className="content-footer">
            {[
              "Giới thiệu",
              "Giấy phép kinh doanh",
              "Chính sách nội dung",
              "Quy chế hoạt động",
            ].map((item, index) => (
              <Link key={index}>{item}</Link>
            ))}
          </div>
        </div>
        <div className="more-footer">
          <h2>Tìm hiểu thêm</h2>
          <div className="content-footer">
            {[
              "Giới thiệu",
              "Giấy phép kinh doanh",
              "Chính sách nội dung",
              "Quy chế hoạt động",
            ].map((item, index) => (
              <Link key={index}>{item}</Link>
            ))}
          </div>
        </div>
        <div className="contat-footer">
          <h2>Liên hệ với chúng tôi</h2>
          <div className="content-footer">
            {[
              "Giới thiệu",
              "Giấy phép kinh doanh",
              "Chính sách nội dung",
              "Quy chế hoạt động",
            ].map((item, index) => (
              <Link key={index}>{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
