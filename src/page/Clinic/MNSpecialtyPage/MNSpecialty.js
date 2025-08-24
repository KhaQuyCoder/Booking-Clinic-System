import React, { useState } from "react";
import styles from "./MNSpecialty.module.css";

const MNSpecialty = () => {
  const initialDepartments = [
    {
      id: 1,
      name: "Khoa Nội tổng quát",
      description: "Khám và điều trị các bệnh lý nội khoa",
      headDoctor: "BS. Nguyễn Văn A",
      room: "P.201",
      status: "active",
      createdAt: "2023-01-15",
    },
    {
      id: 2,
      name: "Khoa Ngoại",
      description: "Phẫu thuật và điều trị ngoại khoa",
      headDoctor: "BS. Trần Thị B",
      room: "P.301",
      status: "active",
      createdAt: "2023-02-20",
    },
    {
      id: 3,
      name: "Khoa Sản",
      description: "Chăm sóc sức khỏe sinh sản và sản khoa",
      headDoctor: "Chưa chỉ định",
      room: "P.401",
      status: "active",
      createdAt: "2023-03-10",
    },
  ];

  const doctors = [
    { id: 1, name: "BS. Nguyễn Văn A", specialty: "Nội tổng quát" },
    { id: 2, name: "BS. Trần Thị B", specialty: "Ngoại khoa" },
    { id: 3, name: "BS. Lê Văn C", specialty: "Sản phụ khoa" },
    { id: 4, name: "BS. Phạm Thị D", specialty: "Nhi khoa" },
    { id: 5, name: "BS. Hoàng Văn E", specialty: "Tim mạch" },
  ];

  const [departments, setDepartments] = useState(initialDepartments);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    description: "",
    headDoctor: "",
    room: "",
    status: "active",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      setDepartments(
        departments.map((dept) => (dept.id === formData.id ? formData : dept))
      );
    } else {
      const newDept = {
        ...formData,
        id:
          departments.length > 0
            ? Math.max(...departments.map((d) => d.id)) + 1
            : 1,
        createdAt: new Date().toISOString().split("T")[0],
      };
      setDepartments([...departments, newDept]);
    }

    setFormData({
      id: null,
      name: "",
      description: "",
      headDoctor: "",
      room: "",
      status: "active",
    });
    setIsEditing(false);
    setShowForm(false);
  };

  const startEdit = (department) => {
    setFormData(department);
    setIsEditing(true);
    setShowForm(true);
  };

  const deleteDepartment = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa chuyên khoa này?")) {
      setDepartments(departments.filter((dept) => dept.id !== id));
    }
  };

  const cancelEdit = () => {
    setFormData({
      id: null,
      name: "",
      description: "",
      headDoctor: "",
      room: "",
      status: "active",
    });
    setIsEditing(false);
    setShowForm(false);
  };

  const filteredDepartments = departments.filter(
    (dept) =>
      dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dept.headDoctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dept.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Quản lý Chuyên khoa</h1>
        <p className={styles.subtitle}>
          Quản lý thông tin các chuyên khoa trong phòng khám
        </p>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Tìm kiếm chuyên khoa, trưởng khoa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <span className={styles.searchIcon}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>

        <button className={styles.addButton} onClick={() => setShowForm(true)}>
          + Thêm chuyên khoa
        </button>
      </div>

      {showForm && (
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>
            {isEditing ? "Cập nhật chuyên khoa" : "Thêm chuyên khoa mới"}
          </h2>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Tên chuyên khoa *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Phòng làm việc</label>
                <input
                  type="text"
                  name="room"
                  value={formData.room}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Ví dụ: P.201"
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Mô tả chuyên khoa</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className={styles.textarea}
                rows="3"
              />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Trưởng khoa</label>
                <select
                  name="headDoctor"
                  value={formData.headDoctor}
                  onChange={handleInputChange}
                  className={styles.select}
                >
                  <option value="">Chọn trưởng khoa</option>
                  {doctors.map((doctor) => (
                    <option key={doctor.id} value={doctor.name}>
                      {doctor.name} - {doctor.specialty}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Trạng thái</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className={styles.select}
                >
                  <option value="active">Hoạt động</option>
                  <option value="inactive">Tạm ngưng</option>
                </select>
              </div>
            </div>

            <div className={styles.formButtons}>
              <button type="submit" className={styles.saveButton}>
                {isEditing ? "Cập nhật" : "Thêm mới"}
              </button>
              <button
                type="button"
                onClick={cancelEdit}
                className={styles.cancelButton}
              >
                Hủy bỏ
              </button>
            </div>
          </form>
        </div>
      )}

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Tên chuyên khoa</th>
              <th>Mô tả</th>
              <th>Trưởng khoa</th>
              <th>Phòng</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredDepartments.length > 0 ? (
              filteredDepartments.map((dept) => (
                <tr key={dept.id}>
                  <td>
                    <div className={styles.deptName}>{dept.name}</div>
                    <div className={styles.deptMeta}>ID: {dept.id}</div>
                  </td>
                  <td>{dept.description}</td>
                  <td>
                    <div className={styles.headDoctor}>
                      {dept.headDoctor || "Chưa chỉ định"}
                    </div>
                  </td>
                  <td>{dept.room}</td>
                  <td>
                    <span className={`${styles.status} ${styles[dept.status]}`}>
                      {dept.status === "active" ? "Hoạt động" : "Tạm ngưng"}
                    </span>
                  </td>
                  <td>
                    <div className={styles.actions}>
                      <button
                        className={styles.editButton}
                        onClick={() => startEdit(dept)}
                      >
                        <i className="fa-solid fa-pen"></i>
                      </button>
                      <button
                        className={styles.deleteButton}
                        onClick={() => deleteDepartment(dept.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className={styles.noData}>
                  Không có dữ liệu chuyên khoa nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MNSpecialty;
