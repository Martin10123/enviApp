import { Country } from "@/interfaces/interfaces";
import { createContext } from "react";

export interface AuthState {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
  alias: string;
  country: Country;
  token: string;
}

interface AuthContextProps {
  isLogged: boolean;
  userState: AuthState | null;
  loading: boolean;
  signOut: () => void;
  fetchUserData: (user: AuthState) => void;
}

export const AuthContext = createContext({} as AuthContextProps);
