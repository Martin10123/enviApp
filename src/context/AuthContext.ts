import { createContext } from "react";

export interface AuthState {
  name: string;
}

interface AuthContextProps {
  isLogged: boolean;
  user: AuthState | null;
  signIn: () => void;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);
