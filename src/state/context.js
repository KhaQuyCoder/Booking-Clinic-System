import { useRef, useState } from "react";
import { createContext } from "react";
import imgae from "../assets/svg/OIP (2).webp";
export const State = createContext();

const Context = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [resetPage, setResetPage] = useState(true);
  const [valueText, setValueText] = useState("");
  const [searchSpecialty, setSearchSpecialty] = useState("");
  const [roleLocal, setRole] = useState("");

  const [phone, setPhone] = useState("0944364324");
  const [avatar, setAvatar] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYeMDKbB1z_3RjaG4elUPjtTa-zd9OFxSpaA&s"
  );
  const [image, setImage] = useState(imgae);
  const messageRef = useRef();
  return (
    <State.Provider
      value={{
        loading,
        setLoading,
        resetPage,
        setResetPage,
        valueText,
        setValueText,
        searchSpecialty,
        setSearchSpecialty,
        avatar,
        setAvatar,
        messageRef,
        phone,
        setPhone,
        roleLocal,
        setRole,
        image,
        setImage,
      }}
    >
      {children}
    </State.Provider>
  );
};

export default Context;
