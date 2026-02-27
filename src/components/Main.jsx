import React from "react";
import Button from "./Button";

//* props = properties = Các thuộc tính của thành phần (Component)

const products = [
  { id: 1, name: "san pham A", price: 200 },
  { id: 2, name: "san pham B", price: 300 },
  { id: 3, name: "san pham C", price: 400 },
];

// * destructuring
const ProductItem = ({ product }) => {
  return (
    <div className="product-item" key={product.id}>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <Button>Mua ngay</Button>
    </div>
  );
};

const Main = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Noi dung chinh</h1>

      <Button variant="primary">Sign In</Button>
      <Button variant="secondary">Sign Up</Button>
      <Button>Click me!</Button>

      <p>{2 + 1}</p>

      {products.map((item, index) => (
        <ProductItem product={item} />
      ))}
    </div>
  );
};

export default Main;
