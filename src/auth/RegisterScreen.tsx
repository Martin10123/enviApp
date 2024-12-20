import {
  AlertRegisterCompleteOBasic,
  DocumentsRegisters,
  InformationRegister,
  ListOptionsRegister,
  TermsConditionsRegister,
} from "@/components";
import { AuthTemplate } from "@/templates/AuthTemplate";
import { useState } from "react";

export const RegisterScreen = () => {
  const [tabs, setTabs] = useState(1);
  const [alertMessage, setAlertMessage] = useState(false);
  const [isCompleteForm, setIsCompleteForm] = useState(false);

  const handleTabs = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    tab: number
  ) => {
    e.preventDefault();

    if (!isCompleteForm && tabs === 1) {
      setAlertMessage(true);
      return;
    }

    if (!isCompleteForm && tabs === 3) {
      setTabs(1);
      return;
    }

    if (isCompleteForm && tab === 1) {
      setIsCompleteForm(false);
    }

    setTabs(tab);
  };

  const handleCompleteForm = (isCompleteForm: boolean) => {
    setIsCompleteForm(isCompleteForm);

    if (isCompleteForm) {
      setTabs(2);
      setAlertMessage(false);
    } else {
      setTabs(3);
      setAlertMessage(false);
    }
  };

  return (
    <AuthTemplate titleRedirect="¿Ya tienes cuenta?" linkRedirect="/login">
      <ListOptionsRegister tabs={tabs} />

      <form className="grid gap-2">
        {tabs === 1 && <InformationRegister />}
        {tabs === 2 && <DocumentsRegisters />}
        {tabs === 3 && (
          <TermsConditionsRegister isCompleteForm={isCompleteForm} />
        )}

        <div
          className={`grid gap-2 ${tabs > 1 ? "grid-cols-2" : "grid-cols-1"}`}
        >
          {tabs > 1 && (
            <button
              type="button"
              onClick={(e) => handleTabs(e, tabs - 1)}
              className="bg-blue-500 mt-4 text-white text-sm font-medium rounded-lg focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-none py-3.5 px-2.5 w-full md:py-2.5"
            >
              Regresar
            </button>
          )}

          {tabs < 3 && (
            <button
              type="button"
              onClick={(e) => handleTabs(e, tabs + 1)}
              className="bg-blue-500 mt-4 text-white text-sm font-medium rounded-lg focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-none py-3.5 px-2.5 w-full md:py-2.5"
            >
              Siguiente
            </button>
          )}

          {tabs === 3 && (
            <button
              type="submit"
              className="bg-blue-500 mt-4 text-white text-sm font-medium rounded-lg focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-none py-3.5 px-2.5 w-full md:py-2.5"
            >
              Registrarse
            </button>
          )}
        </div>
      </form>

      {alertMessage && (
        <AlertRegisterCompleteOBasic
          alertMessage={alertMessage}
          setAlertMessage={setAlertMessage}
          handleCompleteForm={handleCompleteForm}
        />
      )}
    </AuthTemplate>
  );
};
