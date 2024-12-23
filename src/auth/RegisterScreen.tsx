import { InformationRegister } from "@/components";
import { AuthTemplate } from "@/templates/AuthTemplate";

export const RegisterScreen = () => {
  return (
    <AuthTemplate titleRedirect="¿Ya tienes cuenta?" linkRedirect="/login">
      <form className="grid gap-2">
        <InformationRegister />

        <button
          type="submit"
          className="bg-blue-500 mt-4 text-white text-sm font-medium rounded-md focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-none py-3.5 px-2.5 w-full md:py-2.5 hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Registrarse
        </button>
      </form>
    </AuthTemplate>
  );
};
