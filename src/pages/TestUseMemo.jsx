import { useMemo, useState } from "react";

function TestUseMemo() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([
    { id: 1, price: 100 },
    { id: 2, price: 200 },
  ]);

  // Hàm tính toán tốn kém
  const expensiveComputation = (products) => {
    console.log("Đang tính toán...");
    return products.reduce((total, p) => total + p.price, 0);
  };

  const totalPrice = useMemo(() => expensiveComputation(products), [products]);

  return (
    <>
      <h1>Total: {totalPrice}</h1>

      <button onClick={() => setCount(count + 1)}>Tăng count ({count})</button>
    </>
  );
}

export default TestUseMemo;
