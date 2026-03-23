import AboutUs from "../pages/client/AboutUs";
import BlogPage from "../pages/client/BlogPage";
import Category from "../pages/client/Category";
import HomePage from "../pages/client/HomePage";
import ProductDetail from "../pages/client/ProductDetail";
import ProfileMe from "../pages/client/ProfileMe";

const ClientRoutes = [
  { index: true, element: <HomePage /> },
  { path: "categories", element: <Category /> },
  { path: "blogs", element: <BlogPage /> },
  { path: "about-us", element: <AboutUs /> },
  { path: "profile", element: <ProfileMe /> },
  { path: "products/:id", element: <ProductDetail /> },
];

export default ClientRoutes;
