import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContex";

const ProtectedRoute = ({ children }) => {
  const { loggedIn } = useContext(AuthContext);

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default ProtectedRoute;
