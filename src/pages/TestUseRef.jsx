import { useRef, useState } from "react";

function TestUseRef() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1; // cập nhật giá trị trong ref
    console.log("Count Ref:", countRef.current); // luôn in ra giá trị mới nhất
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment State: {count}
      </button>
      <button onClick={handleClick}>Increment Ref: {countRef.current}</button>
    </div>
  );
}

export default TestUseRef;
