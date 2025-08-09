import React, { useContext, useEffect, useRef, useState } from "react";
import "./Header.css";
import backgoroundHeader from "../../../assets/image/backgrougHeader.webp";
import logo from "../../../assets/image/logo .png";
import Button from "../../../components/ButtonComponent/Button";
import { State } from "../../../state/context";
import { useNavigate } from "react-router-dom";
import Recomment from "../../../components/RecomentComponent/Recomment";

const Header = () => {
  const [data, setData] = useState([]);
  const { setLoading, setResetPage, setValueText, valueText } =
    useContext(State);
  const textSearch = useRef();
  const Search = useRef();
  const navigate = useNavigate();
  const [checkTextSearch, setCheckTextSearch] = useState(false);
  const [text, setText] = useState("");

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

  const changerLocation = () => {
    setLoading(true);
    setResetPage(false);
    setTimeout(() => {
      setLoading(false);
      setResetPage(true);
    }, 500);
  };

  const handlerEnterSearch = () => {
    Search.current.focus();
    setCheckTextSearch(true);
    textSearch.current.style.display = "none";
  };

  const handelBlurSearch = () => {
    if (Search.current.value !== "") {
      return;
    }
    setCheckTextSearch(false);
    textSearch.current.style.display = "block";
  };
  useEffect(() => {
    const textAnimation = "Tìm kiếm bác sĩ, phòng khám...";
    let index = 0;
    let checkIndex = false;

    const textSearchAnimation = () => {
      setText(textAnimation.slice(0, index));
      if (!checkIndex) {
        if (index < textAnimation.length) {
          index++;
        } else {
          checkIndex = true;
        }
      } else {
        if (index > 0) {
          index--;
        } else {
          checkIndex = false;
        }
      }
    };
    const interval = setInterval(textSearchAnimation, 70);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handelChangeText = (e) => {
    setValueText(e.target.value);
  };
  return (
    <div className="main-home">
      <div className="custom-container">
        <div className="bcg-Header">
          <img
            className="imageHeader"
            src={backgoroundHeader}
            alt="backgoroundHeader"
          />

          <div className="menuHeader">
            <img
              className="logo-header"
              src={logo}
              alt="logo"
              onClick={() => navigate("/")}
            />
            <div className="Wrapper-Header">
              <ul className="Option-Header">
                <li onClick={() => navigate("/")}>Trang chủ</li>
                <li onClick={() => navigate("/bac-si")}>Bác sĩ</li>
                <li onClick={() => navigate("/phong-kham")}>Phòng khám</li>
                <li onClick={() => navigate("/tu-van")}>Tư vấn</li>
                <li onClick={() => navigate("/blog")}>Blog</li>
                <li onClick={() => navigate("/chinh-sach-bao-mat")}>
                  Chính sách bảo mật
                </li>
                <li onClick={() => navigate("/confirm")}>Kênh phòng khám</li>
              </ul>
              <div className="Search-Header">
                <input
                  className="custom-Search-Header-text"
                  type="text"
                  onClick={handlerEnterSearch}
                  placeholder={checkTextSearch ? "Bạn muốn tìm gì?" : ""}
                  ref={Search}
                  onBlur={handelBlurSearch}
                  onChange={(e) => handelChangeText(e)}
                />
                <p
                  className="custom-text-Input"
                  ref={textSearch}
                  onClick={handlerEnterSearch}
                >
                  {text}
                </p>
                <i class="fa-solid fa-magnifying-glass"></i>
                <select
                  className="Option-Address"
                  onChange={() => changerLocation()}
                >
                  <option>Thừa Thiên Huế</option>
                  {data.map((item) => (
                    <option key={item.id}>{item.full_name}</option>
                  ))}
                </select>
                {valueText.length > 0 && <Recomment />}
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
    </div>
  );
};

export default Header;
