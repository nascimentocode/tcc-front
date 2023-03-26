import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
