import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);
  return (
    <div>
      <p>Chi tiet san pham</p>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt="" />
    </div>
  );
};

export default ProductDetail;
