import Head from "next/head";
import Signup from "../components/Signup";

function SignupPage() {
  return (
    <div>
      <Head>
        <title>Expenditure | Signup</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-roboto">
        <Signup />
      </div>
    </div>
  );
}

export default SignupPage;
