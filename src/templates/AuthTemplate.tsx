import { enviAppLogin } from "../images";

interface AuthTemplateProps {
  children: React.ReactElement | React.ReactElement[];
  titleRedirect: string;
}

export const AuthTemplate = ({
  children,
  titleRedirect,
}: AuthTemplateProps) => {
  return (
    <section className="w-full p-4 flex justify-center items-center lg:grid lg:grid-cols-2 lg:h-screen before:content before:w-full before:h-screen before:fixed before:top-0 before:left-0 before:bg-[#ebebeb] before:-z-50">
      <div className="bg-[#ffffffa3] p-4 rounded-lg shadow-md grid gap-4 md:w-full xl:max-w-[60%] lg:mx-auto">
        <nav className="flex items-center gap-4">
          <img
            className="w-12 h-12 object-cover"
            src="./assets/logoEnviApp.svg"
            alt="Logo EnviApp"
          />
        </nav>

        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-gray-900">EnviApp</h2>
          <p className="text-base font-normal text-gray-500">
            la aplicación que te permite llevar tus productos de manera sencilla
            y eficiente a cualquier lugar del mundo.{" "}
            <a className="text-blue-500 rounded-lg py-3.5 font-medium cursor-pointer hover:underline">
              {titleRedirect}
            </a>
          </p>
        </div>

        {children}
      </div>

      <figure className="hidden lg:block">
        <img className="w-full" src={enviAppLogin} alt="EnviApp Login" />
      </figure>
    </section>
  );
};
