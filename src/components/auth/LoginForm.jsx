import React from "react";
import api from "../../api";
import { useForm } from "react-hook-form";

// * http://localhost:3000/login

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({});

  const onSubmit = async (body) => {
    try {
      const { data } = await api.post("/login", body);
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("accessToken", data.accessToken);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" {...register("email")} />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          {...register("password")}
        />
      </div>
      <div className="mb-3">
        <button className="btn btn-primary w-100">Register with email</button>
      </div>
    </form>
  );
};

export default LoginForm;
