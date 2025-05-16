import { Routes, Route, Navigate } from "react-router-dom";

import Main from "../pages/Main/Main";
import Cart from "../pages/Cart/Cart";
import Products from "../pages/Products/Products";
import NotFound from "../pages/NotFound/NotFound";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import ProductsDetails from "../pages/ProductsDetails/ProductsDetails";
import useUser from "../contexts/user/user";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";

function AppRoutes() {
  const { isAuthenticated } = useUser();

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<Main />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductsDetails />} />
      <Route
        path="/cart"
        element={isAuthenticated ? <Cart /> : <Navigate to="/login" replace />}
      />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/logout"
        element={isAuthenticated ? <Main /> : <Navigate to="/login" replace />}
      />
      <Route
        path="/admin"
        element={
          isAuthenticated ? <Profile /> : <Navigate to="/login" replace />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
