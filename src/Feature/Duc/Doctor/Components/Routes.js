export const routes = [
  {
    path: '/doctor/manage-patients', // 🔹 Đường dẫn URL khi bấm vào menu
    label: 'Quản lý bệnh nhân',      // 🔹 Tên hiển thị trên Sidebar
    children: [                      // 🔹 Các mục con (submenu) hiển thị khi click mở rộng
      {
        path: '/doctor/manage-patients/info', // ➕ Mục con đầu tiên: Thông tin bệnh nhân
        label: 'Thông tin bệnh nhân',
      },
      {
        path: '/doctor/manage-patients/records', // ➕ Mục con thứ hai: Hồ sơ bệnh án
        label: 'Hồ sơ bệnh án',
      },
      {
        path: '/doctor/manage-patients/history', // ➕ Mục con thứ ba: Lịch sử khám
        label: 'Lịch sử khám',
      },
    ]
  },
  {
    path: '/doctor/appointments',   // 🔹 Mục chính tiếp theo
    label: 'Lịch khám',             // 🔹 Tên hiển thị trên Sidebar
  },
  {
    path: '/doctor/statistics',     // 🔹 Mục chính tiếp theo
    label: 'Thống kê',              // 🔹 Tên hiển thị
  },
  {
    path: '/doctor/profile',        // 🔹 Mục chính cuối cùng
    label: 'Thông tin cá nhân',     // 🔹 Dùng để cập nhật hồ sơ bác sĩ
  }
]