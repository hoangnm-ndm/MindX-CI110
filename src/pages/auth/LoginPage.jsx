import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginAuthSchema } from "../../validation/authValidation";
import { loginAuth } from "../../api/apiAuth";
import { toast } from "react-toastify";

const LoginPage = () => {
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginAuthSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await loginAuth(data);
      toast.success(res.message || "Login successful!");
      console.log(res);
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("user", JSON.stringify(res.user));

      nav(
        res.user.role === "admin" || res.user.role === "superAdmin"
          ? "/admin"
          : "/"
      );
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 bg-[#002c69] text-white flex-col justify-center items-center p-10">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-6">Welcome Back!</h1>
          <p className="text-lg opacity-80 mb-6">
            Continue your learning journey and access your courses, progress,
            and achievements.
          </p>

          <div className="space-y-4">
            <div className="bg-white/10 p-4 rounded-xl">📊 Track Progress</div>
            <div className="bg-white/10 p-4 rounded-xl">
              🧠 Personalized Learning
            </div>
            <div className="bg-white/10 p-4 rounded-xl">
              🏆 Achievements & Certificates
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-50 p-6">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-[#002c69] mb-2">Login</h2>
          <p className="text-gray-500 mb-6">Access your account</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                {...register("email")}
                placeholder="example@gmail.com"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f66df]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <Link
                  to="/auth/forgot-password"
                  className="text-sm text-[#0f66df] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <input
                type="password"
                {...register("password")}
                placeholder="********"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f66df]"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#0f66df] hover:bg-[#0c54b8] text-white py-2 rounded-lg font-semibold transition"
            >
              Login
            </button>
          </form>

          {/* FOOTER */}
          <p className="text-sm text-gray-500 mt-6 text-center">
            Don’t have an account?{" "}
            <Link
              to="/auth/register"
              className="text-[#0f66df] font-medium hover:underline"
            >
              Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
