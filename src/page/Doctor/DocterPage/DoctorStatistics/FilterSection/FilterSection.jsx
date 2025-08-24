import React, { useState, useEffect } from "react";
import "./FilterSection.css";

const FilterSection = ({ data = [], onFilter }) => {
  const [month, setMonth] = useState("");
  const [uniqueMonths, setUniqueMonths] = useState([]);

  // Lấy danh sách tháng duy nhất khi data thay đổi
  useEffect(() => {
    if (Array.isArray(data)) {
      const months = [...new Set(data.map(item => item.month))]; // Loại bỏ trùng lặp
      setUniqueMonths(months);
    }
  }, [data]);

  const handleFilter = () => {
    const filtered = month
      ? data.filter(item => String(item.month) === String(month))
      : data;
    onFilter(filtered);
  };

  return (
    <div className="filter-section">
      <select value={month} onChange={(e) => setMonth(e.target.value)}>
        <option value="">Chọn tháng</option>
        {uniqueMonths.length > 0 ? (
          uniqueMonths.map((m, index) => (
            <option key={index} value={m}>
              {m}
            </option>
          ))
        ) : (
          <option disabled>Không có dữ liệu</option>
        )}
      </select>
      <button onClick={handleFilter}>Lọc</button>
    </div>
  );
};

export default FilterSection;
