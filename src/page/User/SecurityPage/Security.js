import "./Security.css";
import { useEffect } from "react";
import Header from "../../../layouts/LayoutsUser/Header/Header";
import Footer from "../../../components/FooterComponent/Footer";

const Security = () => {
  useEffect(() => {
    window.scrollTo({
      top: "true",
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <Header />
      <div className="security-container">
        <h1>Chính Sách Bảo Mật Thông Tin</h1>

        <p>
          Chúng tôi cam kết bảo vệ quyền riêng tư và dữ liệu cá nhân của người
          dùng khi sử dụng nền tảng đặt lịch khám online. Chính sách này nhằm
          giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của
          bạn.
        </p>

        <h2>1. Mục đích thu thập thông tin</h2>
        <p>Việc thu thập thông tin nhằm phục vụ cho các mục đích sau:</p>
        <ul>
          <li>Đặt lịch khám bệnh chính xác và hiệu quả.</li>
          <li>Quản lý hồ sơ khám chữa bệnh.</li>
          <li>Hỗ trợ chăm sóc khách hàng và tư vấn y tế.</li>
          <li>Gửi thông báo nhắc lịch hẹn qua email/SMS.</li>
          <li>Nâng cao chất lượng dịch vụ và trải nghiệm người dùng.</li>
        </ul>

        <h2>2. Thông tin cá nhân được thu thập</h2>
        <p>Chúng tôi có thể thu thập các thông tin sau:</p>
        <ul>
          <li>Họ và tên, giới tính, ngày sinh.</li>
          <li>Số điện thoại, email.</li>
          <li>Địa chỉ, lịch sử khám bệnh.</li>
          <li>Thông tin bảo hiểm y tế (nếu có).</li>
        </ul>

        <h2>3. Phạm vi sử dụng thông tin</h2>
        <p>
          Thông tin cá nhân chỉ được sử dụng trong nội bộ hệ thống đặt lịch khám
          và không chia sẻ cho bên thứ ba trừ khi có yêu cầu từ cơ quan chức
          năng hoặc có sự đồng ý của người dùng.
        </p>

        <h2>4. Thời gian lưu trữ thông tin</h2>
        <p>
          Thông tin cá nhân sẽ được lưu trữ trong hệ thống cho đến khi người
          dùng yêu cầu xóa hoặc khi không còn phục vụ mục đích ban đầu.
        </p>

        <h2>5. Quyền và trách nhiệm của người dùng</h2>
        <ul>
          <li>
            Người dùng có quyền yêu cầu chỉnh sửa, cập nhật hoặc xóa thông tin.
          </li>
          <li>Người dùng cần cung cấp thông tin chính xác, đầy đủ.</li>
          <li>Không chia sẻ tài khoản, mật khẩu với người khác.</li>
        </ul>

        <h2>6. Cam kết bảo mật</h2>
        <ul>
          <li>Thông tin được mã hóa và bảo vệ bằng công nghệ SSL.</li>
          <li>
            Hệ thống có cơ chế kiểm soát truy cập và sao lưu dữ liệu định kỳ.
          </li>
          <li>
            Nhân viên có quyền truy cập thông tin đều được đào tạo về bảo mật dữ
            liệu.
          </li>
        </ul>

        <h2>7. Thay đổi chính sách</h2>
        <p>
          Chính sách bảo mật có thể được cập nhật để phù hợp với quy định pháp
          luật và nhu cầu dịch vụ. Người dùng sẽ được thông báo khi có thay đổi.
        </p>

        <h2>8. Liên hệ</h2>
        <p>
          Mọi thắc mắc về chính sách bảo mật, vui lòng liên hệ: <br />
          📧 Email: hotro@bookingclinic.vn <br />
          ☎️ Hotline: 1900 1234
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Security;
