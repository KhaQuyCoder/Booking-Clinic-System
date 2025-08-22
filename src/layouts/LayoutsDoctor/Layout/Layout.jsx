import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const menuItems = [
    { icon: "👥", label: "Quản lý bệnh nhân", path: "/doctor/Patients" },
    { icon: "📅", label: "Lập lịch khám", path: "/doctor/schedule" },
    { icon: "📅", label: "Xem lịch khám" },
    { icon: "✔️", label: "Duyệt yêu cầu khám" },
    { icon: "💬", label: "Trả lời hỏi đáp" },
    { icon: "💻", label: "Khám online" },
    { icon: "🧾", label: "Lập hóa đơn thuốc" },
    { icon: "📊", label: "Thống kê báo cáo" },
    { icon: "🔑", label: "Đổi mật khẩu" },
    { icon: "🔐", label: "Đăng nhập" },
    { icon: "👤", label: "Profile" },
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
          left: "20%",
          maxWidth: "80%",
        }}
      >
        <Header />
        <div style={{ flexGrow: 1, padding: "20px", overflowY: "auto" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
