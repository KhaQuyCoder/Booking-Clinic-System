import React, { useState } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from "@mui/material";
import { useParams } from "react-router-dom";
import patients from "../../../../../data/detailPatient.json";
import MedicalRecords from "../../../../../data/medicalRecords.json";
import "./MedicalHistory.css";

const STATUS_COLOR = {
    "Đã xử lý": "#1FE043", // xanh
    "Tái khám": "#FBFF17",  // vàng
    "Đang theo dõi": "#EF0F0F", // đỏ
};

const MedicalHistory = () => {
    const { id } = useParams();
    const patient = patients.find(p => p.id === id);
    const records = MedicalRecords.filter(r => r.patientId === id);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => setPage(newPage);
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    if (!patient) return <p>Không tìm thấy bệnh nhân</p>;

    return (
        <Paper sx={{ p: 3, m: 2, borderRadius: 3, boxShadow: "0px 6px 20px rgba(0,0,0,0.2)" }}>
            {/* --- Thông tin bệnh nhân (inline layout) --- */}
            <h3 className="section-title">Thông tin bệnh nhân</h3>
            <div className="patient-info">
                {/* Cột trái 3/4 */}
                <div className="col-3-4 grid-2col">
                    {/* Cột con 1 */}
                    <div className="form-col1">
                        <div className="form-row-inline">
                            <label>Mã bệnh nhân:</label>
                            <input type="text" value={patient.id} disabled />
                        </div>
                        <div className="form-row-inline">
                            <label>Họ và tên:</label>
                            <input type="text" value={patient.name} disabled />
                        </div>
                    </div>

                    {/* Cột con 2 */}
                </div>
                <div className="form-col2">
                    <div className="form-row-inline">
                        <label>Giới tính:</label>
                        <div className="gender-box">
                            <label>
                                <input type="radio" checked={patient.gender === "Nam"} readOnly /> Nam
                            </label>
                            <label>
                                <input type="radio" checked={patient.gender === "Nữ"} readOnly /> Nữ
                            </label>
                        </div>
                    </div>
                    <div className="form-row-inline">
                        <label>Năm sinh:</label>
                        <input type="date" value={patient.dob} disabled />
                    </div>
                </div>
                {/* Cột phải 1/4: avatar */}
                <div className="col-1-4 avatar-col">
                    <img src={patient.avatar} alt="avatar" className="avatar-square" />
                </div>
            </div>

            {/* --- Lịch sử khám bệnh --- */}
            <h3 className="section-title">Lịch sử khám bệnh</h3>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Ngày khám</TableCell>
                            <TableCell>Bác sĩ khám</TableCell>
                            <TableCell>Chuyên khoa</TableCell>
                            <TableCell>Chuẩn đoán chính</TableCell>
                            <TableCell>Tình xử lý</TableCell>
                            <TableCell>Ghi chú</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {records.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((r, idx) => (
                            <TableRow key={idx} hover sx={{ "&:hover": { backgroundColor: "#f1f1f1" } }}>
                                <TableCell>{r.examDate}</TableCell>
                                <TableCell>{r.doctorName}</TableCell>
                                <TableCell>{r.specialty}</TableCell>
                                <TableCell>{r.finalDiagnosis}</TableCell>
                                <TableCell>
                                    <span
                                        className="status-chip"
                                        style={{ backgroundColor: STATUS_COLOR[r.status] || "#999" }}
                                    >
                                        {r.status}
                                    </span>
                                </TableCell>
                                <TableCell>{r.notes}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={records.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage="Số dòng/trang"
            />
        </Paper>
    );
};

export default MedicalHistory;
