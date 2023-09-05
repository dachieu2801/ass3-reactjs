import { useContext, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { popUpAction } from "../../store/Redux";

import ProductContext from "../../store/ProductStore";

import Item from "./Item";
import PopUp from "./PopUp";

function ListItem() {
  const dispatch = useDispatch();
  //lấy data từ context
  const productData = useContext(ProductContext);
  //show  PopUp
  const showPopUp = useSelector((state) => state.counter.showPopUp);
  //animation
  const animation = useSelector((state) => state.counter.animation);
  //data hiển thị PopUp
  const [product, setProduct] = useState();
  //tat popup  moi khi vao lai

  //lấy data product đc click
  const PopUpHandle = (product) => {
    dispatch(popUpAction.trueAnimation());
    setProduct(product);
    dispatch(popUpAction.trueShow());
  };
  //closePopup
  const closePopUpHandle = () => {
    dispatch(popUpAction.falseAnimation());
    setTimeout(() => dispatch(popUpAction.falseShow()), 100);
  };

  return (
    <div className="mt-5 mb-5 ">
      <p className="opacity-50">MADE THE HARD WAY</p>
      <h2 className="mb-3">TOP TRENDING PRODUCTS</h2>
      <div className="listitem-wrapper">
        {productData.map((product, i) => (
          <div
            className="item-wrapper"
            key={i}
            onClick={() => {
              PopUpHandle(product);
            }}
          >
            <Item product={product} />
          </div>
        ))}
      </div>
      {showPopUp && (
        <>
          <div
            style={{
              width: "55rem",
              animation: `${
                animation ? "popupOpen 0.08s" : "popupClose 0.12s"
              } `,
            }}
            className="popup  position-fixed"
          >
            <PopUp product={product} />
          </div>
          <div onClick={closePopUpHandle} className="overlay"></div>
        </>
      )}
    </div>
  );
}

export default ListItem;
