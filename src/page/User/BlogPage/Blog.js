import Header from "../../../layouts/LayoutsUser/Header/Header";
import Footer from "../../../components/FooterComponent/Footer";
import "./Blog.css";
import { useEffect } from "react";
const Blog = () => {
  useEffect(() => {
    window.scrollTo({
      top: "true",
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <Header />
      <div className="container-blog">
        <h1>Đặt Lịch Khám Online – Giải Pháp Số Hóa Ngành Y Tế</h1>
        <p>
          Trong thời đại số, việc đến bệnh viện xếp hàng, chờ đợi hàng giờ để
          được khám bệnh đã trở thành vấn đề gây khó chịu cho nhiều người. Hệ
          thống Đặt Lịch Khám Bệnh Online ra đời như một giải pháp toàn diện
          giúp bệnh nhân chủ động thời gian khám chữa bệnh, đồng thời hỗ trợ
          phòng khám vận hành hiệu quả hơn.
        </p>
        <p>
          Hệ thống giúp kết nối bệnh nhân với hàng trăm phòng khám trên toàn
          quốc, hỗ trợ đăng ký, lựa chọn bác sĩ và quản lý hồ sơ sức khỏe nhanh
          chóng, bảo mật.
        </p>
        <h2>Tính năng nổi bật</h2>
        <ul className="feature-list">
          <li>
            <strong>1. Đặt lịch nhanh chóng – chỉ trong 30 giây:</strong> Người
            dùng chỉ cần chọn phòng khám, bác sĩ, giờ hẹn và xác nhận. Thao tác
            dễ dàng trên máy tính hoặc điện thoại.
          </li>
          <li>
            <strong>2. Lựa chọn bác sĩ theo chuyên khoa:</strong> Hệ thống hỗ
            trợ tra cứu hồ sơ bác sĩ, chuyên khoa, kinh nghiệm, đánh giá từ
            người bệnh cũ.
          </li>
          <li>
            <strong>3. Quản lý hồ sơ sức khỏe điện tử:</strong> Người bệnh có
            thể lưu trữ và truy cập hồ sơ mọi lúc – bao gồm đơn thuốc, kết quả
            xét nghiệm, tiền sử bệnh.
          </li>
          <li>
            <strong>4. Nhắc lịch tự động:</strong> Trước mỗi lịch hẹn, người
            dùng nhận thông báo qua email/SMS để không bị quên.
          </li>
          <li>
            <strong>5. Thanh toán trực tuyến tiện lợi:</strong> Hệ thống hỗ trợ
            nhiều phương thức như Momo, ZaloPay, ATM, Visa/MasterCard,...
          </li>
        </ul>
        <h2>Lợi ích dành cho người bệnh</h2>
        <ul>
          <li>Chủ động thời gian: Đặt lịch khám phù hợp với lịch cá nhân.</li>
          <li>Không phải chờ đợi: Đến đúng giờ – được khám đúng giờ.</li>
          <li>Minh bạch chi phí: Xem trước giá khám – không lo phát sinh.</li>
          <li>
            Theo dõi lịch sử khám: Dễ dàng kiểm tra đơn thuốc cũ hoặc chuẩn bị
            thông tin cho bác sĩ mới.
          </li>
        </ul>
        <h2>Lợi ích dành cho phòng khám</h2>
        <ul>
          <li>Giảm tải quy trình hành chính</li>
          <li>Tối ưu lịch làm việc của bác sĩ</li>
          <li>Tăng sự hài lòng và uy tín với bệnh nhân</li>
          <li>Phân tích dữ liệu để cải tiến dịch vụ</li>
        </ul>
        <h2>Các gói dịch vụ phòng khám</h2>
        <div className="service-package">
          <h3>
            Gói Cơ Bản – <span>Miễn phí</span>
          </h3>
          <ul>
            <li>Quản lý lịch đặt</li>
            <li>Hiển thị thông tin phòng khám</li>
            <li>Nhắc lịch qua email</li>
          </ul>

          <h3>
            Gói Nâng Cao – <span>499.000đ/tháng</span>
          </h3>
          <ul>
            <li>Tất cả tính năng cơ bản</li>
            <li>Quản lý hồ sơ bệnh nhân</li>
            <li>Nhắc lịch SMS</li>
            <li>Báo cáo hoạt động</li>
          </ul>

          <h3>
            Gói Chuyên Nghiệp - <span>1.199.000đ/tháng</span>
          </h3>
          <ul>
            <li>Tất cả tính năng nâng cao</li>
            <li>API kết nối HIS</li>
            <li>Hỗ trợ 24/7</li>
            <li>Giao diện theo thương hiệu</li>
          </ul>
        </div>
        <h2>Câu chuyện người dùng</h2>
        <div className="testimonial">
          <blockquote>
            “Tôi là mẹ của hai bé nhỏ. Trước đây, mỗi lần đưa con đi khám là một
            hành trình dài – chờ đợi hàng tiếng đồng hồ. Từ khi biết đến hệ
            thống này, tôi chủ động đặt lịch cho bé từ nhà, đến đúng giờ là được
            khám ngay. Rất tiết kiệm thời gian!”
            <footer>— Chị Ngọc, TP. HCM</footer>
          </blockquote>

          <blockquote>
            “Phòng khám của tôi dùng gói nâng cao. Giờ đây bác sĩ không cần gọi
            điện cho từng bệnh nhân nhắc lịch nữa, mọi thứ đều tự động. Tôi cũng
            dễ dàng thống kê số lượt khám trong tháng để cải thiện dịch vụ.”
            <footer>— Bác sĩ Hưng, Phòng khám Nội tổng quát Đà Nẵng</footer>
          </blockquote>
        </div>

        <div className="call-to-action">
          <p>
            <strong>Hãy bắt đầu ngay hôm nay!</strong>
          </p>
          <p>
            Bạn là bệnh nhân? 👉 <a href="#">Đặt lịch ngay</a>
          </p>
          <p>
            Bạn là phòng khám? 👉 <a href="#">Đăng ký sử dụng dịch vụ</a>
          </p>
          <p>
            Cùng nhau thay đổi thói quen khám bệnh – tiết kiệm thời gian, tối ưu
            trải nghiệm, và nâng cao chất lượng dịch vụ y tế!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
