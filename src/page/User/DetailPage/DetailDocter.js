import Footer from "../../../components/FooterComponent/Footer";
import Header from "../../../layouts/LayoutsUser/Header/Header";
import "./DetailDocter.css";
import dataClinic from "../../../data/clinic.json";
import { useEffect, useState } from "react";
import Button from "../../../components/ButtonComponent/Button";
import { Advise } from "../../../components/ButtonComponent/Button";
const DetailDocter = () => {
  const id = JSON.parse(localStorage.getItem("idDocter"));
  const [docterDetail, setDocterDetail] = useState({});
  useEffect(() => {
    const dataFilter = dataClinic.find((clinic) =>
      clinic.docter.some((docter) => docter.idDocter === id)
    );
    setDocterDetail(dataFilter.docter.find((docter) => docter.idDocter === id));
  }, [id]);
  useEffect(() => {
    window.scrollTo({
      top: "true",
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <Header />
      <div className="container-docterDetail">
        <p className="title-docterDetail">{docterDetail.name}</p>
        <div className="wrapper-backgroung-docterDetail">
          <img
            className="image-docterDetail"
            src={docterDetail.image}
            alt={docterDetail.name}
          />
          <div>
            <p style={{ fontWeight: "600" }}>
              Trưởng khoa {docterDetail.specialty}
            </p>
            <p style={{ fontWeight: "600" }}>Học hàm: {docterDetail.HocHam}</p>
            <p style={{ marginTop: "15px" }}>
              {docterDetail.name} đã có gần 30 năm kinh nghiệm chẩn đoán và điều
              trị các bệnh lý tiêu hóa, đặc biệt là chuyên ngành Tiêu hóa – Gan
              mật. Với hàng chục năm làm việc tại các bệnh viện lớn như Bệnh
              viện Bình Dân, Bệnh viện FV, Bệnh viện AIH, Bệnh viện Vinmec,… 
              {docterDetail.name} đã giúp hàng ngàn bệnh nhân được chẩn đoán sớm
              và điều trị kịp thời các bệnh lý tiêu hóa từ đơn giản đến phức
              tạp. Sau khi tốt nghiệp chuyên ngành bác sĩ đa khoa tại trường Đại
              học Y Dược TP.HCM, năm 2004, {docterDetail.name} nhận bằng Thạc sĩ
              về Ngoại tổng quát của trường này. Năm 2015, {docterDetail.name}{" "}
              tiếp tục bảo vệ thành công luận án Tiến sĩ Ngoại tiêu hóa, cũng
              tại trường đại học này. Không chỉ học tập và nghiên cứu trong
              nước,
              {docterDetail.name} còn tham gia nhiều khóa đào tạo chuyên môn ở
              nước ngoài. Đây là nền tảng để bác sĩ thực hiện hàng chục công
              trình nghiên cứu khoa học có giá trị, trở thành cơ sở để giảng dạy
              và đào tạo cho các thế hệ y bác sĩ hiện tại và tương lai. TP.HCM.
            </p>
            <div className="booking-docter">
              <Button
                booking={true}
                title={true}
                path={`/${docterDetail.slugClinic}/dat-lich-kham`}
                nameDocter={docterDetail.name}
              />
              <Advise path={"/tu-van"} />
            </div>
          </div>
        </div>
        <div>
          <p style={{ marginTop: "15px" }}>
            {docterDetail.name} có thế mạnh đặc biệt trong phẫu thuật ít xâm lấn
            điều trị các bệnh lý tiêu hóa, đặc biệt là ung thư đường tiêu hóa
            (thực quản, dạ dày, đại trực tràng); Phẫu thuật nội soi điều trị
            bệnh lý béo phì và chuyển hóa. Bác sĩ là thành viên Hội Ngoại khoa
            và Hội Phẫu thuật nội soi Việt Nam. Bác sĩ thường xuyên tham gia
            nhiều hội nghị ngoại khoa về nội soi và phẫu thuật nội soi trong
            nước cũng như thế giới. {docterDetail.name} từng đảm nhận vị trí Phó
            khoa điều hành khoa Ngoại tiêu hóa, Bệnh viện Bình Dân TP.HCM,
            Trưởng khoa Ngoại tổng quát Bệnh viện FV, Trưởng khoa Ngoại Tổng hợp
            Bệnh viện AIH và Trưởng khoa Ngoại Tổng hợp bệnh viện Vinmec Central
            Park, Phó trưởng tiểu ban Ngoại hệ thống bệnh viện Vinmec. Với kinh
            nghiệm nhiều năm trong lĩnh vực Ngoại khoa tổng quát, điều trị ít
            xâm lấn, đặc biệt trong chuyên ngành Tiêu hóa, bác sĩ luôn ấp ủ
            thành lập Trung tâm Nội soi – Phẫu thuật Nội soi Tiêu hóa. Đây là
            trung tâm đầu tiên tại Việt nam nhằm thống nhất trong tầm soát, phát
            hiện, chẩn đoán và điều trị hiệu quả nhất với kỹ thuật ít xâm lấn
            nhất cho các bệnh lý ống tiêu hóa.{" "}
          </p>
          <p style={{ margin: "15px 0", fontWeight: "600" }}>
            Quá trình đào tạo
          </p>
          <ul>
            {docterDetail.training?.map((train, index) => (
              <li key={index}>{train}</li>
            ))}
          </ul>
          <p style={{ margin: "15px 0", fontWeight: "600" }}>
            Kinh nghiệm công tác
          </p>
          <ul>
            {docterDetail.working?.map((work, index) => (
              <li key={index}>{work}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailDocter;
