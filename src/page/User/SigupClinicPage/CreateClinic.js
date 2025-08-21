import styles from "./CreateClinic.module.css";
import Header from "../../../layouts/LayoutsUser/Header/Header";
import Footer from "../../../components/FooterComponent/Footer";
const CreateClinic = () => {
  return (
    <>
      <Header />
      <div className={styles.cliniContainer}>
        <h3 className={styles.sectionTitle}>Thông tin phòng khám</h3>
        <form className={styles.clinicForm}>
          <div className={styles.formGrid}>
            <div className={`${styles.formGroup} ${styles.div1}`}>
              <label>
                <span style={{ color: "red" }}>
                  *<span style={{ color: "black" }}>Tên phòng khám</span>
                </span>
              </label>
              <input type="text" placeholder="Nhập tên phòng khám" />
            </div>
            <div className={`${styles.formGroup} ${styles.div2}`}>
              <label>
                <span style={{ color: "red" }}>
                  *<span style={{ color: "black" }}>Địa chỉ</span>
                </span>
              </label>
              <input type="text" placeholder="Nhập địa chỉ" />
            </div>
            <div className={`${styles.formGroup} ${styles.div3}`}>
              <label>
                <span style={{ color: "red" }}>
                  *{" "}
                  <span style={{ color: "black" }}>Số điện thoại liên hệ</span>
                </span>
              </label>
              <input type="text" placeholder="Nhập số điện thoại" />
            </div>
            <div className={`${styles.formGroup} ${styles.div4}`}>
              <label>
                {" "}
                <span style={{ color: "red" }}>
                  * <span style={{ color: "black" }}>Email phòng khám</span>
                </span>
              </label>
              <input type="email" placeholder="Nhập email" />
            </div>
            <div className={`${styles.formGroup} ${styles.div5}`}>
              <label>
                <span style={{ color: "red" }}>
                  *<span style={{ color: "black" }}>Loại hình phòng khám</span>
                </span>
              </label>
              <input type="text" placeholder="Ví dụ: Đa khoa, Nhi khoa..." />
            </div>
            <div className={`${styles.formGroup} ${styles.div6}`}>
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
            <div className={`${styles.formGroup} ${styles.div7}`}>
              <label>
                <span style={{ color: "red" }}>
                  *<span style={{ color: "black" }}>Ngày thành lập</span>
                </span>
              </label>
              <input type="date" />
            </div>
            <div className={`${styles.formGroup} ${styles.div8}`}>
              <label>
                <span style={{ color: "red" }}>
                  *<span style={{ color: "black" }}>Giấy phép hoạt động</span>
                </span>
              </label>
              <input type="file" />
            </div>
            <div className={`${styles.formGroup} ${styles.div9}`}>
              <label>
                <span style={{ color: "red" }}>
                  *<span style={{ color: "black" }}>Logo phòng khám</span>
                </span>
              </label>
              <input type="file" />
            </div>
            <div
              className={`${styles.formGroup} ${styles.div10} ${styles.fullWidth}`}
            >
              <label>
                <span style={{ color: "red" }}>
                  *<span style={{ color: "black" }}>Miêu tả phòng khám</span>
                </span>
              </label>
              <textarea placeholder="Nhập miêu tả..." />
            </div>
          </div>
        </form>

        <h3 className={styles.sectionTitle}>*Chọn gói đăng ký</h3>
        <div className={styles.planContainer}>
          <div className={`${styles.plan} ${styles.free}`}>
            <h4>Free</h4>
            <p>Gói dùng thử</p>
            <ul>
              <li>Đăng phòng khám, dùng thử hệ thống</li>
              <li>Tối đa 3 bác sĩ</li>
              <li>Tạo lịch khám cơ bản</li>
              <li>Không hỗ trợ quản lý bệnh án, hóa đơn</li>
              <li>Không hỗ trợ SMS, thông báo chat</li>
            </ul>
            <button className={`${styles.btn} ${styles.btnFree}`}>
              Dùng miễn phí
            </button>
          </div>

          <div className={`${styles.plan} ${styles.standard}`}>
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
            <button className={`${styles.btn} ${styles.btnStandard}`}>
              Mua gói
            </button>
          </div>

          <div className={`${styles.plan} ${styles.premium}`}>
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
            <button className={`${styles.btn} ${styles.btnPremium}`}>
              Mua gói
            </button>
          </div>
        </div>

        <div className={styles.submitContainer}>
          <button className={styles.btnSubmit}>Gửi yêu cầu</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateClinic;
