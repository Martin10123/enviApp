import React, { useContext, useState } from "react";
import { useForm } from "./useForm";
import { AuthContext } from "@/context/AuthContext";

export const useLogin = () => {
  const { fetchUserData } = useContext(AuthContext);
  const { email, password, onInputChange } = useForm({
    email: "admin",
    password: "admin",
  });
  const [error, setError] = useState<string | null>(null);
  const [loadingLogin, setLoadingLogin] = useState(false);

  const onValidateForm = (email: string, password: string) => {
    if (!email || !password) {
      setError("Todos los campos son obligatorios");
      return false;
    }

    return true;
  };

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!onValidateForm(email, password)) {
      return;
    }

    setLoadingLogin(true);

    try {
      // Autenticación local temporal
      if (email === "admin" && password === "admin") {
        const fakeUser = {
          id: "1",
          firstName: "Admin",
          lastName: "User",
          email: "admin@example.com",
          roles: ["ADMIN"],
          alias: "admin",
          country: {
            id: "CO",
            name: "Colombia",
            code: "+57",
            description: "País de ejemplo para login local",
            status: "active",
            flagUrl: "https://flagcdn.com/co.svg",
            creationDate: new Date().toISOString(),
            lastUpdateDate: new Date().toISOString(),
          },
          token: "fake-token",
          avatarUrl: "",
          creationDate: new Date().toISOString(),
          phone: "+573001112233",
        };

        localStorage.setItem("token", fakeUser.token);
        localStorage.setItem("token-init", `${new Date().getTime()}`);
        localStorage.setItem("userState", JSON.stringify(fakeUser));

        fetchUserData(fakeUser);
      } else {
        setError("Credenciales incorrectas");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      setError("Error inesperado al intentar iniciar sesión");
      console.error("Error", e);
    } finally {
      setLoadingLogin(false);
    }
  };

  return {
    email,
    password,
    onInputChange,
    error,
    loadingLogin,
    onLogin,
  };
};
