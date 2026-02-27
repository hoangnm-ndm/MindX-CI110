import Password from "antd/es/input/Password";
import React, { useState } from "react";

const RegisterPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPass: "",
    gender: "",
  });

  const hanleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // * Gửi dữ liệu lên server để đăng ký! (Gọi API)
    console.log(form);
  };

  //* Hãy thêm tính năng kiểm tra mật khẩu phải có tổi thiểu 6 ký tự.
  //* Password === confirmPass

  return (
    <form action="" onSubmit={handleSubmit}>
      <h1>Register now!</h1>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={form.email}
          onChange={hanleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={form.password}
          onChange={hanleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          name="confirmPass"
          value={form.confirmPass}
          onChange={hanleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="">Gender</label>
        <select
          id=""
          className="form-control"
          name="gender"
          value={form.gender}
          onChange={hanleChange}
        >
          <option key={1} value="">
            Choose gender
          </option>
          <option key={2} value="male">
            Male
          </option>
          <option key={3} value="female">
            Female
          </option>
          <option key={4} value="other">
            Other
          </option>
        </select>
      </div>

      <div className="mb-3">
        <button className="btn btn-primary w-100">Register</button>
      </div>
    </form>
  );
};

export default RegisterPage;
