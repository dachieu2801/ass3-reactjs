import { useDispatch, useSelector } from "react-redux";

import usePrice from "../../hooks/usePrice";

import { userAction } from "../../store/Redux";
import { cartAction } from "../../store/Redux";

function CartItem(props) {
  const dispatch = useDispatch();

  const curUser = useSelector((state) => state.user.currentUser);
  console.log(curUser);
  const product = props.product;
  const price = usePrice(product.price);
  const priceMore = usePrice(product.price, product.quantity);

  //thực hiện  quantity -= 1
  function minusHandle() {
    if (curUser) {
      dispatch(userAction.minus(product));
    } else {
      dispatch(cartAction.minus(product));
    }
  }
  //thực hiện  quantity += 1
  function plusHandle() {
    if (curUser) {
      dispatch(userAction.plus(product));
    } else {
      dispatch(cartAction.plus(product));
    }
  }
  //remove product
  function removeHandle(e) {
    if (curUser) {
      dispatch(userAction.remove(product["_id"]["$oid"]));
    } else {
      dispatch(cartAction.remove(product["_id"]["$oid"]));
    }
  }
  return (
    <div className="tbody text-center pt-4">
      <img className=" m-auto" src={product.img1} alt="" width="100%" />
      <h5 style={{ fontSize: "1rem" }} className=" m-auto px-4">
        {product.name}
      </h5>
      <p className=" m-auto opacity-50">
        {price}
        <br />
        VND
      </p>
      <p className=" m-auto ">
        <i
          onClick={minusHandle}
          style={{ fontSize: "1rem" }}
          className="fa fa-caret-left cursor p-2"
        ></i>
        {product.quantity}
        <i
          onClick={plusHandle}
          style={{ fontSize: "1rem" }}
          className="fa fa-caret-right cursor p-2"
        ></i>
      </p>
      <p className=" m-auto opacity-50">
        {priceMore}
        <br />
        VND
      </p>
      <p
        onClick={removeHandle}
        className=" m-auto opacity-50"
        style={{ cursor: "pointer" }}
      >
        <i className="fa fa-trash-o"></i>
      </p>
    </div>
  );
}

export default CartItem;
