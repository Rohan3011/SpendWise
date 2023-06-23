import Link from "next/link";
import { Router, useRouter } from "next/router";
import {
  HiOutlineCash,
  HiOutlineChartBar,
  HiOutlineScale,
  HiTrendingUp,
  HiUser,
  HiOutlineCog,
  HiChevronDoubleLeft,
  HiX,
} from "react-icons/hi";
import { Transition } from "@headlessui/react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../redux/slices/sidebarSlice";
import { selectCurrentUser } from "../redux/slices/authSlice";
import { useProfileQuery } from "../redux/api/userApiSlice";
import { useEffect } from "react";
import { Skeleton } from "@mantine/core";

const Sidebar = () => {
  const { data: user, error, isLoading } = useProfileQuery();
  const dispatch = useDispatch();
  const router = useRouter();
  const toggleSidebar = () => {
    dispatch(toggle());
  };

  useEffect(() => {
    if (error) {
      router.push("/login");
    }
  }, [error]);

  return (
    <div className="w-60 h-full lg:flex flex-col">
      <div className="group flex h-20 px-4 items-center gap-2 border-b">
        {isLoading ? (
          <div className="flex gap-4 w-full p-2">
            <Skeleton height={40} circle />
            <div className=" flex-1 space-y-3 pt-2">
              <Skeleton height={8} radius="xl" />
              <Skeleton height={8} width="70%" radius="xl" />
            </div>
          </div>
        ) : (
          <>
            <div className="p-2 rounded-full bg-gray-300">
              <HiUser className="text-xl text-slate-500" />
            </div>
            <div className=" flex-1 flex flex-col pt-2">
              <span className="text-xl font-semibold text-slate-600 max-w-fit truncate">
                {user?.name}
              </span>
              <span className="text-xs font-semibold text-slate-500 max-w-fit truncate">
                {user?.email}
              </span>
            </div>
          </>
        )}

        <div
          className="lg:hidden group-hover:inline ml-auto p-2 rounded hover-animation"
          onClick={toggleSidebar}
        >
          <label htmlFor="my-drawer-2">
            <HiChevronDoubleLeft className="text-xl text-slate-700" />
          </label>
        </div>
      </div>
      <SidebarLinks active={router.pathname} />
    </div>
  );
};

export default Sidebar;

// const SidebarHeader = ({ userName }) => {
//   return (
//     <div className="group flex h-16 px-4 items-center gap-2 border-b">
//       <div className="p-2 rounded-full bg-gray-300">
//         <HiUser className="text-xl text-slate-500" />
//       </div>
//       <span className="text-xl font-semibold text-slate-600 max-w-fit truncate">
//         {userName}
//       </span>
//       <div
//         className="lg:hidden group-hover:inline ml-auto p-2 rounded hover-animation"
//         onClick={toggleSidebar}
//       >
//         <label htmlFor="my-drawer-2">
//           <HiChevronDoubleLeft className="text-xl text-slate-700" />
//         </label>
//       </div>
//     </div>
//   );
// };

const SidebarLinks = ({ active }) => {
  return (
    <div className="w-full flex flex-col">
      <SidebarLink
        title="Dashboard"
        icon={<MdOutlineSpaceDashboard />}
        link="/dashboard"
        isActive={active === "/dashboard"}
      />
      <SidebarLink
        title="Income"
        icon={<HiTrendingUp />}
        link="/income"
        isActive={active === "/income"}
      />
      <SidebarLink
        title="Expense"
        icon={<HiOutlineCash />}
        link="/expense"
        isActive={active === "/expense"}
      />
      <SidebarLink
        title="Balance"
        icon={<HiOutlineScale />}
        link="/balance"
        isActive={active === "/balance"}
      />

      <SidebarLink
        title="Invest"
        icon={<HiOutlineChartBar />}
        link="/invest"
        isActive={active === "/invest"}
      />

      <SidebarLink
        title="Settings"
        icon={<HiOutlineCog />}
        link="/settings"
        isActive={active === "/settings"}
      />
    </div>
  );
};

const SidebarLink = ({ title, icon, link, isActive }) => {
  return (
    <Link passHref href={link || ""}>
      <div
        className={`group p-2 flex items-center cursor-pointer hover:opacity-75 ${
          isActive ? "bg-gray-300" : "bg-transparent"
        } `}
      >
        <i className="icons-main px-4">{icon}</i>
        <span className="font-medium text-slate-700">{title}</span>
      </div>
    </Link>
  );
};

const SidebarRecentFollow = () => {
  return (
    <div className="hidden lg:flex w-full flex-col border-y-2">
      <SidebarLabel label={"recent follows"} />
      <SidebarLink title={"User1"} icon={<HiUser />} />
      <SidebarLink title={"User1"} icon={<HiUser />} />
      <SidebarLink title={"User1"} icon={<HiUser />} />
      <SidebarLink title={"User1"} icon={<HiUser />} />
      <SidebarLink title={"User1"} icon={<HiUser />} />
      <SidebarLink title={"User1"} icon={<HiUser />} />
      <SidebarLink title={"User1"} icon={<HiUser />} />
    </div>
  );
};

const SidebarLabel = ({ label }) => {
  return (
    <div className="group p-2 flex items-center">
      <span className="text-sm font-semibold text-gray-500">{label}</span>
    </div>
  );
};
