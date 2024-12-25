import { colourStyles } from "@/helpers/stylesSelect";
import { InputWithIcon } from "../InputWithIcon";
import { countries } from "@/helpers/optionsCountries";
import Select from "react-select";
import { useDropzone } from "react-dropzone";
import { useCallback, useEffect, useState } from "react";
import { useDisableScroll } from "@/hooks/useDisabledScroll";

interface PreviewFile extends File {
  preview: string;
}

interface PostPackageProps {
  handleCreatePost: () => void;
}

export const PostPackage = ({ handleCreatePost }: PostPackageProps) => {
  useDisableScroll(true);
  const [previewFiles, setPreviewFiles] = useState<PreviewFile[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const updatedFiles = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file as Blob),
      })
    );

    setPreviewFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
  });

  const removeFile = (file: PreviewFile) => {
    URL.revokeObjectURL(file.preview);
    const newFiles = previewFiles.filter((previewFile) => previewFile !== file);

    setPreviewFiles(newFiles);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(handleCreatePost, 300);
  };

  return (
    <div
      className={`fixed top-0 left-0 bg-[#ececec] z-[99999] w-full h-full transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="overflow-auto h-full">
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

          <button className="text-blue-500 px-4 py-2 rounded-lg font-semibold hover:text-blue-600 duration-300">
            Crear
          </button>
        </nav>

        <form className="p-4 flex flex-col gap-2">
          <div>
            <label
              htmlFor="text"
              className="w-max block mb-2 text-sm font-medium text-gray-900"
            >
              Fotos
            </label>

            <div
              {...getRootProps()}
              className="cursor-pointer p-12 flex justify-center bg-white border border-dashed border-gray-300 rounded-xl"
            >
              <div className="text-center">
                <span className="inline-flex justify-center items-center size-16 bg-gray-100 text-gray-800 rounded-full">
                  <svg
                    className="shrink-0 size-6"
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
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" x2="12" y1="3" y2="15"></line>
                  </svg>
                </span>

                <input {...getInputProps()} />

                <div className="mt-4 flex flex-wrap justify-center text-sm leading-6 text-gray-600">
                  <span className="pe-1 font-medium text-gray-800">
                    {isDragActive
                      ? "Sueltalo aquí..."
                      : "Arrastra y sueltalas imagenes aquí o"}{" "}
                  </span>
                  <span className="bg-white font-semibold text-blue-600 hover:text-blue-700 rounded-lg decoration-2 hover:underline focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2">
                    Selecciona las imagenes
                  </span>
                </div>

                <p className="mt-1 text-xs text-gray-400 dark:text-neutral-400">
                  PNG, JPG, JPEG
                </p>
              </div>
            </div>

            {previewFiles.length != 0 && (
              <ul className="bg-white rounded-lg py-2 mt-4">
                {previewFiles.map((file) => (
                  <li
                    className="p-2 rounded-lg border-b border-gray-300"
                    key={file.name}
                  >
                    <figure className="flex gap-2">
                      <img
                        className="size-20 rounded-lg object-contain"
                        src={file.preview}
                        alt={file.name}
                      />

                      <figcaption>
                        <h1 className="text-sm font-semibold text-gray-900 mb-1">
                          {file.name}
                        </h1>
                        <p className="text-xs text-gray-400">
                          {file.size / 1000} KB
                        </p>
                      </figcaption>
                    </figure>

                    <button
                      className="w-full px-2 py-1 rounded-lg font-semibold flex justify-end"
                      onClick={() => removeFile(file)}
                    >
                      <img src="/assets/trash.svg" alt="trash" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <label
              htmlFor="text"
              className="w-max block mb-2 text-sm font-medium text-gray-900"
            >
              Origen
            </label>

            <Select
              options={countries}
              styles={colourStyles}
              placeholder="Origen..."
            />
          </div>
          <div>
            <label
              htmlFor="text"
              className="w-max block mb-2 text-sm font-medium text-gray-900"
            >
              Destino
            </label>

            <Select
              options={countries}
              styles={colourStyles}
              placeholder="Destino..."
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="w-max block mb-2 text-sm font-medium text-gray-900"
            >
              Descripción
            </label>
            <textarea
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 px-2.5 mb-2 md:py-2.5"
              placeholder="Descripción..."
              rows={8}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <label className="w-max col-span-2 block mb-2 text-sm font-medium text-gray-900">
              Dimensiones
            </label>

            <InputWithIcon
              id="alto"
              label="Alto"
              placeholder="Alto..."
              svg="/assets/height.svg"
              type="number"
            />
            <InputWithIcon
              id="ancho"
              label="Ancho"
              placeholder="Ancho..."
              svg="/assets/width.svg"
              type="number"
            />
            <InputWithIcon
              id="largo"
              label="Largo"
              placeholder="Largo..."
              svg="/assets/ruler.svg"
              type="number"
            />
            <InputWithIcon
              id="peso"
              label="Peso"
              placeholder="Peso..."
              svg="/assets/weight.svg"
              type="number"
            />
          </div>

          <InputWithIcon
            id="precio"
            label="Precio"
            placeholder="Precio..."
            svg="/assets/money.svg"
            type="number"
          />
        </form>
      </div>
    </div>
  );
};
