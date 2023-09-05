import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: '' };
  }
  return state;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;


//tòa bộ code trong
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // //ref
  // const ipName = useRef();
  // const ipEmail = useRef();
  // const ipPw = useRef();
  // const ipPhone = useRef();

  // //users
  // const users = useSelector((state) => state.user.users);
  // console.log(users);
  // //input
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [phone, setPhone] = useState("");
  // //errMess
  // const [errName, setErrName] = useState(false);
  // const [errEmail, setErrEmail] = useState("");
  // const [errPassword, setErrPassword] = useState(false);
  // const [errPhone, setErrPhone] = useState(false);
  // //validate
  // function validate() {
  //   let isValid = true;
  //   //valid name
  //   if (!name) {
  //     setErrName(true);
  //     isValid = false;
  //   }
  //   //valid email
  //   const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //   if (email.match(regex)) {
  //     setErrEmail("");
  //     //xem có trùng email không
  //     const isUser = users.find((user) => user.email === email);
  //     if (isUser) {
  //       setErrEmail("Email already exists!");
  //       isValid = false;
  //     }
  //   } else {
  //     setErrEmail("Enter your email!");
  //     isValid = false;
  //   }
  //   //valid passwprd
  //   if (password.length < 8) {
  //     setErrPassword(true);
  //     isValid = false;
  //   }
  //   //validphone
  //   const regexphone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  //   if (phone.match(regexphone)) {
  //     setErrPhone(false);
  //   } else {
  //     setErrPhone(true);
  //     isValid = false;
  //   }
  //   return isValid;
  // }

  // //submit handle
  // function submitHandle() {
  //   if (validate()) {
  //     dispatch(
  //       userAction.addUser({
  //         name,
  //         email,
  //         password,
  //         phone,
  //         cart: [],
  //       })
  //     );
  //   }
  // }