import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
