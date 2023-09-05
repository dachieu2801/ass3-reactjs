import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { shopAction } from "../../store/Redux";

function Banner() {
  const dispatch = useDispatch();

  return (
    <div className="position-relative">
      <img src="./images/banner1.jpg" alt="" height="auto" width="100%" />
      <div
        className="position-absolute top-50 start-0 translate-middle-y ps-5"
        style={{ lineHeight: 1.2 }}
      >
        <p style={{ fontSize: "0.9rem", opacity: 0.6 }}>
          <i>NEW INSPIRATION 2020</i>
        </p>
        <p className="mt-3  mb-3" style={{ fontSize: "2rem" }}>
          <i>
            20% OFF ON NEW <br />
            SEASON
          </i>
        </p>
        <NavLink
          style={{ fontSize: "1rem" }}
          className="btn text-white bg-dark"
          onClick={() => {
            dispatch(shopAction.setCategory("all"));
            window.scrollTo({
              top: 220,
            });
          }}
          to="/shop"
        >
          <i>Browse collections</i>
        </NavLink>
      </div>
    </div>
  );
}

export default Banner;
