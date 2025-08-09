import { Advise, BookingHome } from "../ButtonComponent/Button";
const DetaiClinicCpn = ({ clinicDetailShow }) => {
  return (
    <div className="wrapper-detail">
      <img src={clinicDetailShow.image} className="image-detail" />
      <div className="infor-detail">
        <p className="name-detail">{clinicDetailShow.name}</p>
        <p>
          <i class="fa-solid fa-location-dot"></i> {clinicDetailShow.address}
        </p>
        <p>
          <i class="fa-regular fa-clock"></i> Giờ mở cửa:{" "}
          {clinicDetailShow.openClock}
        </p>
        <p>{clinicDetailShow.description}</p>
        <p>Ngày thành lập: {clinicDetailShow.DateStart}</p>
        <p>Liên hệ tư vấn: {clinicDetailShow.Phone}</p>
        <p>
          Các loại chuyên khoa:{" "}
          {clinicDetailShow.specialty?.map((i, index) =>
            index != clinicDetailShow.specialty.length - 1 ? i + "," : i + "."
          )}
          <p>Chủ cơ sở: {clinicDetailShow.facilityOwner}</p>
          <div>
            <BookingHome />
            <Advise path={"/tu-van"} />
          </div>
        </p>
      </div>
    </div>
  );
};

export default DetaiClinicCpn;
