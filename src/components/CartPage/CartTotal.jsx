import { useSelector } from "react-redux";

import usePrice from "../../hooks/usePrice";

function CartTotal() {
  //xem đang ở chế độ nào để lấy data
  const guestMode = useSelector((state) => state.cart.products);
  const userMode = useSelector((state) => state.user.currentUser);
  const products = userMode ? userMode.cart : guestMode;
  let prices = 0;
  if (products.length > 0) {
    products.forEach((product) => {
      prices += Number(product.price) * product.quantity;
    });
  }
  let total = usePrice(prices);
  return (
    <div>
      <div className="bg-light p-4 pb-5 mb-4" style={{ fontSize: "0.9rem" }}>
        <h5 className="py-3">CART TOTAL</h5>
        <div className="d-flex justify-content-between border-bottom py-2">
          <h6>SUBTOTAL</h6>
          <p className="opacity-50">{total} VND</p>
        </div>
        <div className="d-flex justify-content-between py-2">
          <h6 className="m-auto ms-1">TOTAL</h6>
          <p style={{ fontSize: "1.1rem" }}>{total} VND</p>
        </div>
        <input
          className="w-100 ps-3 py-1 mt-3"
          type="text"
          placeholder="Enter your coupon"
        />
        <button className="text-center w-100 bg-dark text-white ">
          <i className="fa fa-gift me-2 py-2"></i>
          Apply coupon
        </button>
      </div>
    </div>
  );
}

export default CartTotal;
