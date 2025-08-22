import { useEffect, useState } from "react";
import dataClinic from "../../../data/clinic.json";
import styles from "./MNDoctorAll.module.css";
import { useNavigate } from "react-router-dom";

const MNDoctorAll = () => {
  const [dataDoctor, setDataDoctor] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const columns = [
    { name: "STT" },
    { name: "Họ và tên" },
    { name: "Ngày sinh" },
    { name: "Quê quán" },
    { name: "Số điện thoại" },
    { name: "Chuyên khoa" },
    { name: "Học hàm" },
    { name: "Thao tác" },
  ];

  useEffect(() => {
    setDataDoctor(dataClinic.flatMap((clinic) => clinic.docter));
  }, []);

  const handleDeleteDoctor = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa bác sĩ này?")) {
      setDataDoctor((prev) => prev.filter((doctor) => doctor.idDocter !== id));
    }
  };

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentData = dataDoctor.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(dataDoctor.length / itemsPerPage);

  const handleViewDoctor = (slug) => {
    navigate(`/clinic/doctorView/${slug}`);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Danh sách bác sĩ</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((data, idx) => (
            <tr key={data.idDocter}>
              <td>{indexOfFirst + idx + 1}</td>
              <td>{data.name}</td>
              <td>12/09/1989</td>
              <td>Thừa Thiên Huế</td>
              <td>0423473434</td>
              <td>{data.specialty}</td>
              <td>{data.HocHam}</td>
              <td>
                <button
                  className={styles.btnAction}
                  onClick={() => handleViewDoctor(data.idDocter)}
                >
                  <i className="fa-solid fa-pen"></i>
                </button>
                <button
                  className={styles.btnDelete}
                  onClick={() => handleDeleteDoctor(data.idDocter)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button
                  className={styles.btnView}
                  onClick={() => handleViewDoctor(data.slugDocter)}
                >
                  <i className="fa-solid fa-sliders"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          <i className="fa-solid fa-square-caret-left"></i>
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? styles.activePage : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          <i className="fa-solid fa-square-caret-right"></i>
        </button>
      </div>
    </div>
  );
};

export default MNDoctorAll;
