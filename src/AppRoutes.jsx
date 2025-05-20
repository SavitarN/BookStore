import { Routes, Route } from "react-router-dom";
import App from "./App";

import Home from "./section/Home";
import Products from "./section/Products";
import ProductDetails from "./section/ProductDetails";
import Login from "./section/Login";
import UserRegistration from "./section/UserRegistration";
import ProtectedRoute from "../src/utils/ProtectedRoute";
import Cart from "../src/section/Cart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />

        <Route path="products" element={<Products />} />

        <Route
          path="products/:id"
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          }
        />

        <Route path="login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="register" element={<UserRegistration />} />
      
      </Route>
    </Routes>
  );
};

export default AppRoutes;
