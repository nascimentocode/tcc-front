import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRoutes() {
  const isAuth = localStorage.getItem('auth_token');

  if (isAuth === 'undefined' || !isAuth) return <Navigate to="/login" />;

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
