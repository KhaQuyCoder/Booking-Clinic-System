import React from "react";
const Header = ({ urlImage }) => {
  return (
    <header
      style={{
        minHeight: "60px",
        backgroundColor: "#f5f7fa",
        borderBottom: "1px solid #e8e8e8",
        display: "flex",
        position: "fixed",
        top: 0,
        left: "290px",
        right: 0,
        alignItems: "center",
        padding: "0 20px",
        justifyContent: "space-between",
        boxSizing: "border-box",
        zIndex: "99",
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
          <i class="fa-solid fa-bell"></i>
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
          <i class="fa-regular fa-message"></i>
        </button>
        <img
          src={urlImage}
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            cursor: "pointer",
            border: "1px solid black",
            objectFit: "cover",
          }}
        />
      </div>
    </header>
  );
};

export default Header;
