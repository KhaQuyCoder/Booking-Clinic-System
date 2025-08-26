import React, { useState } from "react";
import styles from "./Createpackage.module.css";
import PackageData from "../../../data/Packagelist.json";
const Createpackage = () => {
  const [packages, setPackages] = useState(PackageData);

  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingPackage, setEditingPackage] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [packageToDelete, setPackageToDelete] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    duration: "",
    description: "",
    features: "",
    status: "active",
    isPopular: false,
  });

  const filteredPackages = packages.filter(
    (pkg) =>
      pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCreatePackage = (e) => {
    e.preventDefault();
    const newPackage = {
      id: `PKG-${String(packages.length + 1).padStart(3, "0")}`,
      name: formData.name,
      price: parseInt(formData.price),
      duration: parseInt(formData.duration),
      description: formData.description,
      features: formData.features.split("\n").filter((f) => f.trim() !== ""),
      status: formData.status,
      createdDate: new Date().toISOString().split("T")[0],
      isPopular: formData.isPopular,
    };

    setPackages([...packages, newPackage]);
    setShowCreateForm(false);
    resetForm();
  };

  const handleUpdatePackage = (e) => {
    e.preventDefault();
    const updatedPackages = packages.map((pkg) => {
      if (pkg.id === editingPackage.id) {
        return {
          ...pkg,
          name: formData.name,
          price: parseInt(formData.price),
          duration: parseInt(formData.duration),
          description: formData.description,
          features: formData.features
            .split("\n")
            .filter((f) => f.trim() !== ""),
          status: formData.status,
          isPopular: formData.isPopular,
        };
      }
      return pkg;
    });

    setPackages(updatedPackages);
    setEditingPackage(null);
    resetForm();
  };

  const handleDeletePackage = (id) => {
    setPackages(packages.filter((pkg) => pkg.id !== id));
    setShowDeleteConfirm(false);
    setPackageToDelete(null);
  };

  const openEditForm = (pkg) => {
    setEditingPackage(pkg);
    setFormData({
      name: pkg.name,
      price: pkg.price,
      duration: pkg.duration,
      description: pkg.description,
      features: pkg.features.join("\n"),
      status: pkg.status,
      isPopular: pkg.isPopular || false,
    });
  };

  const prepareDeletePackage = (pkg) => {
    setPackageToDelete(pkg);
    setShowDeleteConfirm(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      price: "",
      duration: "",
      description: "",
      features: "",
      status: "active",
      isPopular: false,
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quản lý Gói Đăng ký</h1>
      <div className={styles.controls}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Tìm kiếm gói đăng ký..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <span className={styles.searchIcon}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>

        <button
          className={styles.createButton}
          onClick={() => setShowCreateForm(true)}
        >
          + Tạo gói mới
        </button>
      </div>

      {(showCreateForm || editingPackage) && (
        <div className={styles.formModal}>
          <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>
              {editingPackage ? "Chỉnh sửa gói" : "Tạo gói mới"}
            </h2>

            <form
              onSubmit={
                editingPackage ? handleUpdatePackage : handleCreatePackage
              }
            >
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Tên gói *</label>
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
                  <label className={styles.label}>Giá (VND) *</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className={styles.input}
                    min="0"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Thời hạn (ngày) *</label>
                  <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className={styles.input}
                    min="1"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Trạng thái</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className={styles.select}
                  >
                    <option value="active">Kích hoạt</option>
                    <option value="inactive">Ngừng kích hoạt</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.checkboxContainer}>
                    <input
                      type="checkbox"
                      name="isPopular"
                      checked={formData.isPopular}
                      onChange={handleInputChange}
                      className={styles.checkbox}
                    />
                    <span className={styles.checkboxLabel}>
                      Đánh dấu là phổ biến
                    </span>
                  </label>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Mô tả *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  rows="3"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Tính năng (mỗi tính năng trên một dòng) *
                </label>
                <textarea
                  name="features"
                  value={formData.features}
                  onChange={handleInputChange}
                  className={styles.textarea}
                  rows="5"
                  placeholder="Mỗi tính năng trên một dòng..."
                  required
                />
              </div>

              <div className={styles.formButtons}>
                <button type="submit" className={styles.saveButton}>
                  {editingPackage ? "Cập nhật" : "Tạo mới"}
                </button>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={() => {
                    setShowCreateForm(false);
                    setEditingPackage(null);
                    resetForm();
                  }}
                >
                  Hủy bỏ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showDeleteConfirm && packageToDelete && (
        <div className={styles.confirmModal}>
          <div className={styles.confirmContainer}>
            <h3>Xác nhận xóa</h3>
            <p>Bạn có chắc chắn muốn xóa gói "{packageToDelete.name}"?</p>
            <div className={styles.confirmButtons}>
              <button
                className={styles.confirmButton}
                onClick={() => handleDeletePackage(packageToDelete.id)}
              >
                Xóa
              </button>
              <button
                className={styles.cancelButton}
                onClick={() => setShowDeleteConfirm(false)}
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={styles.packagesGrid}>
        {filteredPackages.length > 0 ? (
          filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`${styles.packageCard} ${
                pkg.isPopular ? styles.popular : ""
              }`}
            >
              {pkg.isPopular && (
                <div className={styles.popularBadge}>Phổ biến</div>
              )}

              <div className={styles.packageHeader}>
                <h3 className={styles.packageName}>{pkg.name}</h3>
                <div className={styles.packagePrice}>
                  {pkg.price === 0 ? "Miễn phí" : formatCurrency(pkg.price)}
                  <span className={styles.pricePeriod}>/tháng</span>
                </div>
              </div>

              <div className={styles.packageDescription}>{pkg.description}</div>

              <div className={styles.packageFeatures}>
                <h4>Tính năng bao gồm:</h4>
                <ul>
                  {pkg.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.packageMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Thời hạn:</span>
                  <span className={styles.metaValue}>{pkg.duration} ngày</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Trạng thái:</span>
                  <span className={`${styles.metaValue} ${styles[pkg.status]}`}>
                    {pkg.status === "active"
                      ? "Đang kích hoạt"
                      : "Ngừng kích hoạt"}
                  </span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Ngày tạo:</span>
                  <span className={styles.metaValue}>{pkg.createdDate}</span>
                </div>
              </div>

              <div className={styles.packageActions}>
                <button
                  className={styles.editButton}
                  onClick={() => openEditForm(pkg)}
                >
                  Chỉnh sửa
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => prepareDeletePackage(pkg)}
                >
                  Xóa
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noData}>Không tìm thấy gói đăng ký nào</div>
        )}
      </div>
    </div>
  );
};

export default Createpackage;
