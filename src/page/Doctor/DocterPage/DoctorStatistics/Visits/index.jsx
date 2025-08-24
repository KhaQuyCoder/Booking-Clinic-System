import React, { useEffect, useState } from "react";
import visitsData from "../../../../../data/Visits.json";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import "./Visits.css";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA336A"];

const Visits = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    setData(visitsData);
    setFilteredData(visitsData);
  }, []);

  const handleFilter = () => {
    if (startDate && endDate) {
      const startMonth = parseInt(startDate.split("-")[1], 10);
      const endMonth = parseInt(endDate.split("-")[1], 10);

      const newData = data.filter((item) => {
        const month = parseInt(item.month.split("/")[0], 10);
        return month >= startMonth && month <= endMonth;
      });

      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  const departmentSummary = filteredData.reduce((acc, curr) => {
    const dept = curr.department;
    if (!acc[dept]) {
      acc[dept] = 0;
    }
    acc[dept] += curr.visits;
    return acc;
  }, {});

  const pieData = Object.entries(departmentSummary).map(([dept, visits]) => ({
    name: dept,
    value: visits,
  }));

  const totalVisits = filteredData.reduce((sum, item) => sum + item.visits, 0);

  return (
    <div className="Visits-container">
      <h2>Thống kê lượt khám</h2>

      <div className="filter-section">
        <label>Từ ngày: </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>Đến ngày: </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={handleFilter}>Lọc</button>
      </div>

      <div style={{ marginTop: 30 }}>
        <h3>Tỷ lệ lượt khám theo khoa</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginTop: 30 }}>
        <h3>Lượt khám theo tháng</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="visits" fill="#1181ddff" name="Lượt khám" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="total-Visits">
        Tổng lượt khám: <strong>{totalVisits}</strong>
      </div>
    </div>
  );
};

export default Visits;
