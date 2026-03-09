import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(1000);
  console.log(count, otherState);
  // Sử dụng useEffect
  useEffect(() => {
    document.title = "Tieu De: " + count;
    // console.log("làm đúng 1 lần, vì không phụ thuộc vào ai");
    // * Tiêu đề nó không thay đổi vì code trong callback của useEffect chỉ phụ thuộc vào count
  }, []);

  /**
   * * useEffect(callback, dep)
   * * 1. dep = null (không khai báo): callback được gọi mỗi lần component render
   * * 2. dep = [] (array rỗng): callback chạy 1 lần duy nhất ngay sau khi component mounted.
   * * 3. dep = [deps]: callback được gọi lần đầu sau khi component render, và được gọi lại mỗi lần khi deps có sự thay đổi.
   * * 4. dùng useEffect để clean-up
   */

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button
        className="border-slate-500 border-2"
        onClick={() => setOtherState(otherState + 100)}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
