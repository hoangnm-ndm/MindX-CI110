import React, { useState } from "react";

const RegisterPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Register Page</h1>
      <button
        className="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default RegisterPage;
