import { useContext, useEffect, useCallback } from "react";
import "./Opacity.css";
import { State } from "../../state/context";

const Opacity = () => {
  const { valueText, setValueText } = useContext(State);

  const handleClickOpacity = useCallback(() => {
    setValueText("");
  }, [setValueText]);

  useEffect(() => {
    const scroll = document.body.style.overflow;
    document.body.style.overflow = valueText ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = scroll;
    };
  }, [valueText]);

  return <div className="container-opacity" onClick={handleClickOpacity}></div>;
};

export default Opacity;
