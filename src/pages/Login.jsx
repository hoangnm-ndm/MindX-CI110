import React from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const nav = useNavigate();

  const handleSumit = (e) => {
    e.preventDefault();
    nav("/");
  };
  return (
    <div>
      <form action="" onSubmit={handleSumit}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
