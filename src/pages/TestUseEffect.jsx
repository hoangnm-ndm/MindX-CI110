import React, { useEffect } from "react";

const TestUseEffect = () => {
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    // * componentDidMount
    console.log("Component did mount");

    // * Nếu có dependency là count thì sẽ chạy mỗi khi count thay đổi: đây chính là thay thế cho method componentDidUpdate

    return () => {
      // * componentWillUnmount
      console.log("Component will unmount");
    };
  }, [count]);

  const hanleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={hanleClick}>Click</button>
    </div>
  );
};

export default TestUseEffect;
