import { AuthContext } from "@/context/AuthContext";
import { useCloseModal } from "@/hooks/useCloseClickOutside";
import { avatar1 } from "@/images";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DropdownUserProfile = ({
  handleOpenProfileDrop,
}: {
  handleOpenProfileDrop: () => void;
}) => {
  const handleClose = () => {
    setIsVisible(false);

    setTimeout(handleOpenProfileDrop, 300);
  };

  const { signOut, userState } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useCloseModal<HTMLDivElement>(handleClose);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);

    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <div
      className={
        `w-64 absolute right-0 bg-white top-12 p-4 shadow-lg rounded-lg z-50 transition-all duration-300 ` +
        `${isVisible ? "opacity-100" : "opacity-0"}`
      }
      ref={ref}
    >
      <div className="w-full">
        <div>
          <figure className="flex items-center gap-4">
            <img
              className="inline-block size-14 rounded-full object-cover ring-2 ring-white"
              src={userState?.avatarUrl || avatar1}
              alt="Foto de perfil"
            />
            <figcaption>
              <h3 className="text-lg font-bold">
                {userState?.firstName} {userState?.lastName}
              </h3>
              <p className="text-sm text-gray-500 max-w-[150px] truncate">
                {userState?.email}
              </p>
            </figcaption>
          </figure>

          <button
            className="w-full p-2 mt-2 bg-gray-100 rounded text-blue-500 hover:bg-gray-200 duration-300"
            onClick={() => navigate(`/${userState?.id}`)}
          >
            Ver perfil
          </button>
        </div>

        <ul className="pt-4">
          <li className="flex gap-2 p-2 py-3 border-b rounded-b-lg drop-shadow-xl hover:bg-gray-100 duration-300 text-gray-500 items-center cursor-pointer">
            <svg
              className="size-7 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              />
            </svg>
            Configuraciones
          </li>
          <li className="flex gap-2 p-2 py-3 border-b rounded-b-lg drop-shadow-xl hover:bg-gray-100 duration-300 text-gray-500 items-center cursor-pointer">
            <svg
              className="size-7 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m13.46 8.291 3.849-3.849a1.5 1.5 0 0 1 2.122 0l.127.127a1.5 1.5 0 0 1 0 2.122l-3.84 3.838a4 4 0 0 0-2.258-2.238Zm0 0a4 4 0 0 1 2.263 2.238l3.662-3.662a8.961 8.961 0 0 1 0 10.27l-3.676-3.676m-2.25-5.17 3.678-3.676a8.961 8.961 0 0 0-10.27 0l3.662 3.662a4 4 0 0 0-2.238 2.258L4.615 6.863a8.96 8.96 0 0 0 0 10.27l3.662-3.662a4 4 0 0 0 2.258 2.238l-3.672 3.676a8.96 8.96 0 0 0 10.27 0l-3.662-3.662a4.001 4.001 0 0 0 2.238-2.262m0 0 3.849 3.848a1.5 1.5 0 0 1 0 2.122l-.127.126a1.499 1.499 0 0 1-2.122 0l-3.838-3.838a4 4 0 0 0 2.238-2.258Zm.29-1.461a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-7.718 1.471-3.84 3.838a1.5 1.5 0 0 0 0 2.122l.128.126a1.5 1.5 0 0 0 2.122 0l3.848-3.848a4 4 0 0 1-2.258-2.238Zm2.248-5.19L6.69 4.442a1.5 1.5 0 0 0-2.122 0l-.127.127a1.5 1.5 0 0 0 0 2.122l3.849 3.848a4 4 0 0 1 2.238-2.258Z"
              />
            </svg>
            Soporte
          </li>
          <li className="flex gap-2 p-2 py-3 border-b rounded-b-lg drop-shadow-xl hover:bg-gray-100 duration-300 text-gray-500 items-center cursor-pointer">
            <svg
              className="size-7 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7h1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11.5M7 14h6m-6 3h6m0-10h.5m-.5 3h.5M7 7h3v3H7V7Z"
              />
            </svg>
            Terminos y condiciones
          </li>
          <li
            className="flex gap-2 p-2 py-3 border-b rounded-b-lg drop-shadow-xl hover:bg-gray-100 duration-300 cursor-pointer"
            onClick={signOut}
          >
            <button className="flex items-center gap-2 text-red-500">
              <svg
                className="size-7 text-red-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
                />
              </svg>
              Cerrar sesión
            </button>
          </li>
          <li className="flex gap-2 p-2 py-3 border-b rounded-b-lg drop-shadow-xl">
            <div className="w-full flex gap-4">
              <span>
                Modo: <strong>Claro</strong>
              </span>

              <div className="w-full grid grid-cols-3 gap-2 justify-items-center">
                <button className="bg-blue-200 px-2 rounded-lg">
                  <svg
                    className="w-7 h-7 text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                    />
                  </svg>
                </button>
                <button className="bg-gray-100 px-2 rounded-lg">
                  <svg
                    className="w-7 h-7 text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
                    />
                  </svg>
                </button>
                <button className="bg-gray-100 px-2 rounded-lg">
                  <svg
                    className="w-7 h-7 text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
