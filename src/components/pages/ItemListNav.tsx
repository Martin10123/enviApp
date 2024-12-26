interface ItemListNavProps {
  d: string;
  onClick?: () => void;
  hidden?: boolean;
}

export const ItemListNav = ({ d, onClick, hidden }: ItemListNavProps) => {
  return (
    <li
      className={`flex gap-3 p-2 bg-gray-100 rounded-lg cursor-pointer ${
        hidden ? "lg:hidden" : ""
      }`}
      onClick={onClick}
    >
      <svg
        className="size-7 text-black"
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
          d={d}
        />
      </svg>
    </li>
  );
};
