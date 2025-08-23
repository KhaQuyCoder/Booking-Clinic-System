import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css';

const menuItems = [
  {icon: "👥",label: "Quản lý bệnh nhân",path: "/Patients" },
  { icon: "📅", label: "Lập lịch khám", path: "/schedule" },
  { icon: "📅", label: "Xem lịch khám", path: "/View" },
  { icon: "✔️", label: "Duyệt yêu cầu khám", path: "/Accept" },
  { icon: "💬", label: "Trả lời hỏi đáp", path: "/QnA" },
  { icon: "💻", label: "Khám online", path: "/OnlineConsult" },
  { icon: "🧾", label: "Lập hóa đơn", path: "/Invoice" },
  {
    icon: "📊",
    label: "Thống kê báo cáo",
    path: "/DoctorStatistics",
    subMenu: [
      { label: "Doanh thu", path: "/DoctorStatistics/Revenue" },
      { label: "Lượt khám", path: "/DoctorStatistics/Visits" },
    ],
  },
  {
    icon: "👤",
    label: "Profile",
    path: "/Profile",
    subMenu: [{ label: "Sửa Profile", path: "/Profile/EditProfile" }],
  },
  { icon: "🔐", label: "Đăng nhập", path: "/login" },
  { icon: "↩️", label: "Đăng xuất", path: "/login" },
];

const Sidebar = () => {
  const location = useLocation();

  const isMenuOpen = (item) => {
    if (item.subMenu) {
      return (
        item.path === location.pathname ||
        item.subMenu.some(sub => sub.path === location.pathname)
      );
    }
    return false;
  };

  return (
    <aside className="sidebar">
      {/* Header cố định */}
      <div className="sidebar-header">
        <img src="/logo.svg" alt="Logo" width={100} />
        <div className="doctor-info">
          <img
            src="https://img4.thuthuatphanmem.vn/uploads/2021/01/10/hinh-anh-bac-si-ao-trang-rat-dep_021521356.jpg"
            alt="avatar doctor"
            className="doctor-avt"
          />
          <div className="doctor-name-role">
            <div className="doctor-name">Hoàng Việt Thắng</div>
            <div className="doctor-role">Bác sĩ</div>
          </div>
        </div>
      </div>

      {/* Menu (scroll khi dài, nhưng sidebar header cố định) */}
      <div className="sidebar-menu">
        {menuItems.map((item, idx) => (
          <div key={idx}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'menu-item active' : 'menu-item'
              }
            >
              <span className="menu-icon">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>

            {item.subMenu && isMenuOpen(item) &&
              item.subMenu.map((sub, subIdx) => (
                <NavLink
                  key={subIdx}
                  to={sub.path}
                  className={({ isActive }) =>
                    isActive ? 'sub-menu-item active' : 'sub-menu-item'
                  }
                >
                  {sub.label}
                </NavLink>
              ))
            }
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
