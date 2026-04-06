import DashBoard from "../pages/admin/DashBoard";
import ProductFormPage from "../pages/admin/products/ProductFormPage";
import ProductManagementPage from "../pages/admin/products/ProductManagementPage";
import Settings from "../pages/admin/Settings";

const AdminRoutes = [
  { index: true, element: <DashBoard /> },
  { path: "settings", element: <Settings /> },
  { path: "products", element: <ProductManagementPage /> },
  { path: "products/add", element: <ProductFormPage /> },
  { path: "products/update/:id", element: <ProductFormPage /> },
];

export default AdminRoutes;
