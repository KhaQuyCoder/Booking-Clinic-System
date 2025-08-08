import ScheduleAppointment from './Feature/Duc/Doctor/ScheduleMedicalAppointment/ScheduleMedicalAppointment';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Feature/Duc/Doctor/Components/Layout'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Đặt Layout bọc xung quanh các Route con */}
        <Route path="/" element={<Layout />}>
          <Route path="schedule" element={<ScheduleAppointment />} />
          {/* Thêm các route con khác trong Layout */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
