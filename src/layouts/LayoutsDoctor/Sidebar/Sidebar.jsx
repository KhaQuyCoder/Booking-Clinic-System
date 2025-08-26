import { NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ role, menuItems, name, urlimage }) => {
  const location = useLocation();

  const isMenuOpen = (item) => {
    if (item.subMenu) {
      return (
        item.path === location.pathname ||
        item.subMenu.some((sub) => sub.path === location.pathname)
      );
    }
    return false;
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/logo.svg" alt="Logo" width={100} />
        <div className="doctor-info">
          <img src={urlimage} alt="avatar doctor" className="doctor-avt" />
          <div className="doctor-name-role">
            <div className="doctor-name">{role}</div>
            <div className="doctor-role">{name}</div>
          </div>
        </div>
      </div>

      <div className="sidebar-menu">
        {menuItems.map((item, idx) => (
          <div key={idx}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <span className="menu-icon">{item.icon}</span>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>{item.label}</span>
                {item.index ? <span className="noti">{item.noti}</span> : <></>}
              </div>
            </NavLink>

            {item.subMenu &&
              isMenuOpen(item) &&
              item.subMenu.map((sub, subIdx) => (
                <NavLink
                  key={subIdx}
                  to={sub.path}
                  className={({ isActive }) =>
                    isActive ? "sub-menu-item active" : "sub-menu-item"
                  }
                >
                  {sub.label}
                </NavLink>
              ))}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
