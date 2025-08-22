// NewsEditor.jsx
import React, { useState } from "react";
import styles from "./NewsEditor.module.css";

const NewsEditor = () => {
  const [news, setNews] = useState({
    title: "",
    category: "thoi-su",
    summary: "",
    content: "",
    image: null,
    imagePreview: null,
    tags: [],
    tagInput: "",
    isBreakingNews: false,
    isFeatured: false,
  });

  const categories = [
    { value: "thoi-su", label: "Thời sự" },
    { value: "the-gioi", label: "Thế giới" },
    { value: "kinh-doanh", label: "Kinh doanh" },
    { value: "giai-tri", label: "Giải trí" },
    { value: "the-thao", label: "Thể thao" },
    { value: "phap-luat", label: "Pháp luật" },
    { value: "giao-duc", label: "Giáo dục" },
    { value: "suc-khoe", label: "Sức khỏe" },
    { value: "doi-song", label: "Đời sống" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setNews((prev) => ({
            ...prev,
            image: file,
            imagePreview: reader.result,
          }));
        };
        reader.readAsDataURL(file);
      }
    } else if (type === "checkbox") {
      setNews((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setNews((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleTagInput = (e) => {
    if (e.key === "Enter" && news.tagInput.trim()) {
      e.preventDefault();
      setNews((prev) => ({
        ...prev,
        tags: [...prev.tags, prev.tagInput.trim()],
        tagInput: "",
      }));
    }
  };

  const removeTag = (indexToRemove) => {
    setNews((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, index) => index !== indexToRemove),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Tin tức đã được lưu thành công!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Soạn tin tức mới</h1>
        <p className={styles.subtitle}>Tạo bài viết mới cho trang tin tức</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.mainContent}>
          <div className={styles.formGroup}>
            <label htmlFor="title" className={styles.label}>
              Tiêu đề tin tức *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={news.title}
              onChange={handleChange}
              className={styles.titleInput}
              placeholder="Nhập tiêu đề hấp dẫn..."
              required
            />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="category" className={styles.label}>
                Chuyên mục *
              </label>
              <select
                id="category"
                name="category"
                value={news.category}
                onChange={handleChange}
                className={styles.select}
                required
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  name="isBreakingNews"
                  checked={news.isBreakingNews}
                  onChange={handleChange}
                  className={styles.checkbox}
                />
                <span className={styles.checkboxLabel}>Tin nóng</span>
              </label>

              <label className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  name="isFeatured"
                  checked={news.isFeatured}
                  onChange={handleChange}
                  className={styles.checkbox}
                />
                <span className={styles.checkboxLabel}>Tin nổi bật</span>
              </label>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="summary" className={styles.label}>
              Tóm tắt tin tức *
            </label>
            <textarea
              id="summary"
              name="summary"
              value={news.summary}
              onChange={handleChange}
              className={styles.summaryInput}
              placeholder="Viết tóm tắt ngắn gọn về tin tức..."
              rows="3"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="content" className={styles.label}>
              Nội dung chi tiết *
            </label>
            <textarea
              id="content"
              name="content"
              value={news.content}
              onChange={handleChange}
              className={styles.contentInput}
              placeholder="Viết nội dung đầy đủ của tin tức..."
              rows="12"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="image" className={styles.label}>
              Ảnh đại diện
            </label>
            <div className={styles.imageUpload}>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
                className={styles.fileInput}
                accept="image/*"
              />
              {news.imagePreview ? (
                <div className={styles.imagePreviewContainer}>
                  <img
                    src={news.imagePreview}
                    alt="Preview"
                    className={styles.imagePreview}
                  />
                  <button
                    type="button"
                    className={styles.removeImageButton}
                    onClick={() =>
                      setNews((prev) => ({
                        ...prev,
                        image: null,
                        imagePreview: null,
                      }))
                    }
                  >
                    ×
                  </button>
                </div>
              ) : (
                <label htmlFor="image" className={styles.uploadPlaceholder}>
                  <span className={styles.uploadIcon}>+</span>
                  <span>Chọn ảnh đại diện</span>
                </label>
              )}
            </div>
          </div>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Thẻ tags</h3>
            <div className={styles.tagInputContainer}>
              <input
                type="text"
                value={news.tagInput}
                onChange={(e) =>
                  setNews((prev) => ({ ...prev, tagInput: e.target.value }))
                }
                onKeyDown={handleTagInput}
                className={styles.tagInput}
                placeholder="Nhập tag và ấn Enter"
              />
            </div>
            <div className={styles.tagsContainer}>
              {news.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(index)}
                    className={styles.tagRemove}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Tùy chọn xuất bản</h3>
            <button type="submit" className={styles.publishButton}>
              Xuất bản ngay
            </button>
            <button type="button" className={styles.saveDraftButton}>
              Lưu bản nháp
            </button>
            <button type="button" className={styles.previewButton}>
              Xem trước
            </button>
          </div>

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Hướng dẫn</h3>
            <ul className={styles.instructions}>
              <li>Tiêu đề nên ngắn gọn, hấp dẫn</li>
              <li>Tóm tắt khoảng 1-2 câu mô tả nội dung</li>
              <li>Chọn chuyên mục phù hợp</li>
              <li>Thêm tag để dễ dàng tìm kiếm</li>
              <li>Kiểm tra kỹ nội dung trước khi xuất bản</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerActions}>
          <button type="button" className={styles.cancelButton}>
            Hủy bỏ
          </button>
          <button type="button" className={styles.saveDraftButton}>
            Lưu nháp
          </button>
          <button type="submit" className={styles.publishButton}>
            Xuất bản tin tức
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsEditor;
