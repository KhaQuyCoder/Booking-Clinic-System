import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar cố định bên trái */}
      <Sidebar />
      <div className="flex flex-col flex-1">
        {/* Topbar phía trên */}
        <Topbar />
        {/* Nội dung trang sẽ thay đổi tại đây */}
        <div className="p-4 overflow-y-auto flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
