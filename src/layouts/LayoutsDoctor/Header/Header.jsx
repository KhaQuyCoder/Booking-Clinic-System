import React from "react";

const Header = () => {
  return (
    <header
      style={{
        minHeight: "60px",
        backgroundColor: "#f5f7fa",
        borderBottom: "1px solid #e8e8e8",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        justifyContent: "space-between",
        boxSizing: "border-box",
        margin: 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
        <button
          style={{
            background: "none",
            border: "none",
            fontSize: 24,
            cursor: "pointer",
          }}
        >
          ☰
        </button>

        <input
          type="search"
          placeholder="Search..."
          style={{
            borderRadius: 20,
            border: "1px solid #ccc",
            padding: "6px 12px",
            width: 200,
            outline: "none",
          }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
        <button
          title="Thông báo"
          style={{
            background: "none",
            border: "none",
            fontSize: 20,
            cursor: "pointer",
          }}
        >
          🔔
        </button>
        <button
          title="Tin nhắn"
          style={{
            background: "none",
            border: "none",
            fontSize: 20,
            cursor: "pointer",
          }}
        >
          💬
        </button>
        <img
          src="https://img4.thuthuatphanmem.vn/uploads/2021/01/10/hinh-anh-bac-si-ao-trang-rat-dep_021521356.jpg"
          alt="avatar doctor"
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            cursor: "pointer",
            border: "1px solid black",
          }}
        />
      </div>
    </header>
  );
};

export default Header;
