import { createContext } from "react";

export interface AuthState {
  id: string;
  email: string;
  roles: string[];
  alias: string;
  country: Country;
  token: string;
}

interface Country {
  code: string;
  name: string;
  description: string;
  status: string;
  flagUrl: string;
  creationDate: string;
  lastUpdateDate: string;
}

interface AuthContextProps {
  isLogged: boolean;
  userState: AuthState | null;
  signOut: () => void;
  fetchUserData: (user: AuthState) => void;
}

export const AuthContext = createContext({} as AuthContextProps);
