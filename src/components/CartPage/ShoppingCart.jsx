import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";

function ShoppingCart() {
  const navigate = useNavigate();
  //xem đang ở chế độ nào để lấy data
  const guestMode = useSelector((state) => state.cart.products);
  const userMode = useSelector((state) => state.user.currentUser);
  const products = userMode ? userMode.cart : guestMode;

  // console.log(products);

  return (
    <div>
      <div style={{ fontSize: "0.9rem" }}>
        <div className="thead bg-light py-2 text-center">
          <h6 scope="col">IMAGE</h6>
          <h6 scope="col">PRODUCT</h6>
          <h6 scope="col">PRICE</h6>
          <h6 scope="col">QUANTITY</h6>
          <h6 scope="col">TOTAL</h6>
          <h6 scope="col">REMOVE</h6>
        </div>
        {products.map((product, i) => (
          <CartItem key={i} product={product} />
        ))}
        <div className="p-3 d-flex justify-content-between bg-light my-5">
          <p
            className="m-auto ms-1 opacity-75 cursor"
            onClick={() => {
              navigate("/shop");
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
          >
            <i className="fa fa-arrow-left me-2 "></i>
            Continue shopping
          </p>
          <p
            className="border border-dark p-2 me-1 opacity-75 cursor"
            onClick={() => {
              navigate("/checkout");
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
          >
            Proceed to checkout
            <i className="fa fa-arrow-right ms-2 "></i>
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ShoppingCart;
