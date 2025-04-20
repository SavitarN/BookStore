import { Routes, Route } from "react-router-dom";
import App from "./App";

import Home from "./section/Home";
import Products from "./section/Products";
import ProductDetails from "./section/ProductDetails";
import Login from "./section/Login";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
