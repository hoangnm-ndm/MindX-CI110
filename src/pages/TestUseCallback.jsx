import { memo, useCallback, useState } from "react";

const Child = memo(({ onClick }) => {
  console.log("Child render");
  return <button onClick={onClick}>Click</button>;
});

function TestUseCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("click");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </>
  );
}

export default TestUseCallback;
