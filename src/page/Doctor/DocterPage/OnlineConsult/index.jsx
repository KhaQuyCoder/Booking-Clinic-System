import { useState, useEffect } from "react";
import patientsData from "./../../../../data/OnlineConsult.json";
import "./OnlineConsult.css";
const OnlineConsult = () => {
  const [patients] = useState(patientsData);
  const [video, setVideo] = useState(true);
  const [mic, setMic] = useState(true);
  useEffect(() => {
    window.scrollTo({
      behavior: "instant",
      top: "true",
    });
  });

  return (
    <div className="container-calldocter container-calldocter-doctor">
      <div className="wrapper-calldocter wrapper-calldocter-doctor">
        <h2 className="calldoctor-title">Danh sách bệnh nhân</h2>
        {patients.map((call, index) => (
          <div className="item-calldocter" key={index}>
            <div className="wrapper-activiti-calldocter">
              <img
                className="image-calldocter"
                src={call.avatar}
                alt={call.name}
              />
              <p
                className={call.activiti ? "activiti-calldocter-doctor" : ""}
              ></p>
            </div>

            <div className="infor-calldocter">
              <div className="name-hour-calldocter name-hour-calldocter-doctor">
                <p className="name-calldocter">{call.name}</p>
                <p className="hour-calldocter">{call.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="main-calldocter">
        <div className="screen-calldocter"></div>
        <div class="wrapper-action-calldocter">
          <p className="chat-calldocter">
            <i class="fa-solid fa-comment"></i>
          </p>
          <p className="video-calldocter" onClick={() => setVideo(!video)}>
            {video ? (
              <i class="fa-solid fa-video"></i>
            ) : (
              <i class="fa-solid fa-video-slash"></i>
            )}
          </p>
          <p className="mic-calldocter" onClick={() => setMic(!mic)}>
            {mic ? (
              <i class="fa-solid fa-microphone"></i>
            ) : (
              <i class="fa-solid fa-microphone-slash"></i>
            )}
          </p>
          <p className="control-calldocter">
            <i class="fa-solid fa-phone"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnlineConsult;
