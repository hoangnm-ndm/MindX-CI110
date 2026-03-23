import { useState } from "react";

// Custom Hook: useCounter
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return [count, increment, decrement, reset];

  // * Nếu gom các features thành 1 array để trả về thì có thể đổi tên nhưng không đổi được thứ tự destructuring.
  // * Nếu gom các features thành 1 object để trả về thì có thể gọi bất cứ features nào ra dùng theo tên mà không cần quan tâm đến thứ tự destructuring.
}

export default useCounter;
