import React from "react";

const ProtectedRoute = ({ children, roles }) => {
  // const user = JSON.parse(localStorage.getItem("user"));

  // * fake user
  const user = {
    name: "John Doe",
    role: "superAdmin", // Thay đổi role để kiểm tra
  };
  const checkRole = roles.includes(user?.role);
  return (
    <div>
      {checkRole ? (
        children
      ) : (
        <h1>Unauthorized - Bạn không có quyền vào trang này!</h1>
      )}
    </div>
  );
};

export default ProtectedRoute;
