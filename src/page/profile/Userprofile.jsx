import React, { useEffect, useState } from "react";
import { BsCamera } from "react-icons/bs";
import { useCommon } from "../../components/CommonContext";
import './Userprofile.css';
import { LiaSave } from "react-icons/lia";

function UserProfile() {
    const { user, updateUser } = useCommon();
    const [avatar, setAvatar] = useState(user?.avatar);

    useEffect(() => {
        if (user?.avatar) {
            setAvatar(user.avatar);
        }
    }, [user]);

    const handleAvatarClick = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        setAvatar(url);
        updateUser?.({ avatarFile: file, avatar: url });
    };

    if (!user) {
        return <p>Đang tải dữ liệu...</p>;
    }
    return (
        <div className="userprofile">
            <div className="profileheader">
                <div className="profileavatar">
                    <img className="avatarUser" src={avatar} alt="" />
                    <label htmlFor="avatarInput" className="avatarLabel" title="Đổi ảnh đại diện">
                        <BsCamera size={20} className="cameraIcon" />
                    </label>
                    <input type="file" id="avatarInput" accept="image/*" onChange={handleAvatarClick} style={{ display: "none" }} />
                </div>
                <h2>{user.fullname || "Chưa có tên"}</h2>
            </div>
            <div className="profileinfo">
                <h3>Thông tin cá nhân</h3>
                <p><b>Giới tính:</b> {user.gender || "Chưa có thông tin"}</p>
                <p><b>Ngày sinh:</b> {user.dob || "Chưa có thông tin"}</p>
                <p><b>Điện thoại:</b> {user.phone || "Chưa có thông tin"}</p>
            </div>
            <div className="profileactions">
                <button className="Updateaction" onClick={() => updateUser?.({ avatar })}><LiaSave size={20} />Cập nhật</button>
            </div>
        </div>
    );
}
export { UserProfile };