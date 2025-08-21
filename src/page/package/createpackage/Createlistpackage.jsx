import React from "react";
import { LiaSave } from "react-icons/lia";
import styles from "./Createlistpackage.module.css";
import { useForm } from "react-hook-form";

function Createlistpackage() {
  const Input = ({
    label,
    register,
    required,
    type = "text",
    defaultValue,
    readOnly,
    placeholder,
  }) => (
    <div className={styles.formgroup}>
      <label className={styles.infor}>{label}</label>
      <input
        className={styles.infortext}
        type={type}
        defaultValue={defaultValue}
        readOnly={readOnly}
        placeholder={placeholder}
        {...register(label, { required })}
      />
    </div>
  );
  const Select = React.forwardRef(({ onChange, name, label }, ref) => (
    <div className={styles.formgroup}>
      <label className={styles.infor}>{label}</label>
      <select
        className={styles.infortext}
        name={name}
        ref={ref}
        onChange={onChange}
      >
        <option value="Tháng">Tháng</option>
        <option value="Quý">Quý</option>
        <option value="Năm">Năm</option>
      </select>
    </div>
  ));
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const newPackage = {
      id: data["*ID gói đăng ký:"],
      idname: data["*Tài khoản tạo:"],
      date: data["*Ngày tạo:"],
      name: data["*Tên gói đăng ký:"],
      termtype: data["*Loại chu kỳ:"],
      effectiveday: data["*Số ngày hiệu lực:"],
      price: data["*Giá:"],
      currencytype: data["*Đơn vị tiền tệ:"],
      describe: data["Mô tả ngắn:"],
    };
    let packages = JSON.parse(localStorage.getItem("packages")) || [];
    packages.push(newPackage);
    localStorage.setItem("packages", JSON.stringify(packages));
    alert("Tạo gói thành công");
  };
  return (
    <form className={styles.formcreate} onSubmit={handleSubmit(onSubmit)}>
      <div>Thông tin đăng ký gói</div>
      <Input
        label="*Tài khoản tạo:"
        register={register}
        required
        defaultValue="Quan Admin"
        readOnly
      />
      <Input label="*Ngày tạo:" register={register} required type="date" />
      <Input
        label="*ID gói đăng ký:"
        placeholder="VD: 2025N000"
        register={register}
        required
      />
      <Input
        label="*Tên gói đăng ký:"
        placeholder="nhập tên gói"
        register={register}
        required
      />
      <Select label="*Loại chu kỳ:" {...register("*Loại chu kỳ:")} />
      <Input
        label="*Số ngày sử dụng:"
        placeholder="nhập vào n*30 với n là số tháng"
        register={register}
        required
      />
      <Input label="*Giá:" register={register} required type="number" />
      <Input
        label="*Đơn vị tiền tệ:"
        register={register}
        required
        defaultValue="VNĐ"
        readOnly
      />
      <Input label="Mô tả ngắn:" register={register} />
      <div className={styles.formgroup}>
        <button type="submit" className={styles.inforsubmit}>
          <LiaSave size={20} />
          Tạo gói đăng ký
        </button>
      </div>
    </form>
  );
}
export { Createlistpackage };
