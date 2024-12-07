import { useContext, useState } from "react";
import { useForm } from "@/hooks/useForm";
import { AuthTemplate } from "../templates/AuthTemplate";
import { AuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const predefinedUser = "admin";
    const predefinedPassword = "admin";

    if (email === predefinedUser && password === predefinedPassword) {
      setError(null);
      signIn();
      navigate("/");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <AuthTemplate titleRedirect="Regístrate">
      <form className="grid gap-2" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="w-max block mb-2 text-sm font-medium text-gray-900"
          >
            Alias/Correo
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 px-2.5 mb-2 md:py-2.5"
            placeholder="Alias/Correo..."
            name="email"
            value={email}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label
            htmlFor="Contrasena"
            className="w-max block mb-2 text-sm font-medium text-gray-900"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="Contrasena"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 px-2.5 md:py-2.5"
            placeholder="Contraseña..."
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </div>

        {/* Mostrar error si las credenciales son incorrectas */}
        {error && (
          <div className="text-red-500 text-sm font-medium">{error}</div>
        )}

        <div>
          <button
            className="w-full bg-blue-500 text-white rounded-lg py-3.5 font-medium hover:bg-blue-600 duration-300"
            type="submit"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </AuthTemplate>
  );
};
