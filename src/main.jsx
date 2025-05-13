import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router";

import AppRoutes from "./AppRoutes.jsx";
import { AuthProvider } from "./context/AuthContex";
import { CartProvider } from "./context/CartContext";
createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CartProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </CartProvider>
  </AuthProvider>
);
