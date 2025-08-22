import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
// User
import Home from "./page/User/HomePage/Home";
import { State } from "./state/context";
import Docter from "./page/Doctor/DocterPage/pagination/Docter";
import Clinic from "./page/User/ClinicPage/Clinic";
import Question from "./page/User/QuestionPage/Question";
import Blog from "./page/User/BlogPage/Blog";
import Security from "./page/User/SecurityPage/Security";
import Confirm from "./page/User/ConfirmPage/Confirm";
import DetailClinic from "./page/User/DetailPage/DetailClinic";
import { useContext, useEffect, useState } from "react";
import Opacity from "./components/OpacityComponent/Opacity";
import NotFound from "./components/NotFoundComponent/NotFound";
import Booking from "./page/User/BookingPage/Booking";
import HistoryBooking from "./page/User/HistoryBookingPage/HistoryBooking";
import Profile from "./page/User/ProfilePage/Profile";
import AppointmentList from "./page/User/BookingStatus/AppointmentList";
import SearchClinic from "./page/User/SearchClinicPage/SearchClinic";
import CreateClinic from "./page/User/SigupClinicPage/CreateClinic";
import CallDocter from "./page/User/CallDocterPage/CallDocter";
import DetailDocter from "./page/User/DetailPage/DetailDocter";

// Doctor
import Layout from "./layouts/LayoutsDoctor/Layout/Layout";
import Login from "./page/Doctor/DocterPage/Login/index";
import PatientManagementv2 from "./page/Doctor/DocterPage/PatientManagementv2/index";
import ScheduleAppointment from "./page/Doctor/DocterPage/ScheduleMedicalAppointment/index";
import PatientDetail from "./page/Doctor/DocterPage/PatientManagementv2/PatientDetail/index";
import PatientEdit from "./page/Doctor/DocterPage/PatientManagementv2/PatientEdit/index";
import ViewMedicalRecords from "./page/Doctor/DocterPage/PatientManagementv2/ViewMedicalRecords/index";
import MedicalHistory from "./page/Doctor/DocterPage/PatientManagementv2/MedicalHistory/index";
import { PatientProvider } from "./context/patientContext";

// Admin
import { Routing } from "./Routing/Routing";
import { Header } from "./layouts/header/Header";
import { Sidebar } from "./layouts/Sidebar/Sidebar";
import { CommonProvider } from "./components/CommonContext";
import SidebarClinic from "./layouts/LayoutClinic/SidebarClinic";
import CreateDoctor from "./page/Clinic/CreateDoctorPage/CreateDoctor";
import MNDoctorAll from "./page/Clinic/DoctorAllPage/MNDoctorAll";
import DoctorView from "./page/Clinic/DoctorViewPage/DoctorView.js";
import NotificationEditor from "./page/Clinic/NotificationPage/NotificationEditer.js";
import NewsEditor from "./page/Clinic/NewEditerPage/NewsEditor.js";
import UpdateClinic from "./page/Clinic/UpdateClinicPage/UpdateClinic.js";
import Statistics from "./page/Clinic/StatisticalPage/Statistical.js";
import { Changepassword } from "./page/Changepassword/Changepassword.jsx";
import MNSpecialty from "./page/Clinic/MNSpecialtyPage/MNSpecialty.js";
import ClinicView from "./page/Clinic/ProfileClinicPage/ClinicView.js";

function App() {
  const { valueText, roleLocal } = useContext(State);
  const [role, setRole] = useState(roleLocal);
  useEffect(() => {
    const savedRole = roleLocal || JSON.parse(localStorage.getItem("role"));
    setRole(savedRole);
    if (savedRole === "user") {
      import("./userOnly.css");
    }
  }, [roleLocal, role]);

  if (!role) return null;
  return (
    <>
      <CommonProvider>
        <PatientProvider>
          {valueText.length > 0 && <Opacity />}
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            {/* User */}
            {role === "user" && (
              <>
                <Route path="/trang-chu" element={<Home />} />
                <Route path="/bac-si" element={<Docter />} />
                <Route path="/bac-si/page/:page" element={<Docter />} />
                <Route path="/phong-kham" element={<Clinic />} />
                <Route path="/phong-kham/page/:page" element={<Clinic />} />
                <Route path="/tu-van" element={<Question />} />
                <Route path="/tu-van/page/:page" element={<Question />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/chinh-sach-bao-mat" element={<Security />} />
                <Route path="/confirm" element={<Confirm />} />
                <Route path="/dang-ky-phong-kham" element={<CreateClinic />} />
                <Route
                  path="/chi-tiet-phong-kham/:slug"
                  element={<DetailClinic />}
                />
                <Route path="/:slug/dat-lich-kham" element={<Booking />} />
                <Route path="/lich-su-kham-benh" element={<HistoryBooking />} />
                <Route path="/trang-ca-nhan" element={<Profile />} />
                <Route path="/xem-lich-kham" element={<AppointmentList />} />
                <Route path="/tim-kiem" element={<SearchClinic />} />
                <Route path="/kham-lam-san" element={<CallDocter />} />
                <Route
                  path="/xem-chi-tiet-bac-si/:slug"
                  element={<DetailDocter />}
                />
                <Route path="/*" element={<NotFound />} />
              </>
            )}
            {/* Doctor */}
            {role === "doctor" && (
              <>
                <Route path="/doctor" element={<Layout />}>
                  <Route
                    path="/doctor/schedule"
                    element={<ScheduleAppointment />}
                  />
                  <Route
                    path="/doctor/Patients"
                    element={<PatientManagementv2 />}
                  />
                  <Route
                    path="/doctor/detail"
                    element={<PatientManagementv2 />}
                  />
                  <Route
                    path="/doctor/detail/:id"
                    element={<PatientDetail />}
                  />
                  <Route path="/doctor/PatientEdit" element={<PatientEdit />} />
                  <Route
                    path="/doctor/PatientEdit/:id"
                    element={<PatientEdit />}
                  />
                  <Route
                    path="/doctor/ViewMR"
                    element={<ViewMedicalRecords />}
                  />
                  <Route
                    path="/doctor/ViewMR/:id"
                    element={<ViewMedicalRecords />}
                  />
                  <Route
                    path="/doctor/MedicalHistory"
                    element={<MedicalHistory />}
                  />
                  <Route
                    path="/doctor/MedicalHistory/:id"
                    element={<MedicalHistory />}
                  />
                </Route>

                <Route path="/*" element={<NotFound />} />
              </>
            )}
            {/* Admin */}
            {role === "admin" && (
              <>
                <Route
                  path="/*"
                  element={
                    <div className="App">
                      <Sidebar />
                      <div className="main-layout">
                        <Header />
                        <div className="content">
                          <Routing />
                        </div>
                      </div>
                    </div>
                  }
                />
              </>
            )}

            {role === "clinic" && (
              <>
                <Route
                  path="/clinic"
                  element={
                    <SidebarClinic>
                      <Statistics />
                    </SidebarClinic>
                  }
                />
                <Route
                  path="/clinic/createDoctor"
                  element={
                    <SidebarClinic>
                      <CreateDoctor />
                    </SidebarClinic>
                  }
                />

                <Route
                  path="/clinic/doctorAll"
                  element={
                    <SidebarClinic>
                      <MNDoctorAll />
                    </SidebarClinic>
                  }
                />
                <Route
                  path="/clinic/doctorView/:slug"
                  element={
                    <SidebarClinic>
                      <DoctorView />
                    </SidebarClinic>
                  }
                />
                <Route
                  path="/clinic/createDoctor"
                  element={
                    <SidebarClinic>
                      <CreateDoctor />
                    </SidebarClinic>
                  }
                />
                <Route
                  path="/clinic/notification"
                  element={
                    <SidebarClinic>
                      <NotificationEditor />
                    </SidebarClinic>
                  }
                />
                <Route
                  path="/clinic/NewsEditor"
                  element={
                    <SidebarClinic>
                      <NewsEditor />
                    </SidebarClinic>
                  }
                />
                <Route
                  path="/clinic/updateClinic"
                  element={
                    <SidebarClinic>
                      <UpdateClinic />
                    </SidebarClinic>
                  }
                />
                <Route
                  path="/clinic/statistical"
                  element={
                    <SidebarClinic>
                      <Statistics />
                    </SidebarClinic>
                  }
                />
                <Route
                  path="/clinic/doi-mat-khau"
                  element={
                    <SidebarClinic>
                      <Changepassword />
                    </SidebarClinic>
                  }
                />
                <Route
                  path="/clinic/specialty"
                  element={
                    <SidebarClinic>
                      <MNSpecialty />
                    </SidebarClinic>
                  }
                />
                <Route
                  path="/clinic/profile"
                  element={
                    <SidebarClinic>
                      <ClinicView />
                    </SidebarClinic>
                  }
                />
                <Route path="/*" element={<NotFound />} />
              </>
            )}
          </Routes>

          <ToastContainer />
        </PatientProvider>
      </CommonProvider>
    </>
  );
}

export default App;
