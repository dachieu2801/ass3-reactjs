import Card from "../UI/Card";
import Banner from "../components/ShopPage/Banner";
import ShoppingCart from "../components/CartPage/ShoppingCart";
import CartTotal from "../components/CartPage/CartTotal";

function CartPage() {
  return (
    <Card>
      <Banner type="cart" />
      <h4 className="mt-5 mb-4">SHOPPING CART</h4>
      <div className="shopping-wrapper">
        <ShoppingCart />
        <CartTotal />
      </div>
    </Card>
  );
}

export default CartPage;
