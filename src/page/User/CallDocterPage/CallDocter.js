import "./CallDocter.css";
import callDocterData from "../../../data/CallDocter.json";
import Header from "../../../layouts/LayoutsUser/Header/Header";
import Footer from "../../../components/FooterComponent/Footer";
import { useEffect, useState } from "react";
const CallDocter = () => {
  const [video, setVideo] = useState(true);
  const [mic, setMic] = useState(true);
  useEffect(() => {
    window.scrollTo({
      behavior: "instant",
      top: "true",
    });
  });
  return (
    <>
      <Header />
      <div className="container-calldocter">
        <div className="wrapper-calldocter">
          {callDocterData.map((call, index) => (
            <div className="item-calldocter" key={index}>
              <div className="wrapper-activiti-calldocter">
                <img
                  className="image-calldocter"
                  src={call.image}
                  alt={call.name}
                />
                <p className={call.activiti ? "activiti-calldocter" : ""}></p>
              </div>

              <div className="infor-calldocter">
                <div className="name-hour-calldocter">
                  <p className="name-calldocter">{call.name}</p>
                  <span className="hour-calldocter">{call.hour}</span>
                </div>
                <p className="clinic-calldocter">{call.clinic}</p>
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
      <Footer />
    </>
  );
};

export default CallDocter;
