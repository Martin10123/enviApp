import { AuthTemplate } from "../templates/AuthTemplate";
import { Link } from "react-router-dom";

import { useLogin } from "@/hooks/useLogin";

export const LoginScreen = () => {
  const { email, error, loadingLogin, onInputChange, onLogin, password } =
    useLogin();

  return (
    <AuthTemplate titleRedirect="Regístrate" linkRedirect="/auth/register">
      <form className="grid gap-2" onSubmit={onLogin}>
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 px-2.5 mb-2 md:py-2.5"
            placeholder="Contraseña..."
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </div>

        <div className="flex items-center gap-2 text-gray-900 text-sm font-medium justify-center py-3">
          <div className="w-full h-0.5 bg-gray-200"></div>
          <div>O</div>
          <div className="w-full h-0.5 bg-gray-200"></div>
        </div>
        <div className="grid gap-4">
          <button className="w-full border rounded-lg py-3.5 font-medium flex items-center justify-center gap-2 hover:bg-gray-100 duration-300">
            <img className="w-7 h-7" src="/assets/gmail.svg" alt="Google" />
            <p>Iniciar con Google</p>
          </button>
        </div>
        <div className="flex justify-between py-4">
          <div className="w-full flex items-center gap-2">
            <input type="checkbox" name="" id="recordarme" />
            <label
              className="text-gray-500 text-base font-medium"
              htmlFor="recordarme"
            >
              Recordar mi cuenta
            </label>
          </div>
          <div className="flex items-center">
            <button className="text-blue-500 font-medium hover:underline">
              <Link className="md:flex md:w-max" to="/recover">
                Olvidaste tu contraseña?
              </Link>
            </button>
          </div>
        </div>
        <div>
          <button
            className="w-full bg-blue-500 text-white rounded-lg py-3.5 font-medium hover:bg-blue-600 duration-300"
            type="submit"
            disabled={loadingLogin}
          >
            {loadingLogin ? "Cargando..." : "Iniciar sesión"}
          </button>
        </div>

        {error && (
          <div className="text-red-500 text-sm font-medium">{error}</div>
        )}
      </form>
    </AuthTemplate>
  );
};
