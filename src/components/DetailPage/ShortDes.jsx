import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import usePrice from "../../hooks/usePrice";

import { isAniCartAction, userAction } from "../..//store/Redux";
import { cartAction } from "../../store/Redux";

function ShortDes(props) {
  const curUser = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();

  const product = props.product;
  //sua prices
  let price = usePrice(product.price);
  //quantity
  const [quantity, setQuantity] = useState(0);
  //input quantity
  const IpQuantity = useRef(null);
  //imgHandler
  function imgHandler(imgNumber) {
    return (
      <img
        src={product[imgNumber]}
        alt={product.name}
        width="100%"
        className="pb-2"
      />
    );
  }
  //decrease quanlity
  function decreaseQuan() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }
  //increase quanlity
  function increaseQuan() {
    setQuantity(quantity - 1 + 2);
  }
  //enter quantity
  function onChangeHandle() {
    setQuantity(IpQuantity.current.value);
  }

  //add to cart
  function addToCartHandle(e) {
    e.preventDefault();
    product.quantity = quantity;
    if (curUser) {
      dispatch(userAction.addCart(product));
      dispatch(isAniCartAction.toggle())
    } else {
      dispatch(cartAction.add(product));
      dispatch(isAniCartAction.toggle())
    }
  }

  return (
    <div className="detailpage-wrapper my-5">
      <div>
        {imgHandler("img1")}
        {imgHandler("img2")}
        {imgHandler("img3")}
        {imgHandler("img4")}
      </div>
      <div className="ms-2">{imgHandler("img1")}</div>
      <div className="mt-4 me-4 ms-3">
        <h3>
          <i>{product.name}</i>
        </h3>
        <p className="my-3" style={{ opacity: 0.7, fontSize: "1.3rem" }}>
          <i>{price} VND</i>
        </p>
        <p style={{ fontSize: "0.95rem" }} className="opacity-50">
          <i>{product["short_desc"]}</i>
        </p>
        <p className="py-3">
          <span>CATEGORY:</span>
          <span className="opacity-50"> {product.category}</span>
        </p>
        <form style={{ fontSize: "0.9rem" }}>
          <div className="border">
            <label
              onClick={() => {
                IpQuantity.current.focus();
              }}
              className="opacity-50 cursor ps-2 py-1 pe-5 "
            >
              QUANTITY
            </label>
            <i
              style={{ fontSize: "1.2rem" }}
              className="fa fa-caret-left p-2 cursor"
              onClick={decreaseQuan}
            ></i>
            <input
              ref={IpQuantity}
              onChange={onChangeHandle}
              value={quantity}
              className="text-center"
              type="number"
              name="quantity"
            />
            <i
              style={{ fontSize: "1.2rem" }}
              className="fa fa-caret-right cursor p-2 pe-3"
              onClick={increaseQuan}
            ></i>
          </div>
          <button
            onClick={addToCartHandle}
            className="bg-dark text-white py-1 px-3 "
          >
            Add to card
          </button>
        </form>
      </div>
    </div>
  );
}

export default ShortDes;
