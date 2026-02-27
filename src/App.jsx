import React, { useState } from "react";
import "./App.css";

// * Component

function App() {
  const [age, setAge] = useState(10);
  //* const [state, setState] = useState(initialState)
  const handleIncAge = () => {
    // * Cách 1: Đơn giản, dễ dùng.
    // setAge(age + 2);
    // setAge(age + 4);
    // setAge(age + 6);

    // * Cách 2: Dùng callback khi setState: Dài dòng hơn, nhưng an toàn hơn khi có nhiều logic cùng tác động vào state.
    setAge((prev) => prev + 1);
    setAge((prev) => prev + 100);
    setAge((prev) => prev + 100);
  };
  console.log(age);
  return (
    <div className="app">
      <h1>Hello mọi người!</h1>
      <p>Mỗi năm tôi sẽ được tăng 1 tuổi</p>
      <p>Hiện tại tôi: {age} tuổi!</p>
      <button onClick={handleIncAge}>Tăng tuổi</button>
    </div>
  );
}

export default App;
