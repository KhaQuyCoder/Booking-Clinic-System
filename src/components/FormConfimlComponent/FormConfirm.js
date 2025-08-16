import { Exit } from "../ButtonComponent/Button";
import "./FormConfirm.css";
const FormConfiml = ({
  dataDocter,
  dataClinic,
  day,
  hour,
  setClickBooking,
  handelShowMessage,
}) => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const handelClickExit = () => {
    setClickBooking(false);
  };
  return (
    <div className="container-formConfirm">
      <p className="confirm-title">Xác nhận đặt lịch khám</p>
      <div className="confirm-table-wrapper">
        <table className="confirm-table">
          <thead>
            <tr>
              <th>Họ và tên</th>
              <th>Tuổi</th>
              <th>Số điện thoại</th>
              <th>Tên phòng khám</th>
              <th>Địa chỉ</th>
              <th>Tên bác sĩ</th>
              <th>Chuyên khoa</th>
              <th>Thời gian khám bệnh</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hồ Khả Quý</td>
              <td>21</td>
              <td>03234235</td>
              <td>{dataClinic.name}</td>
              <td>{dataClinic.address}</td>
              <td>{dataDocter.name}</td>
              <td>{dataDocter.specialty}</td>
              <td>
                {day}: {hour}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ float: "inline-end" }}>
        <Exit name={"Thoát"} className={"exit"} clickExit={handelClickExit} />
        <Exit
          name={"Xác nhận"}
          className={"confirm"}
          handelShowMessage={handelShowMessage}
        />
      </div>
    </div>
  );
};

export default FormConfiml;
