import React from "react";

const ProtectedRoute = ({ children, roles }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  // sử dụng state để lưu và lấy thông tin từ localStorage sẽ giúp chúng ta dễ dàng quản lý và cập nhật thông tin người dùng khi cần thiết, đặc biệt là khi có sự thay đổi về quyền truy cập hoặc khi người dùng đăng xuất.
  //  * Nên đào sâu thêm về cookies, sessionStorage, localStorage để hiểu rõ hơn về cách lưu trữ thông tin người dùng và token
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
