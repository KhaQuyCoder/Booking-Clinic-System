
// import React, { useEffect, useState } from "react";
// import { BsCamera } from "react-icons/bs";
// import { useCommon } from "../../components/CommonContext";
// import './Userprofile.css';
// import { LiaSave } from "react-icons/lia";

// function UserProfile() {
//     const { user, updateUser } = useCommon();
//     const [avatar, setAvatar] = useState(user?.avatar);

//     useEffect(() => {
//         if (user?.avatar) {
//             setAvatar(user.avatar);
//         }
//     }, [user]);

//     const handleAvatarClick = (e) => {
//         const file = e.target.files?.[0];
//         if (!file) return;
//         const url = URL.createObjectURL(file);
//         setAvatar(url);
//         updateUser?.({ avatarFile: file, avatar: url });
//     };

//     if (!user) {
//         return <p>Đang tải dữ liệu...</p>;
//     }
//     return (
//         <div className="userprofile">
//             <div className="profileheader">
//                 <div className="profileavatar">
//                     <img className="avatarUser" src={avatar} alt="" />
//                     <label htmlFor="avatarInput" className="avatarLabel" title="Đổi ảnh đại diện">
//                         <BsCamera size={20} className="cameraIcon" />
//                     </label>
//                     <input type="file" id="avatarInput" accept="image/*" onChange={handleAvatarClick} style={{ display: "none" }} />
//                 </div>
//                 <h2>{user.fullname || "Chưa có tên"}</h2>
//             </div>
//             <div className="profileinfo">
//                 <h3>Thông tin cá nhân</h3>
//                 <p><b>Giới tính:</b> {user.gender || "Chưa có thông tin"}</p>
//                 <p><b>Ngày sinh:</b> {user.dob || "Chưa có thông tin"}</p>
//                 <p><b>Điện thoại:</b> {user.phone || "Chưa có thông tin"}</p>
//             </div>
//             <div className="profileactions">
//                 <button className="Updateaction" onClick={() => updateUser?.({ avatar })}><LiaSave size={20} />Cập nhật</button>
//             </div>
//         </div>
//     );
// }
// export { UserProfile };
import React, { useEffect, useState } from "react";
import { BsCamera } from "react-icons/bs";
import { useCommon } from "../../components/CommonContext";
import { LiaSave } from "react-icons/lia";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Button,
  Paper
} from "@mui/material";

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
    return <Typography>Đang tải dữ liệu...</Typography>;
  }

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 3,
        borderRadius: 3,
        bgcolor: "background.paper"
      }}
    >
      {/* Header */}
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        textAlign="center"
        mb={3}
      >
        <Box position="relative" display="inline-block">
          <Avatar
            src={avatar}
            alt="avatar"
            sx={{ width: 120, height: 120, border: "3px solid #1976d2" }}
          />
          <IconButton
            component="label"
            sx={{
              position: "absolute",
              bottom: 5,
              right: 5,
              bgcolor: "primary.main",
              color: "white",
              "&:hover": { bgcolor: "primary.dark" }
            }}
          >
            <BsCamera size={20} />
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleAvatarClick}
            />
          </IconButton>
        </Box>
        <Typography variant="h5" fontWeight="bold" mt={2}>
          {user.fullname || "Chưa có tên"}
        </Typography>
      </Box>

      {/* Info */}
      <Box mb={3}>
        <Typography variant="h6" gutterBottom>
          Thông tin cá nhân
        </Typography>
        <Typography>
          <b>Giới tính:</b> {user.gender || "Chưa có thông tin"}
        </Typography>
        <Typography>
          <b>Ngày sinh:</b> {user.dob || "Chưa có thông tin"}
        </Typography>
        <Typography>
          <b>Điện thoại:</b> {user.phone || "Chưa có thông tin"}
        </Typography>
      </Box>

      {/* Actions */}
      <Box textAlign="center">
        <Button
          variant="contained"
          color="primary"
          startIcon={<LiaSave />}
          onClick={() => updateUser?.({ avatar })}
          sx={{ borderRadius: 2, px: 3 }}
        >
          Cập nhật
        </Button>
      </Box>
    </Paper>
  );
}

export { UserProfile };
