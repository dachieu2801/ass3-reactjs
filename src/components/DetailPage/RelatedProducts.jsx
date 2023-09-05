import { useNavigate } from "react-router-dom";

import Item from "../HomePage/Item";

function RelatedProducts(props) {
  const relatedProducts = props.products;
  //navigate
  const navigate = useNavigate();

  return (
    <div className="mb-5">
      <h6 className="mt-3 mb-4 ">RELATED PRODUCTS</h6>
      <div className="listitem-wrapper">
        {relatedProducts.map((product, i) => (
          <div
            className="item-wrapper"
            key={i}
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

export default RelatedProducts;
