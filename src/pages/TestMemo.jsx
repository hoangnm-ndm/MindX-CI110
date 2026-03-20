import React, { memo, useState } from "react";

const Child = memo(({ name }) => {
  console.log("Child component re-render");
  return <div>Child Component - {name}</div>;
});

const TestMemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Memo</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child name={"Hoang"} />
      {/* <ProductList products={products} /> */}
    </div>
  );
};

export default TestMemo;
