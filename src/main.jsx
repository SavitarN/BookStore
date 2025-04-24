import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router";

import AppRoutes from "./AppRoutes.jsx";
import { AuthProvider } from "./context/AuthContex";
createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AuthProvider>
);
