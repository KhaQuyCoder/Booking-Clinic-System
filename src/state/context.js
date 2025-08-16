import { useRef, useState } from "react";
import { createContext } from "react";

export const State = createContext();

const Context = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [resetPage, setResetPage] = useState(true);
  const [valueText, setValueText] = useState("");
  const [searchSpecialty, setSearchSpecialty] = useState("");
  const [avatar, setAvatar] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYeMDKbB1z_3RjaG4elUPjtTa-zd9OFxSpaA&s"
  );
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
      }}
    >
      {children}
    </State.Provider>
  );
};

export default Context;
