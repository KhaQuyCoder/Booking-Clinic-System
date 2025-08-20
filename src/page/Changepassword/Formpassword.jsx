import React, { useState } from "react";
import './Formpassword.css';

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

        if (name === "password" ) {
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

        setError((prev) => ({...prev, [name]: error }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        validatePassword("current", current);
        validatePassword("password", password);
        validatePassword("confirm", confirm);

        if (!error.current && !error.password && !error.confirm && current && password && confirm) {
            console.log("Đổi mật khẩu thành công.");
            alert("Đổi mật khẩu thành công!");
            setCurrent("");
            setPassword("");
            setConfirm("");
            setLogoutOther(true);
        }
    }
    return (
        <form onSubmit={handleSubmit} className="formpassword">
            <div className="form-group">
                <input type="password" placeholder="Mật khẩu hiện tại" value={current} onChange={(e) => setCurrent(e.target.value)} />
                {error.current && <span className="error">{error.current}</span>}
            </div>

            <div className="form-group">
                <input type="password" placeholder="Mật khẩu mới" value={password} onChange={(e) => setPassword(e.target.value)} />
                {error.password && <span className="error">{error.password}</span>}
            </div>

            <div className="form-group">
                <input type="password" placeholder="Nhập lại mật khẩu mới" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
                {error.confirm && <span className="error">{error.confirm}</span>}
            </div>

            <div className="checkbox-group">
                <input type="checkbox" id="logoutOther" checked={logoutOther} onChange={(e) => setLogoutOther(!logoutOther)} />
                <label htmlFor="logoutOther">Đăng xuất các thiết bị khác. Hãy chọn mục này nếu người khác từng dùn tài khoản của bạn.</label>
            </div>

            <button type="submit" className="submitpass">Đổi mật khẩu</button>
        </form>
    );
}
export { Formpassword };