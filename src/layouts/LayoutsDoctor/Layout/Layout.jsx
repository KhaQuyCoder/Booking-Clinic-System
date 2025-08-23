import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div style={{
      display: 'flex',
      height: '100vh',   // chiếm toàn bộ viewport
      overflow: 'hidden', // tránh cuộn ngoài
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Phần nội dung chính */}
      <div style={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden' // tránh cuộn ngoài
      }}>
        <Header />
        <div style={{
          flexGrow: 1,
          padding: '20px',
          overflowY: 'auto' // CUỘN DUY NHẤT
        }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
