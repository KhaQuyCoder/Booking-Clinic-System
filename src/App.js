import React from 'react';
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import './App.css';
import { Routing } from './Routing/Routing';

function App() {
  return (
    // <BrowserRouter>
      <div className="App">
        <Header />
        <div className="main-layout">
          <Sidebar />
          <div className="content">
            <Routing />
            {/* <Routes>
              <Route path="/account/userprofile" element={<div>userprofile</div>} />
              <Route path="/duyet-phong-kham" element={<Clinicbrowses />} />
              <Route path="/duyet-phong-kham/thong-tin-phong-kham/:id" element={<Detailclinicbrowse />} />
              <Route path="/duyet-bac-si" element={<Doctorbrowses />} />
              <Route path="/quan-ly-phong-kham" element={<Clinicmanagers />} />
              <Route path="/quan-ly-goi/tao-goi" element={<div>Create Package</div>} />
              <Route path="/quan-ly-goi/danh-sach-goi" element={<Alllistpackages />} />
              <Route path="/thong-ke-bao-cao/tong-quan" element={<div>Overview Statistics</div>} />
              <Route path="/thong-ke-bao-cao/thong-ke-doanh-thu" element={<div>Revenue Statistics</div>} />
              <Route path="/doi-mat-khau" element={<div>Change Password</div>} />
              <Route path="/account/login" element={<div>Login</div>} />
            </Routes> */}
          </div>
        </div>
      </div>
    // </BrowserRouter>
  );
}

export default App;
