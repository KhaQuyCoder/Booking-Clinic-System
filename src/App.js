import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from './layouts/LayoutsDoctor/Layout/Layout';
import Login from './page/Doctor/DocterPage/Login/index';
import PatientManagementv2 from './page/Doctor/DocterPage/PatientManagementv2/index';
import ScheduleAppointment from './page/Doctor/DocterPage/ScheduleMedicalAppointment/index';
import PatientDetail from './page/Doctor/DocterPage/PatientManagementv2/PatientDetail/index';
import PatientEdit from './page/Doctor/DocterPage/PatientManagementv2/PatientEdit/index';
import ViewMedicalRecords from './page/Doctor/DocterPage/PatientManagementv2/ViewMedicalRecords/index';
import MedicalHistory from './page/Doctor/DocterPage/PatientManagementv2/MedicalHistory/index';
import ViewMedicalAppointmentSchedule from './page/Doctor/DocterPage/ViewMedicalAppointmentSchedule/index';
import AcceptMedicalAppointment from './page/Doctor/DocterPage/AcceptMedicalAppointment/index';
import QnA from './page/Doctor/DocterPage/QnA/index';
import Invoice from './page/Doctor/DocterPage/Invoice/index';
import DoctorStatistics from './page/Doctor/DocterPage/DoctorStatistics/index';
import Revenue from './page/Doctor/DocterPage/DoctorStatistics/Revenue/index';
import Visits from './page/Doctor/DocterPage/DoctorStatistics/Visits/index';
import Profile from './page/Doctor/DocterPage/Profile/index';
import EditProfile from './page/Doctor/DocterPage/Profile/EditProfile/index';
import OnlineConsult from './page/Doctor/DocterPage/OnlineConsult/index';
import ForgotPassword from './page/Doctor/DocterPage/ForgotPassword/index';
import { PatientProvider } from './context/patientContext';

function App() {
  return (
    <PatientProvider>

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
          <Route path="PatientEdit" element={<PatientEdit />} />
          <Route path="PatientEdit/:id" element={<PatientEdit />} />
          <Route path="ViewMR" element={<ViewMedicalRecords />} />
          <Route path="ViewMR/:id" element={<ViewMedicalRecords />} />
          <Route path="MedicalHistory" element={<MedicalHistory />} />
          <Route path="MedicalHistory/:id" element={<MedicalHistory />} />
          <Route path="View" element={<ViewMedicalAppointmentSchedule />} />
          <Route path="Accept" element={<AcceptMedicalAppointment />} />
          <Route path="QnA" element={<QnA />} />
          <Route path="Invoice" element={<Invoice />} />
          <Route path="OnlineConsult" element={<OnlineConsult />} />
          <Route path="DoctorStatistics" element={<DoctorStatistics />} />
          <Route path="DoctorStatistics/Revenue" element={<Revenue />} />
          <Route path="DoctorStatistics/Visits" element={<Visits />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Profile/EditProfile" element={<EditProfile />} />
          <Route path="ForgotPassword" element={<ForgotPassword />} />
        </Route>
      </Routes>

      <ToastContainer />
    </PatientProvider>
  );
}

export default App;
