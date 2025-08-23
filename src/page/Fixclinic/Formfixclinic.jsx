import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import clinicData from '../../data/Browseclinic.json';
import { useForm } from "react-hook-form";
import { LiaSave } from "react-icons/lia";
import { BiArrowBack } from "react-icons/bi";
import './Formfixclinic.css';

function Formfixclinic() {
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const [manager, setManager] = useState(location.state?.manager || null);
    const [loading, setLoading] = useState(false);

    const {register, handleSubmit, setValue } = useForm();
    useEffect(() => {
        if (!manager) {
            setLoading(true);
            const found = clinicData.find(c => String(c.id) === String(id));
            if (found) {
                setManager(found);
            }
            setLoading(false);
        }
    }, [manager, id]);

    useEffect(() => {
        if(manager) {
            Object.entries(manager).forEach(([key, value]) => {
                setValue(key, value);
            });
        }
    }, [manager, setValue]);

    if (loading) return <div>Đang load...</div>;

    const onSubmit = (data) => {
        console.log("Dữ liệu sau khi sửa:", data);
        alert("Cập nhật thành công!");
        navigate(-1);
    };

    if (!manager) {
        return (
            <div>Không có dữ liệu phòng khám.<button onClick={() => navigate(-1)}><BiArrowBack />Quay lại</button></div>
        );
    }

    const Input = ({label, register, required, type = "text", defaultValue, readOnly }) => (
        <div className="groupform">
            <label className="grouptext">{label}</label>
            <input className="formtext" 
            type={type}
            defaultValue={defaultValue}
            readOnly={readOnly}
            {...register(label, {required})} />
        </div>
    );
    const Select = React.forwardRef(({onChange, name, label, defaultValue}, ref) => (
        <div className="groupform">
            <label className="grouptext">{label}</label>
            <select className="formtext" name={name} ref={ref} onChange={onChange} defaultValue={defaultValue}>
                <option value="Chuyên khoa Nhi - Tư nhân">Chuyên khoa Nhi - Tư nhân</option>
                <option value="Chuyên khoa TMH - Tư nhân">Chuyên khoa TMH - Tư nhân</option>
                <option value="Chuyên khoa RHM - Tư nhân">Chuyên khoa RHM - Tư nhân</option>
                <option value="Chuyên khoa Sản - Tư nhân">Chuyên khoa Sản - Tư nhân</option>
            </select>
        </div>
    ));
    return (
        <form className="groupcreate" onSubmit={handleSubmit(onSubmit)}>
            <div>Thông tin chung</div>
            <Input label="*ID phòng khám:" register={register} required defaultValue={manager.id} readOnly />
            <Input label="*Tên phòng khám:" register={register} required defaultValue={manager.name} />
            <Select label="*Loại hình phòng khám:"{...register("type")} defaultValue={manager.type} />
            <Input label="*Ngày thành lập:" register={register} required defaultValue={manager.dateofestablish} type="date" />
            <Input label="*Số điện thoại:" register={register} required defaultValue={manager.phone} type="tel"/>
            <Input label="*Email:" register={register} required defaultValue={manager.email} type="email"/>
            <Input label="*Tỉnh/Thành phố trực thuộc trung ương:" register={register} required defaultValue={manager.conscious} />
            <Input label="*Xã/Phường:" register={register} required defaultValue={manager.commune} />
            <Input label="*Địa chỉ:" register={register} required defaultValue={manager.address} />
            <Input label="Giờ hoạt động:" register={register} defaultValue={manager.hoursofopera} type="datetime" />
            <Input label="Mô tả:" register={register} defaultValue={manager.describe} />
            <div>Thông tin về giấy phép hoạt động</div>
            <Input label="*Số giấy phép:" register={register} required defaultValue={manager.licensenumber} />
            <Input label="*Ngày cấp:" register={register} required defaultValue={manager.dateofissue} type="date"/>
            <Input label="*Nơi cấp:" register={register} required defaultValue={manager.placeofissue} />
            <Input label="*Tên người đại diện:" register={register} required defaultValue={manager.representname} />
            <Input label="*Số điện thoại cá nhân:" register={register} required defaultValue={manager.personphone} type="tel" />
            <Input label="*Tên tài khoản/Email quản trị:" register={register} required defaultValue={manager.accountname} type="email" />
            <div className="groupform">
                <button className="buttonsubmit" onClick={() => navigate(-1)}><BiArrowBack />Quay lại</button>
                <button className="buttonsubmit" type="submit"><LiaSave size={20} />Cập nhật</button>
            </div>
        </form>
    );
}
export {Formfixclinic};