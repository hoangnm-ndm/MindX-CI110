import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerAuthSchema } from "../../validation/authValidation";
import { registerAuth } from "../../api/apiAuth";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

const RegisterPage = () => {
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerAuthSchema),
  });

  const onSubmit = async (data) => {
    try {
      data.confirmPassword = undefined;

      const res = await registerAuth({ ...data, role: "member" });
      toast.success(
        res.message || "Registration successful! Please login to continue."
      );
      // nav("/auth/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed!");
    }
  };

  const mutation = useMutation({
    mutationFn: registerAuth,
    onSuccess: (res) => {
      toast.success(
        res.message || "Registration successful! Please login to continue."
      );
      nav("/auth/login");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Registration failed!");
    },
  });

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE - BRAND */}
      <div className="hidden lg:flex w-1/2 bg-[#002c69] text-white flex-col justify-center items-center p-10">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-6">Welcome to LMS Platform</h1>
          <p className="text-lg opacity-80 mb-6">
            Build your skills, track your progress, and level up your career
            with structured learning paths.
          </p>

          <div className="space-y-4">
            <div className="bg-white/10 p-4 rounded-xl">
              📚 Structured Courses
            </div>
            <div className="bg-white/10 p-4 rounded-xl">🧠 Smart Learning</div>
            <div className="bg-white/10 p-4 rounded-xl">🚀 Career Growth</div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-50 p-6">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-[#002c69] mb-2">
            Create Account
          </h2>
          <p className="text-gray-500 mb-6">
            Start your learning journey today
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* FULLNAME */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                {...register("fullname")}
                placeholder="Nguyen Van A"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f66df]"
              />
              {errors.fullname && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullname.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <Link
                  to="/auth/login"
                  className="text-sm text-[#0f66df] hover:underline"
                >
                  Already have account?
                </Link>
              </div>

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
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
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

            {/* CONFIRM PASSWORD */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                {...register("confirmPassword")}
                placeholder="********"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f66df]"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#0f66df] hover:bg-[#0c54b8] text-white py-2 rounded-lg font-semibold transition"
              disabled={mutation.isLoading}
            >
              Register now
            </button>

            {mutation.isError && (
              <div>An error occurred: {mutation.error.message}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
