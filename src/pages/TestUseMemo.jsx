import React, { useMemo, useState } from "react";

const TestUseMemo = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([
    {
      name: "Iphone 14 Pro Max",
      price: 30000000,
      id: 1,
    },
    {
      name: "Iphone 13 Pro Max",
      price: 25000000,
      id: 2,
    },
  ]);

  const expensiveProducts = (products) => {
    console.log("Dang tinh toan...");
    return products.reduce((total, product) => total + product.price, 0);
  };

  const totalPrice = useMemo(() => expensiveProducts(products), [products]);
  return (
    <div>
      <h1>Test useMemo</h1>
      <p> Total: {totalPrice}</p>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click increament: {count}
      </button>
    </div>
  );
};

export default TestUseMemo;
