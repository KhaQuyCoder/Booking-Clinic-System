import "./Recomment.css";
import dataClinic from "../../data/clinic.json";
import { useContext } from "react";
import { State } from "../../state/context";
import { useNavigate } from "react-router-dom";

const Recomment = () => {
  const { valueText, setValueText } = useContext(State);
  const navigate = useNavigate();
  const filteredClinics = dataClinic.filter((clinic) =>
    clinic.name.toLowerCase().includes(valueText.toLowerCase())
  );
  const filteredDocters = dataClinic.flatMap((docters) =>
    docters.docter.filter((docter) =>
      docter.name.toLowerCase().includes(valueText.toLowerCase())
    )
  );
  const handelSearch = (slug) => {
    setValueText("");
    navigate(`/chi-tiet-phong-kham/${slug}`);
  };
  const handelSearchDoctor = (slug, id) => {
    setValueText("");
    localStorage.setItem("idDocter", JSON.stringify(id));
    navigate(`/xem-chi-tiet-bac-si/${slug}`);
  };
  return (
    <>
      <div className="content-recomment">
        {filteredClinics.map((clinic, index) => (
          <div
            className="wrapper-content-recomment"
            key={index}
            onClick={() => handelSearch(clinic.slug)}
          >
            <img
              src={clinic.image}
              alt={clinic.name}
              className="imgae-recomment"
            />
            <p className="name-recomment">{clinic.name}</p>
          </div>
        ))}
        {filteredDocters.map((docter, index) => (
          <div
            className="wrapper-content-recomment"
            key={index}
            onClick={() =>
              handelSearchDoctor(docter.slugDocter, docter.idDocter)
            }
          >
            <img
              src={docter.image}
              alt={docter.name}
              className="imgae-recomment"
            />
            <p className="name-recomment">{docter.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Recomment;
