import { ToastError } from '@/components-shared/Toast/ToastError';
import { auth, db } from '@/firebase';
import { IUser } from '@/interfaces/Users';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IAuthContext, IAuthProviderProps } from './interfaces';

const AuthContext = createContext({} as IAuthContext);

function AuthProvider({ children }: IAuthProviderProps) {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  const handleSignUp = (
    email: string,
    password: string,
    name: string,
    userName: string
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (response) => {
        localStorage.setItem('auth_token', response.user.refreshToken);
        navigate('/buscar-players');

        const docRef = doc(
          db,
          'users',
          response.user.uid,
          'user_infos',
          'data'
        );
        await setDoc(docRef, {
          uid: response.user.uid,
          email,
          name,
          userName,
          profileImage: null,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
      })
      .catch((err) => {
        if (err.code === 'auth/email-already-in-use') {
          ToastError({ message: 'Esse e-mail ja esta sendo utilizado.' });
        }
      });
  };

  const handleSignInCredentials = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        localStorage.setItem('auth_token', response.user.refreshToken);
        navigate('/buscar-players');
      })
      .catch(() => {
        ToastError({ message: 'Algo deu errado! Tente novamente.' });
      });
  };

  const handleSignInGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(async (response) => {
        const credential = GoogleAuthProvider.credentialFromResult(response);
        const token = credential?.accessToken;

        localStorage.setItem('auth_token', token ?? '');
        navigate('/buscar-players');

        const docRef = doc(
          db,
          'users',
          response.user.uid,
          'user_infos',
          'data'
        );

        await setDoc(
          docRef,
          {
            uid: response.user.uid,
            email: response.user.email,
            name: response.user.displayName,
            userName: response.user.displayName,
            profileImage: response.user.photoURL,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            merge: true
          }
        );
      })
      .catch(() => {
        ToastError({ message: 'Algo deu errado! Tente novamente.' });
      });
  };

  const handleLogout = () => {
    localStorage.clear();

    signOut(auth)
      .then(() => navigate('/login'))
      .catch((err) => console.error(err));
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        handleSignUp,
        handleSignInCredentials,
        handleSignInGoogle,
        handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
