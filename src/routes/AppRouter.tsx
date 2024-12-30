import { ForgotPassword } from "@/auth/ForgotPassword";
import { LoginScreen } from "@/auth/LoginScreen";
import { RegisterScreen } from "@/auth/RegisterScreen";
import { AuthContext } from "@/context/AuthContext";
import { HomePage } from "@/pages/HomePage";
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  const { isLogged, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      {isLogged ? (
        <>
          <Route path="/" element={<HomePage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/auth/register" element={<RegisterScreen />} />
          <Route path="/auth/login" element={<LoginScreen />} />
          <Route path="/auth/recover" element={<ForgotPassword />} />

          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      )}
    </Routes>
  );
};
