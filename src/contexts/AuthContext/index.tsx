import { ToastError } from '@/components-shared/Toast/ToastError';
import auth from '@/firebase';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  User
} from 'firebase/auth';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IAuthContext, IAuthProviderProps } from './interfaces';

const AuthContext = createContext({} as IAuthContext);

function AuthProvider({ children }: IAuthProviderProps) {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleSignUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        localStorage.setItem('auth_token', response.user.refreshToken);
        navigate('/buscar-players');
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
      .then((response) => {
        const credential = GoogleAuthProvider.credentialFromResult(response);
        const token = credential?.accessToken;

        localStorage.setItem('auth_token', token ?? '');
        navigate('/buscar-players');
      })
      .catch(() => {
        ToastError({ message: 'Algo deu errado! Tente novamente.' });
      });
  };

  const handleLogout = () => {};

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        handleSignUp,
        handleSignInCredentials,
        handleSignInGoogle
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
