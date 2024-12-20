export const InformationRegister = () => {
  return (
    <>
      <div className="grid gap-2 lg:grid-cols-2">
        <div>
          <label
            htmlFor="Nombre"
            className="w-max block mb-2 text-sm font-medium text-gray-900"
          >
            Nombre
          </label>
          <input
            type="text"
            id="Nombre"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 px-2.5 mb-2 md:py-2.5"
            placeholder="Nombre..."
          />
        </div>
        <div>
          <label
            htmlFor="Apellido"
            className="w-max block mb-2 text-sm font-medium text-gray-900"
          >
            Apellido
          </label>
          <input
            type="text"
            id="Apellido"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 px-2.5 mb-2 md:py-2.5"
            placeholder="Apellido..."
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="tipoDocumento"
          className="w-max block mb-2 text-sm font-medium text-gray-900"
        >
          Tipo de documento
        </label>
        <select
          id="tipoDocumento"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 px-2.5 mb-2 md:py-2.5"
        >
          <option>Elige un tipo de documento</option>
          <option value="cedula">Cedula</option>
          <option value="dni">DNI</option>
          <option value="pasaporte">Pasaporte</option>
          <option value="cedula de extranjero">Cédula de extranjero</option>
          <option value="otro">Otro</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="Identificacion"
          className="w-max block mb-2 text-sm font-medium text-gray-900"
        >
          Identificación
        </label>
        <input
          type="number"
          id="Identificacion"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 px-2.5 mb-2 md:py-2.5"
          placeholder="Identificación..."
        />
      </div>
      <div>
        <label
          htmlFor="Correo"
          className="w-max block mb-2 text-sm font-medium text-gray-900"
        >
          Correo
        </label>
        <input
          type="email"
          id="Correo"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 px-2.5 mb-2 md:py-2.5"
          placeholder="Correo..."
        />
      </div>
      <div>
        <label
          htmlFor="Pais"
          className="w-max block mb-2 text-sm font-medium text-gray-900"
        >
          País
        </label>
        <select
          id="Pais"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 px-2.5 mb-2 md:py-2.5"
        >
          <option>Elige un pais</option>
          <option value="colombia">Colombia</option>
          <option value="argentina">Argentina</option>
          <option value="chile">Chile</option>
          <option value="peru">Perú</option>
          <option value="mexico">México</option>
          <option value="españa">España</option>
          <option value="otro">Otro</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="NumeroTelefono"
          className="w-max block mb-2 text-sm font-medium text-gray-900"
        >
          Número de telefono
        </label>
        <input
          type="number"
          id="NumeroTelefono"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 px-2.5 mb-2 md:py-2.5"
          placeholder="Número de telefono..."
        />
      </div>
    </>
  );
};
