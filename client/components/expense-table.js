import React, { useEffect } from "react";
import PageSubHeader from "./PageSubHeader";
import { ActionIcon, Button, LoadingOverlay, Table } from "@mantine/core";
import { HiRefresh } from "react-icons/hi";
import { useGetAllExpenseQuery } from "redux/api/expenseSlice";

const ExpenseTable = ({ title }) => {
  const { data: incomeData, isLoading, refetch } = useGetAllExpenseQuery();

  const tableHeader = ["Date", "Amount", "Source", "Tags", "Note"];

  return (
    <div className="p-4">
      <PageSubHeader title={title} />
      <LoadingOverlay visible={isLoading} />
      {incomeData?.length > 0 ? (
        <Table striped highlightOnHover withBorder withColumnBorders>
          <thead>
            <tr>
              {tableHeader.map((val, idx) => (
                <th key={idx}>{val}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {incomeData?.map((val, idx) => (
              <tr key={idx}>
                <td>{new Date(val.date).toISOString().slice(0, 10)}</td>
                <td>{val.amount}</td>
                <td>{val.source}</td>

                <td>{val.tags?.join(", ")}</td>
                <td>{val.note}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="flex gap-1">
          <p className="italic text-slate-600">No recent transactions</p>
          <ActionIcon title="refresh" disabled={isLoading} onClick={refetch}>
            <HiRefresh className={isLoading ? "animate-spin" : ""} />
          </ActionIcon>
        </div>
      )}
    </div>
  );
};

export default ExpenseTable;
