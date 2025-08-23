import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  Box,
  Typography,
  /*Alert*/
} from "@mui/material";

function Formpassword() {
  const [current, setCurrent] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [logoutOther, setLogoutOther] = useState(true);
  const [error, setError] = useState({});

  const validatePassword = (name, value) => {
    let error = "";

    if (name === "current" && !value) {
      error = "Vui lòng nhập mật khẩu hiện tại.";
    }

    if (name === "password") {
      if (!value) {
        error = "Vui lòng nhập mật khẩu mới.";
      } else if (value.length < 8) {
        error = "Mật khẩu mới phải có ít nhất 8 ký tự.";
      }
    }

    if (name === "confirm") {
      if (!value) {
        error = "Vui lòng nhập lại mật khẩu mới.";
      } else if (value !== password) {
        error = "Mật khẩu xác nhận không khớp.";
      }
    }

    setError((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validatePassword("current", current);
    validatePassword("password", password);
    validatePassword("confirm", confirm);

    if (
      !error.current &&
      !error.password &&
      !error.confirm &&
      current &&
      password &&
      confirm
    ) {
      console.log("Đổi mật khẩu thành công.");
      alert("Đổi mật khẩu thành công!");
      setCurrent("");
      setPassword("");
      setConfirm("");
      setLogoutOther(true);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: "auto",
        p: 3,
        border: "1px solid #ddd",
        borderRadius: 2,
        boxShadow: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h6" textAlign="center">
        Đổi mật khẩu
      </Typography>

      <TextField
        type="password"
        label="Mật khẩu hiện tại"
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
        onBlur={() => validatePassword("current", current)}
        error={Boolean(error.current)}
        helperText={error.current}
        fullWidth
      />

      <TextField
        type="password"
        label="Mật khẩu mới"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={() => validatePassword("password", password)}
        error={Boolean(error.password)}
        helperText={error.password}
        fullWidth
      />

      <TextField
        type="password"
        label="Nhập lại mật khẩu mới"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        onBlur={() => validatePassword("confirm", confirm)}
        error={Boolean(error.confirm)}
        helperText={error.confirm}
        fullWidth
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={logoutOther}
            onChange={() => setLogoutOther(!logoutOther)}
          />
        }
        label="Đăng xuất các thiết bị khác. Hãy chọn mục này nếu người khác từng dùng tài khoản của bạn."
      />

      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Đổi mật khẩu
      </Button>
    </Box>
  );
}

export { Formpassword };
