import { enviAppApi } from "@/api";
import React, { useContext, useState } from "react";
import validator from "validator";
import { useForm } from "./useForm";
import { AuthContext } from "@/context/AuthContext";

export const useLogin = () => {
  const { fetchUserData } = useContext(AuthContext);
  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loadingLogin, setLoadingLogin] = useState(false);

  const onValidateForm = (email: string, password: string) => {
    if (!validator.isEmail(email)) {
      setError("El email no es válido");
      return false;
    }

    if (
      !validator.isStrongPassword(password, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 0,
      })
    ) {
      setError(
        "La contraseña debe tener al menos 6 caracteres, por lo menos una mayúscula, una minúscula y un número"
      );

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
      const resp = await enviAppApi.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", resp.data.token);
      localStorage.setItem("token-init", `${new Date().getTime()}`);
      localStorage.setItem("userState", JSON.stringify(resp.data));

      fetchUserData(resp.data);
    } catch (e: any) {
      console.log("Error", e);

      setError(e.response.data.message);
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
