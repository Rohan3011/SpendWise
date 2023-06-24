import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { close, custom, toggle } from "../redux/slices/sidebarSlice";
import { Transition } from "@headlessui/react";
import useWindowSize from "../hooks/WindowSize";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { cn } from "lib/utils";
import SiteFooter from "./shared/site-footer";

const Body = ({ children, alert }) => {
  const sidebar = useSelector((state) => state.sidebar.visible);
  const dispatch = useDispatch();

  const { isMobile } = false;

  // useEffect(() => dispatch(custom(!isMobile)), [isMobile]);

  return (
    <div className="h-full overflow-hidden bg-white">
      <div className="flex w-full overflow-hidden">
        <DesktopSidebar isShowing={sidebar} />
        <main
          className={cn(
            "grow h-full transition-all ease-out flex flex-col pb-10",
            sidebar ? "lg:mx-6" : "lg:mx-14"
          )}
        >
          <Header />
          {children}
        </main>
      </div>
      <SiteFooter />
    </div>
  );
};

export default Body;

const MobileSidebar = ({ isShowing, hide }) => {
  return (
    /* The `show` prop controls all nested `Transition.Child` components. */
    <Transition show={isShowing}>
      {/* Background overlay */}
      <Transition.Child
        as={Fragment}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className="fixed lg:hidden w-full h-full backdrop-blur-sm z-10 transition-all delay-75 "
          onClick={hide}
        ></div>
      </Transition.Child>

      {/* Sliding sidebar */}
      <Transition.Child
        as={Fragment}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <aside className="bg-stone-100 min-h-screen z-50 fixed">
          <Sidebar />
        </aside>
      </Transition.Child>
    </Transition>
  );
};

const DesktopSidebar = ({ isShowing }) => {
  return (
    <Transition
      show={isShowing}
      as={Fragment}
      enter="transition ease-in-out duration-300 transform"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-300 transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <aside className="bg-stone-100 min-h-screen z-50 relative ">
        <Sidebar />
      </aside>
    </Transition>
  );
};
