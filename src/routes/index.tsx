import { EditProfile } from '@/pages/EditProfile';
import { Login } from '@/pages/Login';
import { SearchPlayer } from '@/pages/SearchPlayer';
import { SignUp } from '@/pages/SignUp';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="cadastrar" element={<SignUp />} />
      <Route element={<PrivateRoutes />}>
        <Route index path="buscar-players" element={<SearchPlayer />} />
        <Route path="editar-perfil" element={<EditProfile />} />
      </Route>
      <Route path="*" element={<Navigate to="/buscar-players" replace />} />
    </Routes>
  );
}
