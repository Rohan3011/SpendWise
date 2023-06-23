import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="flex flex-col p-8 md:px-[100px] h-screen w-full "
      >
        <InfoText />
        <InfoImages />
      </div>
      <Extra />
    </>
  );
};

export default Home;

const InfoText = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-32 pb-20  gap-4">
      <h1 className="text-xl md:text-6xl text-center font-extrabold text-slate-800 leading-snug md:leading-tight">
        {"SpendWise, "}
        <span className="text-blue-500">
          {"simple & blazingly fast personal finance app"}
        </span>
      </h1>
      <h4 className="text-slate-500  text-lg md:text-xl">
        Keep track of where your money is going, organize your expenses, and see
        everything in one place.
      </h4>
      <InfoTextActions />
    </div>
  );
};

const InfoImages = () => {
  return (
    <div className="grow flex items-center justify-center overflow-x-auto sm:overflow-visible">
      <div className="w-full m-4 h-[630px]  mockup-window border bg-base-300">
        <div className="flex justify-center bg-base-200">Hello!</div>
      </div>
    </div>
  );
};

const InfoTextActions = () => {
  return (
    <div className="w-full max-w-sm mx-2 flex justify-center p-2">
      <Link passHref href="/dashboard">
        <button className="grow group flex items-center justify-center gap-4 text-slate-100 bg-blue-500  font-semibold p-2 max-w-[250px] rounded-lg hover:bg-blue-400 active:outline outline-blue-200 ">
          check it out
          <span className="text-xl group-hover:translate-x-1.5 duration-200">
            <HiArrowRight />
          </span>
        </button>
      </Link>
    </div>
  );
};

const Extra = () => {
  return <div className="hidden md:block min-h-[500px] bg-slate-700"></div>;
};
