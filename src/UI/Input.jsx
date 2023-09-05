import { useRef, useState } from "react";

function Input(props) {
  const [errMess, setErrMess] = useState(null);

  const input = useRef();
  const type = props.type;
  const setValue = props.setValue;
  const placeholder = props.placeholder;

  // validate imput
  function validateHandle() {
    if (type === "text") {
      let err = input.current.value.trim() ? "" : "Enter your full name";
      setErrMess(err);
    }
    if (type === "email") {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const err = input.current.value.trim().match(regex)
        ? ""
        : "Enter your email";
      setErrMess(err);
    }
    if (type === "number") {
      const regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
      const err = input.current.value.trim().match(regex)
        ? ""
        : "Enter your phone number ";
      setErrMess(err);
    }
    if (type === "password") {
      let err =
        input.current.value.trim().length < 8
          ? "Enter your password of at least 8 characters"
          : "";
      setErrMess(err);
    }
  }

  return (
    <div>
      <input
        ref={input}
        type={type}
        className="w-100 p-3"
        placeholder={placeholder}
        onChange={() => {
          setValue(input.current.value);
        }}
        onBlur={validateHandle}
        onFocus={() => {
          setErrMess("");
        }}
      />
      {errMess ? (
        <p className="text-danger text-start opacity-75 mb-2">{errMess}</p>
      ) : null}
    </div>
  );
}

export default Input;
