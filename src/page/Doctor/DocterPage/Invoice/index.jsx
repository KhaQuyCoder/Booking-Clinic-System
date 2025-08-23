import React, { useState, useEffect } from "react";
import invoicesData from "./../../../../data/Invoice.json";
import "./Invoice.css";
import { jsPDF } from "jspdf";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Invoice = () => {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formInvoice, setFormInvoice] = useState({});

  useEffect(() => {
    setInvoices(invoicesData);
  }, []);

  const calculateItemTotal = (item) => item.price * item.quantity;
  const calculateInvoiceTotal = (items) =>
    items.reduce((sum, item) => sum + calculateItemTotal(item), 0);

  const handleSelectInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    setFormInvoice(invoice);
    setIsEditing(false);
  };

  const handleExportPDF = () => {
    if (!selectedInvoice) return;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(`Hóa đơn: ${selectedInvoice.invoiceId}`, 10, 10);
    doc.text(`Mã số thuế: ${selectedInvoice.taxId}`, 10, 20);
    doc.text(`Ngày lập: ${selectedInvoice.date}`, 10, 30);
    doc.text(`Đơn vị khám: ${selectedInvoice.clinic}`, 10, 40);
    doc.text(`Bệnh nhân: ${selectedInvoice.patient}`, 10, 50);
    doc.text(`Ngày sinh: ${selectedInvoice.dob}`, 10, 60);
    doc.text(`Bác sĩ: ${selectedInvoice.doctor}`, 10, 70);

    let startY = 80;
    doc.text("Dịch vụ/Thuốc | Số lượng | Đơn giá | Thành tiền", 10, startY);
    selectedInvoice.items.forEach((item, index) => {
      startY += 10;
      doc.text(
        `${item.name} | ${item.quantity} | ${item.price}₫ | ${calculateItemTotal(
          item
        )}₫`,
        10,
        startY
      );
    });

    startY += 20;
    doc.text(`Tổng tiền: ${calculateInvoiceTotal(selectedInvoice.items)}₫`, 10, startY);
    doc.save(`${selectedInvoice.invoiceId}.pdf`);
  };

  const handleSave = () => {
    if (!formInvoice.invoiceId) {
      toast.error("Vui lòng nhập mã hóa đơn!");
      return;
    }
    // Nếu thêm mới
    const existIndex = invoices.findIndex(inv => inv.invoiceId === formInvoice.invoiceId);
    let updatedInvoices = [];
    if (existIndex >= 0) {
      updatedInvoices = invoices.map(inv =>
        inv.invoiceId === formInvoice.invoiceId ? formInvoice : inv
      );
    } else {
      updatedInvoices = [...invoices, formInvoice];
    }
    setInvoices(updatedInvoices);
    setSelectedInvoice(formInvoice);
    setIsEditing(false);
    toast.success("Đã lưu hóa đơn thành công!");
  };

  const handleCancel = () => {
    if (window.confirm("Bạn có chắc chắn muốn hủy?")) {
      setSelectedInvoice(null);
      setIsEditing(false);
      toast.info("Hủy lập hóa đơn!");
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleAddNew = () => {
    const newInvoice = {
      invoiceId: "",
      taxId: "",
      date: "",
      clinic: "",
      patient: "",
      dob: "",
      doctor: "",
      cccd: "",
      qrCode: "",
      items: []
    };
    setSelectedInvoice(newInvoice);
    setFormInvoice(newInvoice);
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInvoice({ ...formInvoice, [name]: value });
  };

  return (
    <div className="invoice-container">
      {/* Danh sách hóa đơn */}
      <div className="invoice-list">
        <h3>Danh sách hóa đơn</h3>
        {invoices.map((inv) => (
          <div
            key={inv.invoiceId}
            className="invoice-item"
            onClick={() => handleSelectInvoice(inv)}
          >
            <span>{inv.invoiceId}</span>
            <span>{inv.date}</span>
            <span>{calculateInvoiceTotal(inv.items)}₫</span>
          </div>
        ))}
        <button className="add-btn" onClick={handleAddNew}>Thêm hóa đơn</button>
      </div>

      {/* Chi tiết hóa đơn */}
      <div className="invoice-detail">
        {selectedInvoice ? (
          <>
            <h2>Lập hóa đơn</h2>
            <div className="invoice-header">
              <div className="column-left">
                <p>
                  <b>Mã hóa đơn:</b>{" "}
                  {isEditing ? (
                    <input name="invoiceId" value={formInvoice.invoiceId} onChange={handleInputChange} />
                  ) : formInvoice.invoiceId}
                </p>
                <p>
                  <b>Mã số thuế:</b>{" "}
                  {isEditing ? (
                    <input name="taxId" value={formInvoice.taxId} onChange={handleInputChange} />
                  ) : formInvoice.taxId}
                </p>
                <p>
                  <b>Ngày lập:</b>{" "}
                  {isEditing ? (
                    <input type="date" name="date" value={formInvoice.date} onChange={handleInputChange} />
                  ) : formInvoice.date}
                </p>
                <p>
                  <b>Đơn vị khám:</b>{" "}
                  {isEditing ? (
                    <input name="clinic" value={formInvoice.clinic} onChange={handleInputChange} />
                  ) : formInvoice.clinic}
                </p>
              </div>
              <div className="column-center">
                <p>
                  <b>Số CCCD:</b>{" "}
                  {isEditing ? (
                    <input name="cccd" value={formInvoice.cccd} onChange={handleInputChange} />
                  ) : formInvoice.cccd}
                </p>
                <p>
                  <b>Bệnh nhân:</b>{" "}
                  {isEditing ? (
                    <input name="patient" value={formInvoice.patient} onChange={handleInputChange} />
                  ) : formInvoice.patient}
                </p>
                <p>
                  <b>Ngày sinh:</b>{" "}
                  {isEditing ? (
                    <input type="date" name="dob" value={formInvoice.dob} onChange={handleInputChange} />
                  ) : formInvoice.dob}
                </p>
                <p>
                  <b>Bác sĩ:</b>{" "}
                  {isEditing ? (
                    <input name="doctor" value={formInvoice.doctor} onChange={handleInputChange} />
                  ) : formInvoice.doctor}
                </p>
              </div>
              <div className="qr-container">
                <img src={formInvoice.qrCode || selectedInvoice.qrCode} alt="QR Code" />
              </div>
            </div>

            <div className="invoice-items">
              <table>
                <thead>
                  <tr>
                    <th>Tên dịch vụ/thuốc</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {formInvoice.items.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}₫</td>
                      <td>{calculateItemTotal(item)}₫</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Tổng tiền */}
            <h3 className="total">Tổng tiền: {calculateInvoiceTotal(formInvoice.items)}₫</h3>

            {/* Nút góc phải dưới cùng */}
            <div className="button-group">
              <button className="export-btn" onClick={handleExportPDF}>Xuất PDF</button>
              {isEditing && <button className="save-btn" onClick={handleSave}>Lưu</button>}
              {isEditing && <button className="cancel-btn" onClick={handleCancel}>Hủy</button>}
              {!isEditing && <button className="edit-btn" onClick={handleEdit}>Chỉnh sửa</button>}
            </div>
          </>
        ) : (
          <p className="no-invoice">Chọn một hóa đơn để lập</p>
        )}
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Invoice;
