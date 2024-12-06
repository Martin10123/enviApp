import { LoginScreen } from "@/auth/LoginScreen";
import { RegisterScreen } from "@/auth/RegisterScreen";
import { HomePage } from "@/pages/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
