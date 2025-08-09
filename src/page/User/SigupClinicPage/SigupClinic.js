import Input from "../../../components/InputComponent/Input";
import Header from "../../../layouts/LayoutsUser/Header/Header";
import "./SigupClinic.css";

const SigupClinic = () => {
  return (
    <div>
      <Header />
      <div className="container-sigupclinic">
        <h2>Thông tin phòng khám</h2>
        <div className="wrapper-sigclinic">
          <div className="infor-clinic-first">
            <Input name={"Tên phòng khám"} className={"name-sigupclinic"} />
            <Input name={"Địa chỉ"} className={"address-sigupclinic"} />
          </div>
          <div className="infor-clinic-second">
            <Input
              name={"số điện thoại liên hệ"}
              className={"name-sigupclinic"}
            />
            <Input name={"Email phòng khám"} className={"name-sigupclinic"} />
            <Input
              name={"Loại hìn phòng khám"}
              className={"name-sigupclinic"}
            />
          </div>
          <Input name={"Tên người đăng ký"} />
        </div>
      </div>
    </div>
  );
};

export default SigupClinic;
