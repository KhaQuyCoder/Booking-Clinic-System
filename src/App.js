import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout/Layout';
import PatientManagement from './Feature/Duc/Doctor/PatientManagement/Patient_Management';
import ScheduleAppointment from './Feature/Duc/Doctor/ScheduleMedicalAppointment/ScheduleMedicalAppointment';
import Login from './Feature/Duc/Doctor/Login';
import Layout from './components/layout/Layout';
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import PatientManagementv2 from './Feature/Duc/Doctor/PatientManagementv2';
import PatientDetail from './Feature/Duc/Doctor/PatientDetail';
// Trang chủ đơn giản

function App() {
  return (
    <>

      <Routes>
        {/* Route login (ngoài layout) */}
        <Route path="/login" element={<Login />} />

        {/* Route có layout */}
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="patients" element={<PatientManagementv2 />} />
          <Route path="schedule" element={<ScheduleAppointment />} />
          <Route path="detail" element={<PatientManagementv2 />} />
          <Route path="detail/:id" element={<PatientDetail />} />
        </Route>

        {/* Route khác (ngoài layout) */}
        {/* <Route path="/bac-si" element={<Docter />} />
        <Route path="/bac-si/page/:page" element={<Docter />} /> */}
      </Routes>
      <ToastContainer />
    </>
      
  );
}

export default App;

