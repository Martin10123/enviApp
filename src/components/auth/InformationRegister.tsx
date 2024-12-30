import {
  Country,
  FormElement,
  UserFormInterface,
  IdCoumentType,
} from "@/interfaces/interfaces";

interface InformationRegisterProps {
  formState: UserFormInterface;
  onInputChange: (e: React.ChangeEvent<FormElement>) => void;
  countries: Country[];
  idDocumentType: IdCoumentType[];
  loadingDocument: boolean;
}

export const InformationRegister = ({
  formState,
  onInputChange,
  countries,
  idDocumentType,
  loadingDocument,
}: InformationRegisterProps) => {
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
            name="firstName"
            value={formState.firstName}
            onChange={onInputChange}
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
            name="lastName"
            value={formState.lastName}
            onChange={onInputChange}
          />
        </div>
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
          name="codeCountry"
          value={formState.codeCountry}
          onChange={onInputChange}
        >
          <option>Elige un país</option>
          {countries.map((country) => (
            <option key={country.name} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="Telefono"
          className="w-max block mb-2 text-sm font-medium text-gray-900"
        >
          Telefono
        </label>
        <div className="flex items-center">
          <div className="flex-shrink-0 z-10 inline-flex items-center gap-2 py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100">
            {formState.codeCountry === "CO" ? (
              <img src="/assets/colombia.svg" alt="Colombia" />
            ) : (
              <img src="/assets/usa.svg" alt="Usa" />
            )}
            {formState.codeCountry === "CO" ? "+57" : "+1"}
          </div>

          <div className="relative w-full">
            <input
              type="text"
              id="phone-input"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              name="phone"
              value={formState.phone}
              onChange={onInputChange}
            />
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor="tipoDocumento"
          className="w-max block mb-2 text-sm font-medium text-gray-900"
        >
          Documento
        </label>
        <select
          id="tipoDocumento"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 px-2.5 mb-2 md:py-2.5"
          name="idDocumentType"
          value={formState.idDocumentType}
          onChange={onInputChange}
          disabled={loadingDocument}
        >
          <option value="">Elige un tipo de documento</option>
          {idDocumentType.map((documentType) => (
            <option key={documentType.id} value={documentType.id}>
              {documentType.name}
            </option>
          ))}
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
          name="idNumber"
          value={formState.idNumber}
          onChange={onInputChange}
        />
      </div>
    </>
  );
};
