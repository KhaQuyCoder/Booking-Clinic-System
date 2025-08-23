import "./ClinicCpn.css";
import { useNavigate } from "react-router-dom";
const ClinicCpn = ({ item, index }) => {
  const navigate = useNavigate();
  const handelClickDetailClinic = (slug) => {
    navigate(`/chi-tiet-phong-kham/${slug}`);
  };
  return (
    <div
      className="item-clinic"
      key={index}
      onClick={() => handelClickDetailClinic(item.slug)}
    >
      <img className="image-clinic" src={item.image} alt={item.name} />
      <div>
        <p className="name-clinic">{item.name}</p>
        <p className="location-clinic">
          <i class="fa-solid fa-location-dot"></i>
          {item.location}
        </p>
        <p className="openClock-clinic">
          <i class="fa-regular fa-clock"></i>
          {item.openClock}
        </p>
        <span className="status-clinic">
          <span
            className={
              item.status
                ? "color-status-open-clinic"
                : "color-status-close-clinic"
            }
          ></span>
          <span>{item.status ? "Đang hoạt động" : "Đã đóng cửa"}</span>
        </span>
      </div>
    </div>
  );
};

export default ClinicCpn;
