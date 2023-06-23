import react, { useState, useEffect } from "react";
import { HiDotsHorizontal, HiOutlineCollection } from "react-icons/hi";

const InputCardHeader = ({ title }) => {
  return (
    <div className="flex items-center">
      <div className="grow flex items-center">
        <HiOutlineCollection className="text-slate-700 cursor-pointer" />
        <span className=" mx-4 text-sm text-slate-500 font-semibold">
          {title}
        </span>
      </div>
      <div className="flex gap-2">
        <HiDotsHorizontal />
      </div>
    </div>
  );
};

export default InputCardHeader;
