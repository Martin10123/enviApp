import { useEffect, useState } from "react";
import { useDisableScroll } from "@/hooks/useDisabledScroll";
import { FormPostPackage } from "./FormPostPackage";
import { PreviewPostPackage } from "./PreviewPostPackage";

interface PostPackageProps {
  handleCreatePost: () => void;
}

export const PostPackage = ({ handleCreatePost }: PostPackageProps) => {
  useDisableScroll(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(handleCreatePost, 200);
  };

  return (
    <div
      className={`fixed top-0 left-0 bg-[#f5f5f5] z-[99999] w-full h-full transition-opacity ease-in-out lg:flex lg:justify-center lg:items-center backdrop-blur-sm lg:bg-[#ffffffb3] ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="overflow-auto h-full lg-min-w-[70%] lg:max-w-[70%] lg:h-[95%] lg:bg-white lg:rounded-lg lg:shadow-lg">
        <nav className="flex items-center justify-between p-2 border-b bg-white sticky top-0 z-50">
          <button onClick={handleClose}>
            <svg
              className="size-10 text-black cursor-pointer"
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
                d="M5 12h14M5 12l4-4m-4 4 4 4"
              />
            </svg>
          </button>

          <button className="text-blue-500 px-4 py-2 rounded-lg font-semibold hover:text-blue-600 duration-300 hover:underline">
            Crear
          </button>
        </nav>

        <div className="lg:grid lg:grid-cols-[40%,1fr]">
          <FormPostPackage />
          <PreviewPostPackage />
        </div>
      </div>
    </div>
  );
};
