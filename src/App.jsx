import React from "react";
import Home from "./pages/client/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { Link, NavLink, Route, Routes } from "react-router";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import AuthLayout from "./components/AuthLayout";
import ClientLayout from "./components/ClientLayout";
import About from "./pages/client/About";
import Contact from "./pages/client/Contact";
import ProductDetail from "./pages/client/ProductDetail";

function App() {
  return (
    <div>
      <Routes>
        {/* nested route */}
        <Route path="/" element={<ClientLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/product-detail/:productId"
            element={<ProductDetail />}
          />
          {/* http://localhost:5173/product-detail/4 */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ... */}
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          {/* http://localhost:5173/auth/login */}
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
