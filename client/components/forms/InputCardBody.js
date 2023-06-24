import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const InputCardBody = ({ amount, handleIt }) => {
  {
    return (
      <div className="grow flex flex-col space-y-4 mt-2">
        <InputAmount amount={amount} handleChange={handleIt} />
        <InputIncomeSource />
        <Dropdown />
        <InputIncomeType />
        <InputCardNote />
      </div>
    );
  }
};

export default InputCardBody;

const InputAmount = ({ amount, handleChange }) => {
  return (
    <section className="flex items-center gap-2">
      <input
        type={"number"}
        onChange={handleChange}
        value={amount}
        readOnly
        placeholder={"add income"}
        className="grow border focus:shadow-lg outline-slate-500 shadow-inner p-2 rounded text-xl text-slate-700 font-semibold"
      />
      <InputDate />
    </section>
  );
};

const InputIncomeType = () => {
  return (
    <section className="flex gap-2">
      <select className="grow outline-slate-500 p-1 text-slate-500 font-medium">
        <option defaultValue>Income Type</option>
        <option className="">Salary</option>
        <option className="">Side Hustle</option>
        <option className="">Bonus</option>
        <option className="">Gift</option>
      </select>
      <NewButton />
    </section>
  );
};

const InputIncomeSource = () => {
  return (
    <section className="flex gap-2">
      <select className="grow outline-slate-500 p-1 text-slate-500 font-medium">
        <option defaultValue>Source</option>
        <option className="">Salary</option>
        <option className="">Side Hustle</option>
        <option className="">Thief</option>
      </select>
      <NewButton />
    </section>
  );
};

const InputDate = () => {
  return (
    <section className="px-4 text-slate-500">
      <input type={"date"} className="outline-slate-500" />
    </section>
  );
};

const InputCardNote = () => {
  return (
    <div className="mx-2 flex border-b">
      <textarea
        className=" grow focus:shadow-lg outline-slate-500 p-2 rounded text-xl text-slate-700 font-medium"
        placeholder="note"
      />
    </div>
  );
};

// utilites
const SelectCurrency = () => {
  return (
    <select className="outline-none p-1 text-slate-700">
      <option selected>USD</option>
      <option className="">INR</option>
      <option className="">PKR</option>
      <option className="">EUR</option>
      <option className="">RUB</option>
      <option className="">YEN</option>
    </select>
  );
};

const NewButton = () => {
  return (
    <button className="flex items-center gap-1 hover:bg-gray-200  px-4 rounded text-sm text-slate-500">
      <AiOutlinePlus className="text-lg" />
      <span>New</span>
    </button>
  );
};

const Dropdown = () => {
  return (
    <div className="dropdown group text-slate-500 bg-sky-500">
      <label tabIndex="1" className="m-1 w-full bg-red-400">
        {"Income Sources"}
      </label>
      <ul
        tabIndex="0"
        className="dropdown-content menu p-2 shadow-md border bg-base-100 rounded-lg w-72 divide-y"
      >
        <li className="p-1">Item 1</li>
        <li className="p-1">Item 2 </li>
      </ul>
    </div>
  );
};
