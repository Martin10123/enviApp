import { LoginScreen } from "@/auth/LoginScreen";
import { RegisterScreen } from "@/auth/RegisterScreen";
import { AuthContext } from "@/context/AuthContext";
import { HomePage } from "@/pages/HomePage";
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  const { isLogged } = useContext(AuthContext);

  return (
    <Routes>
      {isLogged ? (
        <>
          <Route path="/" element={<HomePage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />

          <Route path="*" element={<Navigate to="/login" />} />
        </>
      )}
    </Routes>
  );
};
