import { AlertRegisterCompleteOBasic } from "@/components/auth/AlertRegisterCompleteOBasic";
import { DocumentsRegisters } from "@/components/auth/DocumentsRegister";
import { InformationRegister } from "@/components/auth/InformationRegister";
import { ListOptionsRegister } from "@/components/auth/ListOptionsRegister";
import { TermsConditionsRegister } from "@/components/auth/TermsConditionsRegister";
import { useRegister } from "@/hooks/useRegister";

import { AuthTemplate } from "@/templates/AuthTemplate";

export const RegisterScreen = () => {
  const {
    tabs,
    alertMessage,
    countries,
    error,
    formState,
    handleCompleteForm,
    handleTabs,
    idDocumentType,
    loadingDocument,
    loadingSaveForm,
    onInputChange,
    onSubmitForm,
    setAlertMessage,
  } = useRegister();

  return (
    <AuthTemplate titleRedirect="¿Ya tienes cuenta?" linkRedirect="/auth/login">
      <ListOptionsRegister tabs={tabs} />

      <form className="grid gap-2" onSubmit={onSubmitForm}>
        {tabs === 1 && (
          <InformationRegister
            formState={formState}
            onInputChange={onInputChange}
            countries={countries}
            idDocumentType={idDocumentType}
            loadingDocument={loadingDocument}
          />
        )}
        {tabs === 2 && <DocumentsRegisters />}
        {tabs === 3 && (
          <TermsConditionsRegister
            formState={formState}
            onInputChange={onInputChange}
          />
        )}

        <div
          className={`grid gap-2 ${tabs > 1 ? "grid-cols-2" : "grid-cols-1"}`}
        >
          {tabs > 1 && (
            <button
              type="button"
              onClick={(e) => handleTabs(e, tabs - 1)}
              className="bg-gray-400 mt-4 text-white text-sm font-medium rounded-lg focus:ring-blue-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-none py-3.5 px-2.5 w-full md:py-2.5"
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
              {loadingSaveForm ? "Guardando..." : "Registrarse"}
            </button>
          )}
        </div>

        {error && (
          <div className="text-red-500 text-sm font-medium text-center mt-2">
            {error}
          </div>
        )}
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
