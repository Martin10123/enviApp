import { CardProductPage } from "@/components/pages/CardProductPage";
import { PostPackage } from "@/components/pages/PostPackage";
import { SidebarNotificationPage } from "@/components/pages/SidebarNotificationPage";
import { SidebarProfilePage } from "@/components/pages/SidebarProfilePage";
import { TextareaPostPage } from "@/components/pages/TextareaPostPage";
import { HomeTemplate } from "@/templates/HomeTemplate";
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
    <HomeTemplate handleOpenSideBar={handleOpenSideBar}>
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
    </HomeTemplate>
  );
};
