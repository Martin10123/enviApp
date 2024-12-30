export const DocumentsRegisters = () => {
  return (
    <div className="grid gap-6">
      <div>
        <label className="text-base text-gray-500 font-semibold mb-2 block">
          Copia de cédula
        </label>
        <input
          type="file"
          className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded"
        />
      </div>
      <div>
        <label className="text-base text-gray-500 font-semibold mb-2 block">
          Cuenta bancaria
        </label>
        <input
          type="file"
          className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded"
        />
      </div>
      <div>
        <label className="text-base text-gray-500 font-semibold mb-2 block">
          Referencias personales
        </label>
        <input
          type="file"
          className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded"
        />
      </div>
      <div>
        <label className="text-base text-gray-500 font-semibold mb-2 block">
          Antecedentes judiciales
        </label>
        <input
          type="file"
          className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded"
        />
      </div>
    </div>
  );
};
