import React from "react";
import "./Profile.css";
import avatarDoctorProfile from "./../../../../assets/svg/OIP (2).webp"; // Bạn có thể thêm một ảnh placeholder

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-left-column">
        <div className="avatar-section">
          <img
            src={avatarDoctorProfile}
            alt="Avatar Bác sĩ"
            className="doctor-avatar"
          />
        </div>

        <div className="info-section contact-info">
          <h4>Thông Tin Liên Hệ</h4>
          <ul>
            <li>
              <i className="fas fa-user-tie"></i> <span>Nam</span>
            </li>
            <li>
              <i className="fas fa-calendar-alt"></i> <span>22/12/1985</span>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>{" "}
              <span>Yên Thành, Nghệ An</span>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i> <span>0831212345</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>{" "}
              <span>ThangCon0808@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="info-section career-objective">
          <h4>Mục Tiêu Nghề Nghiệp</h4>
          <ul>
            <li>Phấn đấu nâng cao kĩ năng, kiến thức chuyên môn</li>
            <li>
              Tạo môi trường làm việc thoải mái, thân thiện với bệnh nhân và bác
              sĩ
            </li>
            <li>Hết mình với công việc, đặt bệnh nhân lên hàng đầu</li>
          </ul>
        </div>

        <div className="info-section rating-section">
          <h4>Đánh Giá Công Tác khám </h4>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </div>
      </div>

      <div className="profile-right-column">
        <div className="right-box">
          <div className="right-header">
            <h2>TS. HOÀNG VIỆT THẮNG</h2>
            <p>CHUYÊN KHOA NỘI TIM MẠCH</p>
          </div>

          <div className="right-section education">
            <h3>
              <i className="fas fa-graduation-cap"></i> HỌC VẤN
            </h3>
            <ul>
              <li>
                <span>Chức danh:</span> Trưởng khoa nội - Bệnh viện Trung ương
                Huế
              </li>
              <li>
                <span>Học vị:</span> Tiến sĩ Y học. BCNT chuyên ngành nội
              </li>
              <li>
                <span>Chứng chỉ:</span> Siêu âm, nội soi tim
              </li>
              <li>
                <span>Hội viên:</span> Hội tim mạch Việt Nam, Hội nội khoa Huế
              </li>
              <li>
                <span>Kinh nghiệm:</span> 20 năm trong lĩnh vực Nội tim mạch
              </li>
            </ul>
          </div>

          <div className="right-section activities">
            <h3>
              <i className="fas fa-flag"></i> HOẠT ĐỘNG
            </h3>
            <div className="timeline-container">
              <div className="timeline-item">
                <span className="timeline-date">2004 - 2011</span>
                <div className="timeline-content">
                  <ul>
                    <li>
                      Công tác tại bệnh viện Bạch Mai - Hà nội, chuyên khoa Tim
                      Mạch
                    </li>
                    <li>2010 Phó khoa Nội Tim mạch.</li>
                  </ul>
                  <img
                    src="https://tse3.mm.bing.net/th/id/OIP.LCQTbFcaQv3zUK1FBdVzjwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="Bệnh viện 1"
                  />
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-date">2011 - 2019</span>
                <div className="timeline-content">
                  <ul>
                    <li>
                      Công tác tại bệnh viện Bạch Mai - Hà nội, chuyên khoa Tim
                      Mạch
                    </li>
                    <li>2010 Phó khoa Nội Tim mạch.</li>
                  </ul>
                  <img
                    src="https://cdn-healthcare.hellohealthgroup.com/2022/08/1661238877_63047e5d649eb0.48767792.jpg"
                    alt="Bệnh viện 2"
                  />
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-date">2019 - 2025</span>
                <div className="timeline-content">
                  <ul>
                    <li>
                      Công tác tại bệnh viện Bạch Mai - Hà nội, chuyên khoa Tim
                      Mạch
                    </li>
                    <li>2010 Phó khoa Nội Tim mạch.</li>
                  </ul>
                  <img
                    src="https://tse4.mm.bing.net/th/id/OIP.8bF7-GjeEOEx1DfEV790VQHaGe?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                    alt="Bệnh viện 3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
