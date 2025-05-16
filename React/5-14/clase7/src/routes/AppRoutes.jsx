import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import Profile from "../pages/Profile/Profile";
import Admin from "../pages/Admin/Admin";

function AppRoutes() {
  const auth = localStorage.getItem("auth") === "true";

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route
        path="/profile/:id"
        element={auth ? <Profile /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/admin"
        element={auth ? <Admin /> : <Navigate to="/login" replace />}
      />
    </Routes>
  );
}

export default AppRoutes;
