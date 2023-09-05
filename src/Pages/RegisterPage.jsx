import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import Input from "../UI/Input";
import { userAction } from "../store/Redux";

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //ref
  const ipName = useRef();
  const ipEmail = useRef();
  const ipPw = useRef();
  const ipPhone = useRef();

  //users
  const users = useSelector((state) => state.user.users);

  console.log(users);

  //input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  //errMess
  const [errName, setErrName] = useState(false);
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState(false);
  const [errPhone, setErrPhone] = useState(false);

  //validate when blur
  //name
  let isValid;

  function nameBlur() {
    if (!name) {
      setErrName(true);
      isValid = false;
    }
  }
  //email
  function emailBlur() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.match(regex)) {
      setErrEmail("");
      //xem có trùng email không
      const isUser = users.find((user) => user.email === email);
      if (isUser) {
        setErrEmail("Email already exists!");
        isValid = false;
      }
    } else {
      setErrEmail("Enter your email.");
      isValid = false;
    }
  }
  //pW
  function passwordBlur() {
    if (password.length < 8) {
      setErrPassword(true);
      isValid = false;
    }
  }

  //phone
  function phoneBlur() {
    const regexphone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    if (phone.match(regexphone)) {
      setErrPhone(false);
    } else {
      setErrPhone(true);
      isValid = false;
    }
  }

  // //validate to submit
  // function validate(e) {
  //   isValid = true;
  //   nameBlur();
  //   emailBlur();
  //   passwordBlur();
  //   phoneBlur();
  //   return isValid;
  // }

  //submit handle
  function submitHandle() {
    isValid = true;
    nameBlur();
    emailBlur();
    passwordBlur();
    phoneBlur();
    if (isValid) {
      dispatch(
        userAction.addUser({
          name,
          email,
          password,
          phone,
          cart: [],
        })
      );
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
    }
  }

  return (
    <div className="login-wrapper fs-6">
      <div className="login-section bg-white text-center px-5">
        <h3 className=" py-5 opacity-75">Sign Up</h3>
        {/* name */}

        <input
          ref={ipName}
          type="text"
          className="w-100 p-3"
          placeholder="Full Name"
          value={name}
          onChange={() => {
            setName(ipName.current.value.trim());
          }}
          onBlur={nameBlur}
          onFocus={() => {
            setErrName(false);
          }}
        />
        {errName && (
          <p className="text-danger text-start opacity-75 mb-2">
            Enter your full name
          </p>
        )}
        {/* Email */}
        <input
          ref={ipEmail}
          type="text"
          className="w-100 p-3"
          placeholder="Email"
          value={email}
          onChange={() => {
            setEmail(ipEmail.current.value.trim());
          }}
          onBlur={emailBlur}
          onFocus={() => {
            setErrEmail("");
          }}
        />
        {errEmail && (
          <p className="text-danger text-start opacity-75 mb-2">{errEmail}</p>
        )}

        {/* pw */}
        <input
          ref={ipPw}
          type="password"
          className="w-100 p-3"
          placeholder="Password"
          value={password}
          onChange={() => {
            setPassword(ipPw.current.value.trim());
          }}
          onBlur={passwordBlur}
          onFocus={() => {
            setErrPassword(false);
          }}
        />
        {errPassword && (
          <p className="text-danger text-start opacity-75 mb-2">
            Enter your password of at least 8 characters
          </p>
        )}

        {/* phone */}
        <input
          ref={ipPhone}
          type="number"
          className="w-100 p-3"
          placeholder="Phone"
          value={phone}
          onChange={() => {
            setPhone(ipPhone.current.value.trim());
          }}
          onBlur={phoneBlur}
          onFocus={() => {
            setErrPhone(false);
          }}
        />
        {errPhone && (
          <p className="text-danger text-start opacity-75 mb-2">
            Enter your phone
          </p>
        )}

        {/* submitButton */}
        <button
          className="w-100 p-3 mt-4 bg-dark text-white"
          onClick={submitHandle}
        >
          SIGN UP
        </button>
        <p className="opacity-50 py-5">
          Login?
          <span
            className="text-primary cursor "
            onClick={() => {
              navigate("/login");
              window.scrollTo({ top: 0 ,behavior: "instant"});
            }}
          >
            Click
          </span>
        </p>
      </div>
    </div>
  );
}
export default RegisterPage;
