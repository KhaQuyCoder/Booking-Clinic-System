import { useEffect, useState } from "react";
import "./CarDocter.css";
import Button from "../../../src/components/ButtonComponent/Button";
const CarDocter = ({ doctor, item }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="container-docterCar">
      <div
        className={`flip-card ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              className="image-docter"
              src={doctor.image}
              alt={doctor.name}
            />
            <p className="name-docter">{doctor.name}</p>
            <p className="specialty-docter">Trưởng khoa {doctor.specialty}</p>
            <p className="description-clinic">{doctor.description}</p>

            <div className="booking-docter">
              <Button
                booking={true}
                title={true}
                path={`/${item.slug}/dat-lich-kham`}
                nameDocter={doctor.name}
              />
              <Button
                booking={true}
                path={`/xem-chi-tiet-bac-si/${doctor.slugDocter}`}
                idDocter={doctor.idDocter}
              />
            </div>
          </div>

          <div className="flip-card-back">
            TS.BS Đỗ Minh Hùng đã có gần 30 năm kinh nghiệm chẩn đoán và điều
            trị các bệnh lý tiêu hóa, đặc biệt là chuyên ngành Tiêu hóa – Gan
            mật. Với hàng chục năm làm việc tại các bệnh viện lớn như Bệnh viện
            Bình Dân, Bệnh viện FV, Bệnh viện AIH, Bệnh viện Vinmec,… Bác sĩ Đỗ
            Minh Hùng đã giúp hàng ngàn bệnh nhân được chẩn đoán sớm và điều trị
            kịp thời các bệnh lý tiêu hóa từ đơn giản đến phức tạp.
          </div>
        </div>
      </div>
    </div>
  );
};
export const DocterAll = ({ doctor }) => {
  return (
    <>
      <div className="item-docterAll">
        <img src={doctor.image} alt={doctor.name} className="image-docter" />
        <div>
          <p className="name-docter">
            {doctor.HocHam} - {doctor.name}
          </p>
          <p className="specialty-docter specialty-docterAll">
            Trưởng khoa {doctor.specialty}
          </p>
          <p className="description-clinic description-clinic-forDocterAll">
            {doctor.description}
          </p>
          <div className="booking-docter">
            <Button
              booking={true}
              title={true}
              path={`/${doctor.slugClinic}/dat-lich-kham`}
              nameDocter={doctor.name}
              docter={doctor}
            />
            <Button
              booking={true}
              path={`/xem-chi-tiet-bac-si/${doctor.slugDocter}`}
              idDocter={doctor.idDocter}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDocter;
