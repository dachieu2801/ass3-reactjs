import { createContext, useState, useEffect } from "react";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [dataProduct, setDataProduct] = useState([]);
  // const [isPopUp, setIsPopUp] = useState(false)

  useEffect(() => {
    async function fetchdata() {
      const reponse = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );
      const data = await reponse.json();
      setDataProduct(data);
    }
    fetchdata();
  }, []);
  if (dataProduct.length > 0)
    return (
      <ProductContext.Provider value={dataProduct}>
        {children}
      </ProductContext.Provider>
    );
}
export { ProductProvider };
export default ProductContext;
