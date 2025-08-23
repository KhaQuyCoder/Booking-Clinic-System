import React, { useState } from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import "./DoctorStatistics.css";
import FilterSection from "./FilterSection/FilterSection"
import statisticsData from "./../../../../data/DoctorStatistics.json";
// import Visits from "./Visits";

const DoctorStatistics = () => {
  const [filteredData, setFilteredData] = useState(statisticsData);

  // Hàm nhận dữ liệu đã lọc từ component con
  const handleFilter = (filtered) => {
    setFilteredData(filtered);
  };

  return (
    <div className="statistics-container">
      {/* Component con: bộ lọc */}
      <FilterSection data={statisticsData} onFilter={handleFilter} />

      {/* Biểu đồ lượt khám */}
      <div className="chart">
        <h4>Lượt khám 6 tháng gần nhất</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => value.toLocaleString()} /> {/* Hiển thị số đầy đủ */}
            <Tooltip formatter={(value) => value.toLocaleString()} /> {/* Tooltip cũng hiển thị đầy đủ */}
            <Bar dataKey="visits" fill="#0088FE" />
          </BarChart>
        </ResponsiveContainer>

        <h4>Doanh thu 6 tháng gần nhất</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => value.toLocaleString()} />
            <Tooltip formatter={(value) => value.toLocaleString() + " VNĐ"} />
            <Bar dataKey="revenue" fill="#FF8042" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DoctorStatistics;
