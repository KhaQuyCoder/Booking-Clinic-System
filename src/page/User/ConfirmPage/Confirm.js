import "./Confirm.css";
import clinic from "../../../assets/image/Clinic.png";
import { useNavigate } from "react-router-dom";

const Confirm = () => {
  const navigate = useNavigate();
  return (
    <div className="container-confirm-wrapper">
      <div className="container-confirm">
        <img src={clinic} alt="clinic" className="imgae-confirm" />
        <div>
          <h1 className="name-confirm">
            Bạn muốn đăng ký 1 phòng khám cho tổ chức của mình?
          </h1>
          <button
            className="next-confirm"
            onClick={() => navigate("/dang-ky-phong-kham")}
          >
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
