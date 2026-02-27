import React, { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <form action="" onSubmit={() => handleSubmit(data)}>
      <h1>Register now!</h1>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="text"
          className="form-control"
          onChange={console.log("test")}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Confirm Password</label>
        <input type="password" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="">Gender</label>
        <select name="" id="" className="form-control">
          <option value="">Choose dender</option>
          <option value="">Male</option>
          <option value="">Female</option>
          <option value="">Other</option>
        </select>
      </div>

      <div className="mb-3">
        <button className="btn btn-primary w-100">Register</button>
      </div>
    </form>
  );
};

export default RegisterPage;
