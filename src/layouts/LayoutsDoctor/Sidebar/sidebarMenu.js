// src/components/Sidebar/sidebarMenu.js
const menuItems = [
  {
    icon: "👥",
    label: "Quản lý bệnh nhân",
    subMenu: [
      { label: "Danh sách bệnh nhân", path: "/Patients/List" },
      { label: "Hồ sơ bệnh án", path: "/Patients/Records" },
      { label: "Lịch sử khám", path: "/Patients/History" },
      { label: "Thêm bệnh nhân", path: "/Patients/Add" },
    ],
  },
  {
    icon: "📊",
    label: "Thống kê báo cáo",
    subMenu: [
      { label: "Doanh thu", path: "/DoctorStatistics/Revenue" },
      { label: "Lượt khám", path: "/DoctorStatistics/Visits" },
    ],
  },
  {
    icon: "👤",
    label: "Profile",
    subMenu: [{ label: "Thông tin cá nhân", path: "/Profile/Info" }],
  },
  { icon: "📅", label: "Lập lịch khám", path: "/schedule" },
  { icon: "📅", label: "Xem lịch khám", path: "/View" },
  { icon: "✔️", label: "Duyệt yêu cầu khám", path: "/Accept" },
  { icon: "💬", label: "Trả lời hỏi đáp", path: "/QnA" },
  { icon: "💻", label: "Khám online", path: "/OnlineConsult" },
  { icon: "🧾", label: "Lập hóa đơn", path: "/3" },
  { icon: "🔐", label: "Đăng nhập", path: "/login" },
  { icon: "↩️", label: "Đăng xuất", path: "/login" },
];

export default menuItems;
