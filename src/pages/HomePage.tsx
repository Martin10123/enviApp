import {
  CardProductPage,
  NavbarHomePage,
  SidebarProfilePage,
  TextareaPostPage,
} from "@/components";
import { useState } from "react";

export const HomePage = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleOpenSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <>
      <NavbarHomePage handleOpenSideBar={handleOpenSideBar} />

      <main className="w-full p-3 before:content before:w-full before:h-full before:fixed before:top-0 before:left-0 before:-z-50 before:bg-[#ebebeb] before:bg-opacity-50 before:backdrop-filter before:duration-200 before:ease-in-out">
        <div>
          <div>
            {openSideBar && (
              <SidebarProfilePage handleOpenSideBar={handleOpenSideBar} />
            )}

            <div>
              <TextareaPostPage />

              <div className="bg-gray-100 pt-4 flex items-center justify-center">
                <CardProductPage />
              </div>
            </div>

            <aside className=""></aside>
          </div>
        </div>
      </main>
    </>
  );
};
