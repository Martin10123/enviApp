import { useDisableScroll } from "@/hooks/useDisabledScroll";
import { useState } from "react";

interface LightboxProps {
  images: string[];
  isOpen: boolean;
  initialIndex?: number;
  onClose: () => void;
}

export const CustomLightbox = ({
  images,
  isOpen,
  initialIndex = 0,
  onClose,
}: LightboxProps) => {
  useDisableScroll(isOpen);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!isOpen) return null;

  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full p-4 bg-gray-900 bg-opacity-50 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="size-8 absolute top-5 right-5 flex justify-center items-center cursor-pointer bg-gray-500 bg-opacity-55 text-white rounded-full hover:bg-gray-600"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="flex items-center justify-center mb-4">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="rounded-lg max-h-[70vh] w-auto"
          />
        </div>

        {images.length > 1 && (
          <div className="overflow-x-auto py-2">
            <div className="grid grid-flow-col gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`cursor-pointer ${
                    index === currentIndex
                      ? "ring-2 ring-blue-500 rounded-lg"
                      : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-24 w-24 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {images.length > 1 && (
          <>
            <button
              className="size-8 absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-55 text-white rounded-full p-2 hover:bg-gray-600 flex justify-center items-center"
              onClick={prevImage}
            >
              <svg
                className="w-6 h-6 text-white"
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
                  d="m15 19-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="size-8 absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-55 text-white rounded-full p-2 hover:bg-gray-600 flex justify-center items-center"
              onClick={nextImage}
            >
              <svg
                className="w-6 h-6 text-white"
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
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};
