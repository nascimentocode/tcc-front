import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './contexts/AuthContext';
import { auth, db } from './firebase';
import { IUser } from './interfaces/Users';
import { AppRoutes } from './routes';

export function App() {
  const navigate = useNavigate();

  const { currentUser, setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, 'users', user.uid, 'user_infos', 'data');
        const data = await getDoc(docRef);

        const userData: IUser = {
          ...(data.data() as IUser)
        };

        setCurrentUser(userData);
        localStorage.setItem('auth_token', user?.refreshToken);
      }
    });
  }, [currentUser, setCurrentUser, navigate]);

  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
}
