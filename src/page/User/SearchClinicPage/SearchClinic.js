import "./SearchClinic.css";
import dataClinic from "../../../data/clinic.json";
import { useContext, useEffect, useState } from "react";
import { State } from "../../../state/context";
import ClinicCpn from "../../../components/ClinicComponent/ClinicCpn";
import Fuse from "fuse.js";
import Header from "../../../layouts/LayoutsUser/Header/Header";
import Footer from "../../../components/FooterComponent/Footer";

const SearchClinic = () => {
  const [dataShow, setDataShow] = useState([]);
  const { searchSpecialty } = useContext(State);

  useEffect(() => {
    const fuse = new Fuse(dataClinic, {
      keys: ["specialty"],
      threshold: 0.4,
    });

    const result = fuse.search(searchSpecialty);
    setDataShow(result.map((r) => r.item));
  }, [searchSpecialty]);

  return (
    <>
      <Header />
      <div className="container-searchSpecialty">
        {dataShow.length != 0 ? (
          <p className="done-searchSpecialty">
            Đã tìm kiếm các phòng khám có chuyên khoa{" "}
            <strong>{searchSpecialty}</strong>
          </p>
        ) : (
          " "
        )}
        <div className="wrapper-clinic">
          {dataShow.length != 0 ? (
            dataShow.map((item, index) => (
              <ClinicCpn key={index} item={item} index={index} />
            ))
          ) : (
            <p className="message-searchSpecialty">
              Hiện tại không có phòng khám nào có chuyên khoa{" "}
              <strong>{searchSpecialty}</strong>.
            </p>
          )}
        </div>
      </div>
      {dataShow.length != 0 && <Footer />}
    </>
  );
};

export default SearchClinic;
