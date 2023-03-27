import { IUser } from '@/interfaces/Users';

export interface IAuthContext {
  currentUser: IUser | null;
  setCurrentUser: (user: IUser | null) => void;
  handleSignUp: (
    email: string,
    password: string,
    name: string,
    userName: string
  ) => void;
  handleSignInCredentials: (email: string, password: string) => void;
  handleSignInGoogle: () => void;
  handleLogout: () => void;
}

export interface IAuthProviderProps {
  children: React.ReactNode;
}
