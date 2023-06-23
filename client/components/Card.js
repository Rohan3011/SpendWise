import Link from "next/link";
import React from "react";
import {
  HiOutlineChevronUp,
  HiOutlineChevronDown,
  HiOutlineChevronRight,
} from "react-icons/hi";

const Card = ({ title, value, amount, increase, icon, color, link }) => {
  return (
    <div className="flex flex-col gap-2 w-full h-[150px] p-4 bg-white shadow rounded-lg card-animation">
      <CardHeader title={title} value={value} increase={increase} />
      <CardBody amount={amount} />
      <CardFooter link={link} icon={icon} color={color} />
    </div>
  );
};

export default Card;

const CardHeader = ({ title, increase, value }) => {
  return (
    <div className="flex">
      {increase > 0 ? (
        <>
          <span className="grow text-slate-500 font-semibold">{title}</span>
          <div className="flex items-center gap-2 text-green-600">
            <HiOutlineChevronUp className="" />
            <span>{value} %</span>
          </div>
        </>
      ) : increase == 0 ? (
        <>
          <span className="grow text-slate-500 font-semibold">{title}</span>
          <div className="flex items-center gap-2 text-slate-600">
            <HiOutlineChevronRight className="" />
            <span>{value} %</span>
          </div>
        </>
      ) : (
        <>
          <span className="grow text-slate-500 font-semibold">{title}</span>
          <div className="flex items-center gap-2 text-red-600">
            <HiOutlineChevronDown className="" />
            <span>{value} %</span>
          </div>
        </>
      )}
    </div>
  );
};

const CardBody = ({ amount }) => {
  return (
    <div className="grow flex">
      <span className="text-3xl font-semibold text-slate-700">{amount}</span>
    </div>
  );
};

const CardFooter = ({ icon, link }) => {
  return (
    <div className={`flex items-center`}>
      <Link passHref href={link}>
        <a className="text-slate-600 border-b border-white hover:border-slate-500 text-xs">
          see details
        </a>
      </Link>
      <Link passHref href={link}>
        <div className={`ml-auto bg-stone-100 p-2 rounded-lg cursor-pointer`}>
          <div className={`text-slate-700 text-xl `}>{icon}</div>
        </div>
      </Link>
    </div>
  );
};
