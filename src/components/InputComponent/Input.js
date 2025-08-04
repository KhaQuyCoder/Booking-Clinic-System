import "./Input.css";
const Input = ({
  name,
  handelTransitionText,
  labelRef,
  refInput,
  handelBLurText,
  message,
  checkMessage,
}) => {
  return (
    <div className="wrapper-input-cpm">
      <label>
        <input
          className="input-cpm"
          onFocus={() => handelTransitionText(labelRef)}
          onBlur={() => handelBLurText(refInput, labelRef)}
          ref={refInput}
        />
        <span className="text-input-cpm" ref={labelRef}>
          {name}
        </span>
        {checkMessage && <div className="message-question">{message}</div>}
      </label>
    </div>
  );
};

export default Input;
