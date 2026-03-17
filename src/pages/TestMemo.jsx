import { memo, useState } from "react";

const Child = memo(({ name }) => {
  console.log("Child render");
  return <div>{name}</div>;
});

function TestMemo() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="">Memo</h1>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <Child name="Hoang" />
    </>
  );
}

export default TestMemo;
