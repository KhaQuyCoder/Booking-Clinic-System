import React, { useMemo, useState } from "react";
import styles from "./Invoice.module.css";

const emptyItem = {
  name: "",
  form: "Viên",
  dosage: "",
  quantity: 1,
  unitPrice: 0,
};

const PrescriptionInvoice = () => {
  const [clinic, setClinic] = useState({
    name: "Phòng khám đa khoa Hoàng Viết Thắng",
    address: "123 Nguyễn Văn Cừ, Q.5, TP.HCM",
    phone: "028 1234 5678",
    email: "hvtclinic@gmail.com",
    taxCode: "0312 345 678",
  });

  const [invoice, setInvoice] = useState({
    invoiceNo: "HD-2025-0001",
    date: new Date().toISOString().substring(0, 10),
    doctor: "BS. Nguyễn Văn A",
    paymentMethod: "Tiền mặt",
    vatRate: 8,
    discount: 0,
    note: "",
  });

  const [patient, setPatient] = useState({
    name: "Nguyễn Văn B",
    birth: "1990-01-01",
    gender: "Nam",
    phone: "0909 000 111",
    address: "456 Trần Hưng Đạo, Q.1, TP.HCM",
    patientId: "BN-2025-0123",
  });

  const [items, setItems] = useState([
    {
      ...emptyItem,
      name: "Paracetamol 500mg",
      dosage: "1 viên x 3 lần/ngày",
      quantity: 10,
      unitPrice: 2000,
    },
    {
      ...emptyItem,
      name: "Vitamin C 1000mg",
      form: "Viên sủi",
      dosage: "1 viên/ngày",
      quantity: 7,
      unitPrice: 6000,
    },
  ]);

  const addItem = () => setItems((prev) => [...prev, { ...emptyItem }]);
  const removeItem = (idx) =>
    setItems((prev) => prev.filter((_, i) => i !== idx));
  const updateItem = (idx, key, value) =>
    setItems((prev) =>
      prev.map((it, i) => (i === idx ? { ...it, [key]: value } : it))
    );

  const subTotal = useMemo(
    () =>
      items.reduce(
        (sum, it) =>
          sum + (Number(it.quantity) || 0) * (Number(it.unitPrice) || 0),
        0
      ),
    [items]
  );
  const vatAmount = useMemo(
    () =>
      Math.max(0, Math.round((subTotal * Number(invoice.vatRate || 0)) / 100)),
    [subTotal, invoice.vatRate]
  );
  const discount = useMemo(
    () => Number(invoice.discount) || 0,
    [invoice.discount]
  );
  const total = useMemo(
    () => Math.max(0, subTotal + vatAmount - discount),
    [subTotal, vatAmount, discount]
  );

  const currency = (v) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(v || 0);

  const handlePrint = () => window.print();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.clinic}>
          <h1 className={styles.clinicName}>
            <input
              className={styles.inputLikeH1}
              value={clinic.name}
              onChange={(e) => setClinic({ ...clinic, name: e.target.value })}
            />
          </h1>
          <div className={styles.clinicLine}>
            Đ/c:{" "}
            <input
              value={clinic.address}
              onChange={(e) =>
                setClinic({ ...clinic, address: e.target.value })
              }
            />
          </div>
          <div className={styles.clinicLine}>
            ĐT:{" "}
            <input
              value={clinic.phone}
              onChange={(e) => setClinic({ ...clinic, phone: e.target.value })}
            />{" "}
            • Email:{" "}
            <input
              value={clinic.email}
              onChange={(e) => setClinic({ ...clinic, email: e.target.value })}
            />{" "}
            • MST:{" "}
            <input
              value={clinic.taxCode}
              onChange={(e) =>
                setClinic({ ...clinic, taxCode: e.target.value })
              }
            />
          </div>
        </div>
        <div className={styles.invoiceBox}>
          <div className={styles.invoiceTitle}>HÓA ĐƠN THUỐC</div>
          <div className={styles.invoiceRow}>
            Số HĐ:
            <input
              value={invoice.invoiceNo}
              onChange={(e) =>
                setInvoice({ ...invoice, invoiceNo: e.target.value })
              }
            />
          </div>
          <div className={styles.invoiceRow}>
            Ngày lập:
            <input
              type="date"
              value={invoice.date}
              onChange={(e) => setInvoice({ ...invoice, date: e.target.value })}
            />
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Thông tin bệnh nhân</h3>
        <div className={styles.grid2}>
          <label className={styles.field}>
            Họ tên
            <input
              value={patient.name}
              onChange={(e) => setPatient({ ...patient, name: e.target.value })}
              placeholder="Họ tên bệnh nhân"
            />
          </label>
          <label className={styles.field}>
            Mã BN
            <input
              value={patient.patientId}
              onChange={(e) =>
                setPatient({ ...patient, patientId: e.target.value })
              }
              placeholder="BN-xxxx"
            />
          </label>
          <label className={styles.field}>
            Ngày sinh
            <input
              type="date"
              value={patient.birth}
              onChange={(e) =>
                setPatient({ ...patient, birth: e.target.value })
              }
            />
          </label>
          <label className={styles.field}>
            Giới tính
            <select
              value={patient.gender}
              onChange={(e) =>
                setPatient({ ...patient, gender: e.target.value })
              }
            >
              <option>Nam</option>
              <option>Nữ</option>
              <option>Khác</option>
            </select>
          </label>
          <label className={styles.field}>
            Số điện thoại
            <input
              value={patient.phone}
              onChange={(e) =>
                setPatient({ ...patient, phone: e.target.value })
              }
              placeholder="09xxxxxxxx"
            />
          </label>
          <label className={styles.fieldWide}>
            Địa chỉ
            <input
              value={patient.address}
              onChange={(e) =>
                setPatient({ ...patient, address: e.target.value })
              }
              placeholder="Số nhà, đường, phường, quận, tỉnh"
            />
          </label>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h3 className={styles.sectionTitle}>Danh mục thuốc</h3>
          <button className={styles.addBtn} onClick={addItem}>
            + Thêm thuốc
          </button>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th style={{ width: 40 }}>#</th>
                <th>Tên thuốc</th>
                <th style={{ width: 120 }}>Dạng</th>
                <th>Liều dùng</th>
                <th style={{ width: 120 }}>Số lượng</th>
                <th style={{ width: 160 }}>Đơn giá (VND)</th>
                <th style={{ width: 160 }}>Thành tiền</th>
                <th style={{ width: 60 }}></th>
              </tr>
            </thead>
            <tbody>
              {items.map((it, i) => {
                const line =
                  (Number(it.quantity) || 0) * (Number(it.unitPrice) || 0);
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                      <input
                        value={it.name}
                        onChange={(e) => updateItem(i, "name", e.target.value)}
                        placeholder="Tên thuốc"
                      />
                    </td>
                    <td>
                      <select
                        value={it.form}
                        onChange={(e) => updateItem(i, "form", e.target.value)}
                      >
                        <option>Viên</option>
                        <option>Viên sủi</option>
                        <option>Gói</option>
                        <option>Ống</option>
                        <option>Siro</option>
                        <option>Thuốc mỡ</option>
                        <option>Khác</option>
                      </select>
                    </td>
                    <td>
                      <input
                        value={it.dosage}
                        onChange={(e) =>
                          updateItem(i, "dosage", e.target.value)
                        }
                        placeholder="VD: 1 viên x 2 lần/ngày"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={it.quantity}
                        onChange={(e) =>
                          updateItem(i, "quantity", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        value={it.unitPrice}
                        onChange={(e) =>
                          updateItem(i, "unitPrice", e.target.value)
                        }
                      />
                    </td>
                    <td className={styles.right}>{currency(line)}</td>
                    <td>
                      <button
                        className={styles.removeBtn}
                        onClick={() => removeItem(i)}
                        title="Xóa dòng"
                      >
                        ×
                      </button>
                    </td>
                  </tr>
                );
              })}
              {items.length === 0 && (
                <tr>
                  <td colSpan="8" className={styles.emptyRow}>
                    Chưa có thuốc. Nhấn “+ Thêm thuốc”.
                  </td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5"></td>
                <td className={styles.rightLabel}>Tạm tính</td>
                <td className={styles.right}>{currency(subTotal)}</td>
                <td />
              </tr>
              <tr>
                <td colSpan="5"></td>
                <td className={styles.rightLabel}>
                  VAT
                  <select
                    className={styles.vatSelect}
                    value={invoice.vatRate}
                    onChange={(e) =>
                      setInvoice({
                        ...invoice,
                        vatRate: Number(e.target.value),
                      })
                    }
                  >
                    <option value={0}>0%</option>
                    <option value={5}>5%</option>
                    <option value={8}>8%</option>
                    <option value={10}>10%</option>
                  </select>
                </td>
                <td className={styles.right}>{currency(vatAmount)}</td>
                <td />
              </tr>
              <tr>
                <td colSpan="5"></td>
                <td className={styles.rightLabel}>
                  Giảm giá
                  <input
                    className={styles.discountInput}
                    type="number"
                    min="0"
                    value={invoice.discount}
                    onChange={(e) =>
                      setInvoice({ ...invoice, discount: e.target.value })
                    }
                  />
                </td>
                <td className={styles.right}>- {currency(discount)}</td>
                <td />
              </tr>
              <tr className={styles.totalRow}>
                <td colSpan="5"></td>
                <td className={styles.rightLabel}>Tổng cộng</td>
                <td className={styles.right}>{currency(total)}</td>
                <td />
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.grid2}>
          <label className={styles.field}>
            Phương thức thanh toán
            <select
              value={invoice.paymentMethod}
              onChange={(e) =>
                setInvoice({ ...invoice, paymentMethod: e.target.value })
              }
            >
              <option>Tiền mặt</option>
              <option>Chuyển khoản</option>
              <option>Thẻ</option>
              <option>Bảo hiểm</option>
            </select>
          </label>
          <label className={styles.fieldWide}>
            Ghi chú
            <textarea
              rows={3}
              placeholder="Ghi chú thêm cho bệnh nhân / nhà thuốc..."
              value={invoice.note}
              onChange={(e) => setInvoice({ ...invoice, note: e.target.value })}
            />
          </label>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.signRow}>
          <div className={styles.signBox}>
            <div className={styles.signTitle}>Người lập hóa đơn</div>
            <div className={styles.signHint}>(Ký, ghi rõ họ tên)</div>
          </div>
          <div className={styles.signBox}>
            <div className={styles.signTitle}>Bác sĩ kê đơn</div>
            <input
              className={styles.signInput}
              value={invoice.doctor}
              onChange={(e) =>
                setInvoice({ ...invoice, doctor: e.target.value })
              }
            />
            <div className={styles.signHint}>(Ký, ghi rõ họ tên)</div>
          </div>
          <div className={styles.signBox}>
            <div className={styles.signTitle}>Bệnh nhân</div>
            <div className={styles.signHint}>(Ký, ghi rõ họ tên)</div>
          </div>
        </div>
      </section>

      <div className={styles.actions}>
        <button className={styles.primaryBtn} onClick={handlePrint}>
          In hóa đơn
        </button>
        <button
          className={styles.secondaryBtn}
          onClick={() => alert("Đã lưu (demo)!")}
        >
          Lưu
        </button>
      </div>
    </div>
  );
};

export default PrescriptionInvoice;
