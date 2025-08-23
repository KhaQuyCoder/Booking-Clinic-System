import React, { useEffect, useState } from "react";
import revenueData from "../../../../../data/Revenue.json";
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
  Legend
} from "recharts";
import "./Revenue.css";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Revenue = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [fromMonth, setFromMonth] = useState("");
  const [toMonth, setToMonth] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    setData(revenueData);
    setFilteredData(revenueData);
  }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString("vi-VN") + " ₫";
  };

  // Danh sách khoa
  const departments = [...new Set(data.map(item => item.department))];

  // Hàm lọc dữ liệu
  const handleFilter = () => {
    let filtered = data;

    if (fromMonth) {
      filtered = filtered.filter(item => parseInt(item.month) >= parseInt(fromMonth));
    }

    if (toMonth) {
      filtered = filtered.filter(item => parseInt(item.month) <= parseInt(toMonth));
    }

    if (department) {
      filtered = filtered.filter(item => item.department === department);
    }

    setFilteredData(filtered);
  };

  // Dữ liệu PieChart: tổng revenue theo department
  const pieData = Object.values(
    filteredData.reduce((acc, cur) => {
      if (!acc[cur.department]) {
        acc[cur.department] = { name: cur.department, value: 0 };
      }
      acc[cur.department].value += cur.revenue;
      return acc;
    }, {})
  );

  return (
    <div className="revenue-container">
      <h2>Thống kê Doanh Thu</h2>

      {/* Bộ lọc */}
      <div className="filter-section">
        <input
          type="number"
          placeholder="Từ tháng"
          value={fromMonth}
          onChange={(e) => setFromMonth(e.target.value)}
        />
        <input
          type="number"
          placeholder="Đến tháng"
          value={toMonth}
          onChange={(e) => setToMonth(e.target.value)}
        />
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="">Tất cả khoa</option>
          {departments.map((dept, index) => (
            <option key={index} value={dept}>{dept}</option>
          ))}
        </select>
        <button onClick={handleFilter}>Lọc</button>
      </div>

      {/* Biểu đồ tròn */}
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Biểu đồ cột */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={filteredData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value, name) => (name === "revenue" ? formatCurrency(value) : value)} />
          <Bar dataKey="revenue" fill="#82ca9d" name="Doanh thu" />
        </BarChart>
      </ResponsiveContainer>

      {/* Tổng doanh thu */}
      <div className="total-revenue">
        Tổng doanh thu:{" "}
        <strong>
          {formatCurrency(filteredData.reduce((sum, item) => sum + item.revenue, 0))}
        </strong>
      </div>
    </div>
  );
};

export default Revenue;
