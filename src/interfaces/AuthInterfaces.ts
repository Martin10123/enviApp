import { Country } from "./interfaces";

export interface AuthState {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
  alias: string;
  country: Country;
  token: string;
  avatarUrl: string;
  creationDate: string;
  phone: string;
}

export interface AuthContextProps {
  isLogged: boolean;
  userState: AuthState | null;
  loading: boolean;
  signOut: () => void;
  fetchUserData: (user: AuthState) => void;
}
