import { colourStyles } from "@/helpers/stylesSelect";
import Select from "react-select";
import { InputWithIcon } from "../InputWithIcon";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const PostPackage = () => {
  return (
    <div className="fixed top-0 left-0 bg-[#ececec] z-[99999] w-full h-screen">
      <div>
        <nav className="flex items-center justify-between p-4 border-b bg-white">
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

          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 duration-300">
            Crear
          </button>
        </nav>

        <form className="">
          <div>
            <label
              htmlFor="text"
              className="w-max block mb-2 text-sm font-medium text-gray-900"
            >
              Origen
            </label>

            <Select options={options} styles={colourStyles} />
          </div>
          <div>
            <label
              htmlFor="text"
              className="w-max block mb-2 text-sm font-medium text-gray-900"
            >
              Destino
            </label>

            <Select options={options} styles={colourStyles} />
          </div>

          <div>
            <label
              htmlFor="email"
              className="w-max block mb-2 text-sm font-medium text-gray-900"
            >
              Descripción
            </label>
            <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3.5 px-2.5 mb-2 md:py-2.5" />
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
