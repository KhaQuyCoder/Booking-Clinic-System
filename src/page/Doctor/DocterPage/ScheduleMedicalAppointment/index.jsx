import React, { useState } from "react";
import TIME_SLOTS from './ScheduleData';
import './ScheduleAppointment.css';

const ScheduleAppointment = () => {
    const [selectedDate, setSelectedDate] = useState(null);// state luu ngay
    const [selectedSlots, setSelectedSlots] = useState([]);//state luu khung gio
    // xu ly khi nguoi dung chon hoac bo chon 1 khung gio
    const handleSlotToggle = (slot) => {
        setSelectedSlots((prev) =>
            prev.includes(slot)
                ? prev.filter((s) => s !== slot)
                : [...prev, slot]
        );
    };

    // xu ly khi nguoi dung bm nut "luu lich"
    const handleSave = () => {
        //kiem tra xe, da chon ngay va cos it nhat 1 slot chua
        if (!selectedDate || selectedSlots.length === 0) {
            alert('Vui long chon ngay va it nhat mot khung gio')
            return;
        }
        // gui du lieu (mock)
        console.log('luu lich lam viec:', {
            date: selectedDate,
            timeSlots: selectedSlots,
        });
        alert('luu lich thanh cong!');
    };
    //----------------JSX tra ve-----------------
    return (
        <div className="Schedule-container">
            <h2>Lập Lịch Khám</h2>

            {/*Chọn ngày làm việc */}
            <div className="form-group">
                <label>Chọn ngày làm việc:</label>
                <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                //Khi chọn ngày thì cập nhật selectedDate
                />
            </div>

            {/* chọn khung giờ khắm */}
            <div className="form-group">
                <label>Chọn khung giờ khám:</label>
                <div className="slots-container">
                    {TIME_SLOTS.map((slot) => (
                        <button
                            key={slot}
                            className={`slot-btn ${selectedSlots.includes(slot) ? 'selected' : ''}`}
                            //gắn class"selected" nếu slot đang được chọn
                            onClick={() => handleSlotToggle(slot)}
                        // khi bấm vào thì toggle slot
                        >
                            {slot}
                        </button>
                    ))}
                </div>
            </div>
            
            {/*nút lưu*/}
            <button className="save-btn" onClick = {handleSave}>
                Lưu lịch
            </button>
        </div>
    );
};
export default ScheduleAppointment;
