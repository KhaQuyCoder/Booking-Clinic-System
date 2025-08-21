import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import packagesData from '../../../data/Packagelist.json';
import { BiArrowBack } from "react-icons/bi";
import { LiaSave } from "react-icons/lia";

function Formfixpackage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const [packages, setPackages] = useState(location.state?.packages || null);
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, setValue } = useForm();
    useEffect(() => {
        if (!packages) {
            setLoading(true);
            const found = packagesData.find(c => String(c.id) === String(id));
            if (found) {
                setPackages(found);
            }
            setLoading(false);
        }
    }, [packages, id]);

    useEffect(() => {
        if (packages) {
            Object.entries(packages).forEach(([key, value]) => {
                setValue(key, value);
            })
        }
    }, [packages, setValue]);

    if (loading) return <div>Đang load...</div>;

    const onSubmit = (data) => {
        console.log("Dữ liệu sau khi sửa:", data);
        alert("Cập nhật thành công!");
        navigate(-1);
    }

    if (!packages) {
        return (
            <div>Không tìm thấy gói dịch vụ.<button onClick={() => navigate(-1)}><BiArrowBack />Quay lại</button></div>
        );
    }

    const Input = ({ label, register, required, type = "text", defaultValue, readOnly }) => (
        <div className="formgroup">
            <label className="infor">{label}</label>
            <input className="infortext"
                type={type}
                defaultValue={defaultValue}
                readOnly={readOnly}
                {...register(label, { required })} />
        </div>
    );
    const Select = React.forwardRef(({ onChange, name, label, defaultValue }, ref) => (
        <div className="formgroup">
            <label className="infor">{label}</label>
            <select className="infortext" name={name} ref={ref} onChange={onChange} defaultValue={defaultValue}>
                <option value="Tháng">Tháng</option>
                <option value="Quý">Quý</option>
                <option value="Năm">Năm</option>
            </select>
        </div>
    ));
    return (
        <form className="formcreate" onSubmit={handleSubmit(onSubmit)}>
            <div>Thông tin chỉnh sửa</div>
            <Input label="*Tài khoản tạo:" register={register} required defaultValue={packages.idname} readOnly />
            <Input label="*Ngày tạo:" register={register} required defaultValue={packages.date} type="date" />
            <Input label="*ID gói đăng ký:" register={register} required defaultValue={packages.id} readOnly />
            <Input label="*Tên gói đăng ký:" register={register} required defaultValue={packages.name} />
            <Select label="*Loại chu kỳ:" {...register("termtype")} defaultValue={packages.termtype} />
            <Input label="*Số ngày sử dụng:" register={register} required defaultValue={packages.effectiveday} />
            <Input label="*Giá:" register={register} required defaultValue={packages.price} />
            <Input label="*Đơn vị tiền tệ:" register={register} required defaultValue={packages.currencytype} readOnly />
            <Input label="*Mô tả ngắn:" register={register} defaultValue={packages.describe} />
            <div className="formgroup">
                <button className="inforsubmit" onClick={() => navigate(-1)}><BiArrowBack />Quay lại</button>
                <button className="inforsubmit" type="submit"><LiaSave size={20} />Cập nhật</button>
            </div>
        </form>
    );
}
export {Formfixpackage};