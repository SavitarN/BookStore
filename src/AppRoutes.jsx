import { Routes, Route } from "react-router-dom";
import App from "./App";

import Home from "./section/Home";
import Products from "./section/Products";
import ProductDetails from "./section/ProductDetails";
import Login from "./section/Login";
import UserRegistration from "./section/UserRegistration";
import ProtectedRoute from "../src/utils/ProtectedRoute";
import { CartProvider } from "./context/CartContext";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />

        <Route
          path="products"
          element={
            <CartProvider>
              <Products />
            </CartProvider>
          }
        />

        <Route
          path="products/:id"
          element={
            <CartProvider>
              <ProtectedRoute>
                <ProductDetails />
              </ProtectedRoute>
            </CartProvider>
          }
        />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<UserRegistration />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
