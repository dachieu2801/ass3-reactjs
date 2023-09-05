import usePrice from "../../hooks/usePrice";

function Item(props) {
  const productItem = props.product;
  //chuyển thành số có dấu chấm ngăn cách
  let price = usePrice(productItem.price);

  return (
    <>
      <img src={productItem.img1} alt={productItem.name} width="100%" />
      <div className="text-center mt-3">
        <p>
          <i>{productItem.name}</i>
        </p>
        <p className="opacity-50">
          <i>{price} VND</i>
        </p>
      </div>
    </>
  );
}

export default Item;
