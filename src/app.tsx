import { onAuthStateChanged } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './contexts/AuthContext';
import auth from './firebase';
import { AppRoutes } from './routes';

export function App() {
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        navigate('/buscar-players');
        localStorage.setItem('auth_token', user?.refreshToken);
      }
    });
  }, [setCurrentUser, navigate]);

  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
}
