import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import Input from "../UI/Input";
import { userAction } from "../store/Redux";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ipEmail = useRef();
  const ipPw = useRef();

  // users
  const users = useSelector((state) => state.user.users);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isErr, setIsErr] = useState(false);
  const [errEmail, setErrEmail] = useState(false);

  let isvalid;
  //valid email
  function emailBlur() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.match(regex)) {
      setErrEmail(false);
      isvalid = true;
    } else {
      setErrEmail(true);
      isvalid = false;
    }
  }

  // valid va dang nhap
  function submitHandle() {
    emailBlur();
    if (isvalid) {
      const currentUser = users.find(
        (user) => user.email === email && user.password === password
      );
      if (currentUser) {
        dispatch(userAction.currentUser(currentUser));
        navigate("/");
      } else {
        setIsErr(true);
      }
    }
    // if()
  }

  return (
    <div className="login-wrapper fs-6">
      <div className="login-section bg-white text-center px-5">
        <h3 className=" py-5 opacity-75">Sign In</h3>
        {isErr && (
          <p className="text-danger text-start opacity-75 mb-2 ">
            Email or password is incorrect.
          </p>
        )}
        <input
          ref={ipEmail}
          type="text"
          className="w-100 p-3"
          placeholder="Email"
          onChange={() => {
            setEmail(ipEmail.current.value.trim());
          }}
          onBlur={emailBlur}
          onFocus={() => {
            setIsErr(false);
            setErrEmail(false);
          }}
        />
        {errEmail && (
          <p className="text-danger text-start opacity-75 mb-2">
            Enter an email
          </p>
        )}
        <input
          ref={ipPw}
          type="password"
          className="w-100 p-3"
          placeholder="Password"
          onChange={() => {
            setPassword(ipPw.current.value.trim());
          }}
          onFocus={() => {
            setIsErr(false);
          }}
        />

        <button
          className="w-100 p-3 mt-4 bg-dark text-white"
          onClick={submitHandle}
        >
          SIGN IN
        </button>
        <p className="opacity-50 py-5">
          Create an account?
          <span
            className="text-primary cursor "
            onClick={() => {
              navigate("/register");
              window.scrollTo({ top: 0 ,behavior: "instant"});
            }}
          >
            {" "}
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
