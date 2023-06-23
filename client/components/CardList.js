import React from "react";
import Card from "./Card";
import {
  HiOutlineScale,
  HiTrendingUp,
  HiOutlineCash,
  HiOutlineChartBar,
} from "react-icons/hi";

const CardList = () => {
  return (
    <div className="p-4 grid grid-flow-row sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card
        title={"BALANCE"}
        value={"2"}
        amount={"$30k"}
        color={"fuchsia"}
        icon={<HiOutlineScale />}
        link={"/balance"}
        increase={1}
      />
      <Card
        title={"INCOME"}
        value={"12"}
        amount={"$22k"}
        color={"blue"}
        icon={<HiTrendingUp />}
        link={"/income"}
        increase={-1}
      />
      <Card
        title={"EXPENSE"}
        value={"5"}
        amount={"$42k"}
        color={"orange"}
        icon={<HiOutlineCash />}
        link={"/expense"}
        increase={1}
      />
      <Card
        title={"INVESTMENT"}
        value={"0"}
        amount={"$0"}
        color={"cyan"}
        icon={<HiOutlineChartBar />}
        link={"/invest"}
        increase={0}
      />
    </div>
  );
};

export default CardList;
