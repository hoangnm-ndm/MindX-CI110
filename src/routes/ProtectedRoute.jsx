import React from "react";

const ProtectedRoute = ({ children, roles }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const checkRole = roles.includes(user?.role);
  console.log(checkRole);
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
