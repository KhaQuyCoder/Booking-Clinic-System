import Header from "../LayoutsDoctor/Header/Header";
import Sidebar from "../LayoutsDoctor/Sidebar/Sidebar";

const SidebarClinic = ({ children }) => {
  const menuItems = [
    { icon: "👨‍⚕️", label: "Đăng ký bác sĩ", path: "/clinic/createDoctor" },
    {
      icon: "🏢",
      label: "Cập nhật thông tin phòng khám",
      path: "/clinic/updateClinic",
    },
    { icon: "🔧", label: "Quản lý bác sĩ", path: "/clinic/doctorAll" },
    { icon: "📢", label: "Viết thông báo", path: "/clinic/notification" },
    { icon: "📰", label: "Cập nhật tin tức", path: "/clinic/NewsEditor" },
    { icon: "📋", label: "Quản lý chuyên khoa", path: "/clinic/specialty" },
    { icon: "📈", label: "Thống kê báo cáo", path: "/clinic/statistical" },
    { icon: "🔑", label: "Đổi mật khẩu", path: "/clinic/doi-mat-khau" },
    { icon: "👤", label: "Profile", path: "/clinic/profile" },
    { icon: "↩️", label: "Đăng xuất", path: "/login" },
  ];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar menuItems={menuItems} name={"Phòng khám"} />

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
        <main
          style={{
            flexGrow: 1,
            padding: "20px",
            background: "#f9f9f9",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default SidebarClinic;
