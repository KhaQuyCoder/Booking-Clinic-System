import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ menuItems, name }) => {
  return (
    <aside
      style={{
        width: 260,
        backgroundColor: "#2469DF",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        height: "100vh",
        color: "#212529 ",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div
          style={{
            marginBottom: 20,
            fontWeight: "bold",
            fontSize: 18,
            color: "#212529 ",
          }}
        >
          <div style={{ marginBottom: 10 }}>
            <img src="/logo.svg" alt="Logo" width={100} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              src="https://img4.thuthuatphanmem.vn/uploads/2021/01/10/hinh-anh-bac-si-ao-trang-rat-dep_021521356.jpg"
              alt="avatar doctor"
              width={50}
              height={50}
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
            <div>
              <div
                style={{ fontWeight: "bold", fontSize: 16, color: "#212529 " }}
              >
                Hoàng Việt Thắng
              </div>
              <div style={{ fontSize: 14, opacity: 0.7 }}>{name}</div>
            </div>
          </div>
        </div>
        <nav>
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                marginBottom: 15,
                cursor: "pointer",
                fontSize: 15,
                opacity: 0.85,
              }}
            >
              <Link
                to={item.path}
                style={{
                  color: "#212529",
                  textDecoration: "none",
                  margin: 0,
                }}
              >
                <span style={{ marginRight: 10 }}>{item.icon}</span>
                <span style={{ color: "white" }}>{item.label}</span>
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
