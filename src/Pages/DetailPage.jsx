import { useContext } from "react";
import { useParams } from "react-router-dom";

import ProductContext from "../store/ProductStore";

import Card from "../UI/Card";
import ShortDes from "../components/DetailPage/ShortDes";
import LongDes from "../components/DetailPage/LongDes";
import RelatedProducts from "../components/DetailPage/RelatedProducts";

function DetailPage() {
  //id của product muôns xem detail
  const id = useParams().productId;
  //data tong
  const productData = useContext(ProductContext);
  // data can detail
  const product = productData.find((a) => a["_id"]["$oid"] === id);
  //related products
  const relatedProducts = productData.filter(
    (a) => a.category === product.category
  );

  return (
    <Card>
      {/* short-des */}
      <ShortDes product={product} />
      {/* long des*/}
      <LongDes product={product} />
      {/* related products */}
      <RelatedProducts products={relatedProducts} />
    </Card>
  );
}

export default DetailPage;
