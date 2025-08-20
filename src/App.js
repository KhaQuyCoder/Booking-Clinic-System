import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/User/HomePage/Home";
import { State } from "./state/context";
import { Docter } from "./page/User/DocterPage/Docter";
import Clinic from "./page/User/ClinicPage/Clinic";
import Question from "./page/User/QuestionPage/Question";
import Blog from "./page/User/BlogPage/Blog";
import Security from "./page/User/SecurityPage/Security";
import Confirm from "./page/User/ConfirmPage/Confirm";
import DetailClinic from "./page/User/DetailPage/DetailClinic";
import { useContext } from "react";
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
function App() {
  const { valueText } = useContext(State);
  return (
    <>
      {valueText.length > 0 && <Opacity />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bac-si" element={<Docter />} />
        <Route path="bac-si/page/:page" element={<Docter />} />
        <Route path="phong-kham" element={<Clinic />} />
        <Route path="phong-kham/page/:page" element={<Clinic />} />
        <Route path="tu-van" element={<Question />} />
        <Route path="tu-van/page/:page" element={<Question />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/chinh-sach-bao-mat" element={<Security />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/dang-ky-phong-kham" element={<CreateClinic />} />
        <Route path="chi-tiet-phong-kham/:slug" element={<DetailClinic />} />
        <Route path="/:slug/dat-lich-kham" element={<Booking />} />
        <Route path="/lich-su-kham-benh" element={<HistoryBooking />} />
        <Route path="/trang-ca-nhan" element={<Profile />} />
        <Route path="/xem-lich-kham" element={<AppointmentList />} />
        <Route path="/tim-kiem" element={<SearchClinic />} />
        <Route path="/kham-lam-san" element={<CallDocter />} />
        <Route path="/xem-chi-tiet-bac-si/:slug" element={<DetailDocter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
