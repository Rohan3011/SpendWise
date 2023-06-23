import Link from "next/link";
import { HiMenuAlt2, HiX, HiSearch, HiOutlineBell } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../redux/slices/sidebarSlice";

const Header = ({ alert }) => {
  return (
    <div className="relative">
      <div className="navbar bg-base-100 rounded h-14 flex z-10">
        <HeaderRight />
        <HeaderCenter />
        <HeaderLeft />
      </div>
    </div>
  );
};

export default Header;

const HeaderRight = () => {
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(toggle());
  };
  return (
    <div
      className="px-2 flex justify-center items-center"
      onClick={toggleSidebar}
    >
      <HiMenuAlt2 className="h-5 w-5 swap-on fill-current text-slate-600" />
    </div>
  );
};

const HeaderCenter = () => {
  const [header, setHeader] = useState("");

  useEffect(() => {
    const getHeader = () => {
      let data = window.location.pathname;
      data = data.charAt(1).toUpperCase() + data.slice(2);
      setHeader(data);
    };
    getHeader();
  }, [header]);
  return (
    <div className="flex grow justify-between items-center">
      <Link href={"/"}>
        <a className="hidden md:inline-block text-xl font-semibold text-slate-600">
          SpendWise
        </a>
      </Link>
      <input
        className="w-full max-w-md ml-2 border p-1.5 bg-stone-50 hover:bg-white transform transition duration-500 outline focus:outline-blue-500 outline-offset-0 focus:border-blue-100 focus:z-10  focus-within:shadow-sm rounded-md overflow-x-auto "
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

const HeaderLeft = ({}) => {
  return (
    <div className="px-4 flex items-center">
      <button className="p-2 rounded  flex items-center justify-center  cursor-pointer hover:bg-gray-200">
        <HiSearch className="h-5 w-5 text-slate-600" />
      </button>
      <button className="p-2 rounded  flex items-center justify-center cursor-pointer hover:bg-gray-200">
        <HiOutlineBell className="h-5 w-5 text-slate-600" />
      </button>
    </div>
  );
};
