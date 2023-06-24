import Head from "next/head";
import InputCard from "../components/forms";
import Body from "../components/Body";
import PageTitle from "../components/PageTitle";
import IncomeTable from "../components/Table";
import MyAreaChart from "@components/charts/area-chart";
import Shell from "@components/shared/Shell";
import { IncomeForm, InputCardHeader } from "@components/forms/income-form";
import MyPieChart from "@components/charts/pie-chart";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title> Expenditure | Income </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <PageTitle title={"Income"} link={"/income"} />
        <div className="flex flex-col lg:flex-row gap-4 p-4">
          <Shell className="w-full max-w-lg">
            <InputCardHeader title={"Add income"} />
            <IncomeForm />
          </Shell>
          <Shell title="Income Distribution" className="flex-1">
            {/* <MyAreaChart /> */}
            <MyPieChart />
          </Shell>
        </div>
        <IncomeTable title={"Recent Incomes"} />
      </Body>
    </div>
  );
}
