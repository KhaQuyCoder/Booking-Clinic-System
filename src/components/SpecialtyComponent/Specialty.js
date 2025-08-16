import { useContext } from "react";
import "./Specialty.css";
import specialty from "../../data/Specialty.json";
import { State } from "../../state/context";
import { useNavigate } from "react-router-dom";
const Specialty = () => {
  const { setSearchSpecialty } = useContext(State);
  const navigate = useNavigate();
  const handelSearchSpecialty = (nameSpecialty) => {
    setSearchSpecialty(nameSpecialty);
    navigate(`/tim-kiem`);
  };
  return (
    <div className="container-specialty">
      <h2 className="title-Specialty">Tìm kiếm theo chuyên khoa</h2>
      <div className="wrapper-specialty">
        <div className="list-specialty-top">
          {specialty.slice(0, 7).map((itemTop, index) => (
            <div
              className="item-specialty-top"
              key={index}
              onClick={() => handelSearchSpecialty(itemTop.name)}
            >
              <img
                className="image-specialty"
                src={itemTop.imgae}
                alt={itemTop.name}
              />
              <div className="content-specialty-top">
                <p className="name-specialty-top">{itemTop.name}</p>
                <p className="quanlity-specialty-top">
                  Có {itemTop.clinic} phòng khám
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="list-specialty-bot">
          {specialty.slice(7, 14).map((itemBot, index) => (
            <div
              className="item-specialty-bot"
              key={index}
              onClick={() => handelSearchSpecialty(itemBot.name)}
            >
              <img
                className="image-specialty"
                src={itemBot.imgae}
                alt={itemBot.name}
              />
              <div className="content-specialty-bot">
                <p className="name-specialty-bot">{itemBot.name}</p>
                <p className="quanlity-specialty-bot">
                  Có {itemBot.clinic} phòng khám
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialty;
