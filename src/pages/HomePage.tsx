import {
  CardProductPage,
  NavbarHomePage,
  PostPackage,
  SidebarNotificationPage,
  SidebarProfilePage,
  TextareaPostPage,
} from "@/components";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [isScrollDisabled, setIsScrollDisabled] = useState(false);
  const [openCreatePost, setOpenCreatePost] = useState(false);

  const handleOpenSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  const handleCreatePost = () => {
    setOpenCreatePost(!openCreatePost);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenSideBar(true);
        setIsScrollDisabled(false);
      } else {
        setOpenSideBar(false);
        setIsScrollDisabled(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <NavbarHomePage handleOpenSideBar={handleOpenSideBar} />

      <main className="w-full p-3 before:content before:w-full before:h-full lg:max-w-[80rem] lg:m-auto lg:px-0 before:fixed before:top-0 before:left-0 before:-z-50 before:bg-[#e4e4e4] before:bg-opacity-50 before:backdrop-filter before:duration-200 before:ease-in-out">
        <div className="lg:grid gap-6 lg:grid-cols-[auto,1fr,auto]">
          {openSideBar && (
            <SidebarProfilePage
              isScrollDisabled={isScrollDisabled}
              handleOpenSideBar={handleOpenSideBar}
            />
          )}

          <div className="w-full flex flex-col items-center justify-center">
            <TextareaPostPage handleCreatePost={handleCreatePost} />

            <div className="bg-gray-100 pt-4 flex flex-col items-center gap-4">
              <CardProductPage isImages />
              <CardProductPage />
              <CardProductPage isImages />
              <CardProductPage />
            </div>
          </div>

          <SidebarNotificationPage />
        </div>

        {openCreatePost && <PostPackage handleCreatePost={handleCreatePost} />}
      </main>
    </>
  );
};
