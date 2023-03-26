import { AppLayout } from '@/layouts/AppLayout';
import { Login } from '@/pages/Login';
import { SignUp } from '@/pages/SignUp';
import { Route, Routes } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index path="login" element={<Login />} />
        <Route path="cadastrar" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
