// import Button from "./components/Button";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeadeR } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Clinicbrowses } from './components/pages/Clinicbrowse/Clinicbrowses';
import './App.css';
import { Doctorbrowses } from './components/pages/Doctorbrowse/Doctorbrowses';
import { Clinicmanagers } from './components/pages/Clinicmanager/Clinicmanagers';
import { Alllistpackages } from './components/pages/packages/listpackage/Alllistpackages';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeadeR />
        <div className="main-layout">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/account/userprofile" element={<div>userprofile</div>} />
              <Route path="/duyet-phong-kham" element={<Clinicbrowses />} />
              <Route path="/duyet-bac-si" element={<Doctorbrowses />} />
              <Route path="/quan-ly-phong-kham" element={<Clinicmanagers />} />
              <Route path="/quan-ly-goi/tao-goi" element={<div>Create Package</div>} />
              <Route path="/quan-ly-goi/danh-sach-goi" element={<Alllistpackages />} />
              <Route path="/thong-ke-bao-cao/tong-quan" element={<div>Overview Statistics</div>} />
              <Route path="/thong-ke-bao-cao/thong-ke-doanh-thu" element={<div>Revenue Statistics</div>} />
              <Route path="/doi-mat-khau" element={<div>Change Password</div>} />
              <Route path="/account/login" element={<div>Login</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
