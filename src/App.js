import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
//Quý/ UserPage
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

//Đức/ DoctorPage
import Layout from "./layouts/LayoutsDoctor/Layout/Layout";
import Login from "./page/Doctor/DocterPage/Login/index";
import PatientManagementv2 from "./page/Doctor/DocterPage/PatientManagementv2/index";
import ScheduleAppointment from "./page/Doctor/DocterPage/ScheduleMedicalAppointment/index";
import PatientDetail from "./page/Doctor/DocterPage/PatientManagementv2/PatientDetail/index";
import PatientEdit from "./page/Doctor/DocterPage/PatientManagementv2/PatientEdit/index";
import ViewMedicalRecords from "./page/Doctor/DocterPage/PatientManagementv2/ViewMedicalRecords/index";
import MedicalHistory from "./page/Doctor/DocterPage/PatientManagementv2/MedicalHistory/index";
import { PatientProvider } from "./context/patientContext";

function App() {
  const { valueText } = useContext(State);
  const [role, setRole] = useState("doctor");

  useEffect(() => {
    const savedRole = JSON.parse(localStorage.getItem("role")) || "user";
    console.log(savedRole);

    setRole(savedRole);
  });

  return (
    <>
      {valueText.length > 0 && <Opacity />}
      <PatientProvider>
        <Routes>
          {/* User routes */}
          <Route path="/" element={<Home />} />
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
          <Route path="/chi-tiet-phong-kham/:slug" element={<DetailClinic />} />
          <Route path="/:slug/dat-lich-kham" element={<Booking />} />
          <Route path="/lich-su-kham-benh" element={<HistoryBooking />} />
          <Route path="/trang-ca-nhan" element={<Profile />} />
          <Route path="/xem-lich-kham" element={<AppointmentList />} />
          <Route path="/tim-kiem" element={<SearchClinic />} />
          <Route path="/kham-lam-san" element={<CallDocter />} />
          <Route path="/xem-chi-tiet-bac-si/:slug" element={<DetailDocter />} />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Doctor routes (chỉ khi role = docter) */}
          {role === "doctor" && (
            <Route path="/doctor" element={<Layout />}>
              <Route
                path="/doctor/schedule"
                element={<ScheduleAppointment />}
              />
              <Route
                path="/doctor/Patients"
                element={<PatientManagementv2 />}
              />
              <Route path="/doctor/detail" element={<PatientManagementv2 />} />
              <Route path="/doctor/detail/:id" element={<PatientDetail />} />
              <Route path="/doctor/PatientEdit" element={<PatientEdit />} />
              <Route path="/doctor/PatientEdit/:id" element={<PatientEdit />} />
              <Route path="/doctor/ViewMR" element={<ViewMedicalRecords />} />
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
          )}

          {/* Not found */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </PatientProvider>
    </>
  );
}

export default App;
