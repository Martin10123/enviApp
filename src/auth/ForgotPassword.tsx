import { Link } from "react-router-dom";
export const ForgotPassword = () => {
  return (
    <section className="bg-[#ebebeb] h-dvh flex items-center">
      <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img
            className="w-8 h-8 mr-2"
            src="/assets/logoEnviApp.svg"
            alt="logo"
          />
          EnviApp
        </div>
        <div className="w-full p-3 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md sm:p-8">
          <h1 className="mb-3 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Olvidaste tu contraseña?
          </h1>
          <p className="font-light text-gray-500 dark:text-gray-400">
            Ingresa tu correo electrónico y te enviaremos un enlace para
            restablecer tu contraseña{" "}
            <Link
              className="text-blue-500 rounded-lg font-medium cursor-pointer hover:underline"
              to="/login"
            >
              Iniciar sesión
            </Link>
          </p>
          <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Correo
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Correo..."
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-light text-gray-500">
                  I accept the{" "}
                  <a
                    className="font-medium text-primary-600 hover:underline"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Recuperar contraseña
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
