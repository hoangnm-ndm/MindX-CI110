import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div className="fixed top-1/2 right-0.5 bg-amber-600">
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <img src={product.thumbnail} alt="" />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
