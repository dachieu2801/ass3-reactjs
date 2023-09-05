import usePrice from "../../hooks/usePrice";

function ItemOrder(props) {
  const product = props.product;
  let price = usePrice(product.price, product.quantity);
  return (
    <div className="d-flex border-bottom py-1 ">
      <p className="w-50">{product.name}</p>
      <p className="text-end opacity-50 w-50 m-auto">
        {price} VND x {product.quantity}
      </p>
    </div>
  );
}

export default ItemOrder;
