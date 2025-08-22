import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import "./DoctorStatistics.css";

// Đăng ký các thành phần cần thiết cho Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const DoctorStatistics = () => {
  // Dữ liệu giả cho biểu đồ
  const data = {
    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6"],
    datasets: [
      {
        label: "Số lượt khám",
        data: [50, 70, 80, 65, 90, 120],
        backgroundColor: "rgba(54, 162, 235, 0.6)", // màu cột
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Tùy chọn cho biểu đồ
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Thống kê số lượt khám theo tháng",
        font: { size: 18 },
      },
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div className="statistics-container">
      <h2 className="statistics-title">📊 Thống kê</h2>
      <div className="chart-wrapper">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default DoctorStatistics;
