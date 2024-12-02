import { UploadFilesRegister } from "./UploadFilesRegister";

interface TermsConditionsRegisterProps {
  handleTabs: (tab: number) => void;
}

export const TermsConditionsRegister = ({
  handleTabs,
}: TermsConditionsRegisterProps) => {
  return (
    <>
      <div>
        <label
          htmlFor="tipoDocumento"
          className="w-max block mb-2 text-sm font-medium text-gray-900"
        >
          Antecedentes judiciales
        </label>

        <UploadFilesRegister />
      </div>
      <div>
        <label
          htmlFor="Alias"
          className="w-max block mb-2 text-sm font-medium text-gray-900"
        >
          Alias
        </label>
        <input
          type="text"
          id="Alias"
          className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 px-2.5 mb-2 md:py-2.5"
          placeholder="Alias..."
          disabled
        />
      </div>
      <div>
        <label
          htmlFor="Contraseña"
          className="w-max block mb-2 text-sm font-medium text-gray-900"
        >
          Contraseña
        </label>
        <input
          type="password"
          id="Contraseña"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 px-2.5 mb-2 md:py-2.5"
          placeholder="Contraseña..."
        />
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id="termsConditions"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
        />
        <label
          htmlFor="termsConditions"
          className="w-max block text-base font-medium text-gray-400"
        >
          Acepta
          <a className="text-blue-500 hover:underline" href="#">
            {" "}
            terminos
          </a>{" "}
          y{" "}
          <a className="text-blue-500 hover:underline" href="#">
            condiciones
          </a>
        </label>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          type="submit"
          className="bg-gray-400 mt-4 text-white text-sm font-medium rounded-lg focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-none py-3.5 px-2.5 w-full md:py-2.5"
          onClick={() => handleTabs(2)}
        >
          Regresar
        </button>
        <button
          type="submit"
          className="bg-blue-500 mt-4 text-white text-sm font-medium rounded-lg focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-none py-3.5 px-2.5 w-full md:py-2.5"
        >
          Registrarse
        </button>
      </div>
    </>
  );
};
