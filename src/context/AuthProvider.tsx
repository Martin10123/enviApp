import { ReactElement, useEffect, useState } from "react";
import { AuthContext, AuthState } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactElement }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<AuthState | null>(null);

  const signIn = () => {
    setIsLogged(true);
    setUser({ name: "Admin" });

    localStorage.setItem("isLogged", "true");
    localStorage.setItem("user", JSON.stringify({ name: "Admin" }));
  };

  const signOut = () => {
    setIsLogged(false);
    setUser(null);

    localStorage.removeItem("isLogged");
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged");
    const user = localStorage.getItem("user");

    if (isLogged) {
      setIsLogged(true);
    }

    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
