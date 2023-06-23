import React, { useEffect } from "react";
import PageSubHeader from "./PageSubHeader";
import { useGetIncomeQuery } from "../redux/api/incomeApiSlice";

const Table = ({ title }) => {
  const { data } = useGetIncomeQuery();

  const tableHeader = ["Date", "Amount", "Source", "Tags", "Note"];

  return (
    <div className="p-4">
      <PageSubHeader title={title} />
      <table className="w-full bg-white">
        <TableHeader header={tableHeader} />
        <tbody className="transform animate-none">
          {data?.map((val, idx) => {
            return (
              <TableRow
                key={idx}
                date={new Date(val.date)}
                amount={val.amount}
                source={val.source}
                type={val.tags}
                note={val?.note}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

const TableHeader = ({ header }) => {
  return (
    <thead className="bg-stone-50 text-slate-500 font-medium">
      <tr className="">
        {header.map((value, key) => {
          return (
            <td className="p-1 w-fit border" key={key}>
              <span className="" type="text">
                {value}
              </span>
            </td>
          );
        })}
      </tr>
    </thead>
  );
};

const TableRow = (props) => {
  return (
    <tr className="w-full">
      {Object.entries(props).map((val, key) => {
        return <TableColumn key={key} value={val} />;
      })}
    </tr>
  );
};

const TableColumn = ({ value }) => {
  const handleIt = (val) => {
    (e) => console.log(val);
  };
  return (
    <td className="border rounded whitespace-nowrap tracking-wider">
      <input
        onChange={handleIt}
        className="input-cell w-full text-slate-700"
        type="text"
        value={value[1]}
      />
    </td>
  );
};
