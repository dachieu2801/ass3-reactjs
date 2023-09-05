import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userAction } from "../store/Redux";
import Card from "../UI/Card";

function NavBar() {
  const isAniCart = useSelector((state) => state.isAniCart.isAni);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const curUser = useSelector((state) => state.user.currentUser);
  function logOutHandle() {
    let isConfirm = window.confirm("Are you sure you want to log out");
    if (isConfirm) {
      dispatch(userAction.updateUsers(curUser));
      dispatch(userAction.removeCurUser());
      navigate("/login");
    }
  }

  return (
    <Card>
      <div className="d-flex justify-content-between fs-6 p-2">
        <div>
          <NavLink className="text-decoration-none text-dark " to={"/"}>
            Home
          </NavLink>
          <NavLink
            className="text-decoration-none text-dark ms-3 "
            to={"/shop"}
          >
            Shop
          </NavLink>
        </div>
        <p style={{ fontSize: "1.1rem" }}>BOUTIQUE</p>
        <div className="d-flex">
          <NavLink className=" text-decoration-none text-dark " to={"/cart"}>
            <i
              className={`fa fa-shopping-cart me-1 opacity-50 ${
                isAniCart ? "isAniCart" : "aniCart"
              }`}
            ></i>
            Cart
          </NavLink>
          {!curUser && (
            <NavLink
              className="text-decoration-none text-dark ms-3  me-2"
              to={"/login"}
            >
              <i className="fa fa-user me-1 opacity-50 " aria-hidden="true"></i>
              Login
            </NavLink>
          )}
          {curUser && (
            <div className="text-dark ms-3">
              <i className="fa fa-user me-1 opacity-50 " aria-hidden="true"></i>
              {curUser.name}
              <span className="cursor ms-2" onClick={logOutHandle}>
                ( Logout )
              </span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}

export default NavBar;
