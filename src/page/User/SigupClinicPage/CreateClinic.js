import "./CreateClinic.css";
import Header from "../../../layouts/LayoutsUser/Header/Header";
import Footer from "../../../components/FooterComponent/Footer";
const CreateClinic = () => {
  return (
    <>
      <Header />
      <div className="clinic-container">
        <h3 className="section-title">Thông tin phòng khám</h3>
        <form className="clinic-form">
          <div className="form-grid">
            <div className="form-group div1">
              <label>
                <span style={{ color: "red" }}>
                  *<span style={{ color: "black" }}>Tên phòng khám</span>
                </span>
              </label>
              <input type="text" placeholder="Nhập tên phòng khám" />
            </div>
            <div className="form-group div2">
              <label>
                <span style={{ color: "red" }}>
                  *<span style={{ color: "black" }}>Địa chỉ</span>
                </span>
              </label>
              <input type="text" placeholder="Nhập địa chỉ" />
            </div>
            <div className="form-group div3">
              <label>
                <span style={{ color: "red" }}>
                  *{" "}
                  <span style={{ color: "black" }}>Số điện thoại liên hệ</span>
                </span>
              </label>
              <input type="text" placeholder="Nhập số điện thoại" />
            </div>
            <div className="form-group div4">
              <label>
                {" "}
                <span style={{ color: "red" }}>
                  * <span style={{ color: "black" }}>Email phòng khám</span>
                </span>
              </label>
              <input type="email" placeholder="Nhập email" />
            </div>
            <div className="form-group div5">
              <label>
                <span style={{ color: "red" }}>
                  *<span style={{ color: "black" }}>Loại hình phòng khám</span>
                </span>
              </label>
              <input type="text" placeholder="Ví dụ: Đa khoa, Nhi khoa..." />
            </div>
            <div className="form-group div6">
              <label>
                <span style={{ color: "red" }}>
                  *
                  <span style={{ color: "black" }}>
                    Tên người đại diện đăng ký
                  </span>
                </span>
              </label>
              <input type="text" placeholder="Họ và tên" />
            </div>
            <div className="form-group div7">
              <label>
                <span style={{ color: "red" }}>
                  *<span style={{ color: "black" }}>Ngày thành lập</span>
                </span>
              </label>
              <input type="date" />
            </div>
            <div className="form-group div8">
              <label>
                <span style={{ color: "red" }}>
                  *<span style={{ color: "black" }}>Giấy phép hoạt động</span>
                </span>
              </label>
              <input type="file" />
            </div>
            <div className="form-group div9">
              <label>
                <span style={{ color: "red" }}>
                  *<span style={{ color: "black" }}>Logo phòng khám</span>
                </span>
              </label>
              <input type="file" />
            </div>
            <div className="form-group div10 full-width">
              <label>
                <span style={{ color: "red" }}>
                  *<span style={{ color: "black" }}>Miêu tả phòng khám</span>
                </span>
              </label>
              <textarea placeholder="Nhập miêu tả..." />
            </div>
          </div>
        </form>

        <h3 className="section-title">*Chọn gói đăng ký</h3>
        <div className="plan-container">
          <div className="plan free">
            <h4>Free</h4>
            <p>Gói dùng thử</p>
            <ul>
              <li>Đăng phòng khám, dùng thử hệ thống</li>
              <li>Tối đa 3 bác sĩ</li>
              <li>Tạo lịch khám cơ bản</li>
              <li>Không hỗ trợ quản lý bệnh án, hóa đơn</li>
              <li>Không hỗ trợ SMS, thông báo chat</li>
            </ul>
            <button className="btn btn-free">Dùng miễn phí</button>
          </div>

          <div className="plan standard">
            <h4>Tiêu chuẩn</h4>
            <p>499.000 VND/tháng</p>
            <ul>
              <li>Phòng khám vừa, tối đa 20 bác sĩ</li>
              <li>Quản lý lịch khám, bệnh án, hóa đơn</li>
              <li>Gửi lịch qua Email, có hỗ trợ nhắc nhở</li>
              <li>Quản lý đơn thuốc, thông tin bệnh nhân</li>
              <li>Hỗ trợ giờ hành chính.</li>
              <li>Thống kê doanh thu.</li>
            </ul>
            <button className="btn btn-standard">Mua gói</button>
          </div>

          <div className="plan premium">
            <h4>Chuyên nghiệp</h4>
            <p>999.000 VND/tháng</p>
            <ul>
              <li>Không giới hạn bác sĩ</li>
              <li>Đầy đủ các tính năng quản lý</li>
              <li>Ưu tiên hiển thị top danh sách</li>
              <li>Nhắc lịch qua SMS + Email</li>
              <li>24/7 hỗ trợ</li>
              <li>Tùy chỉnh giao diện phòng khám</li>
            </ul>
            <button className="btn btn-premium">Mua gói</button>
          </div>
        </div>

        <div className="submit-container">
          <button className="btn-submit">Gửi yêu cầu</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateClinic;
