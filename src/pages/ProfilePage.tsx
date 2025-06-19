import { CardProductPage } from "@/components/pages/CardProductPage";
import { ProfileListInformation } from "@/components/pages/ProfileListInformation";
import { avatar1 } from "@/images";
import { AuthState } from "@/interfaces/AuthInterfaces";
import { HomeTemplate } from "@/templates/HomeTemplate";
import { useState } from "react";

export const ProfilePage = () => {
  const [tabs, setTabs] = useState(1);
  const [userState] = useState<AuthState>(
    JSON.parse(localStorage.getItem("userState") || "") || ""
  );

  const handleTabs = (tab: number) => {
    setTabs(tab);
  };

  return (
    <HomeTemplate>
      <div>
        <div className="bg-gray-300 w-full h-80 rounded-b-xl absolute top-0 left-0 -z-50 lg:max-w-[85rem] lg:left-1/2 lg:transform lg:-translate-x-1/2"></div>
        <div className="pt-32 w-full flex items-center justify-center flex-col">
          <img
            className="size-56 rounded-full shadow-lg"
            src={userState.avatarUrl || avatar1}
            alt="Imagen de perfil"
          />

          <div className="flex flex-col items-center justify-center mt-4">
            <h1 className="m-0 text-4xl font-bold text-gray-800 capitalize">
              {userState.firstName} {userState.lastName}
            </h1>
            <p className="text-gray-500 text-sm font-semibold text-center">
              {userState.email}
            </p>
          </div>
        </div>

        <div className="bg-white w-full rounded-t-xl mt-12 mb-4">
          <ul className="flex">
            <li
              className={`w-max rounded-md flex items-center justify-start gap-1 p-4 text-black cursor-pointer ${
                tabs === 1
                  ? "bg-gray-100 border-b border-gray-500 cursor-auto"
                  : ""
              }`}
              onClick={() => handleTabs(1)}
            >
              <svg
                className="w-6 h-6 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              Perfil
            </li>
            <li
              className={`w-max rounded-md flex items-center justify-start gap-1 p-4 text-black cursor-pointer ${
                tabs === 2
                  ? "bg-gray-100 border-b border-gray-500 cursor-auto"
                  : ""
              }`}
              onClick={() => handleTabs(2)}
            >
              <svg
                className="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h1m4-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7.441 1.559a1.907 1.907 0 0 1 0 2.698l-6.069 6.069L10 19l.674-3.372 6.07-6.07a1.907 1.907 0 0 1 2.697 0Z"
                />
              </svg>
              Sobre mi
            </li>
          </ul>
        </div>
      </div>

      {tabs === 1 && (
        <div className="grid gap-4">
          <CardProductPage />
        </div>
      )}

      {tabs === 2 && (
        <div className="bg-white p-4">
          <h2 className="text-3xl mb-1 font-bold text-gray-800">Sobre mi</h2>
          <p className="text-gray-500 text-sm font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            dolorum, voluptates, quas, autem ratione quia quod quibusdam
            repudiandae quae amet quidem.
          </p>

          <div className="grid grid-cols-1 gap-4 mt-8">
            <div className="bg-white rounded-md">
              <h3 className="text-xl font-bold text-gray-800">Información</h3>
              <div className="grid grid-cols-1 gap-2 mt-2">
                <ProfileListInformation
                  title="Nombre"
                  value={`${userState.firstName} ${userState.lastName}`}
                />
                <ProfileListInformation
                  title="Correo"
                  value={userState.email}
                />

                <ProfileListInformation
                  title="Teléfono"
                  value={userState.phone}
                />

                <ProfileListInformation
                  title="Pais"
                  value={userState.country.name}
                />

                <ProfileListInformation
                  title="Fecha de creación"
                  value={new Date(userState.creationDate).toLocaleDateString(
                    "es-ES"
                  )}
                />
              </div>
            </div>

            <button
              className="w-full bg-blue-500 text-white font-semibold rounded-md p-3 mt-4"
              type="button"
            >
              Editar perfil
            </button>
          </div>
        </div>
      )}
    </HomeTemplate>
  );
};
