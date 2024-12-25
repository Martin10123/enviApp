interface InputWithIconProps {
  label: string;
  placeholder: string;
  id: string;
  svg: string;
  type: string;
}

export const InputWithIcon = ({
  id,
  placeholder,
  svg,
  label,
  type,
}: InputWithIconProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="w-max block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
          <img className="size-4" src={svg} alt={label} />
        </div>
        <input
          type={type}
          id={id}
          className="block py-3.5 px-2.5 w-full z-20 ps-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 mb-2 md:py-2.5"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
