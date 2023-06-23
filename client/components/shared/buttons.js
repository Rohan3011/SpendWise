import {
  HiCheck,
  HiX,
  HiOutlineRefresh,
  HiOutlineCheck,
  HiArrowNarrowRight,
} from "react-icons/hi";

export const SubmitButton = ({ label, disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="grow bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-400 active:scale-95 font-semibold leading-6 text-sm shadow transition ease-in-out duration-150 disabled:cursor-not-allowed"
    >
      {label}
    </button>
  );
};

export const ProcessingButton = () => {
  return (
    <button className="grow inline-flex justify-center items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed">
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      {"Processing..."}
    </button>
  );
};

export const CompletedButton = (label) => {
  return (
    <button className="grow inline-flex justify-center items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded text-white bg-emerald-500 hover:bg-emerald-400 transition ease-in-out duration-150 cursor-not-allowed">
      <HiCheck className="-ml-1 mr-3 h-5 w-5 text-white" />
      {label}
    </button>
  );
};

export const FailedButton = ({ label }) => {
  return (
    <button className="grow inline-flex justify-center items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded text-white bg-red-500 hover:bg-red-400 transition ease-in-out duration-150 cursor-not-allowed">
      <HiX className="-ml-1 mr-3 h-5 w-5 text-white" />

      {label}
    </button>
  );
};

export const ResetButton = ({ label, callback }) => {
  return (
    <button
      onClick={callback}
      type={"reset"}
      className="grow inline-flex justify-center items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded text-white bg-red-500 hover:bg-red-400 transition ease-in-out duration-150"
    >
      <HiOutlineRefresh className="-ml-1 mr-3 h-5 w-5 text-white" />
      {label}
    </button>
  );
};

export const SuccessButton = ({ label, callback }) => {
  return (
    <button
      onClick={callback}
      className="grow inline-flex justify-center items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded text-white bg-green-500 hover:bg-green-400 transition ease-in-out duration-150"
    >
      <HiOutlineCheck className="-ml-1 mr-3 h-5 w-5 text-white" />
      {label}
    </button>
  );
};

export const RedirectButton = ({ label, callback }) => {
  return (
    <button
      onClick={callback}
      className="grow inline-flex justify-center items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded text-white bg-fuchsia-500 hover:bg-fuchsia-400 transition ease-in-out duration-150"
    >
      <HiOutlineSparkles className="-ml-1 mr-3 h-5 w-5 text-white" />
      {label}
    </button>
  );
};
