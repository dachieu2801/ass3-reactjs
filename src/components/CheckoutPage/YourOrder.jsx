import { useSelector } from "react-redux";

import usePrice from "../../hooks/usePrice";
import ItemOrder from "./ItemOrder";
function YourOrder() {
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
        <h5 className="py-3">YOUR ORDER</h5>
        {products.map((product, i) => (
          <ItemOrder key={i} product={product} />
        ))}
        <div className="d-flex justify-content-between py-2">
          <h6 className="m-auto ms-1">TOTAL</h6>
          <p style={{ fontSize: "1.1rem" }}>{total} VND</p>
        </div>
      </div>
    </div>
  );
}

export default YourOrder;
