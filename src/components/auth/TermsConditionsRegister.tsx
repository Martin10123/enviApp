import { FormElement, UserFormInterface } from "@/interfaces/interfaces";

interface TermsConditionsRegisterProps {
  formState: UserFormInterface;
  onInputChange: (e: React.ChangeEvent<FormElement>) => void;
}

export const TermsConditionsRegister = ({
  formState,
  onInputChange,
}: TermsConditionsRegisterProps) => {
  return (
    <>
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
          name="email"
          value={formState.email}
          onChange={onInputChange}
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
          name="password"
          value={formState.password}
          onChange={onInputChange}
        />
      </div>
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id="termsConditions"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
          name="termsConditions"
          checked={formState.termsConditions}
          onChange={onInputChange}
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
    </>
  );
};
