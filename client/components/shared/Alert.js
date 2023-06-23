import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { HiX } from "react-icons/hi";

export default function Alert({ variant = "default" }) {
  return (
    <AlertContainer variant={variant}>
      <p>random gibberish</p>
      <button></button>
    </AlertContainer>
  );
}

function AlertContainer({ children, variant }) {
  const [isShowing, setIsShowing] = useState(true);

  const handleClose = () => setIsShowing(false);

  return (
    <Transition
      show={isShowing}
      enter="transition duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={`${variant ?? "bg-gray-100 text-gray-500 border-gray-300"} 
 w-full h-12 p-4 flex items-center border-2 rounded`}
      >
        {children}
        <button
          onClick={handleClose}
          className={`group ml-auto rounded p-1 transition-all duration-200 hover:opacity-80 text-gray-500`}
        >
          <HiX className="group-hover:scale-110" />
        </button>
      </div>
    </Transition>
  );
}
