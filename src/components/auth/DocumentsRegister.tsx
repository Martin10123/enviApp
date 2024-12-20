import { UploadFilesRegister } from "@/components";

export const DocumentsRegisters = () => {
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
    </>
  );
};
