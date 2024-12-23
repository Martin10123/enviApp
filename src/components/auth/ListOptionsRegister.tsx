export const ListOptionsRegister = () => {
  return (
    <ol className="flex items-center w-full">
      <li
        className={`flex w-full items-center ${
          true
            ? "text-blue-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block"
            : "after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block"
        }`}
      >
        <span
          className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${
            true
              ? "bg-blue-100 text-blue-600"
              : true
              ? "bg-blue-200 text-blue-700"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          <svg
            className="w-4 h-4 lg:w-5 lg:h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </span>
      </li>
    </ol>
  );
};
