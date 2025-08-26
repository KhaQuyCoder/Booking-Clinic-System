import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import "./DoctorStatistics.css";
import FilterSection from "./FilterSection/FilterSection";
import statisticsData from "./../../../../data/DoctorStatistics.json";

const DoctorStatistics = () => {
  const [filteredData, setFilteredData] = useState(statisticsData);

  const handleFilter = (filtered) => {
    setFilteredData(filtered);
  };
  useEffect(() => {
    window.scrollTo({
      behavior: "instant",
      top: "true",
    });
  }, []);
  return (
    <div className="statistics-container">
      <FilterSection data={statisticsData} onFilter={handleFilter} />

      <div className="chart">
        <h4>Lượt khám 6 tháng gần nhất</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => value.toLocaleString()} />{" "}
            <Tooltip formatter={(value) => value.toLocaleString()} />{" "}
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
