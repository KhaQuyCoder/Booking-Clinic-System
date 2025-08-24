import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const menuItems = [
    { icon: "👥", label: "Quản lý bệnh nhân", path: "/doctor/Patients" },
    { icon: "📅", label: "Lập lịch khám", path: "/doctor/schedule" },
    { icon: "✔️", label: "Duyệt yêu cầu khám", path: "/doctor/View" },
    { icon: "💬", label: "Trả lời hỏi đáp", path: "/doctor/QnA" },
    { icon: "💻", label: "Khám online", path: "/doctor/OnlineConsult" },
    { icon: "🧾", label: "Lập hóa đơn", path: "/doctor/Invoice" },
    {
      icon: "📊",
      label: "Thống kê báo cáo",
      path: "/doctor/DoctorStatistics",
      subMenu: [
        { label: "Doanh thu", path: "/doctor/DoctorStatistics/Revenue" },
        { label: "Lượt khám", path: "/doctor/DoctorStatistics/Visits" },
      ],
    },
    {
      icon: "👤",
      label: "Profile",
      path: "/doctor/Profile",
      subMenu: [{ label: "Sửa Profile", path: "/doctor/Profile/EditProfile" }],
    },
    { icon: "↩️", label: "Đăng xuất", path: "/login" },
  ];
  return (
    <div
      style={{
        display: "flex",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <Sidebar menuItems={menuItems} name={"Bác sĩ"} />
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          left: "19%",
          maxWidth: "80%",
        }}
      >
        <Header />
        <div
          style={{
            flexGrow: 1,
            padding: "10px",
            overflowY: "auto",
            marginTop: "50px",
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
