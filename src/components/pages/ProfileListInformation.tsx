interface ProfileListInformationProps {
  title: string;
  value: string;
}

export const ProfileListInformation = ({
  title,
  value,
}: ProfileListInformationProps) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-gray-500 text-sm font-semibold">{title}</p>
      <p className="text-gray-800 text-sm font-semibold">{value}</p>
    </div>
  );
};
