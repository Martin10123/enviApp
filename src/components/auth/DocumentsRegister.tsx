import { UploadFilesRegister } from "@/components";

interface DocumentsRegistersProps {
  handleTabs: (tab: number) => void;
}

export const DocumentsRegisters = ({ handleTabs }: DocumentsRegistersProps) => {
  return (
    <>
      <div>
        <label
          htmlFor="tipoDocumento"
          className="w-max block mb-2 text-sm font-medium text-gray-900"
        >
          Copia de cédula
        </label>

        <UploadFilesRegister />
      </div>
      <div>
        <label
          htmlFor="tipoDocumento"
          className="w-max block mb-2 text-sm font-medium text-gray-900"
        >
          Cuenta bancaria
        </label>

        <UploadFilesRegister />
      </div>
      <div>
        <label
          htmlFor="tipoDocumento"
          className="w-max block mb-2 text-sm font-medium text-gray-900"
        >
          Referencias personales
        </label>

        <UploadFilesRegister />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          type="submit"
          className="bg-blue-500 mt-4 text-white text-sm font-medium rounded-lg focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-none py-3.5 px-2.5 w-full md:py-2.5"
          onClick={() => handleTabs(1)}
        >
          Regresar
        </button>
        <button
          type="submit"
          className="bg-blue-500 mt-4 text-white text-sm font-medium rounded-lg focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-none py-3.5 px-2.5 w-full md:py-2.5"
          onClick={() => handleTabs(3)}
        >
          Siguiente
        </button>
      </div>
    </>
  );
};
