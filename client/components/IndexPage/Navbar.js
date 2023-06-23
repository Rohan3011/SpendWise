import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed h-10 top-0 w-full z-10 ">
      <div className="bg-white py-3 md:px-[100px] flex flex-col md:flex-row items-center space-x-4 border-b">
        <NavbarLogo />
        <NavbarLinks />
        <NavbarActions />
      </div>
    </div>
  );
};

export default Navbar;

const NavbarLogo = () => {
  return (
    <div className="flex items-center">
      <i>MyLogo</i>
    </div>
  );
};

const NavbarLinks = () => {
  return (
    <div className="grow flex flex-col md:flex-row items-center gap-2">
      <NavbarLink title={"Home"} link={"#home"} />
      <NavbarLink title={"Features"} link={"#features"} />
      <NavbarLink title={"Resoures"} link={"#resoures"} />
    </div>
  );
};

const NavbarLink = ({ title, link }) => {
  return (
    <Link passHref href={link}>
      <div className="group px-4 py-2 border border-transparent hover:shadow hover:border-gray-500 active:outline transition-all duration-200 outline-gray-500 rounded-lg cursor-pointer">
        <span className="text-slate-800 text-base font-medium group-hover:text-slate-700">
          {title}
        </span>
      </div>
    </Link>
  );
};

const NavbarActions = () => {
  return (
    <div className="flex gap-2">
      <Link passHref href="/login">
        <button className="group box-border px-6 py-2 flex justify-center items-center transition-all duration-200 ease-linear rounded-md  shadow-zinc-600 hover:shadow-none bg-white text-gray-700 hover:opacity-95 active:outline border-2 border-gray-500">
          <span className="text-inherit leading-4 text-base font-semibold select-none cursor-pointer">
            Login
          </span>
        </button>
      </Link>
      <Link passHref href="/signup">
        <button
          className="text-lg px-6 py-2 rounded-lg bg-blue-700
     hover:bg-blue-600 text-slate-100 hover:text-slate-50 active:outline outline-gray-500"
        >
          <span className="text-inherit leading-4 text-base font-semibold select-none cursor-pointer">
            Signup
          </span>
        </button>
      </Link>
    </div>
  );
};
