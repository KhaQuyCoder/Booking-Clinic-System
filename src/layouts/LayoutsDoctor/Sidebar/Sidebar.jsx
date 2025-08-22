import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const menuItems = [
  { icon: "👥", label: "Quản lý bệnh nhân" ,path: "/Patients"},
  { icon: "📅", label: "Lập lịch khám" , path: "/schedule"},
  { icon: "📅", label: "Xem lịch khám" , path: "/View"},
  { icon: "✔️", label: "Duyệt yêu cầu khám",path: "/Accept" },
  { icon: "💬", label: "Trả lời hỏi đáp",path: "/QnA"},
  { icon: "💻", label: "Khám online" ,path: "/OnlineConsult"},
  { icon: "🧾", label: "Lập hóa đơn thuốc",path: "/3" },
  { icon: "📊", label: "Thống kê báo cáo",path: "/DoctorStatistics" },
  { icon: "👤", label: "Profile" ,path: "/Profile"},
  { icon: "🔑", label: "Đổi mật khẩu",path: "/ChangePassword" },
  { icon: "🔐", label: "Đăng nhập" ,path: "/3"},
  { icon: "↩️", label: "Đăng xuất" , path:"/login"},
];

const Sidebar = () => {
  return (
    <aside
      style={{
        width: 250,
        backgroundColor: '#1759ca',
        color: '#212529',
        padding: '20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <div style={{ marginBottom: 20, fontWeight: 'bold', fontSize: 18, color: '#212529' }}>
          <div style={{ marginBottom: 10 }}>
            <img src="/logo.svg" alt="Logo" width={100} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img
              src="https://img4.thuthuatphanmem.vn/uploads/2021/01/10/hinh-anh-bac-si-ao-trang-rat-dep_021521356.jpg"
              alt="avatar doctor"
              width={80}
              height={80}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <div>
              <div style={{ fontWeight: 'bold', fontSize: 18, color: '#212529' }}>
                Hoàng Việt Thắng
              </div>
              <div style={{ fontSize: 14, opacity: 0.7 }}>Bác sĩ</div>
            </div>
          </div>
        </div>

        {/* Menu */}
        <nav>
          {menuItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path || "#"}
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <span className="menu-icon">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
