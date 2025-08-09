import { useEffect, useState } from "react";
import Header from "../../../layouts/LayoutsUser/Header/Header";
import { useParams } from "react-router-dom";
import clinicData from "../../../data/clinic.json";
import FeedBackData from "../../../data/feedBack.json";
import "./Detail.css";
import Footer from "../../../components/FooterComponent/Footer";

import { DocterAll } from "../../../components/DocterComponent/CarDocter";
import FeedBack from "../../../components/FeddBackComponent/FeedBack";
import adchievementsData from "../../../data/adchievements.json";
import Adchiements from "../../../components/AdchievementPage/Adchiements";
import DetaiClinicCpn from "../../../components/DetailClinicComponent/DetaiClinicCpn";
const Detail = () => {
  const { slug: slugDetail } = useParams();
  const [clinicDetailShow, setClinicDetailShow] = useState({});
  const [dataDocterDetail, setDataDocterDetail] = useState([]);
  const [dataAdchievement, setDataAdchievement] = useState([]);

  const [feedBackList, setFeedBackList] = useState([]);

  const [nameClinic, setNameClinic] = useState("");

  useEffect(() => {
    setClinicDetailShow(() =>
      clinicData.find((clinic) => clinic.slug === slugDetail)
    );
  }, [slugDetail]);

  useEffect(() => {
    const dataDocterList = clinicData.find(
      (clinic) => clinic.slug === slugDetail
    );
    setNameClinic(dataDocterList.name);
    setDataDocterDetail(dataDocterList.docter);
  }, [slugDetail]);

  useEffect(() => {
    const dataFeedBackFilter = FeedBackData.filter(
      (feedBack) => feedBack.clinic === nameClinic
    );
    setFeedBackList(dataFeedBackFilter);
  }, [slugDetail, nameClinic]);

  useEffect(() => {
    setDataAdchievement(() =>
      adchievementsData.filter((adchiement) => adchiement.clinic === nameClinic)
    );
  }, [slugDetail, nameClinic]);

  useEffect(() => {
    window.scrollTo({
      top: "true",
      behavior: "instant",
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="container-detail">
        <h2 className="title-detail">Chi tiết phòng khám</h2>
        <DetaiClinicCpn clinicDetailShow={clinicDetailShow} />
        <h2 className="title-detail">Danh sách bác sĩ</h2>
        <div className="wrapper-docter-detail">
          {dataDocterDetail.map((docter, index) => (
            <DocterAll
              doctor={docter}
              key={index}
              path={`/${clinicDetailShow.slug}/dat-lich-kham`}
            />
          ))}
        </div>
        <div>
          <h2 className="title-detail">Thành tựu đạt được</h2>
          <Adchiements dataAdchievement={dataAdchievement} />
        </div>
        <FeedBack dataFeedBack={feedBackList} />
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
