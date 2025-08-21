import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TablePagination,
} from "@mui/material";
import patients from "../../../../data/Patient.json"; // import dữ liệu JSON
import "./PatientManagement.css";
import iconSearch from "../../../../assets/svg/magnifying-glass-solid-full.svg";
import iconEdit from "../../../../assets/svg/pen-to-square-solid-full.svg";
import iconView from "../../../../assets/svg/file-waveform-solid-full.svg";
import iconHistory from "../../../../assets/svg/id-badge-solid-full.svg";
import { useNavigate } from "react-router-dom";

const PatientTable = () => {
  // state phân trang
  const [page, setPage] = useState(0); // trang hiện tại
  const [rowsPerPage, setRowsPerPage] = useState(5); // số dòng/trang
  const navigate = useNavigate();
  // đổi trang
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // đổi số dòng hiển thị
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper
      className="patient-management-wrap"
      sx={{
        mt: 3,
        p: 2,
        boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
        borderRadius: "12px",
      }}
    >
      <h2>Danh sách bệnh nhân</h2>
      <TableContainer>
        <Table>
          {/* Tiêu đề bảng */}
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Mã BN</b>
              </TableCell>
              <TableCell>
                <b>Họ tên</b>
              </TableCell>
              <TableCell>
                <b>Giới tính</b>
              </TableCell>
              <TableCell>
                <b>Ngày sinh</b>
              </TableCell>
              <TableCell>
                <b>Số điện thoại</b>
              </TableCell>
              <TableCell align="center">
                <b>Thao tác</b>
              </TableCell>
            </TableRow>
          </TableHead>

          {/* Nội dung bảng */}
          <TableBody>
            {patients
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((p, index) => (
                <TableRow key={`${p.id}-${index}`} hover>
                  <TableCell>{p.id}</TableCell>
                  <TableCell>{p.name}</TableCell>
                  <TableCell>{p.gender}</TableCell>
                  <TableCell>{p.dob}</TableCell>
                  <TableCell>{p.phone}</TableCell>
                  <TableCell align="center" className="btn-action">
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{ mr: 1, height: "40px" }}
                      onClick={() => navigate(`/doctor/detail/${p.id}`)}
                    >
                      <img src={iconSearch} />
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{ mr: 1, height: "40px" }}
                      onClick={() => navigate(`/doctor/PatientEdit/${p.id}`)}
                    >
                      <img src={iconEdit} />
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{ mr: 1, height: "40px" }}
                      onClick={() => navigate(`/doctor/ViewMR/${p.id}`)}
                    >
                      <img src={iconView} />
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{ mr: 1, height: "40px" }}
                      onClick={() => navigate(`/doctor/MedicalHistory/${p.id}`)}
                    >
                      <img src={iconHistory} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Thanh phân trang */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={patients.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Số dòng/trang"
      />
    </Paper>
  );
};

export default PatientTable;
