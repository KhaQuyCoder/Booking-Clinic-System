import { Formpassword } from "./Formpassword";
import "./Changepassword.css";

function Changepassword() {
  return (
    <div className="changepassword">
      <h2 className="change">Đổi mật khẩu</h2>
      <div className="change">
        Mật khẩu của bạn phải có tối thiểu 8 ký tự, đồng thời bao gồm cả chữ số,
        chữ cái và ký tự đặc biệt (!$@%).
      </div>
      <Formpassword />
    </div>
  );
}
export { Changepassword };
