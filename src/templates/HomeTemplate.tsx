import { NavbarHomePage } from "@/components/pages/NavbarHomePage";

interface HomeTemplateProps {
  children: React.ReactNode | React.ReactNode[];
  handleOpenSideBar?: () => void;
}

export const HomeTemplate = ({
  children,
  handleOpenSideBar,
}: HomeTemplateProps) => {
  return (
    <>
      <NavbarHomePage handleOpenSideBar={handleOpenSideBar || (() => {})} />

      <main className="w-full p-3 before:content before:w-full before:h-full lg:max-w-[85rem] lg:m-auto lg:px-0 before:fixed before:top-0 before:left-0 before:-z-50 before:bg-[#e4e4e4] before:bg-opacity-50 before:backdrop-filter before:duration-200 before:ease-in-out">
        {children}
      </main>
    </>
  );
};
