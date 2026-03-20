import React, { memo, useCallback, useState } from "react";

const Child = memo(({ onClick }) => {
  console.log("Child component re-render");
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
});

const TestUseCallback = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log("click!");
  }, []);
  return (
    <div>
      <h1>TestUseCallback</h1>

      <button onClick={() => setCount(count + 1)}>Incremen: {count}</button>
      <Child onClick={handleClick} />
    </div>
  );
};

export default TestUseCallback;
