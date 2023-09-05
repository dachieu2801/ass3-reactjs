import { useRef, useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductContext from "../../store/ProductStore";
import { shopAction } from "../../store/Redux";

import ShopProductList from "./ShopProductList";

function FindProduct() {
  const dispatch = useDispatch();
  const keyW = useRef();

  //data product từ api
  const productData = useContext(ProductContext);

  //product UI
  const [products, setProduct] = useState(productData);
  //giup kich hoat animation khi thay doi category
  const [anima, setAnimation] = useState(true);

  //category from  store
  const category = useSelector((state) => state.shop.category);
  //keyword from  store
  const findKeyW = useSelector((state) => state.shop.keyword);

  //render product dựa vào category
  useEffect(() => {
    setAnimation(!anima);
    if (category === "all") {
      setProduct(productData);
      //render product theo keyword
      findKeywordHandle(productData);
    } else if (category === "other") {
      let product =
        productData.filter(
          (product) =>
            product.category !== "iphone" &&
            product.category !== "ipad" &&
            product.category !== "macbook" &&
            product.category !== "airpod" &&
            product.category !== "watch" &&
            product.category !== "mouse" &&
            product.category !== "keyboard"
        ) || [];
      setProduct(product);
      findKeywordHandle(product);
    } else {
      let product =
        productData.filter((product) => product.category === category) || [];
      setProduct(product);
      findKeywordHandle(product);
    }
  }, [category, findKeyW]);

  //set keyword
  const keywordHandle = () => {
    dispatch(shopAction.setKeyword(keyW.current.value));
  };
  //function find keyword
  function findKeywordHandle(list) {
    if (findKeyW) {
      //nếu nhiều hơn 1 word
      const keyArr = findKeyW.split(" ");
      const productFind = list.filter((product) =>
        keyArr.every((key) =>
          product.name.toLowerCase().includes(key.toLowerCase().trim())
        )
      );
      setProduct(productFind);
    }
  }

  return (
    <div className="pt-4">
      <div className="d-flex justify-content-between mb-3">
        <input
          ref={keyW}
          className="ps-3 py-1"
          type="text"
          placeholder="Enter Search Hear!"
          onChange={keywordHandle}
        />
        <select style={{ width: 160 }}>
          <option value="audi">Default sorting</option>
        </select>
      </div>
      <ShopProductList ani={anima} products={products} />
      <div className="text-end">
        <span className=" border border-dark py-1 px-2 me-1">
          <i className="fa fa-angle-double-left"></i>
        </span>
        <span className="bg-dark text-white py-1 px-2 ">?</span>
        <span className=" border border-dark py-1 px-2 ms-1">
          <i className="	fa fa-angle-double-right"></i>
        </span>
      </div>
    </div>
  );
}

export default FindProduct;
