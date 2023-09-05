import Card from "../UI/Card";

// import ProductType from "../components/ShopPage/ProductType";
import Banner from "../components/ShopPage/Banner";
import NavBar from "../components/ShopPage/NavBar";
import FindProduct from "../components/ShopPage/FindProduct";
function ShopPage() {
  return (
    <Card>
      <Banner type="shop" />
      <div className="shopPage-section mb-4">
        <NavBar />
        <FindProduct />
      </div>
    </Card>
  );
}

export default ShopPage;
