import { User } from 'firebase/auth';

export interface IAuthContext {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  handleSignUp: (email: string, password: string) => void;
  handleSignInCredentials: (email: string, password: string) => void;
  handleSignInGoogle: () => void;
}

export interface IAuthProviderProps {
  children: React.ReactNode;
}
