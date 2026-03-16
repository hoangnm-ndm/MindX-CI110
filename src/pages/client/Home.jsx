import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      });
  }, []);

  // * http://localhost:5173/product-detail/123
  return (
    <div>
      <h1>Cac san pham ban chay!</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.thumbnail} width={140} alt={product.title} />
          <Link to={`/product-detail/${product.id}`}>Xem chi tiet!</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
