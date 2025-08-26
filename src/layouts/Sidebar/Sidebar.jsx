import Header from "../LayoutsDoctor/Header/Header";
import Sidebar from "../LayoutsDoctor/Sidebar/Sidebar";

const SidebarAdmin = ({ children }) => {
  const menuItems = [
    {
      icon: "🏢",
      label: "Duyệt phòng khám",
      path: "/duyet-phong-kham",
      index: true,
      noti: "3",
    },
    {
      icon: "👨‍⚕️",
      label: "Duyệt đăng ký bác sĩ",
      path: "/duyet-bac-si",
      index: true,
      noti: "3",
    },
    { icon: "🔧", label: "Quản lý phòng khám", path: "/quan-ly-phong-kham" },
    { icon: "📢", label: "Viết thông báo", path: "/viet-thong-bao" },
    { icon: "📦", label: "Quản lý gói đăng ký", path: "/quan-ly-goi/tao-goi" },
    { icon: "📈", label: "Thống kê báo cáo", path: "/thong-ke-bao-cao" },
    { icon: "👤", label: "Profile", path: "/profile" },
    { icon: "🔑", label: "Đổi mật khẩu", path: "/doi-mat-khau" },
    { icon: "↩️", label: "Đăng xuất", path: "/login" },
  ];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        role="CTCP SunTech"
        menuItems={menuItems}
        name={"Hệ thống"}
        urlimage={
          "https://img.lovepik.com/png/20231028/Japanese-social-media-male-user-avatar-characters-anime_394434_wh860.png"
        }
      />

      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          maxWidth: "77%",
        }}
      >
        <Header
          urlImage={
            "https://img.lovepik.com/png/20231028/Japanese-social-media-male-user-avatar-characters-anime_394434_wh860.png"
          }
        />
        <main
          style={{
            flexGrow: 1,
            padding: "20px",
            marginTop: "50px",
            width: "100%",
            marginLeft: "300px",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default SidebarAdmin;
