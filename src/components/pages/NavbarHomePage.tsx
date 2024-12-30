import { avatar1 } from "@/images";
import { useState } from "react";
import { DropdownUserProfile } from "./DropdownUserProfile";
import { ItemListNav } from "./ItemListNav";

interface NavbarHomePageProps {
  handleOpenSideBar: () => void;
}

export const NavbarHomePage = ({ handleOpenSideBar }: NavbarHomePageProps) => {
  const [openProfileDrop, setOpenProfileDrop] = useState(false);

  const handleOpenProfileDrop = () => {
    setOpenProfileDrop(!openProfileDrop);
  };

  return (
    <header className="w-full flex justify-between items-center p-2 bg-white border-b sticky top-0 z-50 lg:max-w-[80rem] lg:m-auto lg:rounded-b-lg lg:shadow-sm">
      <figure>
        <img
          className="w-12 h-auto"
          src="/assets/logoEnviApp.svg"
          alt="Logo enviapp"
        />
      </figure>

      <nav>
        <ul className="flex items-center gap-2">
          <ItemListNav d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
          <ItemListNav d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z" />
          <ItemListNav d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.193-.538 1.193H5.538c-.538 0-.538-.6-.538-1.193 0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365Zm-8.134 5.368a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M8.54 17.901a3.48 3.48 0 0 0 6.92 0H8.54Z" />
          <ItemListNav
            d="M6 6h8m-8 4h12M6 14h8m-8 4h12"
            onClick={handleOpenSideBar}
            hidden
          />

          <li className="flex gap-3 relative">
            <img
              className="size-10 rounded-md ring-2 ring-white cursor-pointer"
              src={avatar1}
              alt="Coffee Mug"
              onClick={handleOpenProfileDrop}
            />

            {openProfileDrop && (
              <DropdownUserProfile
                handleOpenProfileDrop={handleOpenProfileDrop}
              />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
