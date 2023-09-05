import { useNavigate } from "react-router-dom";

import Item from "../HomePage/Item";

function ShopProductList(props) {
  const navigate = useNavigate();
  const productData = props.products;

  return (
    <div className="mt-5 mb-5 ">
      <div className="ShopProductList-wrapper">
        {productData.map((product, i) => (
          <div
            key={i}
            className={`item-wrapper animation-item `}
            //hien animation khi thay doi category
            style={{
              animation: `${
                props.ani ? "animation-item 1.9s" : "animation-item-again 1.9s"
              }`,
            }}
            onClick={() => {
              navigate(`/detail/${product["_id"]["$oid"]}`);
              window.scrollTo({ top: 0 ,behavior: "instant"});
            }}
          >
            <Item product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopProductList;
