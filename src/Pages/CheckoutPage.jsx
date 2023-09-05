import Card from "../UI/Card";
import BannerShop from "./../components/ShopPage/Banner";
import Form from "../components/CheckoutPage/FormCheck";
import YourOrder from "../components/CheckoutPage/YourOrder";

function CheckoutPage() {
  return (
    <Card>
      <BannerShop type="checkout" />
      <h4 className="mt-5 mb-4">BILLING DETAILS</h4>
      <div className="checkout-wrapper">
        <Form />
        <YourOrder />
      </div>
    </Card>
  );
}

export default CheckoutPage;
