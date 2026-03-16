import DashBoard from "../pages/admin/DashBoard";
import Settings from "../pages/admin/Settings";

const AdminRoutes = [
  { index: true, element: <DashBoard /> },
  { path: "settings", element: <Settings /> },
];

export default AdminRoutes;
