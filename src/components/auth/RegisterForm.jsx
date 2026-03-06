import React, { useState } from "react";

// * http://localhost:3000/login

const RegisterForm = () => {
  const [form, setForm] = useState({ email: "", password: "", fullname: "" });

  const handleChange = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(JSON.stringify(form));
      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      console.log(data);
      location.href("./login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Fullname
        </label>
        <input
          type="text"
          className="form-control"
          name="fullname"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Email
        </label>
        <input
          name="email"
          type="email"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <button className="btn btn-primary w-100">Register with email</button>
      </div>
    </form>
  );
};

export default RegisterForm;
