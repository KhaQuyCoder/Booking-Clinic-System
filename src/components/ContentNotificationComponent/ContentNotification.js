import "./ContentNotification.css";
import notificationData from "../../data/Notification.json";
const ContentNotification = () => {
  return (
    <div className="container-ContentNotification">
      <h2 className="title-notification">Thông báo</h2>
      {notificationData.map((notification) => (
        <div className="wrapper-notification">
          <img
            src={notification.image}
            alt={notification.id}
            className="image-notification"
          />
          <p className="content-notification">{notification.content}</p>
          <i class="fa-solid fa-xmark"></i>
        </div>
      ))}
    </div>
  );
};

export default ContentNotification;
