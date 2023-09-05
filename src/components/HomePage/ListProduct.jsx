import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { shopAction } from "../../store/Redux";

function ListProduct() {
  //có thẻ chuyển tràn
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function img(x, category) {
    return (
      <img
        onClick={() => {
          dispatch(shopAction.setCategory(category));
          navigate("/shop");
          window.scrollTo({ top: 220 });
        }}
        src={`./images/product_${x}.png`}
        alt=""
        width="100%"
        height="auto"
      />
    );
  }
  return (
    <>
      <div className="text-center mt-5 mb-4">
        <p style={{ opacity: "0.7" }}>CAREFULLY CREATED COLLECTIONS</p>
        <h4>BROWSE OUR CATEGORIES</h4>
      </div>
      <div className="ListProduct1">
        {img(1, "iphone")}
        {img(2, "macbook")}
      </div>
      <div className="ListProduct2">
        {img(3, "ipad")}
        {img(4, "watch")}
        {img(5, "airpod")}
      </div>
    </>
  );
}

export default ListProduct;
