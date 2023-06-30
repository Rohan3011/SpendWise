import Head from "next/head";
import Body from "../components/Body";
import PageTitle from "../components/PageTitle";
import OnBoarding from "@components/onboarding";
import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <PageTitle title={"Balance"} link={"/balance"} />
        {/* <WorkingOnIt /> */}
        <main className="relative flex justify-center items-center bg-gray-100">
          <OnBoarding />
        </main>
      </Body>
    </div>
  );
}
