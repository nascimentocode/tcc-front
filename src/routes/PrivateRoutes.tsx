import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRoutes() {
  const isAuth = false;

  if (!isAuth) return <Navigate to="/login" />;

  return <Outlet />;
}
