import React, { useState } from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Select,
    MenuItem,
} from "@mui/material";
import { useParams } from "react-router-dom";
import ViewMAS from "../../../../data/AcceptMedicalAppointment.json";
import "./AcceptMedicalAppointment.css";
import VisibilityIcon from "@mui/icons-material/Visibility";   
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";  

const STATUS_COLOR = {
    "Đã xác nhận": "#1FE043", // xanh lá
    "Đang chờ": "#F7DC0C", // vàng
    "Từ chối": "#E01F22", // đỏ
};

const AcceptMedicalAppointment = () => {
    const { id } = useParams();
    const initialRecords = ViewMAS.filter((r) => r.patientId === id);

    // quản lý state thay vì chỉ đọc JSON
    const [records, setRecords] = useState(initialRecords);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => setPage(newPage);
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // đổi chuyên khoa
    const handleSpecialistChange = (index, newValue) => {
        const updated = [...records];
        updated[index].symptom = newValue;
        setRecords(updated);
    };

    // đổi trạng thái theo action
    const handleStatusChange = (index, newStatus) => {
        const updated = [...records];
        updated[index].status = newStatus;
        setRecords(updated);
    };

    return (
        <Paper
            sx={{
                p: 3,
                m: 2,
                borderRadius: 4,
                boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
                background: "#fff",
            }}
        >
            <h3 className="section-title">📅 Lịch Khám</h3>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Ngày khám</TableCell>
                            <TableCell>Giờ khám</TableCell>
                            <TableCell>Bệnh nhân</TableCell>
                            <TableCell>Chuyên khoa</TableCell>
                            <TableCell>Trạng thái</TableCell>
                            <TableCell>Hoạt động</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {records
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((r, idx) => (
                                <TableRow
                                    key={idx}
                                    hover
                                    sx={{ "&:hover": { backgroundColor: "#f9f9f9" } }}
                                >
                                    <TableCell>{r.examDate}</TableCell>
                                    <TableCell>{r.examTime}</TableCell>
                                    <TableCell>{r.patientName}</TableCell>
                                    
                                    {/* Chuyên khoa => dropdown */}
                                    <TableCell>
                                        <Select
                                            value={r.symptom}
                                            onChange={(e) =>
                                                handleSpecialistChange(
                                                    page * rowsPerPage + idx,
                                                    e.target.value
                                                )
                                            }
                                            size="small"
                                            sx={{ minWidth: 150 }}
                                        >
                                            <MenuItem value="Tim mạch">Tim mạch</MenuItem>
                                            <MenuItem value="Tai mũi họng">Tai mũi họng</MenuItem>
                                            <MenuItem value="Nội tiết">Nội tiết</MenuItem>
                                            <MenuItem value="Nhi khoa">Nhi khoa</MenuItem>
                                        </Select>
                                    </TableCell>

                                    {/* Trạng thái */}
                                    <TableCell>
                                        <span
                                            className="status-chip"
                                            style={{
                                                backgroundColor:
                                                    STATUS_COLOR[r.status] || "#6c757d",
                                            }}
                                        >
                                            {r.status}
                                        </span>
                                    </TableCell>

                                    {/* Hoạt động */}
                                    <TableCell>
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "10px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <VisibilityIcon
                                                sx={{ color: "#1976d2" }}
                                                onClick={() =>
                                                    handleStatusChange(
                                                        page * rowsPerPage + idx,
                                                        "Đang chờ"
                                                    )
                                                }
                                            />
                                            <CheckCircleIcon
                                                sx={{ color: "#1FE043" }}
                                                onClick={() =>
                                                    handleStatusChange(
                                                        page * rowsPerPage + idx,
                                                        "Đã xác nhận"
                                                    )
                                                }
                                            />
                                            <CancelIcon
                                                sx={{ color: "#E01F22" }}
                                                onClick={() =>
                                                    handleStatusChange(
                                                        page * rowsPerPage + idx,
                                                        "Từ chối"
                                                    )
                                                }
                                            />
                                        </div>
                                    </TableCell>
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

export default AcceptMedicalAppointment;
