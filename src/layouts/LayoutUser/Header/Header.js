import React, { useEffect, useState } from "react";
import "./Header.css";
import backgoroundHeader from "../../../assets/image/backgrougHeader.webp";
import logo from "../../../assets/image/logo.png";
import Button from "../../../components/Button";
const Header = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const FetchData = async () => {
      try {
        const reponse = await fetch("https://esgoo.net/api-tinhthanh/1/0.htm");
        if (!reponse) {
          console.log("error");
        }
        const result = await reponse.json();
        setData(result.data);
      } catch (error) {
        console.error("Lỗi khi fetch dữ liệu:", error);
      }
    };
    FetchData();
  }, []);
  return (
    <div className="container">
      <div className="bcg-Header center">
        <img
          className="imageHeader"
          src={backgoroundHeader}
          alt="backgoroundHeader"
        />
        <div className="menuHeader">
          <img className="logo-header" src={logo} alt="logo" />
          <div className="Wrapper-Header">
            <ul className="Option-Header">
              <li>Trang chủ</li>
              <li>Bác sĩ</li>
              <li>Phòng khám</li>
              <li>Tư vấn</li>
              <li>Blog</li>
              <li>Chính sách bảo mật</li>
              <li>Kênh phòng khám</li>
            </ul>
            <div className="Search-Header">
              <input className="Search-Header-text" type="text" />
              <p className="text-Input">Tìm kiếm bác sĩ, phòng khám...</p>
              <i class="fa-solid fa-magnifying-glass"></i>
              <select className="Option-Address">
                <option>Thừa Thiên Huế</option>
                {data.map((item) => (
                  <option key={item.id}>{item.full_name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="System-Option-Header">
            <Button login={true} />
            <Button login={false} />
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
