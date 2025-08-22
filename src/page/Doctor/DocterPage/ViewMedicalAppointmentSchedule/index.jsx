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
} from "@mui/material";
import { useParams } from "react-router-dom";
import ViewMAS from "../../../../data/ViewMedicalAppointmentSchedule.json";
import "./ViewMedicalAppointmentSchedule.css";

const STATUS_COLOR = {
    "Đã xác nhận": "#1FE043", // xanh lá
    "Đang chờ": "#F7DC0C", // vàng
    "Từ chối": "#E01F22", // đỏ
};

const ViewMedicalAppointmentSchedule = () => {
    const { id } = useParams();
    const records = ViewMAS.filter((r) => r.patientId === id);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => setPage(newPage);
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
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
                            <TableCell>Triệu chứng</TableCell>
                            <TableCell>Trạng thái</TableCell>
                            <TableCell>Link khám</TableCell>
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
                                    <TableCell>{r.symptom}</TableCell>
                                    <TableCell>
                                        <span
                                            className="status-chip"
                                            style={{
                                                backgroundColor: STATUS_COLOR[r.status] || "#6c757d",
                                            }}
                                        >
                                            {r.status}
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        <span className="link-exam">[🔘Bắt đầu khám]</span>
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

export default ViewMedicalAppointmentSchedule;
