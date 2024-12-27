import { ReactElement, useEffect, useState } from "react";
import { AuthContext, AuthState } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userState, setUserState] = useState<AuthState | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userState = localStorage.getItem("userState");

    if (token && userState) {
      setIsLogged(true);
      setUserState(JSON.parse(userState));
    }
  }, []);

  const fetchUserData = (user: AuthState) => {
    try {
      setUserState(user);
      setIsLogged(true);
    } catch (e) {
      console.error("Error fetching user data", e);
      signOut();
    }
  };

  const signOut = () => {
    setIsLogged(false);
    setUserState(null);

    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        userState,
        signOut,
        fetchUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
