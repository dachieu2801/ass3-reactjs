import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import DetailPage from "./Pages/DetailPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ShopPage from "./Pages/ShopPage";

import NavBar from "./Layout/NavBar";
import Footer from "./Layout/Footer";
import Support from "./components/Support";

function App() {
  const [isSp, setIsSp] = useState(false)
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/shop" Component={ShopPage} />
        <Route path="/detail/:productId" Component={DetailPage} />
        <Route path="/cart" Component={CartPage} />
        <Route path="/checkout" Component={CheckoutPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
      </Routes>

      <i className="fa fa-comments-o fs-3 position-fixed support"
        onClick={() => setIsSp(!isSp)}
      ></i>
      {isSp && <Support />}
      <Footer />
    </BrowserRouter >
  );
}

export default App;
