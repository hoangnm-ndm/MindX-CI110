import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import LayoutAdmin from "../layout/admin/LayoutAdmin";
import LayoutAuth from "../layout/auth/LayoutAuth";
import LayoutClient from "../layout/client/LayoutClient";
import ForgotPassword from "../pages/auth/ForgotPassword";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import NotFoundPage from "../pages/client/NotFoundPage";
import AdminRoutes from "./AdminRoutes";
import ClientRoutes from "./ClientRoutes";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  // * Dành cho client
  {
    path: "/",
    element: <LayoutClient />,
    children: ClientRoutes,
  },

  // * Dành cho admin
  {
    path: "/admin",
    // * Hãy thiết lập một protected route ở đây để chỉ cho phép admin truy cập vào các route con bên dưới
    element: (
      <ProtectedRoute roles={["admin", "superAdmin"]}>
        <LayoutAdmin />
      </ProtectedRoute>
    ),
    children: AdminRoutes,
  },

  // * Dành cho authentication
  {
    path: "/auth",
    element: <LayoutAuth />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "forgot-password", element: <ForgotPassword /> },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
