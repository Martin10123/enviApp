import { useState, useEffect } from "react";

interface AlertRegisterCompleteOBasicProps {
  alertMessage: boolean;
  handleCompleteForm: (ic: boolean) => void;
  setAlertMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AlertRegisterCompleteOBasic = ({
  alertMessage,
  handleCompleteForm,
  setAlertMessage,
}: AlertRegisterCompleteOBasicProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (alertMessage) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 200);
    }
  }, [alertMessage]);

  const handleCloseVisibility = () => {
    setIsVisible(false);
    setAlertMessage(false);
  };

  return (
    <div
      className={`size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none transition-opacity duration-500 ease-in-out bg-black bg-opacity-50 backdrop-blur-sm ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`scale-95 transition-transform duration-500 ease-in-out sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center ${
          isVisible ? "scale-100" : "scale-95"
        }`}
      >
        <div className="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
          <div className="flex justify-between items-center py-3 px-4 border-b">
            <h3 className="font-bold text-gray-800">Aviso</h3>
            <button
              type="button"
              onClick={handleCloseVisibility}
              className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
            >
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
          <div className="p-4 overflow-y-auto">
            <p className="mt-1 text-gray-800 dark:text-neutral-400">
              Te gustaría solo completar el registro básico? Si es así, haz caso
              omiso a esta mensaje, de lo contrario puedes llenar el registro
              completo.
            </p>
          </div>
          <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
            <button
              type="button"
              onClick={() => handleCompleteForm(false)}
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
            >
              Registro básico
            </button>
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              onClick={() => handleCompleteForm(true)}
            >
              Registro completo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
