import { createContext, useEffect, useState } from "react";
import { getProducts } from "../api/productApi";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  // * useState + useEffect
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      setProducts(await getProducts());
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductContextProvider;
