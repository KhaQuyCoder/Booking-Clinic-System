import { useNavigate } from "react-router-dom";
import "./Message.css";
import { useContext } from "react";
import { State } from "../../state/context";

const Message = ({ messageName = "bạn đã đặt lịch thành công" }) => {
  const naviagte = useNavigate();
  const { messageRef } = useContext(State);
  return (
    <div className="wrapper-message" ref={messageRef}>
      <p className="content-message">
        <i class="fa-solid fa-circle-check"></i> {messageName}
      </p>
      <button
        className="view-booking"
        onClick={() => naviagte("/xem-lich-kham")}
      >
        Xem{" "}
      </button>
    </div>
  );
};

export default Message;
