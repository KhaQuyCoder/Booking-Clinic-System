import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { icon: "👥", label: "Quản lý bệnh nhân" ,path: "/Patients"},
  { icon: "📅", label: "Lập lịch khám" , path: "/schedule"},
  { icon: "📅", label: "Xem lịch khám" },
  { icon: "✔️", label: "Duyệt yêu cầu khám" },
  { icon: "❓", label: "Trả lời hỏi đáp" },
  { icon: "💬", label: "Trả lời tư vấn" },
  { icon: "💻", label: "Khám online" },
  { icon: "🧾", label: "Lập hóa đơn thuốc" },
  { icon: "📊", label: "Thống kê báo cáo" },
  { icon: "🔑", label: "Đổi mật khẩu" },
  { icon: "🔐", label: "Đăng nhập" },
  { icon: "👤", label: "Profile" },
  { icon: "↩️", label: "Đăng xuất" , path:"/login"},
];
const Sidebar = () => {
  return (
    <aside style={{
      width: 250,
      backgroundColor: '#2469DF',
      // height: '100vh',
      color: '#212529 ',
      padding: '20px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <div>
        <div style={{ marginBottom: 20, fontWeight: 'bold', fontSize: 18, color: '#212529 ' }}>
          <div style={{ marginBottom: 10 }}>
            {/* Logo */}
            <img src="/logo.svg" alt="Logo" width={100} />
          </div>
          <div style = {{display:'flex',alignItems: 'center',gap: 12}}>
            {/* avatar bác sĩ */}
            <img src="https://img4.thuthuatphanmem.vn/uploads/2021/01/10/hinh-anh-bac-si-ao-trang-rat-dep_021521356.jpg" alt="avatar doctor" 
                 width={80}
                 height={80}
                 style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
                <div style={{fontWeight: 'bold',fontSize: 18,color: '#212529 '}}>
                    Hoàng Việt Thắng
                </div>
                <div style ={{ fontSize: 14, opacity: 0.7}}>
                    Bác sĩ
                </div>
            </div>
          </div>
        </div>

        {/* Menu */}
        <nav>
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 15,
                cursor: 'pointer',
                fontSize: 15,
                opacity: 0.85,
              }}
            >
              <Link
                to={item.path}
                style={{ color: '#212529', textDecoration: 'none', display: 'flex', alignItems: 'center' }}
              >
                 <span style={{ marginRight: 10 }}>{item.icon}</span>
                 <span style={{color:"white"}}>{item.label}</span>
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;