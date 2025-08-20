import { useContext, useState, useEffect } from "react";
import "./Profile.css";
import Header from "../../../layouts/LayoutsUser/Header/Header";
import Footer from "../../../components/FooterComponent/Footer";
import { State } from "../../../state/context";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { avatar, setAvatar, phone, setPhone } = useContext(State);
  const [warning, setWarning] = useState(true);
  const [profile, setProfile] = useState({
    name: "Hồ Khả Quý",
    phone: phone,
    gender: "Nam",
    hometown: "Hà Nội",
    allergy:
      "Trào lưu uống nước chanh buổi sáng đang được nhiều người áp dụng, liệu có thực sự hiệu quả hay không?",
    medicalHistory: "Không",
    bloodType: "O",
    specialNotes: "Không",
    height: "175 cm",
    weight: "70 kg",
    job: "Lập trình viên",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };
  useEffect(() => {
    window.scrollTo({
      top: "true",
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <Header />
      <div className="profile-container">
        {warning && (
          <div className="done-searchSpecialty profile">
            <p style={{ margin: "0" }}>
              Nếu có thể hãy điền đầy đủ thông tin bên dưới để bác sĩ có thể nắm
              bắt được tình hình sức khỏe của bạn nhé!
            </p>
            <i
              style={{ margin: "0" }}
              class="fa-solid fa-xmark close"
              onClick={() => setWarning(false)}
            ></i>
          </div>
        )}
        <div className="profile-card">
          <h2>Hồ sơ cá nhân</h2>
          <div className="wrapper-profile">
            <div className="edit-image">
              <img src={avatar} className="image-profile" />
              <p
                className="btn-edit"
                onClick={() => document.getElementById("avatarInput").click()}
              >
                {" "}
                <i class="fa-solid fa-pen"></i> Chỉnh sửa
              </p>
              <input
                id="avatarInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </div>
            <div className="infor-user-profile">
              {Object.keys(profile).map((key) => (
                <div className="profile-field" key={key}>
                  <label className="name-field-profile">{getLabel(key)}</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name={key}
                      value={profile[key]}
                      onChange={handleChange}
                    />
                  ) : (
                    <p>{profile[key]}</p>
                  )}
                </div>
              ))}
              <div className="profile-actions">
                <button onClick={toggleEdit}>
                  {isEditing ? "Lưu thông tin" : "Chỉnh sửa"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

function getLabel(key) {
  const labels = {
    name: "Họ và tên",
    phone: "Số điện thoại",
    gender: "Giới tính",
    hometown: "Quê quán",
    allergy: "Dị ứng",
    medicalHistory: "Tiền sử bệnh lý",
    bloodType: "Nhóm máu",
    specialNotes: "Ghi chú đặc biệt",
    height: "Chiều cao",
    weight: "Cân nặng",
    job: "Nghề nghiệp",
  };
  return labels[key] || key;
}

export default Profile;
